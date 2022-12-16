const app = require('../src/app')
const supertest = require('supertest');
const request = supertest(app)

const mainUser = {name: "TestUser", email: "TestUserEmail@example", password: "12345"}

beforeAll(() => {
	// Inserir um Usuario temporario no banco
	return request.post("/user")
	.send(mainUser)
	.then(res => {})
	.catch(err => console.error(err))

})

afterAll(() => {
	// Remover o Usuario temporario do banco

	return request.delete(`/user/${mainUser.email}`)
	.then(res => {})
	.catch(err => console.error(err))
	
})

describe("Cadastro de usuário", () => {

	test("Cadastro de usuário com sucesso", () => {

		// Jeito de criar emails infinitos
		const time = Date.now() 
		const email = `${time}@gmail.com`

		const user = {name: "Test", email, password: "123456"}

		return request.post("/user")
		.send(user)
		.then(res => {
			expect(res.statusCode).toEqual(200)
			expect(res.body.email).toEqual(email)

		})
		.catch(err => {
			fail(err)
		})

	})

	test("Deve impedir cadastro de dados vazios", () => {

		const user = {name: "", email: "", password: ""}

		return request.post("/user")
		.send(user)
		.then(res => {
			expect(res.statusCode).toEqual(400)

		})
		.catch(err => {
			fail(err)
		})
	})

	test("Deve impedir cadastro com email já cadastrado", () => {
		const time = Date.now() 
		const email = `${time}@gmail.com`

		const user = {name: "Test", email, password: "123456"}

		return request.post("/user")
		.send(user)
		.then(res => {
			expect(res.statusCode).toEqual(200)
			expect(res.body.email).toEqual(email)

			return request.post("/user")
			.send(user)
			.then(res => {
				expect(res.statusCode).toEqual(400)
				expect(res.body.error).toEqual("Email já cadastrado")

			}).catch (err => {
				fail(err)
			})

		})
		.catch(err => {
			fail(err)
		})
	})

})

describe("Autenticação", () => {
	test("Deve me retornar um token quando logar", () => {

		return request.post("/auth")
		.send({email: mainUser.email, password: mainUser.password})
		.then(res => {
			expect(res.statusCode).toEqual(200)
			expect(res.body.token).toBeDefined()
		})
		.catch(err => fail(err))

	})

	test("Deve impedir que um usuário não cadastrado faça logIn", () => {
		
		return request.post("/auth")
		.send({email: "failedTestEmail@example.com", password: "kskkdasdsfadwq"})
		.then(res => {
			expect(res.statusCode).toEqual(403)
			expect(res.body.errors.email).toEqual("Email não cadastrado")
			expect(res.body.token).toBeUndefined()
		})
		.catch(err => console.error(err))

	})

	test("Deve impedir que um usuário faça logIn com a senha errada", () => {
		
		return request.post("/auth")
		.send({email: mainUser.email, password: "ErroProposital"})
		.then(res => {
			expect(res.statusCode).toEqual(403)
			expect(res.body.errors.password).toEqual("Senha errada")
			expect(res.body.token).toBeUndefined()
		})
		.catch(err => console.error(err))
	})
})