import { BeforeChatEvent } from "@minecraft/server";

export interface registerInformation {
    private?: boolean,
    cancelMessage?: boolean,
    name: string,
    aliases?: Array<string>,
    description?: string,
    usage?: string,
    example?: Array<string>
}
export interface storedRegisterInformation extends registerInformation {
    callback: (data: BeforeChatEvent, args: Array<string>) => void
}