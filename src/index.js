import readlineSync from 'readline-sync';

// Game Core,
const questionsCount = 3;

const startGame = (gameDescription, gameProcess) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');
  const nameQuestion = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameQuestion}!`);

  for (let i = 0; i < questionsCount; i += 1) {
    const { mainQuestion, rightAnswer } = gameProcess();

    console.log(`Question: ${mainQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${nameQuestion}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameQuestion}!`);
};
export default startGame;
