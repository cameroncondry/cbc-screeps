module.exports = function (creep) {
    var spawn = Game.spawns.Spawn1;

    var target = creep.pos.findClosest(FIND_MY_CREEPS, {
        filter: function (object) {
            console.log(object.memory.module);

            return object.hits < object.hitsMax;
        }
    });

    if (target) {
        creep.moveTo(target);
        creep.heal(target);
    }
};
