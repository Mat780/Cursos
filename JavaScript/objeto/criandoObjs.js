// Notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function product(name, price, desc){
	this.name = name;
	this.getPriceWithDesc = () => {
		return price * (1 - desc);
	}
}

const p1 = new product('Caneta', 7.99, 0.15);
const p2 = new product('Notebook', 2998.99, 0.25);

console.log(p1.getPriceWithDesc(), p2.getPriceWithDesc());

function createWorker(name, baseSalary, escapes){
	return {
		name,
		baseSalary,
		escapes,
		getSalary(){
			return (baseSalary / 30) * (30 - escapes);
		}
	}
}

const f1 = createWorker('João', 7980, 4);
const f2 = createWorker('Maria', 11400, 1);
console.log(f1.getSalary(), f2.getSalary());

// Object.create
const child = Object.create(null);
child.name = 'Ana';
console.log(child);

const fromJson = JSON.parse('{"Info": "Sou um JSON"}');
console.log(fromJson.Info);
