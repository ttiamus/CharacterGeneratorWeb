import { Stats } from '../stats/stats.model';
import { Saves } from './saves.model';

export class Character {
    id: string = null;
    
    stats: Stats = new Stats();
    
    characterName: string = "";
    playerName: string = "";
    gender: string = "";
    age: number = null;
    height: number = null;
    weight: number = null;
    hair: string = "";
    eyes: string = "";
    
    saves: Saves = new Saves();
    
    
    constructor() {}
}