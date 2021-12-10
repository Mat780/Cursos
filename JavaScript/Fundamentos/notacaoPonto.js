console.log(Math.ceil(6.2));
console.log(Math.floor(9.999));

const obj1 = {};
obj1.name = 'Matheus';
obj1['name'] = 'Giovanna';
console.log(obj1.name);

function Obj(name){
	this.name = name;
	this.exec = function(){
		console.log('Exec... ' + this.name);
	}
}

const Obj2 = new Obj('Roney');
const Obj3 = new Obj('Ana');

console.log(Obj2.name);
console.log(Obj3.name);

Obj2.exec();
Obj3.exec();