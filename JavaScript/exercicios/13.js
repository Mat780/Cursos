function weekDay(day){
	switch(day){
		case 1: return false;
		case 2: return true;
		case 3: return true;
		case 4: return true;
		case 5: return true;
		case 6: return true;
		case 7: return false;
		default: console.log('Invalid Day!'); return false;
	}
}

console.log(weekDay(1));
console.log(weekDay(2));
console.log(weekDay(3));
console.log(weekDay(4));
console.log(weekDay(5));
console.log(weekDay(6));
console.log(weekDay(7));
console.log(weekDay(8));
console.log(weekDay(0));