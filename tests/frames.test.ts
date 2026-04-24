import { expect, test } from "@playwright/test";
import locators from "../locator/locators.json";

test("Interact with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

    const frame = page.frameLocator(locators.framesTest.outerFrame)
    await frame.locator(locators.framesTest.firstNameInput).fill("Rudra");
    await frame.locator(locators.framesTest.lastNameInput).fill("Thakur");

    const innerFrame = frame.frameLocator(locators.framesTest.innerFrame)
    await innerFrame.locator(locators.framesTest.emailInput).fill("rudra@gmail.com")

    await frame.locator(locators.framesTest.firstNameInput).fill("letcode");

    // const myFrame = page.frame("firstFr")
    // // if (myFrame != null) {
    // //     await myFrame.fill("", "")
    // // }
    // await myFrame?.fill("input[name='fname']", "rudra")
    // await myFrame?.fill("input[name='lname']", "thakur")

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")


    await page.waitForTimeout(3000);





})
