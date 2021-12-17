const biYear = (year) => {
	if(year <= 0) return false
	if(year % 400 === 0) return true
	if(year % 100 === 0) return false
	if(year % 4 === 0) return true
	else return false
}

console.log(biYear(4));
console.log(biYear(100));
console.log(biYear(400));
console.log(biYear(800));
console.log(biYear(15));
console.log(biYear(2021));
console.log(biYear(2024));