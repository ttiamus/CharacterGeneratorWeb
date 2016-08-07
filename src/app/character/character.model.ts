import { Stats } from '../stats';
import { Saves } from './saves.model';
import { Deity } from '../deities'

export class Character {
    id: string = null;
    
    stats: Stats = new Stats();
    
    characterName: string = "";
    playerName: string = "";
    deity: Deity = new Deity();
    gender: string = "";
    age: number = null;
    height: number = null;
    weight: number = null;
    hair: string = "";
    eyes: string = "";
    
    saves: Saves = new Saves();
    
    
    constructor() {}
}