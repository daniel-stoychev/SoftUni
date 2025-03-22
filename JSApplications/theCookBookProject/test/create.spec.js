import { chromium } from "playwright-chromium";
import { expect } from "chai";

const homeURL = 'http://localhost:3000';
let browser;
let page;

before(async () => { browser = await chromium.launch({ headless: true, slowMo: 1 }); });
beforeEach(async () => { page = await browser.newPage(); });
after(async () => { await browser.close(); });
afterEach(async () => { await page.close(); });

describe('Create page', async () => {

    function generateUniqueString() {
        return Date.now();
    }

    async function userLogin(page) {
        page.goto(homeURL);
        await page.click('a[href="/login"]');
        await page.fill('input[name=email]', 'admin@abv.bg');
        await page.fill('input[name=password]', 'admin');
        await page.click('input[type=submit]');
    }

    async function recipeCreation() {
        const randomString = generateUniqueString();
        const ingredients = ['Water', 'Beans', 'Onion', 'Tomato', 'Chunrica'].join('\n');
        const steps = ['Boil water', 'Throw beans', 'Boil', 'Throw everything else', 'Boil', 'Make stakes'].join('\n');
        await userLogin(page);
        await page.click('a[href="/create"]');
        await page.fill('input[name=name]', `NewRecipe${randomString}`);
        await page.fill('input[name=img]', 'https://www.supichka.com/files/images/1554/fit_1400_933.jpg');
        await page.fill('textarea[name=ingredients]', ingredients);
        await page.fill('textarea[name=steps]', steps);
        await page.click('input[type=submit]');
        return page.locator(`article.preview:has(h2:has-text("NewRecipe${randomString}"))`);

    }

    it('Should create new recipe for logged in user', async () => {
        // await recipeTitleLocator.waitFor({ state: 'visible', timeout: 5000 });
        const recipeTitleLocator = await recipeCreation();
        await recipeTitleLocator.waitFor();
        expect(await recipeTitleLocator.isVisible()).to.be.true;
    });

    it('Should allow the author to see "Edit" and "Delete" buttons', async () => {
        const recipeTitleLocator = await recipeCreation();
        await recipeTitleLocator.waitFor();
        await recipeTitleLocator.click();
        const editBtn = page.locator('button:has-text("Edit")');
        const deleteBtn = page.locator('button:has-text("Delete")');
        await editBtn.waitFor();
        await deleteBtn.waitFor();
        expect(await editBtn.isVisible()).to.be.true;
        expect(await deleteBtn.isVisible()).to.be.true;
    });

    it('"edit" should load the correct article data for logged in user', async () => {
        const recipeTitleLocator = await recipeCreation();
        const articleTitle = await recipeTitleLocator.locator('h2').innerText();
        await recipeTitleLocator.click();

        const editBtn = page.locator('button:has-text("Edit")');
        editBtn.click();

        const nameField = page.locator('input[name=name]');
        expect(await nameField.inputValue()).to.equal(articleTitle);
    });

    it('"edit" should edit the recipe', async () => {
        const recipeTitleLocator = await recipeCreation();
        const articleTitle = await recipeTitleLocator.locator('h2').innerText();
        await recipeTitleLocator.click();

        const editBtn = await page.locator('button:has-text("Edit")');
        await editBtn.click();

        // Edit the recipe name to ensure it's different
        const newName = articleTitle + ' Edited';
        await page.fill('input[name=name]', newName);
        await page.click('input[type=submit]');

        // Verify the new name is displayed
        const newNameField = await page.locator('h2').innerText();
        expect(await newNameField).to.equal(newName);

    });

    it('"delete" should delete the recipe', async () => {
        const recipeTitleLocator = await recipeCreation();
        await recipeTitleLocator.click();

        const deleteBtn = await page.locator('button:has-text("Delete")');
        await deleteBtn.click();

        const deletedMsg = await page.locator('article:has(h2:has-text("Recipe deleted"))');
        expect(await deletedMsg.isVisible()).to.be.true;
    });


});