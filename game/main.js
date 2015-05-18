var build = require('build');
var clock = require('clock');
var guard = require('guard');
var harvest = require('harvest');
var medic = require('medic');

clock();

console.log(hm.isArray([1, 2, 3]));

for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    if (creep.memory.module == 'build') {
        build(creep);
    }

    if (creep.memory.module == 'guard' ) {
        guard(creep);
    }

    if (creep.memory.module == 'harvest') {
        harvest(creep);
    }

    if (creep.memory.module == 'medic' ) {
        medic(creep);
    }
}
