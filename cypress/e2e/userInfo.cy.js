import userInfoPagePO from "../support/userInfo"
import userInfo from "../fixtures/userInfo.json"
import userInfoPO from "../support/PageObject/locators/userInfoLocators"
describe("App Testing", () => {
    beforeEach("Login", () => {
        cy.visit("http://localhost:3000/account")
        cy.wait(1000)
    })

    it("Add friends positive", () => {
        // Add friends 
        userInfoPagePO.addFriends();

        // Validate add friends successfull

        
    })

    it("Edit User Info", () => {
        // Open edit screen
        userInfoPagePO.openSettingScreen();

        // Edit Infomation
        userInfoPagePO.editUserInfo("editUserInfo");

        // Validate edit info successfull
        cy.reload()
        userInfoPagePO.validateEditInfoSuccessfull("editUserInfo")
    })

    it("Cancel edit User Info", () => {
        // Open edit screen
        userInfoPagePO.openSettingScreen();

        // Cancel dit Infomation
        cy.get(userInfoPO.cancelBtn).click()

        // Validate cancel edit info successfull
        userInfoPagePO.validateEditInfoSuccessfull("editUserInfo")
    })

})