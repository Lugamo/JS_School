// Create a function which reverses an array and print all items in the console

// Every element in the normal array is put at the beginning of the second array
function reverseArray(array) {
  const rArray = [];
  array.forEach((element) => {
    rArray.unshift(element);
  });
  return rArray;
}
const normalArray = [0, 1, 2];
const myArray2 = reverseArray(normalArray);
console.log(`Normal Array [${normalArray}] - reverse Array [${myArray2}]`);
