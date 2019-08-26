/* eslint-disable no-fallthrough */
import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomint(20, 1);
  const secondNumber = getRandomint(20, 1);
  const operatorIndex = getRandomint(operators.length, 0);
  const printOperator = operators[operatorIndex];
  const question = `${firstNumber} ${printOperator} ${secondNumber}`;

  let rightAnswer;

  switch (printOperator) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      return false;
  }
  rightAnswer = String(rightAnswer);

  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
