import { Selector } from "testcafe";

class CheckoutPage {
    constructor() {
        this.inputFirstName = Selector('#first-name')
        this.inputLastName = Selector('#last-name')
        this.inputPostalCode = Selector('postal-code')

        this.buttonCancel = Selector('#cancel')
        this.buttonContinue = Selector('#continue')

        this.errorMessage = Selector('h3').withAttribute('data-test', 'error')
    }
}
export default CheckoutPage