#!/usr/bin/env node
import dialogue from '../index.js';

import {
  randomNumber, randomNumber2, randomNumber3, checkResponse, checkCorrect,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${dialogue('May I have your name?: ')}`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
console.log(`Question: ${randomNumber}`);
console.log(checkResponse(dialogue('Your answer: '), randomNumber));
console.log(`Question: ${randomNumber2}`);
console.log(checkResponse(dialogue('Your answer: '), randomNumber2));
console.log(`Question: ${randomNumber3}`);
console.log(checkCorrect(checkResponse(dialogue('Your answer: '), randomNumber3)));
