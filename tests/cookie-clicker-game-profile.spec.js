import {test, expect} from "@playwright/test";
import {CookieClickerDashboardPage} from "../pages/CookieClickerDashboardPage";
import {CookieClickerGameProfilePage} from "../pages/CookieClickerGameProfilePage";

test.beforeEach(async({page})=>{
    await page.goto(process.env.URL);
});

test.afterEach(async({page})=>{
    await page.close();
});

test.describe('Cookie Clicker Game Profile Tests', () => {
    test('Verify that the game profile page shows page contents correctly', async({page}) => {
        const names = require("random-names-generator");
        var randPlayer = names.random();
        const cookieClickerDashboardPage = new CookieClickerDashboardPage(page);
        const cookieClickerGameProfilePage = new CookieClickerGameProfilePage(page);

        await cookieClickerDashboardPage.playersNameFieldTextBox.fill(randPlayer);
        await cookieClickerDashboardPage.startButton.click({timeout: 5000});

        await cookieClickerGameProfilePage.assertPlayerSalutation(randPlayer);
        await cookieClickerGameProfilePage.assertCookiesFieldTtile();
        await cookieClickerGameProfilePage.assertFactoriesFieldTtile();
        await cookieClickerGameProfilePage.assertMoneyFieldTtile();
        await cookieClickerGameProfilePage.assertSellCookiesFields();
        await cookieClickerGameProfilePage.assertBuyFactoriesFields();
    });
})
