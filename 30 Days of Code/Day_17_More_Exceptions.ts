// Desafio disponível em https://www.hackerrank.com/challenges/30-more-exceptions

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

function calculator(n: number, p: number) {
  try {
    if (n < 0 || p < 0) {
      throw new Error("n and p should be non-negative");
    }
    const power: number = n ** p;
    console.log(power);
  } catch (err) {
    console.log("n and p should be non-negative");
  }
}

function main() {
  const size: number = Number(inputLines[0]);
  const numberUser: string[] = inputLines;

  for (let i = 1; i <= size; i++) {
    let num: number[] = numberUser[i].split(" ").map(Number);
    calculator(num[0], num[1]);
  }
}
