import getRandomint from '../randomizer';
import startGame from '..';

const Descrption = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const gameProcess = () => {
  const question = getRandomint(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => {
  startGame(Descrption, gameProcess);
};
