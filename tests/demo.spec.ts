import {test, expect} from '@playwright/test'

// test.describe('Hooks', () => {
//     test.beforeEach(async ({page}) =>
//     await page.goto('https:freshpikonline.com')
// })

test('Demo Test', async ({page}) => {

    //Writing Test Code
    await page.goto('https://freshpikonline.com')
    const pageTitle = await page.locator('text = Please enter your access key')
    await expect(pageTitle).toContainText(' Please enter your access key')
    
})


test('Clicking Elements', async ({page}) => {
    await page.goto('https://freshpikonline.com')
    await page.click('.common-input')
    await page.click('text=Submit')
    
    //const errorMessage = await page.locator('text = Please fill in this field.')
    //await expect(errorMessage).toContainText('Please fill in this field')
})


test.skip('Selectors', async ({page}) => { //Annotation: skip this testcase
    //text
    await page.click('text=some text')

    //css selectors
    await page.click('button')
    await page.click('.class')
    await page.click('#id')
    await page.click("input[name:'clear']")

    //visible css selector
    await page.click('.submit: visible')

    //combination
    await page.click('#username .first')

    //xpath
    await page.click('button')
})

test.describe('My First Test Suite', () => {
    test('Working with Inputs @Sanity', async ({page}) => {
        await page.goto("https://freshpikonline.com")
        await page.click('.common-input')
        await page.type('.common-input', 'PhgXuc4NWYv8t2rk')
        await page.click('text=Submit')
    
    })
    
    test('Assertions', async ({page}) => {
        await page.goto('https://freshpikonline.com')
        await expect(page).toHaveURL('https://freshpikonline.com')
    
        const signinElement = await page.locator('.profile-logout')
        await expect(signinElement).toBeVisible()
        await expect(signinElement).toHaveText('Sign In')
        await expect(signinElement).toHaveCount(1)
    })

})

    test('Screenshots', async({page}) => {
        //1. Load Website
        await page.goto('https://freshpikonline.com')

        //2. Take SS of full website
        await page.screenshot({ path: 'screenshot.png', fullPage: true })
    })



