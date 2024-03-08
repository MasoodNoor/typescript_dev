// This is the Second task of TypeScript
// We learned about, What is Varaiables, types of variables VAR, LET, CONST
// We learned more about Data Types STRING, NUMBER, BOOLEAN, ANY

let favColor = "Blue"; // type interference
console.log("This is first variable attempt: " + favColor);

favColor = "green";
console.log("When we change the variable: " + favColor);

let my_string: string = "Ali";
let mystring_2: string = "aly";
let myNum_1: number = 637097;

const myNumber2: any = 300;

console.log("This is Number value from the variable myNum_1:",myNum_1);
console.log("This is String value from the variable my_string:",my_string);
console.log("This is Srting from the variable mystring_2:",mystring_2);
console.log("This is Number value from the variable:",myNumber2);
console.log("This is Boolean value from the variable my_string and my_string2:",my_string == mystring_2);

console.log("Simple Number addition:",22 + 22 + 63);
console.log("This is String: 22 + 22 + 63");
