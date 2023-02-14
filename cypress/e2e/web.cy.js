import webPagePO from "../support/web"
import web from "../fixtures/web.json"
import webPO from "../support/PageObject/locators/webLocators"
describe("App Testing", () => {
    beforeEach("Login", () => {
        cy.visit("http://localhost:3000/account")
    })

    it("Add friends positive", () => {
        // Add friends 
        webPagePO.addFriends();

        // Validate add friends successfull

        
    })

    it("Edit User Info", () => {
        // Open edit screen
        webPagePO.openSettingScreen();

        // Edit Infomation
        webPagePO.editUserInfo("editUserInfo");

        // Validate edit info successfull
        cy.reload()
        webPagePO.validateEditInfoSuccessfull("editUserInfo")
    })

    it("Cancel edit User Info", () => {
        // Open edit screen
        webPagePO.openSettingScreen();

        // Cancel dit Infomation
        cy.get(webPO.cancelBtn).click()

        // Validate cancel edit info successfull
        webPagePO.validateEditInfoSuccessfull("editUserInfo")
    })

})