export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async iniciarCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async preencherDados(nome, sobrenome, cep) {
    await this.page.fill(this.firstName, nome);
    await this.page.fill(this.lastName, sobrenome);
    await this.page.fill(this.postalCode, cep);
  }

  async finalizarCompra() {
    await this.page.click(this.continueButton);
    await this.page.click(this.finishButton);
  }

  async mensagemSucesso() {
    return this.page.locator(this.successMessage);
  }
}