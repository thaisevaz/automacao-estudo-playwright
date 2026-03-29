export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async acessarSite() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fazerLogin(usuario, senha) {
    await this.page.fill(this.usernameInput, usuario);
    await this.page.fill(this.passwordInput, senha);
    await this.page.click(this.loginButton);
  }

  async mensagemErro() {
    return this.page.locator(this.errorMessage);
  }
}
