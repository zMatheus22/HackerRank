// Desafio disponível em https://www.hackerrank.com/challenges/js10-throw

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  let verifiedNumber;
  try {
    if (a == 0) {
      throw "Zero Error";
    } else if (a < 0) {
      throw "Negative Error";
    } else {
      verifiedNumber = "YES";
    }
  } catch (err) {
    verifiedNumber = err;
  }
  return verifiedNumber;
}
