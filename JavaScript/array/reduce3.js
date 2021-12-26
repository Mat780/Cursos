Array.prototype.reduce2 = function (callback, valueInitial) {
	const indexInitial = valueInitial ? 0 : 1
	let accumulator = valueInitial || this[0];
	for (let i = valueInitial ? 0 : 1 ; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this);
	}

	return accumulator;
}

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 10));