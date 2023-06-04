export type Crosses = "X";
export type Zeros = "O";

export type Draw = "draw";
export type Winner = Either<Draw, Player>;

export type GameState = 
    | { type: "start"  }
    | { type: "win", winner: Winner }
    | { type: "step", player: Player, field: FieldData };
export type Coords = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type CrossesPlayer = Crosses & {tag: "Player"};
export type ZerosPlayer = Zeros & {tag: "Player"};
export type Player = CrossesPlayer | ZerosPlayer;

export type CellDataMarked = Crosses | Zeros;
export type CellData = CellDataMarked | null;

export type FieldData = [
    CellData, CellData, CellData,
    CellData, CellData, CellData,
    CellData, CellData, CellData,
];

export function createCrossesPlayer():CrossesPlayer {
    const str = new String("X") as CrossesPlayer;
    str.tag = "Player";
    return str;
}

export function createZerosPlayer():ZerosPlayer {
    const str = new String("O") as ZerosPlayer;
    str.tag = "Player";
    return str;
}

export function isCoords(n: number): n is Coords {
    return Number.isInteger(n) && n >= 1 && n <= 9;
}

export function isDefined<T> (value: T | undefined | null): value is T {
    return value !== null && value !== undefined; 
}