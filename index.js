
/**
 * Module Dependencies
 */

var fs = require('fs');

module.exports = process.env;

if(fs.existsSync('./.env')) {
  var env = fs.readFileSync('./.env', 'utf8').split("\n");

  var a;
  for (var i = 0; i < env.length; i++) {
    if(a = env[i].match(/^(.+)=(.+)$/)) {
      module.exports[a[1]] = a[2];
    }
  };

}
