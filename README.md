Automação de testes E2E com Playwright

Este projeto foi desenvolvido como parte dos meus estudos em automação de testes end-to-end utilizando Playwright.
A ideia principal foi simular um fluxo real de usuário em um cenário de e-commerce, focando não apenas na execução 
dos testes, mas também na organização e clareza do código.

Objetivo

Praticar automação de testes de ponta a ponta validando comportamentos reais da aplicação, como autenticação e 
interação com o sistema.

Cenários automatizados

- Login com credenciais válidas
- Login com credenciais inválidas
- Adição de produto ao carrinho

Estrutura do projeto

O projeto foi organizado utilizando o padrão Page Object Model (POM), separando as responsabilidades entre:
- `pages/`: contém as abstrações das páginas e seus elementos
- `tests/`: contém os cenários de teste
Essa abordagem foi escolhida para facilitar manutenção, reutilização de código e legibilidade.

Tecnologias utilizadas

- Playwright
- JavaScript
- Node.js

Ambiente de teste

Para a implementação dos cenários, foi utilizado o site https://www.saucedemo.com/, que é uma aplicação voltada para testes 
de automação, simulando um fluxo de e-commerce.
