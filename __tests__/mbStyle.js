export default {
  "version": 8,
  "sprite": "../sprites/sprite",
  "glyphs": "../fonts/{fontstack}/{range}.pbf",
  "sources": {
    "esri": {
      "type": "vector",
      "attribution": "SOURCE: NYC Open Data | Esri",
      "bounds": [
        -76.3572,
        39.3683,
        -71.6441,
        41.5467
      ],
      "minzoom": 0,
      "maxzoom": 21,
      "scheme": "xyz",
      "url": "../../"
    }
  },
  "layers": [
    {
      "id": "Ocean",
      "type": "fill",
      "source": "esri",
      "source-layer": "Ocean",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#88A9BC"
      }
    },
    {
      "id": "Land/Land_NYC",
      "type": "fill",
      "source": "esri",
      "source-layer": "Land",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#F5F0EA",
        "fill-outline-color": "#F5F0EA"
      }
    },
    {
      "id": "Land/Land_Region",
      "type": "fill",
      "source": "esri",
      "source-layer": "Land",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#E6E1DB",
        "fill-outline-color": "#E6E1DB"
      }
    },
    {
      "id": "NYC Airport Grounds",
      "type": "fill",
      "source": "esri",
      "source-layer": "NYC Airport Grounds",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#EDECEB",
        "fill-outline-color": "#B2B2B2"
      }
    },
    {
      "id": "Region Parks",
      "type": "fill",
      "source": "esri",
      "source-layer": "Region Parks",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#96A797"
      }
    },
    {
      "id": "Plaza/Plaza",
      "type": "fill",
      "source": "esri",
      "source-layer": "Plaza",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "rgba(189,200,190,0.4)",
        "fill-outline-color": "#9DA69E"
      }
    },
    {
      "id": "Parks/Park Boundary",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#96A797"
      }
    },
    {
      "id": "Parks/Pool",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#88A9BC"
      }
    },
    {
      "id": "Parks/Skating Rink",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#BDC8BE"
      }
    },
    {
      "id": "Parks/Greenstreets",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#96A797"
      }
    },
    {
      "id": "Parks/Running Track",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#968077"
      }
    },
    {
      "id": "Parks/Court",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#BDC8BE"
      }
    },
    {
      "id": "Parks/Golf Course",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#678568"
      }
    },
    {
      "id": "Parks/Football Field",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#678568"
      }
    },
    {
      "id": "Parks/Soccer Field",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#678568"
      }
    },
    {
      "id": "Parks/Baseball Softball Field",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parks",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#8C8684",
        "fill-outline-color": "rgba(113,112,109,0.5)"
      }
    },
    {
      "id": "NYC Open Space",
      "type": "fill",
      "source": "esri",
      "source-layer": "NYC Open Space",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#96A797"
      }
    },
    {
      "id": "Inland Hydrography",
      "type": "fill",
      "source": "esri",
      "source-layer": "Inland Hydrography",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#88A9BC",
        "fill-outline-color": "rgba(89,116,133,0.5)"
      }
    },
    {
      "id": "Region Hydrography/Water",
      "type": "fill",
      "source": "esri",
      "source-layer": "Region Hydrography",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#88A9BC"
      }
    },
    {
      "id": "Region Hydrography/Swamp or Marsh",
      "type": "fill",
      "source": "esri",
      "source-layer": "Region Hydrography",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "layout": {
        
      },
      "paint": {
        "fill-pattern": "Region Hydrography/Swamp or Marsh"
      }
    },
    {
      "id": "Coastal Hydrography/Wetland",
      "type": "fill",
      "source": "esri",
      "source-layer": "Coastal Hydrography",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "layout": {
        
      },
      "paint": {
        "fill-pattern": "Coastal Hydrography/Wetland"
      }
    },
    {
      "id": "Coastal Hydrography/Beach/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Coastal Hydrography",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#EBE2D5"
      }
    },
    {
      "id": "Coastal Hydrography/Beach/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Coastal Hydrography",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "layout": {
        
      },
      "paint": {
        "fill-pattern": "Coastal Hydrography/Beach/0"
      }
    },
    {
      "id": "Sidewalks/Elevated Sidewalk/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Sidewalks",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#CCC9C4"
      }
    },
    {
      "id": "Sidewalks/Elevated Sidewalk/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Sidewalks",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B3B0AC",
        "line-width": {
          "stops": [
            [
              12.8804,
              0.133333
            ],
            [
              16.8804,
              1.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Sidewalks/Sidewalk",
      "type": "fill",
      "source": "esri",
      "source-layer": "Sidewalks",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#CCC9C4"
      }
    },
    {
      "id": "Parking Lots",
      "type": "fill",
      "source": "esri",
      "source-layer": "Parking Lots",
      "minzoom": 12,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#BFBDB8"
      }
    },
    {
      "id": "Roadbeds/Elevated Roadbed/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": 2.66667
      }
    },
    {
      "id": "Roadbeds/Roadbed/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": 2.66667
      }
    },
    {
      "id": "Roadbeds/Below Grade Roadbed/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": 2.66667
      }
    },
    {
      "id": "Roadbeds/Below Grade Roadbed/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#EDECEB"
      }
    },
    {
      "id": "Roadbeds/Roadbed/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#EDECEB"
      }
    },
    {
      "id": "Roadbeds/Elevated Roadbed/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#EDECEB"
      }
    },
    {
      "id": "Roadbeds/Tunnel/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(237,236,235,0.6)",
        "line-width": 1.33333
      }
    },
    {
      "id": "Roadbeds/Tunnel/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(178,178,178,0.5)",
        "line-dasharray": [
          2,
          2
        ],
        "line-width": 1.33333
      }
    },
    {
      "id": "Roadbeds/Tunnel/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Roadbeds",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 13,
      "layout": {
        
      },
      "paint": {
        "fill-color": "rgba(237,236,235,0.55)"
      }
    },
    {
      "id": "NYC Roads/Ferry",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "minzoom": 10,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#5F7B8C",
        "line-dasharray": [
          4.54545,
          1.81818
        ],
        "line-width": {
          "stops": [
            [
              8,
              1
            ],
            [
              17,
              1.66667
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Path, Trail/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-dasharray": [
          0.125,
          2
        ],
        "line-width": {
          "stops": [
            [
              12,
              1.33333
            ],
            [
              19,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Path, Trail/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9C9C9C",
        "line-dasharray": [
          0.166667,
          2.66667
        ],
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              19,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Other Road",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": 0.666667
      }
    },
    {
      "id": "NYC Roads/Alley, Private Road/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              12,
              1.33333
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Alley, Private Road/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              12,
              0.666667
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Local Road/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              11,
              2.66667
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Local Road/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              11,
              1.33333
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Ramp/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              11,
              1.33333
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Ramp/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              11,
              0.666667
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Secondary/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              9,
              1.66667
            ],
            [
              13,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Secondary/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              9,
              1.11111
            ],
            [
              13,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Primary/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              5,
              0.333333
            ],
            [
              13,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Primary/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              5,
              0.266667
            ],
            [
              13,
              6.4
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Tunnel",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(237,236,235,0.5)",
        "line-width": {
          "stops": [
            [
              5,
              0.333333
            ],
            [
              13,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Bridge/1",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              5,
              0.333333
            ],
            [
              13,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Roads/Bridge/0",
      "type": "line",
      "source": "esri",
      "source-layer": "NYC Roads",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              5,
              0.266667
            ],
            [
              13,
              6.4
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Other Road",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": 1.33333
      }
    },
    {
      "id": "Region Roads/Path, Trail/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-dasharray": [
          0.125,
          2
        ],
        "line-width": {
          "stops": [
            [
              12,
              1.33333
            ],
            [
              19,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Path, Trail/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9C9C9C",
        "line-dasharray": [
          0.166667,
          2.66667
        ],
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              19,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Alley, Private Road/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              12,
              1.33333
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Alley, Private Road/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              12,
              0.666667
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Local Road/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              11,
              2.66667
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Local Road/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              11,
              1.33333
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Ramp/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              11,
              1.33333
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Ramp/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              11,
              0.666667
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Secondary/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              9,
              1.66667
            ],
            [
              17,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Secondary/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              9,
              1.11111
            ],
            [
              17,
              5.33333
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Primary/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              5,
              0.333333
            ],
            [
              13,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Primary/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#EDECEB",
        "line-width": {
          "stops": [
            [
              5,
              0.266667
            ],
            [
              13,
              6.4
            ]
          ]
        }
      }
    },
    {
      "id": "Region Roads/Tunnel",
      "type": "line",
      "source": "esri",
      "source-layer": "Region Roads",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 5,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(237,236,235,0.5)",
        "line-width": {
          "stops": [
            [
              5,
              0.333333
            ],
            [
              13,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Pedestrian Overpass/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Pedestrian Overpass",
      "minzoom": 11,
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B3B0AC",
        "line-width": {
          "stops": [
            [
              11,
              1.33333
            ],
            [
              17,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "Pedestrian Overpass/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Pedestrian Overpass",
      "minzoom": 11,
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#CCC9C4",
        "line-width": {
          "stops": [
            [
              11,
              0.888889
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Roadbed Edge",
      "type": "line",
      "source": "esri",
      "source-layer": "Roadbed Edge",
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              13,
              0.133333
            ],
            [
              17,
              1.66667
            ]
          ]
        }
      }
    },
    {
      "id": "NYC Airport Runways",
      "type": "fill",
      "source": "esri",
      "source-layer": "NYC Airport Runways",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#B5B4B0"
      }
    },
    {
      "id": "Region Airports/Airport grounds",
      "type": "fill",
      "source": "esri",
      "source-layer": "Region Airports",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#EDECEB",
        "fill-opacity": 0.5,
        "fill-outline-color": "#B2B2B2"
      }
    },
    {
      "id": "Region Airports/Airport runways",
      "type": "fill",
      "source": "esri",
      "source-layer": "Region Airports",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "layout": {
        
      },
      "paint": {
        "fill-color": "#B5B4B0",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "Rail Stations:2/Elevated station",
      "type": "fill",
      "source": "esri",
      "source-layer": "Rail Stations:2",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 12,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#828282"
      }
    },
    {
      "id": "Rail Stations:2/Station",
      "type": "fill",
      "source": "esri",
      "source-layer": "Rail Stations:2",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 12,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#828282"
      }
    },
    {
      "id": "Rail Stations:2/Station Entrance",
      "type": "fill",
      "source": "esri",
      "source-layer": "Rail Stations:2",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 12,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#4E4E4E"
      }
    },
    {
      "id": "Rail Lines/Abandoned railroad",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
          "stops": [
            [
              8,
              0.133333
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Rail Lines/Elevated Railroad/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              8,
              0.133333
            ],
            [
              13,
              0.133333
            ],
            [
              17,
              13.3333
            ],
            [
              21,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "Rail Lines/Elevated Railroad/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#CCCCCC",
        "line-width": {
          "stops": [
            [
              8,
              0.1
            ],
            [
              13,
              0.1
            ],
            [
              17,
              10
            ],
            [
              21,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "Rail Lines/Elevated Railroad/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              8,
              0.05
            ],
            [
              13,
              0.05
            ],
            [
              17,
              5
            ],
            [
              21,
              7.5
            ]
          ]
        }
      }
    },
    {
      "id": "Rail Lines/Elevated Railroad/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-dasharray": [
          1.66667,
          1.66667
        ],
        "line-width": {
          "stops": [
            [
              8,
              0.03
            ],
            [
              13,
              0.03
            ],
            [
              17,
              3
            ],
            [
              21,
              4.5
            ]
          ]
        }
      }
    },
    {
      "id": "Rail Lines/Railroad/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#B2B2B2",
        "line-width": {
          "stops": [
            [
              8,
              0.133333
            ],
            [
              17,
              2.66667
            ]
          ]
        }
      }
    },
    {
      "id": "Rail Lines/Railroad/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Rail Lines",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#FFFFFF",
        "line-dasharray": [
          1.66667,
          1.66667
        ],
        "line-width": {
          "stops": [
            [
              8,
              0.08
            ],
            [
              17,
              1.6
            ]
          ]
        }
      }
    },
    {
      "id": "The High Line",
      "type": "fill",
      "source": "esri",
      "source-layer": "The High Line",
      "layout": {
        
      },
      "paint": {
        "fill-color": "#96A797"
      }
    },
    {
      "id": "Buildings/Building/2",
      "type": "fill",
      "source": "esri",
      "source-layer": "Buildings",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "rgba(166,166,151,0.8)",
        "fill-translate": [
          0.5,
          0.5
        ]
      }
    },
    {
      "id": "Buildings/Building/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Buildings",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#DCDBDA"
      }
    },
    {
      "id": "Buildings/Building/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Buildings",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#D0CFCF",
        "line-width": 1
      }
    },
    {
      "id": "Buildings/Landmark Building/2",
      "type": "fill",
      "source": "esri",
      "source-layer": "Buildings",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "rgba(77,76,74,0.8)",
        "fill-translate": [
          0.5,
          0.5
        ]
      }
    },
    {
      "id": "Buildings/Landmark Building/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Buildings",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        
      },
      "paint": {
        "fill-color": "#B3AFA4"
      }
    },
    {
      "id": "Buildings/Landmark Building/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Buildings",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#999793",
        "line-width": 0.433333
      }
    },
    {
      "id": "Mass Transit/Subway Entrances",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Subway Entrances",
      "minzoom": 17,
      "layout": {
        "icon-image": "Mass Transit/Subway Entrances",
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-color": "#F2F1F0"
      }
    },
    {
      "id": "Traffic Direction/With",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Traffic Direction",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "icon-image": "Traffic Direction/With",
        "icon-rotate": -90,
        "symbol-spacing": 133.333,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-color": "#969591"
      }
    },
    {
      "id": "Traffic Direction/Against",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Traffic Direction",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "icon-image": "Traffic Direction/Against",
        "icon-rotate": -270,
        "symbol-spacing": 133.333,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-color": "#969591"
      }
    },
    {
      "id": "Traffic Direction/Two-Way/1",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Traffic Direction",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "icon-image": "Traffic Direction/Two-Way/1",
        "symbol-spacing": 133.333,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-color": "#969591"
      }
    },
    {
      "id": "Traffic Direction/Two-Way/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Traffic Direction",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "icon-image": "Traffic Direction/Two-Way/0",
        "symbol-spacing": 133.333,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true
      },
      "paint": {
        "icon-color": "#969591"
      }
    },
    {
      "id": "Boundaries/County Boundaries/1",
      "type": "line",
      "source": "esri",
      "source-layer": "County Boundaries",
      "minzoom": 7,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#E0DBD5",
        "line-width": 1
      }
    },
    {
      "id": "Boundaries/County Boundaries/0",
      "type": "line",
      "source": "esri",
      "source-layer": "County Boundaries",
      "minzoom": 7,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#686868",
        "line-dasharray": [
          4,
          6
        ],
        "line-width": 0.666667
      }
    },
    {
      "id": "Boundaries/State Boundaries/1",
      "type": "line",
      "source": "esri",
      "source-layer": "State Boundaries",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#E0DCD7",
        "line-width": 4
      }
    },
    {
      "id": "Boundaries/State Boundaries/0",
      "type": "line",
      "source": "esri",
      "source-layer": "State Boundaries",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#686868",
        "line-dasharray": [
          6,
          4
        ],
        "line-width": 1.33333
      }
    },
    {
      "id": "Boundaries/International Boundaries/1",
      "type": "line",
      "source": "esri",
      "source-layer": "International Boundaries",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#E1E1E1",
        "line-width": 2
      }
    },
    {
      "id": "Boundaries/International Boundaries/0",
      "type": "line",
      "source": "esri",
      "source-layer": "International Boundaries",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#686868",
        "line-dasharray": [
          7,
          7
        ],
        "line-width": 1.33333
      }
    },
    {
      "id": "Alternate Symbols/label/Light Gray Alt",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class8",
        8
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name8}",
        "icon-image": "Alternate Symbols/Light Gray Alt/{_len8}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Night Interstate",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class2",
        2
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name2}",
        "icon-image": "Alternate Symbols/Night Interstate/{_len2}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Light Gray Interstate",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class7",
        7
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name7}",
        "icon-image": "Alternate Symbols/Light Gray Interstate/{_len7}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Dark Gray Alt Shield",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class6",
        6
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name6}",
        "icon-image": "Alternate Symbols/Dark Gray Alt Shield/{_len6}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Dark Gray Interstate",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class5",
        5
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name5}",
        "icon-image": "Alternate Symbols/Dark Gray Interstate/{_len5}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Navigation Interstate",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class4",
        4
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name4}",
        "icon-image": "Alternate Symbols/Navigation Interstate/{_len4}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Night Alt Shield",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class3",
        3
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name3}",
        "icon-image": "Alternate Symbols/Night Alt Shield/{_len3}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Topo Interstate",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name}",
        "icon-image": "Alternate Symbols/Topo Interstate/{_len}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Alternate Symbols/label/Topo Alt Sheild",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Alternate Symbols",
      "filter": [
        "==",
        "_label_class1",
        1
      ],
      "layout": {
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.6667,
        "text-anchor": "bottom-left",
        "text-justify": "left",
        "text-offset": [
          0.0883883,
          0.211612
        ],
        "text-field": "{_name1}",
        "icon-image": "Alternate Symbols/Topo Alt Sheild/{_len1}",
        "icon-keep-upright": true,
        "icon-offset": [
          0.707107,
          1.69289
        ]
      },
      "paint": {
        "text-color": "#000000"
      }
    },
    {
      "id": "Mass Transit/Subway Stations",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Subway Stations",
      "minzoom": 12,
      "layout": {
        "icon-image": "Mass Transit/Subway Stations",
        "icon-allow-overlap": true,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 12,
        "text-anchor": "top",
        "text-offset": [
          0,
          1.04444
        ],
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "icon-color": "#4E4E4E",
        "text-color": "#333333",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Mass Transit/Rail Stations:1",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Rail Stations:1",
      "minzoom": 12,
      "layout": {
        "icon-image": "Mass Transit/Rail Stations:1",
        "icon-allow-overlap": true,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 12,
        "text-anchor": "top",
        "text-offset": [
          0,
          1.04444
        ],
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "icon-color": "#4E4E4E",
        "text-color": "#333333",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Mass Transit/Bus Terminals",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Bus Terminals",
      "minzoom": 12,
      "layout": {
        "icon-image": "Mass Transit/Bus Terminals",
        "icon-allow-overlap": true,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 12,
        "text-anchor": "top",
        "text-offset": [
          0,
          1.04444
        ],
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "icon-color": "#4E4E4E",
        "text-color": "#333333",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "NYC Roads/label/Ferry Routes",
      "type": "symbol",
      "source": "esri",
      "source-layer": "NYC Roads/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 288,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 10,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#212B30",
        "text-halo-color": "#E8F6FF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Hydrography/label/Medium Ponds and Lakes",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Hydrography/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Source Serif Pro Italic"
        ],
        "text-size": 12,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#212B30",
        "text-halo-color": "#E8F6FF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Hydrography/label/Large Ponds and Lakes",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Hydrography/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 9,
      "layout": {
        "text-font": [
          "Source Serif Pro Italic"
        ],
        "text-size": 12,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#212B30",
        "text-halo-color": "#E8F6FF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Water Line Labels/label/Rivers and Streams",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water Line Labels/label",
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 288,
        "text-font": [
          "Source Serif Pro Italic"
        ],
        "text-size": 11,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#212B30",
        "text-halo-color": "#E8F6FF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Airports/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Airports/label",
      "minzoom": 10,
      "layout": {
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#595957",
        "text-halo-color": "#E0DFDA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "NYC Airport Grounds/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "NYC Airport Grounds/label",
      "minzoom": 10,
      "layout": {
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#595957",
        "text-halo-color": "#E0DFDA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Roads/label/Paths",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Roads/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 13,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 9,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#828282",
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Roads/label/Streets",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Roads/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 13,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 10,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Roads/label/Major Streets",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Roads/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 11,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "NYC Roads/label/Paths",
      "type": "symbol",
      "source": "esri",
      "source-layer": "NYC Roads/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 192,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 9,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#828282",
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Parks/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Parks/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Source Sans Pro Italic"
        ],
        "text-size": 11,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#171D17",
        "text-halo-color": "#C8DEC9",
        "text-halo-width": 1
      }
    },
    {
      "id": "Addresses/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Addresses",
      "minzoom": 17,
      "layout": {
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 10,
        "text-anchor": "center",
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#828282",
        "text-halo-color": "#DFE0DA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "NYC Roads/label/Streets",
      "type": "symbol",
      "source": "esri",
      "source-layer": "NYC Roads/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 13,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 10,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "NYC Roads/label/Major Streets",
      "type": "symbol",
      "source": "esri",
      "source-layer": "NYC Roads/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 11,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "NYC Roads/label/Highways",
      "type": "symbol",
      "source": "esri",
      "source-layer": "NYC Roads/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 9,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Water Area Labels/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water Area Labels",
      "layout": {
        "text-font": [
          "Source Serif Pro Italic"
        ],
        "text-size": 12,
        "text-anchor": "center",
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#212B30",
        "text-halo-color": "#E8F6FF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Road Labels/label/Secondary Alt Name",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Road Labels/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 9,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Road Labels/label/Primary Alt Name",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Road Labels/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 9,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#EDECEB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Road Labels/label/State and County Route",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Road Labels/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "Source Sans Pro Bold"
        ],
        "text-size": 10,
        "text-field": "{_name}",
        "icon-image": "Region Road Labels/State and County Route/{_len}",
        "icon-keep-upright": true,
        "icon-rotation-alignment": "viewport",
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#3F3F3D",
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Road Labels/label/US Route",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Road Labels/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 9,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "Source Sans Pro Bold"
        ],
        "text-size": 10,
        "text-field": "{_name}",
        "icon-image": "Region Road Labels/US Route/{_len}",
        "icon-keep-upright": true,
        "icon-rotation-alignment": "viewport",
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#3F3F3D",
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Region Road Labels/label/Interstate Shield",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Region Road Labels/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 6,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 384,
        "text-font": [
          "Source Sans Pro Bold"
        ],
        "text-size": 10,
        "text-field": "{_name}",
        "icon-image": "Region Road Labels/Interstate Shield/{_len}",
        "icon-keep-upright": true,
        "icon-rotation-alignment": "viewport",
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#3F3F3D",
        "text-halo-color": "#FFFFFF",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "City Labels/label/Region",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City Labels",
      "filter": [
        "==",
        "_label_class1",
        1
      ],
      "maxzoom": 16,
      "layout": {
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 14,
        "text-anchor": "center",
        "text-field": "{_name1}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#E6E1DB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Boundaries/Counties/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Counties",
      "minzoom": 7,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Source Sans Pro Regular"
        ],
        "text-size": 11,
        "text-anchor": "center",
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#828282",
        "text-halo-color": "#F5F0EA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Boundaries/States/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "States",
      "layout": {
        "text-font": [
          "Source Sans Pro Bold"
        ],
        "text-size": 16,
        "text-anchor": "center",
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#828282",
        "text-halo-color": "#F5F0EA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Boundaries/Countries/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Countries",
      "layout": {
        "text-font": [
          "Source Sans Pro Bold"
        ],
        "text-size": 18,
        "text-anchor": "center",
        "text-letter-spacing": 0.4,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#F5F0EA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Buildings/label/Buildings",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Buildings/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 16,
      "layout": {
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 12,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#676666",
        "text-halo-color": "#E6E4E3",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "Buildings/label/Landmark Building",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Buildings/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 15,
      "layout": {
        "text-font": [
          "NimbusSanL Regular"
        ],
        "text-size": 12,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4D4C4A",
        "text-halo-color": "#CCC7BB",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "The High Line/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "The High Line/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Source Sans Pro Italic"
        ],
        "text-size": 11,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#171D17",
        "text-halo-color": "#C8DEC9",
        "text-halo-width": 1
      }
    },
    {
      "id": "Neighborhoods/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Neighborhoods",
      "maxzoom": 16,
      "layout": {
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 14,
        "text-anchor": "center",
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#F5F0EA",
        "text-halo-width": 1.33333
      }
    },
    {
      "id": "City Labels/label/NYC",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City Labels",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "maxzoom": 16,
      "layout": {
        "text-font": [
          "NimbusSanL Bold"
        ],
        "text-size": 14,
        "text-anchor": "center",
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#F5F0EA",
        "text-halo-width": 1.33333
      }
    }
  ]
};
