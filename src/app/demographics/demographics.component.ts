import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../character/character.service';  //in app module providers for global registration
import { Character } from '../character/character.model'

@Component({
    templateUrl: 'demographics.component.html',
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
     
     log()
     {
         console.log(this.characterService.getCharacter());
     }

    ngOnInit() { }
}