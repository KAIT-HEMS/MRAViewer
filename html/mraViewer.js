// mraViewer.js
// 2020.11.06

let globalVersionInfo = '2020-11-06'
let globalNotes = {};   // 備考欄のデータを保持するため
let globalBitmaps = {};   // value range欄のbitmapデータを保持するため
var vm = new Vue({
    el: '#app',
    data: {
        rbView: 'specSheet',       // selected radio button for sheet selection(pending)
        rbLanguage: 'japanese',    // selected radio button for language selection
        appendix_list: [],         // array of each property info
        packetDetail: '',          // gabage code from SSNG
        deviceSelected: '0x0288',  // selected device by pull down menu with default value
        deviceList: [],            // list of device objects for a pull down menu
        releaseSelected: '',       // selected release by pull down menu
        releaseList: [],           // list of releases for a pull down menu
    },
    methods: {
        updateDevice: function () {
            console.log("deviceSelected: ", this.deviceSelected);
            refresh();
        },
        updateRelease: function () {
            console.log("updateRelease: ", this.releaseSelected);
            refresh();
        },
        updateLanguage: function () {
            console.log("updateLanguage, rbLanguage:", this.rbLanguage);
            refresh();
        },
        // card headerのi buttonをクリックしたときの動作
        informations: function () {
            const message = "MRA Viewer: " + globalVersionInfo +
                            "\nJSON data: " + jsonData.metaData.date + 
                            ", Release:" + jsonData.metaData.release + 
                            ", Version:" + jsonData.metaData.version;
            window.alert(message);
        },
        // 値域欄のbitmapをクリックしたときの動作
        showBitmap: function (bitmapEpc) {
        	window.localStorage.setItem('bitmap-title', 'EPC = ' + bitmapEpc);
        	window.localStorage.setItem('bitmap-content', globalBitmaps[bitmapEpc]);
        	window.open('bitmap.html', 'bitmap', 'width=600,height=300');
        },
        // 備考欄の*をクリックしたときの動作
        showNote: function (noteEpc) {
        	window.localStorage.setItem('note-title', 'Note for EPC = ' + noteEpc);
        	window.localStorage.setItem('note-content', globalNotes[noteEpc]);
        	window.open('note.html', 'note', 'width=600,height=300');
        }
    }
});

init();
refresh();

function init() {
    console.log("init() JSON data Date:", jsonData.metaData.date, "Relase:", jsonData.metaData.release, "Version:", jsonData.metaData.version);
    const latestRelease = jsonData.metaData.release;
    vm.releaseSelected = latestRelease;
}

function refresh() {
    const latestRelease = jsonData.metaData.release;
    const selectedEoj = vm.deviceSelected;
    let selectedRelease = vm.releaseSelected;
    const selectedView = vm.rbView;
    const selectedLanguage = vm.rbLanguage;
    console.log("refresh() EOJ:", selectedEoj, " Release:", selectedRelease, " View:", selectedView, "Language:", selectedLanguage);

    // Appendixのrelease選択の要素を作成
    let firstRelease = 'Z';
    console.log("selectedEoj:",selectedEoj);
    console.log("devices:",jsonData.devices);
    if ((selectedEoj == "0x0EF0") || (selectedEoj == "0x0000")) {
        firstRelease = "A";
    } else if (!jsonData.devices[selectedEoj].oneOf) {
        firstRelease = jsonData.devices[selectedEoj].validRelease.from;
    } else {
        for (let object of jsonData.devices[selectedEoj].oneOf) {
            firstRelease = ( object.validRelease.from < firstRelease) ? object.validRelease.from : firstRelease;
        }
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let releaseList = [];
    let i =0;
    while (alphabet[i] != firstRelease) {
        i++
    }
    while (alphabet[i] != latestRelease) {
        releaseList.push({name:alphabet[i]});
        i++
    }
    releaseList.push({name:latestRelease});
    vm.releaseList = releaseList.reverse();
    
    // selectedReleaseがreleaseList内にない場合は、latestReleaseにする
    selectedRelease = ((firstRelease <= selectedRelease) && (selectedRelease <= latestRelease)) ? selectedRelease : latestRelease;
    vm.releaseSelected = selectedRelease;

    // 機器オブジェクトの選択の要素を作成
    let deviceList = [{ name:"Super class", eoj:"0x0000"}, { name:"0x0EF0 Node profile", eoj:"0x0EF0"}];
    for (const eoj of Object.keys(jsonData.devices)) {
        if (!jsonData.devices[eoj].oneOf) {
            if (vm.rbLanguage == 'japanese') {
                deviceList.push({name:(eoj + ' ' + jsonData.devices[eoj].className.ja), eoj:eoj});
            } else {
                deviceList.push({name:(eoj + ' ' + jsonData.devices[eoj].className.en), eoj:eoj});
            }
        } else {
            for (let object of jsonData.devices[eoj].oneOf) {
                const validFrom = object.validRelease.from;
                const validTo = (object.validRelease.to == 'latest') ? latestRelease : object.validRelease.to;
                if ((validFrom <= selectedRelease) && ( selectedRelease <= validTo )) {
                    if (vm.rbLanguage == 'japanese') {
                        deviceList.push({name:(eoj + ' ' + object.className.ja), eoj:eoj});
                    } else {
                        deviceList.push({name:(eoj + ' ' + object.className.en), eoj:eoj});
                    }
                    break;
                }
            }
        }
    }
    console.log("deviceList:", deviceList);
    vm.deviceList = deviceList;    

    // 選択された機器のDevice Objectを作成（その後の作業で中身をいじるため、コピーする）
    let deviceObjectOriginal = getDeviceDescriptionObj(selectedEoj, selectedRelease);
    let deviceObject = JSON.parse(JSON.stringify(deviceObjectOriginal));    
    let id = 0; // index for v-for.
    vm.appendix_list = [];
    for (const [key, property] of Object.entries(deviceObject.elProperties)) {
        let indexObject = null;
        let indexOneOf = null;        
        processOneOf(key, property, id, indexObject, indexOneOf);
    }
}

function processOneOf(key, property, id, indexObject, indexOneOf){
    if (property.data.oneOf) {
        const arrayOneOf = property.data.oneOf;
        for (indexOneOf =0; indexOneOf < arrayOneOf.length; indexOneOf++) {
            property.data = arrayOneOf[indexOneOf];
            createAppendixList(key, property, id, indexObject, indexOneOf);
            id++;
        }
    } else {
        const index = 0;
        createAppendixList(key, property, id, indexObject, indexOneOf);
        id++;
    }    
}


// function: 表示データの作成
//      入力データをもとにappendixを作成し、vm.appendix_listにpushする
//      if ((indexObject == undefined) && (indexOneOf == undefined)) { 全て表示 }
//      else if ((indexObject == 0) && (indexOneOf == 0)) { 全て表示 }
//      else if ((indexObject !== 0) && (indexOneOf == 0)) { 値域,データ型,データサイズ,単位を表示 }
//      else if ((indexObject !== 0) && (indexOneOf !== 0)) { 値域,単位を表示 }
// input: 
//      key:string, EPC(example '0x80')
//      property: object, EL Device Descriptionのproperty object
//      id: number, Vue.jsがv-forで使用するid
//      indexObject:number, objectのelementのindex
//      indexOneOf: number, oneOfのelementのindex
function createAppendixList(key, property, id, indexObject, indexOneOf) {
    let appendix = {};
    let pushFlag = true;
    appendix.epc = key;
    if (vm.rbLanguage == 'japanese') {
        appendix.name = property.propertyName.ja;
    } else {
        appendix.name = property.propertyName.en;
    }
    // access rule Set, Get
    switch (property.accessRule.get) {
        case 'notApplicable':
            switch (property.accessRule.set) {
                case 'notApplicable':
                    appendix.accessRule = '-';
                    appendix.accessRuleRequired = '';
                    break;
                case 'required':
                    appendix.accessRule = 'Set';
                    appendix.accessRuleRequired = '○';
                    break;
                case 'required_c':
                    appendix.accessRule = 'Set';
                    appendix.accessRuleRequired = '○*';
                    break;
                case 'optional':
                    appendix.accessRule = 'Set';
                    appendix.accessRuleRequired = '';
                    break;
                default:
                    console.log('Error: accessRule is ', property.accessRule.set);
            }
            break;
        case 'required':
            switch (property.accessRule.set) {
                case 'notApplicable':
                    appendix.accessRule = 'Get';
                    appendix.accessRuleRequired = '○';
                    break;
                case 'required':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○';
                    break;
                case 'required_c':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○*';
                    break;
                case 'optional':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○Get';
                    break;
                default:
                    console.log('Error: accessRule is ', property.accessRule.set);
            }
            break;
        case 'required_c':
            switch (property.accessRule.set) {
                case 'notApplicable':
                    appendix.accessRule = 'Get';
                    appendix.accessRuleRequired = '○*';
                    break;
                case 'required':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○*';
                    break;
                case 'required_c':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○*';
                    break;
                case 'optional':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○*Get';
                    break;
                default:
                    console.log('Error: accessRule is ', property.accessRule.set);
            }
            break;
        case 'optional':
            switch (property.accessRule.set) {
                case 'notApplicable':
                    appendix.accessRule = 'Get';
                    appendix.accessRuleRequired = '';
                    break;
                case 'required':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○Set';
                    break;
                case 'required_c':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '○*Set';
                    break;
                case 'optional':
                    appendix.accessRule = 'Set/Get';
                    appendix.accessRuleRequired = '';
                    break;
                default:
                    console.log('Error: accessRule is ', property.accessRule.set);
            }
            break;
        default:
            console.log('Error: accessRule is ', property.accessRule.get);
    }
    // access rule Anno
    if (property.accessRule.inf == "required") {
        appendix.inf = "○";
    }
    if (property.note) {
        appendix.note = key;
        if (vm.rbLanguage == 'japanese') {
            globalNotes[key] = property.note.ja;
        } else {
            globalNotes[key] = property.note.en;
        }
    } else {
        appendix.note = 'empty';
    }
    // value range
    switch (property.data.type) {
        case 'state':
            appendix.propType = 'state';
            appendix.range = property.data.enum;
            appendix.dataType = 'unsigned char';
            appendix.dataSize = property.data.size;
            break;
        case 'number':
            appendix.propType = 'number';
            if (property.data.enum) {
                appendix.range = property.data.enum;
                console.log(appendix.range);
            } else {
                const multiple = property.data.multipleOf ? property.data.multipleOf : 1;
                // ３けた区切りのコンマを追加 (Intl.NumberFormat)
                const digit = (new Intl.NumberFormat().format(property.data.minimum * multiple)) + ' ~ ' + (new Intl.NumberFormat().format(property.data.maximum * multiple));
                const hex = '0x' + property.data.minimum.toString(16).toUpperCase() + ' ~ 0x' + property.data.maximum.toString(16).toUpperCase();
                appendix.range = digit + ' ' + hex;
            }
            appendix.dataType = property.data.format;
            appendix.unit = property.data.unit;
            switch (property.data.format) {
                case 'int8':
                    appendix.dataSize =1;
                    appendix.dataType = 'signed char';
                    break;
                case 'uint8':
                    appendix.dataSize =1;
                    appendix.dataType = 'unsigned char';
                    break;
                case 'int16':
                    appendix.dataSize =2;
                    appendix.dataType = 'signed short';
                    break;
                case 'uint16':
                    appendix.dataSize =2;
                    appendix.dataType = 'unsigned short';
                    break;
                case 'int32':
                    appendix.dataSize =4;
                    appendix.dataType = 'signed long';
                    break;
                case 'uint32':
                    appendix.dataSize =4;
                    appendix.dataType = 'unsigned long';
                    break;
                default:
            }
            break;
        case 'numericValue':
            appendix.propType = 'numericValue';
            appendix.range = property.data.enum;
            appendix.dataType = 'unsigned char';
            appendix.dataSize = property.data.size;
            break;
        case 'level':
            appendix.propType = 'level';
            let maxValue = parseInt(property.data.base) + property.data.maximum - 1;
            appendix.range = property.data.base + ' ... 0x' + toStringHex(maxValue, 1) + ': Level';
            appendix.dataType = 'unsigned char';
            appendix.dataSize = 1;
            break;
        case 'bitmap':
            appendix.propType = 'bitmap';
            appendix.range = 'bitmap';
            appendix.bitmap = key;
            globalBitmaps[key] = JSON.stringify(property.data.bitmaps, null , 4);
            appendix.dataType = 'unsigned char';
            appendix.dataSize = property.data.size;
            break;
        case 'date-time':
            appendix.propType = 'date-time';
            appendix.dataType = 'unsigned char';
            appendix.dataSize = (property.data.size) ? property.data.size : 7;
            switch (appendix.dataSize) {
                case 2:
                    appendix.range = 'YYYY YYYY:0~9999 0x0000~0x270F';
                    break;
                case 3:
                    appendix.range = 'YYYY:MM YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C';
                    break;
                case 4:
                    appendix.range = 'YYYY:MM:DD YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F';
                    break;
                case 5:
                    appendix.range = 'YYYY:MM:DD:hh YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17';
                    break;
                case 6:
                    appendix.range = 'YYYY:MM:DD:hh:mm YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17, mm:0~59 0x00~0x3B';
                    break;
                case 7:
                    appendix.range = 'YYYY:MM:DD:hh:mm:ss YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17, mm:0~59 0x00~0x3B, ss:0~59 0x00~0x3B';
                    break;
                default:
                    appendix.range = 'date-time(default)';
            }
            break;
        case 'time':
            appendix.propType = 'time';
            appendix.dataSize = (property.data.size) ? property.data.size : 3;
            const hourMax = (property.data.maximumOfHour) ? property.data.maximumOfHour : 23;
            switch (appendix.dataSize) {
                case 1:
                    appendix.dataType = 'unsigned char x 1';
                    appendix.range = 'HH HH:0~' + hourMax + ' 0x00~0x' + hourMax.toString(16).toUpperCase();
                    break;
                case 2:
                    appendix.dataType = 'unsigned char x 2';
                    appendix.range = 'HH:MM HH:0~' + hourMax + ' 0x00~0x' + hourMax.toString(16).toUpperCase() + ', MM:0~59 0x00~0x3B';
                    break;
                case 3:
                    appendix.dataType = 'unsigned char x 3';
                    appendix.range = 'HH:MM:SS HH:0~' + hourMax + ' 0x00~0x' + hourMax.toString(16).toUpperCase() + ', MM:0~59 0x00~0x3B, SS:0~59 0x00~0x3B';
                    break;
                default:
                    appendix.range = 'time';
            }
            break;
        case 'raw':
            appendix.propType = 'raw';
            appendix.range = '-';
            appendix.dataType = 'unsigned char';
            appendix.dataSize = (property.data.minSize == property.data.maxSize) ? (property.data.minSize) : (property.data.minSize + '-' + property.data.maxSize);
            break;
        case 'oneOf':
            appendix.propType = 'oneOf';
            console.log('case oneOf');
            break;
        case 'arrayHeader':
            appendix.propType = 'arrayHeader';
            const minItems = (property.data.minItems) ? property.data.minItems : 1;
            const itemCount = (property.data.minItems == property.data.maxItems) ? minItems : (minItems + ' ~ ' + property.data.maxItems);
            appendix.dataType = 'array:' + property.data.itemSize + 'byte X ' + itemCount;
            break;
        case 'array':
            // display array header
            const arrayHeaderProperty = {
                propertyName:property.propertyName, 
                accessRule:property.accessRule, 
                data:{
                    type:'arrayHeader', 
                    itemSize:property.data.itemSize, 
                    minItems:property.data.minItems, 
                    maxItems:property.data.maxItems
                }
            };
            processOneOf(key, arrayHeaderProperty, id, indexObject, indexOneOf);

            // display array data
            appendix.propType = 'array';
            property.data = property.data.items;
            processOneOf(key, property, id, (indexObject+1), indexOneOf);
            pushFlag = false;
            break;
        case 'objectHeader':
            appendix.propType = 'objectHeader';
            appendix.range = property.data.name + ': ';
            break;
        case 'object':
            const arrayObject = property.data.properties;
            indexObject = (indexObject === null) ? 0 : indexObject;
            for (let i=0; i < arrayObject.length; i++, indexObject++) {
                // display object header
                const objectTitle = (vm.rbLanguage == 'japanese') ? arrayObject[i].descriptions.ja : arrayObject[i].descriptions.en;
                const objectHeaderProperty = {
                    propertyName:property.propertyName, 
                    accessRule:property.accessRule, 
                    data:{
                        type:'objectHeader',
                        name:objectTitle
                    },
                    note:property.note
                };
                processOneOf(key, objectHeaderProperty, id, indexObject, indexOneOf);

                // display object data
                property.data = arrayObject[i].element;
                processOneOf(key, property, id, (indexObject+1), indexOneOf);
            }
            pushFlag = false;
            break;
        default:
            console.log('default', property.data.type);
    }
    if (property.data.multipleOf) {
        if (property.data.unit) {
            appendix.unit = property.data.multipleOf + ' ' + property.data.unit;
        } else {
            appendix.unit = property.data.unit;
        }
    }
    if (indexOneOf > 0) {
        appendix.epc = '';
        appendix.name = '';
        appendix.dataType = '';
        appendix.dataSize = '';
        appendix.accessRule = '';
        appendix.accessRuleRequired = '';
        appendix.inf = '';
        appendix.note = 'empty';    
    } else if ((indexObject > 0) &&  ((indexOneOf === null) || (indexOneOf === 0))) {
        appendix.epc = '';
        appendix.name = '';
        appendix.accessRule = '';
        appendix.accessRuleRequired = '';
        appendix.inf = '';
        appendix.note = 'empty';    
    }
    appendix.id = id;
    if (pushFlag === true) {
        vm.appendix_list.push(appendix);
    }
}
        
// 数値(number)を16進数表記の文字列に変換する
// 数値のbyte数は(bytes)
// example: toStringHex(10, 1) => "0A"
// example: toStringHex(10, 2) => "000A"
function toStringHex(number, bytes) {
  let str = number.toString(16).toUpperCase();
  while (str.length < 2*bytes) { str = "0" + str; }
      return str;
}

// stringに文字列を挿入
function strIns(str, idx, val){ // str:string（元の文字列）, idx:number（挿入する位置）, val:string（挿入する文字列）
    var res = str.slice(0, idx) + val + str.slice(idx);
    return res;
}

function hex2Array(hex) { // hex: string of this format 0xXXXX or XXXX
    if (hex.slice(0,2) != "0x") {
      hex = "0x" + hex;
    }
    let array =[];
    const bytes = (hex.length - 2)/2;
    for (let i=0; i<bytes; i++) {
      array.push(parseInt(hex.slice((i+1)*2,(i+1)*2+2), 16));
    }
    return array; // array: array of byte data
}

function packetMonitorShowPacketDetail(event){
	if (this.active_packet_id) {
		$('#' + this.active_packet_id).removeClass('active');
		this.active_packet_id = '';
	}
	let t = event.target;
	console.log("t.id: ",t.id);
    $('#' + t.id).addClass('active');
	this.active_packet_id = t.id;

	// 現在選択中のパケット ID
	let id_parts = this.active_packet_id.split('-');
	let pno = parseInt(id_parts[1], 10);
	
    // packetの解析結果の表示
	vm.packetDetail = analyzeData(dataLogArray[pno].data);
}

function packetMonitorUpDownList(event){
	event.preventDefault();
	event.stopPropagation();
	// 選択中のパケット行がなければ終了
	if (!this.active_packet_id) {
		return;
	}
	// 現在選択中のパケット ID
	let id_parts = this.active_packet_id.split('-');
	let pno = parseInt(id_parts[1], 10);

	let c = event.keyCode;
	let k = event.key;
	if (c === 38 || k === 'ArrowUp') {
		// 上矢印キー
		if (vm.rbOrder == "normalOrder") {
    		if (pno-- <0 ) {pno = 0}
		} else {
    		if (pno++ >= dataLogArray.length ) {pno = dataLogArray.length -1}		
		}
	} else if (c === 40 || k === 'ArrowDown') {
		// 下矢印キー
		if (vm.rbOrder == "normalOrder") {
    		if (pno++ >= dataLogArray.length ) {pno = dataLogArray.length -1}
		} else {
    		if (pno-- <0 ) {pno = 0}
		}
	} else {
		return;
	}
	// 遷移したパケット行にフォーカスする
	$('#packet-' + pno).focus();
}