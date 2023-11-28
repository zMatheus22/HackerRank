// Desafio disponível em https://www.hackerrank.com/challenges/30-data-types
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
  const i1: Number = 4;
  const d1: Number = 4.0;
  const s1: String = "HackerRank ";

  const i: Number = Number(readLine());
  const d: Number = Number(readLine());
  const s: String = String(readLine());

  const sumInt: Number = Number(i1) + Number(i);
  const sumFloat: Number = Number(d1) + Number(d);
  const sumString: String = String(s1) + String(s);

  console.log(sumInt);
  console.log(sumFloat.toFixed(1));
  console.log(sumString);
}
