import TileGrid from 'ol/tilegrid/TileGrid';

const tileGridFromAGOL = url => {
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      response.json().then(serviceDef => {
        const svcExtent = serviceDef.fullExtent;
        const extent = [svcExtent.xmin, svcExtent.ymin, svcExtent.xmax, svcExtent.ymax];
        const tileInfo = serviceDef.tileInfo;
        const origin = [tileInfo.origin.x, tileInfo.origin.y];
        const lods = tileInfo.lods;
        const tileSize = [tileInfo.cols, tileInfo.rows];
        const resolutions = [];
        lods.forEach(lod => {
          resolutions.push(lod.resolution);
        });
        const tileGrid = new TileGrid({origin, extent, tileSize, resolutions});
        resolve(tileGrid);
      });
    }).catch(err => {
      console.error(`Failed to create TileGid from service ${url}`, err)
    });
  });
}

export default tileGridFromAGOL;
