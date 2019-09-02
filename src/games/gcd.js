import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  const min = Math.max(firstNumber, secondNumber);
  const max = Math.min(firstNumber, secondNumber);

  let gcd;
  for (let i = max; i > 0; i -= 1) {
    if (min % i === 0 && max % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
};

const getQuestionAndAnswer = () => {
  const first = getRandomint(1, 50);
  const second = getRandomint(1, 50);
  const question = `${first} ${second}`;

  const rightAnswer = String(findGcd(first, second));

  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
