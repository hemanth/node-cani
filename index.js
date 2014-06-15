'use strict';
var fs = require('fs');

function twiddle(mode, mask) {
  return !!(mask & parseInt ((mode & parseInt ("777", 8)).toString (8)[0]));
}

function read(path) {
  return twiddle ( fs.statSync(path).mode, 4 );
}

function write(path) {
  return twiddle ( fs.statSync(path).mode, 2 );
}

function exec(path) {
  return twiddle ( fs.statSync(path).mode, 1 );
}


module.exports = {
  write: write,
  read: read,
  exec: exec
}