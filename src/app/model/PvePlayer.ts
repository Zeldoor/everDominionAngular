import { Troop } from "./Troop";

export interface PvePlayer
{
    id:number;
    nick: String;
    gold: number;
    icon: String;
    pveMinDmg: number;
    pveMaxDmg: number;
    pveHealth: number;
    description: String;

    pveTroops: Troop[];
}