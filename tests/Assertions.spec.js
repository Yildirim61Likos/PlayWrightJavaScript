import{ test , expect } from '@playwright/test';

test('Assertion', async({ page })=>
{

    // expect(page).toHaveURL();  == page has URL
    // expect(page).toHaveTitle(); == page has title
    // expect(locator).toBeVisible(); == element is visible 
    // expect(locator).toBeEnabled(); == Control is enabled 
    // expect(locator).toBeDisabled(); == element is disabled
    // expect(locator).toBeChecked(); == radio/checkbox is checked
    // expect(locator).toHaveAttribute(); == element has attribute
    // expect(locator).toHaveText(); == element matches text
    // expect(locator).toContainText(); == Element contains text
    // expect(locator).toHaveValue(); == input has a value
    // expect(locator).toHaveCount(); == list of elements has given length
    // expect(actualValue).toBe(expectedValue);
    // expect(await locator.textContent()).toContain("Expected Text");
    // 

    //expect(value).not.toEqual(0);
    //await expect(locator).not.toContainText('some text');




    // open app url 

page.goto("https://demo.nopcommerce.com/register");

// Assertion: Page has a specific URL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

// Assertion: Page has a specific title
const title = await page.title();
await expect(page).toHaveTitle(title);

// Assertion: Element is visible
const visibleElement = page.locator("//img[@alt='nopCommerce demo store']");
await expect(visibleElement).toBeVisible();

// Assertion: Element is enabled
const enabledElement = page.locator("//input[@id='small-searchterms']");
await expect(enabledElement).toBeEnabled();

// Assertion: Element is disabled (example assumes a disabled button)
//const disabledElement = page.locator('button[disabled]');
//await expect(disabledElement).toBeDisabled();

// Assertion: Checkbox or radio button is checked
const checkedElement = page.locator("//input[@id='gender-male']");
await checkedElement.click(); // Check the checkbox or radio button
await expect(checkedElement).toBeChecked();

// check box
const checkbox = page.locator("//input[@id='Newsletter']");
await expect(checkbox).toBeChecked(); // Verify it's checked


// Assertion: Element has a specific attribute
const elementWithAttribute = page.locator("//button[@id='register-button']");
await expect(elementWithAttribute).toHaveAttribute('type', 'submit');

// Assertion: Element matches specific text
const textElement = page.locator("//h1[normalize-space()='Register']");
await expect(textElement).toHaveText('Register');

// Assertion: Element contains specific text
const partialTextElement = page.locator("//h1[normalize-space()='Register']");
await expect(partialTextElement).toContainText('Regis');

// Assertion: Input has a specific value
const inputElement = page.locator("//input[@id='Email']");
await inputElement.fill('Playwright');
await expect(inputElement).toHaveValue('Playwright');

// Assertion: List of elements has a specific count
const listItems = page.locator("//ul[@class='top-menu notmobile']//li");
await expect(listItems).toHaveCount(16);

// Assertion: Actual value matches expected value
const actualValue = await page.locator('h1').textContent();
expect(actualValue).toBe('Register');

// Assertion: Locator's text content contains specific text
//const locatorText = await page.locator('p').textContent();
//expect(locatorText).toContain('illustrative examples');
     



})