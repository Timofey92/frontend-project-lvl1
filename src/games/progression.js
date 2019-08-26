import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const firstNum = getRandomint(1, 50);
  const progressionStep = getRandomint(1, 7);
  const hiddenNumber = getRandomint(0, progressionLength - 1);
  const rightAnswer = String(firstNum + progressionStep * hiddenNumber);
  const numberShelter = '..';
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenNumber) {
      result = `${result} ${firstNum + progressionStep * i}`;
    } else result = `${result} ${numberShelter}`;
  }

  const question = result;
  return {
    question,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, getQuestionAndAnswer);
};
