const sequence = {
	_val1: 1, // Convenção q é uma variavel privada
	get value() { return this._val1++; },
	set value(val) { 
		if(this._val1 < val) {
			this._val1 = val;
		}
	}
}

console.log(sequence.value, sequence.value);
sequence.value = 1000;
console.log(sequence.value, sequence.value);
sequence.value = 900;
console.log(sequence.value, sequence.value);