import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from './item-admin.model'
import { ItemAdminService } from './item-admin.service'

@Component({
    templateUrl: 'item-list-admin.component.html',
})

export class ItemListAdminComponent implements OnInit {
    generalItems: Item[];

    constructor( 
        private router: Router, 
        private route: ActivatedRoute,
        private service: ItemAdminService ) { }

    editItem(item: Item)
    {
        this.router.navigate([item.id], {relativeTo: this.route});
    }

    ngOnInit() { 
        this.service.getItems().then(items => this.generalItems = items);
    }
}