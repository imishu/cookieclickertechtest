import {test, expect} from "@playwright/test";
import {CookieClickerDashboardPage} from "../pages/CookieClickerDashboardPage";

test.beforeEach(async({page})=>{
    await page.goto(process.env.URL, {timeout: 5000});
});

test.afterEach(async({page})=>{
    await page.close();
});

test.describe('Cookie Clicker Dashboard Tests', () => {
    test('Verify that the Cookie Clicker dashboard contents load sucessfully', async({page}) => {
        const cookieClickerDashboardPage = new CookieClickerDashboardPage(page);
        await cookieClickerDashboardPage.assertPageContent();
    });
    
    test('Verify that player cannot start a game without players name', async({page})=>{
        const cookieClickerDashboardPage = new CookieClickerDashboardPage(page);
        await cookieClickerDashboardPage.startButton.click();
        
        // Actual assertion should be an appearance of a valid error message (but below is a temporary work around)
        await expect(page).toHaveURL(process.env.URL)
    });

    test('Verify that player can create a game profile by adding name', async({page})=>{
        const names = require("random-names-generator");
        var randPlayer = names.random();
        const cookieClickerDashboardPage = new CookieClickerDashboardPage(page);

        await cookieClickerDashboardPage.playersNameFieldTextBox.fill(randPlayer);
        await cookieClickerDashboardPage.startButton.click({timeout: 5000});
        await expect(page).toHaveURL(`${process.env.URL}game/${randPlayer.replace(" ", "%20")}`)
    });
})
