import { chromium, test, expect } from "@playwright/test"
import locators from "../locator/locators.json";

const ltUser = process.env.LT_USERNAME;
const ltAccessKey = process.env.LT_ACCESS_KEY;

// LambdaTest capabilities
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        name: "Playwright Test",
        user: ltUser,
        accessKey: ltAccessKey,
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};
test("Login test demo", async ({ }, testInfo) => {
    const isLambdaTestProject = testInfo.project.name.includes("lambdatest");

    if (isLambdaTestProject && (!ltUser || !ltAccessKey)) {
        throw new Error(
            "Missing LambdaTest credentials. Set LT_USERNAME and LT_ACCESS_KEY before running LambdaTest projects."
        );
    }

    const browser = isLambdaTestProject
        ? await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
    ${encodeURIComponent(JSON.stringify(capabilities))}`)
        : await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover(locators.loginTest.myAccountMenu)
    // await page.click("text=Login")
    await page.click(locators.loginTest.loginLink)
    await page.fill(locators.loginTest.emailInput, "rudra@gmail.com")
    await page.fill(locators.loginTest.passwordInput, "Pass123$")
    await page.click(locators.loginTest.loginButton);

    await page.close();
    await context.close();
    await browser.close();

    // await page.waitForTimeout(5000);

    // const newContext = await browser.newContext()

    // const newPage = await newContext.newPage();
    // await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    // await newPage.waitForTimeout(5000);

})
