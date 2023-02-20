import groupPagePO from "../support/group"

describe("Group Testing", () => {
    beforeEach("Login", () => {
        cy.visit("http://localhost:3000/account")
        cy.wait(1000)
    })

    it("Sending to a group", () => {
        // Open group list
        groupPagePO.openGroupList();

        // Open sending message screen
        groupPagePO.openSendMessGroup();

        // Sending message to group 
        groupPagePO.sendingMessGroup()

        //Validate sending message successfully
        groupPagePO.validateSendingMessSuccessfull()
    })
})