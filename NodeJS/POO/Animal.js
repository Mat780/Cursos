class Animal {
	constructor(name, age, price){
		this.name = name;
		this.age = age;
		this.price = price;
	}

	StockCheck() {
		return 10;
	}

	MetodoQualquer() {
		console.log("Esse método faz parte da classe mãe");
	}
}

class Dog extends Animal {

	constructor(name, age, price, race, weight){
		super(name, age, price);
		this.race = race;
		this.weight = weight;
	}

	Latir(){
		console.log("Rolf! Rolf!");
	}

	StockCheck() {
		console.log("Na loja temos 8 doguinhos");
	}

	MetodoQualquer() {
		console.log("Aqui é uma classe dog");
		super.MetodoQualquer();
		console.log("Aqui vem as funcionalidades");
	}
}

class Cat extends Animal {

}

const dog = new Dog("Dogão", 5, "R$10", "Husky", 50);
dog.StockCheck();
dog.Latir();
dog.MetodoQualquer();

console.log(dog.name);
console.log(dog.race);