// Desafio disponível em https://www.hackerrank.com/challenges/30-linked-list

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

class No {
  value: number;
  next: No | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  private key: No | null;
  constructor() {
    this.key = null;
  }

  insert = (value: number) => {
    const newNo = new No(value);

    if (!this.key) {
      this.key = newNo;
      return;
    }

    let current: No = this.key;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNo;
  };

  print = () => {
    let start: any = this.key;
    let array: number[] = [];

    while (start !== null) {
      array.push(start.value);
      start = start.next;
    }

    const valueArray: string = array.join(" ");
    console.log(valueArray);
  };
}

function main() {
  // Enter your code here
  const inputNumber: number[] = inputLines.map(Number);
  const size: number = inputNumber[0];
  const list: LinkedList = new LinkedList();

  for (let i: number = 1; i <= size; i++) {
    list.insert(inputNumber[i]);
  }

  list.print();
}
