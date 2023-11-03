import Map from 'ol/Map';
import View from 'ol/View';
import TileGrid from 'ol/tilegrid/TileGrid';
import VectorTileSource from 'ol/source/VectorTile';
import ImageTileSource from 'ol/source/Tile';
import VectorTileLayer from 'ol/layer/VectorTile';
import ImageTileLayer from 'ol/layer/Tile';
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

function createImageLayer(serviceUrl, serviceDefinition) {
  return new Promise((resolve, reject) => {
    const layer = new ImageTileLayer({
      declutter: true,
      source: new VectorTileSource({
        projection: `EPSG:${tileInfo.spatialReference.latestWkid}`,
        tileGrid: getGetTileGrid(serviceDefinition),
        urls: getTileUrls(serviceUrl, serviceDefinition)
      })
    });
    resolve(layer);
  }).catch(err => console.error(`Failed to create TileLayer from service ${serviceUrl}`, err));
}

function makeAbsoluteUrls(styleUrl, mbStyle) {
  const url = styleUrl.substring(0, styleUrl.lastIndexOf('/'));
  const glyphs = mbStyle.glyphs;
  const sprites = mbStyle.sprite;
  if (glyphs.indexOf('http') === -1) {
    mbStyle.glyphs = removeDoubleSlash(`${url}/${glyphs}`);
  }
  if (sprites.indexOf('http') === -1) {
    mbStyle.sprite = removeDoubleSlash(`${url}/${sprites}`);    
  }
}

function createVectorLayer(serviceUrl, serviceDefinition) {
  return new Promise((resolve, reject) => {
    const tileInfo = serviceDefinition.tileInfo;
    const tileGrid = getGetTileGrid(serviceDefinition);
    const styleUrl = removeDoubleSlash(`${serviceUrl}/resources/styles/root.json`);
    const options = {
      resolutions: tileGrid.getResolutions(),
      updateSource: false
    };
    const layer = new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        format: new MVT(),
        projection: `EPSG:${tileInfo.spatialReference.latestWkid}`,
        tileGrid,
        urls: getTileUrls(serviceUrl, serviceDefinition)
      })
    });
    fetch(styleUrl).then(response => {
      response.json().then(mbStyle => {
        makeAbsoluteUrls(styleUrl, mbStyle);
        applyStyle(layer, mbStyle, '', options);
        applyBackground(layer, mbStyle);
        layer._mbStyle = mbStyle;
        resolve(layer);
      });
    });
  }).catch(err => console.error(`Failed to create VectorTileLayer from service ${serviceUrl}`, err));
}

export function createLayer(serviceUrl) {
  return new Promise((resolve, reject) => {
    getServiceDefinition(serviceUrl).then(serviceDefinition => {
      if (serviceDefinition.tileInfo.format === 'pbf') {
        resolve(createVectorLayer(serviceUrl, serviceDefinition));
      } else {
        resolve(createImageLayer(serviceUrl, serviceDefinition));
      }
    });
  });
}

export function createBasemap(serviceUrl) {
  return new Promise((resolve, reject) => {
    createLayer(serviceUrl).then(layer => {
      const mbStyle = layer._mbStyle;
      const source = layer.getSource();
      const tileGrid = source.getTileGrid();
      const projection = source.getProjection();
      const resolutions = tileGrid.getResolutions();
      const extent = tileGrid.getExtent();
      const zoom = mbStyle?.zoom !== undefined ? mbStyle.zoom : 9;
      let center = mbStyle?.center;
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
    });
  }).catch(err => console.error(`Failed to create Map from service ${serviceUrl}`, err));
}
