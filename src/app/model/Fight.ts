import { Player } from "./Player";

export interface Fight
{
    attacker: Player;
    defender: Player;
    results: string[];
}