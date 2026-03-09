namespace SpriteKind {
    export const lava = SpriteKind.create()
}
let projectile: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel1`)
let jugador = sprites.create(img`
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
let serpiente = sprites.create(img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
info.setLife(999999)
forever(function () {
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
        `, serpiente, 50, 50)
})
