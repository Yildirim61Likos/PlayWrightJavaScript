import{test,expect} from '@playwright/test';


test('Test1', async({ page })=>{

    console.log("Test1 started");
    // go to page
    await page.goto('https://www.google.com/');
    // validate title
    const title = await page.title();
    console.log(title); // The Internet
});

test('Test2', async({ page })=>{

    console.log("Test2 started");
    // go diffrent to page
    await page.goto('https://www.facebook.com/');
    // validate title
    const title = await page.title();
    console.log(title); // The Internet

});


test('Test3', async({ page })=>{

    // go to different page
    await page.goto('https://www.amazon.com/');
    // validate title
    const title = await page.title();
    console.log(title); // The Internet
    console.log("Test3 started");
});