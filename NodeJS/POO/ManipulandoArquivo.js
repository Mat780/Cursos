class ReadArchive{

	Read(path){
		return "Conteudo do arquivo";
	}

}

class WriteArchive{
	
	Write(archive, content){
		console.log("Conteudo escrito");
	}

}

class CreateArchive{

	Create(name){
		console.log("Arquivo criado!");
	}

}

class DeleteArchive{

	Delete(archive){
		console.log("Deletando arquivo!");
	}

}


class ArchiveManager{
	constructor(name){
		this.archive = name;
	}

	ReadArchive(){
		console.log("Lendo...");
	}

	WriteArchive(data){
		console.log(`Escrevendo... ${data}`);
	}

	CreateArchive(name){
		console.log(`Criando arquivo: ${name}`);
	}

	DeleteArchive(name){
		console.log(`Deletando arquivo: ${name}`);
	}
}

class ArchiveManager2 {

	constructor(archive){
		this.archive = archive;
		this.reader = new ReadArchive;
		this.writer = new WriteArchive;
		this.create = new CreateArchive;
		this.delete = new DeleteArchive;
	}

}

const manipulador = new ArchiveManager2("meuarquivo.txt");

console.log(manipulador.reader.Read());
manipulador.writer.Write();
manipulador.create.Create();
manipulador.delete.Delete();