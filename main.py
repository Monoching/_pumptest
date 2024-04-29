function LED2 () {
    for (let range2 = 0; range2 <= 9; range2++) {
        strip.setPixelColor(range2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
    }
}
function LED () {
    for (let range = 0; range <= 9; range++) {
        strip.setPixelColor(range, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
    }
    return neopixel.colors(NeoPixelColors.Orange)
}
let Signal = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
let PixlPos = 5
basic.forever(function () {
    LED()
    LED2()
})
basic.forever(function () {
    while (LED() == neopixel.colors(NeoPixelColors.Orange)) {
        basic.setLedColors(0xff8000, 0xff8000, 0xff8000)
        while (LED2() == neopixel.colors(NeoPixelColors.Red)) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        }
    }
})
