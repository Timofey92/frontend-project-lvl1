/* eslint-disable no-fallthrough */
import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What is the result of the expression?';

const getOperators = ['+', '-', '*'];

const operatorsLength = getOperators.length;

const gameProcess = () => {
  const firstNumber = getRandomint(20, 1);
  const secondNumber = getRandomint(20, 1);
  const operatorIndex = getRandomint(operatorsLength, 0);
  const printOperator = getOperators[operatorIndex];
  const mainQuestion = `${firstNumber} ${printOperator} ${secondNumber}`;

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
      rightAnswer = 'programm not working';
  }
  rightAnswer = String(rightAnswer);

  return {
    mainQuestion,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, gameProcess);
};
