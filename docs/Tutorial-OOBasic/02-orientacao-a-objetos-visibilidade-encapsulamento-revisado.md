# 📘 Orientação a Objetos -- Visibilidade e Encapsulamento (Declaração e Uso)

## Introdução

Observe o seguinte código de exemplo relativo à declaração da classe
**Aluno**, definição da visibilidade de atributos e métodos, bem como os
objetivos do encapsulamento.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `Aluno.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
02 // Arquivo criado dentro de uma pasta /objetos/escola na raiz do projeto
03 // Objetivo do exemplo: demonstrar conceitos de visibilidade e encapsulamento

04 class Aluno {

05   #matricula; // atributo privado
06   #curso;     // atributo privado
07   escola;     // atributo público

08   setMatricula(matricula) {
09     this.#matricula = matricula;
10   }

11   getMatricula() {
12     return this.#matricula;
13   }

14   setCurso(curso) {
15     this.#curso = curso;
16   }

17   getCurso() {
18     return this.#curso;
19   }

20 }

21 module.exports = Aluno;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--03

Apresentam informações gerais sobre o arquivo, sua localização no
projeto e o objetivo do exemplo.

### Linha 04

Declara a classe `Aluno`.

### Linhas 05--07

Declaram os atributos da classe, sendo `#matricula` e `#curso` privados
e `escola` público.

### Linhas 08--10

Declaram o método `setMatricula()`, responsável por atribuir um valor ao
atributo privado `#matricula`.

### Linhas 11--13

Declaram o método `getMatricula()`, responsável por retornar o valor
armazenado no atributo `#matricula`.

### Linhas 14--16

Declaram o método `setCurso()`, responsável por atribuir um valor ao
atributo privado `#curso`.

### Linhas 17--19

Declaram o método `getCurso()`, responsável por retornar o valor
armazenado no atributo `#curso`.

### Linhas 20--21

Encerram a definição da classe e exportam o módulo para reutilização.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `usaAluno.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado usaAluno.js
02 // Para executar: node ./objetos/usaAluno.js

03 const Aluno = require('./escola/Aluno');

04 const joao = new Aluno();

05 // joao.#matricula = 1234; // ERRO

06 joao.escola = "IFB";
07 joao.setMatricula(12345);
08 joao.setCurso("Programação de FrontEnd");

09 console.log(joao.getMatricula());
10 console.log(joao.getCurso());
11 console.log(`Escola : ${joao.escola}`);
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--02

Apresentam informações sobre o arquivo e o comando de execução.

### Linha 03

Importa a classe `Aluno`.

### Linha 04

Cria uma instância da classe `Aluno`.

### Linha 05

Demonstra uma tentativa de acesso direto a um atributo privado,
resultando em erro.

### Linhas 06--08

Atribuem valores ao atributo público `escola` e aos atributos privados
por meio dos métodos `set`.

### Linhas 09--11

Exibem no terminal os valores armazenados utilizando os métodos `get` e
o atributo público.

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  Conceito          Explicação
  ----------------- -----------------------------------
  class             Estrutura para criação de objetos
  #atributo         Atributo privado (ES2022+)
  Encapsulamento    Protege dados e controla acesso
  Visibilidade      Público x Privado
  set / get         Métodos de acesso
  module.exports    Exportação de classe
  require()         Importação de módulo
  new               Criação de instância
  Template string   Interpolação com `${}`

------------------------------------------------------------------------

## 💡 Dicas do Professor

-   Use atributos privados para proteger dados sensíveis.
-   Sempre acesse dados privados por meio de getters e setters.
-   ES2022+ introduziu `#` para atributos privados.
-   Prefira template strings para concatenação.

------------------------------------------------------------------------

## 🔗 Links Complementares

-   https://youtu.be/Ah4b0Cj1c6E

------------------------------------------------------------------------

## 📚 Exercícios de Fixação

-   https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/visibilidade_encapsulamento
