import messagePO from "./PageObject/locators/messageLocators";
import message from "../fixtures/message.json"
class messagePage {
    sendingMessage() {
            // Get message data
            const messageValues = message["messageList"]

            cy.get(messagePO.contactIcon).click();

            // Validate having at least a friend
            cy.get(`${messagePO.frList} div`).should('have.length.at.least',2)

            // Open sending message screen
            cy.get(`${messagePO.frList} div`).eq(1).click()
            cy.wait(3000)

            // Sending message 
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

const messagePagePO = new messagePage()
export default messagePagePO;
