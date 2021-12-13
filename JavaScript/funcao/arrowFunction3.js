let comparaComThis = function(param) {
	console.log(this === param);
}

comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

console.log('Arrow:');

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global);
comparaComThisArrow(module.exports); // Em outras palavras this

comparaComThisArrow = comparaComThisArrow.bind(obj); // Basicamente não tem efeito
comparaComThisArrow(obj);
comparaComThisArrow(module.exports); // Em outras palavras this