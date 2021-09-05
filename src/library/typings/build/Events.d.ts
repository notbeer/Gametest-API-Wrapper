import { BeforeChatEvent, ChatEvent, ActorAddEffectEvent, EntityEvent, WeatherChangedEvent, Entity } from "Minecraft";

import { registerInformation } from './classes/CommandBuilder';

export interface EventList {
    beforeMessage: [BeforeChatEvent],
    messageCreate: [ChatEvent],
    tick: [],
    entityEffected: [ActorAddEffectEvent],
    entityCreate: [EntityEvent],
    weatherChange: [WeatherChangedEvent],
    playerJoin: [Entity],
    playerLeave: [playerLeave],
    ready: [ready],
    customCommand: [customCommand]
}
interface playerLeave {
    readonly name: string
}
interface ready {
    readonly loadTime: number
}
interface customCommand {
    registration: registerInformation,
    data: BeforeChatEvent,
    readonly createdAt: Date,
    readonly createdTimestamp: number
}