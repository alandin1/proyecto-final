  const Colors = require('colors');

const { getParamByIndex, printSuccess } = require('./console');

console.log( printSuccess('Your result is: ', getParamByIndex(0)) );