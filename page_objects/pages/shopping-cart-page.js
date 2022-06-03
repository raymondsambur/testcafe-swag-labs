import { Selector } from 'testcafe'

class ShoppingCartPage {
    constructor() {
        this.buttonRemoveBackpack = Selector('remove-sauce-labs-backpack')
        this.buttonRemoveBikeLight = Selector('remove-sauce-labs-bike-light')
        this.buttonRemoveBoltTShirt = Selector('remove-sauce-labs-bolt-t-shirt')
        this.buttonRemoveFleeceJacket = Selector('remove-sauce-labs-fleece-jacket')
        this.buttonRemoveTShirtRed = Selector('remove-test.allthethings()-t-shirt-(red)')
        this.buttonRemoveOnesie = Selector('remove-sauce-labs-onesie')

        this.buttonContinueShopping = Selector('#continue-shopping')
        this.buttonCheckout = Selector('#checkout')
    }
}
export default ShoppingCartPage