//form for adding updating and deleteing an item
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from './../shared/item.model';
import { ItemAdminService } from './item-admin.service';

@Component({
    templateUrl: 'item-admin.component.html',
})

export class ItemAdminComponent implements OnInit, OnDestroy {
    item: Item;
    types: string[];

    private sub: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ItemAdminService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
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
        this.service.saveItem(this.item)
            .then(x => console.log('item saved'));
    }

    deleteItem(){
        this.service.deleteItem(this.item.Id)
            .then(x => console.log('item deleted'))
            .then(x => this.router.navigate(['../'], {relativeTo: this.route}));    //move up a level in route
    }
}