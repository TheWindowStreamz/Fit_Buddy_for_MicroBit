buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    music.play(Sound1, music.PlaybackMode.InBackground)
    if (controlmodeNum == 4) {
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.windows) + "r", false)
        basic.pause(200)
        keyboard.sendString("http")
        basic.pause(200)
        keyboard.sendString("s://")
        basic.pause(200)
        keyboard.sendString("youtu")
        basic.pause(200)
        keyboard.sendString("be.com")
        basic.pause(200)
        keyboard.sendString("/wat")
        basic.pause(200)
        keyboard.sendString("ch?v=")
        basic.pause(200)
        keyboard.sendString("dQw4w")
        basic.pause(200)
        keyboard.sendString("9WgXcQ")
        basic.pause(200)
        keyboard.sendString(keyboard.keys(keyboard._Key.enter))
        basic.pause(5000)
        keyboard.sendString("f")
        for (let index = 0; index < 50; index++) {
            media.sendCode(media.keys(media._MediaKey.vol_up))
        }
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.mute))
    } else {
        if (Autoclicking) {
            Autoclicking = false
        } else {
            Autoclicking = true
        }
    }
})
function AddSumofArray (ArrayInput: any[]) {
    for (let index = 0; index < ArrayInput.length; index++) {
        RecordedSum += RecordedTemperatures.shift()
    }
    return ArrayInput.length
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    music.play(Sound1, music.PlaybackMode.InBackground)
    if (controlmodeNum == 4) {
        keyboard.sendString(keyboard.rawScancode(85))
    } else if (controlmodeNum == 3) {
        for (let index = 0; index < 5; index++) {
            media.sendCode(media.keys(media._MediaKey.vol_down))
        }
    } else {
        basic.showNumber(StepsHighScore)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (basicclearScreenisClearingScreen == 0) {
        basicclearScreenisClearingScreen = 1
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        led.fadeOut(1500)
led.enable(false)
    } else {
        basicclearScreenisClearingScreen = 0
        led.enable(true)
        music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 0, 255, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        led.fadeIn(1500)
    }
})
bluetooth.onBluetoothConnected(function () {
    if (inputtemperatureisTooHot == 0) {
        basic.showIcon(IconNames.Yes)
        music.play(music.createSoundExpression(WaveShape.Sine, 500000, 4900000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 500000, 4900000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 4800, 4700, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
    music.play(Sound1, music.PlaybackMode.InBackground)
    if (controlmodeNum == 4) {
        keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.shift) + "p", false)
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.next))
    } else {
        if (music.volume() < 0) {
            music.setBuiltInSpeakerEnabled(false)
            music.setVolume(0)
        } else {
            music.setBuiltInSpeakerEnabled(true)
            music.setVolume(127)
        }
    }
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    music.play(Sound1, music.PlaybackMode.InBackground)
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
input.onGesture(Gesture.Shake, function () {
    if (StepsIsCounting == 1) {
        StepsCount += 1
    } else {
        MoveTime = 0
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    music.play(Sound1, music.PlaybackMode.InBackground)
    if (controlmodeNum == 4) {
        keyboard.sendString(keyboard.rawScancode(86))
    } else if (controlmodeNum == 3) {
        for (let index = 0; index < 5; index++) {
            media.sendCode(media.keys(media._MediaKey.vol_up))
        }
    } else {
        if (MoveDoReminder == 1) {
            MoveDoReminder = 0
        } else {
            MoveDoReminder += 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(Sound1, music.PlaybackMode.InBackground)
    for (let index = 0; index < 10; index++) {
        basic.clearScreen()
    }
    if (controlmodeNum == 5) {
        controlmodeNum = 1
    } else {
        controlmodeNum += 1
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    music.play(Sound1, music.PlaybackMode.InBackground)
    if (controlmodeNum == 4) {
        keyboard.sendString(keyboard.keys(keyboard._Key.escape))
    } else if (controlmodeNum == 3) {
        media.sendCode(media.keys(media._MediaKey.previous))
    } else {
        StepsHighScore = 0
    }
})
timeanddate.onDayChanged(function () {
    SumLength = AddSumofArray(RecordedTemperatures)
    AverageTemperature = Math.round(RecordedSum / RecordedTemperatures.length)
    datalogger.log(datalogger.createCV("AverageTemperature", AverageTemperature))
})
let SumLength = 0
let MoveTime = 0
let StepsCount = 0
let StepsIsCounting = 0
let StepsHighScore = 0
let RecordedTemperatures: number[] = []
let Autoclicking = false
let MoveDoReminder = 0
let basicclearScreenisClearingScreen = 0
let AverageTemperature = 0
let RecordedSum = 0
let Sound1: SoundExpression = null
let controlmodeNum = 0
let inputtemperatureisTooHot = 0
datalogger.setColumnTitles(
"StepsCount",
"AverageTemperature"
)
music.setVolume(127)
if (input.temperature() >= 85) {
    inputtemperatureisTooHot = 1
    led.setBrightness(64)
} else {
    controlmodeNum = 1
    Sound1 = music.createSoundExpression(
    WaveShape.Sine,
    500000,
    4900000,
    255,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    )
    media.startMediaService()
    mouse.startMouseService()
    keyboard.startKeyboardService()
    music.setBuiltInSpeakerEnabled(true)
    inputtemperatureisTooHot = 0
    led.setBrightness(127)
    music.play(music.createSoundExpression(WaveShape.Sine, 500000, 4900000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 4800, 4700, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 500000, 4900000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 4900, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
    }
    basic.clearScreen()
    RecordedSum = 0
    AverageTemperature = 0
    basicclearScreenisClearingScreen = 0
    MoveDoReminder = 1
}
loops.everyInterval(1000, function () {
    if (MoveDoReminder == 1) {
        MoveTime += 1
    }
})
loops.everyInterval(2500, function () {
    RecordedTemperatures.push(input.temperature())
})
basic.forever(function () {
    if (inputtemperatureisTooHot == 0 && input.temperature() >= 85) {
        control.reset()
    } else if (input.temperature() < 85) {
        inputtemperatureisTooHot = 0
    } else if (inputtemperatureisTooHot == 1) {
        basic.showString("Heat Warning!")
        basic.showNumber(input.temperature())
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        music.play(Sound1, music.PlaybackMode.InBackground)
        timeanddate.advanceBy(1, timeanddate.TimeUnit.Minutes)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        music.play(Sound1, music.PlaybackMode.InBackground)
        timeanddate.advanceBy(1, timeanddate.TimeUnit.Hours)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        music.play(Sound1, music.PlaybackMode.InBackground)
        timeanddate.advanceBy(1, timeanddate.TimeUnit.Days)
    }
})
basic.forever(function () {
    if (Autoclicking) {
        mouse.click()
    }
})
control.inBackground(function () {
    while (true) {
        if (inputtemperatureisTooHot == 0) {
            if (MoveTime >= 900 && MoveDoReminder == 1) {
                music.play(music.createSoundExpression(WaveShape.Sine, 500000, 4900000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                music.play(music.createSoundExpression(WaveShape.Sine, 500000, 4900000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                music.play(music.createSoundExpression(WaveShape.Sine, 4800, 4700, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                led.enable(true)
                basic.showIcon(IconNames.Heart)
                basic.pause(10000)
                basic.clearScreen()
            } else if (controlmodeNum == 5) {
                if (input.compassHeading() >= 338 || input.compassHeading() < 23) {
                    basic.showArrow(ArrowNames.North)
                } else if (input.compassHeading() >= 293) {
                    basic.showArrow(ArrowNames.NorthEast)
                } else if (input.compassHeading() >= 248) {
                    basic.showArrow(ArrowNames.East)
                } else if (input.compassHeading() >= 203) {
                    basic.showArrow(ArrowNames.SouthEast)
                } else if (input.compassHeading() >= 158) {
                    basic.showArrow(ArrowNames.South)
                } else if (input.compassHeading() >= 113) {
                    basic.showArrow(ArrowNames.SouthWest)
                } else if (input.compassHeading() >= 68) {
                    basic.showArrow(ArrowNames.West)
                } else if (input.compassHeading() >= 23) {
                    basic.showArrow(ArrowNames.NorthWest)
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
