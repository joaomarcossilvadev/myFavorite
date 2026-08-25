# 🎬 My Favorite

Aplicação web desenvolvida durante o desafio **#7DaysOfCode com JavaScript**, com o objetivo de praticar conceitos fundamentais e intermediários de desenvolvimento Front-end através da construção de uma aplicação real consumindo a API do **The Movie Database (TMDB)**.

O projeto permite visualizar filmes populares, pesquisar títulos específicos, favoritar e desfavoritar filmes e manter os favoritos armazenados no navegador utilizando `localStorage`.

## 🌐 Projeto no ar

🚀 **Acesse a aplicação:**

https://my-favorite-nine.vercel.app/

---

## 📸 Sobre o projeto

O **My Favorite** é uma aplicação de catálogo de filmes que utiliza dados reais fornecidos pela API do TMDB.

Ao acessar a página, os filmes populares são carregados automaticamente.

O usuário também pode pesquisar um filme específico através da barra de pesquisa, adicionar títulos aos favoritos e filtrar a aplicação para visualizar apenas os filmes favoritados.

Os favoritos permanecem salvos mesmo após atualizar ou fechar o navegador graças ao uso do `localStorage`.

---

## ✨ Funcionalidades

* 🎬 Listagem de filmes populares
* 🔎 Pesquisa de filmes por nome
* ⭐ Exibição da avaliação dos filmes
* 🖼️ Exibição dos pôsteres através do TMDB
* 📅 Exibição do ano de lançamento
* 📝 Exibição da descrição dos filmes
* ❤️ Favoritar filmes
* 🤍 Desfavoritar filmes
* 💾 Persistência dos favoritos com `localStorage`
* ✅ Filtro para mostrar somente filmes favoritos
* 🔄 Renderização dinâmica através do JavaScript
* 🌐 Consumo de API utilizando `fetch`
* 🔐 Token do TMDB protegido no servidor
* ☁️ Deploy realizado na Vercel

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* Async/Await
* LocalStorage
* ES Modules
* TMDB API
* Vercel
* Vercel Functions

---

## 🧠 Conceitos praticados

Durante o desenvolvimento foram utilizados diversos conceitos importantes de JavaScript:

* Manipulação do DOM
* Eventos
* `addEventListener`
* Funções
* Arrays
* Objetos
* Laços de repetição
* Condicionais
* Template Strings
* `JSON.stringify()`
* `JSON.parse()`
* `localStorage`
* Requisições HTTP
* `fetch()`
* Promises
* `async/await`
* Tratamento de erros com `try/catch`
* ES Modules
* `import`
* `export`
* Separação de responsabilidades
* Consumo de API REST
* Funções Serverless

---

## 🗂️ Estrutura do projeto

```text
myFavorite/
│
├── api/
│   └── movies.js
│
├── images/
│   ├── Heart.svg
│   ├── heart-full.svg
│   ├── search-icon.svg
│   └── Star.svg
│
├── scripts/
│   ├── api.js
│   ├── main.js
│   ├── storage.js
│   └── ui.js
│
├── index.html
├── style.css
├── .gitignore
└── README.md
```

---

## 🏗️ Organização do JavaScript

No último dia do desafio, o código foi refatorado para separar as responsabilidades da aplicação.

### `api.js`

Responsável pela comunicação entre o Front-end e a API interna da aplicação.

```text
Front-end
   ↓
scripts/api.js
   ↓
/api/movies
```

### `movies.js`

Função server-side executada pela Vercel.

Ela recebe as solicitações do Front-end e realiza a comunicação com o TMDB utilizando o token armazenado como variável de ambiente.

```text
Navegador
   ↓
/api/movies
   ↓
Vercel Function
   ↓
TMDB API
```

Dessa forma, o token não precisa ficar diretamente exposto no código JavaScript enviado ao navegador.

### `storage.js`

Responsável pelas operações relacionadas ao `localStorage`.

Entre elas:

* Buscar filmes favoritos
* Salvar favoritos
* Remover favoritos
* Verificar se um filme já está favoritado

### `ui.js`

Responsável pela interface da aplicação.

Nele estão as funções utilizadas para:

* Criar cards
* Renderizar filmes
* Atualizar o botão de favorito
* Mostrar mensagens para o usuário

### `main.js`

Responsável por controlar o funcionamento geral da aplicação.

Ele conecta:

```text
Eventos
  +
API
  +
LocalStorage
  +
Interface
```

---

## 🌐 API utilizada

O projeto utiliza a API do:

**The Movie Database — TMDB**

Os filmes populares são obtidos através da rota:

```text
/movie/popular
```

Enquanto as pesquisas utilizam:

```text
/search/movie
```

---

## 🔎 Pesquisa de filmes

Quando o usuário digita um filme na barra de pesquisa:

```text
Usuário pesquisa
       ↓
JavaScript captura o texto
       ↓
searchMovies()
       ↓
API interna da aplicação
       ↓
TMDB
       ↓
resultados
       ↓
renderMovies()
```

Os resultados são então renderizados dinamicamente na página.

---

## ❤️ Sistema de favoritos

Ao clicar em **Favoritar**, o filme é armazenado no navegador.

```text
Clique no coração
       ↓
verifica se está favoritado
       ↓
adiciona ou remove
       ↓
localStorage
       ↓
atualiza o coração
```

Os dados permanecem disponíveis mesmo após recarregar a página.

---

## 💾 LocalStorage

Os filmes favoritos são transformados em JSON antes de serem armazenados:

```javascript
JSON.stringify(movies)
```

Quando a aplicação precisa recuperar os dados:

```javascript
JSON.parse(localStorage.getItem("favorites"))
```

---

## 🔐 Proteção do token da API

O token utilizado para acessar o TMDB não fica diretamente no Front-end.

A aplicação utiliza uma **Vercel Function**:

```text
api/movies.js
```

O token é armazenado como variável de ambiente:

```text
TMDB_TOKEN
```

e acessado no servidor através de:

```javascript
process.env.TMDB_TOKEN
```

---

## 🚀 Deploy

A aplicação está hospedada na **Vercel**.

🔗 https://my-favorite-nine.vercel.app/

---

## 📚 Jornada do #7DaysOfCode

### Dia 1

Criação inicial dos filmes utilizando HTML.

### Dia 2

Criação dinâmica dos cards através da manipulação do DOM.

### Dia 3

Consumo da API do TMDB utilizando `fetch` e `async/await`.

### Dia 4

Implementação da pesquisa de filmes.

### Dia 5

Implementação dos favoritos e persistência utilizando `localStorage`.

### Dia 6

Filtro para mostrar somente os filmes favoritos.

### Dia 7

Refatoração do projeto e separação do código de acordo com suas responsabilidades.

---

## 🎯 Objetivo

Este projeto teve como principal objetivo colocar em prática conhecimentos de JavaScript através de uma aplicação completa e funcional.

Mais do que apenas desenvolver as funcionalidades, o desafio também permitiu praticar conceitos importantes de organização e arquitetura de código.

---

## 👨‍💻 Autor

Desenvolvido por **João Marcos Silva Teixeira** durante o desafio **#7DaysOfCode**.

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!
