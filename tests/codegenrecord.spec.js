import { test, expect } from '@playwright/test';

test('test', async ({ page }) => 
{
  await page.goto('https://demoblaze.com/');

  await page.getByRole('link', { name: 'Home (current)' }).click();

  await page.getByRole('link', { name: 'About us' }).click();

  await page.locator('#videoModal').getByLabel('Close').click();

  await page.getByRole('link', { name: 'Cart' }).click();

  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();

  await page.getByRole('link', { name: 'Home (current)' }).click();

  await page.getByRole('link', { name: 'Laptops' }).click();

  await page.locator('div:nth-child(6) > .card > a').click();

  page.once('dialog', dialog => 
    {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await expect(page.getByRole('heading', { name: '$1100 *includes tax' })).toBeVisible();
});