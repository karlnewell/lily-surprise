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

def on_on_overlap(sprite, otherSprite):
    global hasKey
    boi.set_flag(SpriteFlag.GHOST, True)
    game.splash("Here is the key. Go unlock the gate. But be careful. There is a rabid beast outside of the gate. He will want to fight")
    pause(2000)
    boi.set_flag(SpriteFlag.GHOST, False)
    hasKey = True
sprites.on_overlap(SpriteKind.dog, SpriteKind.boy, on_on_overlap)

def on_overlap_tile(sprite2, location):
    global current_level
    current_level = 0
    start_level()
    for value8 in sprites.all_of_kind(SpriteKind.food):
        value8.destroy()
    for value9 in sprites.all_of_kind(SpriteKind.enemy):
        value9.destroy()
scene.on_overlap_tile(SpriteKind.dog, sprites.dungeon.stair_north, on_overlap_tile)

def on_on_overlap2(sprite3, otherSprite2):
    game.over(False)
sprites.on_overlap(SpriteKind.dog, SpriteKind.enemyblackghost, on_on_overlap2)

def on_overlap_tile2(sprite4, location2):
    global value102, projectile
    if hasKey == True:
        tiles.set_tilemap(tilemap("""
            level15
        """))
        for value18 in tiles.get_tiles_by_type(assets.tile("""
            myTile4
        """)):
            tiles.place_on_tile(Dog, value18)
            tiles.set_tile_at(value18, sprites.castle.tile_grass1)
        for value12 in tiles.get_tiles_by_type(assets.tile("""
            myTile10
        """)):
            value102 = sprites.create(img("""
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
                """),
                SpriteKind.citty)
            tiles.place_on_tile(value102, value12)
            tiles.set_tile_at(value12, sprites.castle.tile_grass1)
            value102.vy = 40
        while True:
            projectile = sprites.create_projectile_from_sprite(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . 4 4 4 4 4 . . . . . . 
                                    . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
                                    . . 4 d 5 d 5 5 5 d d d 4 4 . . 
                                    . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
                                    . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
                                    . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
                                    . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
                                    . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
                                    . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
                                    . . 2 4 d d 5 5 5 5 d d 5 4 . . 
                                    . . . 2 2 4 d 5 5 d d 4 4 . . . 
                                    . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
                                    . . . 2 2 4 4 4 4 4 4 2 2 . . . 
                                    . . . . . 2 2 2 2 2 2 . . . . .
                """),
                value102,
                -50,
                0)
    else:
        game.splash("You don't have the key yet. ")
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

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

def on_on_overlap3(sprite5, otherSprite3):
    game.over(False)
sprites.on_overlap(SpriteKind.dog, SpriteKind.enemyghost, on_on_overlap3)

def on_countdown_end():
    global current_level
    for value10 in sprites.all_of_kind(SpriteKind.food):
        value10.destroy()
    current_level = 2
    start_level()
info.on_countdown_end(on_countdown_end)

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

def on_on_overlap4(sprite6, otherSprite4):
    game.over(False)
sprites.on_overlap(SpriteKind.dog, SpriteKind.enemy, on_on_overlap4)

def on_overlap_tile3(sprite7, location3):
    global current_level
    current_level += 1
    start_level()
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile3)

def on_hit_wall(sprite8, location4):
    sprite8.vy = sprite8.vy * -1
scene.on_hit_wall(SpriteKind.citty, on_hit_wall)

def on_hit_wall2(sprite9, location5):
    blackghost.vx = blackghost.vx * -1
scene.on_hit_wall(SpriteKind.enemyblackghost, on_hit_wall2)

def start_level():
    global blackghost, ghoasty, girly, boi, ghost
    if current_level == 0:
        tiles.set_tilemap(tilemap("""
            level1
        """))
    elif current_level == 1:
        tiles.set_tilemap(tilemap("""
            level2
        """))
        for value in tiles.get_tiles_by_type(assets.tile("""
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
            tiles.place_on_tile(blackghost, value)
            tiles.set_tile_at(value, assets.tile("""
                transparency16
            """))
        blackghost.vx = -40
    elif current_level == 2:
        tiles.set_tilemap(tilemap("""
            level4
        """))
        for value2 in sprites.all_of_kind(SpriteKind.enemyblackghost):
            value2.destroy()
    elif current_level == 3:
        tiles.set_tilemap(tilemap("""
            level5
        """))
        for value22 in sprites.all_of_kind(SpriteKind.enemy):
            value22.destroy()
        for value3 in sprites.all_of_kind(SpriteKind.enemyghost):
            value3.destroy()
    else:
        pass
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
        tiles.set_tile_at(value7, assets.tile("""
            transparency16
        """))

def on_on_overlap5(sprite10, otherSprite5):
    otherSprite5.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.dog, SpriteKind.food, on_on_overlap5)

def on_overlap_tile4(sprite11, location6):
    global current_level
    current_level += -1
    start_level()
    for value11 in sprites.all_of_kind(SpriteKind.girl):
        value11.destroy()
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile11
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite12, location7):
    global ghost, bone
    tiles.set_tilemap(tilemap("""
        level6
    """))
    for value122 in tiles.get_tiles_by_type(assets.tile("""
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
        tiles.place_on_tile(ghost, value122)
        tiles.set_tile_at(value122, assets.tile("""
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
    on_overlap_tile5)

def on_on_overlap6(sprite13, otherSprite6):
    girly.set_flag(SpriteFlag.GHOST, True)
    game.splash("Find my brother. He will give you a key to unlock a gate so you can escape. Good luck.")
    pause(2000)
    girly.set_flag(SpriteFlag.GHOST, False)
sprites.on_overlap(SpriteKind.dog, SpriteKind.girl, on_on_overlap6)

def on_overlap_tile6(sprite14, location8):
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
    for value182 in tiles.get_tiles_by_type(assets.tile("""
        myTile4
    """)):
        tiles.place_on_tile(Dog, value182)
        tiles.set_tile_at(value182, assets.tile("""
            transparency16
        """))
    info.start_countdown(10)
scene.on_overlap_tile(SpriteKind.dog,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile6)

bone: Sprite = None
ghost: Sprite = None
girly: Sprite = None
ghoasty: Sprite = None
blackghost: Sprite = None
projectile: Sprite = None
value102: Sprite = None
hasKey = False
boi: Sprite = None
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
current_level = 3
start_level()
game.splash("Get the dog to the end without dying! Good luck!")