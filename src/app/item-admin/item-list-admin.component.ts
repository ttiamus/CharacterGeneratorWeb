import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item-admin.model'
import { ItemAdminService } from './item-admin.service'

@Component({
    //moduleId: module.id,
    selector: 'cg-item-list-admin',
    templateUrl: 'item-list-admin.component.html',
})

export class ItemListAdminComponent implements OnInit {
    generalItems: Item[];

    constructor( private router: Router, private service: ItemAdminService ) { }

    editItem(item: Item)
    {
        this.router.navigate(['/admin/items', item.id]);
    }

    ngOnInit() { 
        this.service.getItems().then(items => this.generalItems = items);
    }
}