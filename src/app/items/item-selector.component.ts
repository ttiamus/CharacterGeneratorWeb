import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from './item.model'
import { ItemService } from './item.service'

@Component({
    templateUrl: 'item-selector.component.html',
    selector: "cg-item-selector"
})

export class ItemSelectorComponent implements OnInit {
    generalItems: Item[];

    constructor( 
        private router: Router, 
        private route: ActivatedRoute,
        private service: ItemService ) { }

    ngOnInit() { 
        this.service.getItems().then(items => this.generalItems = items);
    }
    
    goToDetail(item: Item)
    {
        this.router.navigate([item.id], {relativeTo: this.route});
    }
}