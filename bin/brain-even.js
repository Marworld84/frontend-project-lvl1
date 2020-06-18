#!/usr/bin/env node
import dialogue from '../index.js';

import {
  randomNumber, checkResponse, checkCorrect,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${dialogue('May I have your name?: ')}`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
console.log(`Question: ${randomNumber}`);
console.log(checkCorrect(checkResponse(dialogue('Your answer: '), randomNumber)));
