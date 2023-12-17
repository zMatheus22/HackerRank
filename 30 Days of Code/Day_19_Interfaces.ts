// Desafio disponível em https://www.hackerrank.com/challenges/30-interfaces

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

interface AdvancedArithmetic {
  numberUser: number;
  divisorSum(numberUser: number): number;
}

class Calculator implements AdvancedArithmetic {
  numberUser: number;
  constructor(numberUser: number) {
    this.numberUser = numberUser;
  }

  divisorSum(numberUser: number): number {
    let soma: number = 0;
    for (let i = 1; i <= numberUser; i++) {
      if (numberUser % i === 0) {
        soma += i;
      }
    }
    console.log("I implemented: AdvancedArithmetic");
    return soma;
  }
}

function main() {
  // Enter your code here
  const inputNumber: number = Number(readLine());
  const resultCalculator: number = new Calculator(inputNumber).divisorSum(
    inputNumber
  );

  console.log(resultCalculator);
}
