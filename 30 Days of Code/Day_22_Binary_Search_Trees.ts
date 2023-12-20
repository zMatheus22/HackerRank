// Desafio disponível em https://www.hackerrank.com/challenges/30-binary-search-trees

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
  left: any;
  right: any;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTrees {
  insert = (root: No | null, data: number): No => {
    if (root === null) {
      return new No(data);
    }

    if (data <= root.data) {
      root.left = this.insert(root.left, data);
    } else {
      root.right = this.insert(root.right, data);
    }

    return root;
  };

  getHeight = (root: No | null): number => {
    // Add your code here
    if (root === null) {
      return -1;
    }
    const left: number = this.getHeight(root.left);
    const right: number = this.getHeight(root.right);

    if (left >= right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };
}

function main() {
  // Enter your code here
  const tree: BinarySearchTrees = new BinarySearchTrees();
  let root = null;
  let values: number[] = inputLines.map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }
  console.log(tree.getHeight(root));
}
