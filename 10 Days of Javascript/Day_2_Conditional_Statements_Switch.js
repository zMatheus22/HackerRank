// Desafio disponível em https://www.hackerrank.com/challenges/js10-switch

function getLetter(s) {
  let letter;
  // Write your code here
  const first_character = s[0];

  switch (first_character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "y":
    case "z":
      letter = "D";
      break;
  }

  return letter;
}
