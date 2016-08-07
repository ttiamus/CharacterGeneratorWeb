// Show info about item on the character gen side
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ItemsEditorComponent } from '../items'

@Component({
    moduleId: module.id,
    selector: 'cg-admin',
    templateUrl: 'admin.component.html',
    directives: [ItemsEditorComponent, ROUTER_DIRECTIVES],
    providers: []
})

export class AdminComponent implements OnInit {
    
    ngOnInit() { }
}