module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;

    if (creep.energy < creep.energyCapacity) {
        var sources = creep.room.find(FIND_SOURCES);
        creep.moveTo(sources[3]);
        creep.harvest(sources[3]);
    } else {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);
    }
};
