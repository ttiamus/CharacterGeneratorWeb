import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ng2-bootstrap/components/modal';

import { Item } from './../shared/item.model'
import { ItemService } from './item.service'

@Component({
    templateUrl: 'item.component.html',
})

export class ItemComponent implements OnInit {
    //view child allows you to call methods on the child component
    @ViewChild('childModal') public childModal:ModalDirective;

    generalItems: Item[];
    selectorOpen: boolean = false;

    constructor( 
        private router: Router, 
        private route: ActivatedRoute,
        private service: ItemService ) { }

    ngOnInit() { 
        this.service.getItems().then(items => this.generalItems = items);
    }

    goToDetail(item: Item)
    {
        this.router.navigate([item.Id], {relativeTo: this.route});
    }

    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }
}