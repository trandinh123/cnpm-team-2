import groupLocatoc from "./PageObject/locators/groupLocators"
import message from "../fixtures/message.json"
import messagePO from "./PageObject/locators/messageLocators"

class groupPage {
    openGroupList() {
        cy.get(messagePO.contactIcon).click();
        cy.get(groupLocatoc.groupIconBtn).click()
    }

    openSendMessGroup() {
        cy.get(groupLocatoc.groupBox).first().find(groupLocatoc.actionBtn).eq(1).click()
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

    createGroup() {
        cy.get(groupLocatoc.createGroup).click();
        cy.get(groupLocatoc.nameInput).type("CNPM GROUP")
        for(let i=0; i<=2; i++) {
            cy.get(groupLocatoc.formCheckbox).eq(i).click()
        }
        cy.get(groupLocatoc.createBtn).click()
        
    }

    validateGroupInfo(groupName) {
        cy.get(groupLocatoc.groupBox).get('div').eq(1).get('h4').eq(1).should('contains.text', `${groupName}(4 thành viên`)
    }

    editGroupInfo() {
        cy.get(groupLocatoc.settingBtn).click()
        cy.get(groupLocatoc.groupNameInput).clear().type("CNPM.1")
        cy.get(groupLocatoc.saveBtn).click()
    }

}

const groupPagePO = new groupPage();
export default groupPagePO;