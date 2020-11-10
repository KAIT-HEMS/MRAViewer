const jsonData = {
  "metaData":{
    "date":"2020-11-06",
    "release":"M",
    "version":"1.0.0rc1",
    "note":{"ja":" Machine Readable Appendix official release", "en":"Machine Readable Appendix official release"},
    "Copyright":"(C) 2020 Kanagawa Institute of Technology, ECHONET CONSORTIUM"
  },
  "definitions":{
    "number_0":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":0
    },
    "number_0-8":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":8
    },
    "number_0-23":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":23
    },
    "number_0-24":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":24
    },
    "number_0-59":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":59
    },
    "number_0-84":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":84
    },
    "number_0-99":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":99
    },
    "number_0-127":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":127
    },
    "number_0-252":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":252
    },
    "number_0-244":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":244
    },
    "number_0-253":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":253
    },
    "number_0-254":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":254
    },
    "number_0-255":{
        "type":"number",
        "format":"uint8",
        "minimum":0,
        "maximum":255
    },
    "number_0-1004":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":1004
    },
    "number_1-2":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":2
    },
    "number_1-8":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":8
    },
    "number_1-12":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":12
    },
    "number_1-30": {
      "type": "number",
      "format": "uint8",
      "minimum": 1,
      "maximum": 30
    },
    "number_1-31":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":31
    },
    "number_1-60":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":60
    },
    "number_1-128":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":128
    },
    "number_1-128_u16":{
        "type":"number",
        "format":"uint16",
        "minimum":1,
        "maximum":128
    },
    "number_1-252":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":252
    },
    "number_1-253":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":253
    },
    "number_1-255":{
        "type":"number",
        "format":"uint8",
        "minimum":1,
        "maximum":255
    },
    "number_9-17":{
        "type":"number",
        "format":"uint8",
        "minimum":9,
        "maximum":17
    },
    "number_10-17":{
        "type":"number",
        "format":"uint8",
        "minimum":10,
        "maximum":17
    },
    "number_49-63":{
        "type":"number",
        "format":"uint8",
        "minimum":49,
        "maximum":63
    },
    "number_50-250":{
        "type":"number",
        "format":"uint8",
        "minimum":50,
        "maximum":250
    },
    "number_0-100%":{
        "type":"number",
        "format":"uint8",
        "unit":"%",
        "minimum":0,
        "maximum":100
    },
    "number_0-50Celsius":{
        "type":"number",
        "format":"uint8",
        "unit":"Celsius",
        "minimum":0,
        "maximum":50
    },
    "number_0-100Celsius":{
        "type":"number",
        "format":"uint8",
        "unit":"Celsius",
        "minimum":0,
        "maximum":100
    },
    "number_0-150Celsius":{
        "type":"number",
        "format":"uint8",
        "unit":"Celsius",
        "minimum":0,
        "maximum":150
    },
    "number_0-180degree":{
        "type":"number",
        "format":"uint8",
        "unit":"degree",
        "minimum":0,
        "maximum":180
    },
    "number_0-360degree":{
        "type":"number",
        "format":"uint8",
        "unit":"degree",
        "minimum":0,
        "maximum":360
    },
    "number_0-360degree_u16":{
        "type":"number",
        "format":"uint16",
        "unit":"degree",
        "minimum":0,
        "maximum":360
    },
    "number_-127-125Celsius":{
        "type":"number",
        "format":"int8",
        "unit":"Celsius",
        "minimum":-127,
        "maximum":125
    },
    "number_-127-126Celsius":{
        "type":"number",
        "format":"int8",
        "unit":"Celsius",
        "minimum":-127,
        "maximum":126
    },
    "number_0-99_u16":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":99
    },
    "number_1-253_u16":{
        "type":"number",
        "format":"uint16",
        "minimum":1,
        "maximum":253
    },
    "number_0-1000":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":1000
    },
    "number_0-3600":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":3600
    },
    "number_0-4095":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":4095
    },
    "number_0-10000":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":10000
    },
    "number_0-32766":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":32766
    },
    "number_0-65533":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":65533
    },
    "number_0-65534":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":65534
    },
    "number_0-65535":{
        "type":"number",
        "format":"uint16",
        "minimum":0,
        "maximum":65535
    },
    "number_1-65533":{
        "type":"number",
        "format":"uint16",
        "minimum":1,
        "maximum":65533
    },
    "number_-200-1000":{
        "type":"number",
        "format":"int16",
        "minimum":-200,
        "maximum":1000
    },
    "number_-2732-32766":{
        "type":"number",
        "format":"int16",
        "minimum":-2732,
        "maximum":32766
    },
    "number_-32767-32765":{
        "type":"number",
        "format":"int16",
        "minimum":-32767,
        "maximum":32765
    },
    "number_-32767-32766":{
        "type":"number",
        "format":"int16",
        "minimum":-32767,
        "maximum":32766
    },
    "number_0-999999":{
        "type":"number",
        "format":"uint32",
        "minimum":0,
        "maximum":999999
    },
    "number_0-99999999":{
        "type":"number",
        "format":"uint32",
        "minimum":0,
        "maximum":99999999
    },
    "number_0-999999999":{
        "type":"number",
        "format":"uint32",
        "minimum":0,
        "maximum":999999999
    },
    "number_0-4294967293":{
        "type":"number",
        "format":"uint32",
        "minimum":0,
        "maximum":4294967293
    },
    "number_1-4294967293":{
        "type":"number",
        "format":"uint32",
        "minimum":1,
        "maximum":4294967293
    },
    "number_0-4294967295":{
        "type":"number",
        "format":"uint32",
        "minimum":0,
        "maximum":4294967295
    },
    "number_1-999999999":{
        "type":"number",
        "format":"uint32",
        "minimum":1,
        "maximum":999999999
    },
    "number_-999999999-999999999":{
            "type":"number",
            "format":"int32",
            "minimum":-999999999,
            "maximum":999999999
    },
    "number_-2147483647-2147483645":{
        "type":"number",
        "format":"int32",
        "minimum":-2147483647,
        "maximum":2147483645
    },
    "number_-2147483647-2147483646":{
        "type":"number",
        "format":"int32",
        "minimum":-2147483647,
        "maximum":2147483646
    },
    "state_NoSetting":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x00", "name":"xxx", "descriptions":{"ja":"設定なし", "en":"No setting"}}
        ]
    },
    "state_NotSet_00000000":{
        "type":"state",
        "size":4,
        "enum":[
            {"edt":"0x00000000", "name":"xxx", "descriptions":{"ja":"未設定", "en":"Not set"}}
        ]
    },
    "state_RESET":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x00", "name":"xxx", "descriptions":{"ja":"リセット", "en":"Reset"}}
        ]
    },
    "state_ON-OFF-3031":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x30", "name":"xxx", "descriptions":{"ja":"入", "en":"ON"}},
            {"edt":"0x31", "name":"yyy", "descriptions":{"ja":"切", "en":"OFF"}}
        ]
    },
    "state_YES-NO-3031":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x30", "name":"xxx", "descriptions":{"ja":"有", "en":"YES"}},
            {"edt":"0x31", "name":"yyy", "descriptions":{"ja":"無", "en":"NO"}}
        ]
    },
    "state_AUTO-41":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"自動", "en":"Automatic"}}
        ]
    },
    "state_AUTO-71":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x71", "name":"xxx", "descriptions":{"ja":"自動", "en":"Automatic"}}
        ]
    },
    "state_ON-OFF-4142":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"入", "en":"ON"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"切", "en":"OFF"}}
        ]
    },
    "state_YES-NO-4142":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"有", "en":"YES"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"無", "en":"NO"}}
        ]
    },
    "state_YES-NO-4140":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"有", "en":"YES"}},
            {"edt":"0x40", "name":"yyy", "descriptions":{"ja":"無", "en":"NO"}}
        ]
    },
    "state_OPEN-CLOSE-4142":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"開", "en":"Open"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"閉", "en":"Close"}}
        ]
    },
    "state_OPEN-CLOSE-STOP-414243":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"開", "en":"Open"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"閉", "en":"Close"}},
            {"edt":"0x43", "name":"zzz", "descriptions":{"ja":"停止", "en":"Stop"}}
        ]
    },
    "state_LOCK-UNLOCK-4142":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"施錠", "en":"Lock"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"解錠", "en":"Unlock"}}
        ]
    },
    "state_AUTO-STANDARD-4142":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"自動", "en":"Automatic"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"標準", "en":"Standard"}}
        ]
    },
    "state_AUTO-NONAUTO-4142":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"AUTO", "en":"Automatic"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"非AUTO", "en":"Non-automatic"}}
        ]
    },
    "state_LOW-MID-HIGH-414243":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"低", "en":"Low"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"中", "en":"Middle"}},
            {"edt":"0x43", "name":"zzz", "descriptions":{"ja":"高", "en":"High"}}
        ]
    },
    "state_LOW-MID-HIGH-NONE-41424344":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"低", "en":"Low"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"中", "en":"Middle"}},
            {"edt":"0x43", "name":"zzz", "descriptions":{"ja":"高", "en":"High"}},
            {"edt":"0x44", "name":"aaa", "descriptions":{"ja":"無し", "en":"None"}}
        ]
    },
    "state_LightColor-40-44":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"電球色", "en":"Incandescent lamp color"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"白色", "en":"White"}},
            {"edt":"0x43", "name":"zzz", "descriptions":{"ja":"昼白色", "en":"Daylight white"}},
            {"edt":"0x44", "name":"aaa", "descriptions":{"ja":"昼光色", "en":"Daylight color"}},
            {"edt":"0x40", "name":"bbb", "descriptions":{"ja":"その他", "en":"Other"}}
        ]
    },
    "state_LightColor-41-44":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x41", "name":"xxx", "descriptions":{"ja":"電球色", "en":"Incandescent lamp color"}},
            {"edt":"0x42", "name":"yyy", "descriptions":{"ja":"白色", "en":"White"}},
            {"edt":"0x43", "name":"zzz", "descriptions":{"ja":"昼白色", "en":"Daylight white"}},
            {"edt":"0x44", "name":"aaa", "descriptions":{"ja":"昼光色", "en":"Daylight color"}}
        ]
    },
    "state_Undefined-7E":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0x7E", "name":"xxx", "descriptions":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
        ]
    },
    "state_Undefined-FD":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0xFD", "name":"xxx", "descriptions":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
        ]
    },
    "state_NoHotWater-FE":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0xFE", "name":"xxx", "descriptions":{"ja":"熱水不使用", "en":"Not to use warm water"} }
        ]
    },
    "state_Undefined-FF":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0xFF", "name":"xxx", "descriptions":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
        ]
    },
    "state_AUTO-FF":{
        "type":"state",
        "size":1,
        "enum":[
            {"edt":"0xFF", "name":"xxx", "descriptions":{"ja":"自動", "en":"AUTO"}}
        ]
    },
    "state_Undefined-FFFF":{
        "type":"state",
        "size":2,
        "enum":[
            {"edt":"0xFFFF", "name":"xxx", "descriptions":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
        ]
    },
    "state_AUTO-FFFF":{
        "type":"state",
        "size":2,
        "enum":[
            {"edt":"0xFFFF", "name":"xxx", "descriptions":{"ja":"自動", "en":"AUTO"}}
        ]
    },
    "level_21-15":{
        "type":"level",
        "base":"0x21",
        "maximum":15
    },
    "level_31-3":{
        "type":"level",
        "base":"0x31",
        "maximum":3
    },
    "level_31-5":{
        "type":"level",
        "base":"0x31",
        "maximum":5
    },
    "level_31-8":{
        "type":"level",
        "base":"0x31",
        "maximum":8
    },
    "level_31-10":{
        "type":"level",
        "base":"0x31",
        "maximum":10
    },
    "level_31-15":{
        "type":"level",
        "base":"0x31",
        "maximum":15
    },
    "level_31-16":{
        "type":"level",
        "base":"0x31",
        "maximum":16
    },
    "level_40-6":{
        "type":"level",
        "base":"0x40",
        "maximum":6
    },
    "level_A0-8":{
        "type":"level",
        "base":"0xA0",
        "maximum":8
    },
    "level_A0-32":{
        "type":"level",
        "base":"0xA0",
        "maximum":32
    },
    "level_A1-8":{
        "type":"level",
        "base":"0xA1",
        "maximum":8
    },
    "level_C0-8":{
        "type":"level",
        "base":"0xC0",
        "maximum":8
    },
    "level_C0-32":{
        "type":"level",
        "base":"0xC0",
        "maximum":32
    },
    "level_C1-8":{
        "type":"level",
        "base":"0xC1",
        "maximum":8
    },
    "level_3000-17":{
        "type":"level",
        "base":"0x3000",
        "maximum":17
    },
    "level_A000-60":{
        "type":"level",
        "base":"0xA000",
        "maximum":60
    },
    "level_A000-2048":{
        "type":"level",
        "base":"0xA000",
        "maximum":2048
    },
    "level_A001-8":{
        "type":"level",
        "base":"0xA001",
        "maximum":8
    },
    "level_C000-60":{
        "type":"level",
        "base":"0xC000",
        "maximum":60
    },
    "level_C000-2048":{
        "type":"level",
        "base":"0xC000",
        "maximum":2048
    },
    "level_C001-8":{
        "type":"level",
        "base":"0xC001",
        "maximum":8
    },
    "raw_1":{
        "type":"raw",
        "minSize":1,
        "maxSize":1
    },
    "raw_2":{
        "type":"raw",
        "minSize":2,
        "maxSize":2
    },
    "raw_3":{
        "type":"raw",
        "minSize":3,
        "maxSize":3
    },
    "raw_4":{
        "type":"raw",
        "minSize":4,
        "maxSize":4
    },
    "raw_6":{
        "type":"raw",
        "minSize":6,
        "maxSize":6
    },
    "raw_8":{
        "type":"raw",
        "minSize":8,
        "maxSize":8
    },
    "raw_10":{
        "type":"raw",
        "minSize":10,
        "maxSize":10
    },
    "raw_11":{
        "type":"raw",
        "minSize":11,
        "maxSize":11
    },
    "raw_12":{
        "type":"raw",
        "minSize":12,
        "maxSize":12
    },
    "raw_14":{
        "type":"raw",
        "minSize":14,
        "maxSize":14
    },
    "raw_16":{
        "type":"raw",
        "minSize":16,
        "maxSize":16
    },
    "raw_17":{
        "type":"raw",
        "minSize":17,
        "maxSize":17
    },
    "raw_24":{
        "type":"raw",
        "minSize":24,
        "maxSize":24
    },
    "raw_27":{
        "type":"raw",
        "minSize":27,
        "maxSize":27
    },
    "raw_40":{
        "type":"raw",
        "minSize":40,
        "maxSize":40
    },
    "raw_109":{
        "type":"raw",
        "minSize":109,
        "maxSize":109
    },
    "raw_194":{
        "type":"raw",
        "minSize":194,
        "maxSize":194
    },
    "raw_1-12":{
        "type":"raw",
        "minSize":1,
        "maxSize":12
    },
    "raw_1-17":{
        "type":"raw",
        "minSize":1,
        "maxSize":17
    },
    "raw_1-31":{
        "type":"raw",
        "minSize":1,
        "maxSize":31
    },
    "raw_1-40":{
        "type":"raw",
        "minSize":1,
        "maxSize":40
    },
    "raw_1-101":{
        "type":"raw",
        "minSize":1,
        "maxSize":101
    },
    "raw_1-165":{
        "type":"raw",
        "minSize":1,
        "maxSize":165
    },
    "raw_1-231":{
        "type":"raw",
        "minSize":1,
        "maxSize":231
    },
    "raw_1-244":{
        "type":"raw",
        "minSize":1,
        "maxSize":244
    },
    "raw_1-247":{
        "type":"raw",
        "minSize":1,
        "maxSize":247
    },
    "raw_1-253":{
        "type":"raw",
        "minSize":1,
        "maxSize":253
    },
    "object_PDB_01": {
      "type": "object",
      "properties": [
        {
          "name": "electricEnergy",
          "element": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99999999",
                "unit": "kWh",
                "coefficient": [
                  "0xC2"
                ],
                "overflowCode": false,
                "underflowCode": false
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0xFFFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          },
          "descriptions": {
            "ja": "積算電力量計測値",
            "en": "Measured cumulative amount of electric power consumption"
          }
        },
        {
          "name": "currentRphase",
          "element": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_-32767-32765",
                "unit": "A",
                "multipleOf": 0.1
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0x7FFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          },
          "descriptions": {
            "ja": "瞬時電流計測値（R相）",
            "en": "Measured instantaneous current (R phase)"
          }
        },
        {
          "name": "currentTphase",
          "element": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_-32767-32765",
                "unit": "A",
                "multipleOf": 0.1
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0x7FFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          },
          "descriptions": {
            "ja": "瞬時電流計測値（T相）",
            "en": "Measured instantaneous current (T phase)"
          }
        }
      ]
    }
  },
    "nodeProfile": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "ノードプロファイル",
        "en": "Node profile"
      },
      "shortName": "nodeProfile",
      "elProperties": {
        "0x80": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "動作状態",
            "en": "Operating status"
          },
          "shortName": "operatingStatus",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "yes",
                "descriptions": {
                  "ja": "起動中",
                  "en": "Booting"
                }
              },
              {
                "edt": "0x31",
                "name": "no",
                "descriptions": {
                  "ja": "未起動中",
                  "en": "not booting"
                }
              }
            ]
          }
        },
        "0x82": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "Version情報",
            "en": "Version information"
          },
          "shortName": "version",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_4"
          },
          "note": {
            "ja": "1バイト目：メジャーバージョン。2バイト目：マイナーバージョン。3バイト目：電文形式をbitmapで示す。4バイト目：0x00",
            "en": "1st byte: major version, 2nd byte: minor version, 3rd data: bitmap of data format, 4th byte: 0x00"
          }
        },
        "0x83": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "shortName": "id",
          "propertyName": {
            "ja": "識別番号",
            "en": "Identification number"
          },
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_17"
          },
          "note": {
            "ja": "1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
            "en": "1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
          }
        },
        "0x88": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "異常発生状態",
            "en": "Fault status"
          },
          "shortName": "faultStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "異常あり",
                  "en": "Fault occurred"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "異常なし",
                  "en": "No fault has occurred"
                }
              }
            ]
          }
        },
        "0x89": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "異常内容",
            "en": "Fault description"
          },
          "shortName": "faultDescription",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-1004"
          }
        },
        "0x8A": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "メーカコード",
            "en": "Manufacture code"
          },
          "shortName": "manufacturer",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_3"
          },
          "note": {
            "ja": "0xFFFFFF: 実験用、0x000077: 神奈川工科大学",
            "en": "0xFFFFFF: For experimental, 0x000077: KAIT"
          }
        },
        "0x8B": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "shortName": "businessFacilityCode",
          "propertyName": {
            "ja": "事業場コード",
            "en": "Business facility code"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_3"
          }
        },
        "0x8C": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "商品コード",
            "en": "Product code"
          },
          "shortName": "productCode",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_12"
          }
        },
        "0x8D": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "製造番号",
            "en": "Production number"
          },
          "shortName": "serialNumber",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_12"
          }
        },
        "0x8E": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "製造年月日",
            "en": "Production date"
          },
          "shortName": "productionDate",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "date-time",
            "size": 4
          }
        },
        "0x9D": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "状変アナウンスプロパティマップ",
            "en": "Status change announcement property map"
          },
          "shortName": "statusChangeAnnouncementPropertyMap",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1-17"
          },
          "note": {
            "ja": "１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
            "en": "1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
          }
        },
        "0x9E": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "Setプロパティマップ",
            "en": "Set property map"
          },
          "shortName": "setPropertyMap",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1-17"
          },
          "note": {
            "ja": "１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
            "en": "1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
          }
        },
        "0x9F": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "Getプロパティマップ",
            "en": "Get property map"
          },
          "shortName": "getPropertyMap",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1-17"
          },
          "note": {
            "ja": "１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
            "en": "1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
          }
        },
        "0xBF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "個体識別情報",
            "en": "Unique identifier data"
          },
          "shortName": "uniqueIdData",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-254"
          },
          "note": {
            "ja": "ECHONET Lite SPECIFICATION 第2部6.11.1参照",
            "en": "See ECHONET Lite SPECIFICATION Part 2 Chapter 6.11.1."
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自ノードインスタンス数",
            "en": "Number of self-node instances"
          },
          "shortName": "selfNodeInstances",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 2,
            "maxSize": 2
          },
          "note": {
            "ja": "3 byteで数値を表す。ノードプロファイルオブジェクトのインスタンスは含まない",
            "en": "3 byte data for integer. excluding node profile object instance"
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自ノードクラス数",
            "en": "Number of self-node classes"
          },
          "shortName": "selfNodeClasses",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-253_u16"
          },
          "note": {
            "ja": "ノードプロファイルクラスを含む",
            "en": "Including node profile class"
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "インスタンスリスト通知",
            "en": "Instance list notification"
          },
          "shortName": "instanceListNotification",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "numberOfinstances",
                "element": {
                  "$ref": "#/definitions/number_0-84"
                }
              },
              {
                "name": "instanceList",
                "element": {
                  "type": "array",
                  "itemSize": 3,
                  "maxItems": 84,
                  "items": {
                    "$ref": "#/definitions/raw_3"
                  }
                }
              }
            ]
          },
          "note": {
            "ja": "インスタンスリストは機器オブジェクトの３バイトのEOJを列挙する",
            "en": "Instance list is an array of EOJ (3 bytes)"
          }
        },
        "0xD6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自ノードインスタンスリストS",
            "en": "Self-node instance list S"
          },
          "shortName": "selfNodeInstanceListS",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "numberOfInstances",
                "element": {
                  "$ref": "#/definitions/number_0-84"
                }
              },
              {
                "name": "instanceList",
                "element": {
                  "type": "array",
                  "itemSize": 3,
                  "maxItems": 84,
                  "items": {
                    "$ref": "#/definitions/raw_3"
                  }
                }
              }
            ]
          },
          "note": {
            "ja": "インスタンスリストは3バイトのEOJを列挙する",
            "en": "Instance list is an array of EOJ (3 bytes)"
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自ノードクラスリストS",
            "en": "Self-node class list S"
          },
          "shortName": "selfNodeClassListS",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "numberOfClasses",
                "element": {
                  "$ref": "#/definitions/number_1-8"
                }
              },
              {
                "name": "classList",
                "element": {
                  "type": "array",
                  "itemSize": 2,
                  "maxItems": 8,
                  "items": {
                    "$ref": "#/definitions/raw_2"
                  }
                }
              }
            ]
          },
          "note": {
            "ja": "ノードプロファイルクラスは除く",
            "en": "Excluding node profile class"
          }
        }
      }
    },
    "superClass": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "スーパークラス",
        "en": "Super class"
      },
      "shortName": "superClass",
      "elProperties": {
        "0x80": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "動作状態",
            "en": "Operation status"
          },
          "shortName": "operationStatus",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "yes",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "no",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0x81": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "B"
              },
              "propertyName": {
                "ja": "設置場所",
                "en": "Installation location"
              },
              "shortName": "installationLocation",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "$ref": "#/definitions/raw_1"
              },
              "note": {
                "ja": "bitmap（例 0x00: 未設定（初期値）、0x08: リビング）",
                "en": "bitmap (eg. 0x00: undefined (initial data), 0x08: living)"
              }
            },
            {
              "validRelease": {
                "from": "C",
                "to": "latest"
              },
              "propertyName": {
                "ja": "設置場所",
                "en": "Installation location"
              },
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "oneOf": [
                  {
                    "$ref": "#/definitions/raw_1"
                  },
                  {
                    "$ref": "#/definitions/raw_17"
                  }
                ]
              },
              "note": {
                "ja": "1byte bitmap（例 0x00: 未設定（初期値）、0x08: リビング）または0x01で始まる17 byte data",
                "en": "1byte bitmap (eg. 0x00: undefined (initial data), 0x08: living) or 17 bytes data starting from 0x01"
              }
            }
          ]
        },
        "0x82": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "規格Version情報",
            "en": "Standard version information"
          },
          "shortName": "protocol",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_4"
          },
          "note": {
            "ja": "1,2,4バイト目は0x00。3バイト目は機器オブジェクトのリリースバージョンをASCIIで表す。リリース Aのみ小文字で0x61, B以降は大文字で0x42, 0x43...",
            "en": "1st, 2nd and 4th data is 0x00. 3rd data is the release version of Device Object in ASCII. Only release A utilize lower case letter 0x61, Release B and later utilize upper case letter such as 0x42, 0x43..."
          }
        },
        "0x83": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "A"
              },
              "propertyName": {
                "ja": "識別番号",
                "en": "Identification number"
              },
              "shortName": "id",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "$ref": "#/definitions/raw_17"
              },
              "note": {
                "ja": "1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en": "1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
              }
            },
            {
              "validRelease": {
                "from": "B",
                "to": "latest"
              },
              "propertyName": {
                "ja": "識別番号",
                "en": "Identification number"
              },
              "shortName": "id",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "$ref": "#/definitions/raw_17"
              },
              "note": {
                "ja": "1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en": "1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
              }
            }
          ]
        },
        "0x84": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時消費電力計測値",
            "en": "Measured instantaneous power consumption"
          },
          "shortName": "instantaneousElectricPowerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "W"
          }
        },
        "0x85": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算消費電力計測値",
            "en": "Measured cumulative power consumption"
          },
          "shortName": "cumulativeElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-999999999",
            "unit": "kWh",
            "multipleOf": 0.001
          }
        },
        "0x86": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "メーカ異常コード",
            "en": "Manufacturer’s fault code"
          },
          "shortName": "manufacturerFaultCode",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 1,
            "maxSize": 225
          }
        },
        "0x87": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "電流制限設定",
            "en": "Current limit setting"
          },
          "shortName": "currentLimit",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0x88": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "異常発生状態",
            "en": "Fault status"
          },
          "shortName": "faultStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "異常あり",
                  "en": "Fault occurred"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "異常なし",
                  "en": "No fault has occurred"
                }
              }
            ]
          }
        },
        "0x89": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "異常内容",
            "en": "Fault description"
          },
          "shortName": "faultDescription",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_2"
          },
          "note": {
            "ja": "Appendixの2.5章 異常内容プロパティ参照",
            "en": "See Chapter 2.5 'Fault Description' Property of the Appendix"
          }
        },
        "0x8A": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "メーカコード",
            "en": "Manufacture code"
          },
          "shortName": "manufacturer",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_3"
          }
        },
        "0x8B": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "事業場コード",
            "en": "Business facility code"
          },
          "shortName": "businessFacilityCode",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_3"
          }
        },
        "0x8C": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "商品コード",
            "en": "Product code"
          },
          "shortName": "productCode",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_12"
          }
        },
        "0x8D": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "製造番号",
            "en": "Production number"
          },
          "shortName": "serialNumber",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_12"
          }
        },
        "0x8E": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "shortName": "productionDate",
          "propertyName": {
            "ja": "製造年月日",
            "en": "Production date"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "date-time",
            "size": 4
          }
        },
        "0x8F": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "節電動作設定",
            "en": "Power-saving operation setting"
          },
          "shortName": "powerSaving",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "節電動作中",
                  "en": "Power saving"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "通常動作中",
                  "en": "No power saving"
                }
              }
            ]
          }
        },
        "0x93": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "A"
              },
              "propertyName": {
                "ja": "位置情報",
                "en": "Location information"
              },
              "shortName": "locationInformation",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "$ref": "#/definitions/raw_16"
              }
            },
            {
              "validRelease": {
                "from": "B",
                "to": "B"
              },
              "propertyName": {
                "ja": "位置情報",
                "en": "Location information"
              },
              "shortName": "locationInformation",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "required"
              },
              "data": {
                "$ref": "#/definitions/raw_16"
              }
            },
            {
              "validRelease": {
                "from": "C",
                "to": "G"
              },
              "propertyName": {
                "ja": "遠隔操作設定",
                "en": "Remote controll setting"
              },
              "shortName": "remoteControlSetting",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "notThroughPublicNetwork",
                    "descriptions": {
                      "ja": "公衆回線未経由操作",
                      "en": "Not through a public network"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "throughPublicNetwork",
                    "descriptions": {
                      "ja": "公衆回線経由操作",
                      "en": "Through a public network"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "遠隔操作設定",
                "en": "Remote controll setting"
              },
              "shortName": "remoteControlSetting",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "notThroughPublicNetwork",
                    "descriptions": {
                      "ja": "公衆回線未経由操作",
                      "en": "Not through a public network"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "throughPublicNetwork",
                    "descriptions": {
                      "ja": "公衆回線経由操作",
                      "en": "Through a public network"
                    }
                  },
                  {
                    "edt": "0x61",
                    "name": "notPossible",
                    "descriptions": {
                      "ja": "通信回線正常（公衆回線経由の操作不可）",
                      "en": "Communication line is normal (operation through a public network is not possible)"
                    }
                  },
                  {
                    "edt": "0x62",
                    "name": "possible",
                    "descriptions": {
                      "ja": "通信回線正常（公衆回線経由の操作可能）",
                      "en": "Communication line is normal (operation through a public network is possible)"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0x97": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "現在時刻設定",
            "en": "Current time setting"
          },
          "shortName": "currentTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x98": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "現在年月日設定",
            "en": "Current date setting"
          },
          "shortName": "currentDate",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "date-time",
            "size": 4
          }
        },
        "0x99": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "電力制限設定",
            "en": "Power limit setting"
          },
          "shortName": "powerLimit",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65535",
            "unit": "W"
          }
        },
        "0x9A": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算運転時間",
            "en": "Cumulative operating time"
          },
          "shortName": "hourMeter",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "unit",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x41",
                      "name": "second",
                      "descriptions": {
                        "ja": "秒",
                        "en": "second"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "minute",
                      "descriptions": {
                        "ja": "分",
                        "en": "minute"
                      }
                    },
                    {
                      "edt": "0x43",
                      "name": "hour",
                      "descriptions": {
                        "ja": "時",
                        "en": "hour"
                      }
                    },
                    {
                      "edt": "0x44",
                      "name": "day",
                      "descriptions": {
                        "ja": "日",
                        "en": "day"
                      }
                    }
                  ]
                }
              },
              {
                "name": "time",
                "element": {
                  "$ref": "#/definitions/number_0-4294967295"
                }
              }
            ]
          }
        },
        "0x9D": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "状変アナウンスプロパティマップ",
            "en": "Status change announcement property map"
          },
          "shortName": "statusChangeAnnouncementPropertyMap",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1-17"
          },
          "note": {
            "ja": "１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap。Appendixの付録1参照",
            "en": "1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap. See Annex 1 of the Appendix"
          }
        },
        "0x9E": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "Setプロパティマップ",
            "en": "Set property map"
          },
          "shortName": "setPropertyMap",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1-17"
          },
          "note": {
            "ja": "１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap。Appendixの付録1参照",
            "en": "1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap. See Annex 1 of the Appendix"
          }
        },
        "0x9F": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "Getプロパティマップ",
            "en": "Get property map"
          },
          "shortName": "getPropertyMap",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1-17"
          },
          "note": {
            "ja": "１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap。Appendixの付録1参照",
            "en": "1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap. See Annex 1 of the Appendix"
          }
        }
      }
    },
  "devices":{
    "0x0130": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "家庭用エアコン",
        "en": "Home air conditioner"
      },
      "shortName": "homeAirConditioner",
      "elProperties": {
        "0x80": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "動作状態",
            "en": "Operation status"
          },
          "shortName": "operationStatus",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "true",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "false",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0x8F": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "節電動作設定",
            "en": "Power-saving operation setting"
          },
          "shortName": "powerSaving",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "節電動作中",
                  "en": "Operating in power-saving mode"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "通常動作中",
                  "en": "Operating in normal operation mode"
                }
              }
            ]
          }
        },
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ予約設定",
            "en": "ON timer-based reservation setting"
          },
          "shortName": "onTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "timeBasedAndRelativeTimeBasedOn",
                "descriptions": {
                  "ja": "時刻予約、相対時間予約共に入",
                  "en": "Both the time- and relative time-based reservation functions are ON"
                }
              },
              {
                "edt": "0x42",
                "name": "bothOff",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Both reservation functions are OFF"
                }
              },
              {
                "edt": "0x43",
                "name": "timeBasedOn",
                "descriptions": {
                  "ja": "時刻予約のみ入",
                  "en": "Time-based reservation function is ON"
                }
              },
              {
                "edt": "0x44",
                "name": "relativeTimeBasedOn",
                "descriptions": {
                  "ja": "相対時間予約のみ入",
                  "en": "Relative time-based reservation function is ON"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "ON timer setting(time)"
          },
          "shortName": "onTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x92": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ相対時間設定値",
            "en": "ON timer setting(relative time)"
          },
          "shortName": "onTimerRelativeTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2,
            "maximumOfHour": 255
          }
        },
        "0x94": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ予約設定",
            "en": "OFF timer-based reservation setting"
          },
          "shortName": "offTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "timeBasedAndRelativeTimeBasedOn",
                "descriptions": {
                  "ja": "時刻予約、相対時間予約共に入",
                  "en": "Both the time- and relative time-based reservation functions are ON"
                }
              },
              {
                "edt": "0x42",
                "name": "bothOff",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Both reservation functions are OFF"
                }
              },
              {
                "edt": "0x43",
                "name": "timeBasedOn",
                "descriptions": {
                  "ja": "時刻予約のみ入",
                  "en": "Time-based reservation function is ON"
                }
              },
              {
                "edt": "0x44",
                "name": "relativeTimeBasedOn",
                "descriptions": {
                  "ja": "相対時間予約のみ入",
                  "en": "Relative time-based reservation function is ON"
                }
              }
            ]
          }
        },
        "0x95": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ時刻設定値",
            "en": "OFF timer setting(time)"
          },
          "shortName": "offTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x96": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ相対時間設定値",
            "en": "OFF timer setting(relative time)"
          },
          "shortName": "offTimerRelativeTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2,
            "maximumOfHour": 255
          }
        },
        "0xA0": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "C"
              },
              "propertyName": {
                "ja": "風量設定",
                "en": "Air flow rate setting"
              },
              "shortName": "airFlowLevel",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "level",
                    "base": "0x31",
                    "maximum": 8,
                    "descriptions": {
                      "ja": "風量レベル",
                      "en": "Air flow rate"
                    }
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x41",
                        "name": "auto",
                        "descriptions": {
                          "ja": "風量自動設定",
                          "en": "Automatic air flow rate control function used"
                        }
                      }
                    ]
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "latest"
              },
              "propertyName": {
                "ja": "風量設定",
                "en": "Air flow rate setting"
              },
              "shortName": "airFlowLevel",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "level",
                    "base": "0x31",
                    "maximum": 8,
                    "descriptions": {
                      "ja": "風量レベル",
                      "en": "Air flow rate"
                    }
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x41",
                        "name": "auto",
                        "descriptions": {
                          "ja": "風量自動設定",
                          "en": "Automatic air flow rate control function used"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "0xA1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風向自動設定",
            "en": "Automatic control of air flow direction setting"
          },
          "shortName": "automaticControlAirFlowDirection",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "Auto",
                "descriptions": {
                  "ja": "AUTO",
                  "en": "Automatic"
                }
              },
              {
                "edt": "0x42",
                "name": "Non-Auto",
                "descriptions": {
                  "ja": "非AUTO",
                  "en": "Non-automatic"
                }
              },
              {
                "edt": "0x43",
                "name": "Auto(vertical)",
                "descriptions": {
                  "ja": "上下AUTO",
                  "en": "Automatic(vertical)"
                }
              },
              {
                "edt": "0x44",
                "name": "Auto(horizontal)",
                "descriptions": {
                  "ja": "左右AUTO",
                  "en": "Automatic(horizontal)"
                }
              }
            ]
          }
        },
        "0xA3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風向スイング設定",
            "en": "Automatic swing of air flow setting"
          },
          "shortName": "automaticSwingAirFlow",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x31",
                "name": "off",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              },
              {
                "edt": "0x41",
                "name": "vertical",
                "descriptions": {
                  "ja": "上下",
                  "en": "Vertical"
                }
              },
              {
                "edt": "0x42",
                "name": "holizontal",
                "descriptions": {
                  "ja": "左右",
                  "en": "Holizontal"
                }
              },
              {
                "edt": "0x43",
                "name": "verticalAndHolizontal",
                "descriptions": {
                  "ja": "上下左右",
                  "en": "Vertical and Holizontal"
                }
              }
            ]
          }
        },
        "0xA4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風向上下設定",
            "en": "Air flow direction(vertical) setting"
          },
          "shortName": "airFlowDirection(vertical)",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "uppermost",
                "descriptions": {
                  "ja": "上",
                  "en": "Uppermost"
                }
              },
              {
                "edt": "0x42",
                "name": "lowermost",
                "descriptions": {
                  "ja": "下",
                  "en": "Lowermost"
                }
              },
              {
                "edt": "0x43",
                "name": "central",
                "descriptions": {
                  "ja": "中央",
                  "en": "Central"
                }
              },
              {
                "edt": "0x44",
                "name": "upperCenter",
                "descriptions": {
                  "ja": "上中",
                  "en": "Midpoint between uppermost and central"
                }
              },
              {
                "edt": "0x45",
                "name": "lowerCenter",
                "descriptions": {
                  "ja": "下中",
                  "en": "Midpoint between lowermost and central"
                }
              }
            ]
          }
        },
        "0xA5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風向左右設定",
            "en": "Air flow direction(horizontal) setting"
          },
          "shortName": "airFlowDirection(horizontal)",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "RC-R",
                "descriptions": {
                  "ja": "右中・右",
                  "en": "Right center and Right"
                }
              },
              {
                "edt": "0x42",
                "name": "L-LC",
                "descriptions": {
                  "ja": "左・左中",
                  "en": "Left and Left center"
                }
              },
              {
                "edt": "0x43",
                "name": "LC-C-RC",
                "descriptions": {
                  "ja": "左中・中・右中",
                  "en": "Left center, Center and Right center"
                }
              },
              {
                "edt": "0x44",
                "name": "L-LC-RC-R",
                "descriptions": {
                  "ja": "左・左中・右中・右",
                  "en": "Left, Left center, Right center and Right"
                }
              },
              {
                "edt": "0x51",
                "name": "R",
                "descriptions": {
                  "ja": "右",
                  "en": "Right"
                }
              },
              {
                "edt": "0x52",
                "name": "RC",
                "descriptions": {
                  "ja": "右中",
                  "en": "Right center"
                }
              },
              {
                "edt": "0x54",
                "name": "C",
                "descriptions": {
                  "ja": "中",
                  "en": "Center"
                }
              },
              {
                "edt": "0x55",
                "name": "C-R",
                "descriptions": {
                  "ja": "中・右",
                  "en": "Center and right"
                }
              },
              {
                "edt": "0x56",
                "name": "C-RC",
                "descriptions": {
                  "ja": "中・右中",
                  "en": "Center and Right center"
                }
              },
              {
                "edt": "0x57",
                "name": "C-RC-R",
                "descriptions": {
                  "ja": "中・右中・右",
                  "en": "Center, Right center and Right"
                }
              },
              {
                "edt": "0x58",
                "name": "LC",
                "descriptions": {
                  "ja": "左中",
                  "en": "Left center"
                }
              },
              {
                "edt": "0x59",
                "name": "LC-R",
                "descriptions": {
                  "ja": "左中・右",
                  "en": "Left center and Right"
                }
              },
              {
                "edt": "0x5A",
                "name": "LC-RC",
                "descriptions": {
                  "ja": "左中・右中",
                  "en": "Left center and Right center"
                }
              },
              {
                "edt": "0x5B",
                "name": "LC-RC-R",
                "descriptions": {
                  "ja": "左中・右中・右",
                  "en": "Left center, Right center and Right"
                }
              },
              {
                "edt": "0x5C",
                "name": "LC-C",
                "descriptions": {
                  "ja": "左中・中",
                  "en": "Left center and Center"
                }
              },
              {
                "edt": "0x5D",
                "name": "LC-C-R",
                "descriptions": {
                  "ja": "左中・中・右",
                  "en": "Left center, Center and Right"
                }
              },
              {
                "edt": "0x5F",
                "name": "LC-C-RC-R",
                "descriptions": {
                  "ja": "左中・中・右中・右",
                  "en": "Left center, Center, Right center and Right"
                }
              },
              {
                "edt": "0x60",
                "name": "L",
                "descriptions": {
                  "ja": "左",
                  "en": "Left"
                }
              },
              {
                "edt": "0x61",
                "name": "L-R",
                "descriptions": {
                  "ja": "左・右",
                  "en": "Left and Right"
                }
              },
              {
                "edt": "0x62",
                "name": "L-RC",
                "descriptions": {
                  "ja": "左・右中",
                  "en": "Left and Right center"
                }
              },
              {
                "edt": "0x63",
                "name": "L-RC-R",
                "descriptions": {
                  "ja": "左・右中・右",
                  "en": "Left, Right center and Right"
                }
              },
              {
                "edt": "0x64",
                "name": "L-C",
                "descriptions": {
                  "ja": "左・中",
                  "en": "Left and Center"
                }
              },
              {
                "edt": "0x65",
                "name": "L-C-R",
                "descriptions": {
                  "ja": "左・中・右",
                  "en": "Left, Center and Right"
                }
              },
              {
                "edt": "0x66",
                "name": "L-C-RC",
                "descriptions": {
                  "ja": "左・中・右中",
                  "en": "Left, Center and Right center"
                }
              },
              {
                "edt": "0x67",
                "name": "L-C-RC-R",
                "descriptions": {
                  "ja": "左・中・右中・右",
                  "en": "Left, Center, Right center and Right"
                }
              },
              {
                "edt": "0x69",
                "name": "L-LC-R",
                "descriptions": {
                  "ja": "左・左中・右",
                  "en": "Left, Left center and Right"
                }
              },
              {
                "edt": "0x6A",
                "name": "L-LC-RC",
                "descriptions": {
                  "ja": "左・左中・右中",
                  "en": "Left, Left center and Right center"
                }
              },
              {
                "edt": "0x6C",
                "name": "L-LC-C",
                "descriptions": {
                  "ja": "左・左中・中",
                  "en": "Left, Left center and center"
                }
              },
              {
                "edt": "0x6D",
                "name": "L-LC-C-R",
                "descriptions": {
                  "ja": "左・左中・中・右",
                  "en": "Left, Left center, Center and Right"
                }
              },
              {
                "edt": "0x6E",
                "name": "L-LC-C-RC",
                "descriptions": {
                  "ja": "左・左中・中・右中",
                  "en": "Left, Left center, Center and Right center"
                }
              },
              {
                "edt": "0x6F",
                "name": "L-LC-C-RC-R",
                "descriptions": {
                  "ja": "左・左中・中・右中・右",
                  "en": "Left, Left center, Center, Right center and Right"
                }
              }
            ]
          }
        },
        "0xAA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "特殊状態",
            "en": "Special state"
          },
          "shortName": "specialState",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "normal",
                "descriptions": {
                  "ja": "通常状態",
                  "en": "Normal operation"
                }
              },
              {
                "edt": "0x41",
                "name": "defrosting",
                "descriptions": {
                  "ja": "除霜状態",
                  "en": "Defrosting"
                }
              },
              {
                "edt": "0x42",
                "name": "preheating",
                "descriptions": {
                  "ja": "予熱状態",
                  "en": "Preheating"
                }
              },
              {
                "edt": "0x43",
                "name": "heatRemoval",
                "descriptions": {
                  "ja": "排熱状態",
                  "en": "Heat removal"
                }
              }
            ]
          }
        },
        "0xAB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "非優先状態",
            "en": "Non-priority state"
          },
          "shortName": "nonPriorityState",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "false",
                "descriptions": {
                  "ja": "通常状態",
                  "en": "Normal"
                }
              },
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "非優先状態",
                  "en": "Non-priority"
                }
              }
            ]
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転モード設定",
            "en": "Operation mode setting"
          },
          "shortName": "operationMode",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "auto",
                "descriptions": {
                  "ja": "自動",
                  "en": "Automatic"
                }
              },
              {
                "edt": "0x42",
                "name": "cooling",
                "descriptions": {
                  "ja": "冷房",
                  "en": "Cooling"
                }
              },
              {
                "edt": "0x43",
                "name": "heating",
                "descriptions": {
                  "ja": "暖房",
                  "en": "Heating"
                }
              },
              {
                "edt": "0x44",
                "name": "dehumidification",
                "descriptions": {
                  "ja": "除湿",
                  "en": "Dehumidification"
                }
              },
              {
                "edt": "0x45",
                "name": "circulation",
                "descriptions": {
                  "ja": "送風",
                  "en": "Air circulator"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              }
            ]
          }
        },
        "0xB1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温度自動設定",
            "en": "Automatic temperature control setting"
          },
          "shortName": "automaticTemperatureControl",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "auto",
                "descriptions": {
                  "ja": "AUTO",
                  "en": "Automatic"
                }
              },
              {
                "edt": "0x42",
                "name": "nonAuto",
                "descriptions": {
                  "ja": "非AUTO",
                  "en": "Non-automatic"
                }
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "急速動作モード設定",
            "en": "Normal/highspeed/silent operation setting"
          },
          "shortName": "highspeedOperation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "normal",
                "descriptions": {
                  "ja": "通常運転",
                  "en": "Normal operation"
                }
              },
              {
                "edt": "0x42",
                "name": "highspeed",
                "descriptions": {
                  "ja": "急速",
                  "en": "High-speed operation"
                }
              },
              {
                "edt": "0x43",
                "name": "silent",
                "descriptions": {
                  "ja": "静音",
                  "en": "Silent operation"
                }
              }
            ]
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温度設定値",
            "en": "Set temperature value"
          },
          "shortName": "targetTemperature",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "Celsius",
                "minimum": 0,
                "maximum": 50
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "除湿モード時相対湿度設定値",
            "en": "Set value of relative humidity in dehumidifying mode"
          },
          "shortName": "relativeHumidityDehumidifying",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xB5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷房モード時温度設定値",
            "en": "Set temperature value in cooling mode"
          },
          "shortName": "targetTemperatureCooling",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "Celsius",
                "minimum": 0,
                "maximum": 50
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xB6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "暖房モード時温度設定値",
            "en": "Set temperature value in heating mode"
          },
          "shortName": "targetTemperatureHeating",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "Celsius",
                "minimum": 0,
                "maximum": 50
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xB7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "除湿モード時温度設定値",
            "en": "Set temperature value in dehumidifying mode"
          },
          "shortName": "targetTemperatureDehumidifying",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "Celsius",
                "minimum": 0,
                "maximum": 50
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xB8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格消費電力値",
            "en": "Rated power consumption"
          },
          "shortName": "ratedPowerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "cooling",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 65533,
                      "unit": "W"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0xFFFE",
                          "name": "unsupported",
                          "descriptions": {
                            "ja": "未サポート",
                            "en": "Unsupported"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "冷房",
                  "en": "Cooling"
                }
              },
              {
                "name": "heating",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 65533,
                      "unit": "W"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0xFFFE",
                          "name": "unsupported",
                          "descriptions": {
                            "ja": "未サポート",
                            "en": "Unsupported"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "暖房",
                  "en": "Heating"
                }
              },
              {
                "name": "dehumidifying",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 65533,
                      "unit": "W"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0xFFFE",
                          "name": "unsupported",
                          "descriptions": {
                            "ja": "未サポート",
                            "en": "Unsupported"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "除湿",
                  "en": "Dehumidifying"
                }
              },
              {
                "name": "blast",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 65533,
                      "unit": "W"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0xFFFE",
                          "name": "unsupported",
                          "descriptions": {
                            "ja": "未サポート",
                            "en": "Unsupported"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "送風",
                  "en": "Blast"
                }
              }
            ]
          }
        },
        "0xB9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "消費電流計測値",
            "en": "Measured value of current consumption"
          },
          "shortName": "currentConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "A",
            "multipleOf": 0.1
          }
        },
        "0xBA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内相対湿度計測値",
            "en": "Measured value of room relative humidity"
          },
          "shortName": "humidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "%",
                "minimum": 0,
                "maximum": 100
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "unmeasurable",
                    "descriptions": {
                      "ja": "計測不能",
                      "en": "Unmeasurable"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xBB": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "C"
              },
              "propertyName": {
                "ja": "室内温度計測値",
                "en": "Measured value of room temperature"
              },
              "shortName": "roomTemperature",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "number",
                    "format": "int8",
                    "unit": "Celsius",
                    "minimum": -127,
                    "maximum": 125
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x7E",
                        "name": "unmeasurable",
                        "descriptions": {
                          "ja": "計測不能",
                          "en": "Unmeasurable"
                        },
                        "readOnly": true
                      }
                    ]
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "latest"
              },
              "propertyName": {
                "ja": "室内温度計測値",
                "en": "Measured value of room temperature"
              },
              "shortName": "roomTemperature",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "number",
                    "format": "int8",
                    "unit": "Celsius",
                    "minimum": -127,
                    "maximum": 125
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x7E",
                        "name": "unmeasurable",
                        "descriptions": {
                          "ja": "計測不能",
                          "en": "Unmeasurable"
                        },
                        "readOnly": true
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "0xBC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ユーザリモコン温度設定値",
            "en": "Set temperature value of user remote control"
          },
          "shortName": "temperatureUserRemoteControl",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "Celsius",
            "minimum": 0,
            "maximum": 50
          }
        },
        "0xBD": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "吹き出し温度計測値",
            "en": "Measured cooled air temperature"
          },
          "shortName": "airFlowTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int8",
                "unit": "Celsius",
                "minimum": -127,
                "maximum": 125
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x7E",
                    "name": "unmeasurable",
                    "descriptions": {
                      "ja": "計測不能",
                      "en": "Unmeasurable"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xBE": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "外気温度計測値",
            "en": "Measured outdoor air temperature"
          },
          "shortName": "outdoorTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int8",
                "unit": "Celsius",
                "minimum": -127,
                "maximum": 125
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x7E",
                    "name": "unmeasurable",
                    "descriptions": {
                      "ja": "計測不能",
                      "en": "Unmeasurable"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xBF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "相対温度設定値",
            "en": "Relative temperature setting"
          },
          "shortName": "relativeTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int8",
                "unit": "Celsius",
                "minimum": -127,
                "maximum": 125,
                "multipleOf": 0.1
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x7E",
                    "name": "unmeasurable",
                    "descriptions": {
                      "ja": "計測不能",
                      "en": "Unmeasurable"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xC0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気モード設定",
            "en": "Ventilation function setting"
          },
          "shortName": "ventilationFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "ON(outlet)",
                "descriptions": {
                  "ja": "換気ON（排気方向）",
                  "en": "Ventilation function ON(outlet direction)"
                }
              },
              {
                "edt": "0x42",
                "name": "OFF",
                "descriptions": {
                  "ja": "換気OFF",
                  "en": "Ventilation function OFF"
                }
              },
              {
                "edt": "0x43",
                "name": "ON(intake)",
                "descriptions": {
                  "ja": "換気ON（吸気方向）",
                  "en": "Ventilation function ON(intake direction)"
                }
              },
              {
                "edt": "0x44",
                "name": "ON(outletAndIntake)",
                "descriptions": {
                  "ja": "換気ON（吸排気方向）",
                  "en": "Ventilation function ON(outlet and intake direction)"
                }
              }
            ]
          }
        },
        "0xC1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "加湿モード設定",
            "en": "Humidifier function setting"
          },
          "shortName": "humidifierFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "ON",
                "descriptions": {
                  "ja": "加湿ON",
                  "en": "Humidifier function ON"
                }
              },
              {
                "edt": "0x42",
                "name": "OFF",
                "descriptions": {
                  "ja": "加湿OFF",
                  "en": "Humidifier function OFF"
                }
              }
            ]
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気風量設定",
            "en": "Ventilation air flow rate setting"
          },
          "shortName": "ventilationAirFlowLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8,
                "descriptions": {
                  "ja": "換気風量レベル",
                  "en": "Ventilation air flow rate"
                }
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "換気風量自動",
                      "en": "Automatic control of ventilation air flow rate"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xC4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "加湿量設定",
            "en": "Degree of humidification setting"
          },
          "shortName": "humidificationLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8,
                "descriptions": {
                  "ja": "加湿量レベル",
                  "en": "Degree of humidification"
                }
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "加湿量自動",
                      "en": "Automatic control of the degree of humidification"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xC6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "搭載空気清浄方法",
            "en": "Mounted air cleaning method"
          },
          "shortName": "airCleaningMethod",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 1,
            "bitmaps": [
              {
                "name": "electronic",
                "descriptions": {
                  "ja": "電気集塵方式搭載情報",
                  "en": "Electronic dust collection"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000001"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "no",
                      "descriptions": {
                        "ja": "非搭載",
                        "en": "No"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "yes",
                      "descriptions": {
                        "ja": "搭載",
                        "en": "Yes"
                      }
                    }
                  ]
                }
              },
              {
                "name": "clusterIon",
                "descriptions": {
                  "ja": "クラスタイオン方式搭載情報",
                  "en": "Cluster ion"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000010"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "no",
                      "descriptions": {
                        "ja": "非搭載",
                        "en": "No"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "yes",
                      "descriptions": {
                        "ja": "搭載",
                        "en": "Yes"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xC7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "空気清浄機能モード設定",
            "en": "Air purifier function setting"
          },
          "shortName": "airPurifierFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 8,
            "bitmaps": [
              {
                "name": "electronic_level",
                "descriptions": {
                  "ja": "電気集塵方式：制御レベル",
                  "en": "Electronic dust collection:Level"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000111"
                },
                "value": {
                  "type": "numericValue",
                  "size": 0,
                  "enum": [
                    {
                      "edt": "0x00",
                      "numericValue": 0
                    },
                    {
                      "edt": "0x01",
                      "numericValue": 1
                    },
                    {
                      "edt": "0x02",
                      "numericValue": 2
                    },
                    {
                      "edt": "0x03",
                      "numericValue": 3
                    },
                    {
                      "edt": "0x04",
                      "numericValue": 4
                    },
                    {
                      "edt": "0x05",
                      "numericValue": 5
                    },
                    {
                      "edt": "0x06",
                      "numericValue": 6
                    },
                    {
                      "edt": "0x07",
                      "numericValue": 7
                    }
                  ]
                }
              },
              {
                "name": "electronic_mode",
                "descriptions": {
                  "ja": "電気集塵方式：動作モード",
                  "en": "Electronic dust collection:Mode"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00001000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              },
              {
                "name": "electronic_Auto",
                "descriptions": {
                  "ja": "電気集塵方式：制御状態",
                  "en": "Electronic dust collection:Auto function"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00010000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "nonAuto",
                      "descriptions": {
                        "ja": "非AUTO",
                        "en": "Non-automatic"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "auto",
                      "descriptions": {
                        "ja": "AUTO",
                        "en": "Automatic"
                      }
                    }
                  ]
                }
              },
              {
                "name": "clusterIon_level",
                "descriptions": {
                  "ja": "クラスタイオン方式：制御レベル",
                  "en": "Cluster ion:Level"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00000111"
                },
                "value": {
                  "type": "numericValue",
                  "size": 0,
                  "enum": [
                    {
                      "edt": "0x00",
                      "numericValue": 0
                    },
                    {
                      "edt": "0x01",
                      "numericValue": 1
                    },
                    {
                      "edt": "0x02",
                      "numericValue": 2
                    },
                    {
                      "edt": "0x03",
                      "numericValue": 3
                    },
                    {
                      "edt": "0x04",
                      "numericValue": 4
                    },
                    {
                      "edt": "0x05",
                      "numericValue": 5
                    },
                    {
                      "edt": "0x06",
                      "numericValue": 6
                    },
                    {
                      "edt": "0x07",
                      "numericValue": 7
                    }
                  ]
                }
              },
              {
                "name": "clusterIon_mode",
                "descriptions": {
                  "ja": "クラスタイオン方式：動作モード",
                  "en": "Cluster ion:Mode"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00001000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              },
              {
                "name": "clusterIon_Auto",
                "descriptions": {
                  "ja": "クラスタイオン方式：制御状態",
                  "en": "Cluster ion:Auto function"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00010000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "nonAuto",
                      "descriptions": {
                        "ja": "非AUTO",
                        "en": "Non-automatic"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "auto",
                      "descriptions": {
                        "ja": "AUTO",
                        "en": "Automatic"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xC8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "搭載リフレッシュ方法",
            "en": "Mounted air refresh method"
          },
          "shortName": "airRefreshMethod",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 1,
            "bitmaps": [
              {
                "name": "minusIon",
                "descriptions": {
                  "ja": "マイナスイオン方式搭載情報",
                  "en": "Minus ion collection"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000001"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "no",
                      "descriptions": {
                        "ja": "非搭載",
                        "en": "No"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "yes",
                      "descriptions": {
                        "ja": "搭載",
                        "en": "Yes"
                      }
                    }
                  ]
                }
              },
              {
                "name": "clusterIon",
                "descriptions": {
                  "ja": "クラスタイオン方式搭載情報",
                  "en": "Cluster ion"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000010"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "no",
                      "descriptions": {
                        "ja": "非搭載",
                        "en": "No"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "yes",
                      "descriptions": {
                        "ja": "搭載",
                        "en": "Yes"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xC9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "リフレッシュ機能モード設定",
            "en": "Air refresher function setting"
          },
          "shortName": "airRefresherFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 8,
            "bitmaps": [
              {
                "name": "minusIon_level",
                "descriptions": {
                  "ja": "マイナスイオン方式：制御レベル",
                  "en": "Minus ion:Level"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000111"
                },
                "value": {
                  "type": "numericValue",
                  "size": 0,
                  "enum": [
                    {
                      "edt": "0x00",
                      "numericValue": 0
                    },
                    {
                      "edt": "0x01",
                      "numericValue": 1
                    },
                    {
                      "edt": "0x02",
                      "numericValue": 2
                    },
                    {
                      "edt": "0x03",
                      "numericValue": 3
                    },
                    {
                      "edt": "0x04",
                      "numericValue": 4
                    },
                    {
                      "edt": "0x05",
                      "numericValue": 5
                    },
                    {
                      "edt": "0x06",
                      "numericValue": 6
                    },
                    {
                      "edt": "0x07",
                      "numericValue": 7
                    }
                  ]
                }
              },
              {
                "name": "minusIon_mode",
                "descriptions": {
                  "ja": "マイナスイオン方式：動作モード",
                  "en": "Minus ion:Mode"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00001000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              },
              {
                "name": "minusIon_Auto",
                "descriptions": {
                  "ja": "マイナスイオン方式：制御状態",
                  "en": "Minus ion:Auto function"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00010000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "nonAuto",
                      "descriptions": {
                        "ja": "非AUTO",
                        "en": "Non-automatic"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "auto",
                      "descriptions": {
                        "ja": "AUTO",
                        "en": "Automatic"
                      }
                    }
                  ]
                }
              },
              {
                "name": "clusterIon_level",
                "descriptions": {
                  "ja": "クラスタイオン方式：制御レベル",
                  "en": "Cluster ion:Level"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00000111"
                },
                "value": {
                  "type": "numericValue",
                  "size": 0,
                  "enum": [
                    {
                      "edt": "0x00",
                      "numericValue": 0
                    },
                    {
                      "edt": "0x01",
                      "numericValue": 1
                    },
                    {
                      "edt": "0x02",
                      "numericValue": 2
                    },
                    {
                      "edt": "0x03",
                      "numericValue": 3
                    },
                    {
                      "edt": "0x04",
                      "numericValue": 4
                    },
                    {
                      "edt": "0x05",
                      "numericValue": 5
                    },
                    {
                      "edt": "0x06",
                      "numericValue": 6
                    },
                    {
                      "edt": "0x07",
                      "numericValue": 7
                    }
                  ]
                }
              },
              {
                "name": "clusterIon_mode",
                "descriptions": {
                  "ja": "クラスタイオン方式：動作モード",
                  "en": "Cluster ion:Mode"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00001000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              },
              {
                "name": "clusterIon_Auto",
                "descriptions": {
                  "ja": "クラスタイオン方式：制御状態",
                  "en": "Cluster ion:Auto function"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00010000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "nonAuto",
                      "descriptions": {
                        "ja": "非AUTO",
                        "en": "Non-automatic"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "auto",
                      "descriptions": {
                        "ja": "AUTO",
                        "en": "Automatic"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "搭載自己洗浄方法",
            "en": "Mounted self-cleaning method"
          },
          "shortName": "selfCleaningMethod",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 1,
            "bitmaps": [
              {
                "name": "ozone",
                "descriptions": {
                  "ja": "オゾン洗浄方式搭載情報",
                  "en": "Information about ozone cleaning method mounting"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000001"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "no",
                      "descriptions": {
                        "ja": "非搭載",
                        "en": "No"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "yes",
                      "descriptions": {
                        "ja": "搭載",
                        "en": "Yes"
                      }
                    }
                  ]
                }
              },
              {
                "name": "drying",
                "descriptions": {
                  "ja": "乾燥方式搭載情報",
                  "en": "Information about drying method mounting"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000010"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "no",
                      "descriptions": {
                        "ja": "非搭載",
                        "en": "No"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "yes",
                      "descriptions": {
                        "ja": "搭載",
                        "en": "Yes"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xCB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自己洗浄機能モード設定",
            "en": "Self-cleaning function setting"
          },
          "shortName": "selfCleaningFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 8,
            "bitmaps": [
              {
                "name": "ozone_level",
                "descriptions": {
                  "ja": "オゾン洗浄方式：制御レベル",
                  "en": "Ozone cleaning:Level"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000111"
                },
                "value": {
                  "type": "numericValue",
                  "size": 0,
                  "enum": [
                    {
                      "edt": "0x00",
                      "numericValue": 0
                    },
                    {
                      "edt": "0x01",
                      "numericValue": 1
                    },
                    {
                      "edt": "0x02",
                      "numericValue": 2
                    },
                    {
                      "edt": "0x03",
                      "numericValue": 3
                    },
                    {
                      "edt": "0x04",
                      "numericValue": 4
                    },
                    {
                      "edt": "0x05",
                      "numericValue": 5
                    },
                    {
                      "edt": "0x06",
                      "numericValue": 6
                    },
                    {
                      "edt": "0x07",
                      "numericValue": 7
                    }
                  ]
                }
              },
              {
                "name": "ozone_mode",
                "descriptions": {
                  "ja": "オゾン洗浄方式：動作モード",
                  "en": "Ozone cleaning:Mode"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00001000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              },
              {
                "name": "ozone_Auto",
                "descriptions": {
                  "ja": "オゾン洗浄方式：制御状態",
                  "en": "Ozone cleaning:Auto function"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00010000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "nonAuto",
                      "descriptions": {
                        "ja": "非AUTO",
                        "en": "Non-automatic"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "auto",
                      "descriptions": {
                        "ja": "AUTO",
                        "en": "Automatic"
                      }
                    }
                  ]
                }
              },
              {
                "name": "drying_level",
                "descriptions": {
                  "ja": "乾燥方式：制御レベル",
                  "en": "Drying:Level"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00000111"
                },
                "value": {
                  "type": "numericValue",
                  "size": 0,
                  "enum": [
                    {
                      "edt": "0x00",
                      "numericValue": 0
                    },
                    {
                      "edt": "0x01",
                      "numericValue": 1
                    },
                    {
                      "edt": "0x02",
                      "numericValue": 2
                    },
                    {
                      "edt": "0x03",
                      "numericValue": 3
                    },
                    {
                      "edt": "0x04",
                      "numericValue": 4
                    },
                    {
                      "edt": "0x05",
                      "numericValue": 5
                    },
                    {
                      "edt": "0x06",
                      "numericValue": 6
                    },
                    {
                      "edt": "0x07",
                      "numericValue": 7
                    }
                  ]
                }
              },
              {
                "name": "drying_mode",
                "descriptions": {
                  "ja": "乾燥方式：動作モード",
                  "en": "Drying:Mode"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00001000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              },
              {
                "name": "drying_Auto",
                "descriptions": {
                  "ja": "乾燥方式：制御状態",
                  "en": "Drying:Auto function"
                },
                "position": {
                  "index": 1,
                  "bitMask": "0b00010000"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "nonAuto",
                      "descriptions": {
                        "ja": "非AUTO",
                        "en": "Non-automatic"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "auto",
                      "descriptions": {
                        "ja": "AUTO",
                        "en": "Automatic"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xCC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "特別運転モード設定",
            "en": "Special function setting"
          },
          "shortName": "specialFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "noSetting",
                "descriptions": {
                  "ja": "設定なし",
                  "en": "No setting"
                }
              },
              {
                "edt": "0x41",
                "name": "clothesDryer",
                "descriptions": {
                  "ja": "衣類乾燥",
                  "en": "Clothes dryer function"
                }
              },
              {
                "edt": "0x42",
                "name": "condensationSuppressor",
                "descriptions": {
                  "ja": "結露抑制",
                  "en": "Condensation suppressor function"
                }
              },
              {
                "edt": "0x43",
                "name": "miteAndMoldControl",
                "descriptions": {
                  "ja": "ダニカビ抑制",
                  "en": "Mite and mold control function"
                }
              },
              {
                "edt": "0x44",
                "name": "activeDefrosting",
                "descriptions": {
                  "ja": "強制除霜",
                  "en": "Active defrosting function"
                }
              }
            ]
          }
        },
        "0xCD": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "内部動作状態",
            "en": "Operation status of components"
          },
          "shortName": "componentsOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "bitmap",
            "size": 1,
            "bitmaps": [
              {
                "name": "compressor",
                "descriptions": {
                  "ja": "コンプレッサ動作状態",
                  "en": "Operation status of the compressor"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000001"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "停止中",
                        "en": "Not operating"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "動作中",
                        "en": "In operation"
                      }
                    }
                  ]
                }
              },
              {
                "name": "thermostat",
                "descriptions": {
                  "ja": "サーモON/OFF状態",
                  "en": "Operation status of the thermostat"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b00000010"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "name": "OFF",
                      "descriptions": {
                        "ja": "OFF",
                        "en": "OFF"
                      }
                    },
                    {
                      "edt": 1,
                      "name": "ON",
                      "descriptions": {
                        "ja": "ON",
                        "en": "ON"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xCE": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "C"
              },
              "propertyName": {
                "ja": "強制サーモモード設定",
                "en": "Thermostat setting override function"
              },
              "shortName": "thermostatOverride",
              "accessRule": {
                "get": "notApplicable",
                "set": "optional",
                "inf": "notApplicable"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x40",
                    "name": "normal",
                    "descriptions": {
                      "ja": "通常設定",
                      "en": "Normal setting"
                    }
                  },
                  {
                    "edt": "0x41",
                    "name": "ON",
                    "descriptions": {
                      "ja": "強制サーモON",
                      "en": "Thermostat setting override function ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "OFF",
                    "descriptions": {
                      "ja": "強制サーモOFF",
                      "en": "Thermostat setting override function OFF"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "latest"
              },
              "propertyName": {
                "ja": "強制サーモモード設定",
                "en": "Thermostat setting override function"
              },
              "shortName": "thermostatOverride",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x40",
                    "name": "normal",
                    "descriptions": {
                      "ja": "通常設定",
                      "en": "Normal setting"
                    }
                  },
                  {
                    "edt": "0x41",
                    "name": "ON",
                    "descriptions": {
                      "ja": "強制サーモON",
                      "en": "Thermostat setting override function ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "OFF",
                    "descriptions": {
                      "ja": "強制サーモOFF",
                      "en": "Thermostat setting override function OFF"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xCF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "空気清浄モード設定",
            "en": "Air purification mode setting"
          },
          "shortName": "airPurification",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "ON",
                "descriptions": {
                  "ja": "空気清浄ON",
                  "en": "Air purification ON"
                }
              },
              {
                "edt": "0x42",
                "name": "OFF",
                "descriptions": {
                  "ja": "空気清浄OFF",
                  "en": "Air purification OFF"
                }
              }
            ]
          }
        },
        "0xD0": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ブザー",
            "en": "Buzzer"
          },
          "shortName": "buzzer",
          "accessRule": {
            "get": "notApplicable",
            "set": "optional",
            "inf": "notApplicable"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "buzzer",
                "descriptions": {
                  "ja": "ブザー音発生",
                  "en": "Buzzer sound generation"
                }
              }
            ]
          }
        }
      }
    },
    "0x0133": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "換気扇",
        "en": "Ventilation fan"
      },
      "shortName": "ventilationFan",
      "elProperties": {
        "0x80": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "動作状態",
            "en": "Operation status"
          },
          "shortName": "operationStatus",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "true",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "false",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xA0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気風量設定",
            "en": "Set value of ventilation air flow rate"
          },
          "shortName": "airFlowLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8,
                "descriptions": {
                  "ja": "換気風量レベル",
                  "en": "Ventilation air flow rate level"
                }
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "換気風量自動状態",
                      "en": "Ventilation air flow rate auto status"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xBF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気自動設定",
            "en": "Ventilation Auto setting"
          },
          "shortName": "ventilationAuto",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "AUTO",
                  "en": "Auto"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "非AUTO",
                  "en": "Non-auto"
                }
              }
            ]
          }
        }
      }
    },
    "0x0134": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "空調換気扇",
        "en": "Air conditioner ventilation fan"
      },
      "shortName": "airConditionerVentilationFan",
      "elProperties": {
        "0x80": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "動作状態",
            "en": "Operation status"
          },
          "shortName": "operationStatus",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "true",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "false",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xA0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気風量設定",
            "en": "Set value of ventilation air flow rate"
          },
          "shortName": "airFlowLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8,
                "descriptions": {
                  "ja": "換気風量レベル",
                  "en": ":Ventilation air flow rate level"
                }
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "換気風量自動状態",
                      "en": "Ventilation air flow rate auto status"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気モード自動設定",
            "en": "Ventilation mode automatic setting"
          },
          "shortName": "ventilationAuto",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "AUTO",
                  "en": "Auto"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "非AUTO",
                  "en": "Non-auto"
                }
              }
            ]
          }
        },
        "0xB1": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気方式設定",
            "en": "Ventilation method setting"
          },
          "shortName": "ventilationMethod",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "blowing",
                "descriptions": {
                  "ja": "送風換気",
                  "en": "Blowing ventilation"
                }
              },
              {
                "edt": "0x42",
                "name": "airConditioning",
                "descriptions": {
                  "ja": "空調換気",
                  "en": "Air conditioning ventilation"
                }
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気モード設定",
            "en": "Ventilation mode setting"
          },
          "shortName": "ventilationMode",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "normal",
                "descriptions": {
                  "ja": "普通換気",
                  "en": "Normal ventilation"
                }
              },
              {
                "edt": "0x42",
                "name": "heatExchange",
                "descriptions": {
                  "ja": "熱交換換気",
                  "en": "Heat exchange ventilation"
                }
              },
              {
                "edt": "0x43",
                "name": "cooling",
                "descriptions": {
                  "ja": "冷房換気",
                  "en": "Cooling ventilation"
                }
              },
              {
                "edt": "0x44",
                "name": "heating",
                "descriptions": {
                  "ja": "暖房換気",
                  "en": "Heating ventilation"
                }
              },
              {
                "edt": "0x45",
                "name": "dehumidifying",
                "descriptions": {
                  "ja": "除湿換気",
                  "en": "Dehumidifying ventilation"
                }
              },
              {
                "edt": "0x46",
                "name": "humidifying",
                "descriptions": {
                  "ja": "加湿換気",
                  "en": "Humidifying ventilation"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他換気",
                  "en": "Other ventilation modes"
                }
              }
            ]
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷暖強弱設定",
            "en": "Cooling / heating high-low setting"
          },
          "shortName": "highlowLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "level",
            "base": "0x31",
            "maximum": 8,
            "descriptions": {
              "ja": "冷暖強弱レベル",
              "en": "Cooling / heating high-low setting level"
            }
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内相対湿度設定値",
            "en": "Set value of room relative humidity"
          },
          "shortName": "tartgetHumidity",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xB9": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "消費電流計測値",
            "en": "Measured value of electric current consumption"
          },
          "shortName": "currentConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "A",
            "multipleOf": 0.1
          }
        },
        "0xBA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内相対湿度計測値",
            "en": "Measured value of room relative humidity"
          },
          "shortName": "humidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xBE": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "外気温度計測値",
            "en": "Measured value of outdoor air temperature"
          },
          "shortName": "outdoorTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 125
          }
        },
        "0xBF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気自動設定",
            "en": "Ventilation auto setting"
          },
          "shortName": "ventilationAuto",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "AUTO",
                  "en": "Auto"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "非AUTO",
                  "en": "Non-auto"
                }
              }
            ]
          }
        },
        "0xC0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "CO2濃度計測値",
            "en": "Measured value of CO2 concentration"
          },
          "shortName": "co2Concentration",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "ppm"
          }
        },
        "0xC1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "煙（タバコ）検知状態",
            "en": "Smoke (cigarette) detection status"
          },
          "shortName": "smokeDetection",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "煙(タバコ)検知有",
                  "en": "Smoke (cigarette) detection status found"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "煙(タバコ)検知無",
                  "en": "Smoke (cigarette) detection status not found"
                }
              }
            ]
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "汚れ検知状態",
            "en": "Pollution detection status"
          },
          "shortName": "pollutionDetection",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "汚れ検知有",
                  "en": "Pollution detected"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "汚れ検知無",
                  "en": "Pollution non-detected"
                }
              }
            ]
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "外気相対湿度計測値",
            "en": "Measured value of outdoor relative humidity"
          },
          "shortName": "outdoorHumidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xD0": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "還気温度計測値",
            "en": "Measured value of return air temperature"
          },
          "shortName": "returnAirTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "array",
            "itemSize": 1,
            "minItems": 10,
            "maxItems": 10,
            "items": {
              "oneOf": [
                {
                  "type": "number",
                  "format": "int8",
                  "unit": "Celsius",
                  "minimum": -127,
                  "maximum": 125
                },
                {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x7E",
                      "name": "unmeasurable",
                      "descriptions": {
                        "ja": "計測不能",
                        "en": "Unmeasurable"
                      },
                      "readOnly": true
                    }
                  ]
                }
              ]
            }
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "還気相対湿度計測値",
            "en": "Measured value of return relative humidity"
          },
          "shortName": "returnAirHumidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "array",
            "itemSize": 1,
            "minItems": 10,
            "maxItems": 10,
            "items": {
              "oneOf": [
                {
                  "type": "number",
                  "format": "uint8",
                  "unit": "%",
                  "minimum": 0,
                  "maximum": 100
                },
                {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0xFD",
                      "name": "undefined",
                      "descriptions": {
                        "ja": "不明",
                        "en": "Undefined"
                      },
                      "readOnly": true
                    }
                  ]
                }
              ]
            }
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給気温度計測値",
            "en": "Measured value of charging air temperature"
          },
          "shortName": "chargingAirTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 125
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給気相対湿度計測値",
            "en": "Measured value of charging relative humidity"
          },
          "shortName": "chargingAirHumidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "排気温度計測値",
            "en": "Measured value of discharging air temperature"
          },
          "shortName": "dischargingAirTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 125
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "排気相対湿度計測値",
            "en": "Measured value of discharging air relative humidity"
          },
          "shortName": "dischargingAirHumidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "熱交換機動作設定",
            "en": "Heat exchanger operation setting"
          },
          "shortName": "heatExchangerOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "熱交換機ON",
                  "en": "Heat exchanger ON"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "熱交換機OFF",
                  "en": "Heat exchanger ON"
                }
              }
            ]
          }
        }
      }
    },
    "0x0135": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "空気清浄器",
        "en": "Air cleaner"
      },
      "shortName": "airCleaner",
      "elProperties": {
        "0x80": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "動作状態",
            "en": "Operation status"
          },
          "shortName": "operationStatus",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "true",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "false",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xA0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風量設定",
            "en": "Air flow rate setting"
          },
          "shortName": "airFlowLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8,
                "descriptions": {
                  "ja": "換気風量レベル",
                  "en": "Ventilation air flow rate level"
                }
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "換気風量自動状態",
                      "en": "Ventilation air flow rate auto status"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xC0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "空気汚れ検知状態",
            "en": "Air pollution detection status"
          },
          "shortName": "pollutionDetection",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "空気汚れ検知有",
                  "en": "Air pollution detected"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "空気汚れ検知無",
                  "en": "Air pollution non-detected"
                }
              }
            ]
          }
        },
        "0xC1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "煙(タバコ)検知状態",
            "en": "Smoke (cigarette) detection status"
          },
          "shortName": "smokeDetection",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "煙(タバコ)検知有",
                  "en": "Smoke (cigarette) detection status found"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "煙(タバコ)検知無",
                  "en": "Smoke (cigarette) detection status not found"
                }
              }
            ]
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "光触媒動作設定",
            "en": "Optical catalyst operation setting"
          },
          "shortName": "opticalCatalystOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "光触媒ON",
                  "en": "Optical catalyst ON"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "光触媒OFF",
                  "en": "Optical catalyst OFF"
                }
              }
            ]
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "フィルタ交換通知状態",
            "en": "Filter change notice"
          },
          "shortName": "filterChangeNotice",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "フィルタ交換時期通知有",
                  "en": "Found"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "フィルタ交換時期通知無",
                  "en": "Not found"
                }
              }
            ]
          }
        }
      }
    },
    "0x0156": {
      "validRelease": {
        "from": "I",
        "to": "latest"
      },
      "className": {
        "ja": "業務用パッケージエアコン室内機（設備用を除く）",
        "en": "Package-type commercial air conditioner (indoor unit) (except those for facilities)"
      },
      "shortName": "commercialAirConditionerIndoorUnit",
      "elProperties": {
        "0xAC": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "サーモ状態",
            "en": "Thermostat state"
          },
          "shortName": "thermostatState",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "サーモON ",
                  "en": "Thermostat ON"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "サーモOFF",
                  "en": "Thermostat OFF"
                }
              }
            ]
          }
        },
        "0xAE": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自動運転時運転モード状態",
            "en": "Current function (automatic operation mode)"
          },
          "shortName": "automaticOperationModeStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              },
              {
                "edt": "0x42",
                "name": "cooling",
                "descriptions": {
                  "ja": "冷房",
                  "en": "Cooling"
                }
              },
              {
                "edt": "0x43",
                "name": "heating",
                "descriptions": {
                  "ja": "暖房",
                  "en": "Heating"
                }
              },
              {
                "edt": "0x44",
                "name": "dehumidification",
                "descriptions": {
                  "ja": "除湿",
                  "en": "Dehumidification"
                }
              },
              {
                "edt": "0x45",
                "name": "circulation",
                "descriptions": {
                  "ja": "送風",
                  "en": "Air circulation"
                }
              }
            ]
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転モード設定",
            "en": "Operation mode setting"
          },
          "shortName": "operationMode",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "auto",
                "descriptions": {
                  "ja": "自動",
                  "en": "Automatic"
                }
              },
              {
                "edt": "0x42",
                "name": "cooling",
                "descriptions": {
                  "ja": "冷房",
                  "en": "Cooling"
                }
              },
              {
                "edt": "0x43",
                "name": "heating",
                "descriptions": {
                  "ja": "暖房",
                  "en": "Heating"
                }
              },
              {
                "edt": "0x44",
                "name": "dehumidification",
                "descriptions": {
                  "ja": "除湿",
                  "en": "Dehumidification"
                }
              },
              {
                "edt": "0x45",
                "name": "circulation",
                "descriptions": {
                  "ja": "送風",
                  "en": "Air circulation"
                }
              }
            ]
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温度設定値",
            "en": "Temperature setting"
          },
          "shortName": "targetTemperature",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "Celsius",
            "minimum": 0,
            "maximum": 50
          }
        },
        "0xBB": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内機温度計測値",
            "en": "Measured indoor unit temperature"
          },
          "shortName": "roomTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int8",
                "unit": "Celsius",
                "minimum": -127,
                "maximum": 125
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x7E",
                    "name": "unmeasurable",
                    "descriptions": {
                      "ja": "計測値を返せない",
                      "en": "When the measurement value cannot be returned."
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "グループ情報",
            "en": "Group information"
          },
          "shortName": "groupInformation",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "minimum": 1,
                "maximum": 253
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "name": "none",
                    "descriptions": {
                      "ja": "設定なし",
                      "en": "No setting"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xDB": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内機消費電力範囲",
            "en": "Power consumption range for indoor units"
          },
          "shortName": "powerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "name": "undefined",
                "descriptions": {
                  "ja": "未定",
                  "en": "Undefined"
                }
              },
              {
                "edt": "0x01",
                "name": "less50W",
                "descriptions": {
                  "ja": "50W未満",
                  "en": "up to 50W"
                }
              },
              {
                "edt": "0x02",
                "name": "less100W",
                "descriptions": {
                  "ja": "50W以上〜100W未満",
                  "en": "50W-100W"
                }
              },
              {
                "edt": "0x03",
                "name": "less150W",
                "descriptions": {
                  "ja": "100W以上〜150W未満",
                  "en": "100W-150W"
                }
              },
              {
                "edt": "0x04",
                "name": "less200W",
                "descriptions": {
                  "ja": "150W以上〜200W未満",
                  "en": "150W-200W"
                }
              },
              {
                "edt": "0x05",
                "name": "200WOrMore",
                "descriptions": {
                  "ja": "200W以上",
                  "en": "200W-"
                }
              }
            ]
          }
        }
      }
    },
    "0x0157": {
      "validRelease": {
        "from": "I",
        "to": "latest"
      },
      "className": {
        "ja": "業務用パッケージエアコン室外機（設備用を除く）",
        "en": "Package-type commercial air conditioner (outdoor unit)"
      },
      "shortName": "commercialAirConditionerOutdoorUnit",
      "elProperties": {
        "0xAB": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "特殊状態",
            "en": "Special state"
          },
          "shortName": "specialState",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "false",
                "descriptions": {
                  "ja": "通常状態",
                  "en": "Normal operation"
                }
              },
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "特殊状態",
                  "en": "“special” state"
                }
              }
            ]
          }
        },
        "0xB8": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室外機定格消費電力値",
            "en": "Rated power consumption of outdoor unit"
          },
          "shortName": "ratedPowerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "Cooling",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 4294967293,
                      "unit": "W"
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "unsupported",
                          "descriptions": {
                            "ja": "サポートしない",
                            "en": "Unsupported"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "冷房",
                  "en": "Cooling"
                }
              },
              {
                "name": "Heating",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 4294967293,
                      "unit": "W"
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "unsupported",
                          "descriptions": {
                            "ja": "サポートしない",
                            "en": "Unsupported"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "暖房",
                  "en": "Heating"
                }
              }
            ]
          }
        },
        "0xBE": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室外機温度計測値",
            "en": "Measured outdoor unit temperature"
          },
          "shortName": "outdoorTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int8",
                "unit": "Celsius",
                "minimum": -127,
                "maximum": 125
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x7E",
                    "name": "unmeasurable",
                    "descriptions": {
                      "ja": "計測値を返せない",
                      "en": "When the measurement value cannot be returned."
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "グループ情報",
            "en": "Group information"
          },
          "shortName": "groupInformation",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "minimum": 1,
                "maximum": 253
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "name": "none",
                    "descriptions": {
                      "ja": "設定なし",
                      "en": "No setting"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xDB": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室外機消費電力計測値",
            "en": "Measured power consumption of outdoor unit"
          },
          "shortName": "powerConsumption",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 4294967293,
            "unit": "W"
          }
        },
        "0xDD": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室外機節電可能消費電力",
            "en": "Possible power savings for outdoor units"
          },
          "shortName": "powerConsumptionWillBeSaved",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 4294967293,
            "unit": "W"
          }
        },
        "0xDE": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室外機消費電力制限設定",
            "en": "Settings restricting power consumption of outdoor units"
          },
          "shortName": "powerConsumptionLimit",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint32",
                "minimum": 1,
                "maximum": 4294967293,
                "unit": "W"
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0x00000000",
                    "name": "Canceling",
                    "descriptions": {
                      "ja": "電力制限解除",
                      "en": "Canceling the restriction"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xDF": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室外機抑制最低消費電力",
            "en": "Minimum power consumption for restricted outdoor unit"
          },
          "shortName": "restrictedMinimumPowerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 4294967293,
            "unit": "W"
          }
        }
      }
    },
    "0x03B7": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "冷凍冷蔵庫",
        "en": "Refrigerator"
      },
      "shortName": "refrigerator",
      "elProperties": {
        "0xA0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "急速冷凍動作設定",
            "en": "Quick freeze function setting"
          },
          "shortName": "quickFreeze",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "normal",
                "descriptions": {
                  "ja": "通常冷凍",
                  "en": "Normal operation"
                }
              },
              {
                "edt": "0x42",
                "name": "quick",
                "descriptions": {
                  "ja": "急速冷凍",
                  "en": "Quick freeze"
                }
              },
              {
                "edt": "0x43",
                "name": "standby",
                "descriptions": {
                  "ja": "急速冷凍待機",
                  "en": "Standby for quick freezing"
                }
              }
            ]
          }
        },
        "0xA1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "急速冷蔵動作設定",
            "en": "Quick refrigeration function setting"
          },
          "shortName": "quickRefrigeration",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "normal",
                "descriptions": {
                  "ja": "通常冷蔵",
                  "en": "Normal operation"
                }
              },
              {
                "edt": "0x42",
                "name": "quick",
                "descriptions": {
                  "ja": "急速冷蔵",
                  "en": "Quick refrigeration"
                }
              },
              {
                "edt": "0x43",
                "name": "standby",
                "descriptions": {
                  "ja": "急速冷蔵待機",
                  "en": "Standby for quick refrigeration"
                }
              }
            ]
          }
        },
        "0xA4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "製氷許可設定",
            "en": "Icemaker setting"
          },
          "shortName": "icemaker",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "enable",
                "descriptions": {
                  "ja": "製氷許可",
                  "en": "Enable icemaker"
                }
              },
              {
                "edt": "0x42",
                "name": "disable",
                "descriptions": {
                  "ja": "製氷禁止",
                  "en": "Disable icemaker"
                }
              },
              {
                "edt": "0x43",
                "name": "standby",
                "descriptions": {
                  "ja": "製氷一定時間禁止",
                  "en": "Temporarily disable icemaker"
                }
              }
            ]
          }
        },
        "0xA5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "製氷動作状態",
            "en": "Icemaker operation status"
          },
          "shortName": "icemakerStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "running",
                "descriptions": {
                  "ja": "運転中",
                  "en": "Ice-making in progress"
                }
              },
              {
                "edt": "0x42",
                "name": "stopped",
                "descriptions": {
                  "ja": "停止中",
                  "en": "Ice-making stopped"
                }
              }
            ]
          }
        },
        "0xA6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "製氷用給水タンク状態",
            "en": "Icemaker tank status"
          },
          "shortName": "icemakerTankStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "normal",
                "descriptions": {
                  "ja": "水あり",
                  "en": "Water in tank"
                }
              },
              {
                "edt": "0x42",
                "name": "warning",
                "descriptions": {
                  "ja": "水なし",
                  "en": "No water"
                }
              }
            ]
          }
        },
        "0xA8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷蔵室加湿動作設定",
            "en": "Refrigerator compartment humidification function setting"
          },
          "shortName": "refrigeratorHumidification",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "加湿ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "加湿OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xA9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "野菜室加湿動作設定",
            "en": "Vegetable compartment humidification function setting"
          },
          "shortName": "vegetableHumidification",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "加湿ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "加湿OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xAD": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "脱臭動作設定",
            "en": "Deodorization function setting"
          },
          "shortName": "deodorization",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "脱臭ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "脱臭OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ドア開閉状態",
            "en": "Door open/close status"
          },
          "shortName": "doorOpenCloseStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "anyOpen",
                "descriptions": {
                  "ja": "ドア開",
                  "en": "Door open"
                }
              },
              {
                "edt": "0x42",
                "name": "allClose",
                "descriptions": {
                  "ja": "ドア閉",
                  "en": "Door close"
                }
              }
            ]
          }
        },
        "0xB1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ドア開放警告状態",
            "en": "Door open warning"
          },
          "shortName": "doorOpenWarning",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "true",
                "descriptions": {
                  "ja": "ドア開放警告有",
                  "en": "Door open warning found"
                }
              },
              {
                "edt": "0x42",
                "name": "false",
                "descriptions": {
                  "ja": "ドア開放警告無",
                  "en": "Door open warning not found"
                }
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷蔵室ドア開閉状態",
            "en": "Refrigerator compartment door status"
          },
          "shortName": "refrigeratorCompartmentDoorStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "ドア開",
                  "en": "Open"
                }
              },
              {
                "edt": "0x42",
                "name": "close",
                "descriptions": {
                  "ja": "ドア閉",
                  "en": "Closed"
                }
              }
            ]
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷凍室ドア開閉状態",
            "en": "Freezer compartment door status"
          },
          "shortName": "freezerCompartmentDoorStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "ドア開",
                  "en": "Open"
                }
              },
              {
                "edt": "0x42",
                "name": "close",
                "descriptions": {
                  "ja": "ドア閉",
                  "en": "Closed"
                }
              }
            ]
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "氷温室ドア開閉状態",
            "en": "Ice compartment door status"
          },
          "shortName": "iceCompartmentDoorStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "ドア開",
                  "en": "Open"
                }
              },
              {
                "edt": "0x42",
                "name": "close",
                "descriptions": {
                  "ja": "ドア閉",
                  "en": "Closed"
                }
              }
            ]
          }
        },
        "0xB5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "野菜室ドア開閉状態",
            "en": "Vegetable compartment door status"
          },
          "shortName": "vegetableCompartmentDoorStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "ドア開",
                  "en": "Open"
                }
              },
              {
                "edt": "0x42",
                "name": "close",
                "descriptions": {
                  "ja": "ドア閉",
                  "en": "Closed"
                }
              }
            ]
          }
        },
        "0xB6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "切換室ドア開閉状態",
            "en": "Multi-refrigerating mode compartment door status"
          },
          "shortName": "multiModeCompartmentDoorStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "ドア開",
                  "en": "Open"
                }
              },
              {
                "edt": "0x42",
                "name": "close",
                "descriptions": {
                  "ja": "ドア閉",
                  "en": "Closed"
                }
              }
            ]
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷蔵室温度計測値",
            "en": "Measured refrigerator compartment temperature"
          },
          "shortName": "measuredRefrigeratorTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷凍室温度計測値",
            "en": "Measured freezer compartment temperature"
          },
          "shortName": "measuredFreezerTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "氷温室温度計測値",
            "en": "Measured subzero-fresh compartment temperature"
          },
          "shortName": "measuredIceTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "野菜室温度計測値",
            "en": "Measured vegetable compartment temperature"
          },
          "shortName": "measuredVegetableTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "切替室室温度計測値",
            "en": "Measured multi-refrigerating mode compartment temperature"
          },
          "shortName": "measuredMultiModeTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xD8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "圧縮機回転数レベル",
            "en": "Compressor rotation speed"
          },
          "shortName": "compressorRotationSpeed",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "maxLevel",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 1,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "最大回転数レベル",
                  "en": "Maximum rotation speed"
                }
              },
              {
                "name": "level",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "回転数レベル",
                  "en": "Rotation speed of the actual compressor"
                }
              }
            ]
          },
          "note": {
            "ja": "0x00:停止",
            "en": "0x00:Stopped"
          }
        },
        "0xDA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "消費電流計測値",
            "en": "Measured electric current consumption"
          },
          "shortName": "electricCurrentConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "A",
            "multipleOf": 0.1
          }
        },
        "0xDC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格消費電力値",
            "en": "Rated power consumption"
          },
          "shortName": "ratedPowerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "W"
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "設定可能温度レベル最大値",
            "en": "Maximum allowable temperature setting level"
          },
          "shortName": "maximumAllowableTemperatureLevel",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "refrigerator",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "冷蔵室",
                  "en": "Refrigerator compartment"
                }
              },
              {
                "name": "freezer",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "冷凍室",
                  "en": "Freezer compartment"
                }
              },
              {
                "name": "ice",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "氷温室",
                  "en": "Subzero-fresh compartment"
                }
              },
              {
                "name": "vegetable",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "野菜室",
                  "en": "Vegetable compartment"
                }
              },
              {
                "name": "multi",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 255
                },
                "descriptions": {
                  "ja": "切換室",
                  "en": "Multi-refrigerating mode compartment"
                }
              },
              {
                "name": "reserved",
                "element": {
                  "$ref": "#/definitions/raw_3"
                },
                "descriptions": {
                  "ja": "for future reserved",
                  "en": "Reserved for future use"
                }
              }
            ]
          },
          "note": {
            "ja": "0x00:室を搭載していない場合",
            "en": "0x00:no compartment"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷蔵室温度設定値",
            "en": "Refrigerator compartment temperature setting"
          },
          "shortName": "refrigeratorTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷凍室温度設定値",
            "en": "Freezer compartment temperature setting"
          },
          "shortName": "freezerTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "氷温室温度設定値",
            "en": "Ice temperature setting"
          },
          "shortName": "iceTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "野菜室温度設定値",
            "en": "Vegetable compartment temperature setting"
          },
          "shortName": "vegetableTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "切換室温度設定値",
            "en": "Multi-refrigerating mode compartment temperature setting"
          },
          "shortName": "multiModeTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xE9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷蔵室温度レベル設定",
            "en": "Refrigerator compartment temperature level setting"
          },
          "shortName": "refrigeratorTemperatureLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "minimum": 1,
            "maximum": 255
          },
          "note": {
            "ja": "最大値はEPC=0xE0の値",
            "en": "maximum value is at EPC=0xE0"
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷凍室温度レベル設定",
            "en": "Freezer compartment temperature level setting"
          },
          "shortName": "freezerTemperatureLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "minimum": 1,
            "maximum": 255
          },
          "note": {
            "ja": "最大値はEPC=0xE0の値",
            "en": "maximum value is at EPC=0xE0"
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "氷温室温度レベル設定",
            "en": "ice compartment temperature level setting"
          },
          "shortName": "iceTemperatureLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "minimum": 1,
            "maximum": 255
          },
          "note": {
            "ja": "最大値はEPC=0xE0の値",
            "en": "maximum value is at EPC=0xE0"
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "野菜室温度レベル設定",
            "en": "Vegetable compartment temperature level setting"
          },
          "shortName": "vegetableTemperatureLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "minimum": 1,
            "maximum": 255
          },
          "note": {
            "ja": "最大値はEPC=0xE0の値",
            "en": "maximum value is at EPC=0xE0"
          }
        },
        "0xED": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "切換室温度レベル設定",
            "en": "Multi-refrigerating mode compartment temperature level setting"
          },
          "shortName": "multiModeTemperatureLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "minimum": 1,
            "maximum": 255
          },
          "note": {
            "ja": "最大値はEPC=0xE0の値",
            "en": "maximum value is at EPC=0xE0"
          }
        }
      }
    },
    "0x026B": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "電気温水器",
        "en": "Electric water heater"
      },
      "shortName": "electricWaterHeater",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ予約設定",
            "en": "ON timer setting"
          },
          "shortName": "onTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "ON timer setting (time)"
          },
          "shortName": "onTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xB0": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "H"
              },
              "propertyName": {
                "ja": "沸き上げ自動設定",
                "en": "Automatic water heating setting"
              },
              "shortName": "automaticWaterHeating",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動沸き上げ",
                      "en": "Automatic water heating function used"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "manualNoHeating",
                    "descriptions": {
                      "ja": "手動沸き上げ停止",
                      "en": "Non-automatic water heating function stopped"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "munualHeating",
                    "descriptions": {
                      "ja": "手動沸き上げ",
                      "en": "Non-automatic water heating function used"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "I",
                "to": "latest"
              },
              "propertyName": {
                "ja": "沸き上げ自動設定",
                "en": "Automatic water heating setting"
              },
              "shortName": "automaticWaterHeating",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動沸き上げ",
                      "en": "Automatic water heating function used"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "manualNoHeating",
                    "descriptions": {
                      "ja": "手動沸き上げ停止",
                      "en": "Non-automatic water heating function stopped"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "munualHeating",
                    "descriptions": {
                      "ja": "手動沸き上げ",
                      "en": "Non-automatic water heating function used"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xB1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "沸き上げ湯温自動設定",
            "en": "Automatic water temperature control setting"
          },
          "shortName": "automaticWaterHeatingTemperatureControl",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "AUTO",
                  "en": "Automatic water temperature control function used"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "非AUTO",
                  "en": "Automatic water temperature control function not used"
                }
              }
            ]
          }
        },
        "0xB2": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "H"
              },
              "propertyName": {
                "ja": "沸き上げ中状態",
                "en": "Water heater status"
              },
              "shortName": "waterHeatingStatus",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "沸き上げ中",
                      "en": "Heating"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "非沸き上げ中",
                      "en": "Not heating"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "I",
                "to": "latest"
              },
              "propertyName": {
                "ja": "沸き上げ中状態",
                "en": "Water heater status"
              },
              "shortName": "waterHeatingStatus",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "沸き上げ中",
                      "en": "Heating"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "非沸き上げ中",
                      "en": "Not heating"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xB3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "沸き上げ湯温設定値",
            "en": "Water heating temperature setting"
          },
          "shortName": "targetWaterHeatingTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-100Celsius"
              },
              {
                "$ref": "#/definitions/state_Undefined-FD"
              }
            ]
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "手動沸き上げ停止日数設定値",
            "en": "Manual water heating stop days setting"
          },
          "shortName": "heatingStopDays",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-252",
                "unit": "day"
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "descriptions": {
                      "ja": "無限",
                      "en": "No time limit"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB5": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "手動沸き上げOFFタイマ相対時間設定値",
            "en": "Relative time setting value for manual water heating OFF"
          },
          "shortName": "relativeTimeHeatingOff",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xB6": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "タンク運転モード設定",
            "en": "Tank operation mode setting"
          },
          "shortName": "tankOperationMode",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "standard",
                "descriptions": {
                  "ja": "標準",
                  "en": "Standard"
                }
              },
              {
                "edt": "0x42",
                "name": "saving",
                "descriptions": {
                  "ja": "節約",
                  "en": "Saving"
                }
              },
              {
                "edt": "0x43",
                "name": "extra",
                "descriptions": {
                  "ja": "多め",
                  "en": "Extra"
                }
              }
            ]
          }
        },
        "0xC0": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "C"
              },
              "propertyName": {
                "ja": "昼間沸き増し許可設定",
                "en": "Daytime reheating permission setting"
              },
              "shortName": "daytimeReheatingPermission",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "昼間沸き増し許可",
                      "en": "Daytime reheating permitted"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "昼間沸き増し禁止",
                      "en": "Daytime reheating not permitted"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "latest"
              },
              "propertyName": {
                "ja": "昼間沸き増し許可設定",
                "en": "Daytime reheating permission setting"
              },
              "shortName": "daytimeReheatingPermission",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "昼間沸き増し許可",
                      "en": "Daytime reheating permitted"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "昼間沸き増し禁止",
                      "en": "Daytime reheating not permitted"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xC1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温水器湯温計測値",
            "en": "Measured temperature of water in water heater"
          },
          "shortName": "tankWaterTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100Celsius"
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "警報発生状態",
            "en": "Alarm status"
          },
          "shortName": "alarmStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "bitmap",
            "size": 4,
            "bitmaps": [
              {
                "name": "noHotWater",
                "descriptions": {
                  "ja": "湯切れ警報",
                  "en": "No Hot Water"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b0000001"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "descriptions": {
                        "ja": "正常",
                        "en": "No Alarm"
                      }
                    },
                    {
                      "edt": 1,
                      "descriptions": {
                        "ja": "発生",
                        "en": "Alarm"
                      }
                    }
                  ]
                }
              },
              {
                "name": "leaking",
                "descriptions": {
                  "ja": "漏水警報",
                  "en": "Leaking"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b0000010"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "descriptions": {
                        "ja": "正常",
                        "en": "No Alarm"
                      }
                    },
                    {
                      "edt": 1,
                      "descriptions": {
                        "ja": "発生",
                        "en": "Alarm"
                      }
                    }
                  ]
                }
              },
              {
                "name": "freezing",
                "descriptions": {
                  "ja": "凍結警報",
                  "en": "Freezing"
                },
                "position": {
                  "index": 0,
                  "bitMask": "0b0000100"
                },
                "value": {
                  "type": "state",
                  "size": 0,
                  "enum": [
                    {
                      "edt": 0,
                      "descriptions": {
                        "ja": "正常",
                        "en": "No Alarm"
                      }
                    },
                    {
                      "edt": 1,
                      "descriptions": {
                        "ja": "発生",
                        "en": "Alarm"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xC3": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯中状態",
            "en": "Hot water supply status"
          },
          "shortName": "hotWaterSupplyStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "給湯中",
                  "en": "Supplying hot water"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "非給湯中",
                  "en": "Not supplying hot water"
                }
              }
            ]
          }
        },
        "0xC4": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂保温運転相対時間設定値",
            "en": "Relative time setting for keeping bath temperature"
          },
          "shortName": "relativeTimeKeepingTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xC7": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "エネルギーシフト参加状態",
            "en": "Participation in Energy Shift"
          },
          "shortName": "energyShiftParticipation",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x01",
                "name": "yes",
                "descriptions": {
                  "ja": "参加",
                  "en": "Participation"
                }
              },
              {
                "edt": "0x00",
                "name": "no",
                "descriptions": {
                  "ja": "不参加",
                  "en": "Non Participation"
                }
              }
            ]
          }
        },
        "0xC8": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "沸き上げ開始基準時刻",
            "en": "Standard time to start heating"
          },
          "shortName": "standardTimeToStartHeating",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "enum": [
              1,
              20,
              21,
              22,
              23,
              24
            ],
            "note": {
              "ja": "20:00,21:00,22:00,23:00,24:00,01:00",
              "en": "20:00,21:00,22:00,23:00,24:00,01:00"
            }
          }
        },
        "0xC9": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "エネルギーシフト回数",
            "en": "Number of energy shifts"
          },
          "shortName": "numberOfEnergyShifts",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-2"
          },
          "note": {
            "ja": "1回／2回（0x01、0x02）",
            "en": "Once/twice (0x01, 0x02)"
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "昼間沸き上げシフト時刻１",
            "en": "Daytime heating shift time 1"
          },
          "shortName": "waterHeatingShiftTime1",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x09",
                    "name": "09:00:00",
                    "descriptions": {
                      "ja": "9時",
                      "en": "9:00"
                    }
                  },
                  {
                    "edt": "0x0A",
                    "name": "10:00:00",
                    "descriptions": {
                      "ja": "10時",
                      "en": "10:00"
                    }
                  },
                  {
                    "edt": "0x0B",
                    "name": "11:00:00",
                    "descriptions": {
                      "ja": "11時",
                      "en": "11:00"
                    }
                  },
                  {
                    "edt": "0x0C",
                    "name": "12:00:00",
                    "descriptions": {
                      "ja": "12時",
                      "en": "12:00"
                    }
                  },
                  {
                    "edt": "0x0D",
                    "name": "13:00:00",
                    "descriptions": {
                      "ja": "13時",
                      "en": "13:00"
                    }
                  },
                  {
                    "edt": "0x0E",
                    "name": "14:00:00",
                    "descriptions": {
                      "ja": "14時",
                      "en": "14:00"
                    }
                  },
                  {
                    "edt": "0x0F",
                    "name": "15:00:00",
                    "descriptions": {
                      "ja": "15時",
                      "en": "15:00"
                    }
                  },
                  {
                    "edt": "0x10",
                    "name": "16:00:00",
                    "descriptions": {
                      "ja": "16時",
                      "en": "16:00"
                    }
                  },
                  {
                    "edt": "0x11",
                    "name": "17:00:00",
                    "descriptions": {
                      "ja": "17時（エネルギーシフト回数が2回の場合はこの値無効になる）",
                      "en": "17:00 (this value is nullified if energy shifts occur twice)"
                    }
                  }
                ]
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "descriptions": {
                      "ja": "クリア状態",
                      "en": "Undefined"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xCB": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "昼間沸き上げシフト時刻１での沸き上げ予測電力量",
            "en": "Expected electric energy at daytime heating shift time 1"
          },
          "shortName": "estimatedElectricEnergyAtShiftTime1",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "10:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              },
              {
                "name": "13:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              },
              {
                "name": "15:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              },
              {
                "name": "17:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              }
            ]
          }
        },
        "0xCC": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "時間あたり消費電力量１",
            "en": "Consumption of electric energy per hour 1"
          },
          "shortName": "electricEnergyConsumptionRate1",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "at1000",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              },
              {
                "name": "at1300",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              },
              {
                "name": "at1500",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              },
              {
                "name": "at1700",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              }
            ]
          }
        },
        "0xCD": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "昼間沸き上げシフト時刻２",
            "en": "Daytime heating shift time 2"
          },
          "shortName": "waterHeatingShiftTime2",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x0A",
                    "name": "10:00:00",
                    "descriptions": {
                      "ja": "10時",
                      "en": "10:00"
                    }
                  },
                  {
                    "edt": "0x0B",
                    "name": "11:00:00",
                    "descriptions": {
                      "ja": "11時",
                      "en": "11:00"
                    }
                  },
                  {
                    "edt": "0x0C",
                    "name": "12:00:00",
                    "descriptions": {
                      "ja": "12時",
                      "en": "12:00"
                    }
                  },
                  {
                    "edt": "0x0D",
                    "name": "13:00:00",
                    "descriptions": {
                      "ja": "13時",
                      "en": "13:00"
                    }
                  },
                  {
                    "edt": "0x0E",
                    "name": "14:00:00",
                    "descriptions": {
                      "ja": "14時",
                      "en": "14:00"
                    }
                  },
                  {
                    "edt": "0x0F",
                    "name": "15:00:00",
                    "descriptions": {
                      "ja": "15時",
                      "en": "15:00"
                    }
                  },
                  {
                    "edt": "0x10",
                    "name": "16:00:00",
                    "descriptions": {
                      "ja": "16時",
                      "en": "16:00"
                    }
                  },
                  {
                    "edt": "0x11",
                    "name": "17:00:00",
                    "descriptions": {
                      "ja": "17時",
                      "en": "17:00"
                    }
                  }
                ]
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "クリア状態",
                      "en": "Undefined"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xCE": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "昼間沸き上げシフト時刻２での沸き上げ予測電力量",
            "en": "Expected electric energy at daytime heating shift time 2"
          },
          "shortName": "estimatedElectricEnergyAtShiftTime2",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "13:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              },
              {
                "name": "15:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              },
              {
                "name": "17:00",
                "element": {
                  "$ref": "#/definitions/number_0-4294967293",
                  "unit": "Wh"
                }
              }
            ]
          }
        },
        "0xCF": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "時間あたり消費電力量２",
            "en": "Consumption of electric energy per hour 2"
          },
          "shortName": "electricEnergyConsumptionRate2",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "13:00",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              },
              {
                "name": "15:00",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              },
              {
                "name": "17:00",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "Wh"
                }
              }
            ]
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯温度設定値",
            "en": "Temperature of supplied water setting"
          },
          "shortName": "targetSuppliedWaterTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100Celsius"
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂温度設定値",
            "en": "Bath water temperature setting"
          },
          "shortName": "targetBathWaterTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100Celsius"
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定４",
            "en": "Bath water volume setting4"
          },
          "shortName": "bathWaterVolume4",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-255"
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定4設定可能最大レベル",
            "en": "Bath water volume setting 4 maximum settable level"
          },
          "shortName": "maximumAllowableWaterVolume4",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-255"
          }
        },
        "0xD6": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "音量設定値",
            "en": "Volume setting"
          },
          "shortName": "volume",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ミュート設定",
            "en": "Mute setting"
          },
          "shortName": "mute",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "yes",
                "descriptions": {
                  "ja": "ミュートON",
                  "en": "Mute ON"
                }
              },
              {
                "edt": "0x31",
                "name": "no",
                "descriptions": {
                  "ja": "ミュートOFF",
                  "en": "Mute OFF"
                }
              }
            ]
          }
        },
        "0xD8": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯可能湯量値",
            "en": "Remaining hot water volume"
          },
          "shortName": "remainingWaterVolume",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        },
        "0xD9": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "余剰電力量予測値",
            "en": "Surplus electric energy power prediction value"
          },
          "shortName": "surplusPowerPrediction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "month",
                "element": {
                  "$ref": "#/definitions/number_1-12"
                }
              },
              {
                "name": "day",
                "element": {
                  "$ref": "#/definitions/number_1-31"
                }
              },
              {
                "name": "hour",
                "element": {
                  "$ref": "#/definitions/number_0-23"
                }
              },
              {
                "name": "surplusEnergyPredictionValue",
                "element": {
                  "type": "array",
                  "itemSize": 2,
                  "minItems": 24,
                  "maxItems": 24,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_-32767-32765",
                        "unit": "Wh",
                        "multipleOf": 10
                      },
                      {
                        "type": "state",
                        "size": 2,
                        "enum": [
                          {
                            "edt": "0x8000",
                            "descriptions": {
                              "ja": "無効値",
                              "en": "Invalid data"
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        "0xDB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冬季H/Pユニット定格消費電力",
            "en": "Rated power consumption of H/P unit in wintertime"
          },
          "shortName": "winterRatedPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "W"
          }
        },
        "0xDC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "中間期H/Pユニット定格消費電力",
            "en": "Rated power consumption of H/P unit in in-between season"
          },
          "shortName": "betweenSeasonRatedPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "W"
          }
        },
        "0xDD": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "夏季H/Pユニット定格消費電力",
            "en": "Rated power consumption of H/P unit in summertime"
          },
          "shortName": "summerRatedPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "W"
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "沸き上げ湯量設定値",
            "en": "Bath water volume setting"
          },
          "shortName": "targetWaterHeatingVolume",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "残湯量計測値",
            "en": "Measured amount of water remaining in tank"
          },
          "shortName": "remainingWater",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "タンク容量値",
            "en": "Tank capacity"
          },
          "shortName": "tankCapacity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂自動モード設定",
            "en": "Automatic bath water heating mode setting"
          },
          "shortName": "automaticBathOperation",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "自動入",
                  "en": "mode ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "自動解除",
                  "en": "mode OFF"
                }
              }
            ]
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "手動風呂追い焚き動作設定",
            "en": "Manual bath reheating operation setting"
          },
          "shortName": "bathReheatingOperation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "自動入",
                  "en": "\"Automatic bath water heating\" mode ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "自動解除",
                  "en": "\"Automatic bath water heating\" mode OFF"
                }
              }
            ]
          }
        },
        "0xE5": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "C"
              },
              "propertyName": {
                "ja": "風呂足し湯動作設定",
                "en": "Manual bath hot water addition function setting"
              },
              "shortName": "bathHotWaterAddition",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "足し湯",
                      "en": "\"Addition of hot water\" function ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "足し湯切",
                      "en": "\"Addition of hot water\" function OFF"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "latest"
              },
              "propertyName": {
                "ja": "手動風呂足し湯動作設定",
                "en": "Manual bath hot water addition function setting"
              },
              "shortName": "bathHotWaterAddition",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "足し湯",
                      "en": "\"Addition of hot water\" function ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "足し湯切",
                      "en": "\"Addition of hot water\" function OFF"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xE6": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "C"
              },
              "propertyName": {
                "ja": "風呂ぬるめ動作設定",
                "en": "Manual lukewarm water temperature lowering function setting"
              },
              "shortName": "bathLukewarmWaterFunction",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "ぬるめ入",
                      "en": "\"Lukewarm water temperature\" function ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "ぬるめ切",
                      "en": "\"Lukewarm water temperature\" function OFF"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "latest"
              },
              "propertyName": {
                "ja": "手動風呂ぬるめ動作設定",
                "en": "Manual lukewarm water temperature lowering function setting"
              },
              "shortName": "bathLukewarmWaterFunction",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "足し湯",
                      "en": "\"Addition of hot water\" function ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "足し湯切",
                      "en": "\"Addition of hot water\" function OFF"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xE7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定1",
            "en": "Bath water volume setting 1"
          },
          "shortName": "bathWaterVolume1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-253",
            "unit": "L"
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定2",
            "en": "Bath water volume setting 2"
          },
          "shortName": "bathWaterVolume2",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/level_31-8"
          }
        },
        "0xE9": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "浴室優先設定",
            "en": "Bathroom pripority setting"
          },
          "shortName": "bathroomPriority",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "浴室優先入",
                  "en": "Priority bath ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "浴室優先切",
                  "en": "Priority bath OFF"
                }
              }
            ]
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "D",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂動作状態監視",
            "en": "Bath operation status monitor"
          },
          "shortName": "bathOperationStatusMonitor",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "runningHotWater",
                "descriptions": {
                  "ja": "湯張り中",
                  "en": "Filling hot water"
                }
              },
              {
                "edt": "0x42",
                "name": "noOperation",
                "descriptions": {
                  "ja": "停止中",
                  "en": "Stopped"
                }
              },
              {
                "edt": "0x43",
                "name": "keepingTemperature",
                "descriptions": {
                  "ja": "保温中",
                  "en": "Keeping temperature"
                }
              }
            ]
          }
        },
        "0xEE": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定3",
            "en": "Bath water volume setting 3"
          },
          "shortName": "bathWaterVolume3",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        }
      }
    },
    "0x0272": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "瞬間式給湯器",
        "en": "Instantaneous water heater"
      },
      "shortName": "instantaneousWaterHeater",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂自動ON タイマ予約設定",
            "en": "ON timer reservation setting"
          },
          "shortName": "onTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "ON timer setting (time)"
          },
          "shortName": "onTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x92": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂自動ON タイマ相対時間設定値",
            "en": "Set value of ON timer relative time"
          },
          "shortName": "onTimerRelativeTimeSettingValue",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xD0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯器燃焼状態",
            "en": "Hot water heating status"
          },
          "shortName": "hotWaterHeatingStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "給湯燃焼状態有",
                  "en": "Hot water heating status found"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "無",
                  "en": "Hot water heating status not found"
                }
              }
            ]
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯温度設定値",
            "en": "Set value of hot water temperature"
          },
          "shortName": "targetSuppliedWaterTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100Celsius"
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯保温設定",
            "en": "Hot water warmer setting"
          },
          "shortName": "hotWaterWarmerSetting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "給湯保温動作",
                  "en": "Hot water warmer operation"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "給湯保温動作解除",
                  "en": "Hot water warmer operation resetting"
                }
              }
            ]
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定4",
            "en": "Bath water volume setting 4"
          },
          "shortName": "bathWaterVolume4",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-255"
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定4 設定可能最大レベル",
            "en": "Bath water volume setting 4: Maximum settable level"
          },
          "shortName": "maximumAllowableWaterVolume4",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-255"
          }
        },
        "0xD6": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "音量設定値",
            "en": "Volume setting"
          },
          "shortName": "volume",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ミュート設定",
            "en": "Mute setting"
          },
          "shortName": "mute",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "ミュートON",
                  "en": "Mute ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "ミュートOFF",
                  "en": "Mute OFF"
                }
              }
            ]
          }
        },
        "0xDA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自動運転時間設定値",
            "en": "Duration of automatic operation setting"
          },
          "shortName": "tergetAutomaticOprationTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 3
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "limitless",
                    "descriptions": {
                      "ja": "無限",
                      "en": "limitless"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xDB": {
          "propertyName": {
            "ja": "自動運転残時間",
            "en": "Remaining automatic operation time"
          },
          "shortName": "remainingAutomaticOperationTime",
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "limitless",
                    "descriptions": {
                      "ja": "無限",
                      "en": "limitless"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂温度設定値",
            "en": "Set value of bath temperature"
          },
          "shortName": "targetBathWaterTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100Celsius"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂給湯器燃焼状態",
            "en": "Bath water heater status"
          },
          "shortName": "bathWaterHeatingStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "燃焼状態有",
                  "en": "Heating"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "燃焼状態無",
                  "en": "Not Heating"
                }
              }
            ]
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂自動モード設定",
            "en": "Bath auto mode setting"
          },
          "shortName": "automaticBathOperation",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "自動入",
                  "en": "Auto ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "自動切",
                  "en": "Auto OFF"
                }
              }
            ]
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂追い炊き動作設定",
            "en": "Bath additional boil-up operation setting"
          },
          "shortName": "tergetBathAdditionalBoilUpOperation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "追い焚き入",
                  "en": "Additional boil-up ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "追い焚き切",
                  "en": "Additional boil-up OFF"
                }
              }
            ]
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "shortName": "bathHotWaterAddition",
          "propertyName": {
            "ja": "風呂足し湯動作設定",
            "en": "Bath hot water adding operation setting"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "足し湯入",
                  "en": "Hot water addition ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "足し湯切",
                  "en": "Hot water addition OFF"
                }
              }
            ]
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂ぬるめ動作設定",
            "en": "Bath water temperature lowering operation setting"
          },
          "shortName": "bathLukewarmWaterFunction",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "ぬるめ入",
                  "en": "Hot water temperature lowering ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "ぬるめ切",
                  "en": "Hot water temperature lowering OFF"
                }
              }
            ]
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定1",
            "en": "Bath hot water volume setting 1"
          },
          "shortName": "bathWaterVolume1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-253",
            "unit": "L"
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "shortName": "bathWaterVolume2",
          "propertyName": {
            "ja": "風呂湯量設定2",
            "en": "Bath hot water volume setting 2"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/level_31-8"
          }
        },
        "0xE9": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "D"
              },
              "propertyName": {
                "ja": "浴室優先設定",
                "en": "Bathroom priority setting"
              },
              "shortName": "bathroomPriority",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "浴室優先入",
                      "en": "Bathroom priority ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "入浴優先切",
                      "en": "Bathroom priority OFF"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "E",
                "to": "latest"
              },
              "propertyName": {
                "ja": "浴室優先設定",
                "en": "Bathroom priority setting"
              },
              "shortName": "bathroomPriority",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "yes",
                    "descriptions": {
                      "ja": "浴室優先入",
                      "en": "Bathroom priority ON"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "no",
                    "descriptions": {
                      "ja": "入浴優先切",
                      "en": "Bathroom priority OFF"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xEA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "シャワー給湯状態",
            "en": "Shower hot water supply status"
          },
          "shortName": "showerHotWaterSupplyStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "シャワー給湯状態有",
                  "en": "Shower hot water supply ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "シャワー給湯状態無",
                  "en": "Shower hot water supply OFF"
                }
              }
            ]
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "台所給湯状態",
            "en": "Kitchen hot water supply status"
          },
          "shortName": "kitchenHotWaterSupplyStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "台所湯量状態有",
                  "en": "Kitchen hot water supply ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "台所湯量状態無",
                  "en": "Kitchen hot water supply OFF"
                }
              }
            ]
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯保温ONタイマ予約設定",
            "en": "Hot water warmer ON timer reservation setting"
          },
          "shortName": "hotWaterWarmerONTimerReservationSetting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "予約無",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0xED": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "給湯保温ONタイマ時刻設定値",
            "en": "Set value of hot water warmer ON timer time"
          },
          "shortName": "tergetHotWaterWarmerONTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xEE": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂湯量設定3",
            "en": "Bath hot water volume setting 3"
          },
          "shortName": "bathWaterVolume3",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        },
        "0xEF": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂動作状態監視",
            "en": "Bath operation status monitor"
          },
          "shortName": "bathOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "runningHotWater",
                "descriptions": {
                  "ja": "湯張り中",
                  "en": "Supplying hot water"
                }
              },
              {
                "edt": "0x42",
                "name": "noOperation",
                "descriptions": {
                  "ja": "停止中",
                  "en": "stopped"
                }
              },
              {
                "edt": "0x43",
                "name": "keepingTemperature",
                "descriptions": {
                  "ja": "保温中",
                  "en": "Keeping bath temperature"
                }
              }
            ]
          }
        }
      }
    },
    "0x0273": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "浴室暖房乾燥機",
        "en": "Bathroom heater and dryer"
      },
      "shortName": "bathroomHeaterDryer",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ予約設定1",
            "en": "\"ON timer-based reservation\" setting 1"
          },
          "shortName": "onTimerReservation1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation function ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation function OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "ON timer setting (time)"
          },
          "shortName": "onTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x92": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ相対時間設定値",
            "en": "ON timer setting (relative time)"
          },
          "shortName": "onRelativeTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x94": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ予約設定",
            "en": "\"OFF timer-based reservation\" setting"
          },
          "shortName": "offTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation function ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation function OFF"
                }
              }
            ]
          }
        },
        "0x95": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ時刻設定値",
            "en": "OFF timer setting (time)"
          },
          "shortName": "offTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x96": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ相対時間設定値",
            "en": "OFF timer setting (relative time)"
          },
          "shortName": "offRelativeTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xB0": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "K"
              },
              "propertyName": {
                "ja": "運転設定",
                "en": "Operation setting"
              },
              "shortName": "operationSetting",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x10",
                    "name": "ventilation",
                    "descriptions": {
                      "ja": "換気運転",
                      "en": "Ventilation operation"
                    }
                  },
                  {
                    "edt": "0x20",
                    "name": "prewarming",
                    "descriptions": {
                      "ja": "入浴前予備暖房運転",
                      "en": "Bathroom pre-warmer operation"
                    }
                  },
                  {
                    "edt": "0x30",
                    "name": "heating",
                    "descriptions": {
                      "ja": "入浴中暖房運転",
                      "en": "Bathroom heater operation"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "drying",
                    "descriptions": {
                      "ja": "乾燥運転",
                      "en": "Bathroom dryer operation"
                    }
                  },
                  {
                    "edt": "0x50",
                    "name": "circulation",
                    "descriptions": {
                      "ja": "涼風運転",
                      "en": "Cool air circulator operation"
                    }
                  },
                  {
                    "edt": "0x00",
                    "name": "stop",
                    "descriptions": {
                      "ja": "停止",
                      "en": "Stop"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "L",
                "to": "latest"
              },
              "propertyName": {
                "ja": "運転設定",
                "en": "Operation setting"
              },
              "shortName": "operationSetting",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x10",
                    "name": "ventilation",
                    "descriptions": {
                      "ja": "換気運転",
                      "en": "Ventilation operation"
                    }
                  },
                  {
                    "edt": "0x20",
                    "name": "prewarming",
                    "descriptions": {
                      "ja": "入浴前予備暖房運転",
                      "en": "Bathroom pre-warmer operation"
                    }
                  },
                  {
                    "edt": "0x30",
                    "name": "heating",
                    "descriptions": {
                      "ja": "入浴中暖房運転",
                      "en": "Bathroom heater operation"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "drying",
                    "descriptions": {
                      "ja": "乾燥運転",
                      "en": "Bathroom dryer operation"
                    }
                  },
                  {
                    "edt": "0x50",
                    "name": "circulation",
                    "descriptions": {
                      "ja": "涼風運転",
                      "en": "Cool air circulator operation"
                    }
                  },
                  {
                    "edt": "0x60",
                    "name": "mistSauna",
                    "descriptions": {
                      "ja": "ミストサウナ運転",
                      "en": "Mist sauna operation"
                    }
                  },
                  {
                    "edt": "0x61",
                    "name": "waterMist",
                    "descriptions": {
                      "ja": "水ミスト運転",
                      "en": "Water mist operation"
                    }
                  },
                  {
                    "edt": "0x00",
                    "name": "stop",
                    "descriptions": {
                      "ja": "停止",
                      "en": "Stop"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xB1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気運転設定",
            "en": "Ventilation operation setting"
          },
          "shortName": "ventilationSetting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "standard",
                    "descriptions": {
                      "ja": "標準",
                      "en": "Standard"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB2": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "G"
              },
              "propertyName": {
                "ja": "入浴前予備暖房運転設定",
                "en": "Bathroom pre-warmer_operation setting"
              },
              "shortName": "bathroomPrewarming",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "level",
                    "base": "0x31",
                    "maximum": 8
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x41",
                        "name": "auto",
                        "descriptions": {
                          "ja": "自動",
                          "en": "Automatic"
                        }
                      },
                      {
                        "edt": "0x42",
                        "name": "standard",
                        "descriptions": {
                          "ja": "標準",
                          "en": "Standard"
                        }
                      }
                    ]
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "入浴前予備暖房運転設定",
                "en": "Bathroom pre-warmer operation setting"
              },
              "shortName": "bathroomPrewarming",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "level",
                    "base": "0x31",
                    "maximum": 8
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x41",
                        "name": "auto",
                        "descriptions": {
                          "ja": "自動",
                          "en": "Automatic"
                        }
                      },
                      {
                        "edt": "0x42",
                        "name": "standard",
                        "descriptions": {
                          "ja": "標準",
                          "en": "Standard"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "0xB3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "入浴中暖房運転設定",
            "en": "Bathroom heater operation setting"
          },
          "shortName": "bathroomHeating",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "standard",
                    "descriptions": {
                      "ja": "標準",
                      "en": "Standard"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "乾燥運転設定",
            "en": "Bathroom dryer operation setting"
          },
          "shortName": "bathroomDrying",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "standard",
                    "descriptions": {
                      "ja": "標準",
                      "en": "Standard"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "涼風運転設定",
            "en": "Cool air circulator operation setting"
          },
          "shortName": "coolAirCirculation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "standard",
                    "descriptions": {
                      "ja": "標準",
                      "en": "Standard"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB6": {
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ミストサウナ運転設定",
            "en": "Mist sauna operation setting"
          },
          "shortName": "mistSauna",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "standard",
                    "descriptions": {
                      "ja": "標準",
                      "en": "Standard"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xB7": {
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "propertyName": {
            "ja": "水ミスト運転設定",
            "en": "Water mist operation setting"
          },
          "shortName": "waterMist",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "standard",
                    "descriptions": {
                      "ja": "標準",
                      "en": "Standard"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xBA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内相対湿度計測値",
            "en": "Measured relative bathroom humidity"
          },
          "shortName": "bathroomHumidity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xBB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内温度計測値",
            "en": "Measured bathroom temperature"
          },
          "shortName": "bathroomTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 125
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "換気風量設定",
            "en": "Ventilation air flow rate setting"
          },
          "shortName": "ventilationAirFlowLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xCF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "フィルタサイン設定",
            "en": "Filter cleaning reminder sign setting"
          },
          "shortName": "filterCleaningReminderSign",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "lit",
                "descriptions": {
                  "ja": "点灯",
                  "en": "Lit"
                }
              },
              {
                "edt": "0x42",
                "name": "notLit",
                "descriptions": {
                  "ja": "消灯",
                  "en": "Not lit"
                }
              }
            ]
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "人体検知状態",
            "en": "Human body detection status"
          },
          "shortName": "humanBodyDetectionStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "detected",
                "descriptions": {
                  "ja": "人体検知あり",
                  "en": "Detected"
                }
              },
              {
                "edt": "0x42",
                "name": "notDetected",
                "descriptions": {
                  "ja": "人体検知なし",
                  "en": "Not detected"
                }
              }
            ]
          }
        },
        "0xE1": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "K"
              },
              "propertyName": {
                "ja": "ONタイマ予約設定1",
                "en": "\"ON timer-based reservation\" setting 2"
              },
              "shortName": "onTimerReservation2",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x10",
                    "name": "ventilationReservation",
                    "descriptions": {
                      "ja": "換気運転予約",
                      "en": "Reservation function ON for the ventilation mode"
                    }
                  },
                  {
                    "edt": "0x20",
                    "name": "prewarmingReservation",
                    "descriptions": {
                      "ja": "入浴前予備暖房運転予約",
                      "en": "Reservation function ON for the bathroom prewarmer mode"
                    }
                  },
                  {
                    "edt": "0x30",
                    "name": "heatingReservation",
                    "descriptions": {
                      "ja": "入浴中暖房運転予約",
                      "en": "Reservation function ON for the bathroom heater mode"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "dryingReservation",
                    "descriptions": {
                      "ja": "乾燥運転予約",
                      "en": "Reservation function ON for the bathroom dryer mode"
                    }
                  },
                  {
                    "edt": "0x50",
                    "name": "circulationReservation",
                    "descriptions": {
                      "ja": "涼風運転予約",
                      "en": "Reservation function ON for the cool air circulator mode"
                    }
                  },
                  {
                    "edt": "0x00",
                    "name": "noReservation",
                    "descriptions": {
                      "ja": "予約切",
                      "en": "Reservation function OFF"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "L",
                "to": "latest"
              },
              "propertyName": {
                "ja": "ONタイマ予約設定2",
                "en": "\"ON timer-based reservation\" setting 2"
              },
              "shortName": "onTimerReservation2",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x10",
                    "name": "ventilationReservation",
                    "descriptions": {
                      "ja": "換気運転予約",
                      "en": "Reservation function ON for the ventilation mode"
                    }
                  },
                  {
                    "edt": "0x20",
                    "name": "prewarmingReservation",
                    "descriptions": {
                      "ja": "入浴前予備暖房運転予約",
                      "en": "Reservation function ON for the bathroom prewarmer mode"
                    }
                  },
                  {
                    "edt": "0x30",
                    "name": "heatingReservation",
                    "descriptions": {
                      "ja": "入浴中暖房運転予約",
                      "en": "Reservation function ON for the bathroom heater mode"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "dryingReservation",
                    "descriptions": {
                      "ja": "乾燥運転予約",
                      "en": "Reservation function ON for the bathroom dryer mode"
                    }
                  },
                  {
                    "edt": "0x50",
                    "name": "circulationReservation",
                    "descriptions": {
                      "ja": "涼風運転予約",
                      "en": "Reservation function ON for the cool air circulator mode"
                    }
                  },
                  {
                    "edt": "0x60",
                    "name": "mistSaunaReservation",
                    "descriptions": {
                      "ja": "ミストサウナ運転予約",
                      "en": "Mist sauna operation reservation"
                    }
                  },
                  {
                    "edt": "0x61",
                    "name": "waterMistReservation",
                    "descriptions": {
                      "ja": "水ミスト運転予約",
                      "en": "Water mist operation reservation"
                    }
                  },
                  {
                    "edt": "0x00",
                    "name": "noReservation",
                    "descriptions": {
                      "ja": "予約切",
                      "en": "Reservation function OFF"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    "0x027B": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "床暖房",
        "en": "Floor heater"
      },
      "shortName": "floorHeater",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ予約設定",
            "en": "ON timer reservation setting"
          },
          "shortName": "reservationOfOnTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "予約入",
                  "en": "ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "予約切",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "Time set by ON timer"
          },
          "shortName": "timeOfOnTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x92": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ相対時間設定値",
            "en": "Relative ON timer setting"
          },
          "shortName": "relativeTimeOfOnTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x94": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ予約設定",
            "en": "OFF timer reservation setting"
          },
          "shortName": "reservationOfOffTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "予約入",
                  "en": "ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "予約切",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0x95": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ時刻設定値",
            "en": "Time set by OFF timer"
          },
          "shortName": "timeOfOffTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x96": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ相対時間設定値",
            "en": "Relative OFF timer setting"
          },
          "shortName": "relativeTimeOfOffTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温度設定2 設定可能最大レベル",
            "en": "Maximum allowable setting level for temperature setting 2"
          },
          "shortName": "maximumTargetTemperature2",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "minimum": 49,
            "maximum": 63
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温度設定1",
            "en": "Temperature 1"
          },
          "shortName": "targetTemperature1",
          "accessRule": {
            "get": "required_c",
            "set": "required_c",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "Celsius",
                "minimum": 0,
                "maximum": 50
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Auto"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "EPC=0xE0または0xE1のどちらかの実装が必須",
            "en": "Either EPC=0xE0 or 0xE1 is required"
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "温度設定2",
            "en": "Temperature 2"
          },
          "shortName": "targetTemperature2",
          "accessRule": {
            "get": "required_c",
            "set": "required_c",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 15
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Auto"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "EPC=0xE0または0xE1のどちらかの実装が必須",
            "en": "Either EPC=0xE0 or 0xE1 is required"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "室内温度計測値",
            "en": "Measured room temperature"
          },
          "shortName": "measuredRoomTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int8",
                "unit": "Celsius",
                "minimum": -127,
                "maximum": 125
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x7E",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xE3": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "B"
              },
              "propertyName": {
                "ja": "床温度計測値",
                "en": "Measured floor temperature"
              },
              "shortName": "measuredFloorTemperature",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "number",
                    "format": "uint8",
                    "unit": "Celsius",
                    "minimum": 0,
                    "maximum": 50
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x7E",
                        "name": "undefined",
                        "descriptions": {
                          "ja": "不明",
                          "en": "Undefined"
                        },
                        "readOnly": true
                      }
                    ]
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "C",
                "to": "latest"
              },
              "propertyName": {
                "ja": "床温度計測値",
                "en": "Measured floor temperature"
              },
              "shortName": "measuredFloorTemperature",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "number",
                    "format": "int8",
                    "unit": "Celsius",
                    "minimum": -127,
                    "maximum": 125
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x7E",
                        "name": "undefined",
                        "descriptions": {
                          "ja": "不明",
                          "en": "Undefined"
                        },
                        "readOnly": true
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "0xE4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ゾーン切替え設定",
            "en": "Zone change setting"
          },
          "shortName": "controllableZone",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 1,
            "maxSize": 1
          },
          "note": {
            "ja": "b0〜b7を各々ゾーン0〜7に割当各ビット 1:制御有り、0:制御無し",
            "en": "Assign b0-b7 to zone0-zone7, 1: yes, 0: no"
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "特殊運転設定",
            "en": "Special operation setting"
          },
          "shortName": "specialOperationMode",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "normal",
                "descriptions": {
                  "ja": "通常運転",
                  "en": "Normal"
                }
              },
              {
                "edt": "0x42",
                "name": "modest",
                "descriptions": {
                  "ja": "ひかえめ運転",
                  "en": "Modest"
                }
              },
              {
                "edt": "0x43",
                "name": "highPower",
                "descriptions": {
                  "ja": "ハイパワー運転",
                  "en": "Highpower"
                }
              }
            ]
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "デイリータイマー設定",
            "en": "Daily timer setting"
          },
          "shortName": "dailyTimer",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "OFF",
                "descriptions": {
                  "ja": "タイマー切",
                  "en": "OFF"
                }
              },
              {
                "edt": "0x41",
                "name": "timer1",
                "descriptions": {
                  "ja": "タイマー１",
                  "en": "Timer1"
                }
              },
              {
                "edt": "0x42",
                "name": "timer2",
                "descriptions": {
                  "ja": "タイマー２",
                  "en": "Timer2"
                }
              }
            ]
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "デイリータイマー1設定",
            "en": "Daily timer setting 1"
          },
          "shortName": "workedDailyTimer1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 6,
            "maxSize": 6
          },
          "note": {
            "ja": "24時間を30分単位で分割、全6バイトを割り当てて、各bit 1: 運転、0: 停止",
            "en": "Every bit of 6 byte is assigned to 30 minute duration of 24H, 0: operation, 1: no operation"
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "デイリータイマー2設定",
            "en": "Daily timer setting 2"
          },
          "shortName": "workedDailyTimer2",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 6,
            "maxSize": 6
          },
          "note": {
            "ja": "24時間を30分単位で分割、全6バイトを割り当てて、各bit 1: 運転、0: 停止",
            "en": "Every bit of 6 byte is assigned to 30 minute duration of 24H, 0: operation, 1: no operation"
          }
        },
        "0xE9": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格消費電力値",
            "en": "Rated power consumption"
          },
          "shortName": "ratedPowerConsumption",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "W"
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "消費電力計測方法",
            "en": "Power consumption measurement method"
          },
          "shortName": "powerMeasurementMethod",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "node",
                "descriptions": {
                  "ja": "ノード単位",
                  "en": "Node unit"
                }
              },
              {
                "edt": "0x42",
                "name": "class",
                "descriptions": {
                  "ja": "クラス単位",
                  "en": "Class unit"
                }
              },
              {
                "edt": "0x43",
                "name": "other",
                "descriptions": {
                  "ja": "インスタンス単位",
                  "en": "Instance unit"
                }
              }
            ]
          }
        }
      }
    },
    "0x027D": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "蓄電池",
        "en": "Storage battery"
      },
      "shortName": "storageBattery",
      "elProperties": {
        "0x83": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "識別番号",
            "en": "Identification number"
          },
          "shortName": "id",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 17,
            "maxSize": 17
          },
          "note": {
            "ja": "1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
            "en": "1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
          }
        },
        "0x97": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "現在時刻設定",
            "en": "Current time setting"
          },
          "shortName": "currentTime",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x98": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "現在年月日設定",
            "en": "Current date setting"
          },
          "shortName": "currentDateAndTime",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "date-time",
            "size": 4
          }
        },
        "0xA0": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC実効容量（充電）",
            "en": "AC effective capacity (charging)"
          },
          "shortName": "ACEffectiveChargingCapacity",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xA1": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC実効容量（放電）",
            "en": "AC effective capacity (discharging)"
          },
          "shortName": "ACEffectiveDischargingCapacity",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xA2": {
          "propertyName": {
            "ja": "AC充電可能容量",
            "en": "AC chargeable capacity"
          },
          "shortName": "ACChargeableCapacity",
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xA3": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC放電可能容量",
            "en": "AC dischargeable capacity"
          },
          "shortName": "ACDischargeableCapacity",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xA4": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC充電可能量",
            "en": "AC chargeable electric energy"
          },
          "shortName": "ACChargeableElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xA5": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC放電可能量",
            "en": "AC dischargeable electric energy"
          },
          "shortName": "ACDischargeableElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xA6": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC充電上限設定",
            "en": "AC charge upper limit setting"
          },
          "shortName": "ACChargeUpperLimit",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xA7": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC放電下限設定",
            "en": "AC discharge lower limit setting"
          },
          "shortName": "ACDischargeLowerLimit",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xA8": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC積算充電電力量計測値",
            "en": "AC measured cumulative charging electric energy"
          },
          "shortName": "ACCumulativeChargingElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "kWh",
            "multipleOf": 0.001
          }
        },
        "0xA9": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC積算放電電力量計測値",
            "en": "AC measured cumulative discharging electric energy"
          },
          "shortName": "ACCumulativeDischargingElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "kWh",
            "multipleOf": 0.001
          }
        },
        "0xAA": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC充電量設定値",
            "en": "AC charge amount setting value"
          },
          "shortName": "ACTargetChargingElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint32",
                "minimum": 1,
                "maximum": 999999999,
                "unit": "Wh"
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0x00000000",
                    "name": "notSet",
                    "descriptions": {
                      "ja": "未設定",
                      "en": "Not set"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xAB": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC放電量設定値",
            "en": "AC discharge amount setting value"
          },
          "shortName": "ACTargetDischargingElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint32",
                "minimum": 1,
                "maximum": 999999999,
                "unit": "Wh"
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0x00000000",
                    "name": "notSet",
                    "descriptions": {
                      "ja": "未設定",
                      "en": "Not set"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xC1": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電方式",
            "en": "Charging method"
          },
          "shortName": "chargingMethod",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x01",
                "name": "maximum",
                "descriptions": {
                  "ja": "最大充電電力充電",
                  "en": "Maximum charging electric energy charting"
                }
              },
              {
                "edt": "0x02",
                "name": "surplus",
                "descriptions": {
                  "ja": "余剰電力充電",
                  "en": "Surplus electric energy charging"
                }
              },
              {
                "edt": "0x03",
                "name": "designatedPower",
                "descriptions": {
                  "ja": "指定電力充電",
                  "en": "Designated electric energy charging"
                }
              },
              {
                "edt": "0x04",
                "name": "designatedCurrent",
                "descriptions": {
                  "ja": "指定電流充電",
                  "en": "Designated current power charging"
                }
              },
              {
                "edt": "0x00",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Others"
                }
              }
            ]
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "M",
            "to": "latest"
          },
          "propertyName": {
            "ja": "放電方式",
            "en": "Discharging method"
          },
          "shortName": "dischargingMethod",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x01",
                "name": "maximum",
                "descriptions": {
                  "ja": "最大放電電力放電",
                  "en": "Maximum discharge electric energy discharging"
                }
              },
              {
                "edt": "0x02",
                "name": "loadFollowing",
                "descriptions": {
                  "ja": "負荷追従放電",
                  "en": "Load following discharge"
                }
              },
              {
                "edt": "0x03",
                "name": "designatedPower",
                "descriptions": {
                  "ja": "指定電力放電",
                  "en": "Designated electric energy discharging"
                }
              },
              {
                "edt": "0x04",
                "name": "designatedCurrent",
                "descriptions": {
                  "ja": "指定電流放電",
                  "en": "Designated current power discharging"
                }
              },
              {
                "edt": "0x00",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Others"
                }
              }
            ]
          }
        },
        "0xC7": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "AC定格電力量",
            "en": "AC rated electric energy"
          },
          "shortName": "ACRatedElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xC8": {
          "oneOf": [
            {
              "validRelease": {
                "from": "B",
                "to": "G"
              },
              "propertyName": {
                "ja": "最小最大充電電力値",
                "en": "Minimum/maximum charging electric power"
              },
              "shortName": "minimumAndMaximumChargingElectricPower",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "object",
                "properties": [
                  {
                    "name": "minValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最小充電電力値",
                      "en": "Minimum"
                    }
                  },
                  {
                    "name": "maxValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最大充電電力値",
                      "en": "Maximum"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "最小最大充電電力値",
                "en": "Minimum/maximum charging electric power"
              },
              "shortName": "minimumAndMaximumChargingElectricPower",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "object",
                "properties": [
                  {
                    "name": "minValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最小充電電力値",
                      "en": "Minimum"
                    }
                  },
                  {
                    "name": "maxValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最大充電電力値",
                      "en": "Maximum"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xC9": {
          "oneOf": [
            {
              "validRelease": {
                "from": "B",
                "to": "G"
              },
              "propertyName": {
                "ja": "最小最大放電電力値",
                "en": "Minimum/maximum discharging electric power"
              },
              "shortName": "minimumAndMaximumDischargingElectricPower",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "object",
                "properties": [
                  {
                    "name": "minValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最小放電電力値",
                      "en": "Minimum"
                    }
                  },
                  {
                    "name": "maxValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最大放電電力値",
                      "en": "Maximum"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "最小最大放電電力値",
                "en": "Minimum/maximum discharging electric power"
              },
              "shortName": "minimumAndMaximumDischargingElectricPower",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "object",
                "properties": [
                  {
                    "name": "minValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最小放電電力値",
                      "en": "Minimum"
                    }
                  },
                  {
                    "name": "maxValue",
                    "element": {
                      "type": "number",
                      "format": "uint32",
                      "minimum": 0,
                      "maximum": 999999999,
                      "unit": "W"
                    },
                    "descriptions": {
                      "ja": "最大放電電力値",
                      "en": "Maximum"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xCA": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大充電電流値",
            "en": "Minimum/maximum charging current"
          },
          "shortName": "minimumAndMaximumChargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最小充電電流値",
                  "en": "Minimum"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最大充電電流値",
                  "en": "Maximum"
                }
              }
            ]
          }
        },
        "0xCB": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大放電電流値",
            "en": "Minimum/maximum discharging current"
          },
          "shortName": "minimumAndMaximumDischargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最小放電電流値",
                  "en": "Minimum"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最大放電電流値",
                  "en": "Maximum"
                }
              }
            ]
          }
        },
        "0xCC": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "再連系許可設定",
            "en": "Re-interconnection permission setting"
          },
          "shortName": "reinterconnectionPermission",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "permitted",
                "descriptions": {
                  "ja": "許可",
                  "en": "Permitted"
                }
              },
              {
                "edt": "0x42",
                "name": "prohibited",
                "descriptions": {
                  "ja": "禁止",
                  "en": "Prohibited"
                }
              }
            ]
          }
        },
        "0xCD": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転許可設定",
            "en": "Operation permission setting"
          },
          "shortName": "operationPermission",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "permitted",
                "descriptions": {
                  "ja": "許可",
                  "en": "Permitted"
                }
              },
              {
                "edt": "0x42",
                "name": "prohibited",
                "descriptions": {
                  "ja": "禁止",
                  "en": "Prohibited"
                }
              }
            ]
          }
        },
        "0xCE": {
          "validRelease": {
            "from": "H",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自立運転許可設定",
            "en": "Independent operation permission setting"
          },
          "shortName": "independentOperationPermission",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "permitted",
                "descriptions": {
                  "ja": "許可",
                  "en": "Permitted"
                }
              },
              {
                "edt": "0x42",
                "name": "prohibited",
                "descriptions": {
                  "ja": "禁止",
                  "en": "Prohibited"
                }
              }
            ]
          }
        },
        "0xCF": {
          "oneOf": [
            {
              "validRelease": {
                "from": "D",
                "to": "G"
              },
              "propertyName": {
                "ja": "運転動作状態",
                "en": "Working operation status"
              },
              "shortName": "actualOperationMode",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "rapidCharging",
                    "descriptions": {
                      "ja": "急速充電",
                      "en": "Rapid Charging"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "charging",
                    "descriptions": {
                      "ja": "充電",
                      "en": "Charging"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "discharging",
                    "descriptions": {
                      "ja": "放電",
                      "en": "Discharging"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "standby",
                    "descriptions": {
                      "ja": "待機",
                      "en": "Standby"
                    }
                  },
                  {
                    "edt": "0x45",
                    "name": "test",
                    "descriptions": {
                      "ja": "テスト",
                      "en": "Test"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "other",
                    "descriptions": {
                      "ja": "その他",
                      "en": "Other"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "運転動作状態",
                "en": "Working operation status"
              },
              "shortName": "actualOperationMode",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "rapidCharging",
                    "descriptions": {
                      "ja": "急速充電",
                      "en": "Rapid Charging"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "charging",
                    "descriptions": {
                      "ja": "充電",
                      "en": "Charging"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "discharging",
                    "descriptions": {
                      "ja": "放電",
                      "en": "Discharging"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "standby",
                    "descriptions": {
                      "ja": "待機",
                      "en": "Standby"
                    }
                  },
                  {
                    "edt": "0x45",
                    "name": "test",
                    "descriptions": {
                      "ja": "テスト",
                      "en": "Test"
                    }
                  },
                  {
                    "edt": "0x46",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x48",
                    "name": "restart",
                    "descriptions": {
                      "ja": "再起動",
                      "en": "Restart"
                    }
                  },
                  {
                    "edt": "0x49",
                    "name": "capacityRecalculation",
                    "descriptions": {
                      "ja": "実効容量再計算処理",
                      "en": "Effective capacity recalculation processing"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "other",
                    "descriptions": {
                      "ja": "その他",
                      "en": "Other"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xD0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格電力量",
            "en": "Rated electric energy"
          },
          "shortName": "ratedElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格容量",
            "en": "Rated capacity"
          },
          "shortName": "ratedCapacity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "Ah",
            "multipleOf": 0.1
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格電圧",
            "en": "Rated voltage"
          },
          "shortName": "ratedVoltage",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "V"
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時充放電電力計測値",
            "en": "Measured instantaneous charging/discharging electric energy"
          },
          "shortName": "instantaneousChargingAndDischargingElectricPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int32",
            "minimum": -999999999,
            "maximum": 999999999,
            "unit": "W"
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時充放電電流計測値",
            "en": "Measured instantaneous charging/discharging current"
          },
          "shortName": "instantaneousChargingAndDischargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int16",
            "minimum": -32767,
            "maximum": 32766,
            "unit": "A",
            "multipleOf": 0.1
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時充放電電圧計測値",
            "en": "Measured instantaneous charging/discharging voltage"
          },
          "shortName": "instantaneousChargingAndDischargingVoltage",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int16",
            "minimum": -32767,
            "maximum": 32766,
            "unit": "V"
          }
        },
        "0xD6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算放電電力量計測値",
            "en": "Measured cumulative discharging electric energy"
          },
          "shortName": "cumulativeDischargingElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "kWh",
            "multipleOf": 0.001
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算放電電力量リセット設定",
            "en": "\"Measured cumulative discharging electric energy\" reset setting"
          },
          "shortName": "cumulativeDischargingElectricEnergyReset",
          "accessRule": {
            "get": "notApplicable",
            "set": "optional",
            "inf": "notApplicable"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "name": "reset",
                "descriptions": {
                  "ja": "リセット",
                  "en": "Reset"
                }
              }
            ]
          }
        },
        "0xD8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算充電電力量計測値",
            "en": "Measured cumulative charging electric energy"
          },
          "shortName": "cumulativeChargingElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "kWh",
            "multipleOf": 0.001
          }
        },
        "0xD9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算充電電力量リセット設定",
            "en": "\"Measured cumulative charging electric energy\" reset setting"
          },
          "shortName": "cumulativeChargingElectricEnergyReset",
          "accessRule": {
            "get": "notApplicable",
            "set": "optional",
            "inf": "notApplicable"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "name": "reset",
                "descriptions": {
                  "ja": "リセット",
                  "en": "Reset"
                }
              }
            ]
          }
        },
        "0xDA": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "A"
              },
              "propertyName": {
                "ja": "運転モード設定",
                "en": "Operation mode setting"
              },
              "shortName": "operationMode",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "rapidCharging",
                    "descriptions": {
                      "ja": "急速充電",
                      "en": "Rapid Charging"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "charging",
                    "descriptions": {
                      "ja": "充電",
                      "en": "Charging"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "discharging",
                    "descriptions": {
                      "ja": "放電",
                      "en": "Discharging"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "standby",
                    "descriptions": {
                      "ja": "待機",
                      "en": "Standby"
                    }
                  },
                  {
                    "edt": "0x45",
                    "name": "test",
                    "descriptions": {
                      "ja": "テスト",
                      "en": "Test"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "B",
                "to": "C"
              },
              "propertyName": {
                "ja": "運転モード設定",
                "en": "Operation mode setting"
              },
              "shortName": "operationMode",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "rapidCharging",
                    "descriptions": {
                      "ja": "急速充電",
                      "en": "Rapid Charging"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "charging",
                    "descriptions": {
                      "ja": "充電",
                      "en": "Charging"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "discharging",
                    "descriptions": {
                      "ja": "放電",
                      "en": "Discharging"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "standby",
                    "descriptions": {
                      "ja": "待機",
                      "en": "Standby"
                    }
                  },
                  {
                    "edt": "0x45",
                    "name": "test",
                    "descriptions": {
                      "ja": "テスト",
                      "en": "Test"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "other",
                    "descriptions": {
                      "ja": "その他",
                      "en": "Other"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "D",
                "to": "G"
              },
              "propertyName": {
                "ja": "運転モード設定",
                "en": "Operation mode setting"
              },
              "shortName": "operationMode",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "rapidCharging",
                    "descriptions": {
                      "ja": "急速充電",
                      "en": "Rapid Charging"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "charging",
                    "descriptions": {
                      "ja": "充電",
                      "en": "Charging"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "discharging",
                    "descriptions": {
                      "ja": "放電",
                      "en": "Discharging"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "standby",
                    "descriptions": {
                      "ja": "待機",
                      "en": "Standby"
                    }
                  },
                  {
                    "edt": "0x45",
                    "name": "test",
                    "descriptions": {
                      "ja": "テスト",
                      "en": "Test"
                    }
                  },
                  {
                    "edt": "0x46",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "other",
                    "descriptions": {
                      "ja": "その他",
                      "en": "Other"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "運転モード設定",
                "en": "Operation mode setting"
              },
              "shortName": "operationMode",
              "accessRule": {
                "get": "required",
                "set": "required",
                "inf": "required"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x41",
                    "name": "rapidCharging",
                    "descriptions": {
                      "ja": "急速充電",
                      "en": "Rapid Charging"
                    }
                  },
                  {
                    "edt": "0x42",
                    "name": "charging",
                    "descriptions": {
                      "ja": "充電",
                      "en": "Charging"
                    }
                  },
                  {
                    "edt": "0x43",
                    "name": "discharging",
                    "descriptions": {
                      "ja": "放電",
                      "en": "Discharging"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "standby",
                    "descriptions": {
                      "ja": "待機",
                      "en": "Standby"
                    }
                  },
                  {
                    "edt": "0x45",
                    "name": "test",
                    "descriptions": {
                      "ja": "テスト",
                      "en": "Test"
                    }
                  },
                  {
                    "edt": "0x46",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  },
                  {
                    "edt": "0x48",
                    "name": "restart",
                    "descriptions": {
                      "ja": "再起動",
                      "en": "Restart"
                    }
                  },
                  {
                    "edt": "0x49",
                    "name": "capacityRecalculation",
                    "descriptions": {
                      "ja": "実効容量再計算処理",
                      "en": "Effective capacity recalculation processing"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "other",
                    "descriptions": {
                      "ja": "その他",
                      "en": "Other"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xDB": {
          "oneOf": [
            {
              "validRelease": {
                "from": "B",
                "to": "G"
              },
              "propertyName": {
                "ja": "系統連系状態",
                "en": "System-interconnected type"
              },
              "shortName": "powerSystemInterconnectionStatus",
              "accessRule": {
                "get": "optional",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "name": "reversePowerFlowAcceptable",
                    "descriptions": {
                      "ja": "系統連系（逆潮流可）",
                      "en": "System interconnection (reverse power flow acceptable)"
                    }
                  },
                  {
                    "edt": "0x01",
                    "name": "independent",
                    "descriptions": {
                      "ja": "独立",
                      "en": "Independent type"
                    }
                  },
                  {
                    "edt": "0x02",
                    "name": "reversePowerFlowNotAcceptable",
                    "descriptions": {
                      "ja": "系統連系（逆潮流不可）",
                      "en": "System-interconnected type (reverse power flow not acceptable)"
                    }
                  }
                ]
              }
            },
            {
              "validRelease": {
                "from": "H",
                "to": "latest"
              },
              "propertyName": {
                "ja": "系統連系状態",
                "en": "System-interconnected type"
              },
              "shortName": "powerSystemInterconnectionStatus",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "optional"
              },
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "name": "reversePowerFlowAcceptable",
                    "descriptions": {
                      "ja": "系統連系（逆潮流可）",
                      "en": "System interconnection (reverse power flow acceptable)"
                    }
                  },
                  {
                    "edt": "0x01",
                    "name": "independent",
                    "descriptions": {
                      "ja": "独立",
                      "en": "Independent type"
                    }
                  },
                  {
                    "edt": "0x02",
                    "name": "reversePowerFlowNotAcceptable",
                    "descriptions": {
                      "ja": "系統連系（逆潮流不可）",
                      "en": "System-interconnected type (reverse power flow not acceptable)"
                    }
                  }
                ]
              }
            }
          ]
        },
        "0xDC": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大充電電力値（独立時）",
            "en": "Minimum/maximum charging power (Independent)"
          },
          "shortName": "minimumAndMaximumChargingPowerAtIndependent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint32",
                  "minimum": 0,
                  "maximum": 999999999,
                  "unit": "W"
                },
                "descriptions": {
                  "ja": "最小充電電力値",
                  "en": "Minimum charging power"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint32",
                  "minimum": 0,
                  "maximum": 999999999,
                  "unit": "W"
                },
                "descriptions": {
                  "ja": "最大充電電力値",
                  "en": "Maximum charging power"
                }
              }
            ]
          }
        },
        "0xDD": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大放電電力値（独立時）",
            "en": "Minimum/maximum discharging power (Independent)"
          },
          "shortName": "minimumAndMaximumDischargingPowerAtIndependent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint32",
                  "minimum": 0,
                  "maximum": 999999999,
                  "unit": "W"
                },
                "descriptions": {
                  "ja": "最小放電電力値",
                  "en": "Minimum discharging power"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint32",
                  "minimum": 0,
                  "maximum": 999999999,
                  "unit": "W"
                },
                "descriptions": {
                  "ja": "最大放電電力値",
                  "en": "Maximum discharging power"
                }
              }
            ]
          }
        },
        "0xDE": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大充電電流値（独立時）",
            "en": "Minimum/maximum charging current (Independent)"
          },
          "shortName": "minimumAndMaximumChargingCurrentAtIndependent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最小充電電流値",
                  "en": "Minimum charging current"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最大充電電流値",
                  "en": "Maximum charging current"
                }
              }
            ]
          }
        },
        "0xDF": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大放電電流値（独立時）",
            "en": "Minimum/maximum discharging current (Independent)"
          },
          "shortName": "minimumAndMaximumDischargingCurrentAtIndependent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最小放電電流値",
                  "en": "Minimum discharging current"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最大放電電流値",
                  "en": "Maximum discharging current"
                }
              }
            ]
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充放電量設定値1",
            "en": "Charging/discharging amount setting 1"
          },
          "shortName": "chargingAndDischargingAmount1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int32",
                "minimum": 1,
                "maximum": 999999999,
                "unit": "Wh",
                "descriptions": {
                  "ja": "充電時（プラス値）",
                  "en": "during charging (positive value)"
                }
              },
              {
                "type": "number",
                "format": "int32",
                "minimum": -999999999,
                "maximum": -1,
                "unit": "Wh",
                "descriptions": {
                  "ja": "放電時（マイナス値）",
                  "en": "during discharging (negative value)"
                }
              }
            ],
            "note": {
              "ja": "EPC=0xE0を実装する場合は、EPC=0xE1,E7,E8,E9,EAを実装しない。プラス値：充電　マイナス値：放電。",
              "en": "In case EPC=0xE0 is implemented, EPC=0xE1,E7,E8,E9,EA should not be implemented. Positive value: Charging, Negative value: Discharging."
            }
          }
        },
        "0xE1": {
          "propertyName": {
            "ja": "充放電量設定値2",
            "en": "Charging/discharging amount setting 2"
          },
          "shortName": "chargingAndDischargingAmount2",
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "int16",
                "minimum": 1,
                "maximum": 32766,
                "unit": "Ah",
                "multipleOf": 0.1,
                "descriptions": {
                  "ja": "充電時（プラス値）",
                  "en": "during charging (positive value)"
                }
              },
              {
                "type": "number",
                "format": "int16",
                "minimum": -32767,
                "maximum": -1,
                "unit": "Ah",
                "multipleOf": 0.1,
                "descriptions": {
                  "ja": "放電時（マイナス値）",
                  "en": "during discharging (negative value)"
                }
              }
            ],
            "note": {
              "ja": "EPC=0xE1を実装する場合は、EPC=0xE0,E7,E8,E9,EAを実装しない。プラス値：充電　マイナス値：放電。",
              "en": "In case EPC=0xE1 is implemented, EPC=0xE0,E7,E8,E9,EA should not be implemented. Positive value: Charging, Negative value: Discharging."
            }
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "蓄電残量1",
            "en": "Remaining stored electricity 1"
          },
          "shortName": "remainingCapacity1",
          "accessRule": {
            "get": "required_c",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          },
          "note": {
            "ja": "0xE2, 0xE3または0xE4のいずれかを必須",
            "en": "Either 0xE2, 0xE3 or 0xE4 is required."
          }
        },
        "0xE3": {
          "propertyName": {
            "ja": "蓄電残量2",
            "en": "Remaining stored electricity 2"
          },
          "shortName": "remainingCapacity2",
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "accessRule": {
            "get": "required_c",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "Ah",
            "multipleOf": 0.1
          },
          "note": {
            "ja": "0xE2, 0xE3または0xE4のいずれかを必須",
            "en": "Either 0xE2, 0xE3 or 0xE4 is required."
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "蓄電残量3",
            "en": "Remaining stored electricity 3"
          },
          "shortName": "remainingCapacity3",
          "accessRule": {
            "get": "required_c",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          },
          "note": {
            "ja": "0xE2, 0xE3または0xE4のいずれかを必須",
            "en": "Either 0xE2, 0xE3 or 0xE4 is required."
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "劣化状態",
            "en": "Battery state of health"
          },
          "shortName": "batteryHealthState",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "蓄電池タイプ",
            "en": "Battery type"
          },
          "shortName": "batteryType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "name": "unknown",
                "descriptions": {
                  "ja": "不明",
                  "en": "unknown"
                }
              },
              {
                "edt": "0x01",
                "name": "lead",
                "descriptions": {
                  "ja": "鉛",
                  "en": "lead"
                }
              },
              {
                "edt": "0x02",
                "name": "ni-mh",
                "descriptions": {
                  "ja": "ニッケル水素",
                  "en": "nickel-metal hydride"
                }
              },
              {
                "edt": "0x03",
                "name": "ni-cd",
                "descriptions": {
                  "ja": "ニッケルカドミウム",
                  "en": "nickel-cadmium"
                }
              },
              {
                "edt": "0x04",
                "name": "lib",
                "descriptions": {
                  "ja": "リチウムイオン",
                  "en": "lithium ion"
                }
              },
              {
                "edt": "0x05",
                "name": "zinc",
                "descriptions": {
                  "ja": "亜鉛",
                  "en": "zinc"
                }
              },
              {
                "edt": "0x06",
                "name": "alkaline",
                "descriptions": {
                  "ja": "充電式アルカリ",
                  "en": "rechargeable alkaline"
                }
              }
            ]
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電量設定値1",
            "en": "Charging amount setting 1"
          },
          "shortName": "chargingAmount1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          },
          "note": {
            "ja": "EPC=0xE7を実装する場合は、EPC=0xE0,E1,E9を実装しない",
            "en": "In case EPC=0xE7 is implemented, EPC=0xE0,E1,E9 should not be implemented."
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "放電量設定値1",
            "en": "Discharging amount setting 1"
          },
          "shortName": "dischargingAmount1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          },
          "note": {
            "ja": "EPC=0xE8を実装する場合は、EPC=0xE0,E1,EAを実装しない",
            "en": "In case EPC=0xE8 is implemented, EPC=0xE0,E1,EA should not be implemented."
          }
        },
        "0xE9": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電量設定値2",
            "en": "Charging amount setting 2"
          },
          "shortName": "chargingAmount2",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "Ah",
            "multipleOf": 0.1
          },
          "note": {
            "ja": "EPC=0xE9を実装する場合は、EPC=0xE0,E1,E7を実装しない",
            "en": "In case EPC=0xE9 is implemented, EPC=0xE0,E1,E7 should not be implemented."
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "放電量設定値2",
            "en": "Discharging amount setting 2"
          },
          "shortName": "dischargingAmount2",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "Ah",
            "multipleOf": 0.1
          },
          "note": {
            "ja": "EPC=0xEAを実装する場合は、EPC=0xE0,E1,E8を実装しない",
            "en": "In case EPC=0xEA is implemented, EPC=0xE0,E1,E8 should not be implemented."
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電電力設定値",
            "en": "Charging electric energy setting"
          },
          "shortName": "chargingPower",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "W"
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "放電電力設定値",
            "en": "Discharging electric energy setting"
          },
          "shortName": "dischargingPower",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "W"
          }
        },
        "0xED": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電電流設定値",
            "en": "Charging current setting"
          },
          "shortName": "chargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "A",
            "multipleOf": 0.1
          }
        },
        "0xEE": {
          "validRelease": {
            "from": "B",
            "to": "latest"
          },
          "propertyName": {
            "ja": "放電電流設定値",
            "en": "Discharging current setting"
          },
          "shortName": "dischargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "A",
            "multipleOf": 0.1
          }
        },
        "0xEF": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格電圧（独立時）",
            "en": "Rated voltage (Independent)"
          },
          "shortName": "ratedVoltageAtIndependent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "V"
          }
        }
      }
    },
    "0x0280": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "電力量メータ",
        "en": "Watt-hour meter"
      },
      "shortName": "wattHourMeter",
      "elProperties": {
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値",
            "en": "Cumulative amounts of electric energy measurement value"
          },
          "shortName": "cumulativeElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-99999999",
            "unit": "kWh",
            "coefficient": [
              "0xE2"
            ],
            "overflowCode": false,
            "underflowCode": false
          },
          "note": {
            "ja": "0xE2の値を乗算する必要あり",
            "en": "It is necessary to mutiply the value of 0xE2"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量単位",
            "en": "Cumulative amounts of electric energy unit"
          },
          "shortName": "unitOfElectircEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              }
            ]
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値履歴1",
            "en": "Cumulative amounts of electric energy measurement log 1"
          },
          "shortName": "cumulativeElectricEnergyLog1",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "array",
            "itemSize": 4,
            "minItems": 48,
            "maxItems": 48,
            "items": {
              "oneOf": [
                {
                  "$ref": "#/definitions/number_0-99999999",
                  "unit": "kWh",
                  "coefficient": [
                    "0xE2"
                  ],
                  "overflowCode": false,
                  "underflowCode": false
                },
                {
                  "type": "state",
                  "size": 4,
                  "enum": [
                    {
                      "edt": "0xFFFFFFFE",
                      "name": "noData",
                      "descriptions": {
                        "ja": "No data",
                        "en": "No data"
                      },
                      "readOnly": true
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "0x0287": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "分電盤メータリング",
        "en": "Power distribution board"
      },
      "shortName": "powerDistributionBoardMetering",
      "elProperties": {
        "0xB0": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "主幹定格容量",
            "en": "Master rated capacity"
          },
          "shortName": "masterRatedCapacity",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-253",
            "unit": "A"
          }
        },
        "0xB1": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル数（片方向）",
            "en": "Number of measurement channels (simplex)"
          },
          "shortName": "numberOfMeasurementChannelsSimplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_1-252"
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測チャンネル範囲指定（片方向）",
            "en": "Channel range specification for cumulative amount of electric power consumption measurement (simplex)"
          },
          "shortName": "channelRangeForCumulativeElectricEnergySimplex",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              }
            ]
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値リスト（片方向）",
            "en": "Measured cumulative amount of electric power consumption list (simplex)"
          },
          "shortName": "cumulativeElectricEnergyListSimplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xB2",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "maxItems": 60,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kWh",
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Measured cumulative amount of electric power consumption"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xB2",
            "en": "Atomic operation with EPC=0xB2"
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電流計測チャンネル範囲指定（片方向）",
            "en": "Channel range specification for instantaneous current measurement (simplex)"
          },
          "shortName": "channelRangeForInstantaneousCurrentSimplex",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              }
            ]
          }
        },
        "0xB5": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電流計測値リスト（片方向）",
            "en": "Measured instantaneous current list (simplex)"
          },
          "shortName": "instantaneousCurrentListSimplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xB4",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              },
              {
                "name": "instantaneousCurrent",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "maxItems": 60,
                  "items": {
                    "type": "object",
                    "properties": [
                      {
                        "name": "rPhase",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_-32767-32765",
                              "unit": "A",
                              "multipleOf": 0.1
                            },
                            {
                              "type": "state",
                              "size": 2,
                              "enum": [
                                {
                                  "edt": "0x7FFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "R相",
                          "en": "R phase"
                        }
                      },
                      {
                        "name": "tPhase",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_-32767-32765",
                              "unit": "A",
                              "multipleOf": 0.1
                            },
                            {
                              "type": "state",
                              "size": 2,
                              "enum": [
                                {
                                  "edt": "0x7FFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "T相",
                          "en": "T phase"
                        }
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "瞬時電流計測値",
                  "en": "Measured instantaneous current"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xB4",
            "en": "Atomic operation with EPC=0xB4"
          }
        },
        "0xB6": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電力計測チャンネル範囲指定（片方向）",
            "en": "Channel range specification for instantaneous power consumption measurement (simplex)"
          },
          "shortName": "channelRangeForInstantaneousElectricPowerSimplex",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              }
            ]
          }
        },
        "0xB7": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電力計測値リスト（片方向）",
            "en": "Measured instantaneous power consumption list (simplex)"
          },
          "shortName": "instantaneousElectricPowerListSimplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xB6",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              },
              {
                "name": "instantaneousElectricPower",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "maxItems": 60,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_-2147483647-2147483645",
                        "unit": "W"
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0x7FFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "瞬時電力計測値",
                  "en": "Measured instantaneous power consumption"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xB6",
            "en": "Atomic operation with EPC=0xB6"
          }
        },
        "0xB8": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル数（双方向）",
            "en": "Number of measurement channels (duplex)"
          },
          "shortName": "numberOfMeasurementChannelsDuplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_1-252"
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFD",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不明",
                      "en": "Undefined"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xB9": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測チャンネル範囲指定（双方向）",
            "en": "Channel range specification for cumulative amount of electric power consumption measurement (duplex)"
          },
          "shortName": "channelRangeForCumulativeElectricEnergyDuplex",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-30"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              }
            ]
          }
        },
        "0xBA": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値リスト（双方向）",
            "en": "Measured cumulative amount of electric power consumption list (duplex)"
          },
          "shortName": "cumulativeElectricEnergyListDuplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xB9",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-30"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 8,
                  "maxItems": 30,
                  "items": {
                    "type": "object",
                    "properties": [
                      {
                        "name": "normalDirectionElectricEnergy",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_0-99999999",
                              "unit": "kWh",
                              "overflowCode": false,
                              "underflowCode": false
                            },
                            {
                              "type": "state",
                              "size": 4,
                              "enum": [
                                {
                                  "edt": "0xFFFFFFFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "積算電力量計測値（正方向）",
                          "en": "Measured cumulative amount of electric power consumption (forward direction)"
                        }
                      },
                      {
                        "name": "reverseDirectionElectricEnergy",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_0-99999999",
                              "unit": "kWh",
                              "overflowCode": false,
                              "underflowCode": false
                            },
                            {
                              "type": "state",
                              "size": 4,
                              "enum": [
                                {
                                  "edt": "0xFFFFFFFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "積算電力量計測値（逆方向）",
                          "en": "Measured cumulative amount of electric power consumption (reverse direction)"
                        }
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Measured cumulative amount of electric power consumption"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xB9",
            "en": "Atomic operation with EPC=0xB9"
          }
        },
        "0xBB": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電流計測チャンネル範囲指定（双方向）",
            "en": "Channel range specification for instantaneous current measurement (duplex)"
          },
          "shortName": "channelRangeForInstantaneousCurrentDuplex",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              }
            ]
          }
        },
        "0xBC": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電流計測値リスト（双方向）",
            "en": "Measured instantaneous current list (duplex)"
          },
          "shortName": "instantaneousCurrentListDuplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xBB",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              },
              {
                "name": "instantaneousCurrent",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "maxItems": 60,
                  "items": {
                    "type": "object",
                    "properties": [
                      {
                        "name": "rPhase",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_-32767-32765",
                              "unit": "A",
                              "multipleOf": 0.1
                            },
                            {
                              "type": "state",
                              "size": 2,
                              "enum": [
                                {
                                  "edt": "0x7FFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "R相",
                          "en": "R phase"
                        }
                      },
                      {
                        "name": "tPhase",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_-32767-32765",
                              "unit": "A",
                              "multipleOf": 0.1
                            },
                            {
                              "type": "state",
                              "size": 2,
                              "enum": [
                                {
                                  "edt": "0x7FFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "T相",
                          "en": "T phase"
                        }
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "瞬時電流計測値",
                  "en": "Measured instantaneous current"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xBB",
            "en": "Atomic operation with EPC=0xBB"
          }
        },
        "0xBD": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電力計測チャンネル範囲指定（双方向）",
            "en": "Channel range specification for instantaneous power consumption measurement (duplex)"
          },
          "shortName": "channelRangeForInstantaneousElectricPowerDuplex",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              }
            ]
          }
        },
        "0xBE": {
          "validRelease": {
            "from": "E",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電力計測値リスト（双方向）",
            "en": "Measured instantaneous power consumption list (duplex)"
          },
          "shortName": "instantaneousElectricPowerListDuplex",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xBD",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startChannel",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-252"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネル",
                  "en": "Acquisition start channel"
                }
              },
              {
                "name": "range",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-60"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFD",
                          "name": "undefined",
                          "descriptions": {
                            "ja": "不明",
                            "en": "Undefined"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "取得開始チャンネルからの範囲を指定",
                  "en": "Range from the acquisition start channel"
                }
              },
              {
                "name": "instantaneousElectricPower",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "maxItems": 60,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_-2147483647-2147483645",
                        "unit": "W"
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0x7FFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "瞬時電力計測値",
                  "en": "Measured instantaneous power consumption"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xBD",
            "en": "Atomic operation with EPC=0xBD"
          }
        },
        "0xC0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値（正方向）",
            "en": "Measured cumulative amount of electric energy (normal direction)"
          },
          "shortName": "normalDirectionCumulativeElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99999999",
                "unit": "kWh",
                "coefficient": [
                  "0xC2"
                ],
                "overflowCode": false,
                "underflowCode": false
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0xFFFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xC1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値（逆方向）",
            "en": "Measured cumulative amount of electric energy (reverse direction)"
          },
          "shortName": "reverseDirectionCumulativeElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99999999",
                "unit": "kWh",
                "coefficient": [
                  "0xC2"
                ],
                "overflowCode": false,
                "underflowCode": false
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0xFFFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量単位",
            "en": "Unit for cumulative amounts of electric energy"
          },
          "shortName": "unitOfElectircEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              },
              {
                "edt": "0x04",
                "numericValue": 0.0001
              },
              {
                "edt": "0x0A",
                "numericValue": 10
              },
              {
                "edt": "0x0B",
                "numericValue": 100
              },
              {
                "edt": "0x0C",
                "numericValue": 1000
              },
              {
                "edt": "0x0D",
                "numericValue": 10000
              }
            ]
          }
        },
        "0xC3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値履歴（正方向）",
            "en": "Historical data of measured cumulative amounts of electric energy (normal direction)"
          },
          "shortName": "normalDirectionCumulativeElectricEnergyLog",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xC5",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "The day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kWh",
                        "coefficient": [
                          "0xC2"
                        ],
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量(8桁)の計測結果履歴",
                  "en": "The historical data of measured cumulative amounts of electric energy (8 digits)"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xC5",
            "en": "Atomic operation with EPC=0xC5"
          }
        },
        "0xC4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値履歴（逆方向）",
            "en": "Historical data of measured cumulative amounts of electric energy(reverse direction)"
          },
          "shortName": "reverseDirectionCumulativeElectricEnergyLog",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xC5",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "The day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kWh",
                        "coefficient": [
                          "0xC2"
                        ],
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量(8桁)の計測結果履歴",
                  "en": "The historical data of measured cumulative amounts of electric energy (8 digits)"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xC5",
            "en": "Atomic operation with EPC=0xC5"
          }
        },
        "0xC5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算履歴収集日",
            "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
          },
          "shortName": "retrievedDayForElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99"
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "defaultValue",
                    "descriptions": {
                      "ja": "初期値",
                      "en": "Default value"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xC3 and 0xC4",
            "en": "Atomic operation with EPC=0xC3 and 0xC4"
          }
        },
        "0xC6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電力計測値",
            "en": "Measured instantaneous amount of electric energy"
          },
          "shortName": "instantaneousElectricPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_-2147483647-2147483645",
                "unit": "W"
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0x7FFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xC7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電流計測値",
            "en": "Measured instantaneous currents"
          },
          "shortName": "instantaneousCurrent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "rPhase",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_-32767-32765",
                      "unit": "A",
                      "multipleOf": 0.1
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x7FFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "R相",
                  "en": "R phase"
                }
              },
              {
                "name": "tPhase",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_-32767-32765",
                      "unit": "A",
                      "multipleOf": 0.1
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x7FFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "T相",
                  "en": "T phase"
                }
              }
            ]
          }
        },
        "0xC8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電圧計測値",
            "en": "Measured instantaneous voltages"
          },
          "shortName": "instantaneousVoltage",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "R-S(N)",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "V",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "R-S(N)間",
                  "en": "between R and S(N)"
                }
              },
              {
                "name": "S(N)-T",
                "element": {
                  "$ref": "#/definitions/number_0-65533",
                  "unit": "V",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "S(N)-T間",
                  "en": "between S(N) and T"
                }
              }
            ]
          }
        },
        "0xD0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル1",
            "en": "Measurement channel 1"
          },
          "shortName": "measurementChannel1",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル2",
            "en": "Measurement channel 2"
          },
          "shortName": "measurementChannel2",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル3",
            "en": "Measurement channel 3"
          },
          "shortName": "measurementChannel3",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル4",
            "en": "Measurement channel 4"
          },
          "shortName": "measurementChannel4",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル5",
            "en": "Measurement channel 5"
          },
          "shortName": "measurementChannel5",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル6",
            "en": "Measurement channel 6"
          },
          "shortName": "measurementChannel6",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル7",
            "en": "Measurement channel 7"
          },
          "shortName": "measurementChannel7",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル8",
            "en": "Measurement channel 8"
          },
          "shortName": "measurementChannel8",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル9",
            "en": "Measurement channel 9"
          },
          "shortName": "measurementChannel9",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xD9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル10",
            "en": "Measurement channel 10"
          },
          "shortName": "measurementChannel10",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xDA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル11",
            "en": "Measurement channel 11"
          },
          "shortName": "measurementChannel11",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xDB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル12",
            "en": "Measurement channel 12"
          },
          "shortName": "measurementChannel12",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xDC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル13",
            "en": "Measurement channel 13"
          },
          "shortName": "measurementChannel13",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xDD": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル14",
            "en": "Measurement channel 14"
          },
          "shortName": "measurementChannel14",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xDE": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル15",
            "en": "Measurement channel 15"
          },
          "shortName": "measurementChannel15",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xDF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル16",
            "en": "Measurement channel 16"
          },
          "shortName": "measurementChannel16",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル17",
            "en": "Measurement channel 17"
          },
          "shortName": "measurementChannel17",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル18",
            "en": "Measurement channel 18"
          },
          "shortName": "measurementChannel18",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル19",
            "en": "Measurement channel 19"
          },
          "shortName": "measurementChannel19",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル20",
            "en": "Measurement channel 20"
          },
          "shortName": "measurementChannel20",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル21",
            "en": "Measurement channel 21"
          },
          "shortName": "measurementChannel21",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル22",
            "en": "Measurement channel 22"
          },
          "shortName": "measurementChannel22",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル23",
            "en": "Measurement channel 23"
          },
          "shortName": "measurementChannel23",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル24",
            "en": "Measurement channel 24"
          },
          "shortName": "measurementChannel24",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル25",
            "en": "Measurement channel 25"
          },
          "shortName": "measurementChannel25",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xE9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル26",
            "en": "Measurement channel 26"
          },
          "shortName": "measurementChannel26",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル27",
            "en": "Measurement channel 27"
          },
          "shortName": "measurementChannel27",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル28",
            "en": "Measurement channel 28"
          },
          "shortName": "measurementChannel28",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル29",
            "en": "Measurement channel 29"
          },
          "shortName": "measurementChannel29",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xED": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル30",
            "en": "Measurement channel 30"
          },
          "shortName": "measurementChannel30",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xEE": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル31",
            "en": "Measurement channel 31"
          },
          "shortName": "measurementChannel31",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        },
        "0xEF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "計測チャンネル32",
            "en": "Measurement channel 32"
          },
          "shortName": "measurementChannel32",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/object_PDB_01"
          }
        }
      }
    },
    "0x0288": {
      "validRelease": {
        "from": "F",
        "to": "latest"
      },
      "className": {
        "ja": "低圧スマート電力量メータ",
        "en": "Low-voltage smart electric energy meter"
      },
      "shortName": "lvSmartElectricEnergyMeter",
      "elProperties": {
        "0xD3": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "係数",
            "en": "Coefficient"
          },
          "shortName": "coefficient",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-999999"
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量有効桁数",
            "en": "Number of effective digits for cumulative amounts of electric energy"
          },
          "shortName": "effectiveDigitsOfElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-8",
            "unit": "digit"
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値（正方向計測値）",
            "en": "Measured cumulative amount of electric energy (normal direction)"
          },
          "shortName": "normalDirectionCumulativeElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99999999",
                "unit": "kWh",
                "coefficient": [
                  "0xD3",
                  "0xE1"
                ],
                "overflowCode": false,
                "underflowCode": false
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0xFFFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量単位（正方向、逆方向計測値）",
            "en": "Unit for cumulative amounts of electric energy (normal and reverse directions)"
          },
          "shortName": "unitOfElectircEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              },
              {
                "edt": "0x04",
                "numericValue": 0.0001
              },
              {
                "edt": "0x0A",
                "numericValue": 10
              },
              {
                "edt": "0x0B",
                "numericValue": 100
              },
              {
                "edt": "0x0C",
                "numericValue": 1000
              },
              {
                "edt": "0x0D",
                "numericValue": 10000
              }
            ]
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値履歴1（正方向計測値）",
            "en": "Historical data of measured cumulative amounts of electric energy 1 (normal direction)"
          },
          "shortName": "normalDirectionCumulativeElectricEnergyLog1",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xE5",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kWh",
                        "coefficient": [
                          "0xD3",
                          "0xE1"
                        ],
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Measured cumulative amounts of electric energy"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xE5",
            "en": "Atomic operation with EPC=0xE5"
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値（逆方向計測値）",
            "en": "Measured cumulative amounts of electric energy (reverse direction)"
          },
          "shortName": "reverseDirectionCumulativeElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99999999",
                "unit": "kWh",
                "coefficient": [
                  "0xD3",
                  "0xE1"
                ],
                "overflowCode": false,
                "underflowCode": false
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0xFFFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値履歴1（逆方向計測値）",
            "en": "Historical data of measured cumulative amounts of electric energy 1 (reverse direction)"
          },
          "shortName": "reverseDirectionCumulativeElectricEnergyLog1",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xE5",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kWh",
                        "coefficient": [
                          "0xD3",
                          "0xE1"
                        ],
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Measured cumulative amounts of electric energy"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xE5",
            "en": "Atomic operation with EPC=0xE5"
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算履歴収集日1",
            "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved 1"
          },
          "shortName": "retrievedDayForElectricEnergy1",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99"
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "defaultValue",
                    "descriptions": {
                      "ja": "初期値",
                      "en": "Default value"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xE2 and 0xE4",
            "en": "Atomic operation with EPC=0xE2 and 0xE4"
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電力計測値",
            "en": "Measured instantaneous electric energy"
          },
          "shortName": "instantaneousElectricPower",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_-2147483647-2147483645",
                "unit": "W"
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0x7FFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時電流計測値",
            "en": "Measured instantaneous currents"
          },
          "shortName": "instantaneousCurrent",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "rPhase",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_-32767-32765",
                      "unit": "A",
                      "multipleOf": 0.1
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x7FFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "R相",
                  "en": "R phase"
                }
              },
              {
                "name": "tPhase",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_-32767-32765",
                      "unit": "A",
                      "multipleOf": 0.1
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x7FFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "T相",
                  "en": "T phase"
                }
              }
            ]
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定時積算電力量計測値（正方向計測値）",
            "en": "Cumulative amounts of electric energy measured at fixed time (normal direction)"
          },
          "shortName": "normalDirectionCumulativeElectricEnergyAtEvery30Min",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kWh",
                      "coefficient": [
                        "0xD3",
                        "0xE1"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Cumulative amounts of electric energy measured"
                }
              }
            ]
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定時積算電力量計測値（逆方向計測値）",
            "en": "Cumulative amounts of electric energy measured at fixed time (reverse direction)"
          },
          "shortName": "reverseDirectionCumulativeElectricEnergyEvery30Min",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kWh",
                      "coefficient": [
                        "0xD3",
                        "0xE1"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Cumulative amounts of electric energy measured"
                }
              }
            ]
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算電力量計測値履歴2（正方向、逆方向計測値）",
            "en": "Historical data of measured cumulative amounts of electric energy 2 (normal and reverse directions)"
          },
          "shortName": "cumulativeElectricEnergyLog2",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xED",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time",
                  "size": 6
                },
                "descriptions": {
                  "ja": "積算履歴収集日時",
                  "en": "Date and time for which the historical data is to be retrieved"
                }
              },
              {
                "name": "numberOfCollectionSegments",
                "element": {
                  "$ref": "#/definitions/number_1-12"
                },
                "descriptions": {
                  "ja": "収集コマ数",
                  "en": "Number of collection segments"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 8,
                  "maxItems": 12,
                  "items": {
                    "type": "object",
                    "properties": [
                      {
                        "name": "normalDirectionElectricEnergy",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_0-99999999",
                              "unit": "kWh",
                              "coefficient": [
                                "0xD3",
                                "0xE1"
                              ],
                              "overflowCode": false,
                              "underflowCode": false
                            },
                            {
                              "type": "state",
                              "size": 4,
                              "enum": [
                                {
                                  "edt": "0xFFFFFFFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "正方向",
                          "en": "Normal direction"
                        }
                      },
                      {
                        "name": "reverseDirectionElectricEnergy",
                        "element": {
                          "oneOf": [
                            {
                              "$ref": "#/definitions/number_0-99999999",
                              "unit": "kWh",
                              "coefficient": [
                                "0xD3",
                                "0xE1"
                              ],
                              "overflowCode": false,
                              "underflowCode": false
                            },
                            {
                              "type": "state",
                              "size": 4,
                              "enum": [
                                {
                                  "edt": "0xFFFFFFFE",
                                  "name": "noData",
                                  "descriptions": {
                                    "ja": "No data",
                                    "en": "No data"
                                  },
                                  "readOnly": true
                                }
                              ]
                            }
                          ]
                        },
                        "descriptions": {
                          "ja": "逆方向",
                          "en": "Reverse direction"
                        }
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算電力量計測値",
                  "en": "Measured cumulative amounts of electric energy"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xED。電力量は最大12セット。分のデータは0x00（0分）または0x1E（30分）。0xFFFFFFFFFFFF01：初期値",
            "en": "Atomic operation with EPC=0xED, energy is max. 12 sets of data. Data for minutes should be either 0x00 (0 minute) or 0x1E (30 minutes). 0xFFFFFFFFFFFF01: Default value"
          }
        },
        "0xED": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算履歴収集日2",
            "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved 2"
          },
          "shortName": "retrievedDayForElectricEnergy2",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time",
                  "size": 6
                },
                "descriptions": {
                  "ja": "積算履歴収集日時",
                  "en": "Date and time for which the historical data is to be retrieved"
                }
              },
              {
                "name": "numberOfCollectionSegments",
                "element": {
                  "$ref": "#/definitions/number_1-12"
                },
                "descriptions": {
                  "ja": "収集コマ数",
                  "en": "Number of collection segments"
                }
              }
            ]
          },
          "note": {
            "ja": "分のデータは0x00（0分）または0x1E（30分）。0xFFFFFFFFFFFF01：初期値",
            "en": "Data for minutes should be either 0x00 (0 minute) or 0x1E (30 minutes). 0xFFFFFFFFFFFF01: Default value"
          }
        }
      }
    },
    "0x028A": {
      "validRelease": {
        "from": "F",
        "to": "latest"
      },
      "className": {
        "ja": "高圧スマート電力量メータ",
        "en": "High-voltage smart electric energy meter"
      },
      "shortName": "hvSmartElectricEnergyMeter",
      "elProperties": {
        "0xC1": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "月間最大需要電力",
            "en": "Monthly maximum electric power demand"
          },
          "shortName": "monthlyMaximumElectricPowerDemand",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99999999",
                "unit": "kW"
              },
              {
                "type": "state",
                "size": 4,
                "enum": [
                  {
                    "edt": "0xFFFFFFFE",
                    "name": "noData",
                    "descriptions": {
                      "ja": "No data",
                      "en": "No data"
                    },
                    "readOnly": true
                  }
                ]
              }
            ]
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "累積最大需要電力",
            "en": "Cumulative maximum electric power demand"
          },
          "shortName": "cumulativeMaximumElectricPowerDemand",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-99999999",
            "unit": "kW",
            "overflowCode": false,
            "underflowCode": false
          }
        },
        "0xC3": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定時需要電力（30分平均電力）",
            "en": "Electric power demand at fixed time (30-minute average electric power)"
          },
          "shortName": "averageElectricPowerDemand",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "electricPower",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kW"
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "需要電力",
                  "en": "Electric Power demand"
                }
              }
            ]
          }
        },
        "0xC4": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "需要電力有効桁数",
            "en": "Number of effective digits of electric power demand"
          },
          "shortName": "effectiveDigitsOfElectricPowerDemand",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-8",
            "unit": "digit"
          }
        },
        "0xC5": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "需要電力単位",
            "en": "Unit of electric power demand"
          },
          "shortName": "unitOfElectricPowerDemand",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              },
              {
                "edt": "0x04",
                "numericValue": 0.0001
              },
              {
                "edt": "0x0A",
                "numericValue": 10
              },
              {
                "edt": "0x0B",
                "numericValue": 100
              },
              {
                "edt": "0x0C",
                "numericValue": 1000
              },
              {
                "edt": "0x0D",
                "numericValue": 10000
              }
            ]
          }
        },
        "0xC6": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "需要電力計測値履歴",
            "en": "Historical data of measured electric power demand"
          },
          "shortName": "electricPowerDemandLog",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xE1",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "electricPower",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kW"
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "需要電力",
                  "en": "Electric power demand"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xE1",
            "en": "Atomic operation with EPC=0xE1"
          }
        },
        "0xC7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "累積最大需要電力単位",
            "en": "Unit of cumulative maximum electric power demand"
          },
          "shortName": "unitOfCumulativeMaximumElectricPowerDemand",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              },
              {
                "edt": "0x04",
                "numericValue": 0.0001
              },
              {
                "edt": "0x0A",
                "numericValue": 10
              },
              {
                "edt": "0x0B",
                "numericValue": 100
              },
              {
                "edt": "0x0C",
                "numericValue": 1000
              },
              {
                "edt": "0x0D",
                "numericValue": 10000
              }
            ]
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "力測積算無効電力量（遅れ）計測値",
            "en": "Measurement data of reactive electric power consumption (lag) for power factor measurement"
          },
          "shortName": "cumulativeReactiveElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "reactiveElectricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kvarh",
                      "coefficient": [
                        "0xCD",
                        "0xD3",
                        "0xD4"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算無効電力量（遅れ）",
                  "en": "Cumulative amount of reactive electric power consumption (lag)"
                }
              }
            ]
          }
        },
        "0xCB": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定時力測積算無効電力量（遅れ）計測値",
            "en": "Measurement data of cumulative amount of reactive electric power consumption (lag) at fixed time for power factor measurement"
          },
          "shortName": "cumulativeReactiveElectricEnergyAtEvery30Min",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "reactiveElectricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kvarh",
                      "coefficient": [
                        "0xCD",
                        "0xD3",
                        "0xD4"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算無効電力量（遅れ）",
                  "en": "Cumulative amount of reactive electric power consumption (lag)"
                }
              }
            ]
          }
        },
        "0xCC": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "力測積算無効電力量（遅れ）有効桁数",
            "en": "Number of effective digits for measurement data of cumulative amount of reactive electric power consumption (lag) for power factor measurement"
          },
          "shortName": "effectiveDigitsOfReactiveElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-8",
            "unit": "digit"
          }
        },
        "0xCD": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "力測積算無効電力量（遅れ）単位",
            "en": "Unit of measurement data of cumulative amount of reactive electric power consumption (lag)"
          },
          "shortName": "unitOfReactiveElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              },
              {
                "edt": "0x04",
                "numericValue": 0.0001
              },
              {
                "edt": "0x0A",
                "numericValue": 10
              },
              {
                "edt": "0x0B",
                "numericValue": 100
              },
              {
                "edt": "0x0C",
                "numericValue": 1000
              },
              {
                "edt": "0x0D",
                "numericValue": 10000
              }
            ]
          }
        },
        "0xCE": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "力測積算無効電力量（遅れ）計測値履歴",
            "en": "Historical data of measurement data of cumulative amount of reactive electric power consumption (lag) for power factor measurement"
          },
          "shortName": "cumulativeReactiveElectricEnergyLog",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xE1",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "reactiveElectricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kvarh",
                        "coefficient": [
                          "0xCD",
                          "0xD3",
                          "0xD4"
                        ],
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算無効電力量（遅れ）",
                  "en": "Measurement data of cumulative amount of reactive electric power consumption (lag)"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xE1",
            "en": "Atomic operation with EPC=0xE1"
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "係数",
            "en": "Coefficient"
          },
          "shortName": "coefficient",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-999999"
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "係数の倍率",
            "en": "Multiplying factor for coefficient"
          },
          "shortName": "multiplyingFactorForCoefficient",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              }
            ]
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "確定日",
            "en": "Fixed date"
          },
          "shortName": "fixedDate",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-31"
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算履歴収集日",
            "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
          },
          "shortName": "retrievedDayForElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-99"
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "defaultValue",
                    "descriptions": {
                      "ja": "初期値",
                      "en": "Default value"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0: 当日",
            "en": "0: current day"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算有効電力量計測値",
            "en": "Measured cumulative amount of active electric energy"
          },
          "shortName": "cumulativeActiveElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "activeElectricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kWh",
                      "coefficient": [
                        "0xD3",
                        "0xD4",
                        "0xE6"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算有効電力量",
                  "en": "Cumulative amount of active electric energy"
                }
              }
            ]
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定時積算有効電力量計測値",
            "en": "Cumulative amounts of active electric energy at fixed time"
          },
          "shortName": "cumulativeActiveElectricEnergyAtEvery30Min",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "activeElectricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kWh",
                      "coefficient": [
                        "0xD3",
                        "0xD4",
                        "0xE6"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算有効電力量",
                  "en": "Cumulative amount of active electric energy"
                }
              }
            ]
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "力測積算有効電力量計測値",
            "en": "Measurement data of cumulative amount of active electric energy for power factor measurement"
          },
          "shortName": "cumulativeActiveElectricEnergyForPowerFactor",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dateAndTime",
                "element": {
                  "type": "date-time"
                },
                "descriptions": {
                  "ja": "計測日時",
                  "en": "Date and time of measurement"
                }
              },
              {
                "name": "electricEnergy",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99999999",
                      "unit": "kWh",
                      "coefficient": [
                        "0xD3",
                        "0xD4",
                        "0xE6"
                      ],
                      "overflowCode": false,
                      "underflowCode": false
                    },
                    {
                      "type": "state",
                      "size": 4,
                      "enum": [
                        {
                          "edt": "0xFFFFFFFE",
                          "name": "noData",
                          "descriptions": {
                            "ja": "No data",
                            "en": "No data"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算有効電力量",
                  "en": "Cumulative amount of active electric energy"
                }
              }
            ]
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算有効電力量有効桁数",
            "en": "Number of effective digits for cumulative amount of active electric energy"
          },
          "shortName": "effectiveDigitsOfElectricEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-8",
            "unit": "digit"
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算有効電力量単位",
            "en": "Unit of cumulative amounts of effective electric energy"
          },
          "shortName": "unitOfElectircEnergy",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "numericValue",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "numericValue": 1
              },
              {
                "edt": "0x01",
                "numericValue": 0.1
              },
              {
                "edt": "0x02",
                "numericValue": 0.01
              },
              {
                "edt": "0x03",
                "numericValue": 0.001
              },
              {
                "edt": "0x04",
                "numericValue": 0.0001
              },
              {
                "edt": "0x0A",
                "numericValue": 10
              },
              {
                "edt": "0x0B",
                "numericValue": 100
              },
              {
                "edt": "0x0C",
                "numericValue": 1000
              },
              {
                "edt": "0x0D",
                "numericValue": 10000
              }
            ]
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算有効電力量計測値履歴",
            "en": "Historical data of measured cumulative amount of active electric energy"
          },
          "shortName": "activeElectricEnergyLog",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "atomic": "0xE1",
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "day",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_0-99_u16"
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x00FF",
                          "name": "defaultValue",
                          "descriptions": {
                            "ja": "初期値",
                            "en": "Default value"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "積算履歴収集日",
                  "en": "Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
                }
              },
              {
                "name": "activeElectricEnergy",
                "element": {
                  "type": "array",
                  "itemSize": 4,
                  "minItems": 48,
                  "maxItems": 48,
                  "items": {
                    "oneOf": [
                      {
                        "$ref": "#/definitions/number_0-99999999",
                        "unit": "kWh",
                        "coefficient": [
                          "0xD3",
                          "0xD4",
                          "0xE6"
                        ],
                        "overflowCode": false,
                        "underflowCode": false
                      },
                      {
                        "type": "state",
                        "size": 4,
                        "enum": [
                          {
                            "edt": "0xFFFFFFFE",
                            "name": "noData",
                            "descriptions": {
                              "ja": "No data",
                              "en": "No data"
                            },
                            "readOnly": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "descriptions": {
                  "ja": "積算有効電力量",
                  "en": "Measured cumulative amount of active electric energy"
                }
              }
            ]
          },
          "note": {
            "ja": "Atomic operation with EPC=0xE1",
            "en": "Atomic operation with EPC=0xE1"
          }
        }
      }
    },
    "0x0290": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "一般照明",
        "en": "General lighting"
      },
      "shortName": "generalLighting",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ予約設定",
            "en": "ON timer reservation setting"
          },
          "shortName": "onTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "ON timer setting (time)"
          },
          "shortName": "onTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x94": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ予約設定",
            "en": "OFF timer reservation setting"
          },
          "shortName": "offTimerReservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0x95": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "OFFタイマ時刻設定値",
            "en": "OFF timer setting"
          },
          "shortName": "offTimerTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "照度レベル設定",
            "en": "Illuminance Level"
          },
          "shortName": "brightness",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0xB1": {
          "oneOf": [
            {
              "validRelease": {
                "from": "A",
                "to": "B"
              },
              "propertyName": {
                "ja": "光色設定",
                "en": "Light color setting"
              },
              "shortName": "lightColor",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "$ref": "#/definitions/state_LightColor-41-44"
              }
            },
            {
              "validRelease": {
                "from": "C",
                "to": "latest"
              },
              "propertyName": {
                "ja": "光色設定",
                "en": "Light color setting"
              },
              "shortName": "lightColor",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "$ref": "#/definitions/state_LightColor-40-44"
              }
            }
          ]
        },
        "0xB2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "照度レベル段数設定",
            "en": "Brightness level step setting"
          },
          "shortName": "brightnessLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1"
          },
          "note": {
            "ja": "0x01～設定可能照度レベル最大値 (暗～明)",
            "en": "From 0x01 to the maximum specifiable illuminance level value (dark to bright)"
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "光色レベル段数設定",
            "en": "Light color step setting"
          },
          "shortName": "lightColorLevel",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1"
          },
          "note": {
            "ja": "0x01～設定可能光色レベル最大値 (電球色～白色)",
            "en": "From 0x01 to the maximum specifiable light color value (incandescent lamp color to white)"
          }
        },
        "0xB4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "設定可能レベル最大値",
            "en": "Maximum specifiable values"
          },
          "shortName": "maximumSettableLevel",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "brightness",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-255"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0x00",
                          "descriptions": {
                            "ja": "機能を搭載していない場合",
                            "en": "When the function is not implemented"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "name": "color",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-255"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0x00",
                          "descriptions": {
                            "ja": "機能を搭載していない場合",
                            "en": "When the function is not implemented"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xB5": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "常夜灯設定可能レベル最大値",
            "en": "Maximum value of settable level for night lighting"
          },
          "shortName": "maximumSettableLevelForNightLighting",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "brightness",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-255"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0x00",
                          "descriptions": {
                            "ja": "機能を搭載していない場合",
                            "en": "When the function is not implemented"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "name": "color",
                "element": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/number_1-255"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0x00",
                          "descriptions": {
                            "ja": "機能を搭載していない場合",
                            "en": "When the function is not implemented"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "0xB6": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "点灯モード設定",
            "en": "Lighting mode setting"
          },
          "shortName": "operationMode",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "auto",
                "descriptions": {
                  "ja": "自動",
                  "en": "Automatic"
                }
              },
              {
                "edt": "0x42",
                "name": "normal",
                "descriptions": {
                  "ja": "通常灯",
                  "en": "Main Lighting"
                }
              },
              {
                "edt": "0x43",
                "name": "night",
                "descriptions": {
                  "ja": "常夜灯",
                  "en": "Night Lighting"
                }
              },
              {
                "edt": "0x45",
                "name": "color",
                "descriptions": {
                  "ja": "カラー灯",
                  "en": "Color Lighting"
                }
              }
            ]
          }
        },
        "0xB7": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "通常灯モード時照度レベル設定",
            "en": "Brightness level setting for main lighting"
          },
          "shortName": "brightnessLevelForMainLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0xB8": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "通常灯モード時照度レベル段数設定",
            "en": "Brightness level step setting for main lighting"
          },
          "shortName": "brightnessLevelStepForMainLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1"
          },
          "note": {
            "ja": "0x01～設定可能照度レベル最大値（暗～明）",
            "en": "0x01 to the maximum value of settable illuminance level (dark to bright)"
          }
        },
        "0xB9": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "常夜灯モード時照度レベル設定",
            "en": "Brightness level setting for night lighting"
          },
          "shortName": "brightnessLevelForNightLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          },
          "note": {
            "en": "0x00-0x64",
            "ja": "0x00-0x64"
          }
        },
        "0xBA": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "常夜灯モード時照度レベル段数設定",
            "en": "Brightness level step setting for night lighting"
          },
          "shortName": "brightnessLevelStepForNightLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1"
          },
          "note": {
            "ja": "0x01～設定可能照度レベル最大値 (暗～明)",
            "en": "0x01 to the maximum value of settable illuminance level (dark to bright)"
          }
        },
        "0xBB": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "通常灯モード時光色設定",
            "en": "Light color setting for main lighting"
          },
          "shortName": "brightnessLevelStepForNightLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/state_LightColor-40-44"
          }
        },
        "0xBC": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "通常灯モード時光色レベル段数設定",
            "en": "Light color level step setting for main lighting"
          },
          "shortName": "lightColorLevelForMainLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1"
          },
          "note": {
            "ja": "0x01～設定可能光色レベル最大値 (電球色～白色)",
            "en": "0x01to the maximum value of settable light color level (incandescent lamp color to white)"
          }
        },
        "0xBD": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "常夜灯モード時光色設定",
            "en": "Light color setting for night lighting"
          },
          "shortName": "lightColorLevelForNightLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/state_LightColor-40-44"
          }
        },
        "0xBE": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "常夜灯モード時光色レベル段数設定",
            "en": "Light color level step setting for night lighting"
          },
          "shortName": "lightColorLevelStepForNightLighting",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_1"
          },
          "note": {
            "ja": "0x01～設定可能光色レベル最大値 (電球色～白色)",
            "en": "0x01 to the maximum value of settable light color level (incandescent lamp color to white)"
          }
        },
        "0xBF": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自動モード時点灯モード状態",
            "en": "Lighting mode status in Auto mode"
          },
          "shortName": "autoMode",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x42",
                "name": "normal",
                "descriptions": {
                  "ja": "通常灯",
                  "en": "Main Lighting"
                }
              },
              {
                "edt": "0x43",
                "name": "night",
                "descriptions": {
                  "ja": "常夜灯",
                  "en": "Night Lighting"
                }
              },
              {
                "edt": "0x44",
                "name": "off",
                "descriptions": {
                  "ja": "消灯",
                  "en": "Off"
                }
              },
              {
                "edt": "0x45",
                "name": "color",
                "descriptions": {
                  "ja": "カラー灯",
                  "en": "Color Lighting"
                }
              }
            ]
          }
        },
        "0xC0": {
          "validRelease": {
            "from": "C",
            "to": "latest"
          },
          "propertyName": {
            "ja": "カラー灯モード時RGB 設定",
            "en": "RGB setting for color lighting"
          },
          "shortName": "rgb",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "red",
                "element": {
                  "$ref": "#/definitions/number_0-255"
                }
              },
              {
                "name": "green",
                "element": {
                  "$ref": "#/definitions/number_0-255"
                }
              },
              {
                "name": "blue",
                "element": {
                  "$ref": "#/definitions/number_0-255"
                }
              }
            ]
          }
        }
      }
    },
    "0x0291": {
      "validRelease": {
        "from": "F",
        "to": "latest"
      },
      "className": {
        "ja": "単機能照明",
        "en": "Mono functional lighting"
      },
      "shortName": "monoFunctionalLighting",
      "elProperties": {
        "0xB0": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "照度レベル設定",
            "en": "Illuminance Level Setting"
          },
          "shortMame": "brightness",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        }
      }
    },
    "0x02A1": {
      "validRelease": {
        "from": "G",
        "to": "latest"
      },
      "className": {
        "ja": "電気自動車充電器",
        "en": "EV charger"
      },
      "shortName": "evCharger",
      "elProperties": {
        "0xC5": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格充電能力",
            "en": "Rated charge capacity"
          },
          "shortName": "ratedChargeElectricPower",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "W"
          }
        },
        "0xC7": {
          "oneOf": [
            {
              "validRelease": {
                "from": "G",
                "to": "I"
              },
              "propertyName": {
                "ja": "車両接続・充電可否状態",
                "en": "Vehicle connection and chargeable status"
              },
              "shortName": "chargeStatus",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "required"
              },
              "atomic": "0xCD",
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不定",
                      "en": "Undetermined"
                    }
                  },
                  {
                    "edt": "0x30",
                    "name": "notConnected",
                    "descriptions": {
                      "ja": "車両未接続",
                      "en": "Vehicle not connected"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "notChargeable",
                    "descriptions": {
                      "ja": "車両接続・充電不可",
                      "en": "Connected to vehicle, Not chargeable"
                    }
                  },
                  {
                    "edt": "0x41",
                    "name": "chargeable",
                    "descriptions": {
                      "ja": "車両接続・充電可",
                      "en": "Connected to vehicle, Chargeable"
                    }
                  }
                ]
              },
              "note": {
                "ja": "Atomic operation with EPC=0xCD",
                "en": "Atomic operation with EPC=0xCD"
              }
            },
            {
              "validRelease": {
                "from": "J",
                "to": "latest"
              },
              "propertyName": {
                "ja": "車両接続・充電可否状態",
                "en": "Vehicle connection and chargeable status"
              },
              "shortName": "chargeStatus",
              "accessRule": {
                "get": "required",
                "set": "notApplicable",
                "inf": "required"
              },
              "atomic": "0xCD",
              "data": {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "undefined",
                    "descriptions": {
                      "ja": "不定",
                      "en": "Undetermined"
                    }
                  },
                  {
                    "edt": "0x30",
                    "name": "notConnected",
                    "descriptions": {
                      "ja": "車両未接続",
                      "en": "Vehicle not connected"
                    }
                  },
                  {
                    "edt": "0x40",
                    "name": "notChargeable",
                    "descriptions": {
                      "ja": "車両接続・充電不可",
                      "en": "Connected to vehicle, Not chargeable"
                    }
                  },
                  {
                    "edt": "0x41",
                    "name": "chargeable",
                    "descriptions": {
                      "ja": "車両接続・充電可",
                      "en": "Connected to vehicle, Chargeable"
                    }
                  },
                  {
                    "edt": "0x44",
                    "name": "unknown",
                    "descriptions": {
                      "ja": "車両接続・充電可否不明",
                      "en": "Vehicle connection and chargeable/dischargeable status unknown"
                    }
                  }
                ]
              },
              "note": {
                "ja": "Atomic operation with EPC=0xCD",
                "en": "Atomic operation with EPC=0xCD"
              }
            }
          ]
        },
        "0xC8": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大充電電力値",
            "en": "Minimum/maximum charging electric energy"
          },
          "shortName": "minimumAndMaximumChargingElectricPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint32",
                  "minimum": 0,
                  "maximum": 999999999,
                  "unit": "W"
                },
                "descriptions": {
                  "ja": "最小充電電力値",
                  "en": "Minimum charging electric energy"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint32",
                  "minimum": 0,
                  "maximum": 999999999,
                  "unit": "W"
                },
                "descriptions": {
                  "ja": "最大充電電力値",
                  "en": "Maximum charging electric energy"
                }
              }
            ]
          }
        },
        "0xCA": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "最小最大充電電流値",
            "en": "Minimum/maximum charging electric current"
          },
          "shortName": "minimumAndMaximumChargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "minValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最小充電電流値",
                  "en": "Minimum charging current"
                }
              },
              {
                "name": "maxValue",
                "element": {
                  "type": "number",
                  "format": "uint16",
                  "minimum": 0,
                  "maximum": 32766,
                  "unit": "A",
                  "multipleOf": 0.1
                },
                "descriptions": {
                  "ja": "最大充電電流値",
                  "en": "Maximum charging current"
                }
              }
            ]
          }
        },
        "0xCC": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電器タイプ",
            "en": "Charger type"
          },
          "shortName": "equipmentType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x11",
                "name": "AC_CPLT",
                "descriptions": {
                  "ja": "AC_CPLT",
                  "en": "AC_CPLT"
                }
              },
              {
                "edt": "0x12",
                "name": "AC_HLC_Charge",
                "descriptions": {
                  "ja": "AC_HLC（充電のみ）",
                  "en": "AC_HLC (charging only)"
                }
              },
              {
                "edt": "0x21",
                "name": "DC_AA_Charge",
                "descriptions": {
                  "ja": "DCタイプ_AA（充電のみ）",
                  "en": "DC_type AA (charging only)"
                }
              },
              {
                "edt": "0x31",
                "name": "DC_BB_Charge",
                "descriptions": {
                  "ja": "DCタイプ_BB（充電のみ）",
                  "en": "DC_type BB (charging only)"
                }
              },
              {
                "edt": "0x41",
                "name": "DC_EE_Charge",
                "descriptions": {
                  "ja": "DCタイプ_EE（充電のみ）",
                  "en": "DC_type EE (charging only)"
                }
              },
              {
                "edt": "0x51",
                "name": "DC_FF_Charge",
                "descriptions": {
                  "ja": "DCタイプ_FF（充電のみ）",
                  "en": "DC_type FF (charging only)"
                }
              }
            ]
          }
        },
        "0xCD": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車両接続確認",
            "en": "Vehicle Connection Confirmation"
          },
          "shortName": "connectionConfirmation",
          "accessRule": {
            "get": "notApplicable",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x10",
                "name": "connection",
                "descriptions": {
                  "ja": "接続確認",
                  "en": "Connection confirmation"
                }
              }
            ]
          }
        },
        "0xCE": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車載電池の充電可能容量値",
            "en": "Chargeable capacity of vehicle mounted battery"
          },
          "shortName": "chargeableCapacity",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xCF": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車載電池の充電可能残容量値",
            "en": "Remaining chargeable capacity of vehicle mounted battery"
          },
          "shortName": "remainingChargeableCapacity",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xD0": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車載電池の使用容量値1",
            "en": "Used capacity of vehicle mounted battery 1 "
          },
          "shortName": "usedCapacity1",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "定格電圧",
            "en": "Rated voltage"
          },
          "shortName": "ratedVoltage",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 32766,
            "unit": "V"
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "瞬時充電電力計測値",
            "en": "Measured instantaneous charging electric energy"
          },
          "shortName": "instantaneousElectricPower",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "W"
          }
        },
        "0xD8": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算充電電力量計測値",
            "en": "Measured cumulative amount of charging electric energy"
          },
          "shortName": "cumulativeChargingElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "kWh",
            "multipleOf": 0.001,
            "overflowCode": false,
            "underflowCode": false
          }
        },
        "0xD9": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "積算充電電力量リセット設定",
            "en": "Cumulative amount of charging electric energy reset setting"
          },
          "shortName": "cumulativeChargingElectricEnergyReset",
          "accessRule": {
            "get": "notApplicable",
            "set": "optional",
            "inf": "notApplicable"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x00",
                "name": "cumulativeChargingElectricEnergyReset",
                "descriptions": {
                  "ja": "リセット",
                  "en": "Reset"
                }
              }
            ]
          }
        },
        "0xDA": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転モード設定",
            "en": "Operation mode setting"
          },
          "shortName": "operationMode",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x42",
                "name": "charge",
                "descriptions": {
                  "ja": "充電",
                  "en": "Charging"
                }
              },
              {
                "edt": "0x44",
                "name": "standby",
                "descriptions": {
                  "ja": "待機",
                  "en": "Standby"
                }
              },
              {
                "edt": "0x47",
                "name": "idle",
                "descriptions": {
                  "ja": "停止",
                  "en": "Idle"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              }
            ]
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車載電池の電池残容量1",
            "en": "Remaining stored electricity of vehicle mounted battery 1"
          },
          "shortName": "remainingCapacity1",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車載電池の電池残容量3",
            "en": "Remaining stored electricity of vehicle mounted battery 3"
          },
          "shortName": "remainingCapacity3",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "車両ID",
            "en": "Vehcle ID"
          },
          "shortName": "vehicleId",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "dataSize",
                "element": {
                  "type": "number",
                  "format": "uint8",
                  "minimum": 0,
                  "maximum": 24
                },
                "descriptions": {
                  "ja": "車両ID情報データサイズ",
                  "en": "Data size for vehicle ID information"
                }
              },
              {
                "name": "ids",
                "element": {
                  "type": "array",
                  "itemSize": 1,
                  "maxItems": 24,
                  "items": {
                    "type": "number",
                    "format": "uint8",
                    "minimum": 0,
                    "maximum": 255
                  },
                  "descriptions": {
                    "ja": "車両ID情報",
                    "en": "Vehicle ID information"
                  }
                }
              }
            ]
          },
          "note": {
            "ja": "車両ID情報が取得できない場合はデータサイズに0x00を格納",
            "en": "If vehicle ID cannot be acquired, Ox00 shall be stored in data size"
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電量設定値",
            "en": "Charging amount setting"
          },
          "shortName": "targetChargingElectricEnergy",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "Wh"
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電電力設定値",
            "en": "Charging electric energy setting"
          },
          "shortName": "chargingElectricPower",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint32",
            "minimum": 0,
            "maximum": 999999999,
            "unit": "W"
          }
        },
        "0xED": {
          "validRelease": {
            "from": "G",
            "to": "latest"
          },
          "propertyName": {
            "ja": "充電電流設定値",
            "en": "Charging current setting"
          },
          "shortName": "chargingCurrent",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "A",
            "multipleOf": 0.1
          }
        }
      }
    },
    "0x02A4": {
      "validRelease": {
        "from": "J",
        "to": "latest"
      },
      "className": {
        "ja": "拡張照明システム",
        "en": "Extended lighting system"
      },
      "shortName": "enhancedLightingSystem",
      "elProperties": {
        "0xB0": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "照度レベル設定",
            "en": "Illuminance level setting"
          },
          "shortName": "brightness",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-100%"
          }
        },
        "0xC0": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "シーン制御設定",
            "en": "Scene control setting"
          },
          "shortName": "sceneId",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_1-253"
              },
              {
                "type": "state",
                "name": "notSet",
                "size": 1,
                "enum": [
                  {
                    "edt": "0x00",
                    "descriptions": {
                      "ja": "未設定",
                      "en": "Not set"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xC1": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "shortName": "maximumNumberOfSceneId",
          "propertyName": {
            "ja": "シーン制御設定可能数",
            "en": "Number that can assign scene control setting"
          },
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_1-253"
          }
        },
        "0xC2": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "shortName": "powerConsumptionRateList",
          "propertyName": {
            "ja": "電力消費率リスト",
            "en": "Power consumption rate list"
          },
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "array",
            "itemSize": 1,
            "minItems": 1,
            "maxItems": 253,
            "items": {
              "oneOf": [
                {
                  "$ref": "#/definitions/number_0-100%"
                },
                {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0xFF",
                      "name": "unknown",
                      "descriptions": {
                        "ja": "不明",
                        "en": "Unknown"
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        "0xC3": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "全灯時消費電力",
            "en": "Power consumption when fully lighted"
          },
          "shortName": "powerConsumptionAtFullLighting",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "W"
          }
        },
        "0xC4": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "節電可能消費電力",
            "en": "Possible power savings"
          },
          "shortName": "powerConsumptionWillBeSaved",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "W"
          }
        },
        "0xC5": {
          "validRelease": {
            "from": "J",
            "to": "latest"
          },
          "propertyName": {
            "ja": "消費電力制限設定",
            "en": "Power consumption limit setting"
          },
          "shortName": "powerConsumptionLimit",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/definitions/number_0-65533",
                "unit": "W"
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0x0000",
                    "name": "cancel",
                    "descriptions": {
                      "ja": "電力制限解除",
                      "en": "Canceling power consumption restriction."
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xC6": {
          "validRelease": {
            "from": "K",
            "to": "latest"
          },
          "propertyName": {
            "ja": "自動動作制御設定",
            "en": "Automatic operation controlling setting"
          },
          "shortName": "automaticOperationControlling",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "yes",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "no",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xC7": {
          "validRelease": {
            "from": "K",
            "to": "latest"
          },
          "propertyName": {
            "ja": "フェード制御変化時間設定",
            "en": "Fading control change time setting"
          },
          "shortName": "fadingControlChangeTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-3600",
            "unit": "second"
          }
        }
      }
    },
    "0x02A6": {
      "validRelease": {
        "from": "L",
        "to": "latest"
      },
      "className": {
        "ja": "ハイブリッド給湯機",
        "en": "Hybrid water heater"
      },
      "shortName": "hybridWaterHeater",
      "firstRelease": "L",
      "elProperties": {
        "0xB0": {
          "propertyName": {
            "ja": "沸き上げ自動設定",
            "en": "Automatic water heating setting"
          },
          "shortName": "automaticWaterHeating",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "auto",
                "descriptions": {
                  "ja": "自動沸き上げ",
                  "en": "Automatic water heating"
                }
              },
              {
                "edt": "0x43",
                "name": "manualNotHeating",
                "descriptions": {
                  "ja": "手動沸き上げ停止",
                  "en": "Water heating manual stop"
                }
              },
              {
                "edt": "0x42",
                "name": "manualHeating",
                "descriptions": {
                  "ja": "手動沸き上げ",
                  "en": "Manual water heating"
                }
              }
            ]
          }
        },
        "0xB2": {
          "propertyName": {
            "ja": "給湯沸き上げ中状態",
            "en": "Water heating status"
          },
          "shortName": "waterHeatingStatus",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "沸き上げ中",
                  "en": "Water is heating"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "非沸き上げ中",
                  "en": "Water is not heating"
                }
              }
            ]
          }
        },
        "0xB3": {
          "propertyName": {
            "ja": "暖房沸き上げ中状態",
            "en": "Heater status"
          },
          "shortName": "heaterStatus",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "沸き上げ中",
                  "en": "Water is heating"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "非沸き上げ中",
                  "en": "Water is not heating"
                }
              }
            ]
          }
        },
        "0xB6": {
          "propertyName": {
            "ja": "補助熱源機給湯モード設定",
            "en": "Hot water supply mode setting for auxiliary heat source machine"
          },
          "shortName": "hotWaterSupplyModeForAuxiliaryHeatSourceMachine",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "設定する",
                  "en": "Set"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "設定しない",
                  "en": "No setting"
                }
              }
            ]
          }
        },
        "0xB7": {
          "propertyName": {
            "ja": "補助熱源機暖房モード設定",
            "en": "Heater mode setting for auxiliary heat source machine"
          },
          "shortName": "heaterModeForAuxiliaryHeatSourceMachine",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "設定する",
                  "en": "Set"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "設定しない",
                  "en": "No setting"
                }
              }
            ]
          }
        },
        "0xB8": {
          "propertyName": {
            "ja": "太陽光発電連携モード設定",
            "en": "Linkage mode setting for solar power generation"
          },
          "shortName": "linkageModeForSolarPowerGenerations",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "modeOff",
                "descriptions": {
                  "ja": "モード切",
                  "en": "Mode off"
                }
              },
              {
                "edt": "0x42",
                "name": "householdConsumption",
                "descriptions": {
                  "ja": "自家消費",
                  "en": "Household consumption"
                }
              },
              {
                "edt": "0x43",
                "name": "prioritizingElectricitySales",
                "descriptions": {
                  "ja": "売電優先",
                  "en": "Prioritizing electricity sales"
                }
              },
              {
                "edt": "0x44",
                "name": "economicEfficiency",
                "descriptions": {
                  "ja": "経済",
                  "en": "Economic efficiency"
                }
              }
            ]
          }
        },
        "0xB9": {
          "propertyName": {
            "ja": "太陽光発電利用時間",
            "en": "Solar power generations utilization time"
          },
          "shortName": "solarPowerGenerationsUtilizationTime",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "startTime",
                "element": {
                  "type": "time",
                  "size": 2
                }
              },
              {
                "name": "endTime",
                "element": {
                  "type": "time",
                  "size": 2
                }
              }
            ]
          }
        },
        "0xC3": {
          "propertyName": {
            "ja": "給湯中状態",
            "en": "Hot water supply status"
          },
          "shortName": "hotWaterSupplyStatus",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "yes",
                "descriptions": {
                  "ja": "給湯中",
                  "en": "Supplying hot water"
                }
              },
              {
                "edt": "0x42",
                "name": "no",
                "descriptions": {
                  "ja": "非給湯中",
                  "en": "Not supplying hot water"
                }
              }
            ]
          }
        },
        "0xE1": {
          "propertyName": {
            "ja": "残湯量計測値",
            "en": "Measured amount of hot water remaining in tank"
          },
          "shortName": "remainingWater",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        },
        "0xE2": {
          "propertyName": {
            "ja": "タンク容量値",
            "en": "Tank capacity"
          },
          "shortName": "tankCapacity",
          "validRelease": {
            "from": "L",
            "to": "latest"
          },
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/number_0-65533",
            "unit": "L"
          }
        }
      }
    },
    "0x03B9": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "クッキングヒータ",
        "en": "Cooking heater"
      },
      "shortName": "cookingHeater",
      "elProperties": {
        "0x96": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "切タイマ相対時間設定値",
            "en": "Relative time settings of OFF timers"
          },
          "shortName": "relativeTimeOfOffTimers",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "leftStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "time",
                      "size": 3
                    },
                    {
                      "type": "state",
                      "size": 3,
                      "enum": [
                        {
                          "edt": "0xFFFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "左コンロ切タイマ時間",
                  "en": "Relative time setting of the left stove OFF timer"
                }
              },
              {
                "name": "rightStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "time",
                      "size": 3
                    },
                    {
                      "type": "state",
                      "size": 3,
                      "enum": [
                        {
                          "edt": "0xFFFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "右コンロ切タイマ時間",
                  "en": "Relative time setting of the right stove OFF timer"
                }
              },
              {
                "name": "farSideStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "time",
                      "size": 3
                    },
                    {
                      "type": "state",
                      "size": 3,
                      "enum": [
                        {
                          "edt": "0xFFFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "奥コンロ切タイマ時間",
                  "en": "Relative time setting of the far-side stove OFF timer"
                }
              },
              {
                "name": "roaster",
                "element": {
                  "oneOf": [
                    {
                      "type": "time",
                      "size": 3
                    },
                    {
                      "type": "state",
                      "size": 3,
                      "enum": [
                        {
                          "edt": "0xFFFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "ロースタ切タイマ時間",
                  "en": "Relative time setting of the roaster OFF timer"
                }
              }
            ]
          }
        },
        "0xA1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "チャイルドロック設定",
            "en": "Child lock setting"
          },
          "shortName": "childLock",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "off",
                "descriptions": {
                  "ja": "チャイルドロックOFF",
                  "en": "Child lock OFF"
                }
              },
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "チャイルドロックON",
                  "en": "Child lock ON"
                }
              }
            ]
          }
        },
        "0xA2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ラジエントヒータロック設定",
            "en": "Radiant heater lock setting"
          },
          "shortName": "radiantHeaterLock",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "off",
                "descriptions": {
                  "ja": "ラジエントヒータロックOFF",
                  "en": "Radiant heater lock OFF"
                }
              },
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "ラジエントヒータロックON",
                  "en": "Radiant heater lock ON"
                }
              }
            ]
          }
        },
        "0xB1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "加熱状態",
            "en": "Heating status"
          },
          "shortName": "heatingStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "leftStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "standingBy",
                      "descriptions": {
                        "ja": "待機中",
                        "en": "Standing by"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "operating",
                      "descriptions": {
                        "ja": "運転中",
                        "en": "Operating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopped",
                      "descriptions": {
                        "ja": "一時停止中",
                        "en": "Temporarily stopped"
                      }
                    },
                    {
                      "edt": "0x50",
                      "name": "heatingProhibited",
                      "descriptions": {
                        "ja": "加熱禁止状態",
                        "en": "Heating prohibited"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "unknown",
                      "descriptions": {
                        "ja": "不明",
                        "en": "Unknown"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "左コンロ加熱状態",
                  "en": "Heating status of the left stove"
                }
              },
              {
                "name": "rightStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "standingBy",
                      "descriptions": {
                        "ja": "待機中",
                        "en": "Standing by"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "operating",
                      "descriptions": {
                        "ja": "運転中",
                        "en": "Operating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopped",
                      "descriptions": {
                        "ja": "一時停止中",
                        "en": "Temporarily stopped"
                      }
                    },
                    {
                      "edt": "0x50",
                      "name": "heatingProhibited",
                      "descriptions": {
                        "ja": "加熱禁止状態",
                        "en": "Heating prohibited"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "unknown",
                      "descriptions": {
                        "ja": "不明",
                        "en": "Unknown"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "右コンロ加熱状態",
                  "en": "Heating status of the right stove"
                }
              },
              {
                "name": "farSideStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "standingBy",
                      "descriptions": {
                        "ja": "待機中",
                        "en": "Standing by"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "operating",
                      "descriptions": {
                        "ja": "運転中",
                        "en": "Operating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopped",
                      "descriptions": {
                        "ja": "一時停止中",
                        "en": "Temporarily stopped"
                      }
                    },
                    {
                      "edt": "0x50",
                      "name": "heatingProhibited",
                      "descriptions": {
                        "ja": "加熱禁止状態",
                        "en": "Heating prohibited"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "unknown",
                      "descriptions": {
                        "ja": "不明",
                        "en": "Unknown"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "奥コンロ加熱状態",
                  "en": "Heating status of the far-side stove"
                }
              },
              {
                "name": "roaster",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "standingBy",
                      "descriptions": {
                        "ja": "待機中",
                        "en": "Standing by"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "operating",
                      "descriptions": {
                        "ja": "運転中",
                        "en": "Operating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopped",
                      "descriptions": {
                        "ja": "一時停止中",
                        "en": "Temporarily stopped"
                      }
                    },
                    {
                      "edt": "0x50",
                      "name": "heatingProhibited",
                      "descriptions": {
                        "ja": "加熱禁止状態",
                        "en": "Heating prohibited"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "unknown",
                      "descriptions": {
                        "ja": "不明",
                        "en": "Unknown"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "ロースタ加熱状態",
                  "en": "Heating status of the roaster"
                }
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "加熱設定",
            "en": "Heating setting"
          },
          "shortName": "heatingOperation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "leftStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "stopHeating",
                      "descriptions": {
                        "ja": "加熱停止",
                        "en": "Stop heating"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "startOrResumeHeating",
                      "descriptions": {
                        "ja": "加熱開始・再開",
                        "en": "Start/resume heating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopHeating",
                      "descriptions": {
                        "ja": "加熱一時停止",
                        "en": "Temporarily stop heating"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "左コンロ設定",
                  "en": "Left stove setting"
                }
              },
              {
                "name": "rightStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "stopHeating",
                      "descriptions": {
                        "ja": "加熱停止",
                        "en": "Stop heating"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "startOrResumeHeating",
                      "descriptions": {
                        "ja": "加熱開始・再開",
                        "en": "Start/resume heating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopHeating",
                      "descriptions": {
                        "ja": "加熱一時停止",
                        "en": "Temporarily stop heating"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "右コンロ設定",
                  "en": "Right stove setting"
                }
              },
              {
                "name": "farSideStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "stopHeating",
                      "descriptions": {
                        "ja": "加熱停止",
                        "en": "Stop heating"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "startOrResumeHeating",
                      "descriptions": {
                        "ja": "加熱開始・再開",
                        "en": "Start/resume heating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopHeating",
                      "descriptions": {
                        "ja": "加熱一時停止",
                        "en": "Temporarily stop heating"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "奥コンロ設定",
                  "en": "Far-side stove setting"
                }
              },
              {
                "name": "roaster",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x40",
                      "name": "stopHeating",
                      "descriptions": {
                        "ja": "加熱停止",
                        "en": "Stop heating"
                      }
                    },
                    {
                      "edt": "0x41",
                      "name": "startOrResumeHeating",
                      "descriptions": {
                        "ja": "加熱開始・再開",
                        "en": "Start/resume heating"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "temporarilyStopHeating",
                      "descriptions": {
                        "ja": "加熱一時停止",
                        "en": "Temporarily stop heating"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "ロースタ設定",
                  "en": "Roaster setting"
                }
              }
            ]
          }
        },
        "0xB3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "一括停止設定",
            "en": "\"All stop\" setting"
          },
          "shortName": "",
          "accessRule": {
            "get": "notApplicable",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "allStop",
                "descriptions": {
                  "ja": "一括加熱停止",
                  "en": "Stop the heating on all of the left stove, right stove, far-side stove and roaster"
                }
              }
            ]
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "コンロ加熱モード設定",
            "en": "\"Heating modes of stoves\" setting"
          },
          "shortName": "heatingModesOfStoves",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "leftStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x41",
                      "name": "heatingPowerControl",
                      "descriptions": {
                        "ja": "加熱出力制御モード",
                        "en": "Heating power control mode"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "deepFryingMode",
                      "descriptions": {
                        "ja": "天ぷら（揚げ物）",
                        "en": "Deep-frying mode (tempura, etc.)"
                      }
                    },
                    {
                      "edt": "0x43",
                      "name": "waterHeating",
                      "descriptions": {
                        "ja": "湯沸し",
                        "en": "Water heating mode"
                      }
                    },
                    {
                      "edt": "0x44",
                      "name": "riceBoiling",
                      "descriptions": {
                        "ja": "炊飯",
                        "en": "Rice boiling mode"
                      }
                    },
                    {
                      "edt": "0x45",
                      "name": "stirFrying",
                      "descriptions": {
                        "ja": "炒め物",
                        "en": "Stir-frying mode"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "左コンロ加熱モード",
                  "en": "Heating mode of the left stove"
                }
              },
              {
                "name": "rightStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x41",
                      "name": "heatingPowerControl",
                      "descriptions": {
                        "ja": "加熱出力制御モード",
                        "en": "Heating power control mode"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "deepFryingMode",
                      "descriptions": {
                        "ja": "天ぷら（揚げ物）",
                        "en": "Deep-frying mode (tempura, etc.)"
                      }
                    },
                    {
                      "edt": "0x43",
                      "name": "waterHeating",
                      "descriptions": {
                        "ja": "湯沸し",
                        "en": "Water heating mode"
                      }
                    },
                    {
                      "edt": "0x44",
                      "name": "riceBoiling",
                      "descriptions": {
                        "ja": "炊飯",
                        "en": "Rice boiling mode"
                      }
                    },
                    {
                      "edt": "0x45",
                      "name": "stirFrying",
                      "descriptions": {
                        "ja": "炒め物",
                        "en": "Stir-frying mode"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "右コンロ加熱モード",
                  "en": "Heating mode of the right stove"
                }
              },
              {
                "name": "farSideStove",
                "element": {
                  "type": "state",
                  "size": 1,
                  "enum": [
                    {
                      "edt": "0x41",
                      "name": "heatingPowerControl",
                      "descriptions": {
                        "ja": "加熱出力制御モード",
                        "en": "Heating power control mode"
                      }
                    },
                    {
                      "edt": "0x42",
                      "name": "deepFryingMode",
                      "descriptions": {
                        "ja": "天ぷら（揚げ物）",
                        "en": "Deep-frying mode (tempura, etc.)"
                      }
                    },
                    {
                      "edt": "0x43",
                      "name": "waterHeating",
                      "descriptions": {
                        "ja": "湯沸し",
                        "en": "Water heating mode"
                      }
                    },
                    {
                      "edt": "0x44",
                      "name": "riceBoiling",
                      "descriptions": {
                        "ja": "炊飯",
                        "en": "Rice boiling mode"
                      }
                    },
                    {
                      "edt": "0x45",
                      "name": "stirFrying",
                      "descriptions": {
                        "ja": "炒め物",
                        "en": "Stir-frying mode"
                      }
                    },
                    {
                      "edt": "0xFF",
                      "name": "noSetting",
                      "descriptions": {
                        "ja": "設定なし",
                        "en": "No setting"
                      }
                    }
                  ]
                },
                "descriptions": {
                  "ja": "奥コンロ加熱モード",
                  "en": "Heating mode of the far-side stove"
                }
              }
            ]
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "加熱温度設定値",
            "en": "Heating temperature setting"
          },
          "shortName": "heatingTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "leftStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint8",
                      "minimum": 50,
                      "maximum": 250,
                      "unit": "Celsius"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "左コンロ設定温度",
                  "en": "Left stove temperature setting"
                }
              },
              {
                "name": "rightStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint8",
                      "minimum": 50,
                      "maximum": 250,
                      "unit": "Celsius"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "右コンロ設定温度",
                  "en": "Right stove temperature setting"
                }
              },
              {
                "name": "farSideStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint8",
                      "minimum": 50,
                      "maximum": 250,
                      "unit": "Celsius"
                    },
                    {
                      "type": "state",
                      "size": 1,
                      "enum": [
                        {
                          "edt": "0xFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "設定なし",
                            "en": "No setting"
                          }
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "奥コンロ設定温度",
                  "en": "Far-side stove temperature setting"
                }
              }
            ]
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "加熱出力設定",
            "en": "Heating power setting"
          },
          "shortName": "heatingPower",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "object",
            "properties": [
              {
                "name": "leftStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 10000,
                      "unit": "W"
                    },
                    {
                      "type": "level",
                      "base": "0x3000",
                      "maximum": 17
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x4002",
                          "name": "veryLowFlame",
                          "descriptions": {
                            "ja": "とろ火",
                            "en": "Very low flame"
                          }
                        },
                        {
                          "edt": "0x4004",
                          "name": "lowFlame",
                          "descriptions": {
                            "ja": "弱火",
                            "en": "Low flame"
                          }
                        },
                        {
                          "edt": "0x4006",
                          "name": "mediumFlame",
                          "descriptions": {
                            "ja": "中火",
                            "en": "Medium flame"
                          }
                        },
                        {
                          "edt": "0x4008",
                          "name": "highFlame",
                          "descriptions": {
                            "ja": "強火",
                            "en": "High flame"
                          }
                        },
                        {
                          "edt": "0x400A",
                          "name": "highPower",
                          "descriptions": {
                            "ja": "ハイパワー",
                            "en": "High power"
                          }
                        },
                        {
                          "edt": "0xFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "未設定",
                            "en": "No setting"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "左コンロ加熱出力",
                  "en": "Heating power of the left stove"
                }
              },
              {
                "name": "rightStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 10000,
                      "unit": "W"
                    },
                    {
                      "type": "level",
                      "base": "0x3000",
                      "maximum": 17
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x4002",
                          "name": "veryLowFlame",
                          "descriptions": {
                            "ja": "とろ火",
                            "en": "Very low flame"
                          }
                        },
                        {
                          "edt": "0x4004",
                          "name": "lowFlame",
                          "descriptions": {
                            "ja": "弱火",
                            "en": "Low flame"
                          }
                        },
                        {
                          "edt": "0x4006",
                          "name": "mediumFlame",
                          "descriptions": {
                            "ja": "中火",
                            "en": "Medium flame"
                          }
                        },
                        {
                          "edt": "0x4008",
                          "name": "highFlame",
                          "descriptions": {
                            "ja": "強火",
                            "en": "High flame"
                          }
                        },
                        {
                          "edt": "0x400A",
                          "name": "highPower",
                          "descriptions": {
                            "ja": "ハイパワー",
                            "en": "High power"
                          }
                        },
                        {
                          "edt": "0xFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "未設定",
                            "en": "No setting"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "右コンロ加熱出力",
                  "en": "Heating power of the right stove"
                }
              },
              {
                "name": "farSideStove",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 10000,
                      "unit": "W"
                    },
                    {
                      "type": "level",
                      "base": "0x3000",
                      "maximum": 17
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x4002",
                          "name": "veryLowFlame",
                          "descriptions": {
                            "ja": "とろ火",
                            "en": "Very low flame"
                          }
                        },
                        {
                          "edt": "0x4004",
                          "name": "lowFlame",
                          "descriptions": {
                            "ja": "弱火",
                            "en": "Low flame"
                          }
                        },
                        {
                          "edt": "0x4006",
                          "name": "mediumFlame",
                          "descriptions": {
                            "ja": "中火",
                            "en": "Medium flame"
                          }
                        },
                        {
                          "edt": "0x4008",
                          "name": "highFlame",
                          "descriptions": {
                            "ja": "強火",
                            "en": "High flame"
                          }
                        },
                        {
                          "edt": "0x400A",
                          "name": "highPower",
                          "descriptions": {
                            "ja": "ハイパワー",
                            "en": "High power"
                          }
                        },
                        {
                          "edt": "0xFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "未設定",
                            "en": "No setting"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "奥コンロ加熱出力",
                  "en": "Heating power of the far-side stove"
                }
              },
              {
                "name": "roaster",
                "element": {
                  "oneOf": [
                    {
                      "type": "number",
                      "format": "uint16",
                      "minimum": 0,
                      "maximum": 10000,
                      "unit": "W"
                    },
                    {
                      "type": "level",
                      "base": "0x3000",
                      "maximum": 17
                    },
                    {
                      "type": "state",
                      "size": 2,
                      "enum": [
                        {
                          "edt": "0x4002",
                          "name": "veryLowFlame",
                          "descriptions": {
                            "ja": "とろ火",
                            "en": "Very low flame"
                          }
                        },
                        {
                          "edt": "0x4004",
                          "name": "lowFlame",
                          "descriptions": {
                            "ja": "弱火",
                            "en": "Low flame"
                          }
                        },
                        {
                          "edt": "0x4006",
                          "name": "mediumFlame",
                          "descriptions": {
                            "ja": "中火",
                            "en": "Medium flame"
                          }
                        },
                        {
                          "edt": "0x4008",
                          "name": "highFlame",
                          "descriptions": {
                            "ja": "強火",
                            "en": "High flame"
                          }
                        },
                        {
                          "edt": "0x400A",
                          "name": "highPower",
                          "descriptions": {
                            "ja": "ハイパワー",
                            "en": "High power"
                          }
                        },
                        {
                          "edt": "0xFFFF",
                          "name": "noSetting",
                          "descriptions": {
                            "ja": "未設定",
                            "en": "No setting"
                          },
                          "readOnly": true
                        }
                      ]
                    }
                  ]
                },
                "descriptions": {
                  "ja": "ロースタ加熱出力",
                  "en": "Heating power of the roaster"
                }
              }
            ]
          }
        }
      }
    },
    "0x03BB": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "炊飯器",
        "en": "Rice cooker"
      },
      "shortName": "riceCooker",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "炊飯予約設定",
            "en": "Rice cooking reservation setting"
          },
          "shortName": "reservation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "予約有",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "予約無",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "炊飯予約設定時刻設定値",
            "en": "Set value of rice cooking reservation setting time"
          },
          "shortName": "reservationTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x92": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "炊飯予約設定相対時間設定値",
            "en": "Set value of rice cooking reservation setting relative time"
          },
          "shortName": "reservationRelativeTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "蓋開閉状態",
            "en": "Cover open/close status"
          },
          "shortName": "coverStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "蓋開",
                  "en": "Cover open"
                }
              },
              {
                "edt": "0x42",
                "name": "close",
                "descriptions": {
                  "ja": "蓋閉",
                  "en": "Cover closed"
                }
              }
            ]
          }
        },
        "0xB1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "炊飯状態",
            "en": "Rice cooking status"
          },
          "shortName": "cookingStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "stop",
                "descriptions": {
                  "ja": "停止",
                  "en": "Stop"
                }
              },
              {
                "edt": "0x42",
                "name": "preheating",
                "descriptions": {
                  "ja": "予熱",
                  "en": "Preheating"
                }
              },
              {
                "edt": "0x43",
                "name": "cooking",
                "descriptions": {
                  "ja": "炊飯",
                  "en": "Rice cooking"
                }
              },
              {
                "edt": "0x44",
                "name": "steaming",
                "descriptions": {
                  "ja": "蒸らし",
                  "en": "Steaming"
                }
              },
              {
                "edt": "0x45",
                "name": "completion",
                "descriptions": {
                  "ja": "炊飯完了",
                  "en": "Rice cooking completion"
                }
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "炊飯制御設定",
            "en": "Rice cooking control setting"
          },
          "shortName": "cookingControl",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "running",
                "descriptions": {
                  "ja": "炊飯開始・炊飯再開",
                  "en": "Rice cooking start/restart"
                }
              },
              {
                "edt": "0x42",
                "name": "suspension",
                "descriptions": {
                  "ja": "炊飯一時停止",
                  "en": "Rice cooking suspension"
                }
              }
            ]
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "保温設定",
            "en": "Warmer setting"
          },
          "shortName": "warmerOperation",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "enabled",
                "descriptions": {
                  "ja": "保温有",
                  "en": "Warmer enabled"
                }
              },
              {
                "edt": "0x42",
                "name": "disabled",
                "descriptions": {
                  "ja": "保温無",
                  "en": "Warmer disabled"
                }
              }
            ]
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "内なべ取り外し状態",
            "en": "Inner pot removal status"
          },
          "shortName": "innerPotRemoved",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "removed",
                "descriptions": {
                  "ja": "取り外し有",
                  "en": "Removed"
                }
              },
              {
                "edt": "0x42",
                "name": "notRemoved",
                "descriptions": {
                  "ja": "取り外し無",
                  "en": "Not removed"
                }
              }
            ]
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "蓋取り外し状態",
            "en": "Cover removal status"
          },
          "shortName": "coverRemoved",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "removed",
                "descriptions": {
                  "ja": "取り外し有",
                  "en": "Removed"
                }
              },
              {
                "edt": "0x42",
                "name": "notRemoved",
                "descriptions": {
                  "ja": "取り外し無",
                  "en": "Not removed"
                }
              }
            ]
          }
        }
      }
    },
    "0x03CE": {
      "validRelease": {
        "from": "F",
        "to": "latest"
      },
      "className": {
        "ja": "業務用ショーケース",
        "en": "Commercial show case"
      },
      "shortName": "commercialShowcase",
      "elProperties": {
        "0xB0": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転モード設定",
            "en": "Operation mode setting"
          },
          "shortName": "operationMode",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "cooling",
                "descriptions": {
                  "ja": "冷却",
                  "en": "Cooling"
                }
              },
              {
                "edt": "0x42",
                "name": "non-cooling",
                "descriptions": {
                  "ja": "非冷",
                  "en": "Non-cooling"
                }
              },
              {
                "edt": "0x43",
                "name": "defrosting",
                "descriptions": {
                  "ja": "霜取り",
                  "en": "Defrosting"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Others"
                }
              }
            ]
          }
        },
        "0xBD": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "吐出温度計測値",
            "en": "Measured value of discharge temperature"
          },
          "shortName": "dischargeTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 125
          }
        },
        "0xCA": {
          "oneOf": [
            {
              "validRelease": {
                "from": "F",
                "to": "H"
              },
              "propertyName": {
                "ja": "グループ情報",
                "en": "Group information"
              },
              "shortName": "groupInformation",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "raw",
                "minSize": 1,
                "maxSize": 1
              }
            },
            {
              "validRelease": {
                "from": "I",
                "to": "latest"
              },
              "propertyName": {
                "ja": "グループ情報",
                "en": "Group information"
              },
              "shortName": "groupInformation",
              "accessRule": {
                "get": "required",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "number",
                    "format": "uint8",
                    "minimum": 1,
                    "maximum": 253
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x00",
                        "name": "none",
                        "descriptions": {
                          "ja": "設定なし",
                          "en": "No setting"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "0xD0": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ショーケースタイプ情報",
            "en": "Showcase type information"
          },
          "shortName": "showcaseType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "nonFluorocarbonInverter",
                "descriptions": {
                  "ja": "ノンフロンインバータ（CO2）",
                  "en": "Non-fluorocarbon inverter (CO2)"
                }
              },
              {
                "edt": "0x42",
                "name": "inverter",
                "descriptions": {
                  "ja": "インバータ",
                  "en": "Inverter"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              }
            ]
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ドアタイプ情報",
            "en": "Door type information"
          },
          "shortName": "doorType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "オープン",
                  "en": "Open"
                }
              },
              {
                "edt": "0x42",
                "name": "closed",
                "descriptions": {
                  "ja": "クローズ",
                  "en": "Closed"
                }
              }
            ]
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ショーケース構成情報",
            "en": "Showcase configuration information"
          },
          "shortName": "refrigeratorType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "separate",
                "descriptions": {
                  "ja": "別置型",
                  "en": "Separate type"
                }
              },
              {
                "edt": "0x42",
                "name": "built-in",
                "descriptions": {
                  "ja": "内蔵型",
                  "en": "Built-in type"
                }
              }
            ]
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ショーケース形状情報",
            "en": "Showcase shape information"
          },
          "shortName": "shapeType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "box",
                "descriptions": {
                  "ja": "箱型",
                  "en": "Box type"
                }
              },
              {
                "edt": "0x42",
                "name": "desktop",
                "descriptions": {
                  "ja": "卓上型",
                  "en": "Desktop type"
                }
              },
              {
                "edt": "0x43",
                "name": "tripleGlass",
                "descriptions": {
                  "ja": "三面ガラス式",
                  "en": "Triple glass type"
                }
              },
              {
                "edt": "0x44",
                "name": "quadrupleQuintupleGlass",
                "descriptions": {
                  "ja": "四面ガラス式",
                  "en": "Quadruple (quintuple) glass type"
                }
              },
              {
                "edt": "0x45",
                "name": "reach-in",
                "descriptions": {
                  "ja": "リーチイン",
                  "en": "Reach-in"
                }
              },
              {
                "edt": "0x46",
                "name": "glassTop",
                "descriptions": {
                  "ja": "ガラストップ",
                  "en": "Glass top type"
                }
              },
              {
                "edt": "0x47",
                "name": "multistageOpenAndCeilingBlowoff",
                "descriptions": {
                  "ja": "多段型オープン（天井吹出形）",
                  "en": "Multistage open (ceiling blowoff type)"
                }
              },
              {
                "edt": "0x48",
                "name": "multistageOpenAndBacksideBlowoff",
                "descriptions": {
                  "ja": "多段型オープン（背面吹出形）",
                  "en": "Multistage open (backside blowoff type)"
                }
              },
              {
                "edt": "0x49",
                "name": "flat",
                "descriptions": {
                  "ja": "平型",
                  "en": "Flat type"
                }
              },
              {
                "edt": "0x4A",
                "name": "walk-in",
                "descriptions": {
                  "ja": "ウォークイン",
                  "en": "Walk-in type"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              }
            ]
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫内温度帯情報",
            "en": "Temperature range information for inside the case"
          },
          "shortName": "purposeType",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "refrigeration",
                "descriptions": {
                  "ja": "冷蔵",
                  "en": "Refrigeration"
                }
              },
              {
                "edt": "0x42",
                "name": "freezing",
                "descriptions": {
                  "ja": "冷凍",
                  "en": "Freezing"
                }
              }
            ]
          }
        },
        "0xE0": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫内照明動作状態",
            "en": "Internal lighting operation status"
          },
          "shortName": "internalLightingOperationStatus",
          "accessRule": {
            "get": "required",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "on",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "off",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫外照明動作状態",
            "en": "External lighting operation status"
          },
          "shortName": "externalLightingOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "on",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "off",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "コンプレッサ動作状態",
            "en": "Compressor operation status"
          },
          "shortName": "compressorOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "on",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "off",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫内温度計測値",
            "en": "Measured value of internal temperature"
          },
          "shortName": "internalTemperature",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 125
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "冷凍能力値",
            "en": "Freezing capability value"
          },
          "shortName": "ratedElectricPowerForFreezing",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "W"
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "霜取りヒータ消費電力",
            "en": "Defrosting heater power consumption"
          },
          "shortName": "ratedElectricPowerForDefrostingHeater",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "W"
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ファンモータ消費電力",
            "en": "Fan motor power consumption"
          },
          "shortName": "ratedElectricPowerForFanMotor",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint16",
            "minimum": 0,
            "maximum": 65533,
            "unit": "W"
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ヒーターモード",
            "en": "Heater mode"
          },
          "shortName": "heaterOperationStatus",
          "accessRule": {
            "get": "required",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "on",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "off",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫内照明タイプ",
            "en": "Type of lighting inside the showcase"
          },
          "shortName": "insideLightingType",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "fluorescent",
                "descriptions": {
                  "ja": "蛍光灯",
                  "en": "Fluorescent lights"
                }
              },
              {
                "edt": "0x42",
                "name": "LED",
                "descriptions": {
                  "ja": "LED",
                  "en": "LED"
                }
              },
              {
                "edt": "0x43",
                "name": "no-lighting",
                "descriptions": {
                  "ja": "照明無し",
                  "en": "No lighting"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              }
            ]
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫外照明タイプ",
            "en": "Type of lighting outside the case"
          },
          "shortName": "outsideLightingType",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "fluorescent",
                "descriptions": {
                  "ja": "蛍光灯",
                  "en": "Fluorescent light"
                }
              },
              {
                "edt": "0x42",
                "name": "LED",
                "descriptions": {
                  "ja": "LED",
                  "en": "LED"
                }
              },
              {
                "edt": "0x43",
                "name": "no-lighting",
                "descriptions": {
                  "ja": "照明無し",
                  "en": "No lighting"
                }
              },
              {
                "edt": "0x40",
                "name": "other",
                "descriptions": {
                  "ja": "その他",
                  "en": "Other"
                }
              }
            ]
          }
        },
        "0xED": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫内照明照度レベル設定",
            "en": "Illuminance level setting of lighting inside the showcase"
          },
          "shortName": "targetInsideBrightness",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xEE": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫外照明照度レベル設定",
            "en": "Illuminance level setting of lighting outside the case"
          },
          "shortName": "庫外照明照度レベル設定",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "uint8",
            "unit": "%",
            "minimum": 0,
            "maximum": 100
          }
        },
        "0xEF": {
          "validRelease": {
            "from": "I",
            "to": "latest"
          },
          "propertyName": {
            "ja": "庫内温度設定値",
            "en": "Temperature setting of inside the case"
          },
          "shortName": "targetInsideTemperature",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        }
      }
    },
    "0x03D3": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "洗濯乾燥機",
        "en": "Washer and dryer"
      },
      "shortName": "washerDryer",
      "elProperties": {
        "0x90": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ予約設定",
            "en": "ON timer setting"
          },
          "shortName": "onTimerReservationStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "on",
                "descriptions": {
                  "ja": "予約入",
                  "en": "Reservation ON"
                }
              },
              {
                "edt": "0x42",
                "name": "off",
                "descriptions": {
                  "ja": "予約切",
                  "en": "Reservation OFF"
                }
              }
            ]
          }
        },
        "0x91": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ時刻設定値",
            "en": "ON timer setting (time)"
          },
          "shortName": "onTimerAbsolute",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0x92": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ相対時間設定値",
            "en": "ON timer setting (relative time)"
          },
          "shortName": "onTimerRelative",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "扉・蓋開閉状態",
            "en": "Door/cover open/close status"
          },
          "shortName": "doorOpenStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "open",
                "descriptions": {
                  "ja": "扉・蓋開",
                  "en": "Door/cover open"
                }
              },
              {
                "edt": "0x42",
                "name": "closed",
                "descriptions": {
                  "ja": "扉・蓋閉",
                  "en": "Door/cover closed"
                }
              }
            ]
          }
        },
        "0xB2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯・乾燥設定",
            "en": "Washer and dryer setting"
          },
          "shortName": "runningStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "run",
                "descriptions": {
                  "ja": "洗濯乾燥開始・再開／洗濯乾燥運転中",
                  "en": "Start/resume or operation ongoing"
                }
              },
              {
                "edt": "0x42",
                "name": "pause",
                "descriptions": {
                  "ja": "洗濯乾燥一時停止",
                  "en": "Suspend(ed)"
                }
              },
              {
                "edt": "0x43",
                "name": "stop",
                "descriptions": {
                  "ja": "洗濯乾燥停止",
                  "en": "Stop(ped)"
                }
              }
            ]
          }
        },
        "0xD0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯乾燥コース設定1",
            "en": "Washer and dryer cycle setting 1"
          },
          "shortName": "washerDryerCycle1",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x21",
                "name": "washDryStandard",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞標準",
                  "en": "<Washing and drying course> Standard"
                }
              },
              {
                "edt": "0x22",
                "name": "washDrySilent",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞静音",
                  "en": "<Washing and drying course> Silent"
                }
              },
              {
                "edt": "0x23",
                "name": "washDryHeavilySoiled",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞汚れ大",
                  "en": "<Washing and drying course> Heavily soiled clothes"
                }
              },
              {
                "edt": "0x24",
                "name": "washDryHardToRemove",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞しつこい汚れ",
                  "en": "<Washing and drying course> Hard-to-remove stains"
                }
              },
              {
                "edt": "0x25",
                "name": "washDryPresoaking",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞つけおき",
                  "en": "<Washing and drying course> Presoaking"
                }
              },
              {
                "edt": "0x26",
                "name": "washDryBlankets",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞毛布",
                  "en": "<Washing and drying course> Blankets"
                }
              },
              {
                "edt": "0x27",
                "name": "washDrySoft",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞ソフト",
                  "en": "<Washing and drying course> Soft"
                }
              },
              {
                "edt": "0x28",
                "name": "washDryDrymark",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞ドライ",
                  "en": "<Washing and drying course> Dry"
                }
              },
              {
                "edt": "0x29",
                "name": "washDryCleanRinsing",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞清潔すすぎ",
                  "en": "<Washing and drying course> Clean rinsing"
                }
              },
              {
                "edt": "0x2A",
                "name": "washDryIroning",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞アイロン／Yシャツ",
                  "en": "<Washing and drying course> Ironing/business shirts"
                }
              },
              {
                "edt": "0x2B",
                "name": "washDryHangDrying",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞吊り干し",
                  "en": "<Washing and drying course> Hang drying"
                }
              },
              {
                "edt": "0x2C",
                "name": "washDryThick",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞厚物",
                  "en": "<Washing and drying course> Thick clothes"
                }
              },
              {
                "edt": "0x2D",
                "name": "washDryDisinfection",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞除菌",
                  "en": "<Washing and drying course> Disinfection"
                }
              },
              {
                "edt": "0x2E",
                "name": "washDryOilStrains",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞油汚れ",
                  "en": "<Washing and drying course> Oil stains"
                }
              },
              {
                "edt": "0x2F",
                "name": "washDryMemory",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞メモリー",
                  "en": "<Washing and drying course> Memory"
                }
              },
              {
                "edt": "0x30",
                "name": "washDryDetergentSaving",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞省洗剤",
                  "en": "<Washing and drying course> Detergent saving"
                }
              },
              {
                "edt": "0x31",
                "name": "washDryLightlySoiled",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞汚れ小",
                  "en": "<Washing and drying course> Lightly soiled clothes"
                }
              },
              {
                "edt": "0x32",
                "name": "washDrySmallAmountQuick",
                "descriptions": {
                  "ja": "＜洗濯乾燥コース＞少量短時間",
                  "en": "<Washing and drying course> Quick wash of small amount of laundry"
                }
              },
              {
                "edt": "0x61",
                "name": "washStandard",
                "descriptions": {
                  "ja": "＜洗濯コース＞標準",
                  "en": "<Washing course> Standard"
                }
              },
              {
                "edt": "0x62",
                "name": "washSilent",
                "descriptions": {
                  "ja": "＜洗濯コース＞静音",
                  "en": "<Washing course> Silent"
                }
              },
              {
                "edt": "0x63",
                "name": "washHeavilySoiled",
                "descriptions": {
                  "ja": "＜洗濯コース＞汚れ大",
                  "en": "<Washing course> Heavily soiled clothes"
                }
              },
              {
                "edt": "0x64",
                "name": "washHardToRemove",
                "descriptions": {
                  "ja": "＜洗濯コース＞しつこい汚れ",
                  "en": "<Washing course> Hard-to-remove stains"
                }
              },
              {
                "edt": "0x65",
                "name": "washPresoaking",
                "descriptions": {
                  "ja": "＜洗濯コース＞つけおき",
                  "en": "<Washing course> Presoaking"
                }
              },
              {
                "edt": "0x66",
                "name": "washBlankets",
                "descriptions": {
                  "ja": "＜洗濯コース＞毛布",
                  "en": "<Washing course> Blankets"
                }
              },
              {
                "edt": "0x67",
                "name": "washSoft",
                "descriptions": {
                  "ja": "＜洗濯コース＞ソフト",
                  "en": "<Washing course> Soft"
                }
              },
              {
                "edt": "0x68",
                "name": "washDrymark",
                "descriptions": {
                  "ja": "＜洗濯コース＞ドライ",
                  "en": "<Washing course> Dry"
                }
              },
              {
                "edt": "0x69",
                "name": "washCleanRinsing",
                "descriptions": {
                  "ja": "＜洗濯コース＞清潔すすぎ",
                  "en": "<Washing course> Clean rinsing"
                }
              },
              {
                "edt": "0x6A",
                "name": "washDisinfection",
                "descriptions": {
                  "ja": "＜洗濯コース＞除菌",
                  "en": "<Washing course> Disinfection"
                }
              },
              {
                "edt": "0x6B",
                "name": "washOilStrains",
                "descriptions": {
                  "ja": "＜洗濯コース＞油汚れ",
                  "en": "<Washing course> Oil stains"
                }
              },
              {
                "edt": "0x6C",
                "name": "washMemory",
                "descriptions": {
                  "ja": "＜洗濯コース＞メモリー",
                  "en": "<Washing course> Memory"
                }
              },
              {
                "edt": "0x6D",
                "name": "washDetergentSaving",
                "descriptions": {
                  "ja": "＜洗濯コース＞省洗剤",
                  "en": "<Washing course> Detergent saving"
                }
              },
              {
                "edt": "0x6E",
                "name": "washLightlySoiled",
                "descriptions": {
                  "ja": "＜洗濯コース＞汚れ小",
                  "en": "<Washing course> Lightly soiled clothes"
                }
              },
              {
                "edt": "0x6F",
                "name": "washSmallAmountQuick",
                "descriptions": {
                  "ja": "＜洗濯コース＞少量短時間",
                  "en": "<Washing course> Quick wash of small amount of laundry"
                }
              },
              {
                "edt": "0x7F",
                "name": "washTankCleaning",
                "descriptions": {
                  "ja": "＜洗濯コース＞槽洗浄",
                  "en": "<Washing course> Tank cleaning"
                }
              },
              {
                "edt": "0xA1",
                "name": "dryStandard",
                "descriptions": {
                  "ja": "＜乾燥コース＞標準",
                  "en": "<Drying course> Standard"
                }
              },
              {
                "edt": "0xA2",
                "name": "dryBlankets",
                "descriptions": {
                  "ja": "＜乾燥コース＞毛布",
                  "en": "<Drying course> Blankets"
                }
              },
              {
                "edt": "0xA3",
                "name": "drySoft",
                "descriptions": {
                  "ja": "＜乾燥コース＞ソフト",
                  "en": "<Drying course> Soft"
                }
              },
              {
                "edt": "0xA4",
                "name": "dryDrymark",
                "descriptions": {
                  "ja": "＜乾燥コース＞ドライ",
                  "en": "<Drying course> Dry"
                }
              },
              {
                "edt": "0xA5",
                "name": "dryIroning",
                "descriptions": {
                  "ja": "＜乾燥コース＞アイロン／Yシャツ",
                  "en": "<Drying course> Ironing/business shirts"
                }
              },
              {
                "edt": "0xA6",
                "name": "dryHangDrying",
                "descriptions": {
                  "ja": "＜乾燥コース＞吊り干し",
                  "en": "<Drying course> Hang drying"
                }
              },
              {
                "edt": "0xA7",
                "name": "dryThick",
                "descriptions": {
                  "ja": "＜乾燥コース＞厚物",
                  "en": "<Drying course> Thick clothes"
                }
              },
              {
                "edt": "0xA8",
                "name": "dryDisinfection",
                "descriptions": {
                  "ja": "＜乾燥コース＞除菌",
                  "en": "<Drying course> Disinfection"
                }
              },
              {
                "edt": "0xA9",
                "name": "dryShrinkageMinimization",
                "descriptions": {
                  "ja": "＜乾燥コース＞縮み低減",
                  "en": "<Drying course> Shrinkage minimization"
                }
              },
              {
                "edt": "0xAA",
                "name": "dryFinishing",
                "descriptions": {
                  "ja": "＜乾燥コース＞仕上げ",
                  "en": "<Drying course> Finishing"
                }
              },
              {
                "edt": "0xAB",
                "name": "dryStationaryDrying",
                "descriptions": {
                  "ja": "＜乾燥コース＞静止乾燥",
                  "en": "<Drying course> Stationary drying"
                }
              },
              {
                "edt": "0xAC",
                "name": "dryUserDefinedTime",
                "descriptions": {
                  "ja": "＜乾燥コース＞時間指定",
                  "en": "<Drying course> User definition of drying time"
                }
              },
              {
                "edt": "0xAD",
                "name": "dryWarming",
                "descriptions": {
                  "ja": "＜乾燥コース＞衣類あたため",
                  "en": "<Drying course> Garment warming"
                }
              },
              {
                "edt": "0xBF",
                "name": "dryTankDrying",
                "descriptions": {
                  "ja": "＜乾燥コース＞槽洗浄",
                  "en": "<Drying course> Tank cleaning"
                }
              }
            ]
          },
          "note": {
            "ja": "洗濯・乾燥のコース設定は洗濯乾燥コース設定１プロパティ（EPC＝0xD0）によって行うか、あるいは洗濯乾燥コース設定2 プロパティ（EPC＝0xD1）と乾燥コース設定プロパティ（EPC＝0xD2）の組み合わせによって行う。機器には、どちらか一方のみを実装することとし、もう一方は実装してはならない。0x40 ~ 0x4F : 洗濯乾燥コース／メーカオリジナルコース, 0x80 ~ 0x8F : 洗濯コース／メーカオリジナルコース, 0xC0 ~ 0xCF : 乾燥コース／メーカオリジナルコース",
            "en": "The washer and dryer cycle shall be specified either by the \"washer and dryer cycle setting 1\" property (EPC = 0xD0) or by the \"washer and dryer cycle setting 2\" property (EPC = 0xD1) combined with the \"drying cycle setting\" property (EPC = 0xD2). Either the \"washer and dryer cycle setting 1\" property or the \"washer and dryer cycle setting 2\" and \"drying cycle setting\" properties shall be implemented in the actual piece of equipment (the alternative shall not be implemented). 0x40-0x4F : Washing and drying course / maker original course, 0x80-0x8F : Washing course /  maker original course, 0xC0-0xCF : Drying course / maker original course"
          }
        },
        "0xD1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯乾燥コース設定2",
            "en": "Washer and dryer cycle setting 2"
          },
          "shortName": "washerDryerCycle2",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x20",
                "name": "washDryNoWash",
                "descriptions": {
                  "ja": "洗濯なし",
                  "en": "No washing"
                }
              },
              {
                "edt": "0x21",
                "name": "washDryStandard",
                "descriptions": {
                  "ja": "標準",
                  "en": "Standard"
                }
              },
              {
                "edt": "0x22",
                "name": "washDrySilent",
                "descriptions": {
                  "ja": "静音",
                  "en": "Silent"
                }
              },
              {
                "edt": "0x23",
                "name": "washDryHeavilySoiled",
                "descriptions": {
                  "ja": "汚れ大",
                  "en": "Heavily soiled clothes"
                }
              },
              {
                "edt": "0x24",
                "name": "washDryHardToRemove",
                "descriptions": {
                  "ja": "しつこい汚れ",
                  "en": "Hard-to-remove stains"
                }
              },
              {
                "edt": "0x25",
                "name": "washDryPresoaking",
                "descriptions": {
                  "ja": "つけおき",
                  "en": "Presoaking"
                }
              },
              {
                "edt": "0x26",
                "name": "washDryBlankets",
                "descriptions": {
                  "ja": "毛布",
                  "en": "Blankets"
                }
              },
              {
                "edt": "0x27",
                "name": "washDrySoft",
                "descriptions": {
                  "ja": "ソフト",
                  "en": "Soft"
                }
              },
              {
                "edt": "0x28",
                "name": "washDryDrymark",
                "descriptions": {
                  "ja": "ドライ",
                  "en": "Dry"
                }
              },
              {
                "edt": "0x29",
                "name": "washDryCleanRinsing",
                "descriptions": {
                  "ja": "清潔すすぎ",
                  "en": "Clean rinsing"
                }
              },
              {
                "edt": "0x2D",
                "name": "washDryDisinfection",
                "descriptions": {
                  "ja": "除菌",
                  "en": "Disinfection"
                }
              },
              {
                "edt": "0x2E",
                "name": "washDryOilStrains",
                "descriptions": {
                  "ja": "油汚れ",
                  "en": "Oil stains"
                }
              },
              {
                "edt": "0x2F",
                "name": "washDryMemory",
                "descriptions": {
                  "ja": "メモリー",
                  "en": "Memory"
                }
              },
              {
                "edt": "0x30",
                "name": "washDryDetergentSaving",
                "descriptions": {
                  "ja": "省洗剤",
                  "en": "Detergent saving"
                }
              },
              {
                "edt": "0x31",
                "name": "washDryLightlySoiled",
                "descriptions": {
                  "ja": "汚れ小",
                  "en": "Lightly soiled clothes"
                }
              },
              {
                "edt": "0x32",
                "name": "washDrySmallAmountQuick",
                "descriptions": {
                  "ja": "少量短時間",
                  "en": "Quick wash of small amount of laundry"
                }
              },
              {
                "edt": "0x3F",
                "name": "washDryTankCleaning",
                "descriptions": {
                  "ja": "槽洗浄",
                  "en": "Tank cleaning"
                }
              }
            ]
          },
          "note": {
            "ja": "メーカオリジナルコード＝0xE0～0xEF、メーカオリジナルコース＝0xE0～0xEF",
            "en": "Maker original code = 0xE0–0xEF, Maker original course = 0xE0–0xEF"
          }
        },
        "0xD2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "乾燥方法設定",
            "en": "Drying cycle setting"
          },
          "shortName": "dryerCycle",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0xA0",
                "name": "dryNoDrying",
                "descriptions": {
                  "ja": "乾燥なし",
                  "en": "No drying"
                }
              },
              {
                "edt": "0xA1",
                "name": "dryStandard",
                "descriptions": {
                  "ja": "標準",
                  "en": "Standard"
                }
              },
              {
                "edt": "0xA2",
                "name": "dryBlankets",
                "descriptions": {
                  "ja": "毛布",
                  "en": "Blankets"
                }
              },
              {
                "edt": "0xA3",
                "name": "drySoft",
                "descriptions": {
                  "ja": "ソフト",
                  "en": "Soft"
                }
              },
              {
                "edt": "0xA4",
                "name": "dryDrymark",
                "descriptions": {
                  "ja": "ドライ",
                  "en": "Dry"
                }
              },
              {
                "edt": "0xA5",
                "name": "dryIroning",
                "descriptions": {
                  "ja": "アイロン／Yシャツ",
                  "en": "Ironing/business shirts"
                }
              },
              {
                "edt": "0xA6",
                "name": "dryHangDrying",
                "descriptions": {
                  "ja": "吊り干し",
                  "en": "Hang drying"
                }
              },
              {
                "edt": "0xA7",
                "name": "dryThick",
                "descriptions": {
                  "ja": "厚物",
                  "en": "Thick clothes"
                }
              },
              {
                "edt": "0xA8",
                "name": "dryDisinfection",
                "descriptions": {
                  "ja": "除菌",
                  "en": "Disinfection"
                }
              },
              {
                "edt": "0xA9",
                "name": "dryShrinkageMinimization",
                "descriptions": {
                  "ja": "縮み低減",
                  "en": "Shrinkage minimization"
                }
              },
              {
                "edt": "0xAA",
                "name": "dryFinishing",
                "descriptions": {
                  "ja": "仕上げ",
                  "en": "Finishing"
                }
              },
              {
                "edt": "0xAB",
                "name": "dryStationaryDrying",
                "descriptions": {
                  "ja": "静止乾燥",
                  "en": "Stationary drying"
                }
              },
              {
                "edt": "0xAC",
                "name": "dryUserDefinedTime",
                "descriptions": {
                  "ja": "時間指定",
                  "en": "User definition of drying time"
                }
              },
              {
                "edt": "0xAD",
                "name": "dryWarming",
                "descriptions": {
                  "ja": "衣類あたため",
                  "en": "Garment warming"
                }
              },
              {
                "edt": "0xAE",
                "name": "dryHeaterCurrentLimit",
                "descriptions": {
                  "ja": "ヒータ入力制限",
                  "en": "Heater current limit"
                }
              },
              {
                "edt": "0xBF",
                "name": "dryTankDrying",
                "descriptions": {
                  "ja": "槽洗浄",
                  "en": "Tank drying"
                }
              }
            ]
          },
          "note": {
            "ja": "メーカオリジナルコード＝0xE0～0xEF、メーカオリジナルコース＝0xE0～0xEF",
            "en": "Maker original code = 0xE0 to 0xEF, Maker original course = 0xE0 to 0xEF"
          }
        },
        "0xD3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "設定可能コース情報1",
            "en": "Washer and dryer cycle option list 1"
          },
          "shortName": "washerDryerCycleOptions1",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 12,
            "maxSize": 12
          },
          "note": {
            "ja": "ビットが1の場合、対応するコースの設定が可能なことを、0の場合は不可能なことを示す。ビットとコースの関係はPDFの詳細を参照のこと。",
            "en": "When the value contained in the bit for the desired washer and dryer cycle option is \"1\", the option can be specified. When the value contained in the bit for the desired washer and dryer cycle option is \"0\", the option cannot be specified. For the requirement as to which bit must be used for which option, refer to the detailed explanation in the PDF."
          }
        },
        "0xD4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "設定可能コース情報2",
            "en": "Washer and dryer cycle option list 2"
          },
          "shortName": "washerDryerCycleOptions2",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 4,
            "maxSize": 4
          },
          "note": {
            "ja": "ビットが1の場合、対応するコースの設定が可能なことを、0の場合は不可能なことを示す。ビットとコースの関係はPDFの詳細を参照のこと。",
            "en": "When the value contained in the bit for the desired washer and dryer cycle option is \"1\", the option can be specified. When the value contained in the bit for the desired washer and dryer cycle option is \"0\", the option cannot be specified. For the requirement as to which bit must be used for which option, refer to the detailed explanation in the PDF."
          }
        },
        "0xD5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "設定可能コース情報3",
            "en": "Washer and dryer cycle option list 3"
          },
          "shortName": "washerDryerCycleOptions3",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 4,
            "maxSize": 4
          },
          "note": {
            "ja": "ビットが1の場合、対応するコースの設定が可能なことを、0の場合は不可能なことを示す。ビットとコースの関係はPDFの詳細を参照のこと。",
            "en": "When the value contained in the bit for the desired washer and dryer cycle option is \"1\", the option can be specified. When the value contained in the bit for the desired washer and dryer cycle option is \"0\", the option cannot be specified. For the requirement as to which bit must be used for which option, refer to the detailed explanation in the PDF."
          }
        },
        "0xD6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "水流設定",
            "en": "Water flow rate setting"
          },
          "shortName": "waterFlowRate",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 16
              },
              {
                "type": "level",
                "base": "0xA0",
                "maximum": 8
              },
              {
                "type": "level",
                "base": "0xC0",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0x31-0x40 絶対値指定、0xA0-0xA7 プラス相対指定、0xC0-0xC7 マイナス相対指定",
            "en": "0x31-0x40 Absolute setting, 0xA0-0xA7 Relative plus, 0xC0-0xC7 Relative minus"
          }
        },
        "0xD7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "脱水回転数設定値",
            "en": "Rotation speed for spin drying setting"
          },
          "shortName": "spinDryingRotationSpeed",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint16",
                "minimum": 0,
                "maximum": 4095,
                "unit": "rpm"
              },
              {
                "type": "level",
                "base": "0xA000",
                "maximum": 2048
              },
              {
                "type": "level",
                "base": "0xC000",
                "maximum": 2048
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0xA000-0xA7FF プラス相対指定、0xC000-0xC7FF マイナス相対指定",
            "en": "0xA000-0xA7FF Relative plus, 0xC000-0xC7FF Relative minus"
          }
        },
        "0xD8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "乾燥度設定",
            "en": "Degree of drying setting"
          },
          "shortName": "dryingDegree",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 16
              },
              {
                "type": "level",
                "base": "0xA0",
                "maximum": 8
              },
              {
                "type": "level",
                "base": "0xC0",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0x31-0x40 絶対値指定、0xA0-0xA7 プラス相対指定、0xC0-0xC7 マイナス相対指定",
            "en": "0x31-0x40 Absolute setting, 0xA0-0xA7 Relative plus, 0xC0-0xC7 Relative minus"
          }
        },
        "0xDB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯残り時間",
            "en": "Remaining washing time"
          },
          "shortName": "washingTimeRemaining",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2,
                "maximumOfHour": 255
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "unknown",
                    "descriptions": {
                      "ja": "残り時間不明",
                      "en": "Remaining time unknown"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xDC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "乾燥残り時間",
            "en": "Remaining drying time"
          },
          "shortName": "dryingTimeRemaining",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2,
                "maximumOfHour": 255
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "unknown",
                    "descriptions": {
                      "ja": "残り時間不明",
                      "en": "Remaining time unknown"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xDF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ONタイマ経過時間",
            "en": "Elapsed time on the ON timer"
          },
          "shortName": "onTimerElapsed",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "time",
            "size": 2
          }
        },
        "0xE1": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "つけおき行程時間設定値",
            "en": "Presoaking time setting"
          },
          "shortName": "presoakingTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2
              },
              {
                "type": "level",
                "base": "0xA000",
                "maximum": 60
              },
              {
                "type": "level",
                "base": "0xC000",
                "maximum": 60
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
            "en": "0xA000-0xA03B Relative plus, 0xC000-0xC03B Relative minus"
          }
        },
        "0xE2": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯乾燥遷移状態",
            "en": "Current stage of washer and dryer cycle"
          },
          "shortName": "currentStage",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "washing",
                "descriptions": {
                  "ja": "洗い",
                  "en": "washing"
                }
              },
              {
                "edt": "0x42",
                "name": "rinsing",
                "descriptions": {
                  "ja": "すすぎ",
                  "en": "Rinsing"
                }
              },
              {
                "edt": "0x43",
                "name": "spinDrying",
                "descriptions": {
                  "ja": "脱水",
                  "en": "Spin drying"
                }
              },
              {
                "edt": "0x44",
                "name": "suspended",
                "descriptions": {
                  "ja": "一時停止",
                  "en": "Suspended"
                }
              },
              {
                "edt": "0x45",
                "name": "washingCompleted",
                "descriptions": {
                  "ja": "洗濯完了",
                  "en": "Washing completed"
                }
              },
              {
                "edt": "0x51",
                "name": "washingDryingCompleted",
                "descriptions": {
                  "ja": "洗濯／乾燥（ソフトキープなし）完了",
                  "en": "Washing/drying (without wrinkling minimization) completed"
                }
              },
              {
                "edt": "0x52",
                "name": "drying",
                "descriptions": {
                  "ja": "乾燥",
                  "en": "Drying"
                }
              },
              {
                "edt": "0x53",
                "name": "wrinkleMinimizing",
                "descriptions": {
                  "ja": "ソフトキープ",
                  "en": "Wrinkling minimization"
                }
              },
              {
                "edt": "0x54",
                "name": "dryingWrinkleMinimizingCompleted",
                "descriptions": {
                  "ja": "乾燥（ソフトキープあり）完了",
                  "en": "Drying (with wrinkling minimization) completed"
                }
              },
              {
                "edt": "0x61",
                "name": "standby",
                "descriptions": {
                  "ja": "運転前待機中",
                  "en": "Standing by to start"
                }
              },
              {
                "edt": "0x71",
                "name": "1stRinsing",
                "descriptions": {
                  "ja": "第１すすぎ",
                  "en": "1st rinsing"
                }
              },
              {
                "edt": "0x72",
                "name": "2ndRinsing",
                "descriptions": {
                  "ja": "第２すすぎ",
                  "en": "2nd rinsing"
                }
              },
              {
                "edt": "0x73",
                "name": "3rdRinsing",
                "descriptions": {
                  "ja": "第３すすぎ",
                  "en": "3rd rinsing"
                }
              },
              {
                "edt": "0x74",
                "name": "4thRinsing",
                "descriptions": {
                  "ja": "第４すすぎ",
                  "en": "4th rinsing"
                }
              },
              {
                "edt": "0x75",
                "name": "5thRinsing",
                "descriptions": {
                  "ja": "第５すすぎ",
                  "en": "5th rinsing"
                }
              },
              {
                "edt": "0x76",
                "name": "6thRinsing",
                "descriptions": {
                  "ja": "第６すすぎ",
                  "en": "6th rinsing"
                }
              },
              {
                "edt": "0x77",
                "name": "7thRinsing",
                "descriptions": {
                  "ja": "第７すすぎ",
                  "en": "7th rinsing"
                }
              },
              {
                "edt": "0x78",
                "name": "8thRinsing",
                "descriptions": {
                  "ja": "第８すすぎ",
                  "en": "8th rinsing"
                }
              },
              {
                "edt": "0x81",
                "name": "1stSpinDrying",
                "descriptions": {
                  "ja": "第１脱水",
                  "en": "1st spin drying"
                }
              },
              {
                "edt": "0x82",
                "name": "2ndSpinDrying",
                "descriptions": {
                  "ja": "第２脱水",
                  "en": "2nd spin drying"
                }
              },
              {
                "edt": "0x83",
                "name": "3rdSpinDrying",
                "descriptions": {
                  "ja": "第３脱水",
                  "en": "3rd spin drying"
                }
              },
              {
                "edt": "0x84",
                "name": "4thSpinDrying",
                "descriptions": {
                  "ja": "第４脱水",
                  "en": "4th spin drying"
                }
              },
              {
                "edt": "0x85",
                "name": "5thSpinDrying",
                "descriptions": {
                  "ja": "第５脱水",
                  "en": "5th spin drying"
                }
              },
              {
                "edt": "0x86",
                "name": "6thSpinDrying",
                "descriptions": {
                  "ja": "第６脱水",
                  "en": "6th spin drying"
                }
              },
              {
                "edt": "0x87",
                "name": "7thSpinDrying",
                "descriptions": {
                  "ja": "第７脱水",
                  "en": "7th spin drying"
                }
              },
              {
                "edt": "0x88",
                "name": "8thSpinDrying",
                "descriptions": {
                  "ja": "第８脱水",
                  "en": "8th spin drying"
                }
              },
              {
                "edt": "0x91",
                "name": "preheatSpinDrying",
                "descriptions": {
                  "ja": "プリヒート脱水",
                  "en": "Preheat spin drying"
                }
              }
            ]
          },
          "note": {
            "ja": "0xE0-0xEF : メーカオリジナルコード",
            "en": "0xE0-0xEF : Unique code defined by the manufacture"
          }
        },
        "0xE3": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "水量設定1",
            "en": "Water volume setting 1"
          },
          "shortName": "waterVolumeByLiter",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "minimum": 0,
                "maximum": 127,
                "unit": "L"
              },
              {
                "type": "level",
                "base": "0xA0",
                "maximum": 32
              },
              {
                "type": "level",
                "base": "0xC0",
                "maximum": 32
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0xA0-0xBF プラス相対指定、0xC0-0xDF マイナス相対指定",
            "en": "0xA0-0xBF Relative plus、0xC0-0xDF Relative minus"
          }
        },
        "0xE4": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "水量設定2",
            "en": "Water volume setting 2"
          },
          "shortName": "waterVolumeByStep",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "level",
                "base": "0x31",
                "maximum": 16
              },
              {
                "type": "level",
                "base": "0xA0",
                "maximum": 8
              },
              {
                "type": "level",
                "base": "0xC0",
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0x31-0x40 絶対値指定、0xA0-0xA7 プラス相対指定、0xC0-0xC7 マイナス相対指定",
            "en": "0x31-0x40 Absolute setting, 0xA0-0xA7 Relative plus、0xC0-0xC7 Relative minus"
          }
        },
        "0xE5": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗い時間設定値",
            "en": "Washing time setting"
          },
          "shortName": "washingTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2
              },
              {
                "type": "level",
                "base": "0xA000",
                "maximum": 60
              },
              {
                "type": "level",
                "base": "0xC000",
                "maximum": 60
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
            "en": "0xA000-0xA03B Relative plus, 0xC000-0xC03B Relative minus"
          }
        },
        "0xE6": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "すすぎ回数設定値",
            "en": "Number of times of rinsing setting"
          },
          "shortName": "rinsingCount",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "minimum": 0,
                "maximum": 8
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動",
                      "en": "Automatic"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xE7": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "すすぎモード設定",
            "en": "Rinsing process setting"
          },
          "shortName": "rinsingProcess",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 4,
            "maxSize": 4
          },
          "note": {
            "ja": "0,1,2,3ビット：第1すすぎ、4,5,6,7ビット：第2すすぎ、8,9,10,11ビット：第3すすぎ、12,13,14,15ビット：第4すすぎ、16,17,18,19ビット：第5すすぎ、20,21,22,23ビット：第6すすぎ、24,25,26,27ビット：第7すすぎ、28,29,30,31ビット：第8すすぎ、0000：モード自動設定、0001：溜めすすぎ、0010：流水すすぎ、0011：シャワーすすぎ",
            "en": "Bits 0 through bit 3: 1st rinsing, Bits 4 through bit 7: 2nd rinsing, Bits 8 through bit 11: 3rd rinsing, Bits 12 through bit 15: 4th rinsing, Bits 16 through bit 19: 5th rinsing, Bits 20 through bit 23: 6th rinsing, Bits 24 through bit 27: 7th rinsing, Bits 28 through bit 31: 8th rinsing, 0000: Automatic mode, 0001: Rinsing without additional feeding of water from the tap, 0010: Rinsing with additional feeding of water from the tap, 0011: Shower rinsing"
          }
        },
        "0xE8": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "脱水時間設定値",
            "en": "Spin drying time setting"
          },
          "shortName": "spinDryingTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "minimum": 0,
                "maximum": 59,
                "unit": "minutes"
              },
              {
                "type": "level",
                "base": "0xA0",
                "maximum": 32
              },
              {
                "type": "level",
                "base": "0xC0",
                "maximum": 32
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
            "en": "0xA000-0xA03B Relative plus, 0xC000-0xC03B Relative minus"
          }
        },
        "0xE9": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "乾燥時間設定値",
            "en": "Drying time setting"
          },
          "shortName": "dryingTime",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2
              },
              {
                "type": "level",
                "base": "0xA000",
                "maximum": 60
              },
              {
                "type": "level",
                "base": "0xC000",
                "maximum": 60
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "自動設定",
                      "en": "Automatic setting"
                    }
                  }
                ]
              }
            ]
          },
          "note": {
            "ja": "0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
            "en": "0xA000-0xA03B Relative plus, 0xC000-0xC03B Relative minus"
          }
        },
        "0xEA": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗い温水設定値",
            "en": "Warm water setting"
          },
          "shortName": "waterTemperature",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "number",
                "format": "uint8",
                "unit": "Celsius",
                "minimum": 0,
                "maximum": 100
              },
              {
                "type": "state",
                "size": 1,
                "enum": [
                  {
                    "edt": "0xFE",
                    "name": "noWarmWater",
                    "descriptions": {
                      "ja": "温水不使用",
                      "en": "Not to use warm water"
                    }
                  },
                  {
                    "edt": "0xFF",
                    "name": "auto",
                    "descriptions": {
                      "ja": "温水自動設定",
                      "en": "Automatic water temperature setting"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xEB": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "風呂水設定",
            "en": "Bathtub water recycle setting"
          },
          "shortName": "bathtubWaterRecycle",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "none",
                "descriptions": {
                  "ja": "風呂水給水なし",
                  "en": "Bathtub water not used"
                }
              },
              {
                "edt": "0x41",
                "name": "washing",
                "descriptions": {
                  "ja": "洗いのみ",
                  "en": "Washing only"
                }
              },
              {
                "edt": "0x42",
                "name": "rinsingWithoutFinal",
                "descriptions": {
                  "ja": "すすぎのみ（除く最終すすぎ）",
                  "en": "Rinsing only (excluding the final rinsing)"
                }
              },
              {
                "edt": "0x43",
                "name": "rinsing",
                "descriptions": {
                  "ja": "全すすぎ",
                  "en": "All rinsing processes"
                }
              },
              {
                "edt": "0x44",
                "name": "washingRinsingWithoutFinal",
                "descriptions": {
                  "ja": "洗い＋すすぎ（除く最終すすぎ）",
                  "en": "Washing + rinsing (excluding the final rinsing)"
                }
              },
              {
                "edt": "0x45",
                "name": "washingRinsing",
                "descriptions": {
                  "ja": "洗い＋全すすぎ",
                  "en": "Washing + all rinsing processes"
                }
              }
            ]
          }
        },
        "0xEC": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "ソフトキープ設定",
            "en": "Wrinkling minimization setting"
          },
          "shortName": "wrinklingMinimization",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "enable",
                "descriptions": {
                  "ja": "ソフトキープ入り",
                  "en": "Wrinkling minimization function ON"
                }
              },
              {
                "edt": "0x42",
                "name": "disable",
                "descriptions": {
                  "ja": "ソフトキープ切り",
                  "en": "Wrinkling minimization function OFF"
                }
              }
            ]
          }
        },
        "0xED": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯乾燥残り時間",
            "en": "Time remaining to complete washer and dryer cycle"
          },
          "shortName": "washingDryingTimeRemaining",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "oneOf": [
              {
                "type": "time",
                "size": 2
              },
              {
                "type": "state",
                "size": 2,
                "enum": [
                  {
                    "edt": "0xFFFF",
                    "name": "unknown",
                    "descriptions": {
                      "ja": "残り時間不明",
                      "en": "Remaining time unknown"
                    }
                  }
                ]
              }
            ]
          }
        },
        "0xEE": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転中扉・蓋ロック設定",
            "en": "Door/cover lock setting"
          },
          "shortName": "doorLockStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "locked",
                "descriptions": {
                  "ja": "ロック",
                  "en": "Locked"
                }
              },
              {
                "edt": "0x42",
                "name": "unlocked",
                "descriptions": {
                  "ja": "アンロック",
                  "en": "Unlocked"
                }
              }
            ]
          }
        },
        "0xEF": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "洗濯乾燥行程情報",
            "en": "Washer and dryer cycle"
          },
          "shortName": "washerAndDryerCycle",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "raw",
            "minSize": 24,
            "maxSize": 24
          },
          "note": {
            "ja": "第1,2バイト：有効な表示項目をビットマップで示す。第3バイト：つけおき行程　つけおき行程あり：0x41　つけおき行程なし：0x42。第4,5バイト：洗い時間　値は洗い時間設定値を参照。第6バイト：すすぎ回数　値はすすぎ回数設定値を参照。第7～10バイト：すすぎモード　値はすすぎモード設定を参照。第11バイト：脱水時間　値は脱水時間設定値を参照。第12、13バイト：乾燥時間　値は乾燥時間設定値を参照。第14バイト：温水設定　値は温水設定を参照。第15バイト：水量設定１　値は水量設定１を参照。第16バイト：水量設定2　値は水量設定２を参照。第17バイト：風呂水設定　値は風呂水設定を参照。第18バイト：水流設定　値は水流設定を参照。第19,20バイト：脱水回転数設定　値は脱水回転数設定値を参照。第21バイト：乾燥度設定　値は乾燥度設定を参照。第22,23バイト：つけおき行程時間設定　値はつけおき行程時間設定を参照。第24バイト：ソフトキープ設定　値はソフトキープ設定を参照。",
            "en": "This property indicates the available items in a bitmap format. Byte 3: Presoaking, With presoaking: 0x41, Without presoaking: 0x42. Bytes 4 and 5: Washing time, The value of the \"washing time setting\" property shall be referenced. Byte 6: Number of times of rinsing, The value of the \"number of times of rinsing’ setting\" property shall be referenced. Bytes 7 through 10: Rinsing process, The value of the \"rinsing process setting\" property shall be referenced. Byte 11: Spin drying time, The value of the \"spin drying time setting\" property shall be referenced. Bytes 12 and 13: Drying time, The value of the \"drying time setting\" property shall be referenced. Byte 14: Warm water setting, The value of the \"warm water setting\" property shall be referenced. Byte 15: Water volume setting 1, The value of the \"water volume setting 1\" property shall be referenced. Byte 16: Water volume setting 2, The value of the \"water volume setting 2\" property shall be referenced. Byte 17: Bathtub water recycle setting, The value of the \"bathtub water recycle setting\" property shall be referenced. Byte 18: Water flow rate setting, The value of the \"water flow rate setting\" property shall be referenced. Bytes 19 and 20: \"Rotation speed for spin drying\" setting, The value of the \"’rotation speed for spin drying’ setting\" property shall be referenced. Byte 21: \"Degree of drying\" setting, The value of the \"’degree of drying’ setting\" property shall be referenced. Bytes 22 and 23: Presoaking time setting, The value of the \"presoaking time setting\" property shall be referenced. Byte 24: Wrinkling minimization setting, The value of the \"wrinkling minimization setting\" property shall be referenced."
          }
        }
      }
    },
    "0x03D4": {
      "validRelease": {
        "from": "F",
        "to": "latest"
      },
      "className": {
        "ja": "業務用ショーケース向け室外機",
        "en": "Commercial show case outdoor unit"
      },
      "shortName": "commercialShowcaseOutdoorUnit",
      "elProperties": {
        "0xAA": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "特殊状態",
            "en": "Exceptional status"
          },
          "shortName": "exceptionalStatus",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x40",
                "name": "normalStatus",
                "descriptions": {
                  "ja": "通常状態",
                  "en": "Normal status"
                }
              },
              {
                "edt": "0x41",
                "name": "defrostingStatus",
                "descriptions": {
                  "ja": "除霜状態",
                  "en": "Defrosting status"
                }
              }
            ]
          }
        },
        "0xB0": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "運転モード設定",
            "en": "Operation mode setting"
          },
          "shortName": "operationMode",
          "accessRule": {
            "get": "required",
            "set": "required",
            "inf": "required"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x41",
                "name": "cooling",
                "descriptions": {
                  "ja": "冷却",
                  "en": "Cooling"
                }
              },
              {
                "edt": "0x42",
                "name": "non-cooling",
                "descriptions": {
                  "ja": "非冷",
                  "en": "Non-cooling"
                }
              }
            ]
          }
        },
        "0xBE": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "外気温度計測値",
            "en": "Measured value of outdoor air temperature"
          },
          "shortName": "outdoorAirTemperature",
          "accessRule": {
            "get": "optional",
            "set": "notApplicable",
            "inf": "optional"
          },
          "data": {
            "type": "number",
            "format": "int8",
            "unit": "Celsius",
            "minimum": -127,
            "maximum": 126
          }
        },
        "0xCA": {
          "oneOf": [
            {
              "validRelease": {
                "from": "F",
                "to": "H"
              },
              "propertyName": {
                "ja": "グループ情報",
                "en": "Group information"
              },
              "shortName": "groupInformation",
              "accessRule": {
                "get": "optional",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "type": "raw",
                "minSize": 1,
                "maxSize": 1
              }
            },
            {
              "validRelease": {
                "from": "I",
                "to": "latest"
              },
              "propertyName": {
                "ja": "グループ情報",
                "en": "Group information"
              },
              "shortName": "groupInformation",
              "accessRule": {
                "get": "required",
                "set": "optional",
                "inf": "optional"
              },
              "data": {
                "oneOf": [
                  {
                    "type": "number",
                    "format": "uint8",
                    "minimum": 1,
                    "maximum": 253
                  },
                  {
                    "type": "state",
                    "size": 1,
                    "enum": [
                      {
                        "edt": "0x00",
                        "name": "none",
                        "descriptions": {
                          "ja": "設定なし",
                          "en": "No setting"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "0xE2": {
          "validRelease": {
            "from": "F",
            "to": "latest"
          },
          "propertyName": {
            "ja": "コンプレッサ動作状態",
            "en": "Compressor operation status"
          },
          "shortName": "compressorOperationStatus",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "type": "state",
            "size": 1,
            "enum": [
              {
                "edt": "0x30",
                "name": "on",
                "descriptions": {
                  "ja": "ON",
                  "en": "ON"
                }
              },
              {
                "edt": "0x31",
                "name": "off",
                "descriptions": {
                  "ja": "OFF",
                  "en": "OFF"
                }
              }
            ]
          }
        }
      }
    },
    "0x05FD": {
      "validRelease": {
        "from": "A",
        "to": "latest"
      },
      "className": {
        "ja": "スイッチ (JEM_A/HA端子対応)",
        "en": "Switch (supporting JEM-A/HA terminals)"
      },
      "shortName": "switch",
      "elProperties": {
        "0xE0": {
          "validRelease": {
            "from": "A",
            "to": "latest"
          },
          "propertyName": {
            "ja": "接続機器",
            "en": "Connected device"
          },
          "shortName": "connectedDevice",
          "accessRule": {
            "get": "optional",
            "set": "optional",
            "inf": "optional"
          },
          "data": {
            "$ref": "#/definitions/raw_12"
          }
        }
      }
    }}}
  