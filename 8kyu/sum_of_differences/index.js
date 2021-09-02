function sumOfDifferences(arr) {
  if(arr.length === 0 || arr.length === 1) return 0;

//   Sorting the numbers in decending manner to avoid geting negative integer for the output.
 const sorted = arr.sort((a, b) => b - a )

  let output = 0;
  for(let i = 0; i < sorted.length - 1; i++) {
    
    output += sorted[i] - sorted[i + 1]
   
  }
  
  return output
}