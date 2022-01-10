const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFwriter = require('./PDFwriter');

const leitor = new Reader();
const escritor = new Writer();

async function main() {
	let dados = await leitor.Read("./users.csv");
	dados = Processor.Process(dados);

	const users = new Table(dados);

	const html = await HtmlParser.Parse(users);

	PDFwriter.WritePDF("PrimeiroPDF.pdf", html);
}

main();