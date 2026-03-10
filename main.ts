namespace SpriteKind {
    export const lava = SpriteKind.create()
}
function CargaNivel (n: number) {
    if (("n" as any) == ("1" as any)) {
        tiles.setCurrentTilemap(tilemap`nivel1`)
    } else {
        tiles.setCurrentTilemap(tilemap`nivel2`)
        tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
        scene.cameraFollowSprite(jugador)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(projectile)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`EXIT`, function (sprite, location) {
    if (("nivel" as any) == ("1" as any)) {
        nivel = 2
        CargaNivel(2)
    } else {
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico`, function (sprite, location) {
    puededisparar = 0
})
let nivel = 0
let projectile: Sprite = null
let jugador: Sprite = null
let puededisparar = 0
puededisparar = 1
tiles.setCurrentTilemap(tilemap`nivel1`)
jugador = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jugador)
scene.cameraFollowSprite(jugador)
let niño_malo = sprites.create(assets.image`niño malo`, SpriteKind.Enemy)
info.setLife(13)
game.onUpdateInterval(1, function () {
    if (puededisparar) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, niño_malo, 100, 0)
    }
})
forever(function () {
    niño_malo.setPosition(7, 100)
})
