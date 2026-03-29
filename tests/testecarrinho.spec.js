import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test('deve adicionar produto ao carrinho', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.acessarSite();
  await login.fazerLogin('standard_user', 'secret_sauce');

  await inventory.adicionarProduto();
  await inventory.acessarCarrinho();

  await expect(await inventory.itensNoCarrinho()).toHaveCount(1);
});