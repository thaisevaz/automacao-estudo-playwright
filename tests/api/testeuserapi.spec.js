import { test, expect } from '@playwright/test';

test.describe('API - Usuários', () => {

  test('deve criar usuário com sucesso', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'Thaise',
        job: 'QA'
      }
    });

    // essa API responde 201 corretamente
    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe('Thaise');
  });

  test('deve lidar com criação de usuário sem dados', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {}
    });

    // continua sendo 201 mesmo vazio
    expect(response.status()).toBe(201);
  });

});