// Desafio disponível em https://www.hackerrank.com/challenges/30-class-vs-instance

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
  class Person {
    age: number;
    constructor(age: number) {
      this.age = age;
    }

    yearPasses(): number {
      return (this.age += 1);
    }

    amIOld() {
      if (this.age < 0) {
        this.age = 0;
        console.log(`Age is not valid, setting age to ${this.age}.`);
      }
      if (this.age < 13) {
        return "You are young.";
      } else if (this.age >= 13 && this.age < 18) {
        return "You are a teenager.";
      } else if (this.age >= 18) {
        return "You are old.";
      }
    }
  }

  const T: number = parseInt(readLine());
  for (let i: number = 0; i < T; i++) {
    const age: number = parseInt(readLine());
    const p: Person = new Person(age);
    console.log(p.amIOld());
    for (let j: number = 0; j < 3; j++) {
      p.yearPasses();
    }

    console.log(p.amIOld());
    console.log("");
  }
}
