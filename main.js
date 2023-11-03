import Source from 'ol/source/Vector';
import Layer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import {createBasemap, createLayer} from './fromAgolTiles';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';

proj4.defs([
  ['EPSG:2263', '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs']
]);
register(proj4);

const vectorTileServiceUrl = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_2263/VectorTileServer/';
const imageTileServiceUrl = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/NYC_Orthos_-_2020/MapServer/?f=pjson';

createBasemap(vectorTileServiceUrl).then(map => {
  createLayer(imageTileServiceUrl).then(photoLayer => {

    photoLayer.setVisible(false);
    map.addLayer(photoLayer);

    const source = new Source({
      format: new GeoJSON({
        dataProjection: 'EPSG:2263',
        featureProjection: 'EPSG:2263'
      }),
      url: './building.json'
    });
    const blackStyle = new Style({
      stroke: new Stroke({
        width: 2,
        lineDash: [5, 5],
        color: 'black'
      })
    });
    const whiteStyle = new Style({
      stroke: new Stroke({
        width: 3,
        lineDash: [5, 5],
        color: 'white'
      })
    });

    const buildingLayer = new Layer({source, style: blackStyle});

    map.addLayer(buildingLayer);
    map.getView().setCenter([994955, 149780]);
    map.getView().setZoom(18);
  
    document.getElementById('toggle').addEventListener('click', () => {
      const visible = !photoLayer.getVisible();
      photoLayer.setVisible(visible);
      buildingLayer.setStyle(visible ? whiteStyle : blackStyle);
    });

  });
});
