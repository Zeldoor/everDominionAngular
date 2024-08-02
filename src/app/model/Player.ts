import { Troop } from "./Troop";

export interface Player
{
    id:number;
    nick: String;
    playerMinDmg: number;
    playerMaxDmg: number;
    playerHealth: number;
    stamina: number;
    gold: number;

    activeTroops: Troop[];
    storageTroops: Troop[];
}