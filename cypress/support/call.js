import messagePO from "./PageObject/locators/messageLocators";
import callPO from "./PageObject/locators/callLocators";

class callPage {
    callFeature() {
        cy.get(messagePO.contactIcon).click();

        // Validate having at least a friend
        cy.get(`${messagePO.frList} div`).should('have.length.at.least',2)

        // Open sending message screen
        cy.get(`${messagePO.frList} div`).eq(1).click()
        cy.wait(3000)

        // Make phone call
        cy.get(callPO.callBtn).click()
        cy.visit('http://localhost:3000/privateCall?fid=63d0033ba534044365b32174&img=https://lh3.googleusercontent.com/a/AEdFTp6rBI7tbYrllOhS8X_8veM0OldJplM01Fga3dX7=s96-c')

    }
}

const callPagePO = new callPage();
export default callPagePO;