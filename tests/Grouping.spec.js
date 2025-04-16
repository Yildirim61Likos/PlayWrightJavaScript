import{test,expect} from '@playwright/test';


test.beforeAll(async() =>{

    console.log("Before all tests");

})

test.afterAll(async() =>{

    console.log("After all tests");

})



test.beforeEach(async() =>{

    console.log("Before each test");

})

test.afterEach(async() =>{

    console.log("After each test");

})



test.describe.only('Grouping1', async() => {

    test('Grouping', async({ page })=>{

        console.log("Grouping1 test started");
        
        })
        
        
        test('Grouping1', async({ page })=>{
        
            console.log("Grouping2 test started");
            
        })
        



})


test.describe.skip('Grouping2', async() => {

    test('Grouping2', async({ page })=>{

        console.log("Grouping3 test started");
        
    })



})

