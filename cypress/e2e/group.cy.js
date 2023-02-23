import groupPagePO from "../support/group"

describe("Group Testing", () => {
    beforeEach("Login", () => {
        cy.visit("http://localhost:3000/account")
        cy.wait(1000)
    })

    it("Create a group", () => {
        // Create group
        //groupPagePO.createGroup();

        // Validate create successfull
        groupPagePO.openGroupList();
        groupPagePO.validateGroupInfo("CNPM GROUP");

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

    it("Edit group information", () => {
         // Open group list
         groupPagePO.openGroupList();

         // Open sending message screen
         groupPagePO.openSendMessGroup();

         //Edit group information
         groupPagePO.editGroupInfo()

         // Validate edit successfull
         cy.go("back")
         groupPagePO.validateGroupInfo("CNPM.1")
    })
})