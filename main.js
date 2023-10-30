import Map from 'ol/Map';
import {applyStyle, applyBackground} from 'ol-mapbox-style';
import TileGrid from 'ol/tilegrid/TileGrid';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View';
import VectorTileSource from 'ol/source/VectorTile';
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';

proj4.defs([
  ['EPSG:2263', '+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=ft +to_meter=0.3048006096012192 +no_defs'],
  ['EPSG:6539', '+proj=lcc +lat_1=40.66666666666666 +lat_2=41.03333333333333 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs']
]);
register(proj4);

// const url = 'style.json';
const url = 'https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/resources/styles/root.json?f=pjson';

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
  7.213542494864221
];

const layers = [
  'Ocean',
  'Land/Land_NYC',
  'Land/Land_Region',
  'NYC Airport Grounds',
  'Region Parks',
  'Plaza/Plaza',
  'Parks/Park Boundary',
  'Parks/Pool',
  'Parks/Skating Rink',
  'Parks/Greenstreets',
  'Parks/Running Track',
  'Parks/Court',
  'Parks/Golf Course',
  'Parks/Football Field',
  'Parks/Soccer Field',
  'Parks/Baseball Softball Field',
  'NYC Open Space',
  'Inland Hydrography',
  'Region Hydrography/Water',
  'Region Hydrography/Swamp or Marsh',
  'Coastal Hydrography/Wetland',
  'Coastal Hydrography/Beach/1',
  'Coastal Hydrography/Beach/0',
  'Sidewalks/Elevated Sidewalk/1',
  'Sidewalks/Elevated Sidewalk/0',
  'Sidewalks/Sidewalk',
  'Parking Lots',
  'Roadbeds/Elevated Roadbed/1',
  'Roadbeds/Roadbed/1',
  'Roadbeds/Below Grade Roadbed/1',
  'Roadbeds/Below Grade Roadbed/0',
  'Roadbeds/Roadbed/0',
  'Roadbeds/Elevated Roadbed/0',
  'Roadbeds/Tunnel/2',
  'Roadbeds/Tunnel/1',
  'Roadbeds/Tunnel/0',
  'NYC Roads/Ferry',
  'NYC Roads/Path, Trail/1',
  'NYC Roads/Path, Trail/0',
  'NYC Roads/Other Road',
  'NYC Roads/Alley, Private Road/1',
  'NYC Roads/Alley, Private Road/0',
  'NYC Roads/Local Road/1',
  'NYC Roads/Local Road/0',
  'NYC Roads/Ramp/1',
  'NYC Roads/Ramp/0',
  'NYC Roads/Secondary/1',
  'NYC Roads/Secondary/0',
  'NYC Roads/Primary/1',
  'NYC Roads/Primary/0',
  'NYC Roads/Tunnel',
  'NYC Roads/Bridge/1',
  'NYC Roads/Bridge/0',
  'Region Roads/Other Road',
  'Region Roads/Path, Trail/1',
  'Region Roads/Path, Trail/0',
  'Region Roads/Alley, Private Road/1',
  'Region Roads/Alley, Private Road/0',
  'Region Roads/Local Road/1',
  'Region Roads/Local Road/0',
  'Region Roads/Ramp/1',
  'Region Roads/Ramp/0',
  'Region Roads/Secondary/1',
  'Region Roads/Secondary/0',
  'Region Roads/Primary/1',
  'Region Roads/Primary/0',
  'Region Roads/Tunnel',
  'Pedestrian Overpass/1',
  'Pedestrian Overpass/0',
  'Roadbed Edge',
  'NYC Airport Runways',
  'Region Airports/Airport grounds',
  'Region Airports/Airport runways',
  'Rail Stations/Elevated station',
  'Rail Stations/Station',
  'Rail Stations/Station Entrance',
  'Rail Lines/Abandoned railroad',
  'Rail Lines/Elevated Railroad/3',
  'Rail Lines/Elevated Railroad/2',
  'Rail Lines/Elevated Railroad/1',
  'Rail Lines/Elevated Railroad/0',
  'Rail Lines/Railroad/1',
  'Rail Lines/Railroad/0',
  'The High Line',
  'Buildings/Building/2',
  'Buildings/Building/1',
  'Buildings/Building/0',
  'Buildings/Landmark Building/2',
  'Buildings/Landmark Building/1',
  'Buildings/Landmark Building/0',
  'Traffic Direction/With',
  'Traffic Direction/Against',
  'Traffic Direction/Two-Way/1',
  'Traffic Direction/Two-Way/0',
  'Boundaries/County Boundaries/1',
  'Boundaries/County Boundaries/0',
  'Boundaries/State Boundaries/1',
  'Boundaries/State Boundaries/0',
  'Boundaries/International Boundaries/1',
  'Boundaries/International Boundaries/0',
  'Alternate Symbols/label/Light Gray Alt',
  'Alternate Symbols/label/Night Interstate',
  'Alternate Symbols/label/Light Gray Interstate',
  'Alternate Symbols/label/Dark Gray Alt Shield',
  'Alternate Symbols/label/Dark Gray Interstate',
  'Alternate Symbols/label/Navigation Interstate',
  'Alternate Symbols/label/Night Alt Shield',
  'Alternate Symbols/label/Topo Interstate',
  'Alternate Symbols/label/Topo Alt Sheild',
  'NYC Roads/label/Ferry Routes',
  'Region Hydrography/label/Medium Ponds and Lakes',
  'Region Hydrography/label/Large Ponds and Lakes',
  'Water Line Labels/label/Rivers and Streams',
  'Region Airports/label/Default',
  'NYC Airport Grounds/label/Default',
  'Region Roads/label/Paths',
  'Region Roads/label/Streets',
  'Region Roads/label/Major Streets',
  'NYC Roads/label/Paths',
  'Parks/label/Default',
  'Addresses/label/Default',
  'NYC Roads/label/Streets',
  'NYC Roads/label/Major Streets',
  'NYC Roads/label/Highways',
  'Water Area Labels/label/Default',
  'Region Road Labels/label/Secondary Alt Name',
  'Region Road Labels/label/Primary Alt Name',
  'Region Road Labels/label/State and County Route',
  'Region Road Labels/label/US Route',
  'Region Road Labels/label/Interstate Shield',
  'City Labels/label/Region',
  'Boundaries/Counties/label/Default',
  'Boundaries/States/label/Default',
  'Boundaries/Countries/label/Default',
  'Buildings/label/Buildings',
  'Buildings/label/Landmark Building',
  'The High Line/label/Default',
  'Neighborhoods/label/Default',
  'City Labels/label/NYC'
];

const tileGrid = new TileGrid({
  tileSize: 256,
  extent,
  resolutions
});

const layer = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    projection: 'EPSG:2263',
    tileGrid: tileGrid
  })
});

applyStyle(layer, url, '', {resolutions, layers});
applyBackground(layer, url);

const map = new Map({
  target: 'map',
  view: new View({
    projection: 'EPSG:2263',
    center: [991201, 192667],
    zoom: 10
  }),
  layers: [layer]
});

window.tileGrid = tileGrid;
window.layer = layer;
window.map = map;
