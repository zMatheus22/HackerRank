// Desafio disponível em https://www.hackerrank.com/challenges/30-queues-stacks

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

function isPalindrome(str: string): boolean {
  const size: number = str.split("").length;
  let inveStr: string = "";

  for (let i: number = size - 1; i >= 0; i--) {
    inveStr += str[i];
  }

  if (inveStr === str) {
    return true;
  } else {
    return false;
  }
}

function main() {
  // Enter your code here
  const S: string = readLine();

  if (isPalindrome(S)) {
    console.log(`The word, ${S}, is a palindrome.`);
  } else {
    console.log(`The word, ${S}, is not a palindrome.`);
  }
}
