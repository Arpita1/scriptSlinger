import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 10000,
    retries: 2,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: "Chromium",
            use: {browserName: "chromium"},
        },
        {
            name: "Firefox",
            use: {browserName: "firefox"},
        },
    ],
}

export default config
