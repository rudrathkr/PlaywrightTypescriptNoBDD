import { test } from "@playwright/test";
import locators from "../locator/locators.json";


test("handling dropdown", async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption(locators.dropdownTest.singleSelect, {
        // label: "Tuesday"
        // value: "Friday"
        index: 5
    })
    await page.waitForTimeout(3000);

    await page.selectOption(locators.dropdownTest.multiSelect, [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
})

test.only("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");
    // await page.waitForTimeout(3000)

    async function selectCountry(countryName) {
        await page.click(locators.dropdownTest.countryDropdown);
        await page.locator(locators.dropdownTest.countryResults)
            .locator(locators.dropdownTest.countryOption, {
                hasText: countryName
            }).click();
    }
})
