// Desafio disponível em https://www.hackerrank.com/challenges/30-review-loop

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

function main() {
  // Enter your code here
  const T: number = parseInt(readLine());
  for (let a: number = 0; a < T; a++) {
    let stringRead: string = readLine();
    let parString: string = "";
    let imparString: string = "";

    for (let i: number = 0; i < stringRead.length; i++) {
      if (i % 2 == 0) {
        parString += stringRead[i];
      } else {
        imparString += stringRead[i];
      }
    }

    console.log(`${parString} ${imparString}`);
  }
}
