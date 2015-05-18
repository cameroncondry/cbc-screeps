module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;

    if (creep.energy == creep.energyCapacity) {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);

        return;
    }

    var harvester = creep.pos.findInRange(FIND_MY_CREEPS, 20, {
        filter: function (creep) {
            return creep.memory.module == 'harvest';
        }
    });

    if (harvester[0]) {
        creep.moveTo(harvester[0].pos.x, harvester[0].pos.y - 1);
        
        return;
    }

    creep.moveTo(spawn.pos.x, spawn.pos.y + 2);
};
