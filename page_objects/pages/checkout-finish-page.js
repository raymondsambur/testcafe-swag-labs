import { Selector } from "testcafe";

class CheckoutFinishPage {
    constructor() {
        this.labelCompleteHeader = Selector('.complete-header')
        this.labelCompleteText = Selector('.complete-text')
        this.imagePonyExpress = Selector('.pony_express')
        this.buttonBackHome = Selector('#back-to-products')
    }
}
export default CheckoutFinishPage