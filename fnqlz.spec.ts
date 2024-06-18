import { test, expect } from '@playwright/test';
test('Quiklyz functional test', async ({ page }) => {
        await page.goto('https://uat.quiklyz.com/');
        await page.locator('[class="text-center HYD"]').click();
        await page.getByText('  Find Cars  ').nth(0).click();
        await page.getByText('Tata Punch ').click();
        await page.getByText(' Check Eligibility ').nth(0).click();
        await page.getByText('Login').nth(3).click();
        await page.getByText('Enter Mobile Number').nth(0).fill('849909');
        await page.keyboard.press('Enter');
        await expect(page.getByText('Please Enter Valid Registered Mobile Number.')).toBeVisible();
        await page.locator('[class="swal2-confirm swal2-styled"]').nth(0).click();
        await page.getByText('Enter Mobile Number').nth(0).fill('8499092234');
        await page.getByText(' Get OTP   ').nth(0).click();
        await page.locator('[class="form-group text-center"]').nth(0).click();
        await page.locator('[id="otpField-0"]').nth(0).fill('1');
        await page.locator('[id="otpField-1"]').nth(0).fill('1');
        await page.locator('[id="otpField-2"]').nth(0).fill('1');
        await page.locator('[id="otpField-3"]').nth(0).fill('4');
        await page.locator('[id="otpField-4"]').nth(0).fill('5');
        await page.locator('[id="otpField-5"]').nth(0).fill('6');
        await page.getByText(' Verify OTP   ').nth(0).click();
        await expect(page.getByText('Please enter valid OTP')).toBeVisible();
        await page.locator('[class="swal2-confirm swal2-styled"]').nth(0).click();

        await page.getByText('First Name & Middle Name').nth(0).fill('Prakash');
        await page.getByText('Last Name').nth(0).fill('R');
        await page.getByText('PAN Number').nth(0).fill('FFKPP82');
        await page.getByText('Date of Birth ').nth(0).click();
        await page.locator('[class="mat-focus-indicator mat-icon-button mat-button-base"]').nth(0).click();
        await page.locator('[class*="mat-focus-indicator mat-calendar-period-button"]').nth(0).click();
        await page.locator('[class*="mat-focus-indicator mat-calendar-previous-button"]').nth(0).click();
        await page.getByText(' 1994 ').nth(0).click();
        await page.getByText(' JUL ').nth(0).click();
        await page.getByText(' 11 ').nth(0).click();
        await page.locator('[class*="mat-checkbox-inner-container mat-checkbox"]').nth(0).click();
        await page.getByText('Continue').nth(0).click();

        await expect(page.locator('[class*="cibil-thankyou card-default"]').nth(4)).toBeVisible();
        await page.getByText('Go to home page').nth(7).click();
});

// const text1 = await page.locator('[id="mat-input-27"]').nth(0).innerText();
      // console.log(text1);
      // page.on('response', async (response) => {
      //       if (response.url().includes('https://uat.quiklyz.com/login')) {
      //         const status = response.status();
      //         const responseBody = await response.json();
      //         console.log(`Status: ${status}`);
      //         console.log('Response:', responseBody);
      //       }
      //     });

      //await page.locator('[class*="mat-tooltip-trigger fg-action-btns ng-star-inserted perfios"]').nth(5).click();

    //   await expect(page.getByText('Prakash_Statement-1.pdf').evaluate('C:\\Users\\blues\\Downloads\\Prakash_Statement-1.pdf'));
    // const existingFilePath = 'C:\\Users\\blues\\Downloads\\Prakash_Statement-1.pdf';
    // const existingFileContent = await page.locator('[class="attachment-file-name"]').nth(0);
    // await expect(existingFilePath).toEqual('Prakash_Statement-1.pdf');

    //await page.getByText('Try Again').nth(1).click();

    //await page.locator('img[_ngcontent-serverapp-c534]').nth(6).click(); //delete the file //
    
//   test('api test', async ({ request }) => {
//         const response = await
//         request.get(`https://uat.quiklyz.com/data-service/customActionService`);
//     console.log(response);
// });  

// await expect(page.locator('[class="mat-dialog-container ng-tns-c48-99 ng-trigger ng-trigger-dialogContainer ng-star-inserted"]').nth(0)).toBeVisible();
    // await page.getByText('Show Eligible Cars').nth(0).click();
    // await expect(page).toHaveURL('https://uat.quiklyz.com/car-lease-search');

    // await page.locator('[id="fileDropRef"]').nth(0).click();
    // await page.locator('[id="fileDropRef"]').setInputFiles('C:\\Users\\blues\\Downloads\\Prakash_Statement-1.pdf');
    // await page.locator('[class*="thumb-container"]').nth(0).click();
    // await page.getByRole('button', { name: 'Edit Record' }).click();

    //await page.getByText('Try Again').nth(1).click();

    // await page.getByText('Show Eligible Cars').nth(0).click();
    // await expect(page).toHaveURL('https://uat.quiklyz.com/car-lease-search');
    // await page.locator('[class="mat-slide-toggle-label"]').nth(0).click();
    // await page.getByText('Hyundai Creta N Line ').click();
    // await expect(page).toHaveURL('https://uat.quiklyz.com/car-detail/Hyundai-Creta-N-Line-1.5-T-GDI-N8-Petrol-Manual');
    // await expect(page.getByText('  Please proceed with different variant or vehicle  ').nth(0)).toBeVisible();
    // await page.getByText('View eligible cars').nth(0).click();
    // await expect(page).toHaveURL('https://uat.quiklyz.com/car-lease-search');
 
  //   if(option1){
  //     const popup= await page.locator('[class="fghtml ng-star-inserted"]').nth(1).allTextContents();
  //     console.log(popup);
  //         await page.getByText('Go to home page').nth(0).click();
  // }

  //await page.screenshot({ path: 'C://Users//blues//Downloads//demo_fingress (2) (1)//demo_fingress (2)//demo_fingress//demo_fingress//tests//document//doc' });
            // await page.waitForTimeout(5000);
            // await expect(page.getByText('Cars on Subscription').nth(0)).toBeVisible(); 
            // await page.screenshot({ path: 'screenshot.png' });

            // page.on('response', async (response) => {
    //     if (response.url().includes('https://uat.quiklyz.com/data-service/buildEntityContext')) {
    //         const status = response.status();
    //         const responseBody = await response.json();
    //         const name = responseBody.entityData.CURRENT_STEP;
    //         console.log("data response   :" + name);
    //         if (name != null) {
    //             await page.locator('[class*="12 text-center ng"]').nth(4).waitFor({ state: "visible" });
    //             const message = await page.locator('[class*="12 text-center ng"]').nth(4).innerText();
    //             console.log(message);
    //             await page.getByRole('button', { name: 'Edit Record' }).click();
    //         } else {
    //             await bank_details(page, data);
    //         }
    //     }
    // });

    //     page.on('response', async (response) => {
    //         if (response.url().includes('https://uat.quiklyz.com/data-service/buildEntityContext')) {
    //               const status = response.status();
    //               const responseBody = await response.json();
    //               console.log(`Status: ${status}`);
    //               console.log('Response:', responseBody);
    //         }
    //   });

//     page.on('response', async (response) => {
//         if (response.url().includes('https://uat.quiklyz.com/data-service/buildEntityContext')) {
//             const status = response.status();
//             if (status === 200) {
//                 console.log(`Status: ${status}`);
//             } else {
//                 console.log(`Status: ${status} - Response is not 200`);
//             }
//         }
//     });

// await page.locator('select[name="institutionId"]').waitFor({ state: "visible" });
//     await page.locator('select[name="institutionId"]').nth(0).click();
//     await page.getByLabel('Select a Bank').nth(0).selectOption('998');
//     await page.getByPlaceholder('Login ID').nth(0).fill(data.Login_id.toString());
//     await page.getByPlaceholder('Password', { exact: true }).nth(0).fill(data.password.toString());
//     await page.locator('[id="submitId"]').nth(0).click();

    // for (const a of message2) {
        
    // }

 //await page.getByLabel('or Browse').setInputFiles('tests-examples//50100522137160_1717227814587.pdf') 
 
//  await page.setInputFiles('input[type="file"]', 'tests-examples//50100522137160_1717227814587.pdf');

// if (await page.locator('[style="color: rgb(0, 0, 0);"]').nth(0).isVisible()) {
//   await page.locator('[style="color: rgb(0, 0, 0);"]').nth(0).waitFor({ state: "visible" });
//   const message1 = await page.locator('[style="color: rgb(0, 0, 0);"]').nth(0).innerText();
//   const message2 = await page.locator('[style="color: rgb(0, 0, 0);"]').nth(1).innerText();
//   console.log(message1);
//   console.log(message2);
//   await page.getByRole('button', { name: 'Edit Record' }).click();
// }

