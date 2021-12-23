// Cadeia de prototipos
Object.prototype.attr0 = '0'; // Não faça isso em casa;
const avo = {attr1: 'A'};
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'};
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.attr1);
console.log(filho.attr0); // Ele vai subindo na cadeia de prototipos até achar
console.log(filho.attr2);
console.log(filho.attr3); // Pega o primeiro attr3

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerar(delta) {
		if (this.velAtual + delta <= this.velMax){
			this.velAtual += delta;
		} else {
			this.velAtual = velMax;
		}
	},
	status(){
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
	}
}

const ferrari = {
	model: 'F40',
	velMax: 324 // Shadowing
};

const volvo = {
	model: 'V40',
	status(){
		return `${this.model}: ${super.status()}`
	} 
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(300);
console.log(ferrari.status());