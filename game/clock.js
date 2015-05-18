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
        medic: 0
    };

    if (!hm.isNull(spawn.spawning)) return; // no action when already spawning

    for (var i in creeps) {
        var creep = creeps[i];

        minions.total++;
        minions[creep.memory.module]++;
    }

    var spawnCreep = function (modules, type) {
        if (!hm.isNumber(spawn.createCreep(modules, undefined, {module: type}))) {
            console.log('created ' + type, modules);
        }
    };

    if (minions.harvest < 2) {
        spawnCreep([WORK, CARRY, MOVE], 'harvest');
    }

    else if (minions.medic < minions.guard / 2) {
        modules = [TOUGH];

        var getHeals = function () {
            for (var i = 0; i <= minions.medic; i++) {
                modules.push(HEAL);
            }
        };

        getHeals();

        modules.push(MOVE);

        spawnCreep(modules, 'medic');
    }

    else if (minions.harvest > 0) {
        modules = [TOUGH];

        var getAttacks = function () {
            for (var i = -1; i <= minions.guard; i++) {
                modules.push(RANGED_ATTACK);
            }
        };

        getAttacks();

        modules.push(MOVE);

        spawnCreep(modules, 'guard');
    }
};
