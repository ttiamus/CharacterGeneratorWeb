"use strict";
var stats_model_1 = require('./../demographics/stats.model');
var saves_model_1 = require('./saves.model');
var deity_model_1 = require('./../deity/deity.model');
var Character = (function () {
    function Character() {
        this.id = null;
        this.stats = new stats_model_1.Stats();
        this.characterName = "";
        this.playerName = "";
        this.deity = new deity_model_1.Deity();
        this.gender = "";
        this.age = null;
        this.height = null;
        this.weight = null;
        this.hair = "";
        this.eyes = "";
        this.saves = new saves_model_1.Saves();
    }
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=character.model.js.map