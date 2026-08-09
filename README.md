# 📘 JavaScript Orientado a Objetos

> **Da Prática à Teoria**

Este repositório contém o código-fonte e os materiais do e-book **JavaScript Orientado a Objetos**, desenvolvido com [Docusaurus](https://docusaurus.io/).

O material foi organizado com uma abordagem progressiva, partindo dos fundamentos da linguagem JavaScript e avançando para os principais conceitos da **Programação Orientada a Objetos (POO)**, sempre buscando relacionar conceitos teóricos com exemplos práticos de implementação.

## 🌐 Acesse o E-book

O e-book está disponível on-line em:

**https://js-oo-ebook.vercel.app/**

---

## 📚 Organização do Conteúdo

O conteúdo está estruturado em cinco seções principais:

### 1. Fundamentos de JS

Apresenta conceitos fundamentais necessários para o desenvolvimento dos exemplos utilizados ao longo do e-book.

Entre os conteúdos abordados estão:

* Variáveis e atribuição;
* Operadores aritméticos;
* Funções;
* Módulos.

### 2. Fundamentos de OO

Introduz e desenvolve os principais conceitos relacionados à Programação Orientada a Objetos utilizando JavaScript.

São abordados conteúdos como:

* Classes e objetos;
* Atributos e métodos;
* Visibilidade;
* Encapsulamento;
* Herança;
* Sobrescrita;
* Operadores de comparação;
* Operadores lógicos;
* Relacionamentos entre classes.

### 3. JS Complementos

Apresenta recursos da linguagem JavaScript utilizados para complementar os conteúdos desenvolvidos ao longo do material.

Atualmente, esta seção contempla:

* Arrays;
* Laços de repetição.

### 4. Exercícios de Fixação

Reúne atividades práticas relacionadas aos conteúdos estudados.

Os exercícios permitem aplicar progressivamente conceitos de:

* Programação estruturada;
* Orientação a objetos;
* Visibilidade e encapsulamento;
* Herança;
* Condicionais;
* Arrays;
* Laços de repetição;
* Relacionamentos entre classes.

### 5. Exercícios Integradores

Apresenta problemas mais abrangentes que integram diferentes conceitos estudados no e-book.

O objetivo é permitir que o estudante utilize, em uma mesma solução, diferentes recursos da linguagem JavaScript e da Programação Orientada a Objetos.

---

## 🎯 Objetivo

O e-book tem como objetivo apoiar o processo de aprendizagem de **JavaScript e Programação Orientada a Objetos**, utilizando exemplos progressivos e atividades práticas.

A organização do material busca favorecer uma sequência de aprendizagem baseada em:

**conceito → exemplo → implementação → exercício → integração**

Dessa forma, o estudante pode acompanhar a evolução dos conteúdos e aplicar os conceitos apresentados em diferentes situações.

---

## 🗂️ Estrutura do Repositório

A estrutura principal do projeto está organizada da seguinte forma:

```text
docusaurus_jsooebook/
│
├── docs/
│   ├── frontmatter/
│   ├── tutorial-JSBasic/
│   ├── Tutorial-OOBasic/
│   ├── tutorial-JSExtras/
│   ├── tutorial-exercicios/
│   └── tutorial-exercicio-integrador/
│
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
│
├── static/
│   └── img/
│
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

### Principais diretórios

| Diretório                            | Finalidade                                   |
| ------------------------------------ | -------------------------------------------- |
| `docs/frontmatter`                   | Elementos introdutórios e índice do e-book   |
| `docs/tutorial-JSBasic`              | Fundamentos da linguagem JavaScript          |
| `docs/Tutorial-OOBasic`              | Conteúdos de Programação Orientada a Objetos |
| `docs/tutorial-JSExtras`             | Conteúdos complementares de JavaScript       |
| `docs/tutorial-exercicios`           | Exercícios de fixação                        |
| `docs/tutorial-exercicio-integrador` | Exercícios integradores                      |
| `src/pages`                          | Páginas personalizadas do site               |
| `src/css`                            | Personalização visual                        |
| `static/img`                         | Imagens e demais recursos estáticos          |

---

## 🛠️ Tecnologias

O projeto utiliza principalmente:

* **JavaScript**
* **React**
* **Docusaurus 3**
* **Markdown / MDX**
* **Node.js**
* **Yarn**
* **Vercel**

---

## 💻 Executando o Projeto Localmente

### Pré-requisitos

É necessário possuir Node.js e Yarn instalados.

Clone o repositório:

```bash
git clone https://github.com/vaguettibfd/docusaurus_jsooebook.git
```

Acesse o diretório:

```bash
cd docusaurus_jsooebook
```

Instale as dependências:

```bash
yarn install
```

Execute o ambiente de desenvolvimento:

```bash
yarn start
```

O Docusaurus iniciará um servidor local para visualização e desenvolvimento do e-book.

---

## 🏗️ Gerando o Build

Para gerar a versão de produção:

```bash
yarn build
```

Os arquivos estáticos serão gerados no diretório:

```text
build/
```

É possível testar localmente a versão gerada utilizando:

```bash
yarn serve
```

---

## ✍️ Adicionando Conteúdo

Os conteúdos didáticos são escritos principalmente em **Markdown (`.md`)** e armazenados dentro do diretório `docs`.

Ao adicionar um novo conteúdo, é importante observar:

1. A seção à qual o material pertence;
2. O nome e a localização do arquivo;
3. O `front matter` utilizado pelo Docusaurus;
4. A ordem de apresentação dos conteúdos;
5. Os links internos entre documentos;
6. A configuração do `sidebars.js`.

Exemplo de front matter:

```md
---
sidebar_position: 1
title: Título do Conteúdo
---
```

---

## 🧭 Navegação

A navegação principal do e-book é controlada pelo arquivo:

```text
sidebars.js
```

O menu está organizado nas categorias:

```text
Fundamentos de JS
Fundamentos de OO
JS Complementos
Exercícios de Fixação
Exercícios Integradores
```

Novas categorias ou alterações na organização do material devem considerar essa estrutura.

---

## 🚀 Publicação

A versão on-line do projeto é publicada utilizando a **Vercel**, integrada ao repositório GitHub.

Alterações enviadas para a branch utilizada na publicação podem iniciar automaticamente um novo processo de build e deployment.

Durante o build, o Docusaurus também verifica problemas como links internos inexistentes. Recomenda-se executar:

```bash
yarn build
```

antes de publicar alterações significativas.

---

## 📖 Sobre o Projeto

Este repositório faz parte de uma iniciativa de produção de material didático para o ensino de **JavaScript e Programação Orientada a Objetos**, buscando combinar explicação conceitual, exemplos de código e atividades práticas em uma sequência progressiva de aprendizagem.

O conteúdo encontra-se em desenvolvimento e poderá receber novos capítulos, exemplos, exercícios e recursos didáticos.

---

## 👨‍💻 Autor

**Leandro Vaguetti**

GitHub: [@vaguettibfd](https://github.com/vaguettibfd)

---

## 🔗 Links

* **E-book:** https://js-oo-ebook.vercel.app/
* **Repositório:** https://github.com/vaguettibfd/docusaurus_jsooebook
* **Docusaurus:** https://docusaurus.io/
