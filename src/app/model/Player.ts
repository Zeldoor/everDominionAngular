import { Troop } from "./Troop";

export interface Player
{
    nick: String;
    score: number;
    // position: {x: number, y: number};
    troops: Troop[];
    attack: number;
    health: number;
    onAttack: boolean;
    onDefence: boolean;
    maxTroops: 6;
    
}