import { Stats } from '../stats/stats.model';
import { Saves } from './saves.model';

export class Character {
    Id: string = null;
    
    Stats: Stats = new Stats();
    
    CharacterName: string = "";
    PlayerName: string = "";
    Gender: string = "";
    Age: number = null;
    Height: number = null;
    Weight: number = null;
    Hair: string = "";
    Eyes: string = "";
    
    Saves: Saves = new Saves();
    
    
    constructor() {}
}