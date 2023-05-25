basic.forever(function () {
    led.plot(4, 0)
    basic.pause(input.temperature() * 4)
    led.unplot(4, 0)
    basic.pause(input.temperature() * 4)
})
