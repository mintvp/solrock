def loggingStart():
    power.low_power_pause(3600000)
    datalogger.log(datalogger.create_cv("Single", pins.analog_read_pin(AnalogPin.P0)),
        datalogger.create_cv("Dual", pins.analog_read_pin(AnalogPin.P1)))

def on_button_pressed_a():
    global logging
    logging = True
    basic.show_leds("""
        . # . # .
                # # . # #
                . . . . .
                . . # . .
                . . # . .
    """)
    for index in range(1 + 6 * testMode):
        for index2 in range(8):
            loggingStart()
        for index3 in range(16 * testMode):
            power.low_power_pause(3600000)
    while True:
        basic.show_leds("""
            . # # # #
                        . # . . #
                        . # . . #
                        # # . # #
                        # # . # #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global testMode
    testMode = 0
    basic.show_leds("""
        # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

testMode = 0
logging = False
logging = False
testMode = 1
datalogger.include_timestamp(FlashLogTimeStampFormat.HOURS)
datalogger.set_column_titles("Single", "Dual")
basic.show_leds("""
    . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
""")