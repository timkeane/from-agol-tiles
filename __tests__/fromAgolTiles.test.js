import {beforeEach, expect, test, vi} from 'vitest';
import {createLayer, createBasemap} from '../fromAgolTiles';
import {applyStyle, applyBackground} from 'ol-mapbox-style';
import VectorTileSource from 'ol/source/VectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import ImageTileSource from 'ol/source/XYZ';
import ImageTileLayer from 'ol/layer/Tile';
import {getCenter} from 'ol/extent';
import proj4 from 'proj4';
import expectedVectorTileInfo from './expectedVectorTileInfo';
import expectedImageTileInfo from './expectedImageTileInfo';
import mbStyle from './mbStyle';

proj4.defs([
  ['EPSG:2263', '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs']
]);

vi.mock('ol-mapbox-style', () => {
  return {
    applyStyle: vi.fn(),
    applyBackground: vi.fn()
  }
});

let agolServiceDefinition;
global.fetch = vi.fn(url => {
  if (url.indexOf('style') === -1) {
    return Promise.resolve({
      json: () => Promise.resolve(agolServiceDefinition)
    });
  } 
  return Promise.resolve({
    json: () => Promise.resolve(mbStyle)
  });
});

function clearMocks() {
  global.fetch.mockClear();
  applyStyle.mockClear();
  applyBackground.mockClear();
}

beforeEach(async () => {
  document.body.innerHTML = '<div id="map"></div>';
  await clearMocks();
})

test('createLayer - vector', async () => {
  expect.assertions(18);

  try {

    agolServiceDefinition = expectedVectorTileInfo.serviceDefinition;
    const layer = await   createLayer({
      serviceUrl: 'http://mock-host/mock-path/',
      proj4
    });
    
    const source = layer.getSource();
    const grid = source.getTileGrid();

    expect(fetch.mock.calls.length).toBe(2);
    expect(fetch.mock.calls[0][0]).toBe('http://mock-host/mock-path/?f=pjson');
    expect(fetch.mock.calls[1][0]).toBe('http://mock-host/mock-path/resources/styles/root.json');

    expect(layer instanceof VectorTileLayer).toBe(true);

    expect(source instanceof VectorTileSource).toBe(true);
    expect(source.getUrls()).toStrictEqual(['http://mock-host/mock-path/tile/{z}/{y}/{x}.pbf']);
    
    expect(source.getProjection().getCode()).toBe('EPSG:2263');

    expect(grid.getResolutions()).toStrictEqual(expectedVectorTileInfo.expectedResolutions);
    expect(grid.getExtent()).toStrictEqual(expectedVectorTileInfo.expectedExtent);
    expect(grid.getOrigin()).toStrictEqual(expectedVectorTileInfo.expectedOrigin);

    expect(applyStyle.mock.calls.length).toBe(1);
    expect(applyStyle.mock.calls[0][0]).toBe(layer);
    expect(applyStyle.mock.calls[0][1]).toBe(mbStyle);
    expect(applyStyle.mock.calls[0][2]).toBe('');
    expect(applyStyle.mock.calls[0][3]).toStrictEqual({
      resolutions: expectedVectorTileInfo.expectedResolutions,
      updateSource: false
    });

    expect(applyBackground.mock.calls.length).toBe(1);
    expect(applyBackground.mock.calls[0][0]).toBe(layer);
    expect(applyBackground.mock.calls[0][1]).toBe(mbStyle);

  } catch (error) {
    console.error('Error in createLayer - vector test:', error);
    expect(error).toBeNull(); // Add this line to explicitly fail the test
  }
});

test('createLayer - image', async () => {
  expect.assertions(11);
  
  try {

    agolServiceDefinition = expectedImageTileInfo.serviceDefinition;
    const layer = await createLayer({
      serviceUrl: 'http://mock-host/mock-path/',
      proj4
    });

    const source = layer.getSource();
    const grid = source.getTileGrid();

    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toBe('http://mock-host/mock-path/?f=pjson');

    expect(layer instanceof ImageTileLayer).toBe(true);
    expect(source instanceof ImageTileSource).toBe(true);
    expect(source.getUrls()).toStrictEqual(['http://mock-host/mock-path/tile/{z}/{y}/{x}']);
    
    expect(source.getProjection().getCode()).toBe('EPSG:3857');

    expect(grid.getResolutions()).toStrictEqual(expectedImageTileInfo.expectedResolutions);
    expect(grid.getExtent()).toStrictEqual(expectedImageTileInfo.expectedExtent);
    expect(grid.getOrigin()).toStrictEqual(expectedImageTileInfo.expectedOrigin);

    expect(applyStyle.mock.calls.length).toBe(0);
    expect(applyBackground.mock.calls.length).toBe(0);

  } catch (error) {
    console.error('Error in createLayer - image test:', error);
    expect(error).toBeNull(); // Add this line to explicitly fail the test
  }
});

test('createBasemap - vector', async () => {
  expect.assertions(23);

  try {
    agolServiceDefinition = expectedVectorTileInfo.serviceDefinition;
    const map = await createBasemap({
      target: 'map', 
      serviceUrl: 'http://mock-host/mock-path/',
      proj4
    });

    const layer = map.getLayers().getArray()[0];
    const view = map.getView();
    const source = layer.getSource();
    const grid = source.getTileGrid();

    expect(map.getTargetElement()).toBe(document.getElementById('map'));
    expect(map.getLayers().getArray().length).toBe(1);
    expect(view.getProjection().getCode()).toBe('EPSG:2263');
    expect(view.getCenter()).toStrictEqual(getCenter(expectedVectorTileInfo.expectedExtent));
    expect(view.getZoom()).toBe(9);

    expect(fetch.mock.calls.length).toBe(2);
    expect(fetch.mock.calls[0][0]).toBe('http://mock-host/mock-path/?f=pjson');
    expect(fetch.mock.calls[1][0]).toBe('http://mock-host/mock-path/resources/styles/root.json');

    expect(layer instanceof VectorTileLayer).toBe(true);

    expect(source instanceof VectorTileSource).toBe(true);
    expect(source.getUrls()).toStrictEqual(['http://mock-host/mock-path/tile/{z}/{y}/{x}.pbf']);
    
    expect(source.getProjection().getCode()).toBe('EPSG:2263');

    expect(grid.getResolutions()).toStrictEqual(expectedVectorTileInfo.expectedResolutions);
    expect(grid.getExtent()).toStrictEqual(expectedVectorTileInfo.expectedExtent);
    expect(grid.getOrigin()).toStrictEqual(expectedVectorTileInfo.expectedOrigin);

    expect(applyStyle.mock.calls.length).toBe(1);
    expect(applyStyle.mock.calls[0][0]).toBe(layer);
    expect(applyStyle.mock.calls[0][1]).toBe(mbStyle);
    expect(applyStyle.mock.calls[0][2]).toBe('');
    expect(applyStyle.mock.calls[0][3]).toStrictEqual({
      resolutions: expectedVectorTileInfo.expectedResolutions,
      updateSource: false
    });

    expect(applyBackground.mock.calls.length).toBe(1);
    expect(applyBackground.mock.calls[0][0]).toBe(layer);
    expect(applyBackground.mock.calls[0][1]).toBe(mbStyle);

  } catch (error) {
    console.error('Error in createBasemap - vector test:', error);
    expect(error).toBeNull(); // Add this line to explicitly fail the test
  }

});
