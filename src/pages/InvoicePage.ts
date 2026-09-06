import {Locator,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class InvoicePage extends BasePage{

    get verifyInvoicePageHeading():Locator{
        return this.page.getByRole('heading',{name:/Invoices/i});
    }
    
    async verifyInvoicePageHeadingIsVisible(){
        await this.basePageVerifyElementIsVisible(this.verifyInvoicePageHeading);
    }

    async navigateToNewInvoiceButton(){
        await this.basePageClickElement(this.page.locator("xpath=//button[contains(normalize-space(.), 'New Invoice')]"));
    }

    async Invoice(name:string,address:string){
        await this.basePageClickElement(this.page.locator("xpath=//input[@placeholder='Type client name or email...' and @type='text']"));
        await this.basePageEnterText(this.page.getByRole('textbox', { name: 'Client Name' }), name);
        await this.basePageClickElement(this.page.locator("xpath=//textarea[@placeholder='Enter client address...' and @rows='2']"));
        await this.basePageEnterText(this.page.getByRole('textbox', { name: 'Client Address' }), address);
        
    }


}