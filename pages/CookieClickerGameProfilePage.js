import {test, expect} from "@playwright/test";

exports.CookieClickerGameProfilePage = class CookieClickerGameProfilePage{

    constructor(page){
        this.page = page;
        this.playerSalutation = page.locator("[data-new-gr-c-s-check-loaded] p:nth-child(2)");
        this.cookiesFieldTitle = page.locator("[data-new-gr-c-s-check-loaded] p:nth-child(3) b");
        this.factoriesFieldTitle = page.locator("[data-new-gr-c-s-check-loaded] p:nth-child(4) b");
        this.moneyFieldTitle = page.locator("[data-new-gr-c-s-check-loaded] p:nth-child(5) b");
        this.clickCookietButton = page.locator("#click");
        this.cookieSellInput = page.locator("#cookies-to-sell");
        this.sellCookieButton = page.locator("#sell-cookies");
        this.buyFactoriesInput = page.locator("#factories-to-buy");
        this.buyFactoriesButton = page.locator("#buy-factories");
    }

    async assertPlayerSalutation(name){
        await expect.soft(this.playerSalutation).toHaveText(`Hello ${name}`);
    }

    async assertCookiesFieldTtile(){
        await expect.soft(this.cookiesFieldTitle).toHaveText("Cookies:");
    }

    async assertFactoriesFieldTtile(){
        await expect.soft(this.factoriesFieldTitle).toHaveText("Factories:");
    }

    async assertMoneyFieldTtile(){
        await expect.soft(this.moneyFieldTitle).toHaveText("Money:");
    }

    async assertSellCookiesFields(){
        await expect.soft(this.cookieSellInput).toBeVisible();
        await expect.soft(this.sellCookieButton).toBeVisible();
    }

    async assertBuyFactoriesFields(){
        await expect.soft(this.buyFactoriesInput).toBeVisible();
        await expect.soft(this.buyFactoriesButton).toBeVisible();
    }
}