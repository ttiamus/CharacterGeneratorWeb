import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Item, ItemService } from '../items'

@Component({
    moduleId: module.id,
    selector: 'cg-itemsEditor',
    templateUrl: 'items-editor.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ItemService]
})

export class ItemsEditorComponent implements OnInit {
    generalItems: Item[];

    constructor( private router: Router, private service: ItemService ) { }

    editItem(item: Item)
    {
        this.router.navigate(['/admin/items', item.id]);
    }

    ngOnInit() { 
        this.service.getItems().then(items => this.generalItems = items);
    }
}