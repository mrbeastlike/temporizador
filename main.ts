input.onButtonPressed(Button.A, function () {
    Contando = true
})
input.onButtonPressed(Button.AB, function () {
    Contando = false
    Minutos = 0
    Segundos = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Contando = false
})
let Segundos = 0
let Minutos = 0
let Contando = false
Contando = false
Minutos = 0
basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    `)
basic.forever(function () {
    basic.showNumber(Minutos)
    if (Contando == true) {
        basic.pause(1000)
        Segundos += 1
    }
    if (Segundos == 60) {
        Minutos += 1
        Segundos = 0
        if (Minutos == 30) {
            music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
        }
    }
})
