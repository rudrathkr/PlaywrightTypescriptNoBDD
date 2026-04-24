import { Page } from "@playwright/test";
import locators from "../locator/locators.json";

export default class HomePage {


    constructor(public page: Page) {

    }

    async clickOnSpecialHotMenu() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            
            this.page.click(locators.homePage.specialHotMenu)
        ])
    }
}
