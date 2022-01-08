class Filme {

	constructor(){
		this.title = "";
		this.year = 2000;
		this.genero = "";
		this.director = "";
		this.actors = [];
		this.duration = 0;
	}

	// Metodos com maiusculos
	Reproduzir() {
		console.log("Reproduzindo...");
	}

	Pausar(){
		console.log("Pausado || ");
	}

	Avancar(){
		console.log("Avancar ---->");
	}

	Fechar(){
		console.log("Fechar X");
	}

}