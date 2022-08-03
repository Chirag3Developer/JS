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


console.log("====== LECTURE: Introduction to Arrays ====== ");

const populations = ['138', '141.5', '46', '95'];
