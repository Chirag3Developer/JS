// console.log("============= Local Scope =============");
// let name = "default name Chirag";

// function localScope() {
//   let name = "Chirag";
//   // return name;
//   console.log(name, '= local Scope');
// }
// console.log(localScope());
// console.log(name);

// console.log("============= Immediately Invoked Function Expression =============");
// (function (){
//   let name = "demo";
//   console.log(name);
// })();

// console.log("============= Hoisting =============");
// a = 123;
// console.log(a);
// var a;

// console.log("============= Closures =============");
// (function parentsFun() {
//   let name1 = "Chirag";
//   console.log(name1);

//   function innerFun() {
//     name2 = "Jagatiya";
//     // let name2 = "Jagatiya";
//     console.log(name2);
//     // let name2 = "";
//   }
//   innerFun()

//   console.log(name1 + " " + name2);
// })();

// console.log("============= CallBack Funstion =============");

// function msg(){
//   return "your sum is";
// }

// function msg2(){
//   // text = "This is Your Ans. ";
//   // return text;
//   return "This is Your Ans.";
// }

// function sum(num1, num2, CallBack){
//   console.log(CallBack(), num1 + num2);
//   // console.log(`your sum is `)
//   // CallBack()
// }

// sum(10, 50, msg);
// sum(10, 20, msg2);

// console.log("============= Asynchronous =============");

// // setTimeout(printMsg, 1000);
// setInterval(printMsg, 1000);
// // printMsg()

// num = 0;
// function printMsg(){
//   // document.getElementById("dText").innerHTML = `Hello world !! ${num++}`;
//   document.getElementById("dText").innerHTML = `${new Date().getHours()} H : ${new Date().getMinutes()} M : ${new Date().getSeconds()} S`;
// }

console.log("============= Promises =============");

let CarData = [{
  "name": "BMW",
  "color": "purple",
  "type": "minivan",
  "registration": new Date('2012-02-03'),
  "capacity": 7
}, {
  "name": "Mini Cooper",
  "color": "red",
  "type": "station wagon",
  "registration": new Date('2018-03-03'),
  "capacity": 5
}, {
  "name": "Ferrari",
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}]
console.log(CarData);

function addCarData(newData) {
  // return new Promise(function (resolve, reject) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      CarData.push(newData);
      error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  })
}

getCardata(CarData)
function getCardata() {
  setTimeout(function () {
    str = "";
    for (let index = 0; index < CarData.length; index++) {
      str += `<li>${CarData[index]['name']}</li>`;
    }
    document.getElementById('carData').innerHTML = str;
  }, 5000);
}

let newCardData = {
  "name": "Test",
  "color": "Green",
  "type": "Dummy type",
  "registration": new Date('2022-03-25'),
  "capacity": 10
};

addCarData(newCardData).then(function () {
  getCardata();
}).catch(function () {
  console.log("data Is Note Added.!!")
});