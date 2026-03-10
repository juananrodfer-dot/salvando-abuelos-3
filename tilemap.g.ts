// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100002020207010106020601010101020101060108010101080101010101010101010701010101010706010101020101010106010101010101010101010106010101020101010701010206010101020102010707010106080607020101010701010604010101010101010202020806080101060701020101010101010107010708010106010101010101010101060101010101010101010106010102010807010608010101010201060601010806010101010106010101010606010606060607070101020101010106060606010102010101010607060101060501010101010108060106070808070607020707060607020301010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.dungeon.doorLockedNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.saplingPine], TileScale.Sixteen);
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
