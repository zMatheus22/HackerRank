// Desafio disponível em https://www.hackerrank.com/challenges/30-dictionaries-and-maps

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
  const contacts = new Map();
  const input = inputLines;
  const size: number = parseInt(input[0]);

  for (let i: number = 1; i <= size; i++) {
    contacts.set(input[i].split(" ")[0], input[i].split(" ")[1]);
  }

  input.slice(size + 1).map((contact) => {
    if (!contacts.get(contact)) {
      console.log("Not found");
    } else {
      console.log(`${contact}=${contacts.get(contact)}`);
    }
  });
}
