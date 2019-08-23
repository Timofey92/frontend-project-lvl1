import readlineSync from 'readline-sync';

// Game Core,
const questionsCount = 3;

const startGame = (Description, gameProcess) => {
  console.log('Welcome to the Brain Games!');
  console.log(Description);
  console.log('');
  const nameQ = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameQ}!`);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < questionsCount; i++) {
    const { question, answer } = gameProcess();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${nameQ}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameQ}!`);
};
export default startGame;
