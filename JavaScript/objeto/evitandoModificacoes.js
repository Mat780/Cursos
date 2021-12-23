// Object.preventExtensions
const product = Object.preventExtensions({
	name: 'Qualquer coisa', price: 10.25, tag: 'Promoção'
});

console.log('Extensivel:', Object.isExtensible(product));

product.name = 'Borracha';
product.desc = 'Borracha escolar branca';
delete product.tag;
console.log(product);

// Object.seal

const pessoa = {name: 'Julian', age: 36};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.lastName = 'Silva';
delete pessoa.name;
pessoa.age = 48;
console.log(pessoa);