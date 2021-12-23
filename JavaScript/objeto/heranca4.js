function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(obj1.__proto__ === obj2.__proto__);
console.log(obj1.__proto__ === MeuObjeto.prototype);

MeuObjeto.prototype.name = 'Anônimo';
MeuObjeto.prototype.falar = function(){
	console.log(`Bom dia! meu nome é ${this.name}!`);
}

obj1.falar();

obj2.name = 'Rafa';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.name = 'Objeto 3';
obj3.falar();


// Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

