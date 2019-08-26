import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomint(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
