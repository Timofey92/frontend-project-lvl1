import getRandomint from '../randomizer';
import startGame from '..';

const Descrption = 'What number is missing in the progression?';

const proglength = 10;

const gameProcess = () => {
  const start = getRandomint(1, 50);
  const step = getRandomint(1, 7);
  const hidenum = getRandomint(0, proglength);
  const answer = String(start + step * hidenum);
  const shelter = '..';
  let result = '';
  for (let i = 0; i < proglength; i += 1) {
    if (i !== hidenum) {
      result = `${result} ${start + step * i}`;
    } else result = `${result} ${shelter}`;
  }

  const question = result;
  return {
    question,
    answer,
  };
};

export default () => {
  startGame(Descrption, gameProcess);
};
