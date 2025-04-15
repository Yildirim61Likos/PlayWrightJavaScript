import { test, expect } from '@playwright/test';

test('test', async ({ page }) => 
{

  // npx playwright codegen 
//npx playwright codegen https://demoblaze.com/ --output=tests/codegenTrial.spec.js
//npx playwright codegen https://demoblaze.com/ --output=tests/codegenTrial.spec.js --target=js
//npx playwright codegen https://demoblaze.com/ --output=tests/codegenTrial.spec.js --target=js --trace on
//npx playwright codegen https://demoblaze.com/ --output=tests/codegenTrial.spec.js --target=js --trace on --headed
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Monitors' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await expect(page.getByRole('img', { name: 'First slide' })).toBeVisible();
});