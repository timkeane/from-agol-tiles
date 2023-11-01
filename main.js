import Map from 'ol/Map';
import View from 'ol/View';
import Source from 'ol/source/Vector';
import Layer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';
import {mvtLayer} from './fromAGOL';

proj4.defs([
  ['EPSG:2263', '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs'],
  ['EPSG:6539', '+proj=lcc +lat_1=40.66666666666666 +lat_2=41.03333333333333 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs']
]);
register(proj4);

const serviceUrl = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer';

mvtLayer(serviceUrl).then(layer => {

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

  const resolutions = layer.getSource().getTileGrid().getResolutions();

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
