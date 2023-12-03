// Desafio disponível em https://www.hackerrank.com/challenges/js10-bitwise

function getMaxLessThanK(n, k) {
  let num = 0;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j <= n; j++) {
      let and = i & j;
      if (num < and && and < k) num = and;
    }
  return num;
}
