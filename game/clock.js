var hm = require('helpme');

module.exports = function () {
    var modules = [];
    var creeps = Game.creeps;
    var spawn = Game.spawns.Spawn1;
    var minions = {
        total: 0,
        harvest: 0,
        build: 0,
        guard: 0,
        medic: 0,
        runner: 0
    };

    if (!hm.isNull(spawn.spawning)) return; // no action when already spawning

    for (var i in creeps) {
        var creep = creeps[i];

        minions.total++;
        minions[creep.memory.module]++;
    }

    var getTough = function (amount) {
        var modules = [];

        for (var i = 0; i < amount; i++) {
            modules.push(TOUGH);
        }

        return modules;
    };

    var spawnCreep = function (modules, type) {
        if (!hm.isNumber(spawn.createCreep(modules, undefined, {module: type}))) {
            console.log('created ' + type, modules);
        }
    };

    if (minions.harvest < 2) {
        spawnCreep([WORK, WORK, WORK, WORK, MOVE], 'harvest');
    }

    else if (minions.runner < 3) {
        spawnCreep([CARRY, CARRY, MOVE, MOVE, MOVE], 'runner');
    }

    else if (minions.medic < minions.guard / 2) {
        modules = getTough(minions.medic + 1);

        modules.push(HEAL, HEAL, MOVE, MOVE);

        spawnCreep(modules, 'medic');
    }

    else if (minions.harvest > 0) {
        modules = getTough(minions.guard + 1);

        modules.push(RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE);

        spawnCreep(modules, 'guard');
    }
};
