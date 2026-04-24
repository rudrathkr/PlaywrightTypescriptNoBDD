import { expect, test } from "@playwright/test";
import locators from "../locator/locators.json";


test("handling alerts", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);;
        await alert.accept("koushik");
    })
    await page.locator(locators.alertsTest.promptButton).nth(2).click();
    // expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
    expect(page.locator(locators.alertsTest.promptResult)).toContainText("'koushik'");

})

test("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click(locators.alertsTest.launchModalButton)
    await page.click(locators.alertsTest.saveChangesButton)
})
