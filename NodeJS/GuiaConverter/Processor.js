class Processor{

	static Process(data) {
		const a = data.split('\r\n');
		const rows = [];
		a.forEach(row => rows.push(row.split(',')));

		return rows;
	}

}

module.exports = Processor;