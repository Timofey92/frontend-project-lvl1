import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameProcess = () => {
  const mainQuestion = getRandomint(1, 100);
  const rightAnswer = isEven(mainQuestion) ? 'yes' : 'no';
  return {
    mainQuestion,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, gameProcess);
};
