// Desafio disponível em https://www.hackerrank.com/challenges/30-scope

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

class Difference {
  private elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  maximumDifference() {
    const size = this.elements.length - 1;
    const difference: number = this.elements[size] - this.elements[0];

    console.log(difference);
  }
}

function main() {
  // Enter your code here
  // Read the second line, create an array of numbers and arrange them from smallest to largest.
  const numUser: number[] = inputLines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const difference: Difference = new Difference(numUser);

  difference.maximumDifference();
}
