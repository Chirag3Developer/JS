// var JS = "JavaScript";

// if (JS == "JavaScript") console.log("JS is JavaScript");
// else console.log("JS is Not a JavaScript");

// var JS = "FUN";
// if (JS == "JavScript") console.log("JS is JavaScript");
// else console.log("JS is Not a JavaScript");

// console.log(14 + 20 + 18 + 545 * 5 - 8 / 2);

// console.log("====== LECTURE: Values and Variables ====== ");

// let Country = "India";
// let Continent = "Asia";
// let Population = "138";

// console.log(
//   "Country = " +
//     Country +
//     ", Continent = " +
//     Continent +
//     ", Population = " +
//     Population
// );

// console.log("Contry Type = " + typeof Country);
// console.log("Continent Type = " + typeof Continent);
// console.log("population Type = " + typeof population);

// console.log("====== LECTURE: Data Types ====== ");

// let isIsland = !true;
// let Language;

// console.log("My Country Is Island = " + isIsland);
// console.log("IsIsland Data Type = " + typeof isIsland);
// console.log("Language = " + Language);
// console.log("Language Data Type = " + typeof Language);

// console.log("====== LECTURE: let, const and var ====== ");

// Language = "Gujrati";
// console.log("Language = " + Language);

// Language = "Hindi";
// console.log("Language = " + Language);

// const Continent = "Asia";
// console.log("Continent = " + Continent);

// const Country = "India";
// console.log("Country = " + Country);

// let Population = 138;
// console.log("Population in 2001 = " + Population + ' CR');

// Population = 145;
// console.log("Population in 2021 = " + Population + ' CR');

// console.log("====== LECTURE: Basic Operators ====== ");

// let Que1 = Population / 2;
// console.log('Que1 = ' + Que1);

// Population++;
// console.log('Que2 = ' + Population);

// let Que3 = Population > 6;
// console.log('Que3 = ' + Que3);

// let Que4 = Population < 33;
// console.log('Que4 = ' + Que4);

// let description = Country + ' is in ' + Continent + ', and its ' + Population + ' million people speak ' + Language;
// console.log(description)

// console.log("====== LECTURE: Strings and Template Literals ====== ");

// description = `${Country} is in ${Continent}, and its ${Population} million people speak ${Language}`;
// console.log(description)

// console.log("====== Coding Challenge #1 ====== ");
// // The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.
// function massCALC(Weight, height) {
//     BMI = Weight / (height * height);
//     return BMI;
// }
// // Test 1
// let MarksMass = massCALC(78, 1.69);
// console.log(MarksMass)
// let JohnMass = massCALC(92, 1.95);
// console.log(JohnMass)
// console.log(MarksMass > JohnMass);

// Test 2
// MarksMass = massCALC(95, 1.88);
// console.log(MarksMass)
// JohnMass = massCALC(85, 1.76);
// console.log(JohnMass)
// console.log(MarksMass > JohnMass);

// console.log("====== LECTURE: Taking Decisions: if / else Statements ====== ");
// // Population = 22
// if (Population > 33) {
//     console.log(`${Country}'s population is above average :)`);
// } else {
//     console.log(`${Country}'s population is ${33-Population} million below average`);
// }


// console.log("====== Coding Challenge #2 ====== ");
// if (MarksMass > JohnMass) {
//     console.log(`Mark's (${MarksMass}) BMI is Higher then John's (${JohnMass}) !`);
// } else {
//     console.log(`John's (${JohnMass}) BMI is Higher then Mark's (${MarksMass}) !`);
// }

// console.log("====== LECTURE: Type Conversion and Coercion ====== ");
// '9' - '5'; // 4
// '19' - '13' + '17'; // 617
// '19' - '13' + 17; // 617   23 Wrong
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; //5643  1143 Wrong


// console.log("====== LECTURE: Equality Operators: == vs. === ====== ");

// let numNeighbours = Number(prompt("How Many Neigbour Countries Does Your Contry Have?"));
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// console.log("====== LECTURE: Logical Operators ====== ");


// let Country = "India";
// let Continent = "Asia";
// let isIsland = false;
// let Population = "0";
// let Language = "English";


// if (Language == 'English' && Population < 50 && !isIsland) {
//     console.log(`You should live in ${Country} ✔ 🏡`)
// } else {
//     console.log(`${Country} does not meet your criteria home 🤘`);
// }


// console.log("====== Coding Challenge #3 ====== ");

// let DolphinsScore = (97 + 112 + 101) / 3;
// console.log(DolphinsScore);

// let Koalasscore = (109 + 95 + 106) / 3;
// console.log(Koalasscore);

// if (DolphinsScore > Koalasscore) {
//     console.log(`Dolphins Team Is Win! ${DolphinsScore}`);
// } else {
//     console.log(`Koalas Team Is Win! ${Koalasscore}`);
// }

// if (DolphinsScore > Koalasscore && DolphinsScore >= 100) {
//     console.log(`Dolphins Team Is Win! ${DolphinsScore}`);
// } else if (Koalasscore > DolphinsScore && Koalasscore >= 100) {
//     console.log(`Koalas Team Is Win! ${Koalasscore}`);
// } else {
//     console.log(`Both Team Score is same So, no team wins the trophy !`);
// }


// console.log("====== LECTURE: The switch Statement ====== ");

// let language = "hindi";
// if (language === "chinese" || language === "mandarin") {
//     console.log("MOST number of native speakers!")
// } else if (language === "spanish") {
//     console.log("2nd place in number of native speakers")
// } else if (language === "english") {
//     console.log("3rd place")
// } else if (language === "hindi") {
//     console.log("Number 4")
// } else if (language === "arabic") {
//     console.log("5th most spoken language")
// } else {
//     console.log("Great language too :D")
// }

console.log("====== Coding Challenge #4 ====== ");

const Bill = 275;
const tip = Bill >= 50 & Bill <= 300 ? Bill * 15 / 100 : Bill * 20 / 100;

console.log(`The bill was ${Bill}, the tip was ${tip}, and the total value ${Bill + Number(tip)}`);
