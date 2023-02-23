import callPagePO from "../support/call"

describe("Private call Testing", () => {
    beforeEach("Login", () => {
        cy.visit("http://localhost:3000/account")
        cy.wait(1000)
    })

    it("Calling", () => {
        // Calling
        callPagePO.callFeature();
    })
})