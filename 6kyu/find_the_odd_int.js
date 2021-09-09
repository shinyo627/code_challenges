// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  //   In argument array, find a number that appears odd number of times.
    if(arr.length === 0) return;
    if(arr.length === 1) return arr[0];
    
    const placeholder = {};
    
    arr.forEach(num => { 
      placeholder[num] ? 
        placeholder[num] += 1 :
        placeholder[num] = 1
    })
    
    for (const [key, value] of Object.entries(placeholder)) {
    console.log(`${key}: ${value}`);
      if(value % 2 !== 0) return parseInt(key);
  }
    
    // console.log(placeholder)
  }
  
  findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) //5
  