// Show info about item on the character gen side
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Item } from './item.model';
import { ItemService } from './item.service'

@Component({
    templateUrl: 'item-detail.component.html',
})

export class ItemDetailComponent implements OnInit {
    item: Item;
    types: string[];

    //private sub: any;
    constructor(
        private route: ActivatedRoute,
        private service: ItemService) {}

    ngOnInit() {
        
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getItem(id).then(item => this.item = item);
        });

        this.service.getTypes().then(types => this.types = types);
    }
}