basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 5 && input.rotation(Rotation.Pitch) > -5 && (input.rotation(Rotation.Roll) < 5 && input.rotation(Rotation.Roll) > -5)) {
        basic.showIcon(IconNames.Yes)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.No)
        music.ringTone(0)
    }
})
