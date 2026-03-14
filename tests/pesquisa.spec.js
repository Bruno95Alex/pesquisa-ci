const { test, expect } = require('@playwright/test');

test('Pesquisa simples funciona', async ({ page }) => {
await page.goto('http://localhost:3000');

await page.fill('#pesquisa', 'GitHub Actions');
await page.click('text=Pesquisar');

await expect(page.locator('#resultado'))
.toHaveText('Você pesquisou: GitHub Actions');
});
