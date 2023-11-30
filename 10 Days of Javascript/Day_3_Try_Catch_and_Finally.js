// Desafio disponível em https://www.hackerrank.com/challenges/js10-try-catch-and-finally

function reverseString(s) {
  try {
    const rev = s.split("").reverse().join("");
    console.log(rev);
  } catch (ReferenceError) {
    console.log("s.split is not a function");
    console.log(s);
  }
}
