import { Page, expect } from '@playwright/test';

export async function login(page: Page, data: any) {
    await page.goto("https://uat.quiklyz.com/");
    await expect(page.locator('[class="text-center HYD"]')).toBeVisible();
    await page.locator('[class="text-center HYD"]').click();
    await page.locator('[class*="logout"]').nth(0).click();
    await page.locator('[id*="panel-1"]').nth(0).click();
    await page.getByText('Login').nth(3).click();
    await page.getByText('Enter Mobile Number').nth(0).fill(data.phone.toString());
    await page.getByText('Get OTP').nth(0).click();
    await page.locator('[class*="form-group"]').nth(0).click();
    const otp = data.otp.toString().split('');
    for (let i = 0; i < otp.length; i++) {
        await page.locator(`[id="otpField-${i}"]`).nth(0).fill(otp[i]);
        await page.waitForTimeout(500);
    }
    await page.getByText('Verify OTP').nth(0).click();
    await page.waitForTimeout(2000);
}

export async function Y_flow(page: Page) {
    await page.getByText('Tata Punch ').click();
    await page.getByText(' Check my Eligibility ').nth(1).click();
}

export async function R1_flow(page: Page) {
    await page.waitForTimeout(5000);
    await page.locator('[id*="fg-logo"]').nth(0).click();
    await page.waitForTimeout(2000);
    await page.locator('[class*="sticky"]').nth(0).click();
    await page.getByText(' Check Eligibility ').nth(1).click();
}

export async function R2_flow(page: Page) {
    await page.getByText('Toyota Innova Crysta ').click();
    await page.getByText(' Check my Eligibility ').nth(1).click();
}

export async function smart_match_page(page: Page, data: any) {
    await page.waitForLoadState('load');
    await page.getByText('First Name & Middle Name').nth(0).fill(data.name);
    await page.getByText('Last Name').nth(0).fill(data.last_name);
    await page.locator('[class*="align-self-center ng"]').nth(0).waitFor({ state: "visible" });
    const msg1 = await page.locator('[class*="align-self-center ng"]').nth(0).allTextContents();
    console.log(msg1);
    await page.getByText('PAN Number').nth(0).fill(data.PAN_no);
    await page.getByText('Date of Birth').nth(0).click();
    await page.getByLabel('Open calendar').nth(0).click();
    await page.locator('[id="mat-calendar-button-0"]').nth(0).click();
    await page.locator('[class*="previous-button"]').nth(0).click();
    await page.getByLabel('2000').nth(0).click();
    await page.getByText('APR').nth(0).click();
    await page.getByLabel('7').nth(0).click();
    await page.locator('[class*="mat-checkbox-inner-container"]').nth(5).click();
    await page.getByRole('button', { name: 'Edit Record' }).click();
    await page.waitForTimeout(5000);
}
export async function regular_match_page(page: Page, data: any) {
    await page.locator('[class*="Assess container"]').nth(0).waitFor({ state: "visible" });
    const message2 = await page.locator('[class*="Assess container"]').nth(0).allTextContents();
    console.log(message2);
    await page.getByText('Male').nth(0).click();
    await page.getByText('Address').nth(0).fill(data.Address);
    await page.getByText('City').nth(0).fill(data.city);
    await page.getByText('PIN Code').nth(0).fill(data.pincode.toString());
    await page.getByText('State').nth(0).click();
    await page.getByText('Andhra Pradesh').nth(0).click();
    await page.getByRole('button', { name: 'Edit Record' }).click();
    await page.waitForTimeout(5000);
}
export async function income_validation_page(page: Page, data: any) {
    await page.locator('[class*="validation-html"]').nth(0).waitFor({ state: "visible" });
    const message3 = await page.locator('[class*="validation-html"]').nth(0).allTextContents();
    console.log(message3);
    await page.getByText('Total years of experience').nth(3).click();
    await page.getByRole('option', { name: '1- 5 years' }).nth(0).click();
    await page.getByText('I have read and accept the').nth(0).click();
    await page.getByRole('button', { name: 'Edit Record' }).click();
}

export async function token_payment(page: Page, data: any) {
    await page.waitForTimeout(5000);
    if (await page.locator('[class*="12 text-center ng"]').nth(4).isVisible()) {
        await page.locator('[class*="12 text-center ng"]').nth(4).waitFor({ state: "visible" });
        const message = await page.locator('[class*="12 text-center ng"]').nth(4).innerText();
        console.log(message);
        await page.getByRole('button', { name: 'Edit Record' }).click();
    }
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await expect.soft(page.locator('[class*="md-5"]').nth(3)).toBeVisible();
    await page.getByText('Pay & Reserve @Just ₹ 5000 /-').nth(1).click();
    await page.locator('[id="cardNumber"]').nth(0).waitFor({ state: "visible" });
    await page.locator('[id="cardNumber"]').nth(0).fill(data.card_no.toString());
    await page.locator('[id="cardExpiry"]').nth(0).fill(data.card_expiry)
    await page.locator('[id="cardCvv"]').nth(0).fill(data.cardCvv.toString());
    await page.locator('[id="cardOwnerName"]').nth(0).fill(data.cardOwnerName);
    await page.getByRole('button', { name: 'PROCEED' }).click();
    await page.locator('[id="password"]').nth(0).waitFor({ state: "visible" });
    await page.locator('[id="password"]').nth(0).fill(data.password.toString());
    await page.locator('[id="submitBtn"]').nth(0).click();
    await page.waitForTimeout(5000);
    await page.getByText(' Proceed to Income Verification ').nth(0).click();
    await page.waitForTimeout(5000);
}
export async function Aadhaar_Details_page(page: Page) {
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await expect(page.getByText('Retrieving Aadhaar Details')).toBeVisible();
}

export async function upload(page: Page, data: any) {
    await page.getByLabel('or Browse').click();
    await page.waitForLoadState('load');
    await page.setInputFiles('input[type="file"]', 'tests-examples//50100522137160_1717227814587.pdf');
    await page.waitForTimeout(5000);
    await page.locator('[class*="content fghtml"]').nth(0).waitFor({ state: "visible" });
    const popup_msg = await page.locator('[class*="content fghtml"]').nth(0).innerText();
    console.log(popup_msg);
    await page.screenshot({ path: 'screenshot31.png' });
    const uploadedFileName = await page.locator('[class="attachment-file-name"]').nth(0).innerText();
    if (uploadedFileName === '50100522137160_1717227814587.pdf') {
        console.log("Uploaded file is the same  -" + uploadedFileName);
    } else {
        console.log("Uploaded file is not the same  -" + uploadedFileName);
    }
    await expect(page.locator('[class="attachment-file-name"]').nth(0)).toHaveText('50100522137160_1717227814587.pdf');
    await page.locator('[class*="thumb-container"]').nth(0).click();
    await page.getByRole('button', { name: 'Edit Record' }).click();
    await page.locator('[id="mat-dialog-1"]').nth(0).waitFor({ state: "visible" });
    const popup1 = await page.locator('[id="mat-dialog-1"]').nth(0).allInnerTexts();
    console.log('POPUP :' + popup1);
    if (await page.locator('[id="mat-dialog-3"]').nth(0).isVisible()) {
        await page.locator('[id="mat-dialog-3"]').nth(0).waitFor({ state: "visible" });
        const popup2 = await page.locator('[id="mat-dialog-3"]').nth(0).allInnerTexts();
        console.log("ERROR MSG :" + popup2);
        await page.screenshot({ path: 'perfios//perfios//tests-examples//screenshot2.png' });
    }
}

export async function netbanking(page: Page, data: any) {
    await page.waitForTimeout(5000);
    await page.getByText('Net Banking').nth(1).click();
    await page.waitForLoadState('load');
    await page.frameLocator('iframe').getByLabel('Select a Bank').nth(0).waitFor({ state: "visible" });
    await page.frameLocator('iframe').getByLabel('Select a Bank').nth(0).click();
    await page.frameLocator('iframe').getByLabel('Select a Bank').nth(0).selectOption('998');
    await page.frameLocator('iframe').getByPlaceholder('Login ID').nth(0).fill(data.Login_id.toString());
    await page.frameLocator('iframe').getByPlaceholder('Password', { exact: true }).nth(0).click();
    await page.frameLocator('iframe').getByPlaceholder('Password', { exact: true }).nth(0).fill(data.password.toString());
    await page.frameLocator('iframe').locator('[id="submitId"]').nth(0).click();
    await expect(page.locator('[class="mat-card mat-focus-indicator"]').nth(4)).toBeVisible();
    await page.frameLocator('iframe').locator('[class="text-success"]').nth(0).waitFor({ state: "visible" });
    const message = await page.frameLocator('iframe').locator('[class="text-success"]').nth(0).innerText();
    console.log(message);
    await page.frameLocator('iframe').locator('[class="message"]').nth(0).waitFor({ state: "visible" });
    const message1 = await page.frameLocator('iframe').locator('[class="message"]').nth(0).innerText();
    console.log(message1);
    await page.frameLocator('iframe').locator('[class="message secondary-msg"]').nth(0).waitFor({ state: "visible" });
    const message2 = await page.frameLocator('iframe').locator('[class="message secondary-msg"]').nth(0).innerText();
    console.log(message2);
    await page.frameLocator('iframe').getByText('No, Thanks').nth(0).click();
    await page.waitForTimeout(8000);
    if(await page.locator('[class*="page fghtml"]').nth(1).isVisible()){
        await page.locator('[class*="page fghtml"]').nth(1).waitFor({state: "visible"});
        const msg2= await page.locator('[class*="page fghtml"]').nth(1).allTextContents();
        console.log(msg2);
        await page.getByRole('button', { name: 'Edit Record' }).click();   }
}

export async function selfdeclaration(page: Page, data: any) {
    await page.locator('[class="mat-radio-container"]').nth(5).click();
    await page.getByPlaceholder('Enter you take home salary').fill(data.salary.toString());
    await page.getByRole('button', { name: 'Edit Record' }).click();
}

export async function PLP_page_with_eligible_cars(page: Page) {
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://uat.quiklyz.com/car-lease-search");
    await page.waitForTimeout(5000);
    await page.getByText('Tata Punch ').click();
    await page.getByText(' Pay & Reserve ').nth(2).click();
}


