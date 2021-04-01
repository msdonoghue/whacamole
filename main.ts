input.onButtonPressed(Button.A, function () {
    ledrand = randint(0, 2)
    if (ledrand == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else if (ledrand == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (ledrand == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
})
let ledrand = 0
let timer = 5
let score = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && ledrand == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        score += 1
        ledrand = randint(0, 2)
        if (ledrand == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        } else if (ledrand == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (ledrand == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
        }
    }
    if (input.pinIsPressed(TouchPin.P1) && ledrand == 1) {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        score += 1
        ledrand = randint(0, 2)
        if (ledrand == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        } else if (ledrand == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (ledrand == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
        }
    }
    if (input.pinIsPressed(TouchPin.P2) && ledrand == 2) {
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        score += 1
        ledrand = randint(0, 2)
        if (ledrand == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        } else if (ledrand == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (ledrand == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    basic.pause(1000)
    timer = timer - 1
    if (timer == 0) {
        basic.clearScreen()
        basic.showString("Scr")
        basic.showString("" + (score))
    }
})
