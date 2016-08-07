"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../deity/index');
//import { Deity } from '../deity/deity.model';
var DeityComponent = (function () {
    function DeityComponent() {
        this.deityChanged = new core_1.EventEmitter();
        this.selectedDeity = new index_1.Deity();
        this.deities = [
            new index_1.Deity(),
            new index_1.Deity()
        ];
        this.deities[0].id = 1;
        this.deities[0].name = "name";
        this.deities[1].id = 2;
        this.deities[1].name = "name2";
    }
    DeityComponent.prototype.updateDeity = function (deity) {
        this.selectedDeity = deity;
        this.deityChanged.emit({
            value: this.selectedDeity
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Deity)
    ], DeityComponent.prototype, "selectedDeity", void 0);
    __decorate([
        //This allows you to export the hero from this component into another
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeityComponent.prototype, "deityChanged", void 0);
    DeityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cg-deity',
            templateUrl: 'deity.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DeityComponent);
    return DeityComponent;
}());
exports.DeityComponent = DeityComponent;
//# sourceMappingURL=deity.component.js.map