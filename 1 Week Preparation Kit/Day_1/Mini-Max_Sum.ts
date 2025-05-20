// Desafio disponível em https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem

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

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function compareNumbers(a: number, b: number) {
  return a - b;
}

function miniMaxSum(arr: number[]): void {
  const max = arr.sort(compareNumbers);
  const min = arr.sort(compareNumbers);
  let sumMax: number = 0;
  let sumMin: number = 0;
  for (let i: number = 1; i < max.length; i++) {
    sumMax = sumMax + max[i];
  }
  for (let i: number = 0; i < min.length - 1; i++) {
    sumMin = sumMin + min[i];
  }
  console.log(sumMin, sumMax);
}

function main() {
  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
