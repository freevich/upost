/*
 gulpfile.js
 ===========
 Rather than manage one giant configuration file responsible for
 creating multiple tasks, each task has been broken out into its own file in gulp/tasks.
 Any file in that folder gets automatically
 required by the loop.

 To add a new task, simply add a new task file to gulp/tasks.
 */

//Plan to remove this before merging to master


require('gulp');

var requireDir = require('require-dir');

// Require all tasks that build out files
requireDir('gulp/gulpInit', { recurse: true });

// Require all tasks in gulp/tasks, including subfolders
requireDir('gulp/gulpTasks', { recurse: true });