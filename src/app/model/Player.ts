import { Troop } from "./Troop";

export interface Player
{
    nick: String;
    score: number;
    // position: {x: number, y: number};
    troops: Troop[];
    damage: number;
    health: number;
    onAttack: boolean;
    maxTroops: 6;
}