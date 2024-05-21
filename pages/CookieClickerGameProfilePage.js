import {test, expect} from "@playwright/test";

exports.CookieClickerDashboardPage = class CookieClickerDashboardPage{

    constructor(page){
        this.page = page;
        this.cookieClickerH1PageHeader = page.locator("h1");
        this.newGameH2PageHeader = page.locator("h2:nth-child(2)");
        this.playersNameFieldLabel = page.locator("label[for='name']");
        this.playersNameFieldTextBox = page.locator("input[name='name']");
        this.startButton = page.locator("form button");
        this.highScoreH2PageHeader = page.locator("h2:nth-child(4)");
        this.scoreTable = page.locator("table");
        this.scoreTablePlayerColumnText = page.locator("table th:nth-child(1)");
        this.scoreTableScoreColumnText = page.locator("table th:nth-child(2)");
    }

    async assertPageContent(){
        await expect(this.cookieClickerH1PageHeader).toHaveText("Cookie Clicker!")
        await expect(this.newGameH2PageHeader).toHaveText("New Game")
        await expect(this.playersNameFieldLabel).toHaveText("Your name:")
        await expect(this.playersNameFieldTextBox).toBeVisible();

        await expect(this.startButton).toBeVisible()
        await expect(this.highScoreH2PageHeader).toHaveText("High Scores")
        await expect(this.scoreTablePlayerColumnText).toHaveText("Player")
        await expect(this.scoreTableScoreColumnText).toHaveText("Score")

    }
}