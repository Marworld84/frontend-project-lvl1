import readlineSync from 'readline-sync';

const dialogue = (str) => readlineSync.question(str);
export default dialogue;
export const randomNumber = Math.round(Math.random() * 100);
export const randomNumber2 = Math.round(Math.random() * 100);
export const randomNumber3 = Math.round(Math.random() * 100);
export const checkResponse = (str, num) => {
  if ((num % 2 === 0 && str === 'yes') || (num % 2 !== 0 && str === 'no')) {
    return 'Correct';
  }
  if (num % 2 === 0 && str !== 'yes') {
    return '"no" is wrong answer ;(. Correct answer was "yes"';
  }
  return '"yes" is wrong answer ;(. Correct answer was "no"';
};
export const checkCorrect = (str) => {
  if (str === 'Correct') {
    console.log(`Question: ${randomNumber2}`);
    console.log(checkResponse(dialogue('Your answer: '), randomNumber2));
    console.log(`Question: ${randomNumber3}`);
    console.log(checkResponse(dialogue('Your answer: '), randomNumber3));
    return 'Congratulations!';
  }
  return "Let's try again!";
};
