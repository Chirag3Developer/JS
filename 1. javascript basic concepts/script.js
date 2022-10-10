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

console.log("============= Closures =============");
(function parentsFun() {
  let name1 = "Chirag";
  console.log(name1);

  let name2 = "";
  
  function innerFun() {
    name2 = "Jagatiya";
    console.log(name2);
  }
  innerFun()

  console.log(name1 + " " + name2);
})();