var program = require('commander');

program
  .version('1.0.0')
  .description('Swap diagnostics')
  .command('details [link]', 'Show swap details', { isDefault: true })
  .parse(process.argv);