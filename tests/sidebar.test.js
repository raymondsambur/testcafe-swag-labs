import { ClientFunction } from "testcafe";
import Data from "../page_objects/components/data";
import InventoryData from "../page_objects/components/inventory";
import CheckoutFinishPage from "../page_objects/pages/checkout-finish-page";
import InventoryPage from "../page_objects/pages/inventory-page";
import LoginPage from "../page_objects/pages/login-page";

const data = new Data()
const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const inventoryData = new InventoryData()
const checkoutFinishPage = new CheckoutFinishPage()
const getURL = ClientFunction(() => window.location.href)

fixture`As a User, I can check side bar menu`.page(data.url)

test
    .meta({
        heavyFlow: true,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check burger menu list', async t => {
        await loginPage.loginToApp(data.standardUser, data.password)
        await t
            .click(inventoryPage.buttonBurgerMenu)
            .expect(inventoryPage.buttonAllItems.innerText).contains(inventoryData.menu.allItems)
            .expect(inventoryPage.buttonAbout.innerText).contains(inventoryData.menu.about)
            .expect(inventoryPage.buttonLogout.innerText).contains(inventoryData.menu.logout)
            .expect(inventoryPage.buttonResetAppState.innerText).contains(inventoryData.menu.resetAppState)
    })

test
    .meta({
        heavyFlow: true,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Verify redirect to all items page', async t => {
        await loginPage.loginToApp(data.standardUser, data.password)
        await t
            .click(inventoryPage.titleItemBackpack)
            .click(inventoryPage.buttonBurgerMenu)
            .click(inventoryPage.buttonAllItems)
            .expect(inventoryPage.titleItemBackpack.exists).ok()
            .expect(inventoryPage.titleItemBikeLight.exists).ok()
            .expect(inventoryPage.buttonAddCartBoltTShirt.exists).ok()
            .expect(inventoryPage.buttonAddCartFleeceJacket.exists).ok()
            .expect(inventoryPage.titleItemOnesie.exists).ok()
            .expect(inventoryPage.titleItemTShirtRed.exists).ok()
    })

test
    .meta({
        heavyFlow: true,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Verify redirect to about page', async t => {
        await loginPage.loginToApp(data.standardUser, data.password)
        await t
            .click(inventoryPage.buttonAbout)
        let url = await getURL
        await t.
            expect(url).contains("saucelabs.com")
    })