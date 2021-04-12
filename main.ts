input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . # . . .
        . # . . .
        # # . . #
        `)
    music.playMelody("E B G C F B D C ", 120)
})
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
	
})
