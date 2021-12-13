let n1 = 1;
let n2 = 2;

n1++;
console.log(n1);
--n1;
console.log(n1);

console.log(++n1 === n2--); // True
console.log(n1 === n2); // False
console.log(n1, n2);