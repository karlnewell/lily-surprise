@namespace
class SpriteKind:
    dog = SpriteKind.create()
    bikini_bottom = SpriteKind.create()
    bikini_top = SpriteKind.create()
    rat = SpriteKind.create()
    hawk = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.rat, sprites.castle.shrub, on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    global claw_count
    sprite2.start_effect(effects.spray, 1000)
    claw_count += 1
    otherSprite.say_text("SCREECH", 1000, True)
    Rat.set_flag(SpriteFlag.GHOST_THROUGH_SPRITES, True)
    if claw_count > 3:
        game.over(False)
sprites.on_overlap(SpriteKind.rat, SpriteKind.hawk, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    global has_top
    otherSprite2.destroy(effects.confetti, 500)
    has_top = True
sprites.on_overlap(SpriteKind.rat, SpriteKind.bikini_top, on_on_overlap2)

def on_left_pressed():
    animation.run_image_animation(Rat, assets.animation("""
        rat left
    """), 200, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap3(sprite22, otherSprite22):
    global has_bottom
    otherSprite22.destroy(effects.confetti, 500)
    has_bottom = True
sprites.on_overlap(SpriteKind.rat, SpriteKind.bikini_bottom, on_on_overlap3)

def on_right_pressed():
    animation.run_image_animation(Rat, assets.animation("""
        rat right
    """), 200, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile2(sprite4, location2):
    global current_level
    game.splash("It's a trap!")
    current_level = 2
    start_level()
scene.on_overlap_tile(SpriteKind.rat, sprites.dungeon.chest_open, on_overlap_tile2)

def start_level():
    global bite_count, bottom, top, dog_follow, claw_count, park_timer, hawk_follow
    if current_level == 0:
        tiles.set_tilemap(tilemap("""
            items_level
        """))
        bite_count = 0
        for value7 in tiles.get_tiles_by_type(assets.tile("""
            myTile4
        """)):
            tiles.place_on_tile(Rat, value7)
            tiles.set_tile_at(value7, sprites.dungeon.floor_dark0)
        for value in tiles.get_tiles_by_type(assets.tile("""
            myTile14
        """)):
            bottom = sprites.create(img("""
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
                """),
                SpriteKind.bikini_bottom)
            tiles.place_on_tile(bottom, value)
            tiles.set_tile_at(value, sprites.dungeon.floor_dark0)
        for value2 in tiles.get_tiles_by_type(assets.tile("""
            myTile3
        """)):
            top = sprites.create(img("""
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
                """),
                SpriteKind.bikini_top)
            tiles.place_on_tile(top, value2)
            tiles.set_tile_at(value2, sprites.dungeon.floor_dark0)
        for value3 in tiles.get_tiles_by_type(assets.tile("""
            myTile7
        """)):
            dog_follow = sprites.create(img("""
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
                """),
                SpriteKind.dog)
            dog_follow.follow(Rat, 50)
            tiles.place_on_tile(dog_follow, value3)
            tiles.set_tile_at(value3, sprites.dungeon.floor_dark0)
        game.splash("Collect items for your nest!")
    elif current_level == 1:
        tiles.set_tilemap(tilemap("""
            trap_level
        """))
        for value72 in tiles.get_tiles_by_type(assets.tile("""
            myTile4
        """)):
            tiles.place_on_tile(Rat, value72)
            tiles.set_tile_at(value72, sprites.dungeon.floor_dark0)
        game.splash("Find the treasure!")
    elif current_level == 2:
        tiles.set_tilemap(tilemap("""
            park_level
        """))
        sprites.destroy_all_sprites_of_kind(SpriteKind.dog)
        claw_count = 0
        park_timer = 0
        for value73 in tiles.get_tiles_by_type(assets.tile("""
            myTile4
        """)):
            tiles.place_on_tile(Rat, value73)
            tiles.set_tile_at(value73, sprites.castle.tile_grass3)
        for value32 in tiles.get_tiles_by_type(assets.tile("""
            myTile8
        """)):
            hawk_follow = sprites.create(assets.image("""
                pigeon
            """), SpriteKind.hawk)
            hawk_follow.follow(Rat, 60)
            tiles.place_on_tile(hawk_follow, value32)
            tiles.set_tile_at(value32, sprites.castle.tile_grass3)

def on_overlap_tile3(sprite5, location3):
    global current_level
    if has_bottom == True and has_top == True:
        current_level = 1
        start_level()
    else:
        Rat.set_flag(SpriteFlag.GHOST_THROUGH_TILES, True)
        game.splash("Collect all the items.")
scene.on_overlap_tile(SpriteKind.rat,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile3)

def on_on_overlap4(sprite6, otherSprite3):
    global bite_count
    sprite6.start_effect(effects.spray, 1000)
    bite_count += 1
    otherSprite3.say_text("ARF", 1000, True)
    Rat.set_flag(SpriteFlag.GHOST_THROUGH_SPRITES, True)
    if bite_count > 3:
        game.over(False)
sprites.on_overlap(SpriteKind.rat, SpriteKind.dog, on_on_overlap4)

hawk_follow: Sprite = None
park_timer = 0
dog_follow: Sprite = None
top: Sprite = None
bottom: Sprite = None
bite_count = 0
claw_count = 0
has_top = False
has_bottom = False
current_level = 0
Rat: Sprite = None
Rat = sprites.create(assets.image("""
    rat
"""), SpriteKind.rat)
controller.move_sprite(Rat)
scene.camera_follow_sprite(Rat)
current_level = 0
has_bottom = False
has_top = False
start_level()

def on_update_interval():
    Rat.set_flag(SpriteFlag.GHOST_THROUGH_TILES, False)
    Rat.set_flag(SpriteFlag.GHOST_THROUGH_SPRITES, False)
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    global park_timer
    if current_level == 2:
        park_timer += 500
    if park_timer >= 10000:
        tiles.set_current_tilemap(tilemap("""
            park_escape_level
        """))
game.on_update_interval(500, on_update_interval2)
