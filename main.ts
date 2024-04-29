input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    strip.setPixelColor(PixlPos, neopixel.colors(NeoPixelColors.Black))
    PixlPos += -1
    strip.show()
})
function LED2 () {
    Song1 = false
    for (let range2 = 10; range2 <= 19; range2++) {
        strip.setPixelColor(range2, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        PixlPos += 1
        basic.pause(500)
        
    }
Song2 = true
}
function LED3 () {
    Song2 = false
    for (let range3 = 20; range3 <= 30; range3++) {
        strip.setPixelColor(range3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        PixlPos += 1
        basic.pause(500)
    }
Song2 = false
    Song0 = true
}
function LED () {
    for (let range = 0; range <= 9; range++) {
        strip.setPixelColor(PixlPos, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        PixlPos += 1
        basic.pause(500)
    }
    Song1 = true
}
let strip: neopixel.Strip = null
let Song2 = false
let Song1 = false
let Song0 = false
let PixlPos = 0
PixlPos = 0
Song0 = true
Song1 = false
Song2 = false
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    while (Song1 == true) {
        radio.sendNumber(1)
        break;
    }
})
basic.forever(function () {
    while (Song2 == true) {
        radio.sendNumber(3)
        break;
    }
})
basic.forever(function () {
    basic.showNumber(PixlPos)
})
basic.forever(function () {
    while (Song0 == true) {
        radio.sendNumber(0)
        break;
    }
})
basic.forever(function () {
    Song0 = false
    LED()
    basic.pause(10)
    LED2()
    basic.pause(10)
    LED3()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
