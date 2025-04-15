import{test,expect} from '@playwright/test';


test('Keyboard Actions', async({ page })=>{

await page.goto("https://gotranscript.com/text-compare");

const inputText = page.locator("//textarea[@placeholder='Paste one version of the text here.']");
await inputText.fill("Hello World"); // fill the input field with the text "Hello World"
await inputText.press('Control+A'); // Select all text
await inputText.press('Control+C'); // Copy the selected text
//await page.keyboard.down('Tab'); // Move to the next field (the second textarea)
//await page.keyboard.up('Tab'); // Release the Tab key

const pasteText = await page.locator("//textarea[@placeholder='Paste another version of the text here.']");
await pasteText.press('Control+V'); // Paste the copied text

await page.waitForTimeout(3000); // wait for 3 seconds to see the pasted text


})