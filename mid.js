const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const left = 0;
const rigth = array.length - 1;
const mid = Math.round((rigth - left) / 2) + left;

console.log(array[mid]);