# Portfólio — Lorena Cardoso Sanches ✨

[![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-online-brightgreen.svg)](https://lorenacardososanches.github.io/Portfolio/)
[![Feito com](https://img.shields.io/badge/HTML5%20%2F%20CSS3%20%2F%20JS-100%25-blue.svg)](#tecnologias)

Portfólio pessoal com projetos, habilidades e contato. Design minimalista em roxo, com **fundo animado de estrelas**, **modo escuro/claro** e tipografia _Poppins_.

🔗 **Preview:** https://lorenacardososanches.github.io/Portfolio/

---

## ✨ Principais recursos

- Fundo **animado com Canvas** (estrelas com paralaxe e brilho).
- **Modo claro/escuro** com botão de alternância.
- **Typewriter** no subtítulo.
- Layout **responsivo** (mobile/desktop).
- Acessibilidade básica: respeita `prefers-reduced-motion`, labels/ARIA nos controles.
- Ícones via **Font Awesome**.
- **CV em PDF** (pasta `docs/`).

---

## 🗂 Estrutura do projeto

```
/
├── assets/
│   └── img/
│       └── profile.jpg
├── css/
│   └── style.css
├── js/
│   └── script.js
├── public/
│   └── icons/
├── docs/
│   └── Curriculo_Lorena_Cardoso_Sanches.pdf
├── index.html
├── favicon.ico
├── LICENSE
└── README.md
```

---

## 🚀 Como rodar localmente

### Opção 1 — Abrir direto

1. Baixe/clonar este repositório.
2. Abra o arquivo `index.html` no navegador.

### Opção 2 — Live Server (recomendado)

1. Instale a extensão **Live Server** no VS Code.
2. Clique com o botão direito em `index.html` → **Open with Live Server**.

---

## 🛠️ Customização rápida

- **Cores/Tema:** edite as variáveis em `css/style.css` (`:root` e `.light-mode`).
- **Texto/Seções:** atualize o conteúdo em `index.html` (Intro, Projetos, Habilidades, Contato).
- **Ícone do tema:** arquivo em `public/icons/` (sol/lua).
- **Imagem de perfil:** troque `assets/img/profile.jpg`.
- **Currículo:** substitua o PDF em `docs/` e atualize o link no HTML, se necessário.

---

## 📦 Tecnologias

- **HTML5** — estrutura e semântica.
- **CSS3** — layout responsivo, variáveis de tema.
- **JavaScript** — animação (Canvas), typewriter e alternância de tema.
- **Font Awesome** — ícones.
- **Google Fonts (Poppins)** — tipografia.

---

## 🗺️ Roadmap

### 1) Essenciais

- [ ] **Persistência de tema** com `localStorage` (tema mantém após recarregar).
- [ ] **Acessibilidade base**: navegação por teclado, foco visível, contraste adequado.

### 2) Seção “Projetos”

- [ ] **Carrossel horizontal** de cards, simples e minimalista, com suporte a arraste e setas.
- [ ] **Filtros por tags** (ex.: HTML, CSS, JS, React) sem recarregar a página.
- [ ] **Animações leves** (fade/slide) ao entrar em tela, respeitando `prefers-reduced-motion`.

### 3) Polimento

- [ ] **Performance**: imagens `lazy`, fontes otimizadas, CSS/JS leves.
- [ ] **Qualidade/Acessibilidade**: avaliação Lighthouse/axe ≥ 95.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙋‍♀️ Contato

- **LinkedIn:** https://www.linkedin.com/in/lorena-cardoso-sanches/
- **E-mail:** lorena.cardoso.s@outlook.com

---
