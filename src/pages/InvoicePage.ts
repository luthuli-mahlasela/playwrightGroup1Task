import {Locator,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class InvoicePage extends BasePage{

    get verifyInvoicePageHeading():Locator{
        return this.page.getByRole('heading',{name:/Invoices/i});
    }
    
    async verifyInvoicePageHeadingIsVisible(){
        await expect(this.verifyInvoicePageHeading).toBeVisible();
    }

    async navigateToNewInvoiceButton(){
        await this.basePageClickElement(this.page.locator("xpath=//button[contains(normalize-space(.), 'New Invoice')]"));
    }

    async Invoice(name:string,address:string){
        
        await this.basePageEnterText(this.page.locator("xpath=//input[@placeholder='Type client name or email...' and @type='text']"), name);
        await this.basePageEnterText(this.page.locator("xpath=//textarea[@placeholder='Enter client address...' and @rows='2']"), address);
        
    }
    async clickOnAddCourse(){
    
        for(let count=0;count<4;count++){

            await this.basePageClickElement(this.page.locator("//button[contains(normalize-space(), 'Add Course')]"));
            await this.basePageClickElement(this.page.locator("//select/option[@value='21338952-8c10-4ab2-98ea-36bcd3858f94']"));
            await this.basePageEnterText(this.page.locator("//input[@type='text' and @placeholder='Description']"),('Good choice'));

        };
    }

    async validateTotalAmount(){
    await expect(this.page.locator("//span[contains(normalize-space(), '2') and contains(normalize-space(), '800')]")).toHaveText('R2,800');

    }

    async selectDate(){
        const dateInput=this.page.getByLabel('date');
        
        await dateInput.fill('09/30/2026');

    }

    async changeStatus(){
        await this.basePageClickElement(this.page.locator("//select/option[@value='paid']"));
    }

    async clickCreateInvoiceButton(){
        await this.basePageClickElement(this.page.locator("//button[@type='submit' and normalize-space()='✅ Create Invoice']"));
    }


}