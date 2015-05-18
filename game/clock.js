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

    if (spawn.spawning) return; // no action when already spawning

    for (var i in creeps) {
        var creep = creeps[i];

        minions.total++;
        minions[creep.memory.module]++;
    }

    if (minions.harvest < 2) {
        console.log('create harvest');
        spawn.createCreep([WORK, CARRY, CARRY, MOVE], undefined, {module: 'harvest'});
    }

    if (minions.medic < 1 && minions.guard > 0) {
        console.log('create medic');
        spawn.createCreep([TOUGH, MOVE, HEAL], undefined, {module: 'medic'});
    }

    if (minions.harvest > 0 && minions.medic > 0 || minions.guard === 0) {
        console.log('create guard');
        spawn.createCreep([TOUGH, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK], undefined, {module: 'guard'});
    }
};
