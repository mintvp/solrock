function loggingStart() {
    power.lowPowerPause(3600000)
    datalogger.log(datalogger.createCV("Single", pins.analogReadPin(AnalogPin.P0)), datalogger.createCV("Dual", pins.analogReadPin(AnalogPin.P1)))
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    logging = true
    basic.showLeds(`
        . # . # .
                # # . # #
                . . . . .
                . . # . .
                . . # . .
    `)
    for (let index = 0; index < 1 + 6 * testMode; index++) {
        for (let index2 = 0; index2 < 8; index2++) {
            loggingStart()
        }
        for (let index3 = 0; index3 < 16 * testMode; index3++) {
            power.lowPowerPause(3600000)
        }
    }
    while (true) {
        basic.showLeds(`
            . # # # #
                        . # . . #
                        . # . . #
                        # # . # #
                        # # . # #
        `)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    testMode = 0
    basic.showLeds(`
        # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
    `)
})
let testMode = 0
let logging = false
logging = false
testMode = 1
datalogger.includeTimestamp(FlashLogTimeStampFormat.Hours)
datalogger.setColumnTitles("Single", "Dual")
basic.showLeds(`
    . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
`)
