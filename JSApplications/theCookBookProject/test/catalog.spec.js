import { chromium } from "playwright-chromium";
import { expect } from "chai";

// before
// beforeEach
// after
// afterEach

const homeURL = 'http://localhost:3000';
let browser;
let page;

before(async () => { browser = await chromium.launch({ headless: true, slowMo: 0 }); });
beforeEach(async () => { page = await browser.newPage(); });
after(async () => { await browser.close(); });
afterEach(async () => { await page.close(); });

describe('Home page', async () => {
    it('It should load the homepage catalog', async () => {
        await page.goto(homeURL);
        const isVisible = await page.isVisible('#home-section');
        expect(isVisible).to.be.true;
    });

    it('Should load details page', async () => {
        await page.goto(homeURL);
        await page.click('#home-section article:first-of-type');
        await page.waitForLoadState();
        const result = await page.isVisible('div.ingredients');

        expect(result).to.be.true;
    });
})








// TIMEOUT FLACKY TEST