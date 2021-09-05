import { Entity } from "Minecraft";

export type dimension = 'overworld' | 'nether' | 'the end';
export interface getEntityAtPosReturn {
    list: Array<Entity> | null,
    error: Boolean
}