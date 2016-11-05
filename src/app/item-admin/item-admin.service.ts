import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './../shared/item.model';

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

//let itemsPromise = Promise.resolve(ITEMS);
let typesPromise = Promise.resolve(TYPES);

@Injectable()
export class ItemAdminService {
  constructor(private http: Http) {}

  getItem(id: string): Promise<Item> {
      let getItemUrl = `http://pathfinder.charactergen.com/items/${id}`; //use tilde instead of apostrophe
    
      return this.http.get(getItemUrl)
              .toPromise()
              .then(response => response.json() as Item[])
              .catch(this.handleError);
  }

  getItems(): Promise<Item[]> 
  {
    let getItemsUrl = 'http://pathfinder.charactergen.com/items';
    
    return this.http.get(getItemsUrl)
              .toPromise()
              .then(response => response.json() as Item[])
              .catch(this.handleError);
  }

  saveItem(item: Item): Promise<void>
  {
      if(item.Id) //truthy
      {
        return this.updateItem(item);
      } else {    //falsy
        return this.createItem(item);
      }
  }

  createItem(item: Item): Promise<void> {
    let createItemUrl = 'http://pathfinder.charactergen.com/items';
    
    return this.http.post(createItemUrl, item)
              .toPromise()
              .catch(this.handleError)
  }

  updateItem(item: Item): Promise<void> {
    let updateItemUrl = 'http://pathfinder.charactergen.com/items';
    
    return this.http.put(updateItemUrl, item)
              .toPromise()
              .catch(this.handleError)
  }

  deleteItem(id: string): Promise<void>{
    let updateItemUrl = `http://pathfinder.charactergen.com/items/${id}`;
    
    return this.http.delete(updateItemUrl)
              .toPromise()
              .catch(this.handleError)
  }

  getTypes()
  {
    return typesPromise;
  }

  newItem()
  {
      return Promise.resolve(new Item(null, null, null, null, null, null))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
