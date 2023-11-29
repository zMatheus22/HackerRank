// Desafio disponível em https://www.hackerrank.com/challenges/js10-loops

function vowelsAndConsonants(s) {
  const vowel = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (s[i] == vowel[j]) {
        console.log(s[i]);
      }
    }
  }

  for (let k = 0; k < s.length; k++) {
    if (!vowel.includes(s[k])) {
      console.log(s[k]);
    }
  }
}
