import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Deity } from '../deities';

@Component({
  //moduleId: module.id,
  selector: 'cg-deity',
  templateUrl: 'deity.component.html'
})
export class DeityComponent {
    @Input() selectedDeity: Deity;    //This allows you to export the hero from this component into another
    @Output() deityChanged = new EventEmitter();
    deities: Deity[];

    constructor ()
    {
        this.selectedDeity = new Deity();
        this.deities =   [
            new Deity(),
            new Deity()
        ];

        this.deities[0].id = 1;
        this.deities[0].name = "name";
        this.deities[1].id = 2;
        this.deities[1].name = "name2";
    }
  
    updateDeity(deity: Deity)
    {
        this.selectedDeity = deity;
        this.deityChanged.emit({
            value: this.selectedDeity
        })
    }
}
