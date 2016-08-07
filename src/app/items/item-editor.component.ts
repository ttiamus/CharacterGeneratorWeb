//form for adding updating and deleteing an item
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItemService, Item } from '../items'

@Component({
    moduleId: module.id,
    selector: 'cg-itemEditor',
    templateUrl: 'item-editor.component.html',
    directives: [ItemEditorComponent],
    providers: [ItemService]
})

export class ItemEditorComponent implements OnInit, OnDestroy {
    item: Item;
    types: string[];

    private sub: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ItemService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            if(id)
            {
                this.service.getItem(id).then(item => this.item = item);
            }
            else
            {
                this.service.newItem().then(item => this.item = item);
            }
        });

        this.service.getTypes().then(types => this.types = types);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    saveItem()
    {
        
    }
}