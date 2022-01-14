const app = require('../src/app')
const supertest = require('supertest');
const request = supertest(app);

test("A aplicação deve responder na porta 3131", () => {

	return request.get("/").then(res => expect(res.statusCode).toEqual(200) );

	// try{
	// 	const res = await request.get("/");
	// 	expect(res.statusCode).toEqual(200);
	// } catch (err){
	// 	console.log(err);
	// }

});

test('Deve retornar azul como cor favorita do Matheus', () => {

	return request.get("/cor/Matheus").then(res =>{ 
		expect(res.body.cor).toEqual('Azul');
		expect(res.statusCode).toEqual(200);
		expect(res.body.color).toEqual('Blue');
	})

})