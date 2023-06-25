import {test, expect} from '@playwright/test'

test('Demo Test', async ({page}) => {

    //Writing Test Code
    await page.goto('https://freshpikonline.com')
    const pageTitle = await page.locator('text = Please enter your access key')
    await expect(pageTitle).toContainText(' Please enter your access key')
    
})