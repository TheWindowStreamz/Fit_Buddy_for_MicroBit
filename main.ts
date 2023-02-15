buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    if (controlmodeNum == 5) {
        controlmodeNum = 1
    } else {
        controlmodeNum += 1
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    if (controlmodeNum == 4) {
        keyboard.sendString(keyboard.rawScancode(85))
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.vol_down))
    } else {
        basic.showNumber(StepsHighScore)
    }
})
bluetooth.onBluetoothConnected(function () {
    if (inputtemperatureisTooHot == 0) {
        media.startMediaService()
        keyboard.startKeyboardService()
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    if (inputtemperatureisTooHot == 0) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    if (controlmodeNum == 4) {
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.shift) + "p", false)
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.next))
    } else {
        control.reset()
    }
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    if (controlmodeNum == 4) {
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.rawScancode(116), false)
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.playPause))
    } else {
        if (StepsIsCounting == 0) {
            StepsIsCounting = 1
        } else {
            StepsIsCounting = 0
            if (StepsCount > StepsHighScore) {
                StepsHighScore = StepsCount
            }
            StepsCount = 0
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (basicclearScreenisClearingScreen == 0) {
        basicclearScreenisClearingScreen = 1
    } else {
        basicclearScreenisClearingScreen = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    if (StepsIsCounting == 1) {
        StepsCount += 1
    } else {
        MoveTime = 0
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    if (controlmodeNum == 4) {
        keyboard.sendString(keyboard.rawScancode(86))
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.vol_up))
    } else {
        if (MoveDoReminder == 1) {
            MoveDoReminder = 0
        } else {
            MoveDoReminder += 1
        }
    }
})
timeanddate.onDayChanged(function () {
    basic.pause(25200000)
    basic.showString("Good Morning!")
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    if (controlmodeNum == 4) {
        keyboard.sendString(keyboard.keys(keyboard._Key.escape))
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.previous))
    } else {
        StepsHighScore = 0
    }
})
let MoveTime = 0
let basicclearScreenisClearingScreen = 0
let StepsCount = 0
let StepsIsCounting = 0
let StepsHighScore = 0
let MoveDoReminder = 0
let controlmodeNum = 0
let inputtemperatureisTooHot = 0
music.setVolume(200)
if (input.temperature() >= 40) {
    inputtemperatureisTooHot = 1
    led.setBrightness(64)
} else {
    inputtemperatureisTooHot = 0
    led.setBrightness(255)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
    for (let index = 0; index < 12; index++) {
        if (input.compassHeading() >= 338 || input.compassHeading() < 23) {
            basic.showArrow(ArrowNames.North)
        } else if (input.compassHeading() >= 293) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (input.compassHeading() >= 248) {
            basic.showArrow(ArrowNames.West)
        } else if (input.compassHeading() >= 203) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (input.compassHeading() >= 158) {
            basic.showArrow(ArrowNames.South)
        } else if (input.compassHeading() >= 113) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (input.compassHeading() >= 68) {
            basic.showArrow(ArrowNames.East)
        } else if (input.compassHeading() >= 23) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            basic.showString("?")
        }
    }
    basic.clearScreen()
    basic.showString("Hello!")
    controlmodeNum = 1
    MoveDoReminder = 1
}
loops.everyInterval(1000, function () {
    if (MoveDoReminder == 1) {
        MoveTime += 1
    }
})
basic.forever(function () {
    if (inputtemperatureisTooHot == 0 && input.temperature() >= 40) {
        control.reset()
    } else if (input.temperature() < 40) {
        inputtemperatureisTooHot = 0
    } else if (inputtemperatureisTooHot == 1) {
        music.playMelody("B C5 F G A B C5 - ", 318)
        basic.showString("Heat Warning!")
        music.playMelody("B C5 F G A B C5 - ", 318)
        basic.showNumber(input.temperature())
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        timeanddate.advanceBy(1, timeanddate.TimeUnit.Minutes)
        basic.pause(250)
    }
})
control.inBackground(function () {
    while (true) {
        if (basicclearScreenisClearingScreen == 1) {
            led.enable(false)
        } else {
            led.enable(true)
        }
        if (inputtemperatureisTooHot == 0) {
            if (MoveTime >= 900 && MoveDoReminder == 1) {
                led.enable(true)
                basic.showIcon(IconNames.Heart)
                basic.pause(10000)
                basic.clearScreen()
                if (basicclearScreenisClearingScreen == 1) {
                    led.enable(false)
                }
            } else if (controlmodeNum == 5) {
                if (input.compassHeading() >= 338 || input.compassHeading() < 23) {
                    basic.showArrow(ArrowNames.North)
                } else if (input.compassHeading() >= 293) {
                    basic.showArrow(ArrowNames.NorthWest)
                } else if (input.compassHeading() >= 248) {
                    basic.showArrow(ArrowNames.West)
                } else if (input.compassHeading() >= 203) {
                    basic.showArrow(ArrowNames.SouthWest)
                } else if (input.compassHeading() >= 158) {
                    basic.showArrow(ArrowNames.South)
                } else if (input.compassHeading() >= 113) {
                    basic.showArrow(ArrowNames.SouthEast)
                } else if (input.compassHeading() >= 68) {
                    basic.showArrow(ArrowNames.East)
                } else if (input.compassHeading() >= 23) {
                    basic.showArrow(ArrowNames.NorthEast)
                } else {
                    basic.showString("?")
                }
            } else if (controlmodeNum == 4) {
                if (keyboard.isEnabled()) {
                    basic.showIcon(IconNames.Yes)
                } else {
                    basic.showIcon(IconNames.No)
                }
            } else if (controlmodeNum == 3) {
                if (media.isEnabled()) {
                    basic.showIcon(IconNames.Yes)
                } else {
                    basic.showIcon(IconNames.No)
                }
            } else if (controlmodeNum == 2) {
                basic.showString(timeanddate.date(timeanddate.DateFormat.MDY))
            } else if (controlmodeNum == 1) {
                basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
            }
        }
    }
})
