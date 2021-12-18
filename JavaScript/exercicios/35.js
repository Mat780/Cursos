let v1 = [1, 2, 3, 4, 5];
const v2 = [6, 7, 8, 9, 10];

Array.prototype.push.apply(v1, v2);

console.log(v1);