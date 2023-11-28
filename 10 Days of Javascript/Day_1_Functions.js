// Desafio disponível em https://www.hackerrank.com/challenges/js10-function
/*
 * Create the function factorial here
 */

function factorial(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
