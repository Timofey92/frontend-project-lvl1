/* eslint-disable no-fallthrough */
import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomint(1, 20);
  const secondNumber = getRandomint(1, 20);
  const getOperator = operators[getRandomint(0, operators.length - 1)];
  const question = `${firstNumber} ${getOperator} ${secondNumber}`;

  let calculator;

  switch (getOperator) {
    case '+':
      calculator = firstNumber + secondNumber;
      break;
    case '-':
      calculator = firstNumber - secondNumber;
      break;
    case '*':
      calculator = firstNumber * secondNumber;
      break;
    default:
      return false;
  }
  const rightAnswer = String(calculator);

  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
