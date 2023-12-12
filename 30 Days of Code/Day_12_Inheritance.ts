// Desafio disponível em https://www.hackerrank.com/challenges/30-inheritance

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

class Person {
  firstName: string;
  lastName: string;
  identification: number;
  idNumber: number;

  constructor(firstName: string, lastName: string, identification: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    return (
      `Name: ${this.lastName}, ${this.firstName}` +
      "\n" +
      `ID: ${this.idNumber}`
    );
  }
}

class Student extends Person {
  scores: number[];
  size: number;

  constructor(
    firstName: string,
    lastName: string,
    identification: number,
    size: number,
    score: number[]
  ) {
    super(firstName, lastName, identification);
    this.scores = score;
    this.size = size;
  }

  calculate() {
    let sum: number = 0;
    for (let i: number = 0; i < this.size; i++) {
      sum += this.scores[i];
    }

    const average: number = sum / this.size;

    let result: string;
    switch (true) {
      case 90 <= average && average <= 100:
        result = "O";
        break;
      case 80 <= average && average < 90:
        result = "E";
        break;
      case 70 <= average && average < 80:
        result = "A";
        break;
      case 55 <= average && average < 70:
        result = "P";
        break;
      case 40 <= average && average < 55:
        result = "D";
        break;
      default:
        result = "T";
        break;
    }
    return `Grade: ${result}`;
  }
}

function main() {
  // Enter your code here
  const data: string[] = inputLines;
  const data_person: string[] = data[0].split(" ");

  const firstName: string = data_person[0];
  const lastName: string = data_person[1];
  const id: number = Number(data_person[2]);
  const size: number = Number(data[1]);
  const score: number[] = data[2].split(" ").map(Number);

  const student: Student = new Student(firstName, lastName, id, size, score);

  console.log(student.printPerson());
  console.log(student.calculate());
}
