#!/usr/bin/env node --harmony

"use strict";

var cli = require('commander');
var rally = require('rally');

/*

	rally ls tasks
	rally ls stories
	rally add task <story>
	rally close task <task>
*/


cli
  .version('1.0.0')
  .option('-c, --config <path>', 'set config path.');

cli
  .command('list story [iter]')
  .alias("lss")
  .description('Lists all the entities of a given type.')
  .action(function(entity, options) {
  	console.log("listing ");
  });

cli
  .command('list task [story]')
  .alias("lst")
  .description('Lists all the entities of a given type.')
  .action(function(entity, options) {
	console.log("listing tasks");
  });

cli
  .command('add task ', 'Adds a new task of the given type.', '*');


cli
  .command('close task [task]', 'Adds a new entity of the given type.', '*');

 
// invoke.
cli.parse(process.argv);

// todo: handle this stufff?