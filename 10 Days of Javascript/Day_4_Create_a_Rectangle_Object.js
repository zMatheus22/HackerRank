// Desafio disponível em https://www.hackerrank.com/challenges/js10-objects

function Rectangle(a, b) {
  const length = a;
  const width = b;
  const perimeter = 2 * (length + width);
  const area = length * width;

  const object = {
    length,
    width,
    perimeter,
    area,
  };

  return object;
}
