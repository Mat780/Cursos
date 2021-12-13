class Pessoa{
	constructor(name){
		this.name = name;
	}

	falar(){
		console.log(`Meu nome é ${this.name}`);
	}
}

const p1 = new Pessoa('João');
p1.falar();


const criarPessoa = name => {
	return{
		falar: () => console.log(`Meu nome é ${name}`)
	}
}

const p2 = criarPessoa('Ana');
p2.falar();


function construct(personName) {
	this.name = personName;
	this.talk = () => console.log(`Meu nome é ${this.name}`);
}

const p3 = new construct('Matheus');
p3.talk();
p3.name = 'Felipe';
p3.talk();

