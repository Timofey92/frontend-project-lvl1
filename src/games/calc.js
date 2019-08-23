/* eslint-disable no-fallthrough */
import getRandomint from '../randomizer';
import startGame from '..';

const Descrption = 'What is the result of the expression?';

const Operators = ['+', '-', '*'];

const operatorsLength = Operators.length;

const gameProcess = () => {
  const firstNumber = getRandomint(20, 1);
  const secondNumber = getRandomint(20, 1);
  const operatorIndex = getRandomint(operatorsLength, 0);
  const operator = Operators[operatorIndex];
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  let answer;

  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      answer = 'programm not working';
  }
  answer = String(answer);

  return {
    question,
    answer,
  };
};

export default () => {
  startGame(Descrption, gameProcess);
};
