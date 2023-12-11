// Desafio disponível em https://www.hackerrank.com/challenges/30-2d-arrays

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
  let arr: number[][] = Array(6);

  for (let i: number = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }
  let sum: number = 0;
  let max: number = Number.NEGATIVE_INFINITY;

  for (let k: number = 0; k < 4; k++) {
    for (let l: number = 1; l < 5; l++) {
      // sum = a + b + c
      //         + d +
      //       e + f + g
      sum =
        arr[k][l - 1] +
        arr[k][l] +
        arr[k][l + 1] +
        arr[k + 1][l] +
        arr[k + 2][l - 1] +
        arr[k + 2][l] +
        arr[k + 2][l + 1];
      if (sum > max) {
        max = sum;
      }
    }
  }
  console.log(max);
}
