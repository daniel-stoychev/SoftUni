import { chromium } from 'playwright-chromium';

it('Should make a screenshot of the homepage', async () => {
    // this.timeout(5000);
    // const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
});


