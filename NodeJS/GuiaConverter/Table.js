class Table{

	constructor(array){
		this.header = array[0];
		array.shift();
		this.rows = array;
	}

	get RowCount(){
		return this.rows.length;
	}

	get CollumnCount(){
		return this.header.length;
	}

}

module.exports = Table;