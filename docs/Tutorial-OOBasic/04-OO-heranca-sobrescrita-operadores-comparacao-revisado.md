# 📘 Orientação a Objetos -- Herança, Sobrescrita e Operadores de Comparação

Observe o seguinte código de exemplo relativo à declaração da classe
**PJ** (que é uma subclasse da classe **Pessoa**). Este exemplo
aprofunda os conceitos de herança, sobrescrita de métodos,
encapsulamento com validação, e o uso de operadores de comparação em
JavaScript.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `PJ.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado PJ.js (Pessoa Jurídica)
02 // Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
03 // Objetivo do exemplo: demonstrar conceitos de Herança e sobrescrita de métodos,
04 // bem como encapsulamento adicionados de condicionais e operadores de comparação
05
06 const Pessoa = require('./Pessoa');
07
08 class PJ extends Pessoa {
09
10   #cnpj;
11
12   setCNPJ(cnpj) {
13
14     /*
15      Operadores de comparação:
16      <  : menor que
17      >  : maior que
18      <= : menor ou igual que
19      >= : maior ou igual que
20     */
21
22     if (cnpj) {
23
24       if (cnpj.length < 18) {
25         return false;
26       }
27
28       this.#cnpj = cnpj;
29       return true;
30
31     } else {
32
33       return false;
34
35     }
36
37   }
38
39   getCNPJ() {
40     return this.#cnpj;
41   }
42
43   // Sobrescrita do método setEmail()
44   setEmail(email) {
45
46     /*
47      Operadores de comparação:
48      ==  : igualdade frouxa
49      === : igualdade estrita
50      !=  : diferença frouxa
51      !== : diferença estrita
52     */
53
54     if (email !== '') {
55
56       if (email.includes('@')) {
57
58         super.setEmail(email);
59
60         return true;
61
62       }
63
64     } else {
65
66       return false;
67
68     }
69
70   }
71
72 }
73
74 module.exports = PJ;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--04

``` javascript
// Arquivo criado em projeto no www.stackblitz.com denominado PJ.js (Pessoa Jurídica)
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança e sobrescrita de métodos,
// bem como encapsulamento adicionados de condicionais e operadores de comparação
```

Esses comentários descrevem informações importantes sobre o arquivo.

São apresentados:

-   o nome do arquivo;
-   sua localização dentro do projeto;
-   o objetivo pedagógico do exemplo.

Neste caso, o objetivo é demonstrar quatro conceitos fundamentais da
Programação Orientada a Objetos:

-   herança;
-   sobrescrita de métodos;
-   encapsulamento;
-   operadores de comparação.

------------------------------------------------------------------------

### Linha 06

``` javascript
const Pessoa = require('./Pessoa');
```

Importa a classe **Pessoa**, localizada no arquivo `Pessoa.js`.

Essa importação permite reutilizar toda a implementação já existente na
classe base.

Sem essa linha não seria possível utilizar:

``` javascript
extends Pessoa
```

------------------------------------------------------------------------

### Linhas 08--10

``` javascript
class PJ extends Pessoa {

  #cnpj;
```

Nesta parte ocorre a declaração da classe **PJ** (Pessoa Jurídica).

Observe o uso da palavra-chave:

``` javascript
extends
```

Ela informa ao JavaScript que a classe **PJ** será uma especialização da
classe **Pessoa**.

Isso significa que a classe `PJ` herdará automaticamente métodos como:

-   `setNome()`;
-   `getNome()`;
-   `setEmail()`;
-   `getEmail()`.

Além desses métodos herdados, a classe declara um atributo privado:

``` javascript
#cnpj
```

Esse atributo somente poderá ser acessado pelos métodos internos da
própria classe.

------------------------------------------------------------------------

### Linhas 12--37

``` javascript
setCNPJ(cnpj) {

  ...

}
```

Este método é responsável por atribuir um valor ao atributo privado
`#cnpj`.

O processo ocorre em três etapas.

#### Primeira etapa

Verifica se algum valor foi informado.

``` javascript
if (cnpj)
```

Caso o parâmetro seja vazio (`null`, `undefined` ou string vazia), o
método retorna:

``` javascript
false
```

#### Segunda etapa

Caso exista um valor, verifica-se seu comprimento.

``` javascript
if (cnpj.length < 18)
```

O operador utilizado é:

``` javascript
<
```

(menor que)

O objetivo é impedir que CNPJs incompletos sejam armazenados.

O formato esperado é semelhante a:

``` text
12.345.678/0001-90
```

que possui 18 caracteres.

#### Terceira etapa

Se todas as validações forem satisfeitas:

``` javascript
this.#cnpj = cnpj;
```

o valor é armazenado no atributo encapsulado.

Em seguida o método retorna:

``` javascript
true
```

indicando sucesso na operação.

------------------------------------------------------------------------

### Linhas 39--41

``` javascript
getCNPJ() {
  return this.#cnpj;
}
```

Método responsável por retornar o valor armazenado no atributo privado
`#cnpj`.

Como o atributo é encapsulado, somente esse método pode disponibilizar
seu conteúdo para código externo.

Esse padrão é conhecido como **Getter**.

------------------------------------------------------------------------

### Linha 43

``` javascript
// Sobrescrita do método setEmail()
```

Este comentário informa que o próximo método substituirá o comportamento
original herdado da classe `Pessoa`.

Em Programação Orientada a Objetos isso recebe o nome de **sobrescrita
de método**.

------------------------------------------------------------------------

### Linhas 44--70

``` javascript
setEmail(email) {

  ...

}
```

Embora a classe `Pessoa` já possua um método chamado `setEmail()`, a
classe `PJ` decide implementar uma versão mais especializada.

Essa nova implementação adiciona novas regras de validação.

#### Primeira validação

``` javascript
if (email !== '')
```

Utiliza o operador:

``` javascript
!==
```

(diferente estrito)

Ele verifica se o e-mail não é uma string vazia.

Diferentemente do operador `!=`, o operador `!==` também compara o tipo
do dado.

#### Segunda validação

``` javascript
email.includes('@')
```

O método `includes()` verifica se existe o caractere:

``` text
@
```

na string.

Caso não exista, entende-se que o e-mail é inválido.

#### Chamada ao método da classe base

``` javascript
super.setEmail(email);
```

A palavra-chave:

``` javascript
super
```

permite acessar a implementação original da classe mãe.

Ou seja, além das novas validações implementadas em `PJ`, continua sendo
executada a lógica já existente na classe `Pessoa`.

Essa técnica evita duplicação de código e promove reutilização.

------------------------------------------------------------------------

### Linhas 72--74

``` javascript
}

module.exports = PJ;
```

A linha 72 encerra a definição da classe.

Na sequência:

``` javascript
module.exports = PJ;
```

exporta a classe para que ela possa ser utilizada em outros arquivos do
projeto através do comando:

``` javascript
require('./PJ');
```

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  -----------------------------------------------------------------------
  Conceito                            Explicação
  ----------------------------------- -----------------------------------
  `extends`                           Permite que uma classe herde
                                      atributos e métodos de outra
                                      classe.

  Herança                             Mecanismo de reutilização de código
                                      entre classes.

  Sobrescrita de método               Permite redefinir um método herdado
                                      adicionando novas regras.

  `super`                             Executa o método da classe base
                                      durante a sobrescrita.

  Encapsulamento                      Protege atributos privados
                                      utilizando métodos públicos.

  `#atributo`                         Campo privado disponível no
                                      JavaScript moderno.

  `length`                            Retorna a quantidade de caracteres
                                      de uma string.

  `includes()`                        Verifica se determinado texto
                                      existe dentro de uma string.

  Operadores `<` e `!==`              Utilizados para validações e
                                      controle do fluxo do programa.

  `module.exports`                    Exporta a classe para reutilização
                                      em outros módulos.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 💡 Dicas do Professor

-   Utilize herança quando uma classe representar uma especialização de
    outra.
-   Use sobrescrita quando precisar reaproveitar um método herdado, mas
    com regras específicas.
-   Utilize `super.metodo()` quando quiser executar o comportamento
    original da classe base.
-   Validações com operadores de comparação ajudam a proteger os dados
    encapsulados.

------------------------------------------------------------------------

# Utilização das Classes -- Arquivo `usaPessoas.js`

Abaixo é apresentado um complemento que deve ser colocado ao final do
arquivo `usaPessoas.js`, responsável pela instanciação dos objetos
`Pessoa`, `PF` e `PJ` para demonstração do uso dos objetos.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `usaPessoas.js`

``` javascript
01 // Arquivo criado em projeto no www.stackblitz.com denominado usaPessoas.js
02 // Arquivo criado dentro de uma pasta /objetos na raiz do projeto
03 // Objetivo do exemplo: demonstrar a utilização dos conceitos de encapsulamento
04 // com adição de condicionais e Herança
05 // Classes Pessoa, PF e PJ disponíveis na pasta /objetos/pessoas
06
07 console.log("==== Objeto Pessoa =====");
08
09 const Pessoa = require('./pessoas/Pessoa');
10
11 const x = new Pessoa();
12
13 // resposta = x.setNome('Leandro');
14 resposta = x.setNome('');
15
16 console.log(resposta);
17
18 if (resposta) {
19   console.log(x.getNome());
20 } else {
21   console.log("Nome vazio");
22 }
23
24 resposta = x.setEmail('vaguetti@gmail.com');
25
26 console.log(resposta);
27
28 if (resposta) {
29   console.log(x.getEmail());
30 } else {
31   console.log("E-mail vazio");
32 }
33
34 // ===================================
35 console.log("==== Objeto PF =====");
36
37 const PF = require('./pessoas/PF');
38
39 const y = new PF();
40
41 resposta = y.setNome('Pedro');
42 console.log(resposta);
43
44 if (resposta) {
45   console.log(y.getNome());
46 } else {
47   console.log("Nome vazio");
48 }
49
50 resposta = y.setEmail('');
51 console.log(resposta);
52
53 if (resposta) {
54   console.log(y.getEmail());
55 } else {
56   console.log("Email vazio");
57 }
58
59 resposta = y.setCPF('123456789-10');
60 console.log(resposta);
61
62 if (resposta) {
63   console.log(y.getCPF());
64 } else {
65   console.log("CPF vazio");
66 }
67
68 // ===================================
69 console.log("==== Objeto PJ =====");
70
71 const PJ = require('./pessoas/PJ');
72
73 const z = new PJ();
74
75 resposta = z.setNome('Empresa ABC');
76 console.log(resposta);
77
78 if (resposta) {
79   console.log(z.getNome());
80 } else {
81   console.log("Nome vazio");
82 }
83
84 resposta = z.setEmail('contato@empresa.com');
85 console.log(resposta);
86
87 if (resposta) {
88   console.log(z.getEmail());
89 } else {
90   console.log("E-mail inválido");
91 }
92
93 resposta = z.setCNPJ('12.345.678/0001-90');
94 console.log(resposta);
95
96 if (resposta) {
97   console.log(z.getCNPJ());
98 } else {
99   console.log("CNPJ inválido");
100 }
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--05

``` javascript
// Arquivo criado em projeto no www.stackblitz.com denominado usaPessoas.js
// Arquivo criado dentro de uma pasta /objetos na raiz do projeto
// Objetivo do exemplo: demonstrar a utilização dos conceitos de encapsulamento
// com adição de condicionais e Herança
// Classes Pessoa, PF e PJ disponíveis na pasta /objetos/pessoas
```

Esses comentários apresentam o objetivo do arquivo.

O arquivo `usaPessoas.js` é responsável por testar a criação e o uso dos
objetos das classes `Pessoa`, `PF` e `PJ`.

------------------------------------------------------------------------

### Linha 07

``` javascript
console.log("==== Objeto Pessoa =====");
```

Exibe no terminal um título para identificar o início dos testes com a
classe `Pessoa`.

------------------------------------------------------------------------

### Linha 09

``` javascript
const Pessoa = require('./pessoas/Pessoa');
```

Importa a classe `Pessoa`, permitindo criar objetos a partir dela.

------------------------------------------------------------------------

### Linha 11

``` javascript
const x = new Pessoa();
```

Cria um objeto chamado `x` a partir da classe `Pessoa`.

Esse processo é chamado de **instanciação**.

------------------------------------------------------------------------

### Linhas 13--14

``` javascript
// resposta = x.setNome('Leandro');
resposta = x.setNome('');
```

A linha 13 mostra um exemplo comentado de atribuição válida.

A linha 14 executa o método `setNome()` passando uma string vazia.

Como o valor está vazio, espera-se que o método retorne `false`.

------------------------------------------------------------------------

### Linha 16

``` javascript
console.log(resposta);
```

Exibe no terminal o valor retornado pelo método `setNome()`.

Nesse caso, a saída esperada é:

``` javascript
false
```

------------------------------------------------------------------------

### Linhas 18--22

``` javascript
if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}
```

Verifica o valor da variável `resposta`.

Como `resposta` é `false`, o bloco `else` será executado, exibindo:

``` javascript
Nome vazio
```

------------------------------------------------------------------------

### Linha 24

``` javascript
resposta = x.setEmail('vaguetti@gmail.com');
```

Executa o método `setEmail()` com um e-mail preenchido.

Como o valor não está vazio, a validação é aprovada.

------------------------------------------------------------------------

### Linha 26

``` javascript
console.log(resposta);
```

Exibe o retorno do método `setEmail()`.

Nesse caso, espera-se:

``` javascript
true
```

------------------------------------------------------------------------

### Linhas 28--32

``` javascript
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}
```

Como `resposta` é `true`, o método `getEmail()` será chamado.

A saída esperada é:

``` javascript
vaguetti@gmail.com
```

------------------------------------------------------------------------

### Linhas 34--35

``` javascript
// ===================================
console.log("==== Objeto PF =====");
```

Separa visualmente os testes realizados com a classe `Pessoa` dos testes
realizados com a classe `PF`.

------------------------------------------------------------------------

### Linha 37

``` javascript
const PF = require('./pessoas/PF');
```

Importa a classe `PF`, que representa uma Pessoa Física.

Essa classe herda métodos da classe `Pessoa`.

------------------------------------------------------------------------

### Linha 39

``` javascript
const y = new PF();
```

Cria um objeto chamado `y` a partir da classe `PF`.

Mesmo sendo um objeto da classe `PF`, ele também pode utilizar métodos
herdados da classe `Pessoa`.

------------------------------------------------------------------------

### Linha 41

``` javascript
resposta = y.setNome('Pedro');
```

Executa o método `setNome()` no objeto `y`.

Esse método não foi declarado diretamente na classe `PF`, mas funciona
porque foi herdado da classe `Pessoa`.

------------------------------------------------------------------------

### Linha 42

``` javascript
console.log(resposta);
```

Exibe o retorno do método `setNome()`.

Como o nome informado é válido, espera-se:

``` javascript
true
```

------------------------------------------------------------------------

### Linhas 44--48

``` javascript
if (resposta) {
  console.log(y.getNome());
} else {
  console.log("Nome vazio");
}
```

Como a resposta foi `true`, o método `getNome()` será chamado.

A saída esperada é:

``` javascript
Pedro
```

------------------------------------------------------------------------

### Linhas 50--51

``` javascript
resposta = y.setEmail('');
console.log(resposta);
```

Executa o método `setEmail()` com uma string vazia.

Como o valor é inválido, espera-se que o retorno seja:

``` javascript
false
```

------------------------------------------------------------------------

### Linhas 53--57

``` javascript
if (resposta) {
  console.log(y.getEmail());
} else {
  console.log("Email vazio");
}
```

Como `resposta` é `false`, o bloco `else` será executado.

A saída esperada é:

``` javascript
Email vazio
```

------------------------------------------------------------------------

### Linhas 59--60

``` javascript
resposta = y.setCPF('123456789-10');
console.log(resposta);
```

Executa o método `setCPF()` da classe `PF`.

Esse método é específico da classe `PF`, pois o CPF é um atributo
próprio de Pessoa Física.

Como o CPF foi informado, espera-se que o retorno seja:

``` javascript
true
```

------------------------------------------------------------------------

### Linhas 62--66

``` javascript
if (resposta) {
  console.log(y.getCPF());
} else {
  console.log("CPF vazio");
}
```

Como `resposta` é `true`, o método `getCPF()` será chamado.

A saída esperada é:

``` javascript
123456789-10
```

------------------------------------------------------------------------

### Linhas 68--69

``` javascript
// ===================================
console.log("==== Objeto PJ =====");
```

Separa visualmente os testes realizados com a classe `PF` dos testes
realizados com a classe `PJ`.

------------------------------------------------------------------------

### Linha 71

``` javascript
const PJ = require('./pessoas/PJ');
```

Importa a classe `PJ`, que representa uma Pessoa Jurídica.

Essa classe também herda métodos da classe `Pessoa`, mas possui regras
próprias para `CNPJ` e `email`.

------------------------------------------------------------------------

### Linha 73

``` javascript
const z = new PJ();
```

Cria um objeto chamado `z` a partir da classe `PJ`.

Esse objeto possui:

-   métodos herdados da classe `Pessoa`, como `setNome()` e `getNome()`;
-   métodos próprios da classe `PJ`, como `setCNPJ()` e `getCNPJ()`;
-   método sobrescrito, como `setEmail()`.

------------------------------------------------------------------------

### Linhas 75--76

``` javascript
resposta = z.setNome('Empresa ABC');
console.log(resposta);
```

Executa o método `setNome()` no objeto `z`.

Esse método foi herdado da classe `Pessoa`.

Como o nome informado é válido, espera-se que o retorno seja:

``` javascript
true
```

------------------------------------------------------------------------

### Linhas 78--82

``` javascript
if (resposta) {
  console.log(z.getNome());
} else {
  console.log("Nome vazio");
}
```

Como `resposta` é `true`, o método `getNome()` será chamado.

A saída esperada é:

``` javascript
Empresa ABC
```

------------------------------------------------------------------------

### Linhas 84--85

``` javascript
resposta = z.setEmail('contato@empresa.com');
console.log(resposta);
```

Executa o método `setEmail()` no objeto `z`.

Nesse caso, o método executado é a versão sobrescrita na classe `PJ`.

O e-mail será considerado válido porque:

-   não está vazio;
-   contém o caractere `@`.

------------------------------------------------------------------------

### Linhas 87--91

``` javascript
if (resposta) {
  console.log(z.getEmail());
} else {
  console.log("E-mail inválido");
}
```

Como `resposta` é `true`, o método `getEmail()` será chamado.

A saída esperada é:

``` javascript
contato@empresa.com
```

------------------------------------------------------------------------

### Linhas 93--94

``` javascript
resposta = z.setCNPJ('12.345.678/0001-90');
console.log(resposta);
```

Executa o método `setCNPJ()` da classe `PJ`.

O CNPJ informado possui 18 caracteres, por isso será aceito pela
validação.

A saída esperada para `console.log(resposta)` é:

``` javascript
true
```

------------------------------------------------------------------------

### Linhas 96--100

``` javascript
if (resposta) {
  console.log(z.getCNPJ());
} else {
  console.log("CNPJ inválido");
}
```

Como `resposta` é `true`, o método `getCNPJ()` será chamado.

A saída esperada é:

``` javascript
12.345.678/0001-90
```

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  -----------------------------------------------------------------------
  Conceito                            Explicação
  ----------------------------------- -----------------------------------
  `require()`                         Importa classes de outros arquivos.

  `new`                               Cria uma nova instância de uma
                                      classe.

  Objeto                              Estrutura criada a partir de uma
                                      classe.

  Herança                             Permite que `PF` e `PJ` utilizem
                                      métodos da classe `Pessoa`.

  Encapsulamento                      O acesso aos atributos ocorre por
                                      métodos `set` e `get`.

  `if/else`                           Controla o fluxo com base no
                                      retorno dos métodos.

  `console.log()`                     Exibe informações no terminal.

  Método herdado                      Método definido em uma classe base
                                      e usado pela classe filha.

  Método próprio                      Método declarado diretamente na
                                      classe específica.

  Método sobrescrito                  Método herdado que foi redefinido
                                      na classe filha.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 💡 Dicas do Professor

-   Teste primeiro a classe base antes de testar as classes filhas.
-   Separe os testes com mensagens no terminal para facilitar a leitura
    da saída.
-   Observe quais métodos são herdados e quais métodos pertencem somente
    à classe filha.
-   Utilize retornos `true` e `false` para controlar mensagens de erro e
    sucesso.
-   A classe `PJ` demonstra como uma classe filha pode adaptar o
    comportamento herdado por meio da sobrescrita.

------------------------------------------------------------------------

## 💡 Resumo Final

Nesta apostila foram apresentados conceitos fundamentais da Programação
Orientada a Objetos em JavaScript:

-   herança com `extends`;
-   criação de subclasses;
-   atributos privados com `#`;
-   encapsulamento com validação;
-   sobrescrita de métodos;
-   uso de `super` para chamar métodos da classe base;
-   operadores de comparação;
-   validação de strings com `length` e `includes()`;
-   importação e exportação de módulos;
-   instanciação e utilização de objetos.

Esses conceitos permitem criar classes mais especializadas e com regras
próprias, reaproveitando comportamentos já existentes em classes base.

------------------------------------------------------------------------

## 📚 Exercícios de Fixação

-   https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/heranca_sobrescrita_operadores_comparacao
