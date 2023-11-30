// Desafio disponível em https://www.hackerrank.com/challenges/30-conditional-statements

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

/**
 * Returns whether the number entered is strange.
 * +param {Number} n - An informative number.
 * -return {String} If the number is strange according to some requirements.
 */
function isWeird(n: number): string {
  let whatWeird: string;

  // 'n' is odd!
  if (n % 2 == 1) {
    whatWeird = "Weird";
  }
  // n is even!
  else {
    // 'n' is in the range 2 to 5!
    if (n > 2 && n <= 5) {
      whatWeird = "Not Weird";
    }
    // 'n' is in the range 5 to 20!
    else if (n > 5 && n <= 20) {
      whatWeird = "Weird";
    }
    // 'n' is greater than 20!
    else {
      whatWeird = "Not Weird";
    }
  }

  return whatWeird;
}

function main() {
  const N: number = parseInt(readLine().trim(), 10);
  console.log(isWeird(N));
}
