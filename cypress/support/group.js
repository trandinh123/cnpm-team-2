import groupLocatoc from "./PageObject/locators/groupLocators"
import message from "../fixtures/message.json"
import messagePO from "./PageObject/locators/messageLocators"

class groupPage {
    openGroupList() {
        cy.get(messagePO.contactIcon).click();
        cy.get(groupLocatoc.groupIconBtn).click()
    }

    openSendMessGroup() {
        cy.get(groupLocatoc.groupBox).first().find(groupLocatoc.actionBtn).click()
        cy.wait(5000)
    }
    
    sendingMessGroup() {
        // Get message data
        const messageValues = message["messageList"]

        cy.get(messagePO.messageInput).type(`${messageValues.message1}{enter}`)
        cy.wait(1000)
        cy.get(messagePO.messageInput).type(`${messageValues.message2}{enter}`)
        cy.wait(1000)
        cy.get(messagePO.messageInput).type(`${messageValues.message3}{enter}`)
        cy.wait(1000)

    }

    validateSendingMessSuccessfull() {
        // Get message data
        const messageValues = message["messageList"]

        cy.get(messagePO.message).last().should('have.text', messageValues.message3)
    }
}

const groupPagePO = new groupPage();
export default groupPagePO;