const a = 1;
const b = 2;
const c = 3;

const obj = {a: a, b: b, c: c};
const obj2 = {a, b, c};
console.log(obj, obj2);

const nameAttr = 'Nota';
const valueAttr = 7.87;

const obj3 = {};
obj3[nameAttr] = valueAttr;
console.log(obj3);

const obj4 = {[nameAttr]: valueAttr};
console.log(obj4);

const obj5 = {
	fun: function() {
		// ...
	},

	fun2() {
		// ...
	}
};

console.log(obj5);