//This is a small extension for using deltaTime in blocks. This allows for slow projects to run not in slow motion.
let timeLastFrame = 0
namespace Delta {
    //%block=Delta
    export function DELTA() : number {
        scene.CONTROLLER_PRIORITY,(function() {
    timeLastFrame = game.runtime()
})
        return ((game.runtime() - timeLastFrame) / 20) + 1
        
    }
}
