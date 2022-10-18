
// import x von Dependency
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
  subtract(x, y) {
    return this.x - this.y;
  }
  multiply(x, y) {
    return this.x * this.y;
  }
  divide(x, y) {

    if (this.y === 0) {
      return `you can not divide by zero`;
    } else 
      return this.x / this.y
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

let negative = new Calculation(3, -4);
let biggerLast = new Calculation(4,5);
let zero = new Calculation(8,0);
let naN = new Calculation("abc",1)
let manyNumbers = new Calculation(5,8,7,10)

console.log(manyNumbers.add());

console.log(biggerLast.subtract());
console.log(negative.subtract());
console.log(zero.divide());
console.log(zero.modulation());
console.log(naN.modulation())
console.log(manyNumbers.modulation())




let result = biggerLast.subtract()+ negative.subtract()
console.log(result)


// FILESYSTEM MANAGEMENT:
//json.stringify nummer -> string (muss für json)
fs.writeFileSync("calculation.pdf", JSON.stringify(`The result of your calculation is: ${result}`));

//READ
// jsonString -> was in calculation.pdf ist
fs.readFile("calculation.pdf", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    //JSON.parse macht string -> nummer
    const calculation = JSON.parse(jsonString);
    console.log("The result of the calculation is :", calculation);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});


