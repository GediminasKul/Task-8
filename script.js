/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };
  this.subtraction = function (a, b) {
    return a - b;
  };
  this.multiplication = function (a, b) {
    return a * b;
  };
  this.division = function (a, b) {
    return a / b;
  };
}

const calculator = new Calculator();
const sum = calculator.sum(2, 2);
const sum2 = calculator.sum(4, 77);
const subtraction = calculator.subtraction(16, 32);
const mult = calculator.multiplication(11, 22);
const div = calculator.division(13, 2);
console.log(sum);
console.log(sum2);
console.log(subtraction);
console.log(mult);
console.log(div);
