namespace SpriteKind {
    export const dog = SpriteKind.create()
    export const enemyghost = SpriteKind.create()
    export const girl = SpriteKind.create()
    export const zombieevil = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const enemyblackghost = SpriteKind.create()
    export const boy = SpriteKind.create()
    export const citty = SpriteKind.create()
    export const kittyProjectileKind = SpriteKind.create()
    export const dogProjectileKind = SpriteKind.create()
    export const bikini_bottom = SpriteKind.create()
    export const bikini_top = SpriteKind.create()
    export const rat = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.rat, SpriteKind.bikini_top, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    has_top = true
})
sprites.onOverlap(SpriteKind.rat, SpriteKind.bikini_bottom, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    has_bottom = true
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Rat,
    assets.animation`rat left`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Rat,
    assets.animation`rat right`,
    200,
    true
    )
})
scene.onHitWall(SpriteKind.enemyblackghost, function (sprite, location) {
    let blackghost: Sprite = null
    blackghost.vx = blackghost.vx * -1
})
function start_level () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`items_level`)
        bite_count = 0
        for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
            bottom = sprites.create(img`
                . . c c c c c c c c c c c c . . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c 2 2 c c c c 2 2 c c c . 
                . c c c 2 2 c c c c 2 2 c c c . 
                . c c c 2 2 c c c c 2 2 c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c . . c c c . . c . . c c . 
                `, SpriteKind.bikini_bottom)
            tiles.placeOnTile(bottom, value)
            tiles.setTileAt(value, sprites.dungeon.floorDark0)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            top = sprites.create(img`
                . . c c c c c c c c c c c c . . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c 2 2 c c c c 2 2 c c c . 
                . c c c 2 2 c c c c 2 2 c c c . 
                . c c c 2 2 c c c c 2 2 c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c c c c c c c c c c c c c . 
                . c c . . c c c . . c . . c c . 
                `, SpriteKind.bikini_top)
            tiles.placeOnTile(top, value)
            tiles.setTileAt(value, sprites.dungeon.floorDark0)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            dog_follow = sprites.create(img`
                . . 4 4 4 . . . . 4 4 4 . . . . 
                . 4 5 5 5 e . . e 5 5 5 4 . . . 
                4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
                4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
                e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
                . e e 5 5 5 5 5 5 5 5 e e . . . 
                . . e 5 f 5 5 5 5 f 5 e . . . . 
                . . f 5 5 5 4 4 5 5 5 f . . f f 
                . . f 4 5 5 f f 5 5 6 f . f 5 f 
                . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
                . . . f 4 5 5 5 5 5 5 4 4 5 f . 
                . . . f 5 5 5 5 5 4 5 5 f f . . 
                . . . f 5 f f f 5 f f 5 f . . . 
                . . . f f . . f f . . f f . . . 
                `, SpriteKind.dog)
            dog_follow.follow(Rat, 50)
            tiles.placeOnTile(dog_follow, value)
            tiles.setTileAt(value, sprites.dungeon.floorDark0)
        }
        game.splash("Collect items for your nest!")
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`trap_level`)
        game.splash("Find the treasure!")
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level4`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.placeOnTile(Rat, value7)
        tiles.setTileAt(value7, sprites.dungeon.floorDark0)
    }
}
scene.onOverlapTile(SpriteKind.rat, sprites.dungeon.chestOpen, function (sprite, location) {
    game.splash("It's a trap!")
    current_level = 2
    start_level()
})
scene.onOverlapTile(SpriteKind.rat, assets.tile`myTile5`, function (sprite, location) {
    if (has_bottom == true && has_top == true) {
        current_level = 1
        start_level()
    } else {
        Rat.setFlag(SpriteFlag.GhostThroughTiles, true)
        game.splash("Collect all the items.")
    }
})
sprites.onOverlap(SpriteKind.rat, SpriteKind.dog, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray, 1000)
    bite_count += 1
    otherSprite.sayText("ARF", 1000, true)
    Rat.setFlag(SpriteFlag.GhostThroughSprites, true)
    if (bite_count > 3) {
        game.over(false)
    }
})
let kittyProjectile: Sprite = null
let dogProjectile: Sprite = null
let dogProjectileDelay = false
let kittyVar: Sprite = null
let dog_follow: Sprite = null
let top: Sprite = null
let bottom: Sprite = null
let bite_count = 0
let has_top = false
let has_bottom = false
let current_level = 0
let Rat: Sprite = null
Rat = sprites.create(assets.image`rat`, SpriteKind.rat)
controller.moveSprite(Rat)
scene.cameraFollowSprite(Rat)
current_level = 0
has_bottom = false
has_top = false
start_level()
game.onUpdate(function () {
    if (kittyVar) {
        if (controller.A.isPressed() && dogProjectileDelay == false) {
            dogProjectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f . f f f . . . . 
                . . . . f 3 3 3 f 3 3 3 f . . . 
                . . . . f 3 3 3 3 3 1 3 f . . . 
                . . . . f 3 3 3 3 3 3 3 f . . . 
                . . . . . f 3 b b b 3 f . . . . 
                . . . . . f f b b b f f . . . . 
                . . . . . . f f b f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Rat, 50, 0)
            dogProjectile.setKind(SpriteKind.dogProjectileKind)
            dogProjectileDelay = true
        }
    }
})
game.onUpdateInterval(750, function () {
    if (kittyVar) {
        kittyProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e e . . . . . . 
            . . . . . . d b d d . . . . . . 
            . . . . . e b d f e d e . . . . 
            . . . . e b b b f f d e e . . . 
            . . . . b b f d b b d d e . . . 
            . . . . e b f f b d f e d . . . 
            . . . . . e d d e b b d . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, kittyVar, -50, 0)
        kittyProjectile.setKind(SpriteKind.kittyProjectileKind)
    }
})
game.onUpdateInterval(2000, function () {
    Rat.setFlag(SpriteFlag.GhostThroughTiles, false)
    Rat.setFlag(SpriteFlag.GhostThroughSprites, false)
})
game.onUpdateInterval(500, function () {
    dogProjectileDelay = false
})
