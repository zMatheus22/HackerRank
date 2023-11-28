// Desafio disponível em https://www.hackerrank.com/challenges/30-hello-world/

"use strict";

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
// process.stdin.on("data", function (inputStdin: string): void {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function (): void {
//   inputLines = inputString.split("\n");
//   inputString = "";
//   main();
// });

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  // Enter your code here
  inputLines.unshift("Hello, World.");
  // O método unshift() adiciona um ou mais elementos no início de um array e retorna o
  //   número de elementos (propriedade length) atualizado.

  console.log(readLine());
  console.log(readLine());
}
