import { Component, OnInit } from '@angular/core';

import { Character, CharacterService } from '../character'
import { StatsComponent } from '../stats'
import { Deity, DeityComponent } from '../deities'

@Component({
    //moduleId: module.id,
    //selector: 'cg-demographics',
    templateUrl: 'demographics.component.html',
    
    providers: [CharacterService]
})

export class DemographicsComponent implements OnInit {
    character: Character;
    alignments: string[];
    
    constructor(private characterService: CharacterService) {
        this.character = this.characterService.getCharacter();
        this.alignments = [
            "Lawful Good", "Neutral Good", "Chaotic Good", 
            "Neutral Good", "True Neutral", "Neutral Good",, 
            "Lawful Evil", "Neutral Evil", "Chaotic Evil",]
     }
     
     updateDeity(deity: Deity) {
        this.character.deity = deity;
     }
     
     log()
     {
         console.log(this.characterService.getCharacter());
     }

    ngOnInit() { }
}