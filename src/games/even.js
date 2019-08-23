import getRandomint from '../randomizer';
import startGame from '..';

const isEven = (num) => num % 2 === 0;

const gameProcess = () => {
  const question = getRandomint(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};
const Descrption = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  startGame(Descrption, gameProcess);
};
