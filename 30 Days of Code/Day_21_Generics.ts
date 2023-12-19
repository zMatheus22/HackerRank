// Desafio disponível em https://www.hackerrank.com/challenges/30-generics/

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

function printArray(array: string): void {
  console.log(array);
}

function main() {
  // Enter your code here
  let n: string = readLine();

  while (typeof n === "string") {
    for (let i: number = 1; i <= parseInt(n); i++) {
      printArray(readLine());
    }
    n = readLine();
  }
}
