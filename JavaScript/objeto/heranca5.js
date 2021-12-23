console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function(){
	return this[0];
}

console.log([1, 2, 3, 4, 5].first());

Array.prototype.last = function(){
	return this[this.length - 1];
}

Array.prototype.middle = function(){
	let len = this.length;
	if(len % 2 == 0){
		return [this[(len / 2) - 1], this[len / 2]];
	} else {
		return [this[Math.floor(len / 2)]];
	}
}

console.log([1, 2, 3, 4, 5].middle());
console.log([1, 2, 3, 4, 5, 6].middle());
console.log([1, 2, 3, 4, 5, 6, 7].last());