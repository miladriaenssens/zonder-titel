input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showNumber(persoon - 1)
        persoon = persoon - 1
    }
})
let persoon = 0
persoon = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(persoon + 1)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        persoon += 1
    }
})
