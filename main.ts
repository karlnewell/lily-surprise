namespace SpriteKind {
    export const dog = SpriteKind.create()
    export const enemyghost = SpriteKind.create()
    export const girl = SpriteKind.create()
    export const zombieevil = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const enemyblackghost = SpriteKind.create()
    export const boy = SpriteKind.create()
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
    } else {
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
info.onCountdownEnd(function () {
    for (let value10 of sprites.allOfKind(SpriteKind.Food)) {
        value10.destroy()
    }
    current_level = 2
    start_level()
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
let bone: Sprite = null
let ghost: Sprite = null
let girly: Sprite = null
let ghoasty: Sprite = null
let blackghost: Sprite = null
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
current_level = 3
start_level()
game.splash("Get the dog to the end without dying! Good luck!")
