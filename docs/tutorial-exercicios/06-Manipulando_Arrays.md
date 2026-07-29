# 📚 Exercício de Fixação 06 -– Manipulação de Arrays

## 🎯 Contexto do Problema

Uma biblioteca deseja desenvolver um pequeno sistema para controlar os livros disponíveis em seu acervo.

Inicialmente, o sistema armazenará apenas os títulos dos livros utilizando um array. Durante a execução do programa será possível cadastrar novos livros, remover livros do acervo e consultar as informações armazenadas.

Seu objetivo será implementar esse sistema utilizando os principais métodos de manipulação de arrays estudados nesta apostila.

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade, o estudante deverá ser capaz de:

- criar arrays utilizando diferentes formas de inicialização;
- acessar elementos utilizando índices;
- adicionar elementos ao início e ao final de um array;
- remover elementos do início e do final de um array;
- utilizar a propriedade `length`;
- acessar dinamicamente o último elemento de um array;
- interpretar o comportamento dos métodos de manipulação de arrays.

---

# 📖 Conteúdos Trabalhados

- Arrays
- Índices
- Sintaxe Literal
- Construtor `Array()`
- Método `push()`
- Método `pop()`
- Método `shift()`
- Método `unshift()`
- Propriedade `length`

---

# Estrutura do Projeto

```text
projeto/
│
└── biblioteca.js
```

---

# 🧩 Parte 1 – Criando o Array

Crie um array chamado:

```javascript
livros
```

Inicialize o array com os seguintes títulos:

```text
Algoritmos
JavaScript
Banco de Dados
```

Exiba o conteúdo completo utilizando:

```javascript
console.log()
```

---

# 🧩 Parte 2 – Inserindo Novos Livros

Adicione os seguintes livros:

No final do array:

```text
Redes de Computadores
```

No início do array:

```text
Lógica de Programação
```

Após as inserções, exiba novamente o conteúdo do array.

---

# 🧩 Parte 3 – Consultando Informações

Exiba:

- o primeiro livro;
- o último livro;
- a quantidade de livros cadastrados.

Utilize a propriedade:

```javascript
length
```

para obter essas informações.

---

# 🧩 Parte 4 – Removendo Livros

Remova:

- o último livro utilizando `pop()`;
- o primeiro livro utilizando `shift()`.

Em seguida:

- exiba novamente o array;
- informe a nova quantidade de livros.

---

# 🧩 Parte 5 – Atualizando Informações

Altere o segundo elemento do array para:

```text
Programação Web
```

Exiba novamente todos os livros cadastrados.

---

# 🧪 Parte 6 – Testando o Programa

Ao final da execução, o programa deverá apresentar:

- array inicial;
- array após as inserções;
- primeiro livro;
- último livro;
- quantidade de livros;
- array após as remoções;
- array atualizado.

Utilize o comando:

```javascript
console.log()
```

para exibir cada etapa do processamento.

---

# ⭐ Desafio Extra 1

Cadastre mais três livros utilizando apenas o método:

```javascript
push()
```

Em seguida, exiba o novo tamanho do array.

---

# ⭐ Desafio Extra 2

Percorra todo o array utilizando um laço de repetição (`for`) e exiba cada livro no seguinte formato:

```text
Livro 1: Algoritmos

Livro 2: JavaScript

Livro 3: Banco de Dados
```

---

# ⭐⭐ Desafio Avançado

Crie um segundo array chamado:

```javascript
emprestados
```

Remova o último livro do array `livros` utilizando:

```javascript
pop()
```

Adicione esse livro ao array `emprestados` utilizando:

```javascript
push()
```

Ao final, exiba os dois arrays.

---

# 📌 Questões Teóricas

### 1) O que é um array?

---

### 2) Como os elementos de um array são organizados?

---

### 3) Qual a diferença entre:

```javascript
push()
```

e

```javascript
unshift()
```

---

### 4) Qual a diferença entre:

```javascript
pop()
```

e

```javascript
shift()
```

---

### 5) Para que serve a propriedade:

```javascript
length
```

---

### 6) Como acessar o último elemento de um array sem informar um índice fixo?

---

### 7) Por que utilizar arrays em vez de criar uma variável para cada informação?

---

# 📌 Critérios de Avaliação

| Critério | Pontos |
|-----------|:------:|
| Criação correta do array | 1,5 |
| Inserção de elementos | 1,5 |
| Consulta dos elementos | 1,5 |
| Remoção de elementos | 1,5 |
| Atualização de elementos | 1,5 |
| Arquivo de testes | 1,5 |
| Questões teóricas | 1,0 |

**Total: 10,0 pontos**

---

# 💡 Dicas

- Desenvolva o exercício por etapas.
- Execute o programa após concluir cada parte.
- Utilize `console.log()` para verificar o conteúdo do array após cada operação.
- Evite modificar várias partes do código simultaneamente.
- Observe como cada método altera a organização dos elementos no array.

---

# 🚀 Desafio Final

Implemente um menu simples utilizando:

```javascript
prompt()
```

ou

```javascript
readline()
```

com as seguintes opções:

```text
1 - Listar livros

2 - Adicionar livro

3 - Remover último livro

4 - Remover primeiro livro

5 - Exibir quantidade de livros

6 - Sair
```

Cada opção deverá executar a operação correspondente sobre o array de livros.