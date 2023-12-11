// Desafio disponível em https://www.hackerrank.com/challenges/30-binary-numbers

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

function dec2bin(num: number): string {
  return (num >>> 0).toString(2);
}

function cont_One_bin(bin: string[]): number {
  let contOne: number = 0;
  let maxOne: number = 0;

  for (let i: number = 0; i <= bin.length; i++) {
    if (bin[i] === "1") {
      if (contOne == 0) {
        contOne = 1;
      }
      if (bin[i] == bin[i - 1]) {
        contOne += 1;
      }
    } else {
      if (maxOne < contOne) {
        maxOne = contOne;
      }
      contOne = 0;
    }
  }
  return maxOne;
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);
  const bin: string = dec2bin(n);

  console.log(cont_One_bin(bin.split("")));
}
