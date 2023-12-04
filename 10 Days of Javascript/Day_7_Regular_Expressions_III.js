// Desafio disponível em https://www.hackerrank.com/challenges/js10-regexp-3

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  const re = new RegExp(/\d+/gm);

  /*
   * Do not remove the return statement
   */
  return re;
}
