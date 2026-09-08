import {Locator,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPage extends BasePage{

    get verifyAdminPageHeading():Locator{
        return this.page.getByRole('heading',{name:/Admin\s*Panel/i});
    }

    async verifyAdminPageHeadingIsVisible(){
        await expect(this.verifyAdminPageHeading).toBeVisible();
    }

    async navigatetoInvoicePage(){
        await this.basePageClickElement(this.page.locator(`xpath=//button[span[normalize-space()='🧾'] and contains(normalize-space(.),'Invoices')]`));
        
    }
}