// console.log("====== LECTURE: Functions ====== ");

// function describeCountry(country, population, capitalCity) {
//   const data = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return data;
// }

// console.log(describeCountry('India', 138, 'New Delhi'));
// console.log(describeCountry('China', 140.21, 'Beijing'));
// console.log(describeCountry('United kingdom', 6.72, 'London'));


// console.log("====== LECTURE: Function Declarations vs. Expressions ====== ");

// function percentageofworld1(country, population) {
//   return `${country} has ${population} million people, which is ${population * 100 / 7900}% of the world.`;
// }
// console.log(percentageofworld1('China', 1441));

// let percentageofworld2 = function (country, population) {
//   return `${country} has ${population} million people, so it's about ${population * 100 / 7900}% of the world population.`;
// }
// console.log(percentageofworld2('China', 1441));

// console.log("====== LECTURE: Arrow Functions ====== ");

// const percentageOfWorld3 = (country, population) => {
//   return `${country} has ${population} million people, so it's about ${population * 100 / 7900}% of the world population.`;
// }
// console.log(percentageofworld2('India', 138.3));


// console.log("====== LECTURE: Functions Calling Other Functions ====== ");

// function describePopulation(country, population) {
//   return percentageofworld1(country, population);
// }
// console.log(describePopulation('China', 1441));

// console.log("====== Coding Challenge #1 ====== ");
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// function checkWinner(DolphinsScore, KoalasScore) {
//   console.log(DolphinsScore, KoalasScore);
//   console.log('Con1', DolphinsScore, KoalasScore * 2, (DolphinsScore >= KoalasScore * 2));
//   console.log('Con2', KoalasScore, DolphinsScore * 2, (KoalasScore >= DolphinsScore * 2));
//   if (DolphinsScore >= (KoalasScore * 2)) {
//     console.log(`"Dolphins win (${DolphinsScore} vs. ${KoalasScore})`);
//   } else if (KoalasScore >= (DolphinsScore * 2)) {
//     console.log(`"Koalas win (${KoalasScore} vs. ${DolphinsScore})`);
//   } else {
//     console.log(`"NO Team win ...`);
//   }
// }
// const DolphinsScore = calcAverage(85, 54, 41);
// const KoalasScore = calcAverage(23, 34, 27);
// checkWinner(DolphinsScore, KoalasScore);


// console.log("====== LECTURE: Introduction to Arrays ====== ");

// const percentageofworld1 = (population) => {
//   return population * 100 / 7900
// };

// const populations = ['1380', '1410', '460', '950', '950'];
// console.log(populations.length === 4);

// const percentages = [
//   percentageofworld1(populations[0]),
//   percentageofworld1(populations[1]),
//   percentageofworld1(populations[2]),
//   percentageofworld1(populations[3])
// ]
// console.log(percentages);

// console.log("====== LECTURE: Basic Array Operations (Methods) ====== ");

// const InNeighbours = ["Afghanistan", "Bangladesh", "Bhutan", "China", "Maldives", "Myanmar", "Nepal", "Pakistan", "Sri Lanka"];
// console.log(InNeighbours);

// InNeighbours.push("Utopia");
// console.log(InNeighbours);

// InNeighbours.pop("Utopia");
// console.log(InNeighbours);

// console.log(InNeighbours.includes("Germany") ? "" : "Probably not a central European country :)");

// InNeighbours[7] = "Pak";
// console.log(InNeighbours);


// console.log("====== Coding Challenge #2 ====== ");
// function calcTip(price) {
//   return price >= 50 && price <= 300 ? price * 0.15 : price * 0.20;
// }
// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2])
// ];
// console.log(tips);
// // debugger
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // debugger
// console.log(total);

// console.log("====== LECTURE: Introduction to Objects ====== ");

const myCountry = {
  country: 'India',
  capital: 'Delhi',
  language: ["Assamese", "Bangla", "Bodo", "Dogri", "Gujarati", "Hindi", "Kashmiri", "Kannada", "Konkani", "Maithili", "Malayalam", "Manipuri", "Marathi", "Nepali", "Oriya", "Punjabi", "Tamil", "Telugu", "Santali", "Sindhi", "Urdu"],
  population: 138,
  neighbours: ["Afghanistan", "Bangladesh", "Bhutan", "China", "Maldives", "Myanmar", "Nepal", "Pakistan", "Sri Lanka"]
}
console.log(myCountry);


console.log("====== LECTURE: Dot vs. Bracket Notation ====== ");

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);