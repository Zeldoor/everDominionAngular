import { Friend } from "./Friend";
import { Gear } from "./Gear";
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
    icon: String;

    activeGears: Gear[];
    storageGears: Gear[];

    activeTroops: Troop[];
    storageTroops: Troop[];

    friends: Friend[];
}