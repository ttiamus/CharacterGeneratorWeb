import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from './../shared/item.model';
import { ItemAdminService } from './item-admin.service';

@Component({
    templateUrl: 'item-list-admin.component.html',
})

export class ItemListAdminComponent implements OnInit {
    items: Item[];

    constructor( 
        private router: Router, 
        private route: ActivatedRoute,
        private service: ItemAdminService ) { }

    editItem(item: Item)
    {
        this.router.navigate([item.Id], {relativeTo: this.route});
    }

    ngOnInit() { 
        this.getHeroes();
    }

    getHeroes(): void {
        this.service.getItems().then(items => this.items = items);
    }
}