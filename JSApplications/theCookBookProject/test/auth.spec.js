import { chromium } from "playwright-chromium";
import { expect } from "chai";

const homeURL = 'http://localhost:3000';
let browser;
let page;

before(async () => { browser = await chromium.launch({ headless: true, slowMo: 0 }); });
beforeEach(async () => { page = await browser.newPage(); });
after(async () => { await browser.close(); });
afterEach(async () => { await page.close(); });

describe('Login page', async () => {
    it('Should load default user', async () => {
        page.goto(homeURL);
        await page.click('a[href="/login"]');
        await page.fill('input[name=email]', 'admin@abv.bg');
        await page.fill('input[name=password]', 'admin');
        await page.click('input[type=submit]');

        // await page.waitForLoadState('networkidle');

        await page.waitForSelector('#home-section');

        expect(await page.isVisible('#home-section')).to.be.true;

    });
});

describe('Register Page', async () => {
    it('Should register new user if user is not registered', async () => {
        const timeStamp = Date.now();
        const uniqueEmail = `user${timeStamp}@abv.bg`

        page.goto(homeURL);
        await page.click('a[href="/register"]');
        await page.fill('input[name=email]', uniqueEmail);
        await page.fill('input[name=password]', '123456');
        await page.fill('input[name=rePass]', '123456');
        await page.click('input[type=submit]');

        await page.waitForSelector('#user');
        expect(await page.isVisible('#user')).to.be.true;

    });
    it('Should show alert if user already exists', async () => {
        const existingEmail = 'admin@abv.bg'
        await page.goto(homeURL);
        await page.click('a[href="/register"]');

        page.on('dialog', async dialog => {
            expect(dialog.message()).to.equal('A user with the same email already exists');
            await dialog.dismiss();
        });

        await page.fill('input[name=email]', existingEmail);
        await page.fill('input[name=password]', '123456');
        await page.fill('input[name=rePass]', '123456');
        await page.click('input[type=submit]');

        // Wait for some time to ensure the dialog is triggered
        await page.waitForTimeout(1000);


    });
});