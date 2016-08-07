import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Character } from './character.model';

@Injectable()
export class CharacterService {
    character: Character;
  
  constructor(private http: Http) { 
      this.character = new Character();
  }
  
  getCharacter() {
      return this.character;    //Actually returns the instance of this character... Values are bound directly to this property
  }
}
