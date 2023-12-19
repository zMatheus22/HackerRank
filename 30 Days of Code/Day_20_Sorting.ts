// Desafio disponível em https://www.hackerrank.com/challenges/30-sorting/

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

function bubble_Sort(size: number, array: number[]) {
  let numOfSwaps: number = 0;
  let temp: number;
  for (let i: number = 0; i < size; i++) {
    for (let j: number = 0; j < size - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        numOfSwaps += 1;
      }
    }
  }
  console.log(`Array is sorted in ${numOfSwaps} swaps.`);
  console.log(`First Element: ${array[0]}`);
  console.log(`Last Element: ${array[size - 1]}`);
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  // Write your code here
  bubble_Sort(n, a);
}
