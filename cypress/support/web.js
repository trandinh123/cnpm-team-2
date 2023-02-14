import webPO from "./PageObject/locators/webLocators"
import web from "../fixtures/web.json"
class webPage {
    addFriends() {
        cy.get(webPO.addFrBtn).click()
        cy.get(webPO.userNameInput).type(web.userEmail)
        cy.wait(1000)
        cy.get(webPO.primaryBtn).click()
        cy.reload()
    }

    validateAddFrSuccess() {

    }

    openSettingScreen() {
        cy.get(webPO.settingIcon).click()
        cy.get(webPO.userInfoBtn).click()
        cy.get(webPO.updateBtn).click()
    }

    editUserInfo(userName) {
        const userValues = web[userName]
        cy.get(webPO.nameInput).clear().type(userValues.name)
        cy.get(webPO.genderOption).first().click()
        cy.get(webPO.submitBtn).click()
    }

    validateEditInfoSuccessfull(userName) {
        const userValues = web[userName]
        cy.get(webPO.settingIcon).click()
        cy.get(webPO.userInfoBtn).click()
        cy.get(webPO.userName).should('have.text', userValues.name)
        cy.get(webPO.userGender).should('have.text', userValues.gender)
    }
}

const webPagePO = new webPage()
export default webPagePO