module.exports = function (creep) {
    var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);

    if (targets.length > 0) {
        creep.rangedAttack(targets[0]);
        return;
    }

    targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);

    if (targets.length > 0) {
        creep.moveTo(targets[0]);
    }
};
