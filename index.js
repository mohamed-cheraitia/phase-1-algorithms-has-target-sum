// function hasTargetSum(array, target) {
//   arrayNew=[];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   arrayNew.push(element);
//   for(let j= index+1; j< array.length; j++){
//     const element1 = array[j];
//     arrayNew.push(element1);
// if(element + element1 == target){
// return true

// }
//   }
// }
//   return false;
//   return arrayNew;}
function hasTargetSum(array, target) {
  return array.map((element, index) => 
    array.slice(index + 1).find(element1 => element + element1 === target)
  ).some(foundElement => foundElement !== undefined);
}

  // Write your algorithm here







/* 
  Write the Big O time complexity of your function here
  for the map its o(n)
  for find its  itearat  throught the array so and try to find elemnts so its (n-1)+(n-2) 
  and some itearat throught the elements finded so its o(n)
*/

/* 
  Add your pseudocode here
  //first itreat over the  array 
  find a pair that adds up to the target
  Check if the sum of the current element and
   the element from the inner loop equals the target
   If a pair is found, return true else return false 
*/
//w



/*
  Add written explanation of your solution here
  Use the map function to iterate over each element in the array
  in each itreation we need to get the elemnt and the index and creat a new array with slice 
  we use find to find in the new array elemnt that the result of elmnet1 and elemnt equal to traget
  using some so its can go throught the array and that we found at leat one pair and the some equal to target 
  and return true else false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;