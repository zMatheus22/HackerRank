// Desafio disponível em https://www.hackerrank.com/challenges/30-binary-trees

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
  left: No | null;
  right: No | null;
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

  levelOrder = (root: No | null): string => {
    if (root !== null) {
      const arrayValues: No[] = [];
      const resultLevels: number[] = [];

      arrayValues.push(root);

      while (arrayValues.length > 0) {
        const values: No = arrayValues.shift();
        resultLevels.push(values.data);

        if (values.left !== null) {
          arrayValues.push(values.left);
        }
        if (values.right !== null) {
          arrayValues.push(values.right);
        }
      }

      return resultLevels.join(" ");
    }
  };
}

function main() {
  // Enter your code here
  const tree: BinarySearchTrees = new BinarySearchTrees();
  let root: No | null = null;
  let values: number[] = inputLines.map(Number);

  for (let i: number = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }
  console.log(tree.levelOrder(root));
}
