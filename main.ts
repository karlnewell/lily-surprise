namespace SpriteKind {
    export const dog = SpriteKind.create()
    export const bikini_bottom = SpriteKind.create()
    export const bikini_top = SpriteKind.create()
    export const rat = SpriteKind.create()
    export const hawk = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.rat, sprites.castle.shrub, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.rat, SpriteKind.hawk, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray, 1000)
    claw_count += 1
    otherSprite.sayText("SCREECH", 1000, true)
    Rat.setFlag(SpriteFlag.GhostThroughSprites, true)
    if (claw_count > 3) {
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.rat, SpriteKind.bikini_top, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 500)
    has_top = true
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Rat,
    assets.animation`rat left`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.rat, SpriteKind.bikini_bottom, function (sprite2, otherSprite2) {
    otherSprite2.destroy(effects.confetti, 500)
    has_bottom = true
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Rat,
    assets.animation`rat right`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.rat, sprites.dungeon.chestOpen, function (sprite4, location2) {
    game.splash("It's a trap!")
    current_level = 2
    start_level()
})
function start_level () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`items_level`)
        bite_count = 0
        for (let value7 of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.placeOnTile(Rat, value7)
            tiles.setTileAt(value7, sprites.dungeon.floorDark0)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
            bottom = sprites.create(assets.image`bikini_bottom`, SpriteKind.bikini_bottom)
            tiles.placeOnTile(bottom, value)
            tiles.setTileAt(value, sprites.dungeon.floorDark0)
        }
        for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
            top = sprites.create(assets.image`bikini_top`, SpriteKind.bikini_top)
            tiles.placeOnTile(top, value2)
            tiles.setTileAt(value2, sprites.dungeon.floorDark0)
        }
        for (let value3 of tiles.getTilesByType(assets.tile`myTile7`)) {
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
            tiles.placeOnTile(dog_follow, value3)
            tiles.setTileAt(value3, sprites.dungeon.floorDark0)
        }
        game.splash("Collect items for your nest!")
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`trap_level`)
        for (let value7 of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.placeOnTile(Rat, value7)
            tiles.setTileAt(value7, sprites.dungeon.floorDark0)
        }
        game.splash("Find the treasure!")
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`park_level`)
        sprites.destroyAllSpritesOfKind(SpriteKind.dog)
        claw_count = 0
        park_timer = 0
        for (let value7 of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.placeOnTile(Rat, value7)
            tiles.setTileAt(value7, sprites.castle.tileGrass3)
        }
        for (let value3 of tiles.getTilesByType(assets.tile`myTile8`)) {
            hawk_follow = sprites.create(assets.image`pigeon`, SpriteKind.hawk)
            hawk_follow.follow(Rat, 60)
            tiles.placeOnTile(hawk_follow, value3)
            tiles.setTileAt(value3, sprites.castle.tileGrass3)
        }
    }
}
scene.onOverlapTile(SpriteKind.rat, assets.tile`myTile5`, function (sprite5, location3) {
    if (has_bottom == true && has_top == true) {
        current_level = 1
        start_level()
    } else {
        Rat.setFlag(SpriteFlag.GhostThroughTiles, true)
        game.splash("Collect all the items.")
    }
})
sprites.onOverlap(SpriteKind.rat, SpriteKind.dog, function (sprite6, otherSprite3) {
    sprite6.startEffect(effects.spray, 1000)
    bite_count += 1
    otherSprite3.sayText("ARF", 1000, true)
    Rat.setFlag(SpriteFlag.GhostThroughSprites, true)
    if (bite_count > 3) {
        game.over(false)
    }
})
let hawk_follow: Sprite = null
let park_timer = 0
let dog_follow: Sprite = null
let top: Sprite = null
let bottom: Sprite = null
let bite_count = 0
let claw_count = 0
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
game.onUpdateInterval(2000, function () {
    Rat.setFlag(SpriteFlag.GhostThroughTiles, false)
    Rat.setFlag(SpriteFlag.GhostThroughSprites, false)
})
game.onUpdateInterval(500, function () {
    if (current_level == 2) {
        park_timer += 500
    }
    if (park_timer >= 10000) {
        tiles.setCurrentTilemap(tilemap`park_escape_level`)
    }
})
