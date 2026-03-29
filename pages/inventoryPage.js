export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = '.inventory_item button';
    this.cartIcon = '.shopping_cart_link';
    this.cartItem = '.cart_item';
  }

  async adicionarProduto() {
    await this.page.click(this.addToCartButton);
  }

  async acessarCarrinho() {
    await this.page.click(this.cartIcon);
  }

  async itensNoCarrinho() {
    return this.page.locator(this.cartItem);
  }
}
