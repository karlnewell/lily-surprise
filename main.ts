namespace SpriteKind {
    export const dog = SpriteKind.create()
    export const enemyghost = SpriteKind.create()
    export const girl = SpriteKind.create()
    export const zombieevil = SpriteKind.create()
    export const coin = SpriteKind.create()
}
let list: tiles.Location[] = []
function start_level () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level2`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level4`)
    } else if (current_level == 3) {
        tiles.setTilemap(tilemap`level5`)
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.enemyghost)) {
            value.destroy()
        }
    } else {
    	
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
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
        ghoasty.follow(Dog, 50)
        tiles.placeOnTile(ghoasty, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
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
        tiles.placeOnTile(girly, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
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
        tiles.placeOnTile(ghost, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.placeOnTile(Dog, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile11`, function (sprite, location) {
    current_level += -1
    start_level()
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile12`, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    for (let value of list) {
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
        tiles.placeOnTile(ghost, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.dog, SpriteKind.girl, function (sprite, otherSprite) {
    game.splash("Find my brother. He will give you a key to unlock a gate so you can escape. To find him, take the left path. Good luck.")
})
scene.onOverlapTile(SpriteKind.dog, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTilemap(tilemap`level7`)
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        mySprite = sprites.create(img`
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
            `, SpriteKind.Player)
    }
})
let mySprite: Sprite = null
let ghost: Sprite = null
let girly: Sprite = null
let ghoasty: Sprite = null
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
current_level = 2
start_level()
game.splash("Get the dog to the end without dying! Good luck!")
