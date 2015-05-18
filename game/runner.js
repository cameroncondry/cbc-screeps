module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;

    if (creep.energy < creep.energyCapacity) {
        var sources = creep.room.find(FIND_DROPPED_ENERGY);

        if (!creep.pos.isNearTo(sources[0])) creep.moveTo(sources[0]);

        creep.pickup(sources[0]);
    } else {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);
    }
};
