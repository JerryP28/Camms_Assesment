import { Selector, t } from "testcafe";

class LoginPage {
    constructor() {
        this.userName = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.signInButton = Selector('#login-button');

    }

    async logninToSite(username, passwords) {
        await t
            //Enter Username 
            .typeText(this.userName, username, { paste: true })

            //Enter Password 
            .typeText(this.passwordInput, passwords, { paste: true })

            //Click LogIn Button 
            .click(this.signInButton)
    }
}
export default new LoginPage