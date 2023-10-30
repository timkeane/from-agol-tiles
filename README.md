# olms-epsg-2263
## Issue rendering vector tiles in EPSG:2263

ESRI produced vector tiles and mapbox style document for NYC in EPSG:2263. 

Service definition:
https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/

Style document:
https://tiles.arcgis.com/tiles/yG5s3afENB5iO9fj/arcgis/rest/services/Poletop_Test_2263/VectorTileServer/resources/styles/root.json?f=pjson


When loaded "as is" using `olms` function the tiles render but the view is in EPSG:3857 and the center must be "fudged" to render the map.

When attempting to follow the openlayers example, [Vector tiles in EPSG:4326](https://openlayers.org/en/latest/examples/vector-tiles-4326.html), tile requests do not appear to be correct and return files of zero size.