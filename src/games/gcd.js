import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  const biggestNumber = Math.max(firstNumber, secondNumber);
  const smallestNumber = Math.min(firstNumber, secondNumber);

  let gcd;
  for (let i = biggestNumber; i > 0; i -= 1) {
    if (smallestNumber % i === 0 && biggestNumber % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomint(1, 50);
  const secondNumber = getRandomint(1, 50);
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
