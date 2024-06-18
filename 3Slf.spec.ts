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
let scenario = 2;
let income_validation = 1;

test('Quiklyz selfdeclaration Y, R1 and R2 flow', async () => {
  await methods.login(page, value);
  if (scenario === 1) {
    await test.step ('Verify whether the customer is eligible to proceed by selecting self-declaration after choosing a car costing less than 40,000.', async () => {
      await methods.Y_flow(page);
    })
  }
  else if (scenario === 2) {
    await test.step ('Verify whether the customer can continue the journey without selecting a car initially and can proceed by selecting self-declaration.', async () => {
      await methods.R1_flow(page);
    })
  }
  else if (scenario === 3) {
    await test.step ('Verify whether the customer is eligible to proceed by selecting self-declaration after choosing a car costing more than 40,000.', async () => {
      await methods.R2_flow(page);
    })
  }
  await methods.smart_match_page(page, value);
  await methods.regular_match_page(page, value);
  await methods.income_validation_page(page, value);
  await methods.selfdeclaration(page, value);
  if (scenario !== 1)
  {await methods.PLP_page_with_eligible_cars(page);}
  await methods.token_payment(page, value);

  if(income_validation === 1){
    await page.getByRole('button', { name: 'Edit Record' }).click();
    await methods.upload(page, value);
  }else{
    await page.getByRole('button', { name: 'Edit Record' }).click();
    await methods.netbanking(page, value);
  }
 await methods.Aadhaar_Details_page(page);
});

