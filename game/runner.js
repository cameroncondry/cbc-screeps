module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;
    var sources = creep.room.find(FIND_DROPPED_ENERGY);
    var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 6);

    if (creep.energy < creep.energyCapacity && !enemies.length) {
        if (!creep.pos.isNearTo(sources[0])) creep.moveTo(sources[0]);

        creep.pickup(sources[0]);
        return;
    }

    if (creep.energy == creep.energyCapacity || (!sources[0] && creep.energy > 0)) {
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);

        return;
    }

    creep.moveTo(spawn.pos.x + 2, spawn.pos.y);
};
