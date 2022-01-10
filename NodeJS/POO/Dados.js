class Dices{

	constructor(faces, name){
		this.faces = faces;
		this.name = name;
	}

	Rolar(){
		console.log(`Resultado do ${this.name}: ${this.GetRandomInt(1, this.faces)}`)
	}

	GetRandomInt(mini, maxi){
		const min = Math.ceil(mini);
		const max = Math.floor(maxi);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

const d6 = new Dices(6, 'D6');
const d8 = new Dices(8, 'D8');
const d10 = new Dices(10, 'D10');
const d12 = new Dices(12, 'D12');
const d20 = new Dices(20, 'D20');
const d100 = new Dices(100, 'D100');

d100.Rolar();
d20.Rolar();