import getRandomint from '../randomizer';
import startGame from '..';

const gameDescrption = 'What number is missing in the progression?';

const progLength = 10;

const gameProcess = () => {
  const firstNum = getRandomint(1, 50);
  const progStep = getRandomint(1, 7);
  const hideNum = getRandomint(0, progLength);
  const rightAnswer = String(firstNum + progStep * hideNum);
  const numCover = '..';
  let result = '';
  for (let i = 0; i < progLength; i += 1) {
    if (i !== hideNum) {
      result = `${result} ${firstNum + progStep * i}`;
    } else result = `${result} ${numCover}`;
  }

  const mainQuestion = result;
  return {
    mainQuestion,
    rightAnswer,
  };
};

export default () => {
  startGame(gameDescrption, gameProcess);
};
