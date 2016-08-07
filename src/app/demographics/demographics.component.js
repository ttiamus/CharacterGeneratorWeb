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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var index_1 = require('../character/index');
var index_2 = require('../demographics/index');
var index_3 = require('../deity/index');
var DemographicsComponent = (function () {
    function DemographicsComponent(characterService) {
        this.characterService = characterService;
        this.character = this.characterService.getCharacter();
        this.alignments = [
            "Lawful Good", "Neutral Good", "Chaotic Good",
            "Neutral Good", "True Neutral", "Neutral Good", ,
            "Lawful Evil", "Neutral Evil", "Chaotic Evil",];
    }
    DemographicsComponent.prototype.updateDeity = function (deity) {
        this.character.deity = deity;
    };
    DemographicsComponent.prototype.log = function () {
        console.log(this.characterService.getCharacter());
    };
    DemographicsComponent.prototype.ngOnInit = function () { };
    DemographicsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cg-demographics',
            templateUrl: 'demographics.component.html',
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, index_2.StatsComponent, index_3.DeityComponent],
            providers: [index_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [index_1.CharacterService])
    ], DemographicsComponent);
    return DemographicsComponent;
}());
exports.DemographicsComponent = DemographicsComponent;
//# sourceMappingURL=demographics.component.js.map