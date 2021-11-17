// parseJSON.js for mraViewer
// 2021.11.17
// MRA Viewer V1.0.0 b1
// Copyright (c) 2021 Kanagawa Institute of Technology
// Released under the MIT License.
'use strict';

// function: 引数で指定したEOJとReleaseから、該当するdevice description objectをreturnする
// input: string:selectedEoj, string:selectedRelease, example: ('0x0130', 'A')
// output: object:device description object ($refを処理したものがreturnされる)
function getDeviceDescriptionObj(selectedEoj, selectedRelease) {
  let deviceObject = {};
  if (selectedEoj == "0x0EF0") {
    deviceObject = JSON.parse(JSON.stringify(jsonData.nodeProfile));  // copy object
  } else if (selectedEoj == "0x0000") {
    deviceObject = JSON.parse(JSON.stringify(jsonData.superClass));   // copy object
  } else {
    // jsonData.devices は object の array。object の eoj が selectedEoj と同じものを利用する
    for (const device of jsonData.devices) {
      if (device.eoj == selectedEoj) {
        deviceObject = JSON.parse(JSON.stringify(device));   // copy object
      }
    }
  }
  const latestRelease = jsonData.metaData.release;

  // device object：selectedReleaseの確認
  if (Object.keys(deviceObject).length !== 0) {
    const validFrom = deviceObject.validRelease.from;
    const validTo = (deviceObject.validRelease.to == 'latest') ? latestRelease : deviceObject.validRelease.to;
    // selectedReleaseがvalidRelease内にあることの確認
    if (!((validFrom <= selectedRelease) && ( selectedRelease <= validTo))) {
      console.log("ERROR: no object for the selected Release");
      return;
    }
  } else {
    console.log("ERROR: no object for the selected EOJ");
    return;
  }

  // selectedRelease に対応しない property object を削除
  let deletePos = [];
  for (const property of deviceObject.elProperties) {
    const validFrom = property.validRelease.from;
    const validTo = (property.validRelease.to == 'latest') ? latestRelease : property.validRelease.to;
    // selectedReleaseがvalidRelease内になければpropertyを削除
    if (!((validFrom <= selectedRelease) && ( selectedRelease <= validTo ))) {
      // push position to delete
      const pos = deviceObject.elProperties.indexOf(property);
      deletePos.push(pos);
    }
  }
  // reverse positions to delete
  deletePos = deletePos.reverse();
  // delete property from last to top in the loop
  for (const pos of deletePos) {
    deviceObject.elProperties.splice(pos, 1);
  }

  // replace $ref
  for (let property of deviceObject.elProperties) {
    const propertyData = property.data;
    const pos = deviceObject.elProperties.indexOf(property);
    property.data = replaceRef(propertyData);
  }
  console.log("parseJSON deviceObject", deviceObject);
  return deviceObject;  
}

// function: inputのkeyが'$ref'ならdefinitions[value]に置換する。それ以外はinputをreturnする
// input: object
// output: object
function replaceRef(inputObject) {
  let outputObject = Object.assign({}, inputObject);
  for (const key in inputObject) {
    switch (key) {
      case "$ref":
        const reference = inputObject["$ref"].split('/')[2]; // uriの３番目の要素を取り出す
        const definedData = jsonData.definitions[reference];  // definitionsで定義されたobject
        delete outputObject["$ref"];
        Object.assign(outputObject, definedData);
        break;
      case "oneOf":
        for (let i=0; i < inputObject.oneOf.length; i++) {
          outputObject.oneOf[i] = replaceRef(inputObject.oneOf[i]);
        }
        break;
      case "element":
        outputObject.element = replaceRef(inputObject.element);
        break;
      case "items":
        outputObject.items = replaceRef(inputObject.items);
        break;
      case "type":
        switch (inputObject[key]) {
          case "object":
            for (let i=0; i < inputObject.properties.length; i++) {
              outputObject.properties[i] = replaceRef(inputObject.properties[i]);
            }
            break;
          default:
            break;            
          }
      default:
        break;
    }
  }
  return outputObject;
}