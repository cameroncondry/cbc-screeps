module.exports = function (creep) {
    var sources = creep.room.find(FIND_SOURCES);

    if (creep.memory.source === true) {
        creep.moveTo(sources[1]);
        creep.harvest(sources[1]);
    } else {
        creep.moveTo(sources[3]);
        creep.harvest(sources[3]);
    }
};
