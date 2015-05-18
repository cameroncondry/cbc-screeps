module.exports = function (creep) {
    var sources = creep.room.find(FIND_SOURCES);

    creep.moveTo(sources[3]);
    creep.harvest(sources[3]);
};
