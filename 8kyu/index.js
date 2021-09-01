/*
https://www.codewars.com/kata/55eea63119278d571d00006a
Hey awesome programmer!
You've got much data to manage and of course you use zero-based and non-negative ID's 
to make each data item unique!
Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, 
but you don't have to find or remove them!
*/

function nextId(ids) {
  //   Iterate the array
      for (let i = 0; i <= ids.length; i++) {
  //       Use the i's incrementing number during each iteration to return non exsistent number from the array argument. That should be same as unused id
          if (ids.indexOf(i) === - 1) {
              return i;
          }
      }
  }
  
  nextId([0,1,2,3,4,5,6,7,8,9,10])
  // 11