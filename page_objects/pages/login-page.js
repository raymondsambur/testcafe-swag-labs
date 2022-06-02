import { Selector } from 'testcafe'

class LoginPage {
    constructor() {
        this.loginLogo = Selector('.login_logo')
        this.inputUsername = Selector('#user-name')
        this.inputPassword = Selector('#password')
        this.buttonLogin = Selector('#login-button')

        this.errorMessage = Selector('h3').withAttribute('data-test', 'error')
        this.buttonCloseErrorMessage = Selector('.error-button')
    }
}
export default LoginPage