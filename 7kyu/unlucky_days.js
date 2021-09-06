/*
https://www.codewars.com/kata/56eb0be52caf798c630013c0
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year as an integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year){
  //your code here
  let counter = 0;
  
  for (let i =0; i <=11; i++) {
    // new Date(year, i, 13)
    //  condition to check if 
    // every month's 13th is friday. 
    //     day 0(Sunday) - 6(Saturday)
    if(new Date(year, i, 13).getDay() === 5) {
      counter ++
    }
  }
  
  return counter
}

unluckyDays(2819)