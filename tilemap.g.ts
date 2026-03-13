// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100002020205010104020401010101020101040106010101060101010101010101010501010101010504010101020101010104010101010101010101010104010101020101010501010204010101020102010505010104060405020101010501010403010101010101010202020604060101040501020101010101010105010506010104010101010101010101040101010101010101010104010102010605010406010101010201040401010604010101010104010101010404010404040405050101020101010104040404010102010101010405040101040701010101010106040104050606050405020505040405020801010101010101010101010101010101`, img`
2 2 2 2 . . 2 2 2 . . . . 2 . . 
2 . 2 . . . 2 . . . . . . . . . 
2 . . . . . 2 2 . . . 2 . . . . 
2 . . . . . . . . . . . 2 . . . 
2 . . . 2 . . 2 2 . . . 2 . 2 . 
2 2 . . 2 2 2 2 2 . . . 2 . . 2 
. . . . . . . . 2 2 2 2 2 2 . . 
2 2 . 2 . . . . . . . 2 . 2 2 . 
. 2 . . . . . . . . . 2 . . . . 
. . . . . . 2 . . 2 . 2 2 . 2 2 
. . . . 2 . 2 2 . . 2 2 . . . . 
. 2 . . . . 2 2 . 2 2 2 2 2 2 . 
. 2 . . . . 2 2 2 2 . . 2 . . . 
. 2 2 2 . . 2 . . . . . . . 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.saplingPine,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`10001000070909090d0909090909090d09090908040a0a0a0a0a0a0a0a0a0a0a0a0a0a05040f0f0f0a0f0f0a0f0f0f0f0f0f0a050b0a0a0f0a0a0f0a0a0f0a0a0a0f0a0c040a0f0f0f0f0f0f0a0f0a0f0a0f0a05040a0a0a0a0a0a0a0a0f0f0f0a0f0a05040a0f0f0f0f0a0f0a0a0f0a0a0f0a050b0a0a0a0a0f0a0f0f0a0a0a0f0f0a0c040f0f0f0a0f0a0a0f0f0f0a0f0f0a05040a0a0f0a0f0f0a0f0a0a0a0a0f0a05040a0a0a0a0a0f0a0f0a0f0f0f0f0a05040a0f0f0f0a0f0a0f0f0f0a0a0f0a050b0a0f0a0f0a0f0a0a0a0a0a0f0f0a0c040a0f0a0f0f0f0f0f0a0f0f0f0a0a050410110a0a0a0a0a0a0a0a0a0a0a0105060303030e0303030303030e03030302`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 . 2 2 . 2 2 2 2 2 2 . 2 
2 . . 2 . . 2 . . 2 . . . 2 . 2 
2 . 2 2 2 2 2 2 . 2 . 2 . 2 . 2 
2 . . . . . . . . 2 2 2 . 2 . 2 
2 . 2 2 2 2 . 2 . . 2 . . 2 . 2 
2 . . . . 2 . 2 2 . . . 2 2 . 2 
2 2 2 2 . 2 . . 2 2 2 . 2 2 . 2 
2 . . 2 . 2 2 . 2 . . . . 2 . 2 
2 . . . . . 2 . 2 . 2 2 2 2 . 2 
2 . 2 2 2 . 2 . 2 2 2 . . 2 . 2 
2 . 2 . 2 . 2 . . . . . 2 2 . 2 
2 . 2 . 2 2 2 2 2 . 2 2 2 . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.doorClosedNorth,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.builtin.brick,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorDark4,sprites.dungeon.doorOpenNorth,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile2":return tile2;
            case "EXIT":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
