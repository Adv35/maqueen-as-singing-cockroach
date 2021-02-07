basic.forever(function () {
    if (input.lightLevel() < 40) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(500)
    } else if (input.lightLevel() > 40 && input.lightLevel() < 95) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        music.playMelody("- B - - - - - - ", 120)
        basic.pause(500)
    } else if (input.lightLevel() > 96 && input.lightLevel() < 160) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        music.playMelody("- - A - - - - - ", 120)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        music.playMelody("- - - - E - - - ", 120)
        basic.pause(500)
    }
    maqueen.motorStop(maqueen.Motors.All)
})
