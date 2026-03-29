import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { checkoutData } from '../data/checkoutData';

test('deve finalizar compra com sucesso', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.acessarSite();
  await login.fazerLogin('standard_user', 'secret_sauce');

  await inventory.adicionarProduto();
  await inventory.acessarCarrinho();

  await checkout.iniciarCheckout();
  
  const usuario = checkoutData.usuarioValido;

  await checkout.preencherDados(
  usuario.nome,
  usuario.sobrenome,
  usuario.cep
  );
  await checkout.finalizarCompra();

  await expect(checkout.mensagemSucesso()).toHaveText('Thank you for your order!');
});