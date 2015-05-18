var hm = require('helpme');

module.exports = function () {
    var modules = [];
    var creeps = Game.creeps;
    var spawn = Game.spawns.Spawn1;
    var score = spawn.room.survivalInfo.score;
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

        amount += Math.round(score / 500);

        for (var i = 0; i < amount; i++) {
            modules.push(TOUGH);
        }

        return modules;
    };

    var spawnCreep = function (modules, memory) {
        if (!hm.isNumber(spawn.createCreep(modules, undefined, memory))) {
            console.log('created ' + memory.module, modules);
        }
    };

    if (minions.harvest == 2 && score > 1800 && score < 2100) {
        spawnCreep([WORK, WORK, WORK, MOVE, MOVE], {module: 'harvest', extreme: true});
    }

    else if (minions.harvest < 2) {
        spawnCreep([WORK, WORK, WORK, WORK, MOVE], {module: 'harvest'});
    }

    else if (minions.runner < 3 || (minions.runner < 5 && score > 1800 && score < 2100)) {
        spawnCreep([CARRY, CARRY, MOVE, MOVE, MOVE], {module: 'runner'});
    }

    else if (minions.medic < minions.guard / 2) {
        modules = [];

        modules.push(HEAL, HEAL, MOVE, MOVE, MOVE);

        spawnCreep(modules, {module: 'medic'});
    }

    else if (minions.harvest > 0) {
        modules = getTough(minions.guard);

        modules.push(RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE);

        spawnCreep(modules, {module: 'guard'});
    }
};
