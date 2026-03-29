import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('deve permitir acesso com credenciais válidas', async ({ page }) => {
  const login = new LoginPage(page);

  await login.acessarSite();
  await login.fazerLogin('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('deve mostrar erro de credenciais inválidas', async ({ page }) => {
  const login = new LoginPage(page);

  await login.acessarSite();
  await login.fazerLogin('usuario_errado', 'senha_errada');

  await expect(await login.mensagemErro()).toBeVisible();
});