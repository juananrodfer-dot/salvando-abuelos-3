// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001040101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010101010101010101020101010101010101010101010101010101010501010101010501010101010101010105010102050101010101010101010101050505050105050101010101010101010105060505050101010101010101010101050505050101010101010101010101050501010101010101010101010101010101050101010101020301010101010101010101010101010101`, img`
2 . 2 2 . . 2 2 2 . . . . . . . 
2 . 2 . . . 2 . . . . . . . . . 
2 . . . . . 2 2 . . . . . . . . 
2 . . . . . . . . . . . 2 . . . 
2 . . . 2 . . 2 2 . . . 2 . 2 . 
2 2 . . 2 2 2 2 . . . . 2 . . . 
. . . . . . . . . . . 2 2 . . . 
. 2 . 2 . . . . . . . 2 . . . . 
. 2 . . . . . . . . . 2 . . . . 
. 2 . . . . 2 . . 2 . 2 . . . . 
. 2 . . . . 2 2 . . . 2 . . . . 
. 2 . . . . 2 2 . 2 2 2 . . . . 
. 2 . . . . . . 2 2 . . . . . . 
. 2 2 2 . . . . . . . . . . 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.dungeon.doorLockedNorth,sprites.jewels.jewel6,sprites.castle.tilePath5,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
