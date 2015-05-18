var hm = require('helpme');

module.exports = function () {
    var creeps = Game.creeps;
    var spawn = Game.spawns.Spawn1;
    var minions = {
        total: 0,
        harvest: 0,
        build: 0,
        guard: 0,
        medic: 0
    };

    console.log(hm.isNumber('hello'));

    if (spawn.spawning) return; // no action when already spawning

    for (var i in creeps) {
        var creep = creeps[i];

        minions.total++;
        minions[creep.memory.module]++;
    }

    var spawnCreep = function (modules, type) {
        if (typeof spawn.createCreep(modules, undefined, {module: type}) != 'number') {
            console.log('created ' + type);
        }
    };

    if (minions.harvest < 2) {
        spawnCreep([WORK, CARRY, MOVE], 'harvest');
    }

    else if (minions.medic < minions.guard / 2) {
        spawnCreep([TOUGH, HEAL, MOVE], 'medic');
    }

    else if (minions.harvest > 0) {
        spawnCreep([TOUGH, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK], 'guard');
    }
};
