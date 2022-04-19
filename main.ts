//This is a small extension for using deltaTime in blocks. This allows for slow projects to run not in slow motion.
//Thanks to KWX because I followed how he used delta in MakeCode. I knew what deltatime was from my using of Unity, but I didn't know how to implement it into MakeCode.
let timeLastFrame = 0
namespace Delta {
    //%block=Delta
    export function DELTA() : number {
        return (game.runtime() -timeLastFrame) / 1000
    }
}
game.onUpdate(function() {
    timeLastFrame = game.runtime()
})