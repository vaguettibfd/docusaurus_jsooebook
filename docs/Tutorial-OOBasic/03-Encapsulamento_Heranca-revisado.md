# 📘 Orientação a Objetos -- Encapsulamento (+ Condicional) e Herança (Declaração e Uso)

## Introdução

Observe o seguinte código de exemplo relativo à declaração da classe
**Pessoa**, definição da visibilidade de atributos e métodos, bem como
as condicionais implementadas para prover o devido encapsulamento dos
atributos.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `Pessoa.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
02 // Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
03 // Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais

04 class Pessoa {

05   #nome;
06   #email;

07   setNome(nome) {
08     if (nome) {
09       this.#nome = nome;
10       return true;
11     } else {
12       return false;
13     }
14   }

15   getNome() {
16     return this.#nome;
17   }

18   setEmail(email) {
19     if (email) {
20       this.#email = email;
21       return true;
22     } else {
23       return false;
24     }
25   }

26   getEmail() {
27     return this.#email;
28   }

29 }

30 module.exports = Pessoa;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--03

Apresentam informações gerais sobre o arquivo, indicando seu nome,
localização no projeto e o objetivo do exemplo: demonstrar a utilização
do encapsulamento aliado a estruturas condicionais para validação dos
dados.

### Linha 04

Declara a classe `Pessoa`, responsável por representar um objeto que
possui atributos privados e métodos públicos para acesso controlado a
esses atributos.

### Linhas 05--06

Declaram dois atributos privados da classe.

Esses atributos somente podem ser acessados pelos métodos internos da
própria classe, implementando o conceito de encapsulamento.

### Linhas 07--14

Declaram o método `setNome()`, responsável por atribuir um valor ao
atributo privado `#nome`.

Antes de realizar a atribuição, o método verifica se o parâmetro
recebido possui um valor válido.

Caso a condição seja satisfeita:

-   o valor é armazenado;
-   o método retorna `true`.

Caso contrário, nenhuma alteração é realizada e o método retorna
`false`.

### Linhas 15--17

Declaram o método `getNome()`, responsável por retornar o valor
armazenado no atributo privado `#nome`.

Como o atributo é privado, esse método é a forma correta de acessar seu
conteúdo.

### Linhas 18--25

Declaram o método `setEmail()`, responsável por atribuir um valor ao
atributo privado `#email`.

A lógica é semelhante à utilizada no método `setNome()`:

-   verifica se o parâmetro possui conteúdo;
-   armazena o valor somente quando a validação é satisfeita;
-   retorna `true` em caso de sucesso e `false` caso contrário.

### Linhas 26--28

Declaram o método `getEmail()`, utilizado para retornar o valor
armazenado no atributo privado `#email`.

### Linhas 29--30

A linha 29 encerra a definição da classe.

Na linha 30, a instrução `module.exports = Pessoa;` exporta a classe
para que ela possa ser reutilizada em outros arquivos por meio da função
`require()`.

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  -----------------------------------------------------------------------
  Conceito                         Explicação
  -------------------------------- --------------------------------------
  `class`                          Define uma estrutura de objeto
                                   contendo atributos e métodos.

  `#atributo`                      Declara um atributo privado da classe.

  Encapsulamento                   Restringe o acesso direto aos
                                   atributos do objeto.

  `set...()`                       Método responsável por atribuir
                                   valores aos atributos privados.

  `get...()`                       Método responsável por retornar os
                                   valores dos atributos privados.

  `if/else`                        Estrutura condicional utilizada para
                                   validar dados antes da atribuição.

  `module.exports`                 Exporta a classe para utilização em
                                   outros módulos JavaScript.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 💡 Dicas do Professor

-   Sempre utilize métodos `set` e `get` quando precisar controlar
    acesso aos dados.
-   Evite expor atributos diretamente.
-   Validações simples podem impedir muitos erros futuros.

------------------------------------------------------------------------

## 🔗 Links Complementares

-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
-   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/Private_class_fields

------------------------------------------------------------------------

## Herança e Encapsulamento -- Classe PF

Observe agora a implementação da classe `PF`, responsável por
representar uma Pessoa Física.

Ela herda atributos e comportamentos da classe `Pessoa`.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `PF.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
02 // Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
03 // Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais

04 const Pessoa = require('./Pessoa');

05 class PF extends Pessoa {

06   #cpf;

07   setCPF(cpf) {
08     if (cpf) {
09       this.#cpf = cpf;
10       return true;
11     } else {
12       return false;
13     }
14   }

15   getCPF() {
16     return this.#cpf;
17   }

18 }

19 module.exports = PF;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--03

Esses comentários apresentam informações gerais sobre o arquivo:

-   nome do arquivo;
-   localização dentro do projeto;
-   objetivo do exemplo, que consiste em demonstrar a utilização da
    herança juntamente com o encapsulamento e estruturas condicionais.

### Linha 04

Importa a classe `Pessoa`, tornando-a disponível para reutilização.

Essa importação é necessária para que a classe `PF` possa herdar os
atributos e métodos definidos na classe `Pessoa`.

### Linha 05

Declara a classe `PF`.

A palavra-chave `extends` estabelece uma relação de herança entre as
classes.

Isso significa que `PF` herda automaticamente todos os métodos públicos
da classe `Pessoa`, como:

-   `setNome()`;
-   `getNome()`;
-   `setEmail()`;
-   `getEmail()`.

Além desses métodos herdados, a classe poderá implementar atributos e
métodos próprios.

### Linha 06

Declara o atributo privado `#cpf`.

Esse atributo existe apenas na classe `PF` e representa uma informação
exclusiva de uma Pessoa Física.

Por ser privado, somente poderá ser acessado pelos métodos da própria
classe.

### Linhas 07--14

Declaram o método `setCPF()`, responsável por atribuir um valor ao
atributo privado `#cpf`.

Antes de armazenar o valor, o método verifica se o parâmetro recebido
possui conteúdo.

Caso a validação seja satisfeita:

-   o valor é armazenado no atributo `#cpf`;
-   o método retorna `true`.

Caso contrário:

-   nenhuma alteração é realizada;
-   o método retorna `false`.

### Linhas 15--17

Declaram o método `getCPF()`, responsável por retornar o valor
armazenado no atributo privado `#cpf`.

Como o atributo é privado, esse método representa a forma adequada de
consultar seu conteúdo.

### Linhas 18--19

A linha 18 encerra a definição da classe.

Na linha 19, a instrução `module.exports = PF;` exporta a classe para
que ela possa ser utilizada em outros arquivos JavaScript por meio da
função `require()`.

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  -----------------------------------------------------------------------
  Conceito                         Explicação
  -------------------------------- --------------------------------------
  `extends`                        Permite que uma classe herde atributos
                                   e métodos de outra classe.

  Herança                          Reutilização de código entre classes
                                   relacionadas.

  `#atributo`                      Declara um atributo privado.

  Encapsulamento                   Protege os atributos internos da
                                   classe.

  `setCPF()`                       Método responsável por atribuir um
                                   valor ao atributo privado `#cpf`.

  `getCPF()`                       Método responsável por consultar o
                                   valor armazenado no atributo privado
                                   `#cpf`.

  `module.exports`                 Exporta a classe para reutilização em
                                   outros módulos JavaScript.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 💡 Dicas do Professor

A herança deve ser utilizada quando existe uma relação do tipo:

> PF é uma Pessoa

Ou seja, uma Pessoa Física possui todas as características de uma Pessoa
comum, além de características próprias.

------------------------------------------------------------------------

## Utilização das Classes -- Arquivo usaPessoas.js

Após criar as classes, podemos instanciá-las e testar seu comportamento.

Para executar:

``` bash
node ./objetos/usaPessoas.js
```

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `usaPessoas.js`

``` javascript
01 const Pessoa = require('./pessoas/Pessoa');
02 const PF = require('./pessoas/PF');

03 const x = new Pessoa();

04 let resposta = x.setNome('');
05 console.log(resposta);

06 if (resposta) {
07   console.log(x.getNome());
08 } else {
09   console.log("Nome vazio");
10 }

11 resposta = x.setEmail('vaguetti@gmail.com');

12 console.log(resposta);

13 if (resposta) {
14   console.log(x.getEmail());
15 } else {
16   console.log("E-mail vazio");
17 }

18 const y = new PF();

19 resposta = y.setNome('Pedro');
20 console.log(resposta);

21 if (resposta) {
22   console.log(y.getNome());
23 }

24 resposta = y.setEmail('');
25 console.log(resposta);

26 if (resposta) {
27   console.log(y.getEmail());
28 } else {
29   console.log("Email vazio");
30 }

31 resposta = y.setCPF('123456789-10');
32 console.log(resposta);

33 if (resposta) {
34   console.log(y.getCPF());
35 }
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--02

Importam as classes `Pessoa` e `PF`.

A classe `Pessoa` representa a classe base, enquanto a classe `PF`
representa uma classe filha que herda métodos da classe `Pessoa`.

### Linha 03

Cria um objeto chamado `x` a partir da classe `Pessoa`.

Esse objeto será utilizado para testar os métodos `setNome()`,
`getNome()`, `setEmail()` e `getEmail()`.

### Linhas 04--05

Executa o método `setNome()` passando uma string vazia como parâmetro.

Como o valor informado é vazio, o método retorna `false`.

A linha seguinte exibe esse retorno no terminal.

### Linhas 06--10

Verifica o valor da variável `resposta`.

Como o retorno do método `setNome()` foi `false`, a mensagem
`"Nome vazio"` será exibida.

### Linhas 11--12

Executa o método `setEmail()` passando um e-mail preenchido.

Como o valor informado não está vazio, o método retorna `true`.

Em seguida, esse retorno é exibido no terminal.

### Linhas 13--17

Verifica novamente o valor da variável `resposta`.

Como o retorno foi `true`, o método `getEmail()` será executado e
exibirá o e-mail armazenado.

### Linha 18

Cria um objeto chamado `y` a partir da classe `PF`.

Como `PF` herda de `Pessoa`, esse objeto poderá utilizar métodos
herdados, como `setNome()`, `getNome()`, `setEmail()` e `getEmail()`.

### Linhas 19--20

Executa o método `setNome()` no objeto `y`, passando o valor `"Pedro"`.

Esse método foi herdado da classe `Pessoa`.

Como o nome informado possui conteúdo, o método retorna `true`.

### Linhas 21--23

Verifica se a variável `resposta` é verdadeira.

Como o retorno foi `true`, o método `getNome()` é executado e exibe o
nome armazenado.

### Linhas 24--25

Executa o método `setEmail()` da classe `Pessoa`, herdado pela classe
`PF`.

Como foi passada uma string vazia, a validação implementada no método
identifica que o valor é inválido e retorna `false`.

A linha seguinte exibe esse retorno no terminal.

### Linhas 26--30

Verifica o conteúdo da variável `resposta`.

Como o método `setEmail()` retornou `false`, o bloco `else` será
executado, exibindo a mensagem:

``` text
Email vazio
```

Esse trecho demonstra como utilizar o valor retornado pelos métodos
`set` para controlar o fluxo do programa.

### Linhas 31--32

Executa o método `setCPF()`, pertencente à classe `PF`.

Como o valor informado possui conteúdo, a validação é satisfeita, o CPF
é armazenado no atributo privado `#cpf` e o método retorna `true`.

Na sequência, o retorno é exibido no terminal.

### Linhas 33--35

Verifica novamente o conteúdo da variável `resposta`.

Como o método `setCPF()` retornou `true`, o método `getCPF()` é
executado, retornando o CPF armazenado no atributo privado da classe.

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  -----------------------------------------------------------------------
  Conceito                         Explicação
  -------------------------------- --------------------------------------
  Instanciação                     Criação de objetos utilizando a
                                   palavra-chave `new`.

  Herança                          Permite reutilizar atributos e métodos
                                   da classe `Pessoa` na classe `PF`.

  Encapsulamento                   Restringe o acesso direto aos
                                   atributos privados da classe.

  Getter                           Método responsável por retornar o
                                   valor de um atributo privado.

  Setter                           Método responsável por atribuir
                                   valores aos atributos privados.

  `if/else`                        Estrutura condicional utilizada para
                                   controlar o fluxo de execução.

  `require()`                      Importa módulos JavaScript previamente
                                   exportados.

  `console.log()`                  Exibe informações no terminal durante
                                   a execução do programa.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 💡 Resumo Final

Nesta apostila foram apresentados os conceitos fundamentais da
Programação Orientada a Objetos em JavaScript:

-   Encapsulamento;
-   Atributos privados;
-   Métodos Getters e Setters;
-   Estruturas condicionais para validação;
-   Herança com `extends`;
-   Reutilização de código;
-   Exportação e importação de módulos;
-   Instanciação e utilização de objetos.

Esses conceitos servem como base para a construção de sistemas mais
complexos utilizando JavaScript orientado a objetos.

------------------------------------------------------------------------

## 📚 Exercícios de Fixação

-   https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/encapsulamento_condicionais_heranca
