import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item-admin.model';

/*
@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
*/

let ITEMS = [
  new Item(11, 'Bedroll', 'nap time', 'Adventuring Gear', 0.1, 5),
  new Item(12, 'Blanket', 'swaddle me close', 'Adventuring Gear', 0.5, 3),
  new Item(13, "Alchemist's fire", 'Burn baby burn', 'Alchemical Creations', 20, 1),
  new Item(14, 'Lamp Oil', 'Lamp oil makes fire', 'Alchemical Creations', 0.1, 1),
  new Item(15, 'Badger', 'This is a badger', 'Animals', 15, 20),
  new Item(16, 'Bat', 'This is a bat', 'animals', 5, 1)
];

let TYPES = [
  "Adventuring Gear",
  "Alchemical Creations",
  "Animals",
  "Animal Gear",
  "Books",
  "Paper",
  "Writting Supplies",
  "Clothing",
  "Containers",
  "Furniture",
  "Trade Goods",
  "Vehicles",
  "Hierlings",
  "Servants",
  "Services",
  "Locks",
  "Keys",
  "Tools",
  "Kits",
  "Religious Items",
  "Toys",
  "Games",
  "Technological Gear"
];

let itemsPromise = Promise.resolve(ITEMS);
let typesPromise = Promise.resolve(TYPES);

@Injectable()
export class ItemAdminService {
  
  getItem(id: number | string) {
      return itemsPromise.then(items => items.find(item => item.id === +id));
  }

  getItems()
  {
    return itemsPromise;
  }

  getTypes()
  {
    return typesPromise;
  }

  newItem()
  {
      return Promise.resolve(new Item(null, null, null, null, null, null))
  }

  saveItem(item: Item)
  {
      
  }
}
