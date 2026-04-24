import { Page } from "@playwright/test";
import locators from "../locator/locators.json";

export default class SpecialHotPage{


    constructor(public page: Page) { }

    async addFirstProductToTheCart() { 
        await this.page.hover(locators.specialHotPage.productImage, {
            strict: false
        });
        await this.page.locator(locators.specialHotPage.addToCartButton)
            .nth(0).click();
    }
    async isToastVisible() { 
        // await this.page.waitFor
        const toast = this.page.locator(locators.specialHotPage.viewCartToast);
        await toast.waitFor({state:"visible"})
        return toast;
    }
}
