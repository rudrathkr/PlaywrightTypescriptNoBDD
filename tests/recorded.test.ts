import { test, expect } from '@playwright/test';
import locators from "../locator/locators.json";

test('test', async ({ page }) => {

    // Go to https://ecommerce-playground.lambdatest.io/
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    // Click a:has-text("Login")
    await page.hover(locators.recordedTest.myAccountMenu)

    await page.locator(locators.recordedTest.loginLink).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    // Click [placeholder="E-Mail Address"]
    await page.locator(locators.recordedTest.emailInput).click();

    // Fill [placeholder="E-Mail Address"]
    await page.locator(locators.recordedTest.emailInput).fill('rudra@gmail.com');

    // Press Tab
    await page.locator(locators.recordedTest.emailInput).press('Tab');

    // Fill [placeholder="Password"]
    await page.locator(locators.recordedTest.passwordInput).fill('Pass123$');

    // Click input:has-text("Login")
    await page.locator(locators.recordedTest.loginButton).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    // Click text=Edit your account information
    await page.locator(locators.recordedTest.editAccountInfo).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');

    // Click [placeholder="First Name"]
    await page.locator(locators.recordedTest.firstNameInput).click();

    // Fill [placeholder="First Name"]
    await page.locator(locators.recordedTest.firstNameInput).fill('rudra');

    // Click text=Continue
    await page.locator(locators.recordedTest.continueButton).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    // Click span:has-text("Logout")
    await page.hover(locators.recordedTest.myAccountMenu)

    await page.locator(locators.recordedTest.logoutLink).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

});
