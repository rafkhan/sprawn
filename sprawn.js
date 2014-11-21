'use strict';

var q = require('q');
var cpSpawn = require('child_process').spawn;

function sprawn(cmd, args) {
  var d = q.defer();

  var proc = cpSpawn(cmd, args);

  proc.on('close', function(code) {
    if(code === 0) {
      d.resolve(proc);
    } else {
      d.reject(proc);
    }
  });

  return d.promise;
}

exports = module.exports = sprawn;
