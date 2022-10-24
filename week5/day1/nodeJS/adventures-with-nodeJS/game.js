// Importing node modules
const readline = require("readline");
const chalk = require("chalk");

// readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q: "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q: "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function askQuestion(question, answers) {
    let answersKeys = Object.keys(answers);
    let prompt = "";

    // check if there is only one answer
    if (answersKeys.length > 1) {
        prompt = `${question} [${chalk.green(answersKeys[0])} OR ${chalk.red(
            answersKeys[1]
        )}]\n`;
    } else {
        prompt = `${question}\n`;
    }

    rl.question(prompt, (theAnswer) => {
        if (theAnswer == answersKeys[0]) {
            if (answers[answersKeys[0]].q) {
                askQuestion(
                    answers[answersKeys[0]].q,
                    answers[answersKeys[0]].answers
                );
            } else {
                console.log(answers[answersKeys[0]]);
                rl.close();
            }
        } else if (theAnswer == answersKeys[1]) {
            console.log(answers[answersKeys[1]]);
            rl.close();
        } else {
            // wrong answer repeat again
            console.log("wrong answer, please try again..");
            askQuestion(question, answers);
        }
    });
}

askQuestion(story.q, story.answers);
