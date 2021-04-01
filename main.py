def on_button_pressed_a():
    global ledrand
    ledrand = randint(0, 2)
    if ledrand == 0:
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
    elif ledrand == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif ledrand == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

ledrand = 0
score = 0
timer = 5

def on_forever():
    global score, ledrand
    if input.pin_is_pressed(TouchPin.P0) and ledrand == 0:
        basic.clear_screen()
        basic.show_icon(IconNames.HEART)
        score += 1
        ledrand = randint(0, 2)
        if ledrand == 0:
            basic.show_leds("""
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                """)
        elif ledrand == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        elif ledrand == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                """)
    if input.pin_is_pressed(TouchPin.P1) and ledrand == 1:
        basic.clear_screen()
        basic.show_icon(IconNames.YES)
        score += 1
        ledrand = randint(0, 2)
        if ledrand == 0:
            basic.show_leds("""
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                """)
        elif ledrand == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        elif ledrand == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                """)
    if input.pin_is_pressed(TouchPin.P2) and ledrand == 2:
        basic.clear_screen()
        basic.show_icon(IconNames.NO)
        score += 1
        ledrand = randint(0, 2)
        if ledrand == 0:
            basic.show_leds("""
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                """)
        elif ledrand == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        elif ledrand == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                """)
basic.forever(on_forever)

def on_forever2():
    global timer
    basic.pause(1000)
    timer = timer - 1
    if timer == 0:
        basic.clear_screen()
        game.pause()
        game.game_over()
        basic.show_string("" + str((score)))
basic.forever(on_forever2)
