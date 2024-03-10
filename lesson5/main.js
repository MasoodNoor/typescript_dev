import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([
    {
        name: "calculate",
        type: "string",
        message: "Which operation do you want to perform? \t add \t sub \t mul \t div \n",
    },
]);
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
    let sum = add_answers.num1 + add_answers.num2;
    console.log(`The addition of these are numbers are:\t${chalk.cyan.bold(sum)}`);
}
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
    let sub = sub_answers.num1 - sub_answers.num2;
    console.log(`The subtraction these are numbers are:\t${chalk.cyan.bold(sub)}`);
}
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
    let mul = mul_answers.num1 * mul_answers.num2;
    console.log(`The multiplation of these are numbers are:\t${chalk.cyan.bold(mul)}`);
}
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
    let div = div_answers.num1 / div_answers.num2;
    console.log(`The division of these are numbers are:\t${chalk.cyan.bold(div)}`);
}
