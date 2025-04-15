import{test,expect} from '@playwright/test';

test('Nested Frames', async({ page })=>{

   await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

  await frame.locator("//*[@id='id3']/div/input").fill("Hello World"); // fill the input field in the frame

  await  page.waitForTimeout(3000);

  const childFrame= await frame.childFrames();

  await childFrame[0].locator("//div[@id='i21']//div[@class='uHMk6b fsHoPb']").check(); // fill the input field in the child frame

 await  page.waitForTimeout(3000);






})