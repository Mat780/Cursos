class Filme {

	constructor(title, year, genero, director, actors, duration) {
		this.title = title;
		this.year = year;
		this.genero = genero;
		this.director = director;
		this.actors = actors;
		this.duration = duration;
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

	Linha(){
		console.log("---------------------------------------");
	}

	Ficha(){
		this.Linha()
		console.log(`Titulo: ${this.title}`);
		console.log(`Ano de lançamento: ${this.year}`);
		console.log(`Genero: ${this.genero}`);
		this.Linha()
	}

}

const avengers = new Filme("Avengers", 2014, "Action", "Someone", "2 hours");

avengers.Ficha()

const hulk = new Filme();
const starWars = new Filme();

const batman = new Filme();

batman.title = "Batman o cavaleiro das trevas";
batman.year = 2009;
batman.genero = "Action";

console.log(batman.title);