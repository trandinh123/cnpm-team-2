import userInfoPO from "./PageObject/locators/userInfoLocators"
import userInfo from "../fixtures/userInfo.json"
class userInfoPage {
    addFriends() {
        cy.get(userInfoPO.addFrBtn).click()
        cy.get(userInfoPO.userNameInput).type(userInfo.userEmail)
        cy.wait(1000)
        cy.get(userInfoPO.primaryBtn).click()
        cy.reload()
    }

    validateAddFrSuccess() {

    }

    openSettingScreen() {
        cy.get(userInfoPO.settingIcon).click()
        cy.get(userInfoPO.userInfoBtn).click()
        cy.get(userInfoPO.updateBtn).click()
    }

    editUserInfo(userName) {
        const userValues = userInfo[userName]
        cy.get(userInfoPO.nameInput).clear().type(userValues.name)
        cy.get(userInfoPO.genderOption).first().click()
        cy.get(userInfoPO.submitBtn).click()
    }

    validateEditInfoSuccessfull(userName) {
        const userValues = userInfo[userName]
        cy.get(userInfoPO.settingIcon).click()
        cy.get(userInfoPO.userInfoBtn).click()
        cy.get(userInfoPO.userName).should('have.text', userValues.name)
        cy.get(userInfoPO.userGender).should('have.text', userValues.gender)
    }
}

const userInfoPagePO = new userInfoPage()
export default userInfoPagePO