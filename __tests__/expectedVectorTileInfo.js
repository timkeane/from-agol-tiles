const serviceDefinition = {
  "currentVersion": 10.81,
  "name": "Poletop_2263",
  "copyrightText": "SOURCE: NYC Open Data | Esri",
  "capabilities": "TilesOnly,Tilemap",
  "type": "indexedVector",
  "tileMap": "tilemap",
  "defaultStyles": "resources/styles",
  "tiles": [
    "tile/{z}/{y}/{x}.pbf"
  ],
  "exportTilesAllowed": false,
  "initialExtent": {
    "xmin": 338782.476762391,
    "ymin": -282481.47145242174,
    "xmax": 1629359.451970779,
    "ymax": 502811.7364480441,
    "spatialReference": {
      "wkid": 102718,
      "latestWkid": 2263
    }
  },
  "fullExtent": {
    "xmin": 338782.476762391,
    "ymin": -282481.47145242174,
    "xmax": 1629359.451970779,
    "ymax": 502811.7364480441,
    "spatialReference": {
      "wkid": 102718,
      "latestWkid": 2263
    }
  },
  "minScale": 136151327.93436128,
  "maxScale": 64.92201229780258,
  "tileInfo": {
    "rows": 512,
    "cols": 512,
    "dpi": 96,
    "format": "pbf",
    "origin": {
      "x": -29271719.176012397,
      "y": 30365955.2728768
    },
    "spatialReference": {
      "wkid": 102718,
      "latestWkid": 2263
    },
    "lods": [
      {
        "level": 0,
        "resolution": 118186.6802358554,
        "scale": 136151327.93436128
      },
      {
        "level": 1,
        "resolution": 59093.3401179277,
        "scale": 68075663.96718064
      },
      {
        "level": 2,
        "resolution": 29546.67005896385,
        "scale": 34037831.98359032
      },
      {
        "level": 3,
        "resolution": 14773.335029481925,
        "scale": 17018915.99179516
      },
      {
        "level": 4,
        "resolution": 7386.667514740962,
        "scale": 8509457.99589758
      },
      {
        "level": 5,
        "resolution": 3693.333757370481,
        "scale": 4254728.99794879
      },
      {
        "level": 6,
        "resolution": 1846.6668786852406,
        "scale": 2127364.498974395
      },
      {
        "level": 7,
        "resolution": 923.3334393426203,
        "scale": 1063682.2494871975
      },
      {
        "level": 8,
        "resolution": 461.66671967131015,
        "scale": 531841.1247435987
      },
      {
        "level": 9,
        "resolution": 230.83335983565507,
        "scale": 265920.5623717994
      },
      {
        "level": 10,
        "resolution": 115.41667991782754,
        "scale": 132960.2811858997
      },
      {
        "level": 11,
        "resolution": 57.70833995891377,
        "scale": 66480.14059294984
      },
      {
        "level": 12,
        "resolution": 28.854169979456884,
        "scale": 33240.07029647492
      },
      {
        "level": 13,
        "resolution": 14.427084989728442,
        "scale": 16620.03514823746
      },
      {
        "level": 14,
        "resolution": 7.213542494864221,
        "scale": 8310.01757411873
      },
      {
        "level": 15,
        "resolution": 3.6067712474321105,
        "scale": 4155.008787059365
      },
      {
        "level": 16,
        "resolution": 1.8033856237160553,
        "scale": 2077.5043935296826
      },
      {
        "level": 17,
        "resolution": 0.9016928118580276,
        "scale": 1038.7521967648413
      },
      {
        "level": 18,
        "resolution": 0.4508464059290138,
        "scale": 519.3760983824207
      },
      {
        "level": 19,
        "resolution": 0.2254232029645069,
        "scale": 259.6880491912103
      },
      {
        "level": 20,
        "resolution": 0.11271160148225345,
        "scale": 129.84402459560516
      },
      {
        "level": 21,
        "resolution": 0.05635580074112673,
        "scale": 64.92201229780258
      }
    ]
  },
  "maxzoom": 21,
  "minLOD": 0,
  "maxLOD": 16,
  "resourceInfo": {
    "styleVersion": 8,
    "tileCompression": "gzip",
    "cacheInfo": {
      "storageInfo": {
        "packetSize": 128,
        "storageFormat": "compactV2"
      }
    }
  },
  "serviceItemId": "6917affc8cf14c77bf58f519c5b76945",
  "maxExportTilesCount": 100000
};

const expectedResolutions =  [
  118186.6802358554,
  59093.3401179277,
  29546.67005896385,
  14773.335029481925,
  7386.667514740962,
  3693.333757370481,
  1846.6668786852406,
  923.3334393426203,
  461.66671967131015,
  230.83335983565507,
  115.41667991782754,
  57.70833995891377,
  28.854169979456884,
  14.427084989728442,
  7.213542494864221,
  3.6067712474321105,
  1.8033856237160553,
  0.9016928118580276,
  0.4508464059290138,
  0.2254232029645069,
  0.11271160148225345,
  0.05635580074112673
];

const expectedExtent = [
  serviceDefinition.fullExtent.xmin,
  serviceDefinition.fullExtent.ymin,
  serviceDefinition.fullExtent.xmax,
  serviceDefinition.fullExtent.ymax
];

const expectedOrigin = [
  serviceDefinition.tileInfo.origin.x,
  serviceDefinition.tileInfo.origin.y
];

const expectedTileSize = [
  serviceDefinition.tileInfo.cols,
  serviceDefinition.tileInfo.rows
];

export default {
  serviceDefinition,
  expectedResolutions,
  expectedExtent,
  expectedOrigin
};
