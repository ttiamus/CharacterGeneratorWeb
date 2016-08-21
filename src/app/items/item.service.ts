import { Injectable } from '@angular/core';

import { Item } from './item.model'

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
export class ItemService {
  
  getItem(id: number | string) 
  {
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