// Desafio disponível em https://www.hackerrank.com/challenges/js10-arrays

/**
 *   Return the second largest number in the array.
 *   +param {Number[]} nums - An array of numbers.
 *   -return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let largest;
  let secondLargest;

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      largest = nums[i];
      secondLargest = nums[i];
    } else if (largest < nums[i]) {
      secondLargest = largest;
      largest = nums[i];
    } else if (
      largest > secondLargest &&
      secondLargest < nums[i] &&
      largest != nums[i]
    ) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}
