import{test,expect} from '@playwright/test';


test('Page Screenshot', async({ page })=>{
    
        await page.goto("https://gotranscript.com/text-compare");
        await page.screenshot({path:'screenshots/'+Date.now()+'page.png'}); // take a screenshot of the entire page
        await page.waitForTimeout(3000); // wait for 3 seconds to see the screenshot
    



})


test('Full Page Screenshot', async({ page })=>{
        
            await page.goto("https://gotranscript.com/text-compare");
            await page.screenshot({path:'screenshots/'+Date.now()+'fullpage.png', fullPage:true}); // take a screenshot of the entire page
            await page.waitForTimeout(3000); // wait for 3 seconds to see the screenshot
    



})

test('Element Screenshot', async({ page })=>{
            
                await page.goto("https://gotranscript.com/text-compare");
                const element = page.locator("//textarea[@placeholder='Paste one version of the text here.']");
                await element.screenshot({path:'screenshots/'+Date.now()+'element.png'}); // take a screenshot of the element
                await page.waitForTimeout(3000); // wait for 3 seconds to see the screenshot
    



})