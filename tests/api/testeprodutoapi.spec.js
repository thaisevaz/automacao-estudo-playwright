import { test, expect } from '@playwright/test';

test.describe('API - Produtos', () => {

  test('deve listar produtos com sucesso', async ({ request }) => {

    // faço a requisição GET para buscar produtos
    const response = await request.get('https://fakestoreapi.com/products');

    // valido se respondeu com sucesso
    expect(response.status()).toBe(200);

    // converto a resposta para JSON
    const body = await response.json();

    // verifico se veio pelo menos um produto
    expect(body.length).toBeGreaterThan(0);

    // valido estrutura básica do produto
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('price');
  });


  test('deve retornar erro ao acessar endpoint inexistente', async ({ request }) => {

    // chamada para endpoint inválido
    const response = await request.get('https://fakestoreapi.com/produtos-errado');

    // valido que não retornou sucesso
    expect(response.status()).not.toBe(200);
  });


  test('deve garantir que preço do produto é válido', async ({ request }) => {

    const response = await request.get('https://fakestoreapi.com/products');

    const body = await response.json();

    // verifico se existe algum produto com preço inválido
    const produtosInvalidos = body.filter(p => p.price <= 0);

    expect(produtosInvalidos.length).toBe(0);
  });

});