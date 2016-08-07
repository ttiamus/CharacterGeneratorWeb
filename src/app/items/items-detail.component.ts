import { Component, OnInit } from '@angular/core';

import { Item } from './item.model'

@Component({
    moduleId: module.id,
    selector: 'cg-itemsDetail',
    templateUrl: 'items-detail.component.html',
    directives: [],
    providers: []
})

export class ItemsDetailComponent implements OnInit {
    generalItems: Item[];

    ngOnInit() { 
     this.generalItems = [
       { 'id': 11, 'name': 'Chewbacca' },
       { 'id': 12, 'name': 'Rey' },
       { 'id': 13, 'name': 'Finn (FN2187)' },
       { 'id': 14, 'name': 'Han Solo' },
       { 'id': 15, 'name': 'Leia Organa' }
     ];}
}