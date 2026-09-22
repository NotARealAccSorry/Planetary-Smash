namespace SpriteKind {
    export const Stage = SpriteKind.create()
    export const Planet = SpriteKind.create()
}
function Intro () {
    if (!(blockSettings.exists("IntroComplete"))) {
        TerminalText = fancyText.create(" Game> Curl Planetary_Smash.exe\\n\\nGame>Percent Completed 10% \\n\\n Game>Percent Completed -50%\\n\\nGame>Percent Completed 62%\\n\\n Game>Percent Completed 99%\\n\\nGame>Download Finished\\n\\nGame>Installing\\n\\nGame>Installing Solar_System\\n\\nGame>Install Small_Celestial_Bodies\\n\\nGame>Installation Complete \\n\\nGame>Run Planetary Smash \\n\\nGame>Complete \\n\\nGame>Now Exiting Terminal \\n\\n", 0, 7, fancyText.tiny_4)
        fancyText.animateAtSpeed(TerminalText, fancyText.TextSpeed.VeryFast, fancyText.AnimationPlayMode.UntilDone)
        color.startFadeFromCurrent(color.Black, 500)
        pause(500)
        sprites.destroy(TerminalText)
        color.startFadeFromCurrent(color.originalPalette, 1)
        PresentsTextSprite = sprites.create(assets.image`TheEarth`, SpriteKind.Player)
        PresentsTextSprite.setPosition(-80, 20)
        easing.blockEaseTo(PresentsTextSprite, 80, 60, 750, easing.Mode.OutQuad)
        pause(1250)
        imagemorph.morph(PresentsTextSprite, assets.image`HulaHoop`)
        pause(500)
        color.startFadeFromCurrent(color.Black, 500)
    }
    blockSettings.writeBoolean("IntroComplete", true)
}
let PresentsTextSprite: Sprite = null
let TerminalText: fancyText.TextSprite = null
Intro()
