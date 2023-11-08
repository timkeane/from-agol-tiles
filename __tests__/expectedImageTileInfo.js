const serviceDefinition = {
  "id": "b3a1bd85051374f2",
  "name": "NYC_Orthos_-_2020",
  "capabilities": "Map,TilesOnly,Tilemap",
  "description": "NY State Orthoimagery Program - 2020",
  "serviceDescription": "",
  "server": "yG5s3afENB5iO9fj",
  "type": "MapServer",
  "access": "SECURE",
  "status": "created",
  "singleFusedMapCache": true,
  "spatialReference": {
    "wkid": 102100,
    "latestWkid": 3857
  },
  "initialExtent": {
    "xmin": -8311695.6328998115,
    "ymin": 4912672.716806634,
    "xmax": -8158974.450432755,
    "ymax": 5039405.309664682,
    "spatialReference": {
      "wkid": 102100,
      "latestWkid": 3857
    }
  },
  "fullExtent": {
    "xmin": -8311695.6328998115,
    "ymin": 4912672.716806634,
    "xmax": -8158974.450432755,
    "ymax": 5039405.309664682,
    "spatialReference": {
      "wkid": 102100,
      "latestWkid": 3857
    }
  },
  "minScale": 591657527.591555,
  "maxScale": 70.5310735,
  "minLOD": 0,
  "maxLOD": 23,
  "tileInfo": {
    "rows": 256,
    "cols": 256,
    "dpi": 96,
    "format": "MIXED",
    "compressionQuality": 75,
    "bandCount": 1,
    "lercError": 0,
    "storageFormat": "esriMapCacheStorageModeCompactV2",
    "origin": {
      "x": -20037508.342787,
      "y": 20037508.342787
    },
    "spatialReference": {
      "wkid": 102100,
      "latestWkid": 3857
    },
    "lods": [
      {
        "level": 0,
        "resolution": 156543.033928,
        "scale": 591657527.591555
      },
      {
        "level": 1,
        "resolution": 78271.5169639999,
        "scale": 295828763.795777
      },
      {
        "level": 2,
        "resolution": 39135.7584820001,
        "scale": 147914381.897889
      },
      {
        "level": 3,
        "resolution": 19567.8792409999,
        "scale": 73957190.948944
      },
      {
        "level": 4,
        "resolution": 9783.93962049996,
        "scale": 36978595.474472
      },
      {
        "level": 5,
        "resolution": 4891.96981024998,
        "scale": 18489297.737236
      },
      {
        "level": 6,
        "resolution": 2445.98490512499,
        "scale": 9244648.868618
      },
      {
        "level": 7,
        "resolution": 1222.99245256249,
        "scale": 4622324.434309
      },
      {
        "level": 8,
        "resolution": 611.49622628138,
        "scale": 2311162.217155
      },
      {
        "level": 9,
        "resolution": 305.748113140558,
        "scale": 1155581.108577
      },
      {
        "level": 10,
        "resolution": 152.874056570411,
        "scale": 577790.554289
      },
      {
        "level": 11,
        "resolution": 76.4370282850732,
        "scale": 288895.277144
      },
      {
        "level": 12,
        "resolution": 38.2185141425366,
        "scale": 144447.638572
      },
      {
        "level": 13,
        "resolution": 19.1092570712683,
        "scale": 72223.819286
      },
      {
        "level": 14,
        "resolution": 9.55462853563415,
        "scale": 36111.909643
      },
      {
        "level": 15,
        "resolution": 4.77731426794937,
        "scale": 18055.954822
      },
      {
        "level": 16,
        "resolution": 2.38865713397468,
        "scale": 9027.977411
      },
      {
        "level": 17,
        "resolution": 1.19432856685505,
        "scale": 4513.988705
      },
      {
        "level": 18,
        "resolution": 0.597164283559817,
        "scale": 2256.994353
      },
      {
        "level": 19,
        "resolution": 0.298582141647617,
        "scale": 1128.497176
      },
      {
        "level": 20,
        "resolution": 0.14929107082380833,
        "scale": 564.248588
      },
      {
        "level": 21,
        "resolution": 0.07464553541190416,
        "scale": 282.124294
      },
      {
        "level": 22,
        "resolution": 0.03732276770595208,
        "scale": 141.062147
      },
      {
        "level": 23,
        "resolution": 0.01866138385297604,
        "scale": 70.5310735
      }
    ]
  },
  "documentInfo": {
    "title": "NYC Orthos 2020",
    "author": "maps.nyc.data",
    "comments": "",
    "subject": "Citywide orthoimagery collected in 2020",
    "category": "",
    "keywords": "basemap, imagery, orthography, 2020",
    "credits": null
  },
  "copyrightText": "",
  "tileServers": null,
  "maxExportTilesCount": 100000,
  "exportTilesAllowed": false,
  "serviceItemId": "cb5571a887b945aa873cb3b1ef489d57",
  "mapName": "Layers",
  "units": "esriMeters",
  "supportedImageFormatTypes": "MIXED",
  "layers": null,
  "tables": null,
  "resampling": true,
  "currentVersion": 10.81
};

const expectedResolutions =  [
  156543.033928,
  78271.5169639999,
  39135.7584820001,
  19567.8792409999,
  9783.93962049996,
  4891.96981024998,
  2445.98490512499,
  1222.99245256249,
  611.49622628138,
  305.748113140558,
  152.874056570411,
  76.4370282850732,
  38.2185141425366,
  19.1092570712683,
  9.55462853563415,
  4.77731426794937,
  2.38865713397468,
  1.19432856685505,
  0.597164283559817,
  0.298582141647617,
  0.14929107082380833,
  0.07464553541190416,
  0.03732276770595208,
  0.01866138385297604
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
