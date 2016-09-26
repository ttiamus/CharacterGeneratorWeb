// Show info about item on the character gen side
import { Component, OnInit } from '@angular/core';

import { ItemService } from './item.service'

@Component({
    //moduleId: module.id,
    selector: 'cg-item',
    templateUrl: 'item.component.html',
})

export class ItemComponent implements OnInit {
    
    constructor(private itemService: ItemService) {
        this.itemService = itemService;
     }
     
    ngOnInit() { }
}