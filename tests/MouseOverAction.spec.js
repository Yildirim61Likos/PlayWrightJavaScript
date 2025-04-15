import{test,expect} from '@playwright/test';


test('Mouse Over Action', async({ page })=>
{

await page.goto("https://demo.opencart.com.gr/");

const deskstop = await page.locator("//a[normalize-space()='Desktops']");

const macbook = await page.locator("//a[normalize-space()='Mac (1)']");

await deskstop.hover(); // hover over the desktops link // wait for 2 seconds
await macbook.hover();
await page.waitForTimeout(2000);

// right click on the button
// we need to use the 'click' method with the 'button' option set to 'right'
await page.goto("https://vinothqaacademy.com/mouse-event/");

 const button = page.locator("//button[@id='rightclick']"); 
await button.click({ button: 'right' }); // right click on the button


await page.waitForTimeout(2000); // wait for 2 seconds to see the alert


//Double click on the button
// we need to use the 'dblclick' method to double click on the button
await page.locator("//button[@id='dblclick']").dblclick(); // double click on the button
await expect(await page.locator("//p[@id='demo']")).toHaveText("Double Click Action is Performed"); // check the text of the alert
await page.waitForTimeout(2000); // wait for 2 seconds to see the alert



//Drag and drop action
// we need to use the 'dragAndDrop' method to drag and drop an element

await page.locator("//div[@id='draggableElement']").dragTo(page.locator("//div[@id='droppableElement']")); // Drag and drop the element
//await expect(await page.locator("//p[@id='demo']")).toHaveText("Dropped!"); // check the text of the alert

await page.waitForTimeout(2000);
}
)