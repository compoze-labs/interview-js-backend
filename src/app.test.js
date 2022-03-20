const app = require("./app.js")
const supertest = require("supertest")

describe("the backend", () => {
    const requestWithSupertest = supertest(app)
    
    it("says hello world!", async () => {
        const res = await requestWithSupertest.get("/")
        expect(res.status).toBe(200)
        expect(res.body).toBe("Hello World!")
    })
})