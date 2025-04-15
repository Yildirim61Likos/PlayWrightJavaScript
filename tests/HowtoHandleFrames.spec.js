import{test,expect} from '@playwright/test';

test('Handle Frames', async({ page })=>
{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // to handle the frames we need to use the 'frameLocator' method
    // we need to pass the frame locator to the 'frameLocator' method

   const allframes= await page.frames();

  await  console.log(allframes.length); // check the number of frames in the page

  // approach 1: using the name or url of the frame
  const frame1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

  await frame1.locator("//input[@name='mytext1']").fill("Hello World"); // fill the input field in the frame
  //lets delete the text in the input field
  await frame1.locator("//input[@name='mytext1']").press('Control+A'); // Select all text
  await frame1.locator("//input[@name='mytext1']").press('Backspace'); // Delete the selected text


  // approach 2: using the locator of the frame
    const frame2= await page.frameLocator("//frame[@src='frame_1.html']");
    frame2.locator("//input[@name='mytext1']").fill("Hello World"); // fill the input field in the frame



   await page.waitForTimeout(2000);



})