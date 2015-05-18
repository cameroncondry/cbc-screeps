module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);

    if (targets.length && creep.hits / creep.hitsMax > 0.4) {
        creep.rangedAttack(targets[0]);

        var enemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 2);

        if (enemy[0]) {
            creep.moveTo(creep.pos.x, enemy[0].pos.y - 3);
        }

        return;
    }

    targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);

    if (targets.length) {
        creep.moveTo(targets[0]);
        return;
    }

    creep.moveTo(spawn.pos.x, spawn.pos.y - 2);
};
