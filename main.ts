namespace SpriteKind {
    export const lava = SpriteKind.create()
}
function CargaNivel (n: number) {
    tiles.setCurrentTilemap(tilemap`nivel2`)
    tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
    scene.cameraFollowSprite(jugador)
    niño_maléfico = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f a a f f f . . . . 
        . . . f f f a a a a f f f . . . 
        . . f f f c c c c c c f f f . . 
        . . f f c a a a a a a c c f . . 
        . . f c a f f f f f f a c f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f c c c c c c f 4 e . . 
        . . 4 d f c c c c c c f d 4 . . 
        . . 4 4 f 4 4 a a 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    niño_maléfico.setPosition(66, 33)
    niño_maléfico.follow(jugador, 20)
}
function Nivel0 (núm: number) {
    nivel = 1
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
    niño_malo = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f a a f f f . . . . 
        . . . f f f a a a a f f f . . . 
        . . f f f c c c c c c f f f . . 
        . . f f c a a a a a a c c f . . 
        . . f c a f f f f f f a c f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f c c c c c c f 4 e . . 
        . . 4 d f c c c c c c f d 4 . . 
        . . 4 4 f 4 4 a a 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    niño_malo.setPosition(7, 100)
    info.setLife(15)
}
function nivel3 (núm: number) {
    tiles.setCurrentTilemap(tilemap`nivel0`)
    tiles.placeOnRandomTile(jugador, sprites.dungeon.stairLadder)
    controller.moveSprite(jugador, 100, 0)
    jugador.ay = 400
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(projectile)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jugador.isHittingTile(CollisionDirection.Bottom)) {
        jugador.vy = -220
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(jugador, sprites.dungeon.stairLadder)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`EXIT`, function (sprite, location) {
    CargaNivel(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico`, function (sprite, location) {
    puededisparar = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    nivel3(1)
})
let projectile: Sprite = null
let niño_malo: Sprite = null
let puededisparar = 0
let nivel = 0
let niño_maléfico: Sprite = null
let jugador: Sprite = null
Nivel0(1)
game.onUpdateInterval(1, function () {
    if (puededisparar) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, niño_malo, 100, 0)
    }
})
forever(function () {
	
})
