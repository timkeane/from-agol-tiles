import Map from 'ol/Map';
import View from 'ol/View';
import TileGrid from 'ol/tilegrid/TileGrid';
import Source from 'ol/source/VectorTile';
import Layer from 'ol/layer/VectorTile';
import MVT from 'ol/format/MVT';
import {getCenter} from 'ol/extent';
import {applyStyle, applyBackground} from 'ol-mapbox-style';
import proj4 from 'proj4';

function removeDoubleSlash(url) {
  return url.replaceAll(/(?<!:)\/+/gm, '/');
}

export function getServiceDefinition(serviceUrl) {
  return new Promise((resolve, reject) => {
    fetch(serviceUrl).then(response => {
      response.json().then(serviceDefinition => {
        resolve(serviceDefinition);
      });
    }).catch(err => {
      console.error(`Failed to create get service definition from service ${serviceUrl}`, err);
    });
  });
}

function getTileUrls(serviceUrl, serviceDefinition) {
  const tileUrls = [];
  serviceDefinition.tiles.forEach(url => {
    if (url.indexOf('http') === -1) {
      tileUrls.push(removeDoubleSlash(`${serviceUrl}/${url}`));
    } else {
      tileUrls.push(removeDoubleSlash(url));
    }
  });
  return tileUrls;
}

function getGetTileGrid(serviceDefinition) {
  const esriExtent = serviceDefinition.fullExtent;
  const extent = [esriExtent.xmin, esriExtent.ymin, esriExtent.xmax, esriExtent.ymax];
  const tileInfo = serviceDefinition.tileInfo;
  const origin = [tileInfo.origin.x, tileInfo.origin.y];
  const lods = tileInfo.lods;
  const tileSize = [tileInfo.cols, tileInfo.rows];
  const resolutions = [];
  lods.forEach(lod => {
    resolutions.push(lod.resolution);
  });
  return new TileGrid({origin, extent, tileSize, resolutions});
}

export function mvtLayer(serviceUrl) {
  return new Promise((resolve, reject) => {
    getServiceDefinition(serviceUrl).then(serviceDefinition => {
      const tileInfo = serviceDefinition.tileInfo;
      const tileGrid = getGetTileGrid(serviceDefinition);
      const styleUrl = removeDoubleSlash(`${serviceUrl}/resources/styles/root.json`);
      const options = {
        resolutions: tileGrid.getResolutions(),
        updateSource: false
      };
     const layer = new Layer({
        declutter: true,
        source: new Source({
          format: new MVT(),
          projection: `EPSG:${tileInfo.spatialReference.latestWkid}`,
          tileGrid,
          urls: getTileUrls(serviceUrl, serviceDefinition)
        })
      });
      fetch(styleUrl).then(response => {
        response.json().then(style => {
          // TODO make relative URLs absolute to allow use of style object
          applyStyle(layer, styleUrl, '', options);
          applyBackground(layer, style);
          resolve({layer, style});
        });
      });
    }).catch(err => {
      console.error(`Failed to create Layer from service ${serviceUrl}`, err);
    });
  });
}

export function mvtBasemap(serviceUrl) {
  return new Promise((resolve, reject) => {
    mvtLayer(serviceUrl).then(styledLayer => {
      const layer = styledLayer.layer;
      const style = styledLayer.style;
      const source = layer.getSource();
      const tileGrid = source.getTileGrid();
      const projection = source.getProjection();
      const resolutions = tileGrid.getResolutions();
      const extent = tileGrid.getExtent();
      const zoom = style.zoom !== undefined ? style.zoom : 9;
      let center = style.center;
      if (center) {
        center = proj4('EPSG:4326', projection.getCode(), center);
      } else {
        center = getCenter(extent);
      }
      const map = new Map({
        target: 'map',
        view: new View({
          center,
          zoom,
          projection,
          maxResolution: resolutions[0],
          minResolution: resolutions[resolutions.length - 1]
        }),
        layers: [layer]
      });
      resolve(map);
    }).catch(err => {
      console.error(`Failed to create Map from service ${serviceUrl}`, err);
    });
  });
}
