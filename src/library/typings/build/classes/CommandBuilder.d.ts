import { BeforeChatEvent } from "Minecraft";

export interface registerInformation {
    private?: boolean,
    cancelMessage?: boolean,
    name: string,
    aliases?: Array<string>,
    description?: string,
    usage?: string,
    example?: Array<String>
}
export interface storedRegisterInformation extends registerInformation {
    callback: (data: BeforeChatEvent, args: Array<string>) => void
}