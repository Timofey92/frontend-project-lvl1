import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomint(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
