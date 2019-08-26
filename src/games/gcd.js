import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  const lastNumber = Math.max(firstNumber, secondNumber);
  const startNumber = Math.min(firstNumber, secondNumber);

  let gcd;
  for (let i = startNumber; i > 0; i -= 1) {
    if (startNumber % i === 0 && lastNumber % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomint(100, 1);
  const secondNumber = getRandomint(100, 1);
  const question = `${firstNumber} ${secondNumber}`;

  const rightAnswer = String(findGcd(firstNumber, secondNumber));

  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
