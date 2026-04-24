import { Page } from "@playwright/test";
import locators from "../locator/locators.json";
export default class RegisterPage {


    constructor(public page: Page) { }
    

    async enterFirstName(firstname: string) {
        await this.page.locator(locators.registerPage.firstName)
            .type(firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.locator(locators.registerPage.lastName)
            .type(lastname);
    }
    async enterEmail(email: string) {
        await this.page.locator(locators.registerPage.email)
            .type(email);
    }

    async enterTelephone(phone: string) {
        await this.page.locator(locators.registerPage.telephone)
            .type(phone);
    }

    async enterPassword(password: string) {
        await this.page.locator(locators.registerPage.password)
            .type(password);
    }

    async enterConfirmPassword(password: string) {
        await this.page.locator(locators.registerPage.confirmPassword)
            .type(password);
    }


    isSubscribeChecked() {
        return this.page.locator(locators.registerPage.subscribeNo);
    }

    async clickTermandConditon() { 
        await this.page.click(locators.registerPage.agreeCheckbox)
    }

    async clickContinueToRegister() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click(locators.registerPage.continueButton)
        ])
    }

}
