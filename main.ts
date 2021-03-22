input.onButtonPressed(Button.A, function () {
    basic.showString("Player 1:")
    basic.showNumber(Player_one)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Player 2:")
    basic.showNumber(Player_two)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Coin 1:")
    coin_one = randint(0, 1)
    coin_two = randint(0, 1)
    if (coin_one == 0) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    basic.pause(1000)
    basic.showString("Coin 2")
    if (coin_two == 0) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        if ((coin_one && coin_two) == 0) {
            Player_one += 1
        } else if ((coin_one || coin_two) == 1 && (coin_one || coin_two) == 1) {
            Player_one += 1
        } else if (coin_one == 1 && !(coin_two == 1)) {
            Player_two += 1
        }
    }
})
let Player_two = 0
let Player_one = 0
let coin_two = 0
let coin_one = 0
coin_one = 0
coin_two = 0
Player_one = 0
Player_two = 0
basic.forever(function () {
    if (Player_one == 5) {
        basic.showString("Player 1 Wins!")
    } else if (Player_two == 5) {
        basic.showString("Player 2 Wins!")
    }
})
