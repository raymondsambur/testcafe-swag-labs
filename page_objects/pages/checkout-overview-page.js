import { Selector } from "testcafe";

class CheckoutOverviewPage {
    constructor() {
        this.labelItemTotal = Selector('.summary_subtotal_label')
        this.labelTax = Selector('.summary_tax_label')
        this.labelTotalPrice = Selector('.summary_total_label')

        this.buttonCancel = Selector('#cancel')
        this.buttonFinish = Selector('#finish')
    }
}
export default CheckoutOverviewPage