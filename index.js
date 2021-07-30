//readlineSync for user input
var readlineSync = require('readline-sync');
//chalk for styling
const chalk = require('chalk');
var score = 0;
// user input reply
var userName = readlineSync.question(chalk.cyan.bold('What is your name? '));
console.log('Welcome ' + userName + ' this is a fun Quiz game on our favourite Indian superhero Shaktimaan.');
console.log(chalk.yellow.bold('Please type only a, b or c from the options to register your answer.'));
console.log(chalk.underline.blue("Let's begin"));

//function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

//if else condition
  if
    (userAnswer.toLowerCase() === answer.toLowerCase()){
      console.log(chalk.green.bold('Right answer!'))
      score = score +1;
    } else {
      console.log(chalk.red.bold('Wrong answer!'))
      score = score;
    }
}
//array of objects
var questions = [{
  question:`What is the name of the alter ego of Shaktimaan?
  a: Pandit Gangadhar Vidhyadhar Mayadhar Omkarnath Shastri
  b: Gangadhar Mayadhar Shastri
  c: Gangadhar Mayadhar Vidhyadhar Omkarnath Shastri

  `,
answer: "c"
}, {
  question: `How does Shaktimaan become a superhuman?
  a: By five elements of nature
  b: By meditation and five elements of nature
  c: By meditation
  
  `,
  answer: "b"
  }, {
    question: `What is the profession of Shaktimaan’s alter ego?
    a: Newspaper Photographer
    b: Nature Photographer and Wildlife photographer
    c: Photographer
    
    `,
    answer: "a"
  }, {
    question: `What is the name of the reporter who loves Shaktimaan?
    a: Geeta Kumari
    b: Geeta Vishwas
    c: Sunita Vishwas
    
    `,
    answer: "b"
  }, {
    question: ` What is the pledge of Shaktimaan?
    a: To eradicate corruption from society
    b: To fight the evil
    c: To finish corruption and injustice in society
    
    `,
    answer: "c"
  }, {
    question: `What is the name of Shaktimaan’s enemy?
    a: Tamraj Kilvish
    b: Gangadhar
    c: Vishwas
    
    `,
    answer: "a"
  }, {
    question: `Which values does Shaktimaan follow?
    a: Morals and ethical values of truth
    b: Values mentioned in Holy book of Bhagavad Gita
    c: All of the above
    
    `,
    answer: "c"
  }, {
    question: `Who gives Shaktimaan his heroic name?
    a: Mahaguru
    b: Geeta Vishwas
    c: Dr.Jaikaal
    
    `,
    answer: "b"
  }, {
    question: `Who is Shaktimaan?
    a: Reincarnation of Lord Shiva
    b: Reincarnation of Lord Vishnu
    c: Reincarnation of Shri Satya
    
    `,
    answer: "c"
  }, {
    question: `How does Shaktimaan transport himself from one place to another?
    a: By swirling with his one hand up in the air
    b: By flying in the air
    c: By disappearing magically
    
    `,
    answer: "a"
  }]


//loop
for (i = 0; i < questions.length; i++)
{
var currentQuestion = questions[i];

//function call
play(currentQuestion.question, currentQuestion.answer);
console.log(chalk.bgMagenta('Current score ', score));
console.log('-------------------');
}

console.log(chalk.yellow.bold('HURRAH! ' + userName + ' you scored ', score));
console.log(chalk.cyan.bold('Thank you for playing :)'));