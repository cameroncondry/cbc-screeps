module.exports = function (creep) {
    var sources = creep.room.find(FIND_SOURCES);
    var spawn = Game.spawns.Spawn1;

    var carrier = creep.pos.findInRange(FIND_MY_CREEPS, 1, {
        filter: function (creep) {
            return creep.memory.module == 'carry';
        }
    });

    if (carrier[0]) {
        creep.transferEnergy(carrier[0]);
    }

    if (creep.energy == creep.energyCapacity) {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);

        return;
    }

    creep.moveTo(sources[3]);
    creep.harvest(sources[3]);
};
