import readlineSync from 'readline-sync';

const dialogue = (str) => readlineSync.question(str);
export default dialogue;
export const randomNumber = Math.round(Math.random() * 100);
export const randomNumber2 = Math.round(Math.random() * 100);
export const randomNumber3 = Math.round(Math.random() * 100);
export const checkResponse = (str, num) => {
if ((num % 2 === 0 && str === 'yes') || (num % 2 != 0 && str === 'no')) {
return 'Correct';
}
else if (num % 2 === 0 && str != 'yes') {
return '"no" is wrong answer ;(. Correct answer was "yes"';
} else {
return '"yes" is wrong answer ;(. Correct answer was "no"';
}
};
export const checkCorrect = (str) => {
if (str === 'Correct') {
return 'Congratulations!';
}
};
