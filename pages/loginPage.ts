import { Page } from "@playwright/test";
import locators from "../locator/locators.json";
export default class LoginPage {

    constructor(public page: Page) { }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(emailaddress: string) {
        await this.page.locator(locators.loginPage.email).fill(emailaddress);
    }

    async enterLoginPassword(password: string) {
        await this.page.locator(locators.loginPage.password)
            .fill(password);
    }

    async clickLoginBtn() {
        await Promise.all([
            //this.page.waitForNavigation()
            this.page.waitForTimeout,
            this.page.click(locators.loginPage.loginButton)
        ])
    }
}
