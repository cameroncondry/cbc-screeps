var clock = require('clock');

var modules = {
    build: require('build'),
    carry: require('carry'),
    guard: require('guard'),
    harvest: require('harvest'),
    medic: require('medic'),
    runner: require('runner')
};

clock();

for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    modules[creep.memory.module](creep);
}
