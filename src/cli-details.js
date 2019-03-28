var program = require('commander');
var url = require('url')
var qs = require('qs')

program
  .parse(process.argv);

var links = program.args;

if (links.length !== 1) {
  console.error('link required');
  process.exit(1);
}

const link = links[0]
console.log(qs.parse(url.parse(link).hash.replace('#', '')))