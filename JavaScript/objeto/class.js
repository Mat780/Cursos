class lancamento {
	// Função construtora
	constructor(name = 'Generico', valor = 0){
		this.name = name;
		this.valor = valor;
	}

}

class CicloFinanceiro{
	constructor(mes, ano){
		this.mes = mes;
		this.ano = ano;
		this.lancamentos = [];
	}

	addLancamento(...lancamentos){
		lancamentos.forEach(l => this.lancamentos.push(l));
	}

	sumario(){
		let valorConsolidado = 0;

		this.lancamentos.forEach(l => {
			valorConsolidado += l.valor;
		});

		return valorConsolidado;
	}
}

const salario = new lancamento('Salario', 45000);
const contaDeLuz = new lancamento('Luz', -220);
const contas = new CicloFinanceiro(6, 2018);
contas.addLancamento(salario, contaDeLuz);

console.log(contas);
console.log(contas.sumario());