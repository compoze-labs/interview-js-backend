const app = require("./app.js")
const supertest = require("supertest")

describe("the backend", () => {
    const requestWithSupertest = supertest(app)
    
    it("accepts a feedback request", async () => {
        const res = await requestWithSupertest
            .post("/feedback")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({
                name: "Bilbo Baggins",
                comments: "Was a hobbit from the Shire."
            }))

        expect(res.status).toBe(201)
    })

    it("rejects a feedback request if name is blank or missing", async () => {
        const res = await requestWithSupertest
            .post("/feedback")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({
                name: "",
                comments: "Was a hobbit from the Shire."
            }))

        expect(res.status).toBe(400)
    })

    it("rejects a feedback request if name is missing", async () => {
        const res = await requestWithSupertest
            .post("/feedback")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({
                comments: "Was a hobbit from the Shire."
            }))

        expect(res.status).toBe(400)
    })

    it("rejects a feedback request if comment is blank", async () => {
        const res = await requestWithSupertest
            .post("/feedback")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({
                name: "Bilbo Baggins",
                comments: ""
            }))

        expect(res.status).toBe(400)
    })

    it("rejects a feedback request if comment is missing", async () => {
        const res = await requestWithSupertest
            .post("/feedback")
            .set("Content-Type", "application/json")
            .send(JSON.stringify({
                name: "Bilbo Baggins"
            }))

        expect(res.status).toBe(400)
    })
})