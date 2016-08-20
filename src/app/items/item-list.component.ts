import { Component, OnInit } from '@angular/core';

import { Item } from './item.model'

@Component({
    moduleId: module.id,
    selector: 'cg-item-list',
    templateUrl: 'item-list.component.html',
})

export class ItemListComponent implements OnInit {
    generalItems: Item[];

    ngOnInit() { 
     this.generalItems = [
       { 'id': 11, 'name': 'Chewbacca', description:'hairy', type:'wookie', cost:1, weight:1 },
       { 'id': 12, 'name': 'Rey', description:'human', type:'woman', cost:1, weight:1 },
       { 'id': 13, 'name': 'Finn (FN2187)', description:'traitor', type:'clone trooper', cost:1, weight:1 },
       { 'id': 14, 'name': 'Han Solo', description:'shot first', type:'wookie', cost:1, weight:1 },
       { 'id': 15, 'name': 'Leia Organa', description:'wookie', type:'wookie', cost:1, weight:1 }
     ];}
}