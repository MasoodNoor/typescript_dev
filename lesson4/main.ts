import chalk from "chalk";
import inquirer from "inquirer";

// console.log(chalk.yellow.bold("Masood Noor"));

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
    type: "number",
    message: "Enter your contact information:",
  },
  {
    name: "email",
    type: "string",
    message: "Enter your email address:",
  },
  {
    name: "education",
    type: "string",
    message: "Enter your qualification details:",
  },
]);

let myName: string = answers.name
let myFname: string = answers.fname
let myContact: number = answers.contact
let myEmail: string = answers.email
let myEducation : string = answers.education


console.log(`\t ${chalk.bold("Name")} \t\t:\t${chalk.bold.cyan(myName.toUpperCase())}`);
console.log(`\t ${chalk.bold("Father's Name")} \t:\t${chalk.bold.cyan(myFname.toUpperCase())}`);
console.log(`\t ${chalk.bold("Contact")} \t:\t${chalk.bold.cyan(myContact)}`);
console.log(`\t ${chalk.bold("Email")} \t\t:\t${chalk.bold.cyan(myEmail.toLowerCase())}`);
console.log(`\t ${chalk.bold("Education")} \t:\t${chalk.bold.cyan(myEducation.toUpperCase())}`);