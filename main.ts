input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    time = 0
    ready = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.rotation(Rotation.Pitch))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Butterfly)
    start = 1
})
let X = 0
let ready = 0
let time = 0
let start = 0
basic.showIcon(IconNames.Heart)
input.setAccelerometerRange(AcceleratorRange.EightG)
start = 0
basic.forever(function () {
    if (ready == 0) {
        X = input.acceleration(Dimension.X)
        if (Math.abs(X) > 1500) {
            time = Math.abs(X)
            ready = 0
            basic.showNumber(time)
        }
    }
    if (start == 0) {
        X = input.acceleration(Dimension.X)
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        basic.pause(time)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        start = 0
    }
})
