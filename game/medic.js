module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;

    var target = creep.pos.findClosest(FIND_MY_CREEPS, {
        filter: function (creep) {
            return creep.hits < creep.hitsMax;
        }
    });

    if (target) {
        creep.moveTo(target);
        creep.heal(target);
    }

    target = creep.pos.findClosest(FIND_MY_CREEPS, {
       filter: function (creep) {
           return creep.memory.module == 'guard';
       }
    });

    if (target) {
        creep.moveTo(target);
    }
};
