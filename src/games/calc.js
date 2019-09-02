import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const first = getRandomint(1, 20);
  const second = getRandomint(1, 20);
  const operator = operators[getRandomint(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;

  let rightAnswer;

  switch (operator) {
    case '+':
      rightAnswer = first + second;
      break;
    case '-':
      rightAnswer = first - second;
      break;
    case '*':
      rightAnswer = first * second;
      break;
    default:
      return false;
  }

  return {
    question,
    rightAnswer: rightAnswer.toString(),
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
