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
}
sprites.onOverlap(SpriteKind.dog, SpriteKind.boy, function (sprite, otherSprite) {
    boi.setFlag(SpriteFlag.Ghost, true)
    game.splash("Here is the key. Go unlock the gate. But be careful. There is a rabid beast outside of the gate. He will want to fight")
    pause(2000)
    boi.setFlag(SpriteFlag.Ghost, false)
    hasKey = true
})
scene.onOverlapTile(SpriteKind.dog, sprites.dungeon.stairNorth, function (sprite, location) {
    current_level = 0
    start_level()
    for (let value8 of sprites.allOfKind(SpriteKind.Food)) {
        value8.destroy()
    }
    for (let value9 of sprites.allOfKind(SpriteKind.Enemy)) {
        value9.destroy()
    }
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.enemyblackghost, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile1`, function (sprite, location) {
    if (hasKey == true) {
        tiles.setTilemap(tilemap`level15`)
        for (let value18 of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.placeOnTile(Dog, value18)
            tiles.setTileAt(value18, sprites.castle.tileGrass1)
        }
        for (let value12 of tiles.getTilesByType(assets.tile`myTile10`)) {
            kittyVar = sprites.create(img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d 2 5 d d 2 2 d e . b f b 
                f d 2 2 d d 5 2 d f . f d f 
                f b d d b b d d c f . f d f 
                . f c c c c c c b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `, SpriteKind.citty)
            tiles.placeOnTile(kittyVar, value12)
            tiles.setTileAt(value12, sprites.castle.tileGrass1)
            kittyVar.vy = 40
        }
    } else {
        Dog.setFlag(SpriteFlag.GhostThroughTiles, true)
        game.splash("You don't have the key yet. ")
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Dog,
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.enemyghost, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.citty, SpriteKind.dogProjectileKind, function (sprite, otherSprite) {
    game.over(true)
})
info.onCountdownEnd(function () {
    for (let value10 of sprites.allOfKind(SpriteKind.Food)) {
        value10.destroy()
    }
    current_level = 2
    start_level()
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Dog,
    [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile2`, function (sprite, location) {
    current_level += 1
    start_level()
})
scene.onHitWall(SpriteKind.citty, function (sprite, location) {
    sprite.vy = sprite.vy * -1
})
scene.onHitWall(SpriteKind.enemyblackghost, function (sprite, location) {
    blackghost.vx = blackghost.vx * -1
})
function start_level () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level2`)
        for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
            blackghost = sprites.create(img`
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
                `, SpriteKind.enemyblackghost)
            tiles.placeOnTile(blackghost, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        blackghost.vx = -40
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level4`)
        for (let value2 of sprites.allOfKind(SpriteKind.enemyblackghost)) {
            value2.destroy()
        }
    } else if (current_level == 3) {
        tiles.setTilemap(tilemap`level5`)
        for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
            value2.destroy()
        }
        for (let value3 of sprites.allOfKind(SpriteKind.enemyghost)) {
            value3.destroy()
        }
    } else {
    	
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile7`)) {
        ghoasty = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 f f 1 1 f f 1 1 1 . . 
            . . 1 1 1 f f 1 1 f f 1 1 1 . . 
            . . 1 1 1 f f 1 1 f f 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 f f f f 1 1 1 1 . . 
            . . 1 1 1 1 f f f f 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 . 1 1 1 . 1 1 . . 
            . . . 1 1 1 . . . . . . 1 1 . . 
            `, SpriteKind.enemyghost)
        ghoasty.follow(Dog, 60)
        tiles.placeOnTile(ghoasty, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile9`)) {
        girly = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.girl)
        animation.runImageAnimation(
        girly,
        [img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(girly, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value15 of tiles.getTilesByType(assets.tile`myTile`)) {
        boi = sprites.create(img`
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
            `, SpriteKind.boy)
        animation.runImageAnimation(
        boi,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
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
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(boi, value15)
        tiles.setTileAt(value15, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile6`)) {
        ghost = sprites.create(img`
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 f f 1 1 1 f f 1 . . . 
            . . 1 1 1 f f 1 1 1 f f 1 . . . 
            . 1 1 1 1 f f 1 1 1 f f 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . 1 1 1 1 1 f f f 1 1 1 1 . . . 
            . 1 1 1 1 1 f f f 1 1 1 1 . . . 
            . . 1 1 1 1 f f f 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 . 1 1 1 1 . 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        ghost,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 f f 1 1 1 f f 1 1 . . 
            . . 1 1 1 f f 1 1 1 f f 1 1 . . 
            . 1 1 1 1 f f 1 1 1 f f 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 f f f 1 1 1 1 . . 
            . 1 1 1 1 1 1 f f f 1 1 1 1 . . 
            . 1 1 1 1 1 1 f f f 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 . . . . 1 1 1 . . 
            `,img`
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 f f 1 1 1 f f 1 1 . . 
            . . 1 1 1 f f 1 1 1 f f 1 1 1 . 
            . . 1 1 1 f f 1 1 1 f f 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 f f f 1 1 1 1 1 . 
            . 1 1 1 1 1 1 f f f 1 1 1 1 1 . 
            . 1 1 1 1 1 1 f f f 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 1 . . . 1 1 1 . . 1 1 . . 
            `,img`
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 f f 1 1 1 f f 1 1 . . 
            . 1 1 1 1 f f 1 1 1 f f 1 1 1 . 
            . 1 1 1 1 f f 1 1 1 f f 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 f f f 1 1 1 1 1 . 
            . . 1 1 1 1 1 f f f 1 1 1 1 . . 
            . . 1 1 1 1 1 f f f 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . . . 1 1 1 . . . 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            `],
        300,
        true
        )
        tiles.placeOnTile(ghost, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.placeOnTile(Dog, value7)
        tiles.setTileAt(value7, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.dog, SpriteKind.kittyProjectileKind, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile11`, function (sprite, location) {
    current_level += -1
    start_level()
    for (let value11 of sprites.allOfKind(SpriteKind.girl)) {
        value11.destroy()
    }
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile12`, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    for (let value12 of tiles.getTilesByType(assets.tile`myTile6`)) {
        ghost = sprites.create(img`
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 f f 1 1 1 f f 1 . . . 
            . . 1 1 1 f f 1 1 1 f f 1 . . . 
            . 1 1 1 1 f f 1 1 1 f f 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . 1 1 1 1 1 f f f 1 1 1 1 . . . 
            . 1 1 1 1 1 f f f 1 1 1 1 . . . 
            . . 1 1 1 1 f f f 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 . 1 1 1 1 . 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        ghost,
        [img`
            e e e e e e e e e e e e e e e e 
            e e e e 1 1 1 1 1 1 1 1 e e e e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e e 1 1 1 f f 1 1 1 f f 1 1 e e 
            e e 1 1 1 f f 1 1 1 f f 1 1 e e 
            e 1 1 1 1 f f 1 1 1 f f 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 1 1 f f f 1 1 1 1 e e 
            e 1 1 1 1 1 1 f f f 1 1 1 1 e e 
            e 1 1 1 1 1 1 f f f 1 1 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 1 1 e e e e 1 1 1 e e 
            `,img`
            e e e e 1 1 1 1 1 1 1 e e e e e 
            e e 1 1 1 1 1 1 1 1 1 1 1 e e e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e e 1 1 1 f f 1 1 1 f f 1 1 e e 
            e e 1 1 1 f f 1 1 1 f f 1 1 1 e 
            e e 1 1 1 f f 1 1 1 f f 1 1 1 e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e 1 1 1 1 1 f f f 1 1 1 1 1 e 
            e 1 1 1 1 1 1 f f f 1 1 1 1 1 e 
            e 1 1 1 1 1 1 f f f 1 1 1 1 1 e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e e 1 e e e 1 1 1 e e 1 1 e e 
            `,img`
            e e e e 1 1 1 1 1 1 1 e e e e e 
            e e 1 1 1 1 1 1 1 1 1 1 1 e e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 e e 
            e 1 1 1 1 f f 1 1 1 f f 1 1 e e 
            e 1 1 1 1 f f 1 1 1 f f 1 1 1 e 
            e 1 1 1 1 f f 1 1 1 f f 1 1 1 e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e 1 1 1 1 1 1 f f f 1 1 1 1 1 e 
            e e 1 1 1 1 1 f f f 1 1 1 1 e e 
            e e 1 1 1 1 1 f f f 1 1 1 1 e e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e 1 1 1 1 1 1 1 1 1 1 1 1 1 e 
            e e e e e 1 1 1 e e e 1 1 e e e 
            e e e e e e e e e e e e e e e e 
            `],
        300,
        true
        )
        tiles.placeOnTile(ghost, value12)
        tiles.setTileAt(value12, assets.tile`transparency16`)
    }
    for (let value13 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.placeOnTile(Dog, value13)
        tiles.setTileAt(value13, assets.tile`transparency16`)
    }
    for (let value14 of tiles.getTilesByType(assets.tile`myTile13`)) {
        bone = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . . . f f . 
            f 1 1 f . . . . . . . . f 1 1 f 
            f 1 1 1 f f f f f f f f 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 f f f f f f f f 1 1 1 f 
            f 1 1 f . . . . . . . . f 1 1 f 
            . f f . . . . . . . . . . f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(bone, value14)
        tiles.setTileAt(value14, assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.girl, function (sprite, otherSprite) {
    girly.setFlag(SpriteFlag.Ghost, true)
    game.splash("Find my brother. He will give you a key to unlock a gate so you can escape. Good luck.")
    pause(2000)
    girly.setFlag(SpriteFlag.Ghost, false)
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTilemap(tilemap`level7`)
    game.splash("collect as many bones as you can in 10 seconds!")
    for (let value15 of tiles.getTilesByType(assets.tile`myTile13`)) {
        bone = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . . . f f . 
            f 1 1 f . . . . . . . . f 1 1 f 
            f 1 1 1 f f f f f f f f 1 1 1 f 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 f f f f f f f f 1 1 1 f 
            f 1 1 f . . . . . . . . f 1 1 f 
            . f f . . . . . . . . . . f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(bone, value15)
        tiles.setTileAt(value15, assets.tile`transparency16`)
    }
    for (let value16 of sprites.allOfKind(SpriteKind.Enemy)) {
        value16.destroy()
    }
    for (let value17 of sprites.allOfKind(SpriteKind.enemyghost)) {
        value17.destroy()
    }
    for (let value18 of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.placeOnTile(Dog, value18)
        tiles.setTileAt(value18, assets.tile`transparency16`)
    }
    info.startCountdown(10)
})
let kittyProjectile: Sprite = null
let dogProjectile: Sprite = null
let dogProjectileDelay = false
let bone: Sprite = null
let ghost: Sprite = null
let girly: Sprite = null
let ghoasty: Sprite = null
let blackghost: Sprite = null
let kittyVar: Sprite = null
let hasKey = false
let boi: Sprite = null
let current_level = 0
let Dog: Sprite = null
Dog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.dog)
controller.moveSprite(Dog)
scene.cameraFollowSprite(Dog)
current_level = 0
start_level()
game.splash("Get the dog to the end without dying! Good luck!")
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
                `, Dog, 50, 0)
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
    Dog.setFlag(SpriteFlag.GhostThroughTiles, false)
})
game.onUpdateInterval(500, function () {
    dogProjectileDelay = false
})
