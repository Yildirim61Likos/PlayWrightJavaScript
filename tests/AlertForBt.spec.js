import{test,expect} from '@playwright/test';


test.skip('Alert', async({ page })=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.waitForTimeout(3000); // wait for 3 seconds to see the alert

    await page.on('dialog ', async dialog =>{

        //expect(dialog.type()).toBe('alert');
        console.log(dialog.message());
        dialog.accept(); // accept the alert
    })

   await page.locator("//button[@onclick='jsAlert()']").click(); // click on the button to open the alert

    
        await page.waitForTimeout(3000); // wait for 3 seconds to see the alert
    
        const text= await page.locator("//p[@id='result']");
    
        await expect(await text.textContent()).toBe('You successfully clicked an alert'); // check the text of the alert
    
        await page.waitForTimeout(3000); // wait for 2 seconds to see the alert


})


test.skip('Alert with Confirm ', async({ page })=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.waitForTimeout(3000); // wait for 3 seconds to see the alert

    await page.on('dialog ', async dialog =>{

        //expect(dialog.type()).toBe('alert');
        console.log(dialog.message());
        dialog.dissmis(); // accept the alert
    })

   await page.locator("//button[@onclick='jsConfirm()']").click(); // click on the button to open the alert

    
        await page.waitForTimeout(3000); // wait for 3 seconds to see the alert
    
        const text= await page.locator("//p[@id='result']");
    
        await expect(await text.textContent()).toBe('You clicked: Cancel'); // check the text of the alert
    
        await page.waitForTimeout(3000); // wait for 2 seconds to see the alert


})

test('Handle Alerts prompt input box Alert', async({ page })=>
    {
    
        // by default alerts are handled by playwright and they are not shown in the browser
        // to see the alerts in the browser we need to set the 'page.on' event listener
    
    
         await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    
         await page.on('dialog', async dialog => 
        {
            //expect(dialog.type()).toBe('prompt'); // check the type of the alert
            expect(dialog.message()).toBe('I am a JS prompt'); // check the message of the alert
            console.log(dialog.message());

            // to type in the alert input box

           // expect(dialog.defaultValue()).toBe('Hello'); // check the default value of the alert input box
            await dialog.accept('Hello'); // to accept the alert

         })
         //first we rae clicking the button to open the alert and then we are handling the alert
         await page.locator("//button[@onclick='jsPrompt()']").click(); 
    
        const text= await page.locator("//p[@id='result']");
    
        await expect(await text.textContent()).toBe('You entered: Hello'); // check the text of the alert
    
    
        await page.waitForTimeout(3000); // wait for 2 seconds to see the alert
    
        
    })