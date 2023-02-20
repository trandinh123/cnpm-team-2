import messagePagePO from "../support/message"

describe("Sending message Testing", () => {
    beforeEach("Login", () => {
        cy.visit("http://localhost:3000/account")
        cy.wait(1000)
    })

    it("Sending message", () => {
        // Sending message
        messagePagePO.sendingMessage();

        // Validate sending message successfull
        messagePagePO.validateSendingMessSuccessfull();
    })
})