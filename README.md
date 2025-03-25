# User Search

User Search é uma aplicação desenvolvida com Nuxt 3 que busca e exibe uma lista de usuários da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/users). Cada usuário possui sua própria página de detalhes, exibindo suas informações de forma organizada.  

## Tecnologias Utilizadas

- **Nuxt 3** – Framework baseado em Vue 3 para SSR/SSG
- **Vue 3** – Biblioteca para criação de interfaces reativas
- **SCSS** – Pré-processador CSS para estilização
- **$fetch** – API nativa do Nuxt 3 para requisições HTTP

## Funcionalidades

- **Listagem Responsiva:** Exibe os usuários em uma grade com no máximo 5 itens por linha.
- **Rotas Dinâmicas:** Cada usuário tem uma página de detalhes (ex: `/users/1`).

## Instalação e Execução

1. Clone o repositório e instale as dependências:

   ```bash
   git clone https://github.com/nathanhenrick/user-search.git
   cd user-search
   npm install
   ```

2. Inicie o projeto em modo desenvolvimento:

   ```bash
   npm run dev
   ```

A aplicação estará disponível em [https://user-search-pi.vercel.app].

## Deploy

O projeto pode ser gerado como site estático (SSG) ou rodado como servidor Node.js (SSR):

- **Estático:**  
  ```bash
  npm run generate
  ```
- **SSR:**  
  ```bash
  npm run build
  npm run start
  ```

## Autor

Nathan Henrick Martempe Constantino
