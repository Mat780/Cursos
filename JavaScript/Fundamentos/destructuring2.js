const [a] = [10];
console.log(a);

//     0   1   2   3    4
const [n1, n2, n3,   , n4 = 0] = [1, 2 , 3, 4];
console.log(n1, n2, n3, n4);

const [, [, note]] = [[, 8, 8], [9, 6, 8]];
console.log(note);