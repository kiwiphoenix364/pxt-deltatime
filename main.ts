//This is a small extension for using deltaTime in blocks. This allows for slow projects to run not in slow motion.
let timeLastFrame = 0
namespace Delta {
    //%block=delta
    export function DELTA() : number {
        return control.eventContext().deltaTime * 30
    }
    //%block='rawdelta'
    export function RAW(): number {
        return control.eventContext().deltaTime
    }
}