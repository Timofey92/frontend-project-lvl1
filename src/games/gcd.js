import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);

  let gcd;
  for (let i = minNumber; i > 0; i -= 1) {
    if (minNumber % i === 0 && maxNumber % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
};

const gameProcess = () => {
  const firstNumber = getRandomint(100, 1);
  const secondNumber = getRandomint(100, 1);
  const mainQuestion = `${firstNumber} ${secondNumber}`;

  const rightAnswer = String(findGcd(firstNumber, secondNumber));

  return {
    mainQuestion,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, gameProcess);
};
