import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{

    get verifyHomePageHeading():Locator{
        return this.page.getByRole('heading',{name:/Welcome\s*back/i});

    }

    async homePageVerifyHeadingIsVisible(){
        await expect(this.verifyHomePageHeading).toBeVisible();
    }

    async navigateToAdminPage(){
        await this.basePageClickElement(this.page.locator('xpath=//button//span[text() = "Menu"]'));
        await this.basePageClickElement(this.page.locator('//button[contains(@class,"nav-dropdown-item") and .//span[normalize-space()="Admin Panel"]]'));
        
    }





}
