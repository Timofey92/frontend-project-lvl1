import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomint(1, 50);
  const progressionStep = getRandomint(1, 7);
  const hiddenNumberIndex = getRandomint(0, progressionLength - 1);
  const rightAnswer = String(firstNumber + progressionStep * hiddenNumberIndex);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenNumberIndex) {
      question = `${question} ${firstNumber + progressionStep * i}`;
    } else question = `${question} ..`;
  }

  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
