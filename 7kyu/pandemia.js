/*
https://www.codewars.com/kata/5e2596a9ad937f002e510435
⚠️ The world is in quarantine! There is a new pandemia that struggles mankind.
Each continent is isolated from each other but infected people have spread before the warning. ⚠️
🗺️ You would be given a map of the world in a type of string:
string s = "01000000X000X011X0X"
'0' : uninfected
'1' : infected
'X' : ocean
⚫ The virus can't spread in the other side of the ocean.
⚫ If one person is infected every person in this continent gets infected too.
⚫ Your task is to find the percentage of human population that got infected in the end.
☑️ Return the percentage % of the total population that got infected.
❗❗ The first and the last continent are not connected!
💡 Example:
 start: map1 = "01000000X000X011X0X"
 end:   map1 = "11111111X000X111X0X"
 total = 15
 infected = 11
 percentage = 100*11/15 = 73.33333333333333
*/
// My answer:
function infected(s) {
  if (!s.includes('1') || !s.includes('0')) return 0;
  const sArr = s.split('X');

  let total = 0;
  let infected = 0;
  sArr.forEach((i) => {
    if (i.includes('1')) {
      infected += i.length;
      total += i.length;
    } else {
      total += i.length;
    }
  });

  return (infected / total) * 100;
}

// Example answer
function infected(s) {
  const continents = s.split('X');
  let total = 0;
  let infected = 0;
  // For of works for iterable array like objects
  for (let continent of continents) {
    total += continent.length;
    if (continent.includes('1')) {
      infected += continent.length;
    }
  }
  if (total === 0) return 0;
  return (infected / total) * 100;
}
