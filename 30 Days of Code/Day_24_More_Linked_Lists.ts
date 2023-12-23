// Desafio disponível em https://www.hackerrank.com/challenges/30-linked-list-deletion
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
  data: number;
  next: number;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  removeDuplicates = (head: any) => {
    let current: any = head;
    while (current.next) {
      if (current.next) {
        if (current.data === current.next.data) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }
    return head;
  };

  insert = (head: any, data: number) => {
    let p: No = new No(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      let start: any = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }
    return head;
  };

  display = (head: any) => {
    let start: any = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}
function main() {
  const size: number = parseInt(readLine());
  let head: any = null;
  const mylist: Solution = new Solution();

  for (let i: number = 0; i < size; i++) {
    let data: number = parseInt(readLine());
    head = mylist.insert(head, data);
  }

  head = mylist.removeDuplicates(head);
  mylist.display(head);
}
