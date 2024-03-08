import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.yellow.bold("Masood Noor"));

let answers = await inquirer.prompt([
  {
    name: "name",
    type: "string",
    message: "Enter your Name:",
  },
  {
    name: "fname",
    type: "string",
    message: "Enter your Father's name:",
  },
  {
    name: "contact",
    type: "numbet",
    message: "Enter your contact information:",    
    },
]);

console.log(chalk.bgMagenta(`${answers.name}`));
console.log(chalk.bgMagenta(`${answers.fname}`));
console.log(chalk.bgMagenta(`${answers.contact}`));
