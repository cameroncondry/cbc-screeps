module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    var sources = creep.room.find(FIND_DROPPED_ENERGY);

    if (creep.energy < creep.energyCapacity) {
        if (!creep.pos.isNearTo(sources[0])) creep.moveTo(sources[0]);

        creep.pickup(sources[0]);
    }

    if (!sources[0] || creep.energy == creep.energyCapacity) {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);
    }
};
