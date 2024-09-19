const arr1 = [1,2];
const arr2 = [3,4];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
