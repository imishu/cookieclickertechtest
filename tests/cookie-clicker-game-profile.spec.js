import {test, expect} from "@playwright/test";
import {CookieClickerDashboardPage} from "../pages/CookieClickerDashboardPage";

test.beforeEach(async({page})=>{
    await page.goto(process.env.URL);
});

test.afterEach(async({page})=>{
    await page.close();
});

test.describe('Cookie Clicker Game Profile Tests', () => {
    test('Verify that the Cookie Clicker dashboard contents load sucessfully', async({page}) => {
        const cookieClickerDashboardPage = new CookieClickerDashboardPage(page);
        await cookieClickerDashboardPage.assertPageContent();
    });
})
