import {applyStyle, applyBackground} from 'ol-mapbox-style';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileSource from 'ol/source/VectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import Source from 'ol/source/Vector';
import Layer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import MVT from 'ol/format/MVT';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import {getCenter} from 'ol/extent';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';
import tileGridFromAGOL from './tileGridFromAGOL';

proj4.defs([
  ['EPSG:2263', '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs'],
  ['EPSG:6539', '+proj=lcc +lat_1=40.66666666666666 +lat_2=41.03333333333333 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs']
]);
register(proj4);

const styleUrl = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/resources/styles/root.json';
const serviceUrl = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/';

tileGridFromAGOL(serviceUrl).then(tileGrid => {

  const resolutions = tileGrid.getResolutions();

  const center = getCenter(tileGrid.getExtent());

  const layer = new VectorTileLayer({
    declutter: true,
    source: new VectorTileSource({
      format: new MVT(),
      projection: 'EPSG:2263',
      tileGrid,
      url: 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/tile/{z}/{y}/{x}.pbf'
    })
  });

  applyStyle(layer, styleUrl, '', {resolutions, updateSource: false});
  applyBackground(layer, styleUrl);

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
      center: [994955, 149780],
      zoom: 20
    }),
    layers: [layer, building]
  });

});
