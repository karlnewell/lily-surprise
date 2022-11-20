@namespace
class SpriteKind:
    dog = SpriteKind.create()
    enemyghost = SpriteKind.create()
    girl = SpriteKind.create()
    zombieevil = SpriteKind.create()
    coin = SpriteKind.create()
    enemyblackghost = SpriteKind.create()
    boy = SpriteKind.create()
    citty = SpriteKind.create()
    kittyProjectileKind = SpriteKind.create()
    dogProjectileKind = SpriteKind.create()
    bikini_bottom = SpriteKind.create()
    bikini_top = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global current_level
    current_level = 0
    start_level()
    for value8 in sprites.all_of_kind(SpriteKind.food):
        value8.destroy()
    for value9 in sprites.all_of_kind(SpriteKind.enemy):
        value9.destroy()
scene.on_overlap_tile(SpriteKind.dog, sprites.dungeon.stair_north, on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    global has_bottom
    otherSprite.destroy(effects.confetti, 500)
    has_bottom = True
sprites.on_overlap(SpriteKind.dog, SpriteKind.bikini_bottom, on_on_overlap)

def on_left_pressed():
    animation.run_image_animation(Dog,
        [img("""
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
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap2(sprite3, otherSprite2):
    global has_top
    otherSprite2.destroy(effects.confetti, 500)
    has_top = True
sprites.on_overlap(SpriteKind.dog, SpriteKind.bikini_top, on_on_overlap2)

def on_on_overlap3(sprite4, otherSprite3):
    game.over(False)
sprites.on_overlap(SpriteKind.dog, SpriteKind.enemyghost, on_on_overlap3)

def on_right_pressed():
    animation.run_image_animation(Dog,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        500,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap4(sprite5, otherSprite4):
    game.over(False)
sprites.on_overlap(SpriteKind.dog, SpriteKind.enemy, on_on_overlap4)

def on_overlap_tile2(sprite6, location2):
    if has_bottom == True:
        pass
    else:
        Dog.set_flag(SpriteFlag.GHOST_THROUGH_TILES, True)
        game.splash("Collect all the items.")
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile2)

def on_hit_wall(sprite7, location3):
    sprite7.vy = sprite7.vy * -1
scene.on_hit_wall(SpriteKind.citty, on_hit_wall)

def on_hit_wall2(sprite8, location4):
    blackghost.vx = blackghost.vx * -1
scene.on_hit_wall(SpriteKind.enemyblackghost, on_hit_wall2)

def start_level():
    global bottom, blackghost, ghoasty, girly, boi, ghost
    if current_level == 0:
        tiles.set_tilemap(tilemap("""
            level
        """))
        game.splash("Collect items for your nest!")
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
    elif current_level == 1:
        tiles.set_tilemap(tilemap("""
            level2
        """))
        for value2 in tiles.get_tiles_by_type(assets.tile("""
            myTile14
        """)):
            blackghost = sprites.create(img("""
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
                SpriteKind.enemyblackghost)
            tiles.place_on_tile(blackghost, value2)
            tiles.set_tile_at(value2, assets.tile("""
                transparency16
            """))
        blackghost.vx = -40
    elif current_level == 2:
        tiles.set_tilemap(tilemap("""
            level4
        """))
        for value22 in sprites.all_of_kind(SpriteKind.enemyblackghost):
            value22.destroy()
    elif current_level == 3:
        tiles.set_tilemap(tilemap("""
            level5
        """))
        for value23 in sprites.all_of_kind(SpriteKind.enemy):
            value23.destroy()
        for value3 in sprites.all_of_kind(SpriteKind.enemyghost):
            value3.destroy()
    for value4 in tiles.get_tiles_by_type(assets.tile("""
        myTile7
    """)):
        ghoasty = sprites.create(img("""
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
            """),
            SpriteKind.enemyghost)
        ghoasty.follow(Dog, 60)
        tiles.place_on_tile(ghoasty, value4)
        tiles.set_tile_at(value4, assets.tile("""
            transparency16
        """))
    for value5 in tiles.get_tiles_by_type(assets.tile("""
        myTile9
    """)):
        girly = sprites.create(img("""
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
            """),
            SpriteKind.girl)
        animation.run_image_animation(girly,
            [img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
        tiles.place_on_tile(girly, value5)
        tiles.set_tile_at(value5, assets.tile("""
            transparency16
        """))
    for value15 in tiles.get_tiles_by_type(assets.tile("""
        myTile
    """)):
        boi = sprites.create(img("""
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
            """),
            SpriteKind.boy)
        animation.run_image_animation(boi,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            500,
            True)
        tiles.place_on_tile(boi, value15)
        tiles.set_tile_at(value15, assets.tile("""
            transparency16
        """))
    for value6 in tiles.get_tiles_by_type(assets.tile("""
        myTile6
    """)):
        ghost = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        animation.run_image_animation(ghost,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            300,
            True)
        tiles.place_on_tile(ghost, value6)
        tiles.set_tile_at(value6, assets.tile("""
            transparency16
        """))
    for value7 in tiles.get_tiles_by_type(assets.tile("""
        myTile4
    """)):
        tiles.place_on_tile(Dog, value7)
        tiles.set_tile_at(value7, sprites.dungeon.floor_dark0)

def on_overlap_tile3(sprite9, location5):
    global ghost, bone
    tiles.set_tilemap(tilemap("""
        level6
    """))
    for value12 in tiles.get_tiles_by_type(assets.tile("""
        myTile6
    """)):
        ghost = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        animation.run_image_animation(ghost,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            300,
            True)
        tiles.place_on_tile(ghost, value12)
        tiles.set_tile_at(value12, assets.tile("""
            transparency16
        """))
    for value13 in tiles.get_tiles_by_type(assets.tile("""
        myTile4
    """)):
        tiles.place_on_tile(Dog, value13)
        tiles.set_tile_at(value13, assets.tile("""
            transparency16
        """))
    for value14 in tiles.get_tiles_by_type(assets.tile("""
        myTile13
    """)):
        bone = sprites.create(img("""
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
            """),
            SpriteKind.food)
        tiles.place_on_tile(bone, value14)
        tiles.set_tile_at(value14, assets.tile("""
            transparency16
        """))
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile12
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite10, location6):
    global bone
    tiles.set_tilemap(tilemap("""
        level7
    """))
    game.splash("collect as many bones as you can in 10 seconds!")
    for value152 in tiles.get_tiles_by_type(assets.tile("""
        myTile13
    """)):
        bone = sprites.create(img("""
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
            """),
            SpriteKind.food)
        tiles.place_on_tile(bone, value152)
        tiles.set_tile_at(value152, assets.tile("""
            transparency16
        """))
    for value16 in sprites.all_of_kind(SpriteKind.enemy):
        value16.destroy()
    for value17 in sprites.all_of_kind(SpriteKind.enemyghost):
        value17.destroy()
    for value18 in tiles.get_tiles_by_type(assets.tile("""
        myTile4
    """)):
        tiles.place_on_tile(Dog, value18)
        tiles.set_tile_at(value18, assets.tile("""
            transparency16
        """))
    info.start_countdown(10)
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile4)

kittyProjectile: Sprite = None
dogProjectile: Sprite = None
dogProjectileDelay = False
kittyVar: Sprite = None
bone: Sprite = None
ghost: Sprite = None
boi: Sprite = None
girly: Sprite = None
ghoasty: Sprite = None
bottom: Sprite = None
blackghost: Sprite = None
has_top = False
has_bottom = False
current_level = 0
Dog: Sprite = None
Dog = sprites.create(img("""
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
    """),
    SpriteKind.dog)
controller.move_sprite(Dog)
scene.camera_follow_sprite(Dog)
current_level = 0
start_level()

def on_on_update():
    global dogProjectile, dogProjectileDelay
    if kittyVar:
        if controller.A.is_pressed() and dogProjectileDelay == False:
            dogProjectile = sprites.create_projectile_from_sprite(img("""
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
                """),
                Dog,
                50,
                0)
            dogProjectile.set_kind(SpriteKind.dogProjectileKind)
            dogProjectileDelay = True
game.on_update(on_on_update)

def on_update_interval():
    global kittyProjectile
    if kittyVar:
        kittyProjectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            kittyVar,
            -50,
            0)
        kittyProjectile.set_kind(SpriteKind.kittyProjectileKind)
game.on_update_interval(750, on_update_interval)

def on_update_interval2():
    Dog.set_flag(SpriteFlag.GHOST_THROUGH_TILES, False)
game.on_update_interval(2000, on_update_interval2)

def on_update_interval3():
    global dogProjectileDelay
    dogProjectileDelay = False
game.on_update_interval(500, on_update_interval3)
