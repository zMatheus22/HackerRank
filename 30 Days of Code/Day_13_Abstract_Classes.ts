// Desafio disponível em https://www.hackerrank.com/challenges/30-abstract-classes

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

class Book {
  title: string;
  author: string;
  constructor(title: string, author: string) {
    if (this.constructor === Book) {
      throw new TypeError(
        "Do not attempt to directly instantiate an abstract class."
      );
    } else {
      this.title = title;
      this.author = author;
    }
  }
}

class Solution extends Book {
  price: number;
  constructor(title: string, author: string, price: number) {
    super(title, author);
    this.price = price;
  }

  display() {
    console.log(
      `Title: ${this.title}` +
        "\n" +
        `Author: ${this.author}` +
        "\n" +
        `Price: ${this.price}`
    );
  }
}

function main() {
  // Enter your code here
  const data: string[] = inputLines;
  const title: string = data[0];
  const author: string = data[1];
  const price: number = Number(data[2]);

  const myBook: Solution = new Solution(title, author, price);
  myBook.display();
}
