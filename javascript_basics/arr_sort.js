let vals = [1, 20, 3, 80, 10, 2, 5];
// if compare function inside sort() returns negative value then, the returning array 
// will be sorted in decending manner. If positive value then, ascending.

// a - b sorts in ascending for number
// b - a srots in decending for number

vals.sort((a, b) => a - b)

const val2 = [
  {
    name: 'gregg',
    grade: 90,
  },
  {
    name: 'yoseob',
    grade: 30,
  }
]

val2.sort()

// Object examples.
const val2 = [
  {
    name: 'gregg',
    grade: 90,
  },
  {
    name: 'yoseob',
    grade: 30,
  },
   {
    name: 'dareos',
    grade: 60,
  }
]

val2.sort((a, b) => b.grade - a.grade)