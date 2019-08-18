#!/usr/bin/env node
import name from '..';

console.log('Welcome to the Brain Games!');
const yourName = name('What is your name? ');
console.log(`Hello, ${yourName}!`);
