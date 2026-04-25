# 🍔 DevBurger Interface

Bem-vindo ao **DevBurger Interface** – o frontend do sistema DevBurger, responsável pela experiência do usuário e do administrador da hamburgueria virtual.

---

## 📖 Descrição do Projeto

O **DevBurger Interface** é a aplicação frontend da hamburgueria virtual, desenvolvida para permitir que clientes naveguem pelo cardápio, adicionem produtos ao carrinho, realizem pagamentos e acompanhem pedidos.

Além disso, conta com uma área administrativa onde é possível gerenciar produtos e pedidos de forma prática.

O projeto consome a API do **DevBurger API**, integrando autenticação, gerenciamento de produtos e pagamentos online com Stripe.

---

## 🚀 Tecnologias Utilizadas

* **React.js** – biblioteca para construção da interface.
* **Vite** – ferramenta para build e desenvolvimento rápido.
* **React Router DOM** – gerenciamento de rotas.
* **Styled Components** – estilização dos componentes.
* **Material UI (MUI)** – componentes adicionais da interface.
* **React Hook Form** – gerenciamento de formulários.
* **Yup** – validação de formulários.
* **Axios** – consumo da API.
* **React Toastify** – notificações.
* **Stripe** – integração de pagamentos.
* **React Multi Carousel** – carrossel de produtos/categorias.
* **Context API** – gerenciamento de estado global (usuário e carrinho).

---

## ⚙️ Funcionalidades

✅ Cadastro de usuários
✅ Login com autenticação JWT
✅ Listagem de produtos
✅ Filtragem por categorias
✅ Carrinho de compras
✅ Finalização de pedidos
✅ Pagamento integrado com Stripe
✅ Área administrativa
✅ Cadastro de novos produtos
✅ Edição de produtos
✅ Gerenciamento de pedidos
✅ Interface responsiva e moderna

---

## 📂 Estrutura de Pastas

```bash
DEVBURGER-INTERFACE
├── public
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── containers
│   ├── hooks
│   ├── layouts
│   ├── routes
│   ├── services
│   ├── styles
│   ├── utils
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Como rodar o projeto localmente

### 📌 Pré-requisitos

* Node.js (versão 16+ recomendada)
* Git
* Backend DevBurger API rodando localmente

---

## 📥 Passo 1: Clonar o repositório

```bash
git clone https://github.com/JoaoMendss/devburger-interface.git
cd devburger-interface
```

---

## 📦 Passo 2: Instalar as dependências

Com npm:

```bash
npm install
```

Ou com yarn:

```bash
yarn
```

---

## ▶️ Passo 3: Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3001
VITE_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe
```

---

## ▶️ Passo 4: Iniciar o projeto

Com npm:

```bash
npm run dev
```

Ou com yarn:

```bash
yarn dev
```

O projeto estará disponível em:

```bash
http://localhost:5173
```

---

## 🔗 Integração com o Backend

Este projeto funciona em conjunto com o repositório **DevBurger API**.

---

Desenvolvido por **JoaoMendss** 🚀🔥
