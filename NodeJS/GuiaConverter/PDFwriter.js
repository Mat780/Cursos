const pdf = require("html-pdf");

class PDFwriter{

	static WritePDF(filename, html){
		pdf.create(html, {}).toFile(filename, (err) => {});
	}

}

module.exports = PDFwriter;