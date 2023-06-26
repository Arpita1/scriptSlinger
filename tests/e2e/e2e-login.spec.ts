import {test, expect} from '@playwright/test'


test.describe("Login/Logout Flow", () => {
    //Before Hook

    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')
    })

    //Negative Scenario

    test("Negative Scenario For Login", async ({ page }) => {
        await page.click('#signin_button')
        await page.type('#user_login', 'some_username')
        await page.type('#user_password', 'some_password')
        await page.click('text=Sign in')

        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    })
    
    //Positive Scenario + Logout

    test("Positive Scenario for Login and Logout", async ({page}) => {
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('text=Sign in')

        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
        const accountSummaryTab = await page.locator('#account_summary_tab')
        await expect(accountSummaryTab).toBeVisible()


    })

    
})