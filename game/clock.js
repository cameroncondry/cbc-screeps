module.exports = function () {
    var modules = [];
    var creeps = Game.creeps;
    var spawn = Game.spawns.Spawn1;
    var score = spawn ? spawn.room.survivalInfo.score : 0;
    var minions = {
        total: 0,
        build: 0,
        carry: 0,
        harvest: 0,
        guard: 0,
        medic: 0,
        runner: 0
    };

    if (score == 0 || spawn.spawning != null) return; // no action when already spawning

    for (var i in creeps) {
        var creep = creeps[i];

        minions.total++;
        minions[creep.memory.module]++;
    }

    var getTough = function (amount) {
        var modules = [];

        amount += Math.round(score / 250);

        for (var i = 0; i < amount; i++) {
            modules.push(TOUGH);
        }

        return modules;
    };

    var spawnCreep = function (modules, memory) {
        var creep = spawn.createCreep(modules, undefined, memory);

        if (typeof creep != 'number') {
            console.log('created ' + memory.module, modules);
        }

        return creep;
    };

    if (minions.harvest < 2) {
        spawnCreep([WORK, WORK, WORK, CARRY, MOVE], {module: 'harvest'});
    }

    else if (minions.carry < 2) {
        spawnCreep([CARRY, MOVE, MOVE], {module: 'carry'});
    }

    else if (score > 1000 && minions.runner < 1 || score > 2000 && minions.runner < 2) {
        spawnCreep([CARRY, MOVE, MOVE, CARRY, MOVE], {module: 'runner'});
    }

    else if (minions.medic < minions.guard / 2) {
        modules = [];

        modules.push(HEAL, HEAL, HEAL, HEAL, MOVE);

        spawnCreep(modules, {module: 'medic'});
    }

    else if (minions.harvest > 0 && ((score < 1100 && minions.guard < 6) || (score > 1100 && score < 2100 && minions.guard < 12) || score > 2100)) {
        modules = getTough(0);

        modules.push(RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE);

        spawnCreep(modules, {module: 'guard'});
    }
};
