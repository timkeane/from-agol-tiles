import TileGrid from 'ol/tilegrid/TileGrid';
import VectorTileSource from 'ol/source/VectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import MVT from 'ol/format/MVT';
import {applyStyle, applyBackground} from 'ol-mapbox-style';

export function tileGrid(serviceUrl) {
  return new Promise((resolve, reject) => {
    fetch(serviceUrl).then(response => {
      response.json().then(serviceDef => {
        const esriExtent = serviceDef.fullExtent;
        const extent = [esriExtent.xmin, esriExtent.ymin, esriExtent.xmax, esriExtent.ymax];
        const tileInfo = serviceDef.tileInfo;
        const origin = [tileInfo.origin.x, tileInfo.origin.y];
        const lods = tileInfo.lods;
        const tileSize = [tileInfo.cols, tileInfo.rows];
        const resolutions = [];
        lods.forEach(lod => {
          resolutions.push(lod.resolution);
        });
        resolve(new TileGrid({origin, extent, tileSize, resolutions}));
      });
    }).catch(err => {
      console.error(`Failed to create TileGid from service ${serviceUrl}`, err)
    });
  });
}

export function  mvtLayer(serviceUrl) {
  return new Promise((resolve, reject) => {
    tileGrid(serviceUrl).then(tileGrid => {
      const layer = new VectorTileLayer({
        declutter: true,
        source: new VectorTileSource({
          format: new MVT(),
          projection: 'EPSG:2263',
          tileGrid,
          url: `${serviceUrl}/tile/{z}/{y}/{x}.pbf`
        })
      });
      const styleUrl =`${serviceUrl}/resources/styles/root.json`;
      const options =  {
        resolutions: tileGrid.getResolutions(),
        updateSource: false
      };
      applyStyle(layer, styleUrl, '', options);
      applyBackground(layer, styleUrl);
      resolve(layer);
    }).catch(err => {
      console.error(`Failed to create VectorTileLayer from service ${serviceUrl}`, err)
    });
  });
}

