export interface Entity {
    readonly id: string,
    isSneaking: boolean,
    readonly location: Location,
    nameTag: string,
    readonly velocity: Location
}

interface Location {
    x: number,
    y: number,
    z: number
}