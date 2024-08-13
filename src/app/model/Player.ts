import { Friend } from "./Friend";
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
    online: String;

    activeTroops: Troop[];
    storageTroops: Troop[];
    friends: Friend[];
}