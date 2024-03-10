import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([
  {
    name: "calculate",
    type: "string",
    message:
      "Which operation do you want to perform?\n\tOptions:\tadd\tsub\tmul\tdiv\n",
  },
]);

// for addition inquirer

if (answers.calculate == "add") {
  let add_answers = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number",
    },
  ]);

  let sum: number = add_answers.num1 + add_answers.num2;
  console.log(
    `The addition of these are numbers are:\t${chalk.cyan.bold(sum)}`
  );
}

// for sub inquirer

if (answers.calculate == "sub") {
  let sub_answers = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number",
    },
  ]);

  let sub: number = sub_answers.num1 - sub_answers.num2;
  console.log(
    `The subtraction these are numbers are:\t${chalk.cyan.bold(sub)}`
  );
}

// for mult inquirer

if (answers.calculate == "mul") {
  let mul_answers = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number",
    },
  ]);

  let mul: number = mul_answers.num1 * mul_answers.num2;
  console.log(
    `The multiplation of these are numbers are:\t${chalk.cyan.bold(mul)}`
  );
}

// for div inquirer

if (answers.calculate == "div") {
  let div_answers = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number",
    },
  ]);

  let div: number = div_answers.num1 / div_answers.num2;
  console.log(
    `The division of these are numbers are:\t${chalk.cyan.bold(div)}`
  );
}
