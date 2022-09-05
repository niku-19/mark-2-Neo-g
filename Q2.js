const readlineSync = require("readline-sync");
const chalk = require("chalk");


// Main code starts from here :)
console.log(chalk.yellow("Welcome to the Online Quiz"));

let username = readlineSync.question("What's your Name?? \n");
console.log("Hello", username, ", Let's Play the Quiz!!");
console.log("\n");
console.log("Rules & Instructions: ");
console.log("1.", username + ", There are 5 Questions on India and all are Compulsory to attempt."
);
console.log("2. You will get 2 points on each Right Answer.");
console.log("\n");

const questionsArray = [
  {
    question: "India's Largest City by Population: ",
    answer: "Mumbai",
  },
  {
    question: "National Song of India: ",
    answer: "Vande Mataram",
  },
  {
    question: "National Motto of India: ",
    answer: "Satyameva Jayate",
  },
  {
    question: "Golden Temple is situated in: ",
    answer: "Amritsar",
  },
  {
    question: "Who was the first Prime Minister of India: ",
    answer: "Jawaharlal Nehru"
  }
];

let score = 0;

// Quiz Function
const quiz = (question,answer) => {
  const userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log('You Answer is Right.');
    score = score + 2;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is:', answer);
    return 0;
  }

  if(score < 0){
    score = 0;
  }
  console.log(chalk.red('Your Score is: ', score));
}
for(var i = 0; i<questionsArray.length; i++){
  console.log('\n');
  quiz(questionsArray[i].question,questionsArray[i].answer);
  console.log('--------------------------');
}

console.log('\n');
console.log('Congratulations,',username,'Your Total Score is: ',score);