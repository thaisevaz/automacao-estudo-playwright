import { test, expect } from '@playwright/test';

test.describe('API - Usuários', () => {

  test('deve criar usuário com sucesso', async ({ request }) => {

    // envio uma requisição POST simulando criação de usuário
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'Thaise',
        job: 'QA'
      }
    });

    // valido se o status retornado é de criação
    expect(response.status()).toBe(201);

    // pego o corpo da resposta
    const body = await response.json();

    // verifico se os dados enviados voltaram corretamente
    expect(body.name).toBe('Thaise');
    expect(body.job).toBe('QA');

    // valido se foi gerado um id
    expect(body).toHaveProperty('id');
  });


  test('deve lidar com criação de usuário sem dados', async ({ request }) => {

    // envio a requisição sem payload
    const response = await request.post('https://reqres.in/api/users', {
      data: {}
    });

    // essa API aceita vazio, então valido o comportamento
    expect(response.status()).toBe(201);
  });


  test('deve lidar com dados inválidos (tipo incorreto)', async ({ request }) => {

    // envio dados com tipo errado (número e boolean)
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 12345,
        job: true
      }
    });

    // API aceita, então valido o comportamento retornado
    expect(response.status()).toBe(201);

    const body = await response.json();

    // verifico como a API tratou os dados
    expect(body.name).toBe(12345);
    expect(body.job).toBe(true);
  });

});