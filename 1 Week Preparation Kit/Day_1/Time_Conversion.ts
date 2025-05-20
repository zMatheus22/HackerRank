// Desafio disponível em https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem

"use strict";

import { WriteStream, createWriteStream } from "fs";
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

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
  const format: string = s.slice(8, 10); // AM or PM
  let hour: string = s.slice(0, 2);
  let hourNumb: number = Number(hour);
  const min_sec: string = s.slice(2, 8);

  if (format === "AM") {
    if (hour === "12") {
      hour = "00";
    }
  } else {
    if (hourNumb < 12) {
      hourNumb = hourNumb + 12;
      hour = String(hourNumb);
    }
  }
  const res: string = hour + min_sec;
  return res;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
