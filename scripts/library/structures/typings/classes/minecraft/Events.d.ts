import { Player } from "./Player";
import { Effect } from "./effect";
import { Entity } from "./Entity";

export interface beforeChat {
    canceled: boolean,
    message: string,
    sender: Player,
    sendToTargets: boolean,
    targets: Player[]
}
export interface chat {
    message: string,
    sender: Player,
    sendToTargets: boolean,
    targets: Player[]
}
export interface effectAdd {
    effect: Effect,
    effectState: number,
    entity: Entity
}
export interface entityCreate {
    entity: Entity
}
export interface weatherChange {
    readonly dimension: string,
    readonly lightning: boolean,
    readonly raining: boolean
}