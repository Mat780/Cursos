function Carro(velocidadeMax = 200, delta = 5){
	// Atributo privado
	let velocidadeAtual = 0;

	// Metodo público
	this.acelerar = () => {
		if(velocidadeAtual + delta <= velocidadeMax){
			velocidadeAtual += delta;
		} else {
			velocidadeAtual = velocidadeMax;
		}
	}

	this.getVelocidade = () => velocidadeAtual;
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidade());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidade());

console.log(typeof Carro);
console.log(typeof ferrari);