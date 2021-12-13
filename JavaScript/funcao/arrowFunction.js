let dobro = function (a) {
	return a * 2;
}

dobro = (a) => {
	return a * 2;
}

dobro = a => a * 2; // Return implicito
console.log(dobro(Math.PI))

let ola = function () {
	return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // Possui um parametro
console.log(ola());