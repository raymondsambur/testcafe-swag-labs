import Data from "../page_objects/components/data";
import InventoryPage from "../page_objects/pages/inventory-page";
import LoginPage from "../page_objects/pages/login-page";

const data = new Data()
const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

fixture`As a User, I can login to Sauce Labs`.page(data.url)

test
    .meta({
        heavyFlow: true,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false

    })
    ('login using standard user', async t => {
        await loginPage.loginToApp(data.standardUser, data.password)
        await t.expect(inventoryPage.appLogo.exists).ok()
    })