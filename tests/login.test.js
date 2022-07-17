import Data from "../page_objects/components/data";
import LoginData from "../page_objects/components/loginData";
import InventoryPage from "../page_objects/pages/inventory-page";
import LoginPage from "../page_objects/pages/login-page";

const data = new Data()
const loginPage = new LoginPage()
const loginData = new LoginData()
const inventoryPage = new InventoryPage()

fixture`As a User, I can login to Sauce Labs`.page(data.url)

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check username placeholder text', async t => {
        await t
            .expect(loginPage.placeholderUsername.getAttribute("placeholder")).contains('Username')
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check password placeholder text', async t => {
        await t
            .expect(loginPage.placeholderPassword.getAttribute("placeholder")).contains('Password')
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check username input exists', async t => {
        await t
            .expect(loginPage.inputUsername.exists).ok()
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check password input exists', async t => {
        await t
            .expect(loginPage.inputPassword.exists).ok()
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check login button exists', async t => {
        await t
            .expect(loginPage.buttonLogin.exists).ok()
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check login button text', async t => {
        await t
            .expect(loginPage.buttonLogin.getAttribute('value')).contains('Login')
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check swaglabs title icon exists', async t => {
        await t
            .expect(loginPage.loginLogo.exists).ok()
    })

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Check swaglabs login icon exists', async t => {
        await t
            .expect(loginPage.loginPageTitle.exists).ok()
    })

loginData.testcases.forEach(testData => {
    test
        .meta({
            heavyFlow: false,
            testCaseType: 'negative',
            regression: true,
            isDeprecated: false
        })
        (testData.testTitle, async t => {
            switch (testData.value) {
                case "No Username":
                    await t
                        .typeText(loginPage.inputPassword, "Password")
                        .click(loginPage.buttonLogin)
                        .expect(loginPage.errorMessage.innerText).contains(testData.errorMessage)
                    break;

                case "No Password":
                    await t
                        .typeText(loginPage.inputUsername, "Username")
                        .click(loginPage.buttonLogin)
                        .expect(loginPage.errorMessage.innerText).contains(testData.errorMessage)
                    break;

                case "Invalid Username or Password":
                    await t
                        .typeText(loginPage.inputUsername, "Username")
                        .typeText(loginPage.inputPassword, "Password")
                        .click(loginPage.buttonLogin)
                        .expect(loginPage.errorMessage.innerText).contains(testData.errorMessage)
                    break;

                case "Locked User":
                    await t
                        .typeText(loginPage.inputUsername, "locked_out_user")
                        .typeText(loginPage.inputPassword, "secret_sauce")
                        .click(loginPage.buttonLogin)
                        .expect(loginPage.errorMessage.innerText).contains(testData.errorMessage)
                    break;
            }
        })
})

test
    .meta({
        heavyFlow: false,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Close error message', async t => {
        await t
            .typeText(loginPage.inputPassword, "Password")
            .click(loginPage.buttonLogin)
            .click(loginPage.buttonCloseErrorMessage)
            .expect(loginPage.errorMessage.exists).notOk()
    })


test
    .meta({
        heavyFlow: true,
        testCaseType: 'positive',
        regression: true,
        isDeprecated: false
    })
    ('Verify login using valid username and password', async t => {
        await loginPage.loginToApp(data.standardUser, data.password)
        await t.expect(inventoryPage.appLogo.exists).ok()
    })