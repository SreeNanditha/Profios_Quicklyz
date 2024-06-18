import { test, Page } from '@playwright/test';
import * as methods from "./basecls.ts"
import * as value from "./data.json"
let page: Page;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    test.slow();
});
test.afterEach(async () => {
    await page.close();
});
let scenario = 1;
let income_assessment = 1
let select = 2;
test('Quiklyz upload statements N flow', async () => {
    if (scenario === 1) {
        await test.step ('with selcting car less then 40k', async () => {
        await methods.Y_flow(page);})
    }
    else if (scenario === 2) {
        await test.step ('without selcting car', async () => {
        await methods.R1_flow(page);})
    }
    else if (scenario === 3) {
        await test.step ('with selcting car more then 40k', async () => {
        await methods.R2_flow(page);})
    }
    await methods.login(page, value);
    await methods.form_1(page, value);
    await methods.form_2(page, value);
    await methods.validation(page, value);

    if (income_assessment === 1) {
        await methods.upload(page, value);
    }
    else if (income_assessment === 2) {
        await methods.netbanking(page, value);
    }
    else if (income_assessment === 3) {
        await methods.selfdeclaration(page, value);
        if (select === 1) {
            await page.getByRole('button', { name: 'Edit Record' }).click();
            await methods.upload(page, value);
        } else {
            await page.getByRole('button', { name: 'Edit Record' }).click();
            await methods.netbanking(page, value);
        }
    }
    await page.screenshot({ path: 'screenshot3.png' });
});
