// Desafio disponível em https://www.hackerrank.com/challenges/js10-count-objects

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let x_Equal_y = 0;
  objects.forEach((num) => {
    if (num.x == num.y) {
      x_Equal_y += 1;
    }
  });
  return x_Equal_y;
}
