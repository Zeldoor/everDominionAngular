import { Player } from "./Player";


export interface User
{

    id:number;
    email:string;
    username:string;
    password:string;

    roles:string[];
    player_id:number;
}