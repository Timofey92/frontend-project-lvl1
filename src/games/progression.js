import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const num = getRandomint(1, 50);
  const progressionStep = getRandomint(1, 7);
  const hiddenElementIndex = getRandomint(0, progressionLength - 1);
  const rightAnswer = String(num + progressionStep * hiddenElementIndex);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenElementIndex) {
      question = `${question} ${num + progressionStep * i}`;
    } else question = `${question} ..`;
  }

  return {
    question: question.trim(),
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
