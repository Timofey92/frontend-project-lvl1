import readlineSync from 'readline-sync';

// IsCorrect game,
const questionsCount = 3;

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const nameQ = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameQ}!`);
  const getRandomint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < questionsCount; i++) {
    const isEven = (num) => num % 2 === 0;
    const quest = getRandomint(1, 100);
    const answer = isEven(quest) ? 'yes' : 'no';
    console.log(`Question: ${quest}`);
    const useranswer = readlineSync.question('Your answer: ');
    if (useranswer !== answer) {
      console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${nameQ}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameQ}`);
};
export default startGame;
