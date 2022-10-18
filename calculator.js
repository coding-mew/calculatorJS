import { fs } from "file-system";

class Calculation {
  constructor(x, y, ...numbers) {
this.x = x;
this.y = y;
this.numbers = numbers;

  }
  pi() {
    return Math.PI;
  }
  eulnerNo() {
    return 2.718281828459045;
  }
  percentage(x, y) {
    (this.x * this.y) / 100;
  }
  add(){
    return this.numbers.reduce((acc, curr) => {
      acc += curr;
      return acc+ this.x + this.y;
   });
 }
  subtract(x,...y) {
    return this.x - this.y;
  }
  multiply(x, y) {
    return this.x * this.y;
  }
  divide(x, y) {
    if (this.y === 0) {
      return `you can not divide by zero`;
    }  return this.x / this.y;
  }
  modulation(x, y) {
    if (this.y === 0) {
      return `you can not divide by zero`;
    }
    return this.x % this.y;
  }
  elevate(x, y) {
    this.x ** this.y;
  }
  sqrt(x) {
    return Math.sqrt(this.x);
  }
}
let negative = new Calculation(-4, -8);
let biggerLast = new Calculation(8, 10);
let zero = new Calculation(8, 0);
let text = new Calculation("abc",10)
let manyNumbers = new Calculation(5,8,7,10)


console.log(biggerLast.subtract());
console.log(negative.subtract() + negative.subtract());
console.log(zero.divide());
console.log(zero.modulation());
console.log(biggerLast.divide());
console.log(text.modulation());
console.log(manyNumbers.add());


let result = negative.subtract() + negative.subtract()





//json.stringify macht nummer -> string (muss für json)
fs.writeFileSync("data.json", JSON.stringify(result));

//READ
// json.sttring -> was in data.json ist
fs.readFile("data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    //JSON.parse: string -> nummer
    const calculation = JSON.parse(jsonString);
    console.log("The result of the calculation is :", calculation);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

