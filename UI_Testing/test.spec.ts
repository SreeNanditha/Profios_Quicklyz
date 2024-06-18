import { test, expect } from '@playwright/test';
test('has active link', async ({ page }) => {
  await page.goto('https://uat.quiklyz.com/');
  await page.locator('[class="text-center HYD"]').click();
  await page.locator('[class*="pointer"]').nth(1).click();
  const button1 = await page.$('//a[contains(@class, "activeLink")]');
// const button2 = expect(await page.locator('[class*="focus-overlay"]').nth(1).isVisible());
// console.log("size  "+await page.locator('[class="col-md-10"]').nth(0).boundingBox());
const locator = expect(page.locator('[class*="focus-overlay"]').nth(1)).toHaveCSS('font-family', 'Roboto, sans-serif');
console.log('font '+ locator)
await page.waitForTimeout(5000);
await page.locator('[class*="footercontainer"]').click();
//await expect(page.locator('[class*="footercontainer"]').nth(0)).toBeVisible();
await page.screenshot({ path: 'screenshot5.png' });
await page.waitForTimeout(5000);
await expect(page).toHaveScreenshot('screenshot5.png');

  
 
});

