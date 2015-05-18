var hm = require('helpme');

var modules = {
    build: require('build'),
    carry: require('carry'),
    clock: require('clock'),
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
