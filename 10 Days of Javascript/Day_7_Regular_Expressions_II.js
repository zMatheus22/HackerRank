// Desafio disponível em https://www.hackerrank.com/challenges/js10-regexp-2

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  const re = new RegExp(/^['MDER][rs]{1,2}\.[a-zA-Z]+$/);
  /*
    - ‘^’ match at beginning of string
    - ‘[MEDR]’ any of these letters
    - ‘[rs]’ followed by one of these letters
    - \{1,2}’ repeated between 1 and two times.
    - ‘.’ followed by period (escaped char.)
    - ‘[a-zA-Z]+’ then one or more upper or lowercase letters
    - ‘$” at then end of the string (nothing after)
    */

  /*
   * Do not remove the return statement
   */
  return re;
}
