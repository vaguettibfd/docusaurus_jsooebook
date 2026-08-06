# 📚 Exercício de Fixação 08 – Laços de Repetição

## 🎯 Contexto do Problema

Uma escola deseja desenvolver um pequeno sistema para exibir a lista de estudantes matriculados em uma turma.

Os nomes dos estudantes serão armazenados em um array, e diferentes laços de repetição deverão ser utilizados para percorrer essa coleção de dados.

Seu objetivo será implementar cada uma das estruturas de repetição estudadas neste capítulo e comparar seu funcionamento.

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade, você deverá ser capaz de:

- utilizar os laços `for`, `while`, `do...while` e `for...of`;
- percorrer arrays utilizando diferentes estruturas de repetição;
- utilizar a propriedade `length`;
- controlar variáveis de repetição;
- identificar a estrutura mais adequada para cada situação.

---

# 📖 Conteúdos Trabalhados

- Laço `for`
- Laço `while`
- Laço `do...while`
- Laço `for...of`
- Arrays
- Propriedade `length`
- Variáveis de controle
- Template Strings
- `console.log()`

---

# 📁 Estrutura do Projeto

```text
projeto/

    repeticao.js
```

---

# 🧩 Parte 1 – Criando o Array

Crie um array chamado:

```javascript
alunos
```

Inicialize o vetor com os seguintes nomes:

```text
Ana
Bruno
Carlos
Daniela
Eduardo
Fernanda
Gabriel
```

Em seguida, exiba todo o conteúdo utilizando:

```javascript
console.log()
```

---

# 🧩 Parte 2 – Utilizando o Laço `for`

Percorra o array utilizando um laço `for`.

Exiba as informações no formato:

```text
Aluno 1: Ana

Aluno 2: Bruno

Aluno 3: Carlos
...
```

Utilize a variável de índice para indicar a posição de cada estudante.

---

# 🧩 Parte 3 – Utilizando o Laço `while`

Percorra novamente o array utilizando um laço `while`.

O resultado deverá ser exatamente o mesmo da Parte 2.

Lembre-se de:

- inicializar a variável de controle;
- atualizar seu valor ao final de cada repetição.

---

# 🧩 Parte 4 – Utilizando o Laço `do...while`

Repita o mesmo percurso utilizando um laço `do...while`.

Observe que essa estrutura executa o bloco antes de verificar a condição.

---

# 🧩 Parte 5 – Utilizando o Laço `for...of`

Percorra o array utilizando:

```javascript
for...of
```

Exiba apenas o nome de cada estudante.

Exemplo:

```text
Aluno: Ana

Aluno: Bruno

Aluno: Carlos
```

Observe que, nessa estrutura, não é necessário utilizar índices.

---

# 🧪 Parte 6 – Comparando os Laços

Após executar todos os exemplos, responda:

- Qual laço apresentou o código mais simples?
- Em qual deles foi necessário utilizar uma variável de controle?
- Qual deles executa o bloco pelo menos uma vez?
- Em qual estrutura não foi necessário utilizar índices?

---

# ⭐ Desafio Extra 1

Utilizando um laço `for`, exiba apenas os estudantes que ocupam posições pares do array.

Exemplo:

```text
Aluno 2: Bruno

Aluno 4: Daniela

Aluno 6: Fernanda
```

---

# ⭐ Desafio Extra 2

Utilizando um laço `while`, percorra o array no sentido inverso.

Resultado esperado:

```text
Gabriel

Fernanda

Eduardo

Daniela

Carlos

Bruno

Ana
```

---

# ⭐⭐ Desafio Avançado

Crie um segundo array chamado:

```javascript
aprovados
```

Percorra o array `alunos` utilizando `for...of`.

Copie para `aprovados` apenas os estudantes cujos nomes possuem mais de cinco caracteres.

Ao final, exiba os dois arrays.

---

# 📌 Questões Teóricas

### 1) Qual a principal diferença entre os laços `for` e `while`?

---

### 2) Em qual situação o laço `do...while` é mais indicado?

---

### 3) Qual a vantagem do laço `for...of` quando trabalhamos com arrays?

---

### 4) Para que serve a propriedade:

```javascript
length
```

---

### 5) O que acontece se esquecermos de atualizar a variável de controle em um laço `while`?

---

### 6) Qual estrutura você considera mais adequada para percorrer um array? Justifique sua resposta.

---

### 7) Em quais situações é necessário utilizar o índice dos elementos de um array?

---

# 📌 Critérios de Avaliação

| Critério | Pontos |
|-----------|:------:|
| Utilização correta do laço `for` | 1,5 |
| Utilização correta do laço `while` | 1,5 |
| Utilização correta do laço `do...while` | 1,5 |
| Utilização correta do laço `for...of` | 1,5 |
| Organização do código | 1,0 |
| Desafios propostos | 1,5 |
| Questões teóricas | 1,5 |

**Total: 10,0 pontos**

---

# 💡 Dicas

- Desenvolva cada parte separadamente.
- Execute o programa após concluir cada laço.
- Compare as saídas produzidas por cada estrutura.
- Utilize a propriedade `length` sempre que precisar percorrer um array por índices.
- Utilize `for...of` quando o objetivo for acessar apenas os elementos do array, sem necessidade de conhecer suas posições.

---

# 🚀 Desafio Final

Implemente um programa que permita ao usuário escolher qual laço de repetição será utilizado para percorrer o array.

Exemplo:

```text
1 - for

2 - while

3 - do...while

4 - for...of
```

De acordo com a opção escolhida, o programa deverá executar a estrutura correspondente e exibir todos os estudantes cadastrados.