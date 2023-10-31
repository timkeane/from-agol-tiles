import olms from 'ol-mapbox-style';
import {applyStyle, applyBackground} from 'ol-mapbox-style';
import Map from 'ol/Map';
import View from 'ol/View';
import TileGrid from 'ol/tilegrid/TileGrid';
import {createXYZ} from 'ol/tilegrid';
import VectorTileSource from 'ol/source/VectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import Source from 'ol/source/Vector';
import Layer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import MVT from 'ol/format/MVT';
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Point from 'ol/geom/Point';
import {fromExtent} from 'ol/geom/Polygon';
import {getCenter} from 'ol/extent';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';

proj4.defs([
  ['EPSG:2263', '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs'],
  ['EPSG:6539', '+proj=lcc +lat_1=40.66666666666666 +lat_2=41.03333333333333 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs']
]);
register(proj4);

const url = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/resources/styles/root.json';

const center = [994936.9688, 149775.5801];

const extent = [
  338782.476762391,
  -282481.47145242174,
  1629359.451970779,
  502811.7364480441
];

const resolutions = [
  472746.7209434216,
  236373.3604717108,
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

const tileGrid = new TileGrid({
  origin: [-120038910.56151593, 113155737.97806966],
  tileSize: 512,
  extent,
  resolutions
});

const layer = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    format: new MVT(),
    projection: 'EPSG:2263',
    tileGrid,
    url: 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/tile/{z}/{y}/{x}.pbf'
  })
});

applyStyle(layer, url, '', {resolutions, updateSource: false});
applyBackground(layer, url);

const building = new Layer({
  source: new Source({
    format: new GeoJSON({
      dataProjection: 'EPSG:2263',
      featureProjection: 'EPSG:2263'
    }),
    url: './building.json'
  }),
  style: new Style({
    stroke: new Stroke({
      width: 1,
      lineDash: [5, 5],
      color: 'black'
    })
  })
});

const map = new Map({
  target: 'map2',
  view: new View({
    maxResolution: resolutions[0],
    minResolution: resolutions[resolutions.length - 1],
    projection: 'EPSG:2263',
    center,
    zoom: 20
  }),
  layers: [layer, building]
});
