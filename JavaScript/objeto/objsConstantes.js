// Pessoa -> 000 -> {...}
const pessoa = {name: 'João'};
pessoa.name = 'Matheus';
console.log(pessoa);

//       -> 000 -> {...}
//    ---|---
// Pessoa -> 111 -> {...}
//pessoa = {name: 'João'};

// O objeto como um todo fica constante
Object.freeze(pessoa);

pessoa.name = 'Maria';
pessoa.alive = true;
delete pessoa.name;

console.log(pessoa);

const pessoaConstante = Object.freeze({name: 'Jão'});
pessoaConstante.name = 'Maria';
console.log(pessoaConstante);