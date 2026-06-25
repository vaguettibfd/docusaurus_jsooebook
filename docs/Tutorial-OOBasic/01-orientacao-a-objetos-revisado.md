# 📘 Orientação a Objetos (Declaração e Uso)

## Introdução

Observe o seguinte código de exemplo relativo à declaração de classes e
sua utilização em JavaScript.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `Pessoa.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
02 // Arquivo criado dentro da pasta "objetos" do projeto
03 // não deve executar o arquivo diretamente com node

04 class Pessoa {

05   constructor(peso, altura) {
06     this.peso = peso;
07     this.altura = altura;
08   }

09   imc() { // índice de massa corpórea
10     let imc = this.peso / (this.altura * this.altura);
11     return imc;
12   }

13 }

14 module.exports = Pessoa;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--03

Os comentários apresentam o nome do arquivo, sua localização no projeto
e informam que a classe não deve ser executada diretamente pelo Node.js.

### Linha 04

Declara a classe `Pessoa`.

### Linhas 05--08

Declara o construtor da classe, responsável por inicializar os atributos
`peso` e `altura` utilizando a palavra-chave `this`.

### Linhas 09--12

Declara o método `imc()`, responsável por calcular o Índice de Massa
Corporal (IMC) utilizando a fórmula:

**IMC = peso ÷ (altura × altura)**

O resultado é retornado pela instrução `return`.

### Linhas 13--14

Encerra a definição da classe e exporta a classe `Pessoa` utilizando
`module.exports`.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `usaPessoa.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado usaPessoa.js
02 // Para executar utilize: node ./objetos/usaPessoa.js

03 const Pessoa = require('./Pessoa.js');

04 const joao = new Pessoa(80, 1.75);
05 console.log(joao.imc());

06 const pedro = new Pessoa();
07 pedro.peso = 100;
08 pedro.altura = 1.6;

09 console.log(pedro.imc());
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--02

Apresentam informações sobre o arquivo e o comando utilizado para
executá-lo.

### Linha 03

Importa a classe `Pessoa` utilizando a função `require()`.

### Linhas 04--05

Cria o objeto `joao`, inicializa seus atributos pelo construtor e exibe
o IMC calculado.

### Linhas 06--08

Cria o objeto `pedro` e define seus atributos diretamente.

### Linha 09

Calcula e exibe o IMC do objeto `pedro`.

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  Conceito         Explicação
  ---------------- -----------------------------------
  class            Estrutura para criação de objetos
  constructor      Inicializa atributos da classe
  this             Referência ao objeto atual
  Método           Função associada a uma classe
  module.exports   Exportação de classe
  require()        Importação de módulo
  new              Criação de instância (objeto)
  Propriedades     Atributos do objeto

------------------------------------------------------------------------

## 💡 Dicas do Professor

-   Classes iniciam com letra maiúscula (`Pessoa`).
-   Objetos iniciam com letra minúscula (`joao`, `pedro`).
-   Prefira encapsular comportamentos em métodos.
-   Evite acessar atributos diretamente sem validação em projetos
    maiores.

------------------------------------------------------------------------

## 🔗 Links Complementares

-   https://youtu.be/Ah4b0Cj1c6E

------------------------------------------------------------------------

## 📚 Exercícios de Fixação

-   https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/orientacao_objetos
