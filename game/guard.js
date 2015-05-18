module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);

    if (targets.length > 0) {
        creep.rangedAttack(targets[0]);
        return;
    }

    targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 9);

    if (targets.length > 0) {
        creep.moveTo(targets[0]);
        return;
    }

    creep.moveTo(spawn.pos.x, spawn.pos.y - 1);
};
