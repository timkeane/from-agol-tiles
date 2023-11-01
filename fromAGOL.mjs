import Map from 'ol/Map';
import View from 'ol/View';
import TileGrid from 'ol/tilegrid/TileGrid';
import Source from 'ol/source/VectorTile';
import Layer from 'ol/layer/VectorTile';
import MVT from 'ol/format/MVT';
import {getCenter} from 'ol/extent';
import {applyStyle, applyBackground} from 'ol-mapbox-style';

export function tileGridInfo(serviceUrl) {
  return new Promise((resolve, reject) => {
    fetch(serviceUrl).then(response => {
      response.json().then(serviceDef => {
        const esriExtent = serviceDef.fullExtent;
        const extent = [esriExtent.xmin, esriExtent.ymin, esriExtent.xmax, esriExtent.ymax];
        const tileInfo = serviceDef.tileInfo;
        const projection = `EPSG:${tileInfo.spatialReference.latestWkid}`;
        const origin = [tileInfo.origin.x, tileInfo.origin.y];
        const lods = tileInfo.lods;
        const tileSize = [tileInfo.cols, tileInfo.rows];
        const resolutions = [];
        lods.forEach(lod => {
          resolutions.push(lod.resolution);
        });
        const tileGrid = new TileGrid({origin, extent, tileSize, resolutions});
        resolve({tileGrid, projection});
      });
    }).catch(err => {
      console.error(`Failed to create TileGid from service ${serviceUrl}`, err);
    });
  });
}

export function mvtLayer(serviceUrl) {
  return new Promise((resolve, reject) => {
    tileGridInfo(serviceUrl).then(gridInfo => {
      const tileGrid = gridInfo.tileGrid;
      const styleUrl =`${serviceUrl}/resources/styles/root.json`;
      const options =  {
        resolutions: tileGrid.getResolutions(),
        updateSource: false
      };
     const layer = new Layer({
        declutter: true,
        source: new Source({
          format: new MVT(),
          projection: gridInfo.projection,
          tileGrid: tileGrid,
          url: `${serviceUrl}/tile/{z}/{y}/{x}.pbf`
        })
      });
      applyStyle(layer, styleUrl, '', options);
      applyBackground(layer, styleUrl);
      resolve(layer);
    }).catch(err => {
      console.error(`Failed to create Layer from service ${serviceUrl}`, err);
    });
  });
}

export function mvtBasemap(serviceUrl) {
  return new Promise((resolve, reject) => {
    mvtLayer(serviceUrl).then(layer => {
      const source = layer.getSource();
      const tileGrid = source.getTileGrid();
      const projection = source.getProjection();
      const resolutions = tileGrid.getResolutions();
      const extent = tileGrid.getExtent();
      const map = new Map({
        target: 'map',
        view: new View({
          projection,
          maxResolution: resolutions[0],
          minResolution: resolutions[resolutions.length - 1],
          center: getCenter(extent),
          zoom: 9
        }),
        layers: [layer]
      });
      resolve(map);    
    }).catch(err => {
      console.error(`Failed to create Map from service ${serviceUrl}`, err);
    });
  });
}
