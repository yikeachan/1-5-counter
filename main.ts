input.onButtonPressed(Button.A, function () {
    Index = -1
    isCounting = true
    while (isCounting) {
        Index = Index + 1
        basic.showNumber(Index)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let Index = 0
let isCounting = false
basic.showString("Ready")
isCounting = false
basic.forever(function () {
	
})
