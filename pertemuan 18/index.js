console.log("Hello world dari external JS");

let firstname = "Patrick";
const $number = 3;
let years;
var age = 22;
let isMarried = false;

console.log(firstname);
console.log($number);
console.log(isMarried);
console.log(years);

//Operator Aritmatika
let num1 = 10;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
num1++
console.log(num1);
num--;
console.log(num1)

//Assignment Operator

let num3 = 10
let num4;

num4 = num3
console.log(num4);

num3 = num3 + 2;
console.log(num3);

//string Operator

let firstName = "John";
let lastName ="Doe";
let age = 25;

console.log(firstName + "" + lastName)
console.log(firstName + age);

//Operator Perbandingan
let num1 = 10;

console.log(num1 == 10);
console.log(num1 == "10");

console.log(num1 === 10);
console.log(num1 === "10");

console.log(num1 >= 10);
console.log(num1 <= 10);

let num2 = num1 === 10 ? "Ten" : "Another number";
console.log(num2);

//Operator logika
let hasCertificate = true;
let hasTranscript = false;

console.log(hasCertificate && hasTranscript);
console.log(hasTranscript);

//Operator precedence

let result = (10 + 2) * 3;

console.log(result);
