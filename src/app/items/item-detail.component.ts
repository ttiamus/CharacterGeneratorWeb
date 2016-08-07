// Show info about item on the character gen side
import { Component, OnInit } from '@angular/core';

import { ItemService } from '../items'

@Component({
    moduleId: module.id,
    selector: 'cg-itemDetail',
    templateUrl: 'item-detail.component.html',
    directives: [ItemDetailComponent],
    providers: [ItemService]
})

export class ItemDetailComponent implements OnInit {
    
    constructor(private itemService: ItemService) {
        this.itemService = itemService;
     }
     
    ngOnInit() { }
}