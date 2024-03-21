#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    messege: "select one of the operation to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "division", "multiplication"],
  },
]);

//conditional statement
if(answer.operator === "addition"){console.log( answer.firstNumber + answer.secondNumber);}
else if (answer.operator ==="subtraction"){console.log( answer.firstNumber - answer.secondNumber);}
else if (answer.operator ==="multiplication"){console.log( answer.firstNumber * answer.secondNumber);}
else if (answer.operator ==="division"){console.log( answer.firstNumber / answer.secondNumber);}
else("please enter valid operator");