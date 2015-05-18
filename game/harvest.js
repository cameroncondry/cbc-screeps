module.exports = function (creep) {
    var sources = creep.room.find(FIND_SOURCES);
    var spawn = Game.spawns.Spawn1;

    if (creep.energy == creep.energyCapacity) {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);

        return;
    }

    creep.moveTo(sources[3]);
    creep.harvest(sources[3]);
};
