input.onPinPressed(TouchPin.P0, function () {
    basic.showString("LOVE METERER")
    basic.showNumber(randint(1, 100))
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    ohio = randint(1, 5)
    if (ohio == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (ohio == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (ohio == 3) {
        basic.showIcon(IconNames.House)
        images.createImage(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
        music.play(music.stringPlayable("C5 C5 F F G C C - ", 120), music.PlaybackMode.UntilDone)
    } else if (ohio == 4) {
        basic.showIcon(IconNames.Duck)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        game.addLife(1)
    } else {
        if (ohio == 5) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                . # # # #
                . # . # .
                `)
            basic.showString("sus")
        }
    }
})
let ohio = 0
basic.showString("SIMULATOR")
