def on_forever():
    if input.rotation(Rotation.PITCH) == 0:
        basic.show_icon(IconNames.YES)
        music.ring_tone(262)
    else:
        basic.show_icon(IconNames.NO)
        music.ring_tone(0)
basic.forever(on_forever)
