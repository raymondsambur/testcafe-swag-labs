import { Role } from "testcafe";
import InventoryPage from "../pages/inventory-page";
import LoginPage from "../pages/login-page";

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

class Roles {
    constructor() {
        this.username = ""
        this.password = ""
    }

    loginApp = Role(`${process.env.URL}`, async t => {
        await t
            .typeText(loginPage.inputUsername, this.username)
            .typeText(loginPage.inputPassword, this.password)
            .click(loginPage.buttonLogin)
            .expect(inventoryPage.appLogo.exists).ok()
    })
}
export default Roles