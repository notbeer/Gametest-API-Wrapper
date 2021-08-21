export interface Player {
    readonly id: string,
    isSneaking: boolean,
    readonly location: Location,
    readonly name: string,
    nameTag: string,
    readonly velocity: Location
}

interface Location {
    x: number,
    y: number,
    z: number
}