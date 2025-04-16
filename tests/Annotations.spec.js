import{test,expect} from '@playwright/test';

//annations are used to group the tests and run them based on the tags
// tags are used to run the tests based on the tags and annotations
// only !!
// skip !!
// fixme !! == skip 
// test.slow() == slow test
// test.fixme() == skip the test
// skip- if you want to skip the test
// only- if you want to run the test only



test('Test1', async ({ page, browserName }) => {
    console.log("Test1 started");

    if(browserName === 'firefox')
    {
        console.log("Running on firefox browser");
        test.skip();
    }



});

test('Test2', async ({ page }) => {

    test.fixme("Test2 is skipped"); // This test will be skipped
    console.log("Test2 started");
});

test('Test4', async ({ page }) => {

    test.fail("Test4 is failed"); // This test will be failed
    console.log("Test4 started");
});