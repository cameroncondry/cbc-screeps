module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;

    if (creep.energy == 0) {
        creep.moveTo(spawn);
        spawn.transferEnergy(creep);
    } else {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (targets.length) {
            creep.moveTo(targets[0]);
            creep.build(targets[0]);
        }
    }
};
