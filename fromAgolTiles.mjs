import Map from 'ol/Map';
import View from 'ol/View';
import TileGrid from 'ol/tilegrid/TileGrid';
import VectorTileSource from 'ol/source/VectorTile';
import XYZSource from 'ol/source/XYZ';
import VectorTileLayer from 'ol/layer/VectorTile';
import ImageTileLayer from 'ol/layer/Tile';
import MVT from 'ol/format/MVT';
import {getCenter} from 'ol/extent';
import {applyStyle, applyBackground} from 'ol-mapbox-style';
import {register} from 'ol/proj/proj4';
import Point from 'ol/geom/Point';

function getJsonServiceUrl(serviceUrl) {
  const url = new URL(serviceUrl);
  const search = url.search;
  if (!search) {
    return `${serviceUrl}?f=pjson`;
  } else if (search.indexOf('f=pjson') === -1) {
    return `${serviceUrl}&f=pjson`;
  }
  return serviceUrl;
}

function makeAbsoluteUrlFromRelative(baseUrl, relativePath) {
  if (relativePath.indexOf('http') === -1) {
    let url = `${baseUrl.split('?')[0]}`;
    if (url === baseUrl) {
      url = `${url.substring(0, url.lastIndexOf('/'))}`;
    }
    if (url.lastIndexOf('/') !== url.length - 1) {
      url = `${url}/`;
    } 
    return `${url}${relativePath}`;
  }
  return relativePath;
}

function getServiceDefinition(serviceUrl) {
  return new Promise((resolve, reject) => {
    fetch(serviceUrl).then(response => {
      response.json().then(serviceDefinition => {
        resolve(serviceDefinition);
      });
    }).catch(error => {
      const message = `Failed to create get service definition from service ${serviceUrl}`;
      console.error(message, error);
      reject({message, error});
    });
  });
}

function getTileUrls(serviceUrl, serviceDefinition) {
  const tileUrls = [];
  const tiles = serviceDefinition.tiles;
  if (tiles) {
    tiles.forEach(url => {
      tileUrls.push(makeAbsoluteUrlFromRelative(serviceUrl, url));
    });
    return tileUrls;  
  }
  let format = serviceDefinition.tileInfo.format;
  format = format === 'MIXED' ? '' : `.${format}`;
  return [makeAbsoluteUrlFromRelative(serviceUrl, `tile/{z}/{y}/{x}${format}`)];
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

function createImageLayer(serviceDefinition, serviceUrl) {
  return new Promise((resolve, reject) => {
    const tileInfo = serviceDefinition.tileInfo;
    const layer = new ImageTileLayer({
      declutter: true,
      source: new XYZSource({
        projection: `EPSG:${tileInfo.spatialReference.latestWkid}`,
        tileGrid: getGetTileGrid(serviceDefinition),
        urls: getTileUrls(serviceUrl, serviceDefinition)
      })
    });
    resolve(layer);
  }).catch(error => {
    const message = `Failed to create ImageTileLayer from service ${serviceUrl}`;
    console.error(message, error);
    reject({message, error});
  });
}

function createVectorLayer(serviceDefinition, serviceUrl, styleUrl) {
  return new Promise((resolve, reject) => {
    const tileInfo = serviceDefinition.tileInfo;
    const tileGrid = getGetTileGrid(serviceDefinition);
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

    styleUrl = styleUrl || makeAbsoluteUrlFromRelative(serviceUrl, 'resources/styles/root.json');
  
    fetch(styleUrl).then(response => {
      response.json().then(mbStyle => {
        mbStyle.glyphs = makeAbsoluteUrlFromRelative(styleUrl, mbStyle.glyphs);
        mbStyle.sprite = makeAbsoluteUrlFromRelative(styleUrl, mbStyle.sprite);
        mbStyle.metadata = mbStyle.metadata || {};
        mbStyle.metadata['ol:webfonts'] = mbStyle.metadata['ol:webfonts'] || makeAbsoluteUrlFromRelative(serviceUrl, 'resources/fonts/{font-family}/{fontweight}{-fontstyle}.css');
        applyStyle(layer, mbStyle, '', options);
        applyBackground(layer, mbStyle);
        layer._mbStyle = mbStyle;
        resolve(layer);
      });
    });
  }).catch(error => {
    const message = `Failed to create VectorTileLayer from service ${serviceUrl}`;
    console.error(message, error);
  });
}

export function createLayer(options) {
  const serviceUrl = getJsonServiceUrl(options.serviceUrl);
  const styleUrl = options.styleUrl;
  register(options.proj4);
  return new Promise((resolve, reject) => {
    getServiceDefinition(serviceUrl).then(serviceDefinition => {
      if (serviceDefinition.tileInfo.format === 'pbf') {
        resolve(createVectorLayer(serviceDefinition, serviceUrl, styleUrl));
      } else {
        resolve(createImageLayer(serviceDefinition, serviceUrl));
      }
    });
  });
}

export function createBasemap(options) {
  const serviceUrl = getJsonServiceUrl(options.serviceUrl);
  const controls = options.controls;
  let target = typeof options.target === 'string' ? document.getElementById(options.target) : options.target;
  return new Promise((resolve, reject) => {
    createLayer(options).then(layer => {
      const mbStyle = layer._mbStyle;
      const source = layer.getSource();
      const tileGrid = source.getTileGrid();
      const projection = source.getProjection();
      const resolutions = tileGrid.getResolutions();
      const extent = tileGrid.getExtent();
      let zoom = mbStyle.zoom;
      let center = mbStyle.center;
      if (!zoom) {
        zoom = 9;
      }
      if (center) {
        const point = new Point(center);
        center = point.transform('EPSG:4326', projection).getCoordinates();
      } else {
        center = getCenter(extent);
      }
      const map = new Map({
        target,
        controls,
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
  }).catch(error => {
    const message = `Failed to create Map from service ${serviceUrl}`;
    console.error(message, error);
  });
}
