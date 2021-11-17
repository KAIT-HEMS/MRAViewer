// mraViewer.js for mraViewer
// 2021.11.17
// MRA Viewer V1.0.0 b1
// Copyright (c) 2021 Kanagawa Institute of Technology
// Released under the MIT License.
'use strict';

let globalVersionInfo = "V1.0.0 2021-11-16";
let globalRemarks = {}; // 備考欄のデータを保持するため
let globalBitmaps = {}; // value range欄のbitmapデータを保持するため
var vm = new Vue({
  el: "#app",
  data: {
    rbView: "specSheet", // selected radio button for sheet selection(pending)
    rbLanguage: "japanese", // selected radio button for language selection
    rbName: "name-off", // selected radio button for language selection
    appendix_list: [], // array of each property info
    packetDetail: "", // gabage code from SSNG
    deviceSelected: "0x0EF0", // selected device by pull down menu with default value
    deviceList: [], // list of device objects for a pull down menu
    releaseSelected: "", // selected release by pull down menu
    releaseList: [], // list of releases for a pull down menu
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
    updateName: function () {
      console.log("updateName, rbName:", this.rbName);
      refresh();
    },
    // card headerのi buttonをクリックしたときの動作
    informations: function () {
      const message =
        "MRA Viewer: " +
        globalVersionInfo +
        "\nJSON data: " +
        jsonData.metaData.date +
        ", Release:" +
        jsonData.metaData.release +
        "\nData Version:" +
        jsonData.metaData.dataVersion +
        ", Format Version:" +
        jsonData.metaData.formatVersion;
      window.alert(message);
    },
    // 値域欄のbitmapをクリックしたときの動作
    showBitmap: function (bitmapEpc) {
      window.localStorage.setItem("bitmap-title", "EPC = " + bitmapEpc);
      window.localStorage.setItem("bitmap-content", globalBitmaps[bitmapEpc]);
      window.open("bitmap.html", "bitmap", "width=600,height=300");
    },
    // 備考欄の*をクリックしたときの動作
    showRemark: function (remarkEpc) {
      window.localStorage.setItem("remark-title", "Remark for EPC = " + remarkEpc);
      window.localStorage.setItem("remark-content", globalRemarks[remarkEpc]);
      window.open("remark.html", "remark", "width=600,height=300");
    },
  },
});

init();
refresh();

function init() {
  console.log(
    "init() JSON data Date:",
    jsonData.metaData.date,
    "Relase:",
    jsonData.metaData.release,
    "Version:",
    jsonData.metaData.version
  );
  const latestRelease = jsonData.metaData.release;
  vm.releaseSelected = latestRelease;
}

function refresh() {
  const latestRelease = jsonData.metaData.release;
  const selectedEoj = vm.deviceSelected;
  let selectedRelease = vm.releaseSelected;
  const selectedView = vm.rbView;
  const selectedLanguage = vm.rbLanguage;
  console.log(
    "refresh() EOJ:",
    selectedEoj,
    " Release:",
    selectedRelease,
    " View:",
    selectedView,
    "Language:",
    selectedLanguage
  );

  // Appendixのrelease選択の要素を作成
  let firstRelease = "Z";
  console.log("selectedEoj:", selectedEoj);
  console.log("devices:", jsonData.devices);
  if (selectedEoj == "0x0EF0" || selectedEoj == "0x0000") {
    firstRelease = "A";
  } else  {
    for (const device of jsonData.devices) {
      if (device.eoj == selectedEoj) {
        firstRelease = device.validRelease.from;
      }
    }
  }
    // } else {
  //   for (let object of jsonData.devices[selectedEoj].oneOf) {
  //     firstRelease =
  //       object.validRelease.from < firstRelease
  //         ? object.validRelease.from
  //         : firstRelease;
  //   }
  // }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let releaseList = [];
  let i = 0;
  while (alphabet[i] != firstRelease) {
    i++;
  }
  while (alphabet[i] != latestRelease) {
    releaseList.push({ name: alphabet[i] });
    i++;
  }
  releaseList.push({ name: latestRelease });
  vm.releaseList = releaseList.reverse();

  // selectedReleaseがreleaseList内にない場合は、latestReleaseにする
  selectedRelease =
    firstRelease <= selectedRelease && selectedRelease <= latestRelease
      ? selectedRelease
      : latestRelease;
  vm.releaseSelected = selectedRelease;

  // 機器オブジェクトの選択の要素 (deviceList) を作成
  // Super class and Node profile
  const nameSuperClass =
    vm.rbLanguage == "japanese" ? "スーパークラス" : "Super class";
  let nameNodeProfile =
    vm.rbLanguage == "japanese" ? "0x0EF0 ノードプロファイル" : "Node profile";
  nameNodeProfile =
    vm.rbName == "name-on" ? nameNodeProfile + "nodeProfile" : nameNodeProfile;
  let deviceList = [
    { name: nameSuperClass, eoj: "0x0000" },
    { name: nameNodeProfile, eoj: "0x0EF0" }
    // { name: "Super class", eoj: "0x0000" },
    // { name: "0x0EF0 Node profile", eoj: "0x0EF0" },
  ];
    // TODO:要修正
  // for (const eoj of Object.keys(jsonData.devices)) {
  for (const device of jsonData.devices) {
    const eoj = device.eoj;
      // EOJ の定義に oneOf がない場合
    // TODO:要修正
    // if (!jsonData.devices[eoj].oneOf) {
      let eojShortName = "";
      if (vm.rbName == "name-on") {
        eojShortName = device.shortName ? ": " + device.shortName
        // eojShortName = jsonData.devices[eoj].shortName
        //   ? ": " + jsonData.devices[eoj].shortName
          : ": missing shortName";
      }

      if (vm.rbLanguage == "japanese") {
        deviceList.push({
          name: eoj + " " + device.className.ja + eojShortName,
          eoj: eoj,
        });
      } else {
        deviceList.push({
          name: eoj + " " + device.className.en + eojShortName,
          eoj: eoj,
        });
      }

      // EOJ の定義に oneOf がある場合
    // } else {
    //   for (let object of jsonData.devices[eoj].oneOf) {
    //     const validFrom = object.validRelease.from;
    //     const validTo =
    //       object.validRelease.to == "latest"
    //         ? latestRelease
    //         : object.validRelease.to;
    //     if (validFrom <= selectedRelease && selectedRelease <= validTo) {
    //       let eojShortName = "";
    //       if (vm.rbName == "name-on") {
    //         eojShortName = object.shortName
    //           ? ": " + object.shortName
    //           : ": missing shortName";
    //       }

    //       if (vm.rbLanguage == "japanese") {
    //         deviceList.push({
    //           name: eoj + " " + object.className.ja + eojShortName,
    //           eoj: eoj,
    //         });
    //       } else {
    //         deviceList.push({
    //           name: eoj + " " + object.className.en + eojShortName,
    //           eoj: eoj,
    //         });
    //       }
    //       break;
    //     }
    //   }
    // }
  }
  console.log("deviceList:", deviceList);
  vm.deviceList = deviceList;

  // 選択された機器のDevice Objectを作成（その後の作業で中身をいじるため、コピーする）
  let deviceObjectOriginal = getDeviceDescriptionObj(
    selectedEoj,
    selectedRelease
  );
  console.log("deviceObjectOriginal", deviceObjectOriginal);
  let deviceObject = JSON.parse(JSON.stringify(deviceObjectOriginal));
  // propertyを１つづつ取り出してprocessOneOfに渡す。
  let id = 0; // index for v-for, frontend の表示のラインid
  vm.appendix_list = [];
  // TODO: 要修正 deviceObject.elProperties は array
  // for (const [key, property] of Object.entries(deviceObject.elProperties)) {
  console.log("deviceObject", deviceObject);
  for (const property of deviceObject.elProperties) {
    let indexObject = null;
    let indexOneOf = null;
    // console.log("epc", property.epc, "property", property, "id", id, "indexObject", indexObject, "indexOneOf", indexOneOf);
    processOneOf(property.epc, property, id, indexObject, indexOneOf);
  }
}

// oneOfの処理
function processOneOf(epc, property, id, indexObject, indexOneOf) {
  // console.log("epc", epc, "property", property, "id", id, "indexObject", indexObject, "indexOneOf", indexOneOf);
  // oneOfの処理
  if (property.data.oneOf) {
    const arrayOneOf = property.data.oneOf;
    for (indexOneOf = 0; indexOneOf < arrayOneOf.length; indexOneOf++) {
      property.data = arrayOneOf[indexOneOf];
      createAppendixList(epc, property, id, indexObject, indexOneOf);
      id++;
    }
  } else {
    // const index = 0;  // 不要？
    createAppendixList(epc, property, id, indexObject, indexOneOf);
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

  // プロパティ名(appendix.name)の設定
  const epcShortName = property.shortName
    ? ": " + property.shortName
    : ": missing shortName";
  appendix.name =
    vm.rbLanguage == "japanese"
      ? property.propertyName.ja
      : property.propertyName.en;
  if (vm.rbName == "name-on") {
    appendix.name += epcShortName;
  }

  // access rule Set, Get(appendix.accessRule, appendix.accessRuleRequired)
  switch (property.accessRule.get) {
    case "notApplicable":
      switch (property.accessRule.set) {
        case "notApplicable":
          appendix.accessRule = "-";
          appendix.accessRuleRequired = "";
          break;
        case "required":
          appendix.accessRule = "Set";
          appendix.accessRuleRequired = "○";
          break;
        case "required_c":
          appendix.accessRule = "Set";
          appendix.accessRuleRequired = "○*";
          break;
        case "optional":
          appendix.accessRule = "Set";
          appendix.accessRuleRequired = "";
          break;
        default:
          console.log("Error: accessRule is ", property.accessRule.set);
      }
      break;
    case "required":
      switch (property.accessRule.set) {
        case "notApplicable":
          appendix.accessRule = "Get";
          appendix.accessRuleRequired = "○";
          break;
        case "required":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○";
          break;
        case "required_c":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○*";
          break;
        case "optional":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○Get";
          break;
        default:
          console.log("Error: accessRule is ", property.accessRule.set);
      }
      break;
    case "required_c":
      switch (property.accessRule.set) {
        case "notApplicable":
          appendix.accessRule = "Get";
          appendix.accessRuleRequired = "○*";
          break;
        case "required":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○*";
          break;
        case "required_c":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○*";
          break;
        case "optional":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○*Get";
          break;
        default:
          console.log("Error: accessRule is ", property.accessRule.set);
      }
      break;
    case "optional":
      switch (property.accessRule.set) {
        case "notApplicable":
          appendix.accessRule = "Get";
          appendix.accessRuleRequired = "";
          break;
        case "required":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○Set";
          break;
        case "required_c":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "○*Set";
          break;
        case "optional":
          appendix.accessRule = "Set/Get";
          appendix.accessRuleRequired = "";
          break;
        default:
          console.log("Error: accessRule is ", property.accessRule.set);
      }
      break;
    default:
      console.log("Error: accessRule is ", property.accessRule.get);
  }
  
  // access rule Anno (appendix.inf)
  if (property.accessRule.inf == "required") {
    appendix.inf = "○";
  }
  
  // remark (appendix.remark)
  if (property.remark) {
    appendix.remark = key;
    if (vm.rbLanguage == "japanese") {
      globalRemarks[key] = property.remark.ja;
    } else {
      globalRemarks[key] = property.remark.en;
    }
  } else {
    appendix.remark = "empty";
  }

  // value range
  switch (property.data.type) {
    case "state":
      appendix.propType = "state";
      appendix.range = property.data.enum;
      appendix.dataType = "unsigned char";
      appendix.dataSize = property.data.size;
      break;
    case "number":
      appendix.propType = "number";
      if (property.data.enum) {
        appendix.range = property.data.enum;
        console.log(appendix.range);
      } else {
        const multiple = property.data.multiple
          ? property.data.multiple
          : 1;
        // 10進数表示の３けた区切りのコンマを追加 (Intl.NumberFormat)
        const digit =
          new Intl.NumberFormat().format(property.data.minimum * multiple) +
          " ~ " +
          new Intl.NumberFormat().format(property.data.maximum * multiple);
        // 16進数表示の文字列作成
        // TODO:0x0の桁数分の0を追加
        // TODO:.minimumがマイナスの時のHEXの値の処理を追加
        const hex =
          "0x" +
          toStringHex(property.data.minimum, 0) +
          " ~ 0x" +
          toStringHex(property.data.maximum, 0);
        appendix.range = digit + " " + hex;
      }
      appendix.dataType = property.data.format;
      appendix.unit = property.data.unit;
      switch (property.data.format) {
        case "int8":
          appendix.dataSize = 1;
          appendix.dataType = "signed char";
          break;
        case "uint8":
          appendix.dataSize = 1;
          appendix.dataType = "unsigned char";
          break;
        case "int16":
          appendix.dataSize = 2;
          appendix.dataType = "signed short";
          break;
        case "uint16":
          appendix.dataSize = 2;
          appendix.dataType = "unsigned short";
          break;
        case "int32":
          appendix.dataSize = 4;
          appendix.dataType = "signed long";
          break;
        case "uint32":
          appendix.dataSize = 4;
          appendix.dataType = "unsigned long";
          break;
        default:
      }
      break;
    case "numericValue":
      appendix.propType = "numericValue";
      appendix.range = property.data.enum;
      appendix.dataType = "unsigned char";
      appendix.dataSize = property.data.size;
      break;
    case "level":
      appendix.propType = "level";
      let maxValue = parseInt(property.data.base) + property.data.maximum - 1;
      appendix.range =
        property.data.base + " ... 0x" + toStringHex(maxValue, 1) + ": Level";
      appendix.dataType = "unsigned char";
      appendix.dataSize = 1;
      break;
    case "bitmap":
      appendix.propType = "bitmap";
      appendix.range = "bitmap";
      appendix.bitmap = key;
      globalBitmaps[key] = JSON.stringify(property.data.bitmaps, null, 4);
      appendix.dataType = "unsigned char";
      appendix.dataSize = property.data.size;
      break;
    case "date-time":
      appendix.propType = "date-time";
      appendix.dataType = "unsigned char";
      appendix.dataSize = property.data.size ? property.data.size : 7;
      switch (appendix.dataSize) {
        case 2:
          appendix.range = "YYYY YYYY:0~9999 0x0000~0x270F";
          break;
        case 3:
          appendix.range =
            "YYYY:MM YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C";
          break;
        case 4:
          appendix.range =
            "YYYY:MM:DD YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F";
          break;
        case 5:
          appendix.range =
            "YYYY:MM:DD:hh YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17";
          break;
        case 6:
          appendix.range =
            "YYYY:MM:DD:hh:mm YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17, mm:0~59 0x00~0x3B";
          break;
        case 7:
          appendix.range =
            "YYYY:MM:DD:hh:mm:ss YYYY:0~9999 0x0000~0x270F, MM:0~12 0x00~0x0C, DD:0~31 0x00~0x1F, hh:0~23 0x00~0x17, mm:0~59 0x00~0x3B, ss:0~59 0x00~0x3B";
          break;
        default:
          appendix.range = "date-time(default)";
      }
      break;
    case "time":
      appendix.propType = "time";
      appendix.dataSize = property.data.size ? property.data.size : 3;
      const hourMax = property.data.maximumOfHour
        ? property.data.maximumOfHour
        : 23;
      switch (appendix.dataSize) {
        case 1:
          appendix.dataType = "unsigned char x 1";
          appendix.range =
            "HH HH:0~" +
            hourMax +
            " 0x00~0x" +
            hourMax.toString(16).toUpperCase();
          break;
        case 2:
          appendix.dataType = "unsigned char x 2";
          appendix.range =
            "HH:MM HH:0~" +
            hourMax +
            " 0x00~0x" +
            hourMax.toString(16).toUpperCase() +
            ", MM:0~59 0x00~0x3B";
          break;
        case 3:
          appendix.dataType = "unsigned char x 3";
          appendix.range =
            "HH:MM:SS HH:0~" +
            hourMax +
            " 0x00~0x" +
            hourMax.toString(16).toUpperCase() +
            ", MM:0~59 0x00~0x3B, SS:0~59 0x00~0x3B";
          break;
        default:
          appendix.range = "time";
      }
      break;
    case "raw":
      appendix.propType = "raw";
      appendix.range = "-";
      appendix.dataType = "unsigned char";
      appendix.dataSize =
        property.data.minSize == property.data.maxSize
          ? property.data.minSize
          : property.data.minSize + "-" + property.data.maxSize;
      break;
    case "oneOf":
      appendix.propType = "oneOf";
      console.log("case oneOf");
      break;
    case "arrayHeader":
      appendix.propType = "arrayHeader";
      const minItems = property.data.minItems ? property.data.minItems : 1;
      const itemCount =
        property.data.minItems == property.data.maxItems
          ? minItems
          : minItems + " ~ " + property.data.maxItems;
      appendix.dataType =
        "array:" + property.data.itemSize + "byte X " + itemCount;
      break;
    case "array":
      // display array header
      const arrayHeaderProperty = {
        propertyName: property.propertyName,
        shortName: property.shortName,
        accessRule: property.accessRule,
        data: {
          type: "arrayHeader",
          itemSize: property.data.itemSize,
          minItems: property.data.minItems,
          maxItems: property.data.maxItems,
        },
        remark: property.remark // 2020.12.01
      };
      processOneOf(key, arrayHeaderProperty, id, indexObject, indexOneOf);

      // display array data
      appendix.propType = "array";
      property.data = property.data.items;
      processOneOf(key, property, id, indexObject + 1, indexOneOf);
      pushFlag = false;
      break;
    case "objectHeader":
      appendix.propType = "objectHeader";
      appendix.range = property.data.name + ": ";
      break;
    case "object":
      const arrayObject = property.data.properties;
      indexObject = indexObject === null ? 0 : indexObject;
      for (let i = 0; i < arrayObject.length; i++, indexObject++) {
        // display object header
        let objectTitle = "Missing descriptions";
        // if (arrayObject[i].descriptions) {
        if (arrayObject[i].elementName) {
          objectTitle =
            vm.rbLanguage == "japanese"
              // ? arrayObject[i].descriptions.ja
              // : arrayObject[i].descriptions.en;
              ? arrayObject[i].elementName.ja
              : arrayObject[i].elementName.en;
        }
        // objectTitleにnameを追加
        if (vm.rbName == "name-on") {
          // objectTitle += ": " + arrayObject[i].name;
          objectTitle += ": " + arrayObject[i].shortName;
        }
        const objectHeaderProperty = {
          propertyName: property.propertyName,
          shortName: property.shortName,
          accessRule: property.accessRule,
          data: {
            type: "objectHeader",
            name: objectTitle,
          },
          remark: property.remark,
        };
        processOneOf(key, objectHeaderProperty, id, indexObject, indexOneOf);

        // display object data
        property.data = arrayObject[i].element;
        processOneOf(key, property, id, indexObject + 1, indexOneOf);
      }
      pushFlag = false;
      break;
    default:
      console.log("default", property.data.type);
  } // end of switch

  if (property.data.multiple) {
    if (property.data.unit) {
      appendix.unit = property.data.multiple + " " + property.data.unit;
    } else {
      appendix.unit = property.data.unit;
    }
  }
  if (indexOneOf > 0) {
    appendix.epc = "";
    appendix.name = "";
    appendix.dataType = "";
    appendix.dataSize = "";
    appendix.accessRule = "";
    appendix.accessRuleRequired = "";
    appendix.inf = "";
    appendix.remark = "empty";
  } else if (indexObject > 0 && (indexOneOf === null || indexOneOf === 0)) {
    appendix.epc = "";
    appendix.name = "";
    appendix.accessRule = "";
    appendix.accessRuleRequired = "";
    appendix.inf = "";
    appendix.remark = "empty";
  }
  appendix.id = id;
  if (pushFlag === true) {
    // if (key == "0xC8") {  // 蓄電池の EPC 0xC8 object の shortName 表示をdebug中
    //   console.log("appendix:", appendix);
    // }
    vm.appendix_list.push(appendix);
  }
}

// function toStringHex(int:number, int:bytes)
// 数値(number)を(bytes)桁数の16進数表記の文字列に変換する
// 数値のbyte数は(bytes)
// bytes = 0 の場合は、numberをもとに桁数を計算する
// example: toStringHex(10, 1) => "0A"
// example: toStringHex(10, 2) => "000A"
// example: toStringHex(-3, 1) => "FD"
function toStringHex(number, bytes) {
  // bytes = 0 の時、number の byte 数を計算する
  if (bytes == 0) {
    if (Math.abs(number) <= 0xff) {
      bytes = 1;
    } else if (Math.abs(number) <= 0xffff) {
      bytes = 2;
    } else {
      bytes = 4;
    }
  }
  if (number < 0) {
    // number が負の値の処理。２の補数を計算。
    if (Math.abs(number) <= 0xff) {
      number = 0xff + number + 1;
    } else if (Math.abs(number) <= 0xffff) {
      number = 0xffff + number + 1;
    } else {
      number = 0xffffffff + number + 1;
    }
  }
  let str = number.toString(16).toUpperCase();
  // 桁数分、頭に0をpaddingする
  while (str.length < 2 * bytes) {
    str = "0" + str;
  }
  return str;
}

// stringに文字列を挿入
function strIns(str, idx, val) {
  // str:string（元の文字列）, idx:number（挿入する位置）, val:string（挿入する文字列）
  var res = str.slice(0, idx) + val + str.slice(idx);
  return res;
}

function hex2Array(hex) {
  // hex: string of this format 0xXXXX or XXXX
  if (hex.slice(0, 2) != "0x") {
    hex = "0x" + hex;
  }
  let array = [];
  const bytes = (hex.length - 2) / 2;
  for (let i = 0; i < bytes; i++) {
    array.push(parseInt(hex.slice((i + 1) * 2, (i + 1) * 2 + 2), 16));
  }
  return array; // array: array of byte data
}

function packetMonitorShowPacketDetail(event) {
  if (this.active_packet_id) {
    $("#" + this.active_packet_id).removeClass("active");
    this.active_packet_id = "";
  }
  let t = event.target;
  console.log("t.id: ", t.id);
  $("#" + t.id).addClass("active");
  this.active_packet_id = t.id;

  // 現在選択中のパケット ID
  let id_parts = this.active_packet_id.split("-");
  let pno = parseInt(id_parts[1], 10);

  // packetの解析結果の表示
  vm.packetDetail = analyzeData(dataLogArray[pno].data);
}

function packetMonitorUpDownList(event) {
  event.preventDefault();
  event.stopPropagation();
  // 選択中のパケット行がなければ終了
  if (!this.active_packet_id) {
    return;
  }
  // 現在選択中のパケット ID
  let id_parts = this.active_packet_id.split("-");
  let pno = parseInt(id_parts[1], 10);

  let c = event.keyCode;
  let k = event.key;
  if (c === 38 || k === "ArrowUp") {
    // 上矢印キー
    if (vm.rbOrder == "normalOrder") {
      if (pno-- < 0) {
        pno = 0;
      }
    } else {
      if (pno++ >= dataLogArray.length) {
        pno = dataLogArray.length - 1;
      }
    }
  } else if (c === 40 || k === "ArrowDown") {
    // 下矢印キー
    if (vm.rbOrder == "normalOrder") {
      if (pno++ >= dataLogArray.length) {
        pno = dataLogArray.length - 1;
      }
    } else {
      if (pno-- < 0) {
        pno = 0;
      }
    }
  } else {
    return;
  }
  // 遷移したパケット行にフォーカスする
  $("#packet-" + pno).focus();
}
