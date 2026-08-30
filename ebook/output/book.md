# JavaScript Orientado a Objetos  
## Da Prática à Teoria

**Autor:** Leandro Vaguetti  

**Instituição:** Instituto Federal de Brasília  
**Área:** Computação / Programação  

---

**E-book publicado em formato digital**

Brasília – DF  
2026

## Ficha Catalográfica

Vaguetti, Leandro.  
**JavaScript orientado a objetos: da prática à teoria** / Leandro Vaguetti. — Brasília, DF, 2026.  

1 recurso online (e-book).  

ISBN: XXX-XX-XXXX-XXX-X  

1. Programação de computadores.  
2. JavaScript (Linguagem de programação).  
3. Programação orientada a objetos.  
4. Ensino de computação.  

I. Título.

CDD: 005.133

## Prefácio

A programação orientada a objetos constitui um dos principais paradigmas utilizados no desenvolvimento de software contemporâneo. No entanto, sua compreensão inicial costuma representar um desafio significativo para estudantes em formação na área de computação, especialmente quando os conceitos são apresentados de forma excessivamente abstrata.

Este e-book nasce da experiência docente do autor no ensino de programação e da necessidade de aproximar teoria e prática por meio de exemplos concretos, experimentação e reflexão crítica. A linguagem JavaScript foi escolhida por sua ampla adoção no mercado e por permitir a construção de aplicações completas, do front-end ao back-end, utilizando um único ecossistema tecnológico.

A proposta da obra é conduzir o leitor por um percurso progressivo, partindo dos fundamentos da linguagem até os conceitos centrais da orientação a objetos, sempre articulando explicações conceituais, exemplos de código e atividades práticas.

Espera-se que este material contribua tanto para estudantes iniciantes quanto para docentes que buscam recursos didáticos atualizados para o ensino de programação.

## Apresentação

Este e-book foi concebido como um material didático voltado ao ensino de Programação Orientada a Objetos utilizando a linguagem JavaScript, com foco em cursos da área de Computação, Tecnologia da Informação e áreas afins.

O conteúdo está organizado em capítulos progressivos, permitindo ao leitor desenvolver gradualmente competências relacionadas à compreensão do paradigma orientado a objetos, sua aplicação prática e sua relação com problemas reais de desenvolvimento de software.

Além dos exemplos apresentados ao longo do texto, o material oferece links externos para ambientes de experimentação, possibilitando que o leitor execute, modifique e teste os códigos estudados. Essa abordagem busca promover uma aprendizagem ativa, investigativa e alinhada às práticas contemporâneas de ensino de programação.

A obra pode ser utilizada tanto em contextos formais de ensino, como disciplinas de graduação e cursos técnicos, quanto em estudos autodirigidos por profissionais interessados em aprofundar seus conhecimentos em JavaScript e orientação a objetos.

# Variáveis e Operador de Atribuição

Observe o seguinte código de exemplo relativo à declaração de variáveis em JavaScript.

---

## 💻 Código Completo  
**Arquivo:** `declvar.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado declvar.js

var x = 6;
console.log(x);

const y = "a";  // definição de variável const
// y = "b";
console.log(y);

// VARIÁVEIS GLOBAIS E LOCAIS
{
  let z = 4;
  console.log(x);
  console.log(y);
  console.log(z);
}

// console.log(z);  <-- Essa linha, se descomentada, gera erro pois z é local ao bloco acima
```

---

## 📘 Comentários e Explicações Linha a Linha

### Linha 01
Comentário informativo, não afeta o código.

### Linha 02
```javascript
var x = 6;
```
Declara a variável `x` usando `var`.

### Linha 03
```javascript
console.log(x);
```
Resultado: `6`

### Linha 04
```javascript
const y = "a";
```
Constante com escopo de bloco.

### Linha 05
Comentada. Se executada, gera erro.

### Linha 06
```javascript
console.log(y);
```
Resultado: `"a"`

---

## 📌 Conceitos-Chave

| Conceito | Explicação |
|--------|-----------|
| var | Escopo global ou de função |
| let | Escopo de bloco |
| const | Não permite reatribuição |
| = | Operador de atribuição |

---

# Tipagem de Variáveis em JavaScript

## 💻 Código Completo  
**Arquivo:** `tipovar.js`

```javascript
var numero = 5.2;
console.log(typeof(numero));

var palavra = "JavaScript";
console.log(typeof(palavra));

var logica = false;
console.log(typeof(logica));

var qualquer;
console.log(typeof(qualquer));
```

# Funções e Operadores Aritméticos Básicos

Observe o seguinte código de exemplo relativo à declaração de funções e operadores aritméticos básicos em JavaScript.

---

## 💻 Código Completo  
**Arquivo:** `funcbasic.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado funcbasic.js

// Objetivo de uma função = definir um bloco de código reutilizável
// function <nome> (<parametros>){ ... }

function soma(x, y) {
  let soma = x + y; // variável local
  return soma;     // retorna o valor calculado
}

// chamar a função
var print1 = soma(soma(4, 7), 3);
console.log(print1);

var print2 = soma(10, soma(print1, 5));
console.log(print2);

console.log(soma(print1, print2));

// Formas distintas de declaração de funções
// Operadores de subtração, divisão e multiplicação

const subtrair = function(x, y) { 
  return x - y; 
}
console.log(subtrair(3, 5));

// arrow function
const dividir = (x, y) => { 
  return x / y; 
}
console.log(dividir(3, 5));

const multiplicar = (x, y) => { 
  return x * y; 
}
console.log(multiplicar(3, 5));
```

---

## 📘 Comentários e Explicações Linha a Linha

### Função `soma(x, y)`
Define uma função tradicional que recebe dois parâmetros e retorna a soma entre eles.

- `let soma = x + y;` → variável local à função  
- `return soma;` → devolve o valor calculado

### Chamadas da função
- `soma(4, 7)` → **11**
- `soma(11, 3)` → **14**
- `soma(14, 29)` → **43**

### Função anônima
```javascript
const subtrair = function(x, y) { return x - y; }
```
Executa **3 - 5 = -2**

### Arrow functions
```javascript
const dividir = (x, y) => { return x / y; }
const multiplicar = (x, y) => { return x * y; }
```

- `3 / 5 = 0.6`
- `3 * 5 = 15`

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|--------|-----------|
| function | Declaração clássica de função |
| return | Retorna um valor da função |
| let | Escopo local (bloco/função) |
| const | Constante (ideal para funções) |
| Função anônima | Função sem nome atribuída a variável |
| Arrow function | Sintaxe moderna de função |
| +, -, /, * | Operadores aritméticos |
| console.log() | Exibe valores no console |

---

## 💡 Dicas do Professor

>- Priorize a declaração tradicional de funções para melhor compreensão inicial  
>- Utilize `let` para variáveis internas às funções  
>- Evite usar `console.log()` como retorno da função  
>- O operador módulo `%` retorna o resto da divisão (será visto posteriormente)

---

## 🔗 Links Complementares

>- https://youtu.be/CS_u3muSAmg

# Módulos e Funções (Declaração e Uso)

Observe o seguinte código de exemplo relativo à declaração de módulos e sua utilização a partir de funções em JavaScript.

---

## 💻 Código Completo  
**Arquivo:** `definemodulo.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado definemodulo.js
// Arquivo criado dentro de uma pasta na raiz do projeto

function soma(x, y) {
  let soma = x + y; // variável local
  return soma;     // retorna o resultado
}

const subtrair = function(x, y) { 
  return x - y; 
}

// módulos são utilizados para disponibilizar bibliotecas e funções e classes
module.exports = { soma, subtrair }
```

---

## 📘 Comentários e Explicações

### Função `soma(x, y)`
Declara uma função tradicional que recebe dois parâmetros e retorna a soma entre eles.

- Uso de `let` garante escopo local
- `return` devolve o valor para quem chamou a função

### Função anônima `subtrair`
```javascript
const subtrair = function(x, y) { return x - y; }
```
Função sem nome atribuída a uma constante.

### `module.exports`
```javascript
module.exports = { soma, subtrair }
```
Define quais funções ficam disponíveis para reutilização em outros arquivos.

---

## 💻 Código Completo  
**Arquivo:** `usamodulo.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado usamodulo.js
// Arquivo criado na raiz do projeto

// importação dos módulos disponíveis
const oper = require('./biblioteca/definemodulo.js');

var x = 3, y = 5;

console.log(oper.soma(x, y));      // 8
console.log(oper.subtrair(y, x));  // 2
```

---

## 📘 Comentários e Explicações

### Importação de módulos
```javascript
const oper = require('./biblioteca/definemodulo.js');
```
Importa as funções exportadas no módulo externo utilizando o padrão **CommonJS**.

### Uso das funções importadas
- `oper.soma(3, 5)` → **8**
- `oper.subtrair(5, 3)` → **2**

As funções são acessadas por meio da notação de objeto.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|--------|-----------|
| function | Declara função tradicional |
| let | Escopo local |
| const | Constante |
| Função anônima | Função sem nome atribuída a variável |
| module.exports | Exportação de funções/objetos |
| require() | Importação de módulos (Node.js) |
| Módulos (CommonJS) | Organização e reutilização de código |
| console.log() | Exibição de valores no console |

---

## 💡 Dicas do Professor

- Apenas as funções listadas em `module.exports` ficam disponíveis para outros arquivos  
- Utilize módulos para organizar melhor projetos maiores  
- Separe responsabilidades em arquivos distintos

---

## 🔗 Links Complementares

- https://youtu.be/glxCWejs2kk

--- 

## 📚 Exercícios de Fixação

- https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/programacao_estruturada

# 📘 Manipulação de Arrays em JavaScript

## Introdução

Os arrays são estruturas de dados utilizadas para armazenar coleções de valores em uma única variável. Em JavaScript, um array pode conter elementos de diferentes tipos, como números, textos e valores booleanos, oferecendo flexibilidade para representar diversos tipos de informação.

Nesta apostila serão apresentados os conceitos fundamentais relacionados à criação e à manipulação de arrays em JavaScript. Inicialmente, serão exploradas diferentes formas de declarar e inicializar arrays, bem como o acesso e a atualização de seus elementos por meio de índices. Em seguida, serão estudados os principais métodos utilizados para inserir, remover e consultar elementos, permitindo modificar dinamicamente o conteúdo de um array.

Ao final deste estudo, o estudante será capaz de criar arrays, acessar e atualizar seus elementos e utilizar os principais métodos disponíveis para manipular coleções de dados em JavaScript.

---

# Criação de Arrays

A seguir é apresentado um exemplo contendo diferentes formas de criação e utilização de arrays em JavaScript. O código demonstra como inicializar arrays utilizando sintaxe literal e o construtor `Array()`, além de exemplificar a inserção, atualização e acesso aos elementos armazenados.

---

### 💻 Código Completo

**Arquivo:** `arrays.js`

```javascript
// Forma 1: Atribuição direta na declaração
let dadosAluno = ['João', 12345, true];
console.log('dadosAluno:', dadosAluno);
console.log('dadosAluno:', dadosAluno[0]);

// Forma 2: Criação de um array vazio e atribuição por índice
let curso = [];
curso[0] = 'Análise de Sistemas';
curso[1] = 2025;
curso[2] = false;
console.log('curso:', curso);
console.log('curso:', curso[1]);

// Forma 3: Utilização do construtor Array()
let notas = new Array(7.5, 8.0, 6.9);
console.log('notas:', notas);

// Forma 4: Array com diferentes tipos de dados
let infoSistema = ['Ativo', 3.2, false, 'Finalizado'];
console.log('infoSistema:', infoSistema);

// Forma 5: Atualização dos valores de um array
infoSistema[0] = 'Inativo';
infoSistema[2] = true;
console.log('infoSistema atualizado:', infoSistema);

// Forma 6: Array com valores booleanos
let status = [true, false, true, true];
console.log('status:', status);
console.log('Status:', status[3]);

// Forma 7: Array com valores do tipo string
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
console.log('cursos:', cursos);
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–04**

```javascript
// Forma 1: Atribuição direta na declaração
let dadosAluno = ['João', 12345, true];
console.log('dadosAluno:', dadosAluno);
console.log('dadosAluno:', dadosAluno[0]);
```

A variável `dadosAluno` recebe um array criado por meio da sintaxe literal, representada pelos colchetes `[]`.

O array armazena três valores de tipos diferentes:

- `'João'`: valor do tipo string;
- `12345`: valor do tipo number;
- `true`: valor do tipo boolean.

O primeiro `console.log()` exibe todo o conteúdo do array. O segundo utiliza o índice `0` para acessar apenas o primeiro elemento, que corresponde ao valor `'João'`.

---

#### **Linhas 06–12**

```javascript
// Forma 2: Criação de um array vazio e atribuição por índice
let curso = [];
curso[0] = 'Análise de Sistemas';
curso[1] = 2025;
curso[2] = false;
console.log('curso:', curso);
console.log('curso:', curso[1]);
```

A variável `curso` recebe inicialmente um array vazio.

Em seguida, os valores são adicionados individualmente por meio de seus índices:

- o índice `0` recebe a string `'Análise de Sistemas'`;
- o índice `1` recebe o número `2025`;
- o índice `2` recebe o valor booleano `false`.

O primeiro `console.log()` exibe todo o array. O segundo acessa apenas o elemento da posição `1`, que contém o valor `2025`.

---

#### **Linhas 14–16**

```javascript
// Forma 3: Utilização do construtor Array()
let notas = new Array(7.5, 8.0, 6.9);
console.log('notas:', notas);
```

O array `notas` é criado utilizando o construtor `Array()`.

Os valores informados entre parênteses são armazenados como elementos do array. Nesse exemplo, a estrutura contém três números que representam notas.

Embora essa forma seja válida, a sintaxe literal com colchetes costuma ser mais simples e mais utilizada.

---

#### **Linhas 18–20**

```javascript
// Forma 4: Array com diferentes tipos de dados
let infoSistema = ['Ativo', 3.2, false, 'Finalizado'];
console.log('infoSistema:', infoSistema);
```

O array `infoSistema` armazena valores de diferentes tipos.

Essa característica demonstra que os arrays em JavaScript podem reunir strings, números e valores booleanos em uma única estrutura.

---

#### **Linhas 22–25**

```javascript
// Forma 5: Atualização dos valores de um array
infoSistema[0] = 'Inativo';
infoSistema[2] = true;
console.log('infoSistema atualizado:', infoSistema);
```

Os elementos do array `infoSistema` são atualizados por meio de seus índices.

O valor armazenado na posição `0` é alterado de `'Ativo'` para `'Inativo'`. Já o valor da posição `2` é alterado de `false` para `true`.

Esse exemplo demonstra que os arrays são estruturas mutáveis, pois seus elementos podem ser modificados após a criação.

---

#### **Linhas 27–30**

```javascript
// Forma 6: Array com valores booleanos
let status = [true, false, true, true];
console.log('status:', status);
console.log('Status:', status[3]);
```

O array `status` contém apenas valores booleanos.

O primeiro `console.log()` exibe todos os elementos. O segundo acessa o elemento localizado no índice `3`, que corresponde ao quarto elemento do array.

---

#### **Linhas 32–34**

```javascript
// Forma 7: Array com valores do tipo string
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
console.log('cursos:', cursos);
```

O array `cursos` armazena exclusivamente valores do tipo string.

Esse tipo de estrutura pode ser utilizado para representar listas de nomes, categorias, disciplinas, cursos ou outras informações textuais relacionadas.

## Manipulação de Arrays

Após aprender a criar arrays, o próximo passo é conhecer os principais métodos utilizados para adicionar, remover e acessar elementos. Nesta seção são apresentados alguns dos métodos mais utilizados em JavaScript para manipular arrays de forma dinâmica.

### 💻 Código Completo

**Arquivo:** `manipulaArray.js`

```javascript
let frutas = ["maçã", "banana"];

frutas.push("laranja");      // adiciona ao final

frutas.unshift("uva");       // adiciona ao início

console.log(frutas);

console.log("Tamanho:", frutas.length);

console.log("Primeira fruta:", frutas[0]);

console.log("Última fruta:", frutas[frutas.length - 1]);

frutas.pop();                // remove o último elemento

frutas.shift();              // remove o primeiro elemento

console.log(frutas);
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linha 01**

```javascript
let frutas = ["maçã", "banana"];
```

Cria um array denominado `frutas` contendo dois elementos do tipo **string**.

Esse array será utilizado ao longo do exemplo para demonstrar os principais métodos de manipulação disponíveis em JavaScript.

---

#### **Linha 03**

```javascript
frutas.push("laranja");
```

O método `push()` adiciona um novo elemento ao **final** do array.

Após sua execução, o conteúdo do array passa a ser:

```text
["maçã", "banana", "laranja"]
```

---

#### **Linha 05**

```javascript
frutas.unshift("uva");
```

O método `unshift()` adiciona um novo elemento no **início** do array.

Após essa operação, o array passa a conter:

```text
["uva", "maçã", "banana", "laranja"]
```

Todos os elementos existentes são deslocados uma posição para a direita.

---

#### **Linha 07**

```javascript
console.log(frutas);
```

Exibe o conteúdo atual do array após as inserções realizadas pelos métodos `push()` e `unshift()`.

O resultado esperado é:

```text
["uva", "maçã", "banana", "laranja"]
```

---

#### **Linha 09**

```javascript
console.log("Tamanho:", frutas.length);
```

A propriedade `length` retorna a quantidade de elementos armazenados no array.

Nesse momento, o array possui quatro elementos e, portanto, o valor retornado será:

```text
4
```

---

#### **Linha 11**

```javascript
console.log("Primeira fruta:", frutas[0]);
```

Acessa o primeiro elemento do array utilizando o índice `0`.

Como os índices começam em zero, o valor retornado será:

```text
uva
```

---

#### **Linha 13**

```javascript
console.log("Última fruta:", frutas[frutas.length - 1]);
```

Obtém dinamicamente o último elemento do array.

Em vez de utilizar um índice fixo, o exemplo utiliza a propriedade `length` para calcular a posição do último elemento.

Essa abordagem é recomendada, pois continua funcionando mesmo que a quantidade de elementos do array seja alterada.

---

#### **Linha 15**

```javascript
frutas.pop();
```

O método `pop()` remove o **último elemento** do array.

Após sua execução, o elemento `"laranja"` é removido e o array passa a conter:

```text
["uva", "maçã", "banana"]
```

---

#### **Linha 17**

```javascript
frutas.shift();
```

O método `shift()` remove o **primeiro elemento** do array.

Nesse exemplo, a string `"uva"` é removida, restando:

```text
["maçã", "banana"]
```

---

#### **Linha 19**

```javascript
console.log(frutas);
```

Exibe o estado final do array após todas as operações realizadas.

O resultado esperado é:

```text
["maçã", "banana"]
```

---

### 📌 Conceitos-Chave Envolvidos

| Método / Propriedade | Descrição |
|-----------------------|-----------|
| `push(valor)` | Adiciona um elemento ao final do array. |
| `unshift(valor)` | Adiciona um elemento no início do array. |
| `pop()` | Remove o último elemento do array. |
| `shift()` | Remove o primeiro elemento do array. |
| `length` | Retorna a quantidade de elementos armazenados no array. |
| `array[indice]` | Acessa um elemento utilizando seu índice. |
| `array[array.length - 1]` | Obtém dinamicamente o último elemento do array. |

---

### 💡 Dicas do Professor

> **Escolha o método adequado para cada situação.**
>
> Utilize `push()` e `pop()` quando as operações ocorrerem no final do array. Utilize `unshift()` e `shift()` quando for necessário inserir ou remover elementos no início.

> **Evite utilizar índices fixos para acessar o último elemento.**
>
> Sempre que possível, utilize `array.length - 1`. Dessa forma, o código continuará funcionando mesmo que o tamanho do array seja alterado.

> **A propriedade `length` é atualizada automaticamente.**
>
> Sempre que um elemento é adicionado ou removido, o JavaScript atualiza automaticamente a quantidade de elementos do array.

## 💡 Resumo Final

Nesta apostila foram apresentados os principais conceitos relacionados à criação e à manipulação de arrays em JavaScript.

Inicialmente, foi demonstrado que um array é uma estrutura de dados capaz de armazenar uma coleção de valores em uma única variável. Também foram exploradas diferentes formas de criação de arrays, utilizando tanto a sintaxe literal (`[]`) quanto o construtor `Array()`, além da atribuição de elementos por meio de seus índices.

Na sequência, foram apresentados os principais métodos utilizados para manipular arrays:

- `push()` adiciona elementos ao final do array;
- `unshift()` adiciona elementos no início do array;
- `pop()` remove o último elemento;
- `shift()` remove o primeiro elemento;
- `length` retorna a quantidade de elementos armazenados;
- `array[indice]` permite acessar um elemento específico.

Esses recursos constituem a base para o trabalho com coleções de dados em JavaScript e serão utilizados em praticamente todos os programas desenvolvidos ao longo do estudo da linguagem.

---

### 📌 O que você aprendeu

Ao concluir esta apostila, você deverá ser capaz de:

- criar arrays utilizando diferentes formas de inicialização;
- acessar elementos por meio de seus índices;
- alterar valores armazenados em um array;
- inserir elementos no início e no final de um array;
- remover elementos do início e do final de um array;
- utilizar a propriedade `length` para obter a quantidade de elementos;
- acessar dinamicamente o último elemento de um array.

---

### 📚 Exercícios de Fixação

Para consolidar os conceitos estudados nesta apostila, resolva os exercícios de fixação disponíveis no documento correspondente.

> **Exercícios de Fixação – Manipulação de Arrays**
>
> - https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/Manipulando_Arrays

# 📘 Laços de Repetição (`for`, `while`, `do...while`)

Os laços de repetição são estruturas fundamentais da programação, utilizadas para executar um mesmo conjunto de instruções diversas vezes, de forma automática e controlada.

Em JavaScript, existem diferentes estruturas de repetição, cada uma adequada para situações específicas. A escolha do laço depende da forma como o número de repetições é conhecido e de como a condição de parada deve ser avaliada.

Neste capítulo serão apresentados os principais laços de repetição da linguagem JavaScript:

- `for`
- `while`
- `do...while`
- `for...of`

Inicialmente serão estudados exemplos utilizando variáveis numéricas para compreender o funcionamento básico de cada estrutura. Em seguida, esses mesmos laços serão aplicados na manipulação de arrays, demonstrando como percorrer coleções de dados de maneira eficiente.

Ao final deste capítulo, você compreenderá quando utilizar cada tipo de laço e quais são suas principais características.

---

# 🎯 Objetivos de Aprendizagem

Ao concluir este capítulo, você será capaz de:

- compreender o funcionamento dos principais laços de repetição da linguagem JavaScript;
- identificar as diferenças entre os laços `for`, `while` e `do...while`;
- utilizar o laço `for...of` para percorrer elementos de um array;
- controlar repetições utilizando condições e variáveis de controle;
- percorrer arrays utilizando diferentes estruturas de repetição;
- identificar situações em que cada tipo de laço é mais adequado.

---

## Introdução aos Laços de Repetição

Os laços de repetição permitem executar um bloco de código diversas vezes enquanto uma determinada condição for satisfeita.

Em vez de escrever várias instruções semelhantes, o programador define uma única estrutura de repetição, indicando:

- o ponto de início da repetição;
- a condição para continuar executando;
- a forma de atualização da variável de controle.

Observe, a seguir, um exemplo utilizando os três principais laços de repetição disponíveis em JavaScript: `for`, `while` e `do...while`. Esses exemplos servirão como base para compreender as diferenças entre cada estrutura antes de aplicá-las em situações mais complexas.

---
## Laços de Repetição Básicos

Os primeiros exemplos deste capítulo apresentam os três principais laços de repetição disponíveis na linguagem JavaScript.

Embora todos permitam executar um bloco de código diversas vezes, cada estrutura possui características específicas e é indicada para diferentes situações.

Observe o código a seguir.

---

## 💻 Código Completo

**Arquivo:** `lacos.js`

```javascript
console.log("Laço for:");

for (let i = 1; i <= 5; i++) {
    console.log("Valor de i:", i);
}

console.log("Laço while:");

let j = 1;

while (j <= 5) {
    console.log("Valor de j:", j);
    j++;
}

console.log("Laço do...while:");

let k = 5;

do {
    console.log("Valor de k:", k);
    k--;
} while (k >= 1);
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05**

```javascript
console.log("Laço for:");

for (let i = 1; i <= 5; i++) {
    console.log("Valor de i:", i);
}
```

O primeiro exemplo apresenta o funcionamento do laço `for`.

Inicialmente, é exibida uma mensagem no console indicando qual estrutura de repetição será executada.

Em seguida, o laço é declarado utilizando três elementos fundamentais:

- **Inicialização:** `let i = 1`;
- **Condição:** `i <= 5`;
- **Incremento:** `i++`.

Enquanto a condição permanecer verdadeira, o bloco de código será executado.

Como resultado, serão exibidos os valores de **1 até 5**.

---

### **Linhas 07–14**

```javascript
console.log("Laço while:");

let j = 1;

while (j <= 5) {
    console.log("Valor de j:", j);
    j++;
}
```

O segundo exemplo demonstra a utilização do laço `while`.

Inicialmente, é criada a variável `j`, que será utilizada como variável de controle da repetição.

O comando `while` verifica a condição antes da execução de cada iteração.

Enquanto `j <= 5`, o bloco será executado e, ao final de cada repetição, o comando `j++` incrementa a variável, permitindo que a condição seja reavaliada.

Assim como no exemplo anterior, o programa exibirá os números de **1 até 5**.

---

### **Linhas 16–23**

```javascript
console.log("Laço do...while:");

let k = 5;

do {
    console.log("Valor de k:", k);
    k--;
} while (k >= 1);
```

O terceiro exemplo apresenta o funcionamento do laço `do...while`.

A variável `k` é inicializada com o valor `5`.

Diferentemente dos demais laços, o bloco de código é executado **antes** da verificação da condição de repetição.

Após cada execução, a condição `k >= 1` é avaliada. Enquanto ela permanecer verdadeira, o bloco continuará sendo executado.

Neste exemplo, o valor de `k` é decrementado utilizando `k--`, fazendo com que sejam exibidos os números de **5 até 1**.

---
---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|-----------|-----------|
| `for` | Laço de repetição com controle por índice. É recomendado quando a quantidade de repetições é conhecida previamente. |
| `while` | Laço que executa um bloco de código enquanto uma condição permanecer verdadeira. A condição é verificada antes de cada repetição. |
| `do...while` | Laço que executa o bloco de código ao menos uma vez antes de verificar a condição de repetição. |
| `console.log()` | Função utilizada para exibir informações no console durante a execução do programa. |
| `let` | Palavra-chave utilizada para declarar variáveis com escopo de bloco. |
| `i++` | Operador de incremento que aumenta o valor da variável em uma unidade a cada repetição. |
| `k--` | Operador de decremento que reduz o valor da variável em uma unidade a cada repetição. |

---

## Laços de Repetição Aplicados a Arrays

Os laços de repetição tornam-se ainda mais úteis quando utilizados para percorrer coleções de dados, como os **arrays**.

Nesta seção, serão apresentados exemplos utilizando os mesmos laços estudados anteriormente (`for`, `while` e `do...while`), além do laço `for...of`, que foi projetado especificamente para percorrer os elementos de estruturas iteráveis.

Observe o código a seguir.

---
## 💻 Código Completo

**Arquivo:** `lacosarray.js`

```javascript
let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

console.log("FOR:");

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

console.log("WHILE:");

let j = 0;

while (j < frutas.length) {
    console.log(`Fruta na posição ${j}: ${frutas[j]}`);
    j++;
}

console.log("DO...WHILE:");

let k = 0;

do {
    console.log(`Fruta na posição ${k}: ${frutas[k]}`);
    k++;
} while (k < frutas.length);

console.log("FOR...OF:");

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–07**

```javascript
let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

console.log("FOR:");

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}
```

Inicialmente, é criado o array `frutas`, contendo cinco elementos do tipo string.

Em seguida, o programa utiliza o laço `for` para percorrer todos os elementos armazenados.

A variável `i` representa o índice do array e inicia com o valor `0`, correspondente à posição do primeiro elemento.

A condição:

```javascript
i < frutas.length
```

mantém o laço em execução enquanto o índice for menor que a quantidade de elementos do array.

A cada repetição, `i++` incrementa a variável de controle, permitindo acessar o próximo elemento.

A template string utilizada no `console.log()` exibe tanto a posição quanto o conteúdo armazenado:

```javascript
`Fruta na posição ${i}: ${frutas[i]}`
```

---

### **Linhas 09–16**

```javascript
console.log("WHILE:");

let j = 0;

while (j < frutas.length) {
    console.log(`Fruta na posição ${j}: ${frutas[j]}`);
    j++;
}
```

Este bloco percorre o mesmo array utilizando o laço `while`.

A variável `j` é inicializada com o valor `0` antes do início da repetição.

Enquanto a condição:

```javascript
j < frutas.length
```

for verdadeira, o elemento armazenado na posição `j` será exibido.

Ao final de cada repetição, o comando:

```javascript
j++;
```

incrementa a variável, permitindo avançar para a próxima posição do array.

O resultado é equivalente ao obtido com o laço `for`, embora a inicialização, a condição e o incremento estejam organizados separadamente.

---

### **Linhas 18–25**

```javascript
console.log("DO...WHILE:");

let k = 0;

do {
    console.log(`Fruta na posição ${k}: ${frutas[k]}`);
    k++;
} while (k < frutas.length);
```

Neste trecho, o array é percorrido utilizando o laço `do...while`.

A variável `k` é inicializada com o valor `0`.

O bloco iniciado por `do` é executado antes da verificação da condição. Por essa razão, essa estrutura sempre realiza pelo menos uma repetição.

Após exibir o elemento atual, o comando:

```javascript
k++;
```

incrementa a variável de controle.

Em seguida, a condição:

```javascript
k < frutas.length
```

é avaliada. O processo continua enquanto ainda existirem elementos a serem percorridos.

---

### **Linhas 27–31**

```javascript
console.log("FOR...OF:");

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}
```

O último bloco utiliza o laço `for...of` para percorrer diretamente os elementos do array.

A cada repetição, a variável `fruta` recebe um dos valores armazenados em `frutas`.

Diferentemente dos exemplos anteriores, essa estrutura não utiliza índices nem a propriedade `length`.

O `for...of` é especialmente indicado quando o objetivo é acessar diretamente os elementos de um array, sem a necessidade de conhecer suas posições.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|-----------|-----------|
| Array | Estrutura utilizada para armazenar vários valores em uma única variável. |
| `for` | Laço de repetição tradicional, utilizado para percorrer o array por meio de índices. |
| `while` | Executa o bloco de código enquanto a condição permanecer verdadeira. |
| `do...while` | Executa o bloco de código antes de verificar a condição, garantindo ao menos uma repetição. |
| `for...of` | Percorre diretamente os elementos de um array, sem utilizar índices. |
| `frutas.length` | Retorna a quantidade de elementos armazenados no array `frutas`. |
| `frutas[indice]` | Permite acessar o elemento armazenado em uma posição específica do array. |
| `console.log()` | Exibe informações no console durante a execução do programa. |
| Template string | Sintaxe delimitada por crases que permite inserir expressões utilizando `${...}`. |
| Incremento `++` | Aumenta o valor da variável de controle em uma unidade a cada repetição. |

---

## 💡 Dicas do Professor

> **Utilize o laço `for` quando a quantidade de repetições for conhecida.**
>
> Esse laço é indicado quando existe um controle definido de início, condição e incremento, como ao percorrer os índices de um array.

> **Utilize o laço `while` quando não for possível determinar previamente a quantidade de repetições.**
>
> Como a condição é verificada antes da execução do bloco, o laço poderá não ser executado nenhuma vez.

> **Utilize o laço `do...while` quando o bloco precisar ser executado ao menos uma vez.**
>
> Nesse caso, a condição somente será verificada após a primeira execução.

> **Utilize `for...of` para acessar diretamente os elementos de um array.**
>
> Essa estrutura é especialmente adequada quando não há necessidade de utilizar o índice de cada elemento.

> **Atualize sempre a variável de controle.**
>
> Nos laços `while` e `do...while`, a ausência de incremento ou decremento pode provocar uma repetição infinita.

> **Utilize a propriedade `length` para controlar o percurso do array.**
>
> Dessa forma, o código continuará funcionando mesmo que novos elementos sejam adicionados ou removidos.
---------------------

## 💡 Resumo Final

Neste capítulo foram apresentados os principais laços de repetição disponíveis na linguagem JavaScript, utilizados para executar um mesmo bloco de código diversas vezes de forma controlada.

Inicialmente, foram estudados os laços `for`, `while` e `do...while`, destacando suas características, diferenças e situações em que cada um é mais indicado.

Em seguida, esses mesmos laços foram aplicados na manipulação de arrays, demonstrando como percorrer coleções de dados utilizando índices e a propriedade `length`.

Por fim, foi apresentado o laço `for...of`, uma estrutura moderna que permite percorrer diretamente os elementos de um array, tornando o código mais simples e legível quando não há necessidade de utilizar os índices.

Ao compreender o funcionamento dessas estruturas, torna-se possível desenvolver algoritmos capazes de processar grandes quantidades de dados de forma eficiente, reduzindo a repetição de código e aumentando sua organização.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender o funcionamento dos principais laços de repetição da linguagem JavaScript;
- identificar as diferenças entre os laços `for`, `while` e `do...while`;
- controlar a execução de repetições utilizando condições e variáveis de controle;
- percorrer arrays utilizando diferentes estruturas de repetição;
- utilizar a propriedade `length` para controlar o percurso de um array;
- acessar elementos por meio de seus índices;
- utilizar o laço `for...of` para percorrer diretamente os elementos de uma coleção;
- selecionar a estrutura de repetição mais adequada para cada situação.

---------------------

## 📚 Exercícios de Fixação

- https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/lacos-repeticao-exercicio

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
// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais

class Pessoa {

   #nome;
   #email;

   setNome(nome) {
     if (nome) {
       this.#nome = nome;
       return true;
     } else {
       return false;
     }
   }

   getNome() {
     return this.#nome;
   }

   setEmail(email) {
     if (email) {
       this.#email = email;
       return true;
     } else {
       return false;
     }
   }
   getEmail() {
     return this.#email;
   }

 }

 module.exports = Pessoa;
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
// Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais

const Pessoa = require('./Pessoa');

class PF extends Pessoa {

 #cpf;

setCPF(cpf) {
     if (cpf) {
       this.#cpf = cpf;
       return true;
     } else {
       return false;
     }
   }
   getCPF() {
     return this.#cpf;
   }
 }
module.exports = PF;
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
 const Pessoa = require('./pessoas/Pessoa');
 const PF = require('./pessoas/PF');
 const x = new Pessoa();
 let resposta = x.setNome('');
 console.log(resposta);
 if (resposta) {
   console.log(x.getNome());
 } else {
   console.log("Nome vazio");
 }
 resposta = x.setEmail('vaguetti@gmail.com');
 console.log(resposta);
 if (resposta) {
   console.log(x.getEmail());
 } else {
   console.log("E-mail vazio");
 }
 const y = new PF();
 resposta = y.setNome('Pedro');
 console.log(resposta);
 if (resposta) {
   console.log(y.getNome());
 }
 resposta = y.setEmail('');
 console.log(resposta);
 if (resposta) {
   console.log(y.getEmail());
 } else {
   console.log("Email vazio");
 }
 resposta = y.setCPF('123456789-10');
 console.log(resposta);
 if (resposta) {
   console.log(y.getCPF());
 }
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
// Arquivo criado em projeto no www.stackblitz.com denominado PJ.js (Pessoa Jurídica)
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança e sobrescrita de métodos,
// bem como encapsulamento adicionados de condicionais e operadores de comparação

const Pessoa = require('./Pessoa');

class PJ extends Pessoa {

   #cnpj;

   setCNPJ(cnpj) {

     /*
      Operadores de comparação:
      <  : menor que
      >  : maior que
      <= : menor ou igual que
      >= : maior ou igual que
     */

     if (cnpj) {

       if (cnpj.length < 18) {
         return false;
       }

       this.#cnpj = cnpj;
       return true;

     } else {

       return false;

     }

   }

   getCNPJ() {
     return this.#cnpj;
   }

   // Sobrescrita do método setEmail()
   setEmail(email) {

     /*
      Operadores de comparação:
      ==  : igualdade frouxa
      === : igualdade estrita
      !=  : diferença frouxa
      !== : diferença estrita
     */

     if (email !== '') {

       if (email.includes('@')) {

         super.setEmail(email);

         return true;

       }

     } else {

       return false;

     }

   }

 }

 module.exports = PJ;
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
// Arquivo criado em projeto no www.stackblitz.com denominado usaPessoas.js
// Arquivo criado dentro de uma pasta /objetos na raiz do projeto
// Objetivo do exemplo: demonstrar a utilização dos conceitos de encapsulamento
// com adição de condicionais e Herança
// Classes Pessoa, PF e PJ disponíveis na pasta /objetos/pessoas

 console.log("==== Objeto Pessoa =====");

 const Pessoa = require('./pessoas/Pessoa');

 const x = new Pessoa();

 // resposta = x.setNome('Leandro');
 resposta = x.setNome('');

 console.log(resposta);

 if (resposta) {
   console.log(x.getNome());
 } else {
   console.log("Nome vazio");
 }

 resposta = x.setEmail('vaguetti@gmail.com');

 console.log(resposta);

 if (resposta) {
   console.log(x.getEmail());
 } else {
   console.log("E-mail vazio");
 }

// ===================================
 console.log("==== Objeto PF =====");

const PF = require('./pessoas/PF');

const y = new PF();

 resposta = y.setNome('Pedro');
 console.log(resposta);

 if (resposta) {
   console.log(y.getNome());
 } else {
   console.log("Nome vazio");
 }

 resposta = y.setEmail('');
 console.log(resposta);

 if (resposta) {
   console.log(y.getEmail());
 } else {
   console.log("Email vazio");
 }

 resposta = y.setCPF('123456789-10');
 console.log(resposta);

 if (resposta) {
   console.log(y.getCPF());
 } else {
   console.log("CPF vazio");
 }

 // ===================================
 console.log("==== Objeto PJ =====");

 const PJ = require('./pessoas/PJ');

 const z = new PJ();

 resposta = z.setNome('Empresa ABC');
 console.log(resposta);

 if (resposta) {
   console.log(z.getNome());
 } else {
   console.log("Nome vazio");
 }

 resposta = z.setEmail('contato@empresa.com');
  console.log(resposta);

 if (resposta) {
   console.log(z.getEmail());
 } else {
   console.log("E-mail inválido");
 }
 
 resposta = z.setCNPJ('12.345.678/0001-90');
 console.log(resposta);

 if (resposta) {
   console.log(z.getCNPJ());
 } else {
   console.log("CNPJ inválido");
 }
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

-   https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/heranca-sobrescrita-validacao-exercicio

# 📘 Orientação a Objetos -- Herança, Encapsulamento e Operadores Lógicos

## Introdução

Observe o seguinte código de exemplo relativo à declaração da classe
**Aluno**, que é uma subclasse da classe **PF**. Este exemplo aprofunda
os conceitos de herança, encapsulamento com validação e o uso de
operadores lógicos em JavaScript.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `Aluno.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança, bem como
// encapsulamento adicionados de condicionais utilizando operadores lógicos

const PF = require('./PF');

class Aluno extends PF {

  #matricula;
  #curso;

  setMatricula(matricula) {
    if (matricula) {
      if ((matricula.length === 8) &&
          (matricula.startsWith("20"))) {
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    if (curso) {
      if ((curso === 'ADS') || (curso === 'SI')) {
        this.#curso = curso;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getCurso() {
    return this.#curso;
  }

}

module.exports = Aluno;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--04

Apresentam informações gerais sobre o arquivo, seu objetivo e
localização.

### Linha 05

Importa a classe `PF`, permitindo que `Aluno` herde todos os métodos
públicos já implementados.

### Linhas 06--08

Declaram a classe `Aluno`, especializada da classe `PF`, além dos
atributos privados `#matricula` e `#curso`.

### Linhas 09--21

Implementam o método `setMatricula()`, que utiliza o operador lógico
`&&` para validar simultaneamente:

- matrícula com exatamente oito caracteres;
- matrícula iniciando com `"20"`.

### Linhas 22--24

Método `getMatricula()`, responsável por retornar a matrícula
armazenada.

### Linhas 25--37

Implementam o método `setCurso()`, utilizando o operador lógico `||`
para aceitar apenas os cursos `ADS` ou `SI`.

### Linhas 38--40

Método `getCurso()`, responsável por retornar o curso armazenado.

### Linhas 41--42

Encerram a classe e exportam o módulo utilizando `module.exports`.

------------------------------------------------------------------------

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| `extends` | Permite que uma classe herde atributos e métodos de outra classe. |
| Encapsulamento | Protege os atributos privados da classe, permitindo seu acesso apenas por métodos públicos. |
| `#atributo` | Declara um atributo privado da classe. |
| `&&` | Operador lógico **E (AND)**. Todas as condições devem ser verdadeiras para que a expressão seja verdadeira. |
| `\|\|` | Operador lógico **OU (OR)**. Pelo menos uma das condições deve ser verdadeira para que a expressão seja verdadeira. |
| `startsWith()` | Verifica se uma string inicia com um determinado texto. |
| `length` | Retorna a quantidade de caracteres de uma string. |
| Getter / Setter | Métodos utilizados para acessar e modificar atributos privados de forma controlada. |
| `module.exports` | Exporta a classe para que possa ser reutilizada em outros módulos JavaScript. |
| `require()` | Importa módulos ou classes previamente exportados. |

---
## 💡 Dicas do Professor

- Utilize `&&` quando todas as condições forem obrigatórias.
- Utilize `||` quando qualquer condição puder ser aceita.
- Valide sempre os dados antes de armazená-los.
- Aproveite a herança para evitar duplicação de código.

------------------------------------------------------------------------

## Utilização das Classes -- Arquivo `usaPessoas.js`

Adicione o trecho abaixo ao final do arquivo para testar a classe
`Aluno`.

```javascript
 console.log("==== Objeto Aluno =====");
 const Aluno = require('./pessoas/Aluno');
 const w = new Aluno();

 resposta = w.setNome('Pedro');
 console.log(resposta);

 if (resposta) {
   console.log(w.getNome());
 } else {
   console.log("Nome vazio");
 }

 resposta = w.setMatricula('20123456');
 console.log(resposta);

 if (resposta) {
   console.log(w.getMatricula());
 } else {
   console.log("Matrícula inválida");
 }

 resposta = w.setCurso('SIS');
 console.log(resposta);

 if (resposta) {
   console.log(w.getCurso());
 } else {
   console.log("Curso inválido");
 }
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações

- O objeto `Aluno` herda todos os métodos públicos das classes `PF` e
  `Pessoa`.
- `setNome()` utiliza o método herdado da classe `Pessoa`.
- `setMatricula()` valida a matrícula utilizando o operador `&&`.
- `setCurso()` aceita apenas `ADS` ou `SI` utilizando o operador `||`.
- Os retornos `true` e `false` controlam a execução das mensagens
  apresentadas ao usuário.

------------------------------------------------------------------------

## 💡 Resumo Final

Nesta apostila foram estudados:

- herança em múltiplos níveis (`Pessoa → PF → Aluno`);
- encapsulamento com atributos privados;
- operadores lógicos `&&` e `||`;
- validação de dados;
- reutilização de código por herança;
- testes utilizando objetos e estruturas condicionais.

------------------------------------------------------------------------
<!--
## 📚 Exercícios de Fixação

Resolva o exercício prático **Herança, Sobrescrita e Validação de
Dados**, aplicando os conceitos estudados nesta apostila.
-->

# 📘 Orientação a Objetos – Relacionamentos entre Classes (1:1, 1:N e N:N)

## Introdução

Nos capítulos anteriores foram apresentados os principais conceitos da Programação Orientada a Objetos utilizando JavaScript, como a criação de classes, encapsulamento, herança e sobrescrita de métodos. Esses conceitos permitiram modelar objetos capazes de representar entidades do mundo real e proteger seus dados por meio de atributos privados e métodos públicos.

Entretanto, aplicações reais são compostas por diversas classes que precisam interagir entre si. Um sistema de cadastro, por exemplo, normalmente relaciona pessoas, endereços, telefones, documentos e diversos outros objetos que colaboram para representar uma mesma informação.

Nesta apostila serão estudados os principais tipos de relacionamentos entre classes utilizando JavaScript. Serão apresentados exemplos de relacionamentos **1:1 (um para um)**, **1:N (um para muitos)** e **N:N (muitos para muitos)**, demonstrando como estabelecer associações entre objetos, manter referências cruzadas e organizar aplicações orientadas a objetos de forma modular.

Ao longo da apostila serão utilizadas as classes `Pessoa`, `Endereco`, `Telefone`, `PF` e `Titulo`, permitindo observar como esses relacionamentos são implementados na prática e como diferentes objetos podem compartilhar informações de forma consistente.

---

![Figura 1 – Diagrama UML dos relacionamentos entre as classes utilizadas nesta apostila.](./images/relacionamentos.png)


> **Figura 1 – Diagrama UML das classes utilizadas nesta apostila.**
>
> Antes de iniciar a implementação, observe como as classes se relacionam entre si ns Figura 1. Ao longo da leitura, cada um desses relacionamentos será implementado e explicado detalhadamente.

## 🎯 Objetivos de Aprendizagem

Ao concluir esta apostila, você deverá ser capaz de:

- compreender a finalidade dos relacionamentos entre classes em aplicações orientadas a objetos;
- identificar os relacionamentos **1:1**, **1:N** e **N:N**;
- implementar relacionamentos entre objetos utilizando atributos de referência;
- utilizar a composição para representar associações entre classes;
- criar referências cruzadas entre objetos relacionados;
- validar objetos utilizando o operador `instanceof`;
- compreender a importância da modularização na organização de projetos JavaScript.

---

## Relacionamentos entre Classes

Em sistemas orientados a objetos, uma classe raramente funciona de maneira isolada. Normalmente, diferentes objetos precisam colaborar entre si para representar situações do mundo real.

Considere, por exemplo, um sistema de cadastro de pessoas. Além das informações básicas, como nome e e-mail, uma pessoa pode possuir um endereço, um ou mais telefones e outros documentos associados. Em vez de armazenar todas essas informações em uma única classe, a Programação Orientada a Objetos recomenda que cada conjunto de informações seja representado por uma classe específica, estabelecendo relacionamentos entre elas.

Nesta apostila serão apresentados três tipos de relacionamentos:

- **Relacionamento 1:1 (um para um):** um objeto está associado a exatamente um objeto de outra classe.
- **Relacionamento 1:N (um para muitos):** um objeto pode estar associado a vários objetos de outra classe.
- **Relacionamento N:N (muitos para muitos):** vários objetos de uma classe podem se relacionar com vários objetos de outra classe.

Os exemplos apresentados foram construídos de forma incremental. Inicialmente será apresentada a classe `Pessoa`, que estabelece relacionamentos com as classes `Endereco` e `Telefone`. Em seguida, será introduzido um relacionamento **1:1** entre as classes `PF` e `Titulo`. Ao final da apostila, todas as classes serão integradas em um único exemplo, demonstrando o funcionamento conjunto dos relacionamentos estudados.

---

## Relacionamento entre as Classes `Pessoa`, `Endereco` e `Telefone`

A primeira etapa consiste em ampliar a classe `Pessoa`, apresentada nos capítulos anteriores, adicionando relacionamentos com as classes `Endereco` e `Telefone`.

Nesse modelo:

- uma **Pessoa** pode possuir um **Endereço** associado;
- uma **Pessoa** pode possuir vários **Telefones**;
- os objetos relacionados mantêm referências entre si, permitindo navegar pelos relacionamentos em ambos os sentidos.

A implementação também utiliza validação com o operador `instanceof`, garantindo que apenas objetos das classes esperadas possam ser associados.

A seguir é apresentada a implementação completa da classe `Pessoa`, responsável por estabelecer esses relacionamentos.

## Relacionamento 1:N e N:N – Classe `Pessoa`

A classe `Pessoa`, apresentada nos capítulos anteriores, será ampliada para permitir o relacionamento com objetos das classes `Endereco` e `Telefone`.

Nesse exemplo são implementados dois tipos de relacionamentos:

- **1:N (um para muitos):** uma pessoa pode estar associada a um endereço, enquanto um mesmo endereço pode estar relacionado a várias pessoas.
- **N:N (muitos para muitos):** uma pessoa pode possuir vários telefones e um mesmo telefone pode estar associado a diferentes pessoas.

Para garantir a consistência das associações, os métodos responsáveis pelos relacionamentos utilizam o operador `instanceof`, verificando se o objeto recebido pertence à classe esperada antes de estabelecer o vínculo.

### 💻 Código Completo

**Arquivo:** `Pessoa.js`

```javascript
// Arquivo Pessoa.js

const Telefone = require('./Telefone');
const Endereco = require('./Endereco');

class Pessoa {

    #nome;
    #email;

    // Classes relacionadas com Pessoa
    #endereco;
    #telefones = [];

    setEndereco(endereco) {
        if (endereco instanceof Endereco) {
            this.#endereco = endereco;
            endereco.addPessoa(this); // referência cruzada
            return true;
        } else {
            return false;
        }
    }

    getEndereco() {
        return this.#endereco;
    }

    addTelefone(telefone) {
        if (telefone instanceof Telefone) {
            this.#telefones.push(telefone);
            telefone.addPessoa(this); // referência cruzada
            return true;
        } else {
            return false;
        }
    }

    getTelefones() {
        return this.#telefones;
    }

    setNome(nome) {
        if (nome) {
            this.#nome = nome;
            return true;
        } else {
            return false;
        }
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (email) {
            this.#email = email;
            return true;
        } else {
            return false;
        }
    }

    getEmail() {
        return this.#email;
    }

}

module.exports = Pessoa;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–03**

```javascript
const Telefone = require('./Telefone');
const Endereco = require('./Endereco');
```

Importa as classes `Telefone` e `Endereco`, que serão utilizadas para estabelecer os relacionamentos da classe `Pessoa`.

Essas importações permitem que objetos dessas classes sejam utilizados durante a execução do programa.

---

#### **Linhas 05–11**

```javascript
class Pessoa {

    #nome;
    #email;

    #endereco;
    #telefones = [];
```

Declara a classe `Pessoa` e seus atributos privados.

Os atributos `#nome` e `#email` armazenam os dados básicos da pessoa.

Os atributos `#endereco` e `#telefones` representam os relacionamentos com outras classes:

- `#endereco` armazena um objeto da classe `Endereco`;
- `#telefones` armazena um conjunto de objetos da classe `Telefone`.

---

#### **Linhas 13–21 — Método `setEndereco()`**

```javascript
setEndereco(endereco) {
    if (endereco instanceof Endereco) {
        this.#endereco = endereco;
        endereco.addPessoa(this);
        return true;
    } else {
        return false;
    }
}
```

Esse método estabelece o relacionamento entre uma pessoa e um endereço.

Antes de realizar a associação, o operador `instanceof` verifica se o objeto recebido pertence à classe `Endereco`.

Quando a validação é bem-sucedida:

- o endereço é armazenado em `#endereco`;
- é criada uma referência cruzada utilizando `endereco.addPessoa(this)`, permitindo que o objeto `Endereco` também conheça a pessoa associada.

Caso o objeto informado não seja válido, o método retorna `false`.

---

#### **Linhas 23–25 — Método `getEndereco()`**

```javascript
getEndereco() {
    return this.#endereco;
}
```

Retorna o objeto `Endereco` atualmente associado à pessoa.

---

#### **Linhas 27–35 — Método `addTelefone()`**

```javascript
addTelefone(telefone) {
    if (telefone instanceof Telefone) {
        this.#telefones.push(telefone);
        telefone.addPessoa(this);
        return true;
    } else {
        return false;
    }
}
```

Adiciona um objeto da classe `Telefone` ao array `#telefones`.

Assim como no método anterior, a associação somente é realizada quando o objeto informado pertence à classe esperada.

Além de armazenar o telefone, também é criada uma referência cruzada por meio de `telefone.addPessoa(this)`.

---

#### **Linhas 37–39 — Método `getTelefones()`**

```javascript
getTelefones() {
    return this.#telefones;
}
```

Retorna o array contendo todos os telefones associados à pessoa.

---

#### **Linhas 41–59 — Getters e Setters**

Os métodos:

- `setNome()`
- `getNome()`
- `setEmail()`
- `getEmail()`

seguem o mesmo padrão apresentado nas apostilas anteriores.

Os métodos `set` verificam se o valor recebido é válido antes de armazená-lo. Quando a validação é bem-sucedida retornam `true`; caso contrário retornam `false`.

Os métodos `get` retornam os valores armazenados nos respectivos atributos privados.

---

#### **Linha 61**

```javascript
module.exports = Pessoa;
```

Exporta a classe `Pessoa`, permitindo sua reutilização em outros arquivos do projeto.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Composição | A classe `Pessoa` possui objetos das classes `Endereco` e `Telefone`. |
| Relacionamento 1:N | Um objeto `Endereco` pode estar relacionado a várias pessoas. |
| Relacionamento N:N | Uma pessoa pode possuir vários telefones e um telefone pode estar associado a várias pessoas. |
| Referência cruzada | Objetos relacionados armazenam referências entre si para permitir navegação em ambos os sentidos. |
| `instanceof` | Verifica se um objeto pertence à classe esperada antes de estabelecer um relacionamento. |
| Encapsulamento | Os atributos permanecem privados e são acessados apenas por métodos públicos. |
| Modularização | A classe é exportada para reutilização em outros módulos do sistema. |

---

### 💡 Dicas do Professor

> **Relacione objetos, não dados.**
>
> Em aplicações orientadas a objetos, normalmente uma classe não armazena apenas valores primitivos. É comum que ela mantenha referências para outros objetos, representando os relacionamentos existentes no domínio do problema.

> **Sempre valide os objetos antes de criar um relacionamento.**
>
> O uso do operador `instanceof` evita que objetos incompatíveis sejam associados à classe, aumentando a segurança da aplicação.

> **Utilize referências cruzadas quando necessário.**
>
> Em alguns cenários, permitir que dois objetos conheçam um ao outro facilita a navegação pelos relacionamentos e torna a implementação mais próxima da modelagem representada em diagramas UML.

## Relacionamento 1:N – Classe `Endereco`

A classe `Endereco` representa as informações de localização associadas a uma ou mais pessoas.

Embora uma pessoa possua apenas um endereço em nosso exemplo, um mesmo endereço pode estar associado a diversas pessoas, caracterizando um relacionamento **1:N (um para muitos)**. Para representar essa associação, a classe mantém um array contendo todas as pessoas vinculadas a esse endereço.

### 💻 Código Completo

**Arquivo:** `Endereco.js`

```javascript
// Arquivo Endereco.js

class Endereco {

    #logradouro;
    #cep;
    #pessoas = [];

    addPessoa(pessoa) {
        if (pessoa) {
            this.#pessoas.push(pessoa);
            return true;
        } else {
            return false;
        }
    }

    getPessoas() {
        return this.#pessoas;
    }

    setLogradouro(logradouro) {
        if (logradouro) {
            this.#logradouro = logradouro;
            return true;
        } else {
            return false;
        }
    }

    getLogradouro() {
        return this.#logradouro;
    }

    setCep(cep) {
        if (cep) {
            this.#cep = cep;
            return true;
        } else {
            return false;
        }
    }

    getCep() {
        return this.#cep;
    }

}

module.exports = Endereco;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–06**

```javascript
class Endereco {

    #logradouro;
    #cep;
    #pessoas = [];
```

Declara a classe `Endereco` e seus atributos privados.

Os atributos `#logradouro` e `#cep` armazenam as informações do endereço.

O atributo `#pessoas` é um array responsável por armazenar todas as pessoas associadas a esse endereço.

---

#### **Linhas 08–16 — Método `addPessoa()`**

```javascript
addPessoa(pessoa) {
    if (pessoa) {
        this.#pessoas.push(pessoa);
        return true;
    } else {
        return false;
    }
}
```

Adiciona um objeto da classe `Pessoa` ao array `#pessoas`.

Sempre que uma pessoa é associada a esse endereço, o objeto é armazenado nesse array, permitindo que o relacionamento seja percorrido no sentido inverso.

O método retorna:

- `true`, quando a associação é realizada;
- `false`, caso o objeto informado seja inválido.

---

#### **Linhas 18–20 — Método `getPessoas()`**

```javascript
getPessoas() {
    return this.#pessoas;
}
```

Retorna o array contendo todas as pessoas associadas ao endereço.

Esse método permite recuperar todos os objetos `Pessoa` vinculados a esse endereço.

---

#### **Linhas 22–30 — Métodos `setLogradouro()` e `getLogradouro()`**

```javascript
setLogradouro(logradouro) {
    if (logradouro) {
        this.#logradouro = logradouro;
        return true;
    } else {
        return false;
    }
}

getLogradouro() {
    return this.#logradouro;
}
```

Esses métodos são responsáveis pelo armazenamento e recuperação do logradouro.

O método `setLogradouro()` realiza uma validação simples, verificando se o valor informado não está vazio antes de armazená-lo.

---

#### **Linhas 32–40 — Métodos `setCep()` e `getCep()`**

```javascript
setCep(cep) {
    if (cep) {
        this.#cep = cep;
        return true;
    } else {
        return false;
    }
}

getCep() {
    return this.#cep;
}
```

Permitem armazenar e recuperar o CEP associado ao endereço.

Assim como os demais métodos `set`, a atribuição somente é realizada quando o valor informado é considerado válido.

---

#### **Linha 42**

```javascript
module.exports = Endereco;
```

Exporta a classe `Endereco`, permitindo sua reutilização em outros módulos do projeto.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Encapsulamento | Os atributos da classe são privados e acessados apenas por métodos públicos. |
| Relacionamento 1:N | Um endereço pode estar associado a várias pessoas. |
| Relacionamento Reverso | O endereço mantém uma lista das pessoas que utilizam esse endereço. |
| Arrays de Objetos | O atributo `#pessoas` armazena referências para objetos da classe `Pessoa`. |
| Validação de Dados | Os métodos `set` verificam se os valores informados são válidos antes de armazená-los. |
| Modularização | A classe é exportada para reutilização em outros arquivos do projeto. |

---

### 💡 Dicas do Professor

> **Relacionamentos são implementados por meio de referências entre objetos.**
>
> Observe que a classe `Endereco` não armazena apenas informações textuais, mas também referências para objetos da classe `Pessoa`.

> **Utilize arrays quando um relacionamento puder envolver vários objetos.**
>
> Como um mesmo endereço pode estar relacionado a diversas pessoas, foi utilizado um array para armazenar essas referências.

> **Mantenha a responsabilidade de cada classe bem definida.**
>
> A classe `Endereco` é responsável apenas pelos dados relacionados ao endereço e pelas pessoas associadas a ele, sem conhecer detalhes internos da classe `Pessoa`.

## Relacionamento N:N – Classe `Telefone`

A classe `Telefone` representa os números de telefone associados às pessoas cadastradas no sistema.

Neste exemplo, foi implementado um relacionamento **N:N (muitos para muitos)**. Isso significa que:

- uma **Pessoa** pode possuir vários telefones;
- um **Telefone** pode estar associado a várias pessoas.

Para representar essa associação, a classe mantém um array contendo todas as pessoas vinculadas ao telefone.

### 💻 Código Completo

**Arquivo:** `Telefone.js`

```javascript
// Arquivo Telefone.js

class Telefone {

    #numero;
    #pessoas = [];

    addPessoa(pessoa) {
        if (pessoa) {
            this.#pessoas.push(pessoa);
            return true;
        } else {
            return false;
        }
    }

    getPessoas() {
        return this.#pessoas;
    }

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

}

module.exports = Telefone;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–05**

```javascript
class Telefone {

    #numero;
    #pessoas = [];
```

Declara a classe `Telefone` e seus atributos privados.

O atributo `#numero` armazena o número telefônico, enquanto `#pessoas` mantém uma lista com todas as pessoas associadas a esse telefone.

---

#### **Linhas 07–15 — Método `addPessoa()`**

```javascript
addPessoa(pessoa) {
    if (pessoa) {
        this.#pessoas.push(pessoa);
        return true;
    } else {
        return false;
    }
}
```

Adiciona uma pessoa ao conjunto de objetos associados ao telefone.

Sempre que o método `addTelefone()` da classe `Pessoa` estabelece um relacionamento, este método é chamado para criar a referência no sentido inverso, garantindo que ambas as classes conheçam a associação.

O método retorna:

- `true`, quando a associação é realizada com sucesso;
- `false`, caso o objeto informado seja inválido.

---

#### **Linhas 17–19 — Método `getPessoas()`**

```javascript
getPessoas() {
    return this.#pessoas;
}
```

Retorna o array contendo todas as pessoas associadas ao telefone.

Esse método permite percorrer o relacionamento no sentido inverso, identificando todos os objetos `Pessoa` que utilizam esse telefone.

---

#### **Linhas 21–29 — Métodos `setNumero()` e `getNumero()`**

```javascript
setNumero(numero) {
    if (numero) {
        this.#numero = numero;
        return true;
    } else {
        return false;
    }
}

getNumero() {
    return this.#numero;
}
```

Esses métodos são responsáveis pelo armazenamento e recuperação do número telefônico.

O método `setNumero()` realiza uma validação simples antes de armazenar o valor informado, retornando `true` quando a operação é concluída com sucesso e `false` caso contrário.

---

#### **Linha 31**

```javascript
module.exports = Telefone;
```

Exporta a classe `Telefone`, permitindo sua utilização em outros módulos do projeto.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Relacionamento N:N | Um telefone pode estar associado a várias pessoas, e uma pessoa pode possuir vários telefones. |
| Referência Cruzada | A associação é mantida tanto na classe `Pessoa` quanto na classe `Telefone`. |
| Arrays de Objetos | O atributo `#pessoas` armazena referências para objetos da classe `Pessoa`. |
| Encapsulamento | Os atributos permanecem privados e são acessados apenas por métodos públicos. |
| Validação | Os métodos verificam se os dados recebidos são válidos antes de armazená-los. |
| Modularização | A classe é exportada para reutilização em outros arquivos do projeto. |

---

### 💡 Dicas do Professor

> **Relacionamentos muitos para muitos são comuns em sistemas reais.**
>
> Em aplicações corporativas, é frequente encontrar situações em que um objeto pode estar relacionado a vários outros objetos, como alunos e disciplinas, autores e livros ou usuários e perfis de acesso.

> **As referências cruzadas facilitam a navegação entre os objetos.**
>
> Ao manter a associação em ambos os sentidos, torna-se possível recuperar todas as pessoas de um telefone ou todos os telefones de uma pessoa sem realizar novas buscas.

> **Evite duplicar responsabilidades.**
>
> A classe `Telefone` é responsável apenas pelas informações do telefone e pelas pessoas associadas a ele. Regras de negócio mais complexas devem ser implementadas em classes responsáveis pela coordenação dessas entidades.

## Relacionamento 1:1 – Classes `PF` e `Titulo`

Até este momento foram apresentados exemplos de relacionamentos **1:N** e **N:N**. Nesta seção será estudado o relacionamento **1:1 (um para um)**.

Nesse tipo de associação, cada objeto de uma classe está relacionado a exatamente um objeto da outra classe.

Como exemplo, será utilizado o cadastro de uma **Pessoa Física (PF)** e seu **Título de Eleitor**.

Nesse modelo:

- uma pessoa física possui um único título de eleitor;
- um título de eleitor pertence a apenas uma pessoa física.

Essa situação caracteriza um relacionamento **1:1**, bastante comum em sistemas que representam documentos pessoais, carteiras de habilitação, passaportes e outros registros exclusivos.

```text
Pessoa
   ▲
   │ (herança)
   │
  PF
   │
   │ 1:1
   ▼
Titulo
```

A implementação utiliza herança para especializar a classe `Pessoa` e composição para estabelecer o relacionamento com a classe `Titulo`.

---

## Classe `PF`

A classe `PF` representa uma especialização da classe `Pessoa`, acrescentando informações específicas de uma pessoa física.

Além do atributo `cpf`, essa classe mantém uma referência para um objeto da classe `Titulo`, implementando o relacionamento **1:1**.

### 💻 Código Completo

**Arquivo:** `PF.js`

```javascript
const Pessoa = require('./Pessoa');
const Titulo = require('./Titulo');

class PF extends Pessoa {

    #cpf;
    #titulo;

    setCPF(cpf) {
        if (cpf) {
            this.#cpf = cpf;
            return true;
        } else {
            return false;
        }
    }

    getCPF() {
        return this.#cpf;
    }

    setTitulo(titulo) {
        if (titulo instanceof Titulo) {
            this.#titulo = titulo;
            titulo.setPF(this);
            return true;
        } else {
            return false;
        }
    }

    getTitulo() {
        return this.#titulo;
    } 

}

module.exports = PF;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–02**

```javascript
const Pessoa = require('./Pessoa');
const Titulo = require('./Titulo');
```

Importam as classes utilizadas por `PF`.

A classe `Pessoa` será utilizada como superclasse, enquanto `Titulo` será utilizada para estabelecer o relacionamento **1:1**.

---

#### **Linhas 04–08**

```javascript
class PF extends Pessoa {

    #cpf;
    #titulo;
```

Declara a classe `PF`, especializada da classe `Pessoa`.

Por utilizar `extends`, todos os métodos públicos da classe `Pessoa` permanecem disponíveis em `PF`.

São adicionados dois novos atributos privados:

- `#cpf`, que armazena o CPF;
- `#titulo`, que mantém a referência para o objeto `Titulo`.

---

#### **Linhas 10–18 — Método `setCPF()`**

```javascript
setCPF(cpf) {
    if (cpf) {
        this.#cpf = cpf;
        return true;
    } else {
        return false;
    }
}
```

Armazena o CPF após uma validação simples.

Caso o valor informado seja válido, o método retorna `true`; caso contrário, retorna `false`.

---

#### **Linhas 20–22 — Método `getCPF()`**

```javascript
getCPF() {
    return this.#cpf;
}
```

Retorna o CPF armazenado no objeto.

---

#### **Linhas 24–33 — Método `setTitulo()`**

```javascript
setTitulo(titulo) {
    if (titulo instanceof Titulo) {
        this.#titulo = titulo;
        titulo.setPF(this);
        return true;
    } else {
        return false;
    }
}
```

Estabelece o relacionamento entre um objeto `PF` e um objeto `Titulo`.

Antes da associação, o método verifica se o objeto recebido pertence à classe `Titulo` utilizando o operador `instanceof`.

Após a validação:

- o objeto é armazenado em `#titulo`;
- é criada uma referência cruzada por meio de `titulo.setPF(this)`.

Essa implementação garante que ambos os objetos conheçam a associação existente entre eles.

---

#### **Linhas 35–37 — Método `getTitulo()`**

```javascript
getTitulo() {
    return this.#titulo;
}
```

Retorna o objeto `Titulo` associado à pessoa física.

---

#### **Linha 39**

```javascript
module.exports = PF;
```

Exporta a classe `PF`, permitindo sua reutilização em outros módulos do sistema.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|----------|-----------|
| Herança | A classe `PF` herda atributos e métodos públicos da classe `Pessoa`. |
| Especialização | `PF` adiciona comportamentos específicos de uma pessoa física. |
| Relacionamento 1:1 | Cada objeto `PF` está associado a um único objeto `Titulo`. |
| Referência Cruzada | A associação é mantida nas duas classes (`PF` e `Titulo`). |
| `instanceof` | Garante que apenas objetos da classe `Titulo` sejam associados. |
| Encapsulamento | Os atributos permanecem privados e acessíveis apenas por métodos públicos. |

---

### 💡 Dicas do Professor

> **Herança e composição podem ser utilizadas simultaneamente.**
>
> Neste exemplo, a classe `PF` herda características da classe `Pessoa` e, ao mesmo tempo, mantém um relacionamento com a classe `Titulo`.

> **Relacionamentos 1:1 representam informações exclusivas.**
>
> Sempre que um objeto possuir exatamente um objeto correspondente, esse tipo de modelagem costuma ser uma boa escolha.

> **A referência cruzada mantém os objetos sincronizados.**
>
> Ao chamar `titulo.setPF(this)`, a associação passa a existir nos dois sentidos, facilitando a navegação entre os objetos.

## Classe `Titulo`

A classe `Titulo` representa o **Título de Eleitor** de uma pessoa física.

Neste exemplo, ela é utilizada para demonstrar a implementação de um relacionamento **1:1 (um para um)** com a classe `PF`.

Nesse tipo de relacionamento:

- cada **Pessoa Física** possui um único **Título de Eleitor**;
- cada **Título de Eleitor** pertence a apenas uma **Pessoa Física**.

Essa associação é bastante comum em sistemas reais, nos quais determinados documentos pertencem exclusivamente a uma única pessoa.

A classe também mantém uma referência para o objeto `PF`, permitindo navegar pelo relacionamento em ambos os sentidos por meio de uma **referência cruzada**.

### 💻 Código Completo

**Arquivo:** `Titulo.js`

```javascript
// Código Titulo.js

class Titulo {

    #numero;
    #zona;
    #secao;

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setZona(zona) {
        if (zona) {
            this.#zona = zona;
            return true;
        } else {
            return false;
        }
    }

    getZona() {
        return this.#zona;
    }

    setSecao(secao) {
        if (secao) {
            this.#secao = secao;
            return true;
        } else {
            return false;
        }
    }

    getSecao() {
        return this.#secao;
    }

    // Relacionamento 1 para 1 com a classe PF

    #pf;

    setPF(pf) {
        if (pf) {
            this.#pf = pf;
            return true;
        } else {
            return false;
        }
    }

    getPF() {
        return this.#pf;
    }

}

module.exports = Titulo;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–06**

```javascript
class Titulo {

    #numero;
    #zona;
    #secao;
```

Declara a classe `Titulo` e seus atributos privados.

Os atributos representam as principais informações do título de eleitor:

- `#numero`: número do título;
- `#zona`: zona eleitoral;
- `#secao`: seção eleitoral.

Todos os atributos são privados, garantindo o encapsulamento das informações.

---

#### **Linhas 08–18 — Métodos `setNumero()` e `getNumero()`**

```javascript
setNumero(numero) {
    if (numero) {
        this.#numero = numero;
        return true;
    } else {
        return false;
    }
}

getNumero() {
    return this.#numero;
}
```

Esses métodos são responsáveis por armazenar e recuperar o número do título de eleitor.

O método `setNumero()` realiza uma validação simples antes de armazenar o valor informado.

---

#### **Linhas 20–30 — Métodos `setZona()` e `getZona()`**

```javascript
setZona(zona) {
    if (zona) {
        this.#zona = zona;
        return true;
    } else {
        return false;
    }
}

getZona() {
    return this.#zona;
}
```

Permitem armazenar e consultar a zona eleitoral.

Assim como os demais métodos `set`, somente valores válidos são armazenados.

---

#### **Linhas 32–42 — Métodos `setSecao()` e `getSecao()`**

```javascript
setSecao(secao) {
    if (secao) {
        this.#secao = secao;
        return true;
    } else {
        return false;
    }
}

getSecao() {
    return this.#secao;
}
```

Esses métodos armazenam e retornam a seção eleitoral correspondente ao título.

---

#### **Linhas 44–57 — Relacionamento com a classe `PF`**

```javascript
#pf;

setPF(pf) {
    if (pf) {
        this.#pf = pf;
        return true;
    } else {
        return false;
    }
}

getPF() {
    return this.#pf;
}
```

O atributo `#pf` mantém uma referência para o objeto da classe `PF` associado ao título.

Esse atributo implementa o relacionamento **1:1**, permitindo que um objeto `Titulo` conheça a pessoa física à qual pertence.

O método `setPF()` estabelece essa associação e o método `getPF()` permite recuperar posteriormente o objeto relacionado.

Essa implementação caracteriza uma **referência cruzada**, pois tanto `PF` quanto `Titulo` mantêm referências um ao outro.

---

#### **Linha 59**

```javascript
module.exports = Titulo;
```

Exporta a classe `Titulo`, permitindo sua reutilização em outros módulos da aplicação.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|-----------|-----------|
| Relacionamento 1:1 | Cada objeto `Titulo` pertence a exatamente um objeto `PF`, e cada objeto `PF` possui um único `Titulo`. |
| Encapsulamento | Os atributos permanecem privados e são acessados apenas por métodos públicos. |
| Referência Cruzada | A associação é mantida tanto na classe `PF` quanto na classe `Titulo`. |
| Validação | Os métodos `set` verificam se os valores recebidos são válidos antes de armazená-los. |
| Modularização | A classe é exportada utilizando `module.exports` para reutilização em outros arquivos. |

---

### 💡 Dicas do Professor

> **Relacionamentos 1:1 representam associações exclusivas.**
>
> Em sistemas reais, documentos como título de eleitor, carteira de habilitação, passaporte ou certificado digital normalmente pertencem a apenas uma pessoa.

> **As referências cruzadas facilitam a navegação entre objetos.**
>
> Ao armazenar a referência para o objeto `PF`, o título passa a conhecer seu proprietário, permitindo consultar seus dados sem necessidade de novas buscas.

> **Cada classe possui uma responsabilidade específica.**
>
> A classe `Titulo` é responsável apenas pelas informações do título de eleitor e pelo relacionamento com a classe `PF`, mantendo o princípio da responsabilidade única.

# Integração das Classes – Arquivo `usaPF.js`

Até este momento foram implementadas todas as classes que compõem o exemplo deste capítulo:

- `Pessoa`
- `Endereco`
- `Telefone`
- `PF`
- `Titulo`

Nesta seção será apresentado o arquivo **`usaPF.js`**, responsável por integrar todas essas classes em uma única aplicação.

Seu objetivo é demonstrar como criar objetos, preencher seus atributos, estabelecer os relacionamentos entre eles e consultar as informações armazenadas.

O exemplo também permite verificar o funcionamento das **referências cruzadas**, mostrando que os objetos relacionados conseguem acessar uns aos outros de maneira consistente.

---

### Fluxo de execução

```text
Importar Classes
        │
        ▼
Criar Objetos
        │
        ▼
Configurar os Objetos
        │
        ▼
Criar os Relacionamentos
        │
        ▼
Consultar os Dados
        │
        ▼
Verificar as Referências Cruzadas
```

---

## 💻 Código Completo

**Arquivo:** `usaPF.js`

```javascript
const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
const Titulo = require('./pessoas/Titulo');

const PF = require('./pessoas/PF');

const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

end.setLogradouro('QNM 40');

fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setSecao('DF');

const obj = new PF();

obj.setNome('José');

obj.setEndereco(end);       // vincula Endereco à PF

obj.addTelefone(fone1);     // vincula Telefone à PF
obj.addTelefone(fone2);     // vincula outro Telefone à PF

obj.setTitulo(titulo);      // vincula Título à PF

console.log(obj.getNome());

console.log(obj.getEndereco().getLogradouro());

console.log(obj.getTelefones());

console.log(obj.getTitulo().getNumero());

// Verificando as referências cruzadas

console.log(end.getPessoas());

console.log(fone1.getPessoas());

console.log(titulo.getPF().getNome());
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–04 — Importação das Classes**

```javascript
const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
const Titulo = require('./pessoas/Titulo');

const PF = require('./pessoas/PF');
```

Importa todas as classes necessárias para a execução do exemplo.

Cada classe foi implementada em um módulo independente e exportada utilizando `module.exports`, permitindo sua reutilização em diferentes partes da aplicação.

---

### **Linhas 06–08 — Criação dos Objetos**

```javascript
const end = new Endereco();

const fone1 = new Telefone();
const fone2 = new Telefone();
```

Cria as instâncias que serão utilizadas durante a execução.

Neste exemplo são criados:

- um endereço;
- dois telefones.

Esses objetos serão posteriormente associados à pessoa física.

---

### **Linhas 10–13 — Configuração dos Objetos**

```javascript
end.setLogradouro('QNM 40');

fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');
```

Define os dados do endereço e dos telefones.

Os valores são atribuídos por meio dos métodos `set`, preservando o encapsulamento das classes.

---

### **Linhas 15–17 — Criação do Título**

```javascript
const titulo = new Titulo();

titulo.setNumero('1234156');
titulo.setSecao('DF');
```

Cria um objeto da classe `Titulo` e define seus principais atributos.

Esse objeto será associado posteriormente à pessoa física.

---

### **Linhas 19–29 — Criação da Pessoa Física e dos Relacionamentos**

```javascript
const obj = new PF();

obj.setNome('José');

obj.setEndereco(end);

obj.addTelefone(fone1);
obj.addTelefone(fone2);

obj.setTitulo(titulo);
```

Cria uma instância da classe `PF` e estabelece todos os relacionamentos apresentados ao longo da apostila.

Ao final dessas instruções, o objeto `obj` possui:

- um endereço;
- dois telefones;
- um título de eleitor.

Durante essas associações, as referências cruzadas também são criadas automaticamente pelas classes.

---

### **Linhas 31–37 — Consulta das Informações**

```javascript
console.log(obj.getNome());

console.log(obj.getEndereco().getLogradouro());

console.log(obj.getTelefones());

console.log(obj.getTitulo().getNumero());
```

Exibe informações armazenadas no objeto `PF`.

São recuperados:

- nome;
- logradouro do endereço;
- lista de telefones;
- número do título de eleitor.

Esses dados demonstram que os relacionamentos foram criados corretamente.

---

### **Linhas 39–45 — Verificação das Referências Cruzadas**

```javascript
console.log(end.getPessoas());

console.log(fone1.getPessoas());

console.log(titulo.getPF().getNome());
```

Essa é a parte mais importante do exemplo.

Ela demonstra que os relacionamentos foram estabelecidos em ambos os sentidos.

É possível:

- consultar todas as pessoas associadas a um endereço;
- consultar todas as pessoas associadas a um telefone;
- recuperar a pessoa associada ao título de eleitor.

Esse comportamento caracteriza o uso de **referências cruzadas**, permitindo navegar pelos objetos da aplicação independentemente do ponto de partida.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Instanciação de Objetos | Objetos são criados utilizando o operador `new`. |
| Modularização | As classes são importadas utilizando `require()` e reutilizadas na aplicação. |
| Encapsulamento | Os atributos privados são manipulados apenas por métodos públicos. |
| Composição | O objeto `PF` mantém referências para objetos `Endereco`, `Telefone` e `Titulo`. |
| Herança | A classe `PF` herda atributos e métodos da classe `Pessoa`. |
| Relacionamento 1:1 | Implementado entre `PF` e `Titulo`. |
| Relacionamento 1:N | Implementado entre `Pessoa` e `Endereco`. |
| Relacionamento N:N | Implementado entre `Pessoa` e `Telefone`. |
| Referência Cruzada | Os objetos relacionados armazenam referências uns aos outros, permitindo navegação bidirecional. |

---

## 💡 Dicas do Professor

> **O arquivo `usaPF.js` funciona como um teste de integração.**
>
> Seu objetivo não é criar novas classes, mas verificar se todas as classes desenvolvidas anteriormente trabalham corretamente em conjunto.

> **Observe a sequência de execução.**
>
> Primeiro os objetos são criados, depois seus atributos são preenchidos e, somente então, os relacionamentos são estabelecidos.

> **As referências cruzadas simplificam a navegação entre os objetos.**
>
> Após associar um endereço ou um telefone à pessoa, também é possível recuperar a pessoa a partir desses objetos, sem necessidade de buscas adicionais.

> **Este exemplo reúne todos os conceitos estudados nesta apostila.**
>
> Durante sua execução são utilizados encapsulamento, herança, composição, modularização e os relacionamentos 1:1, 1:N e N:N, demonstrando como esses conceitos atuam de forma integrada em uma aplicação orientada a objetos.

---------------------

## 💡 Resumo Final

Neste capítulo foram apresentados os principais tipos de relacionamentos entre classes na Programação Orientada a Objetos utilizando JavaScript.

Inicialmente, a classe `Pessoa` foi expandida para estabelecer relacionamentos com as classes `Endereco` e `Telefone`, demonstrando como diferentes objetos podem colaborar para representar uma mesma entidade do mundo real.

Na sequência, foi implementado o relacionamento **1:1** entre as classes `PF` e `Titulo`, utilizando herança para especializar a classe `Pessoa` e composição para estabelecer a associação entre os objetos.

Ao longo do capítulo também foram aplicados conceitos fundamentais da Programação Orientada a Objetos, como:

- encapsulamento utilizando atributos privados;
- herança por meio da palavra-chave `extends`;
- composição entre objetos;
- modularização com `require()` e `module.exports`;
- validação de objetos utilizando o operador `instanceof`;
- referências cruzadas entre objetos relacionados.

Por fim, o arquivo `usaPF.js` integrou todas as classes desenvolvidas, demonstrando, na prática, como criar objetos, estabelecer relacionamentos e navegar entre eles por meio de seus métodos públicos.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- identificar e implementar relacionamentos **1:1**, **1:N** e **N:N** entre classes;
- utilizar composição para criar associações entre objetos;
- aplicar herança para especializar classes;
- utilizar o operador `instanceof` para validar objetos antes de estabelecer relacionamentos;
- implementar referências cruzadas para permitir a navegação entre objetos relacionados;
- organizar aplicações JavaScript utilizando módulos (`require()` e `module.exports`);
- integrar diferentes classes em uma aplicação orientada a objetos.

---------------------

## 📚 Exercícios de Fixação

- https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/relacionamentos-classes-exercicio

# 📘 Orientação a Objetos – Estruturas de Objetos, Exportações e Desestruturação

## Introdução

Ao desenvolver aplicações em JavaScript, existem diferentes formas de organizar dados e comportamentos relacionados. Dependendo da necessidade da aplicação, podemos utilizar **classes**, **funções que criam objetos** ou **objetos literais**.

Neste capítulo, utilizaremos como exemplo a representação de uma **Inscrição Estadual (IE)**, que pode ser relacinada com a Classe PJ, para estudar diferentes formas de construção e utilização de objetos em JavaScript.

Serão apresentadas três abordagens:

- uma implementação utilizando **classe**, por meio de `IEclss`;
- uma implementação utilizando uma **função fábrica**, por meio de `IEfunc()`;
- uma implementação utilizando um **objeto literal**, denominado `IEjson`.

O objeto `IEjson` também permitirá estabelecer uma relação com o conceito de **JSON (JavaScript Object Notation)**. Apesar da semelhança visual entre essas estruturas, veremos que um objeto literal JavaScript pode possuir propriedades e métodos, enquanto JSON é utilizado para representação e troca de dados.

Além da construção dos objetos, o capítulo apresenta recursos importantes da linguagem JavaScript, como **ES Modules (ESM)**, `export`, `import`, desestruturação e diferentes formas de exportação e importação de módulos.

---

## 🎯 Objetivos de Aprendizagem

Ao concluir este capítulo, você será capaz de:

- compreender diferentes formas de representar objetos em JavaScript;
- criar objetos utilizando classes;
- compreender o funcionamento de uma função fábrica;
- criar e utilizar objetos literais;
- diferenciar um objeto literal JavaScript do formato JSON;
- compreender o funcionamento básico dos ES Modules (ESM);
- utilizar `export` e `import` para compartilhar recursos entre arquivos;
- diferenciar exportação padrão (`default`) de exportação nomeada;
- utilizar desestruturação durante a importação de recursos;
- compreender como diferentes estruturas de objetos podem representar um mesmo domínio de aplicação.

---

## ES Modules (ESM)

O **ESM (ECMAScript Modules)** é o sistema moderno de módulos do JavaScript.

Ele permite organizar uma aplicação em diferentes arquivos, possibilitando que classes, funções, objetos e outros recursos sejam **exportados** de um módulo e posteriormente **importados** por outros módulos.

Para trabalhar com ESM, utilizamos principalmente as palavras-chave:

- `export` — disponibiliza um recurso para utilização em outros módulos;
- `import` — permite utilizar, em um arquivo, recursos exportados por outros módulos.

Ao utilizar ESM em arquivos JavaScript, podemos adotar a extensão:

```text
.mjs
```

Essa extensão identifica explicitamente o arquivo como um módulo ECMAScript.

Neste capítulo, utilizaremos arquivos `.mjs` para demonstrar diferentes formas de criação, exportação e importação de objetos.

---

## Exportação Padrão e Exportação Nomeada

O ESM permite diferentes formas de exportar recursos.

### Exportação Padrão (`default`)

A exportação padrão pode ser realizada utilizando:

```javascript
export default
```

Um módulo pode possuir apenas uma exportação padrão.

Durante a importação, não é necessário utilizar exatamente o mesmo nome utilizado na declaração original.

Exemplo:

```javascript
import IE from "./IE.mjs";
```

---

### Exportação Nomeada

Também podemos exportar recursos utilizando uma **exportação nomeada**.

Exemplo:

```javascript
export { IEfunc, IEjson };
```

Nesse caso, durante a importação, os nomes exportados são informados entre chaves:

```javascript
import { IEfunc, IEjson } from "./IE.mjs";
```

Essa forma permite que um mesmo módulo disponibilize diferentes recursos.

---

## Diferentes Formas de Representar Objetos

Para demonstrar essas possibilidades, utilizaremos como exemplo uma **Inscrição Estadual (IE)**.

A mesma entidade será representada utilizando três abordagens diferentes:

### 1. Classe `IEclss`

A primeira implementação utiliza uma **classe JavaScript**.

```javascript
class IEclss {
    // implementação
}
```

Essa abordagem permite reunir atributos e métodos em uma estrutura que poderá posteriormente ser utilizada para criar objetos por meio do operador `new`.

---

### 2. Função Fábrica `IEfunc()`

A segunda abordagem utiliza uma função responsável por criar e retornar um objeto.

```javascript
function IEfunc() {
    // implementação
}
```

Esse tipo de função é conhecido como **função fábrica (Factory Function)**.

A cada chamada, a função poderá criar e retornar um novo objeto contendo suas próprias propriedades e métodos.

---

### 3. Objeto Literal `IEjson`

A terceira implementação utiliza um **objeto literal JavaScript**.

```javascript
const IEjson = {
    // implementação
};
```

Nesse caso, o objeto é criado diretamente utilizando `{ }`, sem a necessidade de uma classe ou de uma função responsável por sua construção.

O nome `IEjson` utilizado no exemplo permite também estabelecer uma relação com **JSON (JavaScript Object Notation)**.

Entretanto, é importante observar que o objeto apresentado neste capítulo é um **objeto literal JavaScript**, e não um documento JSON propriamente dito.

Um objeto literal pode possuir:

- propriedades;
- métodos;
- funções;
- referências para outros objetos.

Já o JSON é utilizado principalmente como um formato textual para **representação e troca de dados**.

Essa diferença ficará mais evidente quando analisarmos a implementação completa de `IEjson`.

---

## Organização do Exemplo

As três abordagens representarão informações relacionadas a uma Inscrição Estadual.

Ao longo das próximas seções, analisaremos separadamente:

```text
IEclss
   ↓
Classe

IEfunc()
   ↓
Função Fábrica

IEjson
   ↓
Objeto Literal
   ↓
Relação conceitual com JSON
```

Apesar de utilizarem estratégias diferentes, as três implementações permitirão armazenar e manipular informações semelhantes.

Isso possibilitará comparar como **classes, funções fábrica e objetos literais** podem ser utilizados para representar dados e comportamentos em JavaScript.

---

## Classe `IEclss`

A primeira forma de representar uma Inscrição Estadual será por meio de uma **classe JavaScript**.

A classe `IEclss` mantém os dados da inscrição estadual em atributos privados e disponibiliza métodos públicos para realizar o acesso e a alteração desses valores.

Além disso, a classe possui um atributo destinado a armazenar uma referência para uma **Pessoa Jurídica (PJ)**. Neste momento, essa associação será realizada de forma simples. A implementação específica da classe `PJ` e a validação do objeto relacionado serão trabalhadas posteriormente em um exercício integrador.

---

## 💻 Código Completo

**Arquivo:** `IE.mjs`

```javascript
export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05**

```javascript
export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;
```

A classe `IEclss` é declarada utilizando `export default`, indicando que ela será a **exportação padrão** do módulo.

Os atributos:

- `#numero`;
- `#estado`;
- `#dataRegistro`;
- `#pj`;

são declarados como privados por meio do caractere `#`.

O uso de atributos privados aplica o conceito de **encapsulamento**, impedindo que esses valores sejam acessados ou modificados diretamente fora da classe.

O atributo `#pj` será utilizado para armazenar uma referência para um objeto que represente uma Pessoa Jurídica.

---

### **Linhas 07–19**

```javascript
setNumero(numero) {
    if (numero) {
        this.#numero = numero;
        return true;
    } else {
        return false;
    }
}

getNumero() {
    return this.#numero;
}
```

O método `setNumero()` recebe como parâmetro o número da Inscrição Estadual.

Inicialmente, é realizada uma validação:

```javascript
if (numero)
```

Caso um valor seja informado, ele será armazenado no atributo privado:

```javascript
this.#numero = numero;
```

Após realizar a atribuição, o método retorna:

```javascript
return true;
```

Caso nenhum valor válido seja informado, o método retorna `false`.

O método `getNumero()` permite recuperar o valor armazenado no atributo privado `#numero`.

---

### **Linhas 21–33**

```javascript
setEstado(estado) {
    if (estado) {
        this.#estado = estado;
        return true;
    } else {
        return false;
    }
}

getEstado() {
    return this.#estado;
}
```

Os métodos `setEstado()` e `getEstado()` são responsáveis pelo armazenamento e recuperação do estado relacionado à Inscrição Estadual.

O método `setEstado()` verifica inicialmente se algum valor foi informado.

Caso a condição:

```javascript
if (estado)
```

seja verdadeira, o valor recebido será armazenado no atributo privado `#estado`.

O método retorna `true` quando a atribuição é realizada e `false` quando o valor não é aceito.

O método `getEstado()` permite recuperar posteriormente o estado armazenado.

---

### **Linhas 35–47**

```javascript
setDataRegistro(dataRegistro) {
    if (dataRegistro instanceof Date) {
        this.#dataRegistro = dataRegistro;
        return true;
    } else {
        return false;
    }
}

getDataRegistro() {
    return this.#dataRegistro;
}
```

O método `setDataRegistro()` apresenta uma validação diferente das anteriores.

Nesse caso, o operador `instanceof` é utilizado para verificar se o valor recebido é realmente um objeto da classe `Date`.

A expressão:

```javascript
dataRegistro instanceof Date
```

retorna `true` quando `dataRegistro` representa uma instância de `Date`.

Somente nesse caso o valor será armazenado no atributo privado:

```javascript
this.#dataRegistro = dataRegistro;
```

Caso outro tipo de valor seja informado, o método retornará `false`.

O método `getDataRegistro()` permite recuperar posteriormente a data armazenada.

---

### **Linhas 49–61**

```javascript
setPJ(pj) {
    if (pj) {
        this.#pj = pj;
        return true;
    } else {
        return false;
    }
}

getPJ() {
    return this.#pj;
}
```

O método `setPJ()` permite associar à Inscrição Estadual um objeto que represente uma **Pessoa Jurídica**.

Neste momento, é realizada apenas a validação da existência do valor recebido:

```javascript
if (pj)
```

Caso um objeto seja informado, sua referência será armazenada no atributo privado:

```javascript
this.#pj = pj;
```

O método retorna `true` quando a associação é realizada e `false` caso nenhum valor seja informado.

O método `getPJ()` permite recuperar posteriormente o objeto associado.

Essa implementação introduz a ideia de que um objeto pode armazenar uma **referência para outro objeto**.

A implementação específica da classe `PJ` será realizada posteriormente em um **Exercício Integrador**. Nesse momento, o relacionamento poderá ser aprimorado por meio da validação do tipo do objeto utilizando `instanceof`.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| `class` | Define uma classe em JavaScript. |
| `export default` | Define um recurso como a exportação padrão de um módulo. |
| `#atributo` | Declara um atributo privado, acessível somente dentro da própria classe. |
| Encapsulamento | Protege os dados internos da classe e controla seu acesso por meio de métodos. |
| Getter / Setter | Métodos utilizados para recuperar e alterar os valores dos atributos privados. |
| `Date` | Classe nativa do JavaScript utilizada para representar e manipular datas. |
| `instanceof` | Operador utilizado para verificar se determinado objeto é uma instância de uma classe. |
| Referência para objeto | Permite armazenar em um atributo a referência para outro objeto. |
| `return true` / `return false` | Permite informar se uma operação realizada por um método foi aceita ou rejeitada. |

---

## 💡 Dicas do Professor

> **Utilize métodos para controlar o acesso aos atributos privados.**
>
> Em vez de alterar diretamente os valores armazenados em uma classe, os métodos `set` permitem realizar validações antes de modificar o estado do objeto.

> **`instanceof` permite validar o tipo de um objeto.**
>
> Neste exemplo, o método `setDataRegistro()` utiliza `instanceof` para garantir que apenas objetos da classe `Date` sejam armazenados. Posteriormente, esse mesmo recurso poderá ser utilizado para validar objetos de classes desenvolvidas pelo próprio programador.

> **Um atributo também pode armazenar uma referência para outro objeto.**
>
> O atributo `#pj` foi preparado para armazenar um objeto que represente uma Pessoa Jurídica. A classe responsável por esse objeto será desenvolvida posteriormente em um Exercício Integrador.

> **Observe a utilização de `export default`.**
>
> A classe `IEclss` é definida como a exportação padrão do módulo. Posteriormente veremos como essa característica influencia a forma utilizada para importar a classe em outro arquivo.

---
## Função Fábrica `IEfunc()`

A segunda forma de representar uma Inscrição Estadual utiliza uma **Função Fábrica (Factory Function)**.

Diferentemente da abordagem baseada em classe, uma função fábrica não utiliza o operador `new`. Em vez disso, a própria função cria os dados internos e retorna um objeto contendo os métodos necessários para manipulá-los.

Essa abordagem permite encapsular informações dentro do escopo da função, disponibilizando externamente apenas os métodos retornados.

---

## 💻 Código Completo

**Arquivo:** `IE.mjs`

```javascript
export function IEfunc() {
    let dados = {
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };

    function setNumero(numero) {
        if (numero) {
            dados.numero = numero;
            return true;
        } else {
            return false;
        }
    }

    function getNumero() {
        return dados.numero;
    }

    function setEstado(estado) {
        if (estado) {
            dados.estado = estado;
            return true;
        } else {
            return false;
        }
    }

    function getEstado() {
        return dados.estado;
    }

    function setDataRegistro(data) {
        if (data instanceof Date) {
            dados.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    }

    function getDataRegistro() {
        return dados.dataRegistro;
    }

    function setPJ(pj) {
        if (pj) {
            dados.pj = pj;
            return true;
        } else {
            return false;
        }
    }

    function getPJ() {
        return dados.pj;
    }

    return {
        setNumero,
        getNumero,
        setEstado,
        getEstado,
        setDataRegistro,
        getDataRegistro,
        setPJ,
        getPJ
    };
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–07**

```javascript
export function IEfunc() {
    let dados = {
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };
```

A função `IEfunc()` é declarada utilizando `export`, indicando que poderá ser importada por outros módulos.

Dentro da função é criado o objeto:

```javascript
dados
```

Esse objeto armazena as informações da Inscrição Estadual:

- `numero`;
- `estado`;
- `dataRegistro`;
- `pj`.

Como o objeto `dados` foi criado dentro da função, ele permanece protegido pelo escopo da própria função.

Essa característica é importante porque impede o acesso direto aos dados fora de `IEfunc()`.

---

### **Linhas 09–21**

```javascript
function setNumero(numero) {
    if (numero) {
        dados.numero = numero;
        return true;
    } else {
        return false;
    }
}

function getNumero() {
    return dados.numero;
}
```

Os métodos `setNumero()` e `getNumero()` controlam o acesso à propriedade `numero`.

O método `setNumero()` verifica se algum valor foi informado.

Quando a condição:

```javascript
if (numero)
```

for verdadeira, o valor será armazenado em:

```javascript
dados.numero
```

O método retorna `true` quando a operação é realizada e `false` caso o valor não seja aceito.

O método `getNumero()` retorna o valor armazenado.

---

### **Linhas 23–35**

```javascript
function setEstado(estado) {
    if (estado) {
        dados.estado = estado;
        return true;
    } else {
        return false;
    }
}

function getEstado() {
    return dados.estado;
}
```

Esse bloco implementa o controle da propriedade `estado`.

O método `setEstado()` verifica se o valor recebido é válido antes de armazená-lo.

O valor aceito será armazenado em:

```javascript
dados.estado
```

O método `getEstado()` permite recuperar posteriormente essa informação.

---

### **Linhas 37–49**

```javascript
function setDataRegistro(data) {
    if (data instanceof Date) {
        dados.dataRegistro = data;
        return true;
    } else {
        return false;
    }
}

function getDataRegistro() {
    return dados.dataRegistro;
}
```

O método `setDataRegistro()` utiliza o operador `instanceof` para verificar se o valor recebido é uma instância da classe nativa `Date`.

A condição:

```javascript
data instanceof Date
```

garante que somente objetos de data sejam armazenados em:

```javascript
dados.dataRegistro
```

O método `getDataRegistro()` retorna posteriormente a data armazenada.

---

### **Linhas 51–63**

```javascript
function setPJ(pj) {
    if (pj) {
        dados.pj = pj;
        return true;
    } else {
        return false;
    }
}

function getPJ() {
    return dados.pj;
}
```

O método `setPJ()` permite associar ao objeto interno `dados` uma referência para uma futura representação de **Pessoa Jurídica**.

Neste momento, é realizada apenas a validação da existência do valor:

```javascript
if (pj)
```

Caso algum objeto seja informado, ele será armazenado em:

```javascript
dados.pj
```

O método `getPJ()` permite recuperar posteriormente essa referência.

Assim como na implementação da classe `IEclss`, a validação específica do tipo de objeto será trabalhada posteriormente em um Exercício Integrador.

---

### **Linhas 65–74**

```javascript
return {
    setNumero,
    getNumero,
    setEstado,
    getEstado,
    setDataRegistro,
    getDataRegistro,
    setPJ,
    getPJ
};
```

Esse trecho é responsável por retornar um **objeto contendo os métodos públicos** da função fábrica.

Observe que o objeto `dados` não é retornado diretamente.

Apenas os métodos necessários para manipular suas informações são disponibilizados:

- `setNumero`;
- `getNumero`;
- `setEstado`;
- `getEstado`;
- `setDataRegistro`;
- `getDataRegistro`;
- `setPJ`;
- `getPJ`.

Essa estratégia cria uma forma de **encapsulamento por escopo**, pois os dados permanecem internos à função e somente podem ser acessados por meio dos métodos retornados.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Função Fábrica | Função responsável por criar e retornar objetos configurados. |
| Factory Function | Nome utilizado para o padrão de criação de objetos por meio de funções. |
| Escopo | Define onde uma variável ou objeto pode ser acessado. |
| Encapsulamento | Os dados internos ficam protegidos dentro da função e são manipulados apenas pelos métodos retornados. |
| Closure | Permite que os métodos retornados continuem acessando o objeto `dados` mesmo após a execução da função. |
| Objeto Literal | Estrutura utilizada para armazenar as propriedades dentro da variável `dados`. |
| `export` | Disponibiliza a função para utilização em outros módulos. |
| `Date` | Classe nativa utilizada para representar datas. |
| `instanceof` | Verifica se determinado objeto pertence a uma classe específica. |
| `return { ... }` | Retorna um objeto contendo os métodos públicos da função fábrica. |

---

## 💡 Dicas do Professor

> **Funções fábrica não precisam do operador `new`.**
>
> Para criar uma nova estrutura a partir de `IEfunc()`, basta executar a função e armazenar o objeto retornado.

> **Os dados permanecem protegidos dentro da função.**
>
> O objeto `dados` não pode ser acessado diretamente fora de `IEfunc()`. O acesso ocorre somente por meio dos métodos retornados.

> **Observe a diferença entre atributos privados e escopo privado.**
>
> Na classe `IEclss`, o encapsulamento foi realizado utilizando atributos privados com `#`. Na função fábrica, o encapsulamento ocorre porque o objeto `dados` existe apenas dentro do escopo da função.

> **Closure é um conceito importante nesta implementação.**
>
> Mesmo depois que `IEfunc()` termina sua execução, os métodos retornados continuam acessando o objeto `dados`, preservando os valores armazenados.

---

## Objeto Literal `IEjson`

A terceira forma de representar uma Inscrição Estadual utiliza um **objeto literal JavaScript**.

Diferentemente das implementações anteriores, não é necessário declarar uma classe nem criar uma função fábrica. O objeto é definido diretamente utilizando `{ }`, reunindo propriedades e métodos em uma única estrutura.

Neste exemplo, o objeto recebe o nome `IEjson`.

Apesar do nome utilizado, é importante compreender que `IEjson` é um **objeto literal JavaScript**, e não um conteúdo JSON propriamente dito.

---

## 💻 Código Completo

**Arquivo:** `IE.mjs`

```javascript
export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (numero) {
            this.numero = numero;
            return true;
        } else {
            return false;
        }
    },

    getNumero() {
        return this.numero;
    },

    setEstado(estado) {
        if (estado) {
            this.estado = estado;
            return true;
        } else {
            return false;
        }
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(data) {
        if (data instanceof Date) {
            this.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj) {
            this.pj = pj;
            return true;
        } else {
            return false;
        }
    },

    getPJ() {
        return this.pj;
    }
};
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05**

```javascript
export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,
```

O objeto `IEjson` é declarado utilizando:

```javascript
export const IEjson = {
```

A palavra-chave `const` cria uma constante que mantém a referência para o objeto.

A palavra-chave `export` realiza uma **exportação nomeada**, permitindo que `IEjson` seja posteriormente importado por outro módulo.

As propriedades:

- `numero`;
- `estado`;
- `dataRegistro`;
- `pj`;

são inicialmente definidas com o valor `null`.

Diferentemente da classe `IEclss`, essas propriedades não utilizam o caractere `#` e, portanto, não são atributos privados.

---

### **Linhas 07–21**

```javascript
setNumero(numero) {
    if (numero) {
        this.numero = numero;
        return true;
    } else {
        return false;
    }
},

getNumero() {
    return this.numero;
},
```

Os métodos `setNumero()` e `getNumero()` são definidos diretamente dentro do objeto literal.

O método `setNumero()` verifica inicialmente se algum valor foi informado.

Quando a condição:

```javascript
if (numero)
```

for verdadeira, o valor recebido será armazenado na propriedade:

```javascript
this.numero
```

Nesse contexto, `this` representa o próprio objeto `IEjson`.

O método `getNumero()` retorna posteriormente o valor armazenado.

---

### **Linhas 23–37**

```javascript
setEstado(estado) {
    if (estado) {
        this.estado = estado;
        return true;
    } else {
        return false;
    }
},

getEstado() {
    return this.estado;
},
```

Os métodos `setEstado()` e `getEstado()` controlam a alteração e a recuperação da propriedade `estado`.

O método `setEstado()` verifica se algum valor foi informado e, caso a condição seja satisfeita, realiza a atribuição:

```javascript
this.estado = estado;
```

O método `getEstado()` retorna o valor armazenado no próprio objeto.

---

### **Linhas 39–53**

```javascript
setDataRegistro(data) {
    if (data instanceof Date) {
        this.dataRegistro = data;
        return true;
    } else {
        return false;
    }
},

getDataRegistro() {
    return this.dataRegistro;
},
```

O método `setDataRegistro()` utiliza novamente o operador `instanceof`.

A expressão:

```javascript
data instanceof Date
```

verifica se o valor recebido é uma instância da classe nativa `Date`.

Caso a condição seja verdadeira, o objeto será armazenado em:

```javascript
this.dataRegistro
```

O método `getDataRegistro()` permite recuperar posteriormente a data armazenada.

---

### **Linhas 55–69**

```javascript
setPJ(pj) {
    if (pj) {
        this.pj = pj;
        return true;
    } else {
        return false;
    }
},

getPJ() {
    return this.pj;
}
```

O método `setPJ()` permite armazenar uma referência para um objeto que futuramente representará uma **Pessoa Jurídica**.

Neste momento, a validação verifica apenas se algum valor foi informado:

```javascript
if (pj)
```

Caso a condição seja verdadeira, a referência será armazenada em:

```javascript
this.pj
```

O método `getPJ()` permite recuperar posteriormente o objeto associado.

Assim como nas implementações anteriores, a validação específica de um objeto da classe `PJ` será trabalhada posteriormente no Exercício Integrador.

---

## Objeto Literal e JSON

O nome `IEjson` utilizado neste exemplo permite estabelecer uma relação com o conceito de **JSON (JavaScript Object Notation)**.

Um objeto literal JavaScript e um conteúdo JSON podem apresentar uma estrutura visual semelhante. Por exemplo, um conjunto de dados poderia ser representado desta forma:

```javascript
{
    numero: "123456",
    estado: "DF"
}
```

Entretanto, existem diferenças importantes.

O objeto `IEjson` desenvolvido neste capítulo é um **objeto JavaScript** e, por isso, pode possuir propriedades e métodos, como:

```javascript
setNumero(numero) {
    // ...
}

getNumero() {
    // ...
}
```

O formato JSON, por sua vez, é utilizado para representar dados e não possui métodos.

Uma representação JSON dos mesmos dados seria semelhante a:

```json
{
    "numero": "123456",
    "estado": "DF",
    "dataRegistro": null,
    "pj": null
}
```

Observe também que, em JSON, os nomes das propriedades aparecem entre aspas duplas.

Portanto:

| Objeto Literal JavaScript | JSON |
|---------------------------|------|
| É uma estrutura da linguagem JavaScript. | É um formato textual de representação de dados. |
| Pode possuir propriedades e métodos. | Representa dados e não possui métodos. |
| Pode utilizar `this`. | Não utiliza `this`. |
| Pode armazenar funções. | Não representa funções como valores JSON. |
| Pode ser manipulado diretamente pelo código JavaScript. | Normalmente é convertido para um objeto JavaScript antes de ser manipulado pela aplicação. |

Neste capítulo, portanto, `IEjson` deve ser compreendido como um **objeto literal JavaScript cujo nome faz referência ao formato JSON**.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Objeto Literal | Objeto criado diretamente utilizando a sintaxe `{ }`. |
| JSON | Formato textual utilizado para representação e troca de dados. |
| `const` | Declara uma variável cuja referência não poderá ser reatribuída. |
| `export` | Realiza uma exportação nomeada do objeto para outros módulos. |
| Propriedade | Valor armazenado diretamente dentro de um objeto. |
| Método | Função definida como parte de um objeto. |
| `this` | Referência ao objeto utilizado durante a execução do método. |
| `Date` | Classe nativa do JavaScript utilizada para representar datas. |
| `instanceof` | Verifica se determinado objeto é uma instância de uma classe. |
| `null` | Representa intencionalmente a ausência de um valor. |

---

## 💡 Dicas do Professor

> **Objeto literal e JSON não são a mesma coisa.**
>
> Embora apresentem estruturas visualmente semelhantes, um objeto literal faz parte da linguagem JavaScript e pode possuir comportamentos, enquanto JSON é utilizado para representar dados.

> **Observe o papel de `this`.**
>
> Nos métodos de `IEjson`, expressões como `this.numero` e `this.estado` permitem acessar as propriedades do próprio objeto.

> **Compare as três formas de encapsulamento estudadas.**
>
> Na classe `IEclss`, utilizamos atributos privados com `#`. Na função fábrica `IEfunc()`, os dados ficam protegidos pelo escopo da função. No objeto literal `IEjson`, as propriedades permanecem diretamente acessíveis.

> **A classe `PJ` será incorporada posteriormente.**
>
> Por enquanto, `pj` armazena apenas uma referência para um objeto. Em um Exercício Integrador, será possível criar a classe `PJ` e aprimorar essa associação utilizando validação com `instanceof`.

---

## Comparando as Formas de Implementação

Até este momento, a estrutura de uma Inscrição Estadual foi representada utilizando três abordagens diferentes:

- classe `IEclss`;
- função fábrica `IEfunc()`;
- objeto literal `IEjson`.

Embora as três implementações representem informações semelhantes, cada uma utiliza recursos diferentes da linguagem JavaScript para organizar dados e comportamentos.

Observe a comparação:

| Implementação | Estrutura | Característica |
|---------------|-----------|----------------|
| `IEclss` | Classe | Utiliza atributos privados (`#`) e métodos públicos para controlar o acesso aos dados. |
| `IEfunc()` | Função Fábrica | Mantém os dados no escopo da função e retorna um objeto contendo os métodos públicos. |
| `IEjson` | Objeto Literal | Mantém propriedades e métodos diretamente em um objeto JavaScript. |

---

## Classe `IEclss`

Na implementação utilizando classe, os dados são armazenados em atributos privados:

```javascript
#numero;
#estado;
#dataRegistro;
#pj;
```

O acesso ocorre por meio de métodos como:

```javascript
setNumero()
getNumero()
setEstado()
getEstado()
```

Para criar um objeto a partir da classe, utiliza-se o operador `new`:

```javascript
const ieC = new IEclss();
```

Essa abordagem aplica diretamente o conceito de **encapsulamento**, pois os atributos declarados com `#` não podem ser acessados diretamente fora da classe.

---

## Função Fábrica `IEfunc()`

Na função fábrica, os dados são armazenados dentro do escopo da função:

```javascript
let dados = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null
};
```

A função retorna somente os métodos que poderão ser utilizados externamente:

```javascript
return {
    setNumero,
    getNumero,
    setEstado,
    getEstado,
    setDataRegistro,
    getDataRegistro,
    setPJ,
    getPJ
};
```

Para criar uma nova estrutura, basta executar a função:

```javascript
const ieF = IEfunc();
```

Nesse caso, não é necessário utilizar `new`.

Os métodos retornados continuam acessando o objeto `dados`, mesmo após o término da execução da função. Esse comportamento está relacionado ao conceito de **closure**.

---

## Objeto Literal `IEjson`

Na terceira implementação, propriedades e métodos são definidos diretamente dentro de um objeto:

```javascript
const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null
};
```

Não é necessário utilizar `new` nem executar uma função para obter o objeto.

Ele pode ser utilizado diretamente:

```javascript
IEjson.setNumero("333");
IEjson.setEstado("MG");
```

Diferentemente das duas abordagens anteriores, as propriedades do objeto literal permanecem diretamente acessíveis.

Por exemplo:

```javascript
IEjson.numero
```

Por esse motivo, essa implementação não oferece o mesmo nível de encapsulamento proporcionado pelos atributos privados da classe ou pelo escopo interno da função fábrica.

---

## 📊 Comparação das Abordagens

| Característica | `IEclss` | `IEfunc()` | `IEjson` |
|----------------|:---------:|:----------:|:--------:|
| Utiliza classe | Sim | Não | Não |
| Utiliza `new` | Sim | Não | Não |
| Possui métodos | Sim | Sim | Sim |
| Protege os dados internos | Sim | Sim | Não |
| Utiliza atributos privados `#` | Sim | Não | Não |
| Utiliza escopo para proteger dados | Não | Sim | Não |
| Utiliza `this` | Sim | Não | Sim |
| Pode gerar diferentes objetos a partir da estrutura | Sim | Sim | Não diretamente |
| Exportação utilizada no exemplo | Padrão (`default`) | Nomeada | Nomeada |

As três abordagens demonstram que JavaScript oferece diferentes maneiras de organizar dados e comportamentos.

A escolha da estratégia dependerá das características e necessidades da aplicação.

---

## Exportação das Estruturas

Outro aspecto importante deste exemplo é a utilização de diferentes formas de exportação.

A classe `IEclss` foi definida como a exportação padrão:

```javascript
export default class IEclss {
    // ...
}
```

Já `IEfunc()` e `IEjson` utilizam exportações nomeadas:

```javascript
export function IEfunc() {
    // ...
}

export const IEjson = {
    // ...
};
```

Dessa forma, o mesmo módulo `IE.mjs` disponibiliza uma **exportação padrão** e também **exportações nomeadas**.

Posteriormente, essas estruturas poderão ser importadas utilizando uma única instrução:

```javascript
import IEclss, { IEfunc, IEjson } from "./IE.mjs";
```

Nesse comando:

- `IEclss` corresponde à exportação padrão;
- `IEfunc` e `IEjson` correspondem às exportações nomeadas;
- as chaves `{ }` permitem selecionar as exportações nomeadas que serão importadas.

Esse recurso também permite observar o uso da **desestruturação na sintaxe de importação**, selecionando os recursos nomeados disponibilizados pelo módulo.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Classe | Estrutura utilizada para definir atributos e métodos que poderão ser utilizados na criação de objetos. |
| Função Fábrica | Função que cria e retorna objetos sem a necessidade do operador `new`. |
| Objeto Literal | Objeto criado diretamente utilizando a sintaxe `{ }`. |
| Encapsulamento | Controle do acesso aos dados internos de uma estrutura. |
| Closure | Permite que funções mantenham acesso ao escopo em que foram criadas. |
| `new` | Operador utilizado para criar uma instância a partir de uma classe. |
| `this` | Referência ao objeto associado à execução de um método. |
| `export default` | Define a exportação padrão de um módulo. |
| Exportação nomeada | Permite disponibilizar diferentes recursos de um mesmo módulo utilizando seus respectivos nomes. |
| `import` | Importa recursos disponibilizados por outro módulo. |
| `{ IEfunc, IEjson }` | Sintaxe utilizada para selecionar as exportações nomeadas durante a importação. |
| ESM | Sistema de módulos do JavaScript baseado em `import` e `export`. |

---

## 💡 Dicas do Professor

> **Não existe apenas uma forma de criar objetos em JavaScript.**
>
> Classes, funções fábrica e objetos literais permitem organizar dados e comportamentos de maneiras diferentes. Compreender essas abordagens ajuda a escolher a estrutura mais adequada para cada problema.

> **Compare como os dados são protegidos.**
>
> `IEclss` utiliza atributos privados com `#`, enquanto `IEfunc()` utiliza o escopo da função. Em `IEjson`, as propriedades permanecem diretamente acessíveis.

> **Observe a diferença entre exportação padrão e exportação nomeada.**
>
> A exportação padrão é importada sem chaves. As exportações nomeadas são selecionadas utilizando `{ }`.

> **A mesma estrutura pode evoluir ao longo do desenvolvimento.**
>
> O atributo ou propriedade `pj` foi mantido nas três implementações. Posteriormente, em um Exercício Integrador, será possível construir a classe `PJ` e aprimorar essa associação utilizando validação com `instanceof`.

---
## Utilização das Estruturas – Arquivo `usaIE.mjs`

Após implementar as três formas de representação da Inscrição Estadual, podemos utilizá-las em um segundo arquivo.

O exemplo a seguir demonstra como importar e utilizar:

- a classe `IEclss`;
- a função fábrica `IEfunc()`;
- o objeto literal `IEjson`.

Além disso, o exemplo permite comparar as diferentes formas de criação e utilização dessas estruturas.

---

## 💻 Código Completo

**Arquivo:** `usaIE.mjs`

```javascript
import IEclss, { IEfunc, IEjson } from './IE.mjs';

const agora = new Date();

const ieC = new IEclss();

ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(agora);

console.log(`(Classe) Número: ${ieC.getNumero()}`);
console.log(`(Classe) Estado: ${ieC.getEstado()}`);
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

const ieF = IEfunc();

ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(agora);

console.log(`(Factory) Número: ${ieF.getNumero()}`);
console.log(`(Factory) Estado: ${ieF.getEstado()}`);
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(agora);

console.log(`(Objeto Literal) Número: ${IEjson.getNumero()}`);
console.log(`(Objeto Literal) Estado: ${IEjson.getEstado()}`);
console.log(`(Objeto Literal) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

console.log(
    `Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` +
    `Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` +
    `Objeto Literal: ${IEjson.getNumero()}-${IEjson.getEstado()}`
);
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–03**

```javascript
import IEclss, { IEfunc, IEjson } from './IE.mjs';

const agora = new Date();
```

A primeira linha importa as três estruturas definidas anteriormente no arquivo `IE.mjs`.

Observe que:

```javascript
IEclss
```

é importada fora das chaves porque corresponde à **exportação padrão** do módulo.

Já:

```javascript
{ IEfunc, IEjson }
```

correspondem às **exportações nomeadas**.

Essa instrução demonstra, em uma única linha, a utilização conjunta de uma exportação padrão e de exportações nomeadas.

Em seguida, é criado um objeto da classe nativa `Date`:

```javascript
const agora = new Date();
```

Esse objeto será utilizado como data de registro nas três implementações.

---

### **Linhas 05–09**

```javascript
const ieC = new IEclss();

ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(agora);
```

Nesse bloco é criada uma instância da classe `IEclss`.

Como `IEclss` é uma classe, utiliza-se o operador:

```javascript
new
```

O objeto criado é armazenado na constante `ieC`.

Em seguida, os métodos `setNumero()`, `setEstado()` e `setDataRegistro()` são utilizados para configurar os dados da Inscrição Estadual.

---

### **Linhas 11–14**

```javascript
console.log(`(Classe) Número: ${ieC.getNumero()}`);
console.log(`(Classe) Estado: ${ieC.getEstado()}`);
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');
```

Os métodos `getNumero()`, `getEstado()` e `getDataRegistro()` recuperam os valores armazenados no objeto `ieC`.

Para apresentar a data, é utilizado:

```javascript
toLocaleString('pt-BR')
```

Esse método converte a representação da data e hora para uma forma adequada à configuração regional informada.

Neste exemplo, utiliza-se:

```text
pt-BR
```

correspondente ao português do Brasil.

As informações são inseridas nas strings utilizando **Template Literals** e a sintaxe:

```javascript
${...}
```

---

### **Linhas 16–20**

```javascript
const ieF = IEfunc();

ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(agora);
```

Neste bloco é utilizada a função fábrica `IEfunc()`.

Diferentemente da classe, não utilizamos o operador `new`.

A função é executada diretamente:

```javascript
IEfunc()
```

e o objeto retornado é armazenado em:

```javascript
ieF
```

Em seguida, os métodos disponibilizados pela função fábrica são utilizados para configurar os dados.

---

### **Linhas 22–25**

```javascript
console.log(`(Factory) Número: ${ieF.getNumero()}`);
console.log(`(Factory) Estado: ${ieF.getEstado()}`);
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');
```

Os métodos retornados pela função fábrica permitem recuperar os dados armazenados no escopo interno de `IEfunc()`.

Embora `dados` não possa ser acessado diretamente, os métodos `getNumero()`, `getEstado()` e `getDataRegistro()` continuam tendo acesso às informações armazenadas.

Esse comportamento está relacionado ao conceito de **closure** apresentado anteriormente.

---

### **Linhas 27–29**

```javascript
IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(agora);
```

Nesse trecho é utilizado diretamente o objeto literal `IEjson`.

Não é necessário utilizar:

```javascript
new
```

nem executar uma função para criar o objeto.

Como `IEjson` já foi criado e exportado pelo módulo `IE.mjs`, podemos utilizar diretamente seus métodos.

Os valores definidos nesse exemplo são:

- número `333`;
- estado `MG`;
- a data armazenada em `agora`.

---

### **Linhas 31–34**

```javascript
console.log(`(Objeto Literal) Número: ${IEjson.getNumero()}`);
console.log(`(Objeto Literal) Estado: ${IEjson.getEstado()}`);
console.log(`(Objeto Literal) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');
```

Os métodos `getNumero()`, `getEstado()` e `getDataRegistro()` recuperam os valores armazenados no objeto literal.

Novamente, `toLocaleString('pt-BR')` é utilizado para apresentar a data considerando a configuração regional brasileira.

Observe que o resultado obtido é semelhante ao das duas implementações anteriores, embora a estrutura utilizada para representar os dados seja diferente.

---

### **Linhas 36–41**

```javascript
console.log(
    `Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` +
    `Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` +
    `Objeto Literal: ${IEjson.getNumero()}-${IEjson.getEstado()}`
);
```

O último bloco apresenta um resumo contendo informações das três implementações.

São utilizadas **Template Literals** para inserir valores diretamente nas strings:

```javascript
${ieC.getNumero()}
```

Além disso, o operador `+` é utilizado para concatenar os diferentes trechos que formam a mensagem final.

A saída seguirá uma estrutura semelhante a:

```text
Resumo → Classe: 111-SP | Factory: 222-RJ | Objeto Literal: 333-MG
```

Esse resultado evidencia que as três abordagens conseguem representar informações semelhantes, embora utilizem estratégias diferentes para organizar os dados e os métodos.

---

## 📌 Conceitos-Chave Aplicados

| Conceito | Explicação |
|----------|------------|
| `import` | Importa recursos disponibilizados por outro módulo. |
| Importação padrão | Permite importar o recurso definido utilizando `export default`. |
| Importação nomeada | Utiliza `{ }` para selecionar recursos exportados pelo módulo. |
| `new` | Cria uma instância a partir de uma classe. |
| Factory Function | Função executada diretamente para criar e retornar um objeto. |
| Objeto Literal | Objeto que pode ser utilizado diretamente após sua criação. |
| `Date` | Classe nativa utilizada para criar objetos que representam datas. |
| `toLocaleString()` | Converte a representação de data e hora considerando uma configuração regional. |
| Template Literal | Permite inserir expressões dentro de strings utilizando `${...}`. |
| Closure | Permite que os métodos da função fábrica continuem acessando seus dados internos. |

---

## 💡 Dicas do Professor

> **Observe as diferentes formas de obtenção dos objetos.**
>
> Para `IEclss`, utilizamos `new IEclss()`. Para a função fábrica, utilizamos `IEfunc()`. Já `IEjson` pode ser utilizado diretamente.

> **Uma única instrução `import` pode combinar diferentes formas de importação.**
>
> Em `import IEclss, { IEfunc, IEjson } from './IE.mjs'`, a classe corresponde à exportação padrão, enquanto os elementos entre `{ }` correspondem às exportações nomeadas.

> **Compare o resultado, mas também observe a implementação.**
>
> As três abordagens produzem resultados semelhantes, porém utilizam estratégias diferentes para organizar e proteger seus dados.

---
---------------------

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| ESM (ECMAScript Modules) | Sistema moderno de módulos do JavaScript baseado no uso de `import` e `export`. |
| `export default` | Define um recurso como a exportação padrão de um módulo. |
| Exportação nomeada | Permite disponibilizar diferentes recursos de um mesmo módulo utilizando seus respectivos nomes. |
| `import` | Permite utilizar em um módulo recursos exportados por outro arquivo. |
| Importação nomeada | Utiliza `{ }` para selecionar recursos exportados pelo módulo. |
| Classe | Estrutura que reúne atributos e métodos e pode ser utilizada para criar objetos com `new`. |
| Função Fábrica | Função que cria e retorna objetos sem utilizar o operador `new`. |
| Objeto Literal | Objeto criado diretamente utilizando a sintaxe `{ }`, podendo conter propriedades e métodos. |
| JSON | Formato textual utilizado para representação e troca de dados. Apesar da semelhança visual, não deve ser confundido com um objeto literal JavaScript. |
| Encapsulamento | Estratégia utilizada para controlar o acesso aos dados de uma estrutura. |
| `#atributo` | Define um atributo privado em uma classe JavaScript. |
| Closure | Permite que funções mantenham acesso ao escopo em que foram criadas. |
| `this` | Referência ao objeto associado à execução de um método. |
| `new` | Operador utilizado para criar uma instância a partir de uma classe. |
| `Date` | Classe nativa do JavaScript utilizada para representar datas. |
| `instanceof` | Verifica se um objeto é uma instância de determinada classe. |
| `toLocaleString()` | Permite apresentar valores, como datas e horas, considerando uma configuração regional. |
| Template Literal | Permite criar strings com expressões incorporadas utilizando a sintaxe `${...}`. |

---------------------

## 💡 Dicas do Professor

> **Compare as diferentes formas de criação dos objetos.**
>
> Uma classe utiliza `new` para criar suas instâncias. Uma função fábrica é executada diretamente e retorna um novo objeto. Um objeto literal, por sua vez, já é criado diretamente por meio da sintaxe `{ }`.

> **Observe como o encapsulamento pode ser implementado de maneiras diferentes.**
>
> Na classe `IEclss`, os atributos são protegidos utilizando `#`. Na função fábrica `IEfunc()`, os dados permanecem protegidos dentro do escopo da função. Já no objeto literal `IEjson`, as propriedades permanecem diretamente acessíveis.

> **Exportação padrão e exportações nomeadas podem coexistir no mesmo módulo.**
>
> A classe `IEclss` é disponibilizada como exportação padrão, enquanto `IEfunc()` e `IEjson` são disponibilizados como exportações nomeadas.

> **Observe a sintaxe utilizada na importação.**
>
> Na instrução:
>
> ```javascript
> import IEclss, { IEfunc, IEjson } from './IE.mjs';
> ```
>
> `IEclss` corresponde à exportação padrão, enquanto `IEfunc` e `IEjson` correspondem às exportações nomeadas.

> **Objeto literal e JSON são conceitos relacionados, mas diferentes.**
>
> Um objeto literal pertence à linguagem JavaScript e pode possuir propriedades e métodos. JSON é utilizado para representação e troca de dados e não possui métodos.

> **Utilize `instanceof` quando precisar verificar o tipo de um objeto.**
>
> Neste capítulo, esse recurso foi utilizado com a classe nativa `Date`. Posteriormente, a mesma estratégia poderá ser aplicada a classes desenvolvidas pelo próprio programador.

---------------------

## 💡 Resumo Final

Neste capítulo foram apresentadas diferentes formas de representar dados e comportamentos em JavaScript.

Inicialmente, a Inscrição Estadual foi implementada por meio da classe `IEclss`, utilizando atributos privados e métodos públicos para aplicar o conceito de encapsulamento.

Em seguida, a mesma estrutura foi representada utilizando a função fábrica `IEfunc()`. Nessa abordagem, os dados permanecem dentro do escopo da função e são acessados pelos métodos retornados, demonstrando a utilização de **closure**.

A terceira implementação utilizou o objeto literal `IEjson`, permitindo reunir propriedades e métodos diretamente em uma estrutura JavaScript. Essa abordagem também possibilitou diferenciar um **objeto literal JavaScript** do formato **JSON**, utilizado para representação e troca de dados.

Também foram estudadas diferentes formas de modularização utilizando **ES Modules (ESM)**. A classe `IEclss` foi disponibilizada como exportação padrão, enquanto `IEfunc()` e `IEjson` utilizaram exportações nomeadas.

No arquivo `usaIE.mjs`, as três implementações foram importadas e utilizadas em conjunto, permitindo comparar suas formas de criação, acesso aos dados e utilização.

Além disso, foram utilizados recursos da linguagem como `Date`, `instanceof`, `toLocaleString()`, Template Literals e diferentes formas de importação e exportação.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender diferentes formas de representar objetos em JavaScript;
- criar objetos utilizando classes;
- utilizar atributos privados para implementar encapsulamento;
- criar objetos utilizando funções fábrica;
- compreender o papel de closures no encapsulamento de dados;
- criar e utilizar objetos literais;
- diferenciar um objeto literal JavaScript de uma representação JSON;
- compreender o funcionamento básico dos ES Modules (ESM);
- utilizar exportação padrão com `export default`;
- utilizar exportações nomeadas;
- importar recursos utilizando `import`;
- reconhecer a diferença entre importação padrão e importação nomeada;
- criar objetos da classe nativa `Date`;
- validar objetos utilizando `instanceof`;
- formatar datas utilizando `toLocaleString()`;
- utilizar Template Literals para construir strings;
- comparar diferentes estratégias para organizar dados e comportamentos em JavaScript.

---------------------

## 📚 Exercício Integrador 

- https://js-oo-ebook.vercel.app/docs/tutorial-exercicio-integrador/Exercicio_Integrador_02

---------------------

# 📘 Orientação a Objetos — `toJSON()`, DAO e Armazenamento Local

## Introdução

Neste capítulo será apresentada uma evolução do exemplo de **Pessoa Jurídica (PJ)** desenvolvido anteriormente.

A classe `PJ` passa a possuir uma associação com uma **Inscrição Estadual (IE)**. Em seguida, será criada uma camada específica para transformar os dados do objeto em uma estrutura adequada à serialização em JSON e armazená-los utilizando uma simulação de `localStorage`.

O exemplo permite integrar diferentes conceitos já estudados:

- herança;
- encapsulamento;
- sobrescrita de métodos;
- relacionamentos entre objetos;
- validação com `instanceof`;
- referências cruzadas;
- ES Modules (ESM);
- JSON;
- serialização e desserialização;
- padrão DAO (*Data Access Object*);
- armazenamento chave-valor.

---

# Relacionamento entre `PJ` e `IE`

Uma Pessoa Jurídica pode possuir uma Inscrição Estadual. Para representar essa situação, será estabelecido um relacionamento **1:1** entre as classes `PJ` e `IE`.

```text
Pessoa
   ▲
   │ herança
   │
  PJ ───────── IE
      relação
        1:1
```

A classe `PJ` manterá uma referência para um objeto `IE`. A associação será validada utilizando `instanceof`.

Além disso, será criada uma **referência cruzada**, permitindo que o objeto `IE` também mantenha uma referência para a `PJ` associada.

---

## Classe `PJ`

A classe `PJ` continua sendo uma especialização da classe `Pessoa`.

Além do atributo `#cnpj`, já estudado anteriormente, será acrescentado o atributo privado `#ie`, responsável por armazenar a Inscrição Estadual associada.

### 💻 Código Completo

**Arquivo:** `/pessoas/PJ.js`

```javascript
const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');

class PJ extends Pessoa {

    #cnpj;
    #ie;

    setCNPJ(cnpj) {
        if (cnpj) {
            if (cnpj.length < 18) {
                return false;
            }

            this.#cnpj = cnpj;
            return true;
        } else {
            return false;
        }
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setEmail(email) {
        if (email !== '') {
            if (email.includes('@')) {
                super.setEmail(email);
                return true;
            }
        } else {
            return false;
        }
    }

    setIE(ie) {
        if (ie instanceof IE) {
            this.#ie = ie;
            ie.setPJ(this);
            return true;
        } else {
            return false;
        }
    }

    getIE() {
        return this.#ie;
    }
}

module.exports = PJ;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–02 — Importações**

```javascript
const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');
```

Importam as classes necessárias para a implementação de `PJ`.

`Pessoa` será utilizada como **superclasse**, enquanto `IE` será utilizada para estabelecer o relacionamento com a Inscrição Estadual.

---

#### **Linhas 04–07 — Herança e atributos privados**

```javascript
class PJ extends Pessoa {

    #cnpj;
    #ie;
```

Declara a classe `PJ` como uma especialização de `Pessoa`.

Os atributos privados armazenam:

- `#cnpj`: o CNPJ da Pessoa Jurídica;
- `#ie`: a referência para o objeto de Inscrição Estadual.

---

#### **Linhas 09–22 — Método `setCNPJ()`**

```javascript
setCNPJ(cnpj) {
    if (cnpj) {
        if (cnpj.length < 18) {
            return false;
        }

        this.#cnpj = cnpj;
        return true;
    } else {
        return false;
    }
}
```

O método realiza uma validação antes de armazenar o CNPJ.

Primeiro, verifica se algum valor foi informado. Em seguida, utiliza o operador de comparação `<` para rejeitar valores com menos de 18 caracteres.

Caso as validações sejam atendidas, o valor é armazenado em `#cnpj` e o método retorna `true`.

> A verificação de tamanho utilizada neste exemplo é didática e não corresponde a uma validação completa de CNPJ.

---

#### **Linhas 24–26 — Método `getCNPJ()`**

```javascript
getCNPJ() {
    return this.#cnpj;
}
```

Retorna o CNPJ armazenado no atributo privado.

---

#### **Linhas 28–37 — Sobrescrita de `setEmail()`**

```javascript
setEmail(email) {
    if (email !== '') {
        if (email.includes('@')) {
            super.setEmail(email);
            return true;
        }
    } else {
        return false;
    }
}
```

O método `setEmail()` já existe na superclasse `Pessoa`. Ao declará-lo novamente em `PJ`, ocorre uma **sobrescrita de método**.

A implementação acrescenta uma validação específica:

- o valor não pode ser uma string vazia;
- o e-mail deve conter o caractere `@`.

Quando as condições são atendidas, `super.setEmail(email)` reutiliza a implementação existente na superclasse.

---

#### **Linhas 39–48 — Método `setIE()`**

```javascript
setIE(ie) {
    if (ie instanceof IE) {
        this.#ie = ie;
        ie.setPJ(this);
        return true;
    } else {
        return false;
    }
}
```

Estabelece o relacionamento **1:1** entre `PJ` e `IE`.

O operador `instanceof` garante que somente objetos da classe `IE` sejam associados.

Após a validação:

- `this.#ie = ie` armazena a inscrição estadual na Pessoa Jurídica;
- `ie.setPJ(this)` cria a referência cruzada, fazendo com que a inscrição também conheça a Pessoa Jurídica associada.

---

#### **Linhas 50–52 — Método `getIE()`**

```javascript
getIE() {
    return this.#ie;
}
```

Retorna o objeto `IE` associado à Pessoa Jurídica.

---

#### **Linha 55 — Exportação**

```javascript
module.exports = PJ;
```

Exporta a classe utilizando **CommonJS**, permitindo sua utilização em outros módulos.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Aplicação |
|---|---|
| Herança | `class PJ extends Pessoa` |
| Encapsulamento | Uso dos atributos privados `#cnpj` e `#ie` |
| Sobrescrita | Redefinição de `setEmail()` |
| `super` | Reutilização de `Pessoa.setEmail()` |
| `instanceof` | Validação do objeto `IE` |
| Relacionamento 1:1 | Associação entre `PJ` e `IE` |
| Referência cruzada | `ie.setPJ(this)` |
| CommonJS | `require()` e `module.exports` |

---

## 💡 Dicas do Professor

> **`instanceof` valida o tipo do objeto antes da associação.**
>
> Essa estratégia reduz a possibilidade de relacionar objetos incompatíveis.

> **Uma referência cruzada permite navegar nos dois sentidos.**
>
> A partir de `PJ`, podemos recuperar a inscrição estadual; a partir de `IE`, podemos recuperar a Pessoa Jurídica associada.

---

# Classe `IE`

A classe `IE` representa uma Inscrição Estadual e mantém informações como número, estado e data de registro.

Além desses dados, o atributo `#pj` mantém a referência para a Pessoa Jurídica associada.

### 💻 Código Completo

**Arquivo:** `/pessoas/IE/IEclss.js`

```javascript
class IE {

    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }
}

module.exports = IE;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–06 — Classe e atributos privados**

```javascript
class IE {

    #numero;
    #estado;
    #dataRegistro;
    #pj;
```

Declara a classe `IE` e seus quatro atributos privados.

`#pj` é responsável por manter a referência para a Pessoa Jurídica relacionada.

---

#### **Linhas 08–16 — Métodos `setNumero()` e `getNumero()`**

```javascript
setNumero(numero) {
    if (numero) {
        this.#numero = numero;
        return true;
    } else {
        return false;
    }
}

getNumero() {
    return this.#numero;
}
```

Permitem armazenar e recuperar o número da Inscrição Estadual.

---

#### **Linhas 20–31 — Métodos `setEstado()` e `getEstado()`**

```javascript
setEstado(estado) {
    if (estado) {
        this.#estado = estado;
        return true;
    } else {
        return false;
    }
}

getEstado() {
    return this.#estado;
}
```

Permitem armazenar e recuperar o estado associado à inscrição.

---

#### **Linhas 33–44 — Data de registro**

```javascript
setDataRegistro(dataRegistro) {
    if (dataRegistro instanceof Date) {
        this.#dataRegistro = dataRegistro;
        return true;
    } else {
        return false;
    }
}

getDataRegistro() {
    return this.#dataRegistro;
}
```

O método `setDataRegistro()` utiliza `instanceof Date` para aceitar somente objetos da classe nativa `Date`.

---

#### **Linhas 46–57 — Relacionamento com `PJ`**

```javascript
setPJ(pj) {
    if (pj) {
        this.#pj = pj;
        return true;
    } else {
        return false;
    }
}

getPJ() {
    return this.#pj;
}
```

Mantém a referência para a Pessoa Jurídica associada.

No fluxo utilizado neste capítulo, essa referência é preenchida automaticamente por `PJ.setIE()`.

---

#### **Linha 60 — Exportação**

```javascript
module.exports = IE;
```

Exporta a classe `IE` utilizando CommonJS.

---

# Simulando `localStorage` no Node.js

Nos navegadores, `localStorage` é uma API utilizada para armazenar pares **chave–valor** localmente.

Em um ambiente Node.js puro, essa API não está disponível. Para permitir a experimentação dos conceitos de armazenamento, será utilizado um objeto que simula parte de seu comportamento.

> A implementação apresentada é apenas uma **simulação em memória**. Os dados são perdidos quando a execução do programa termina.

---

## 💻 Código Completo

**Arquivo:** `/pessoas/DAOs/localStorage.mjs`

```javascript
export const localStorage = {
    store: {},

    setItem(key, value) {
        this.store[key] = value;
    },

    getItem(key) {
        return this.store[key] || null;
    },

    removeItem(key) {
        delete this.store[key];
    },

    clear() {
        this.store = {};
    }
};
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–02 — Objeto e armazenamento interno**

```javascript
export const localStorage = {
    store: {},
```

Cria e exporta um objeto chamado `localStorage`.

A propriedade `store` funciona como o armazenamento interno da simulação.

---

### **Linhas 04–06 — Método `setItem()`**

```javascript
setItem(key, value) {
    this.store[key] = value;
}
```

Armazena um valor utilizando uma chave.

Por exemplo:

```javascript
localStorage.setItem('nome', 'Pedro');
```

---

### **Linhas 08–10 — Método `getItem()`**

```javascript
getItem(key) {
    return this.store[key] || null;
}
```

Recupera o valor associado à chave informada.

Caso a chave não exista, retorna `null`.

---

### **Linhas 12–14 — Método `removeItem()`**

```javascript
removeItem(key) {
    delete this.store[key];
}
```

Remove uma chave e o valor associado a ela.

---

### **Linhas 16–18 — Método `clear()`**

```javascript
clear() {
    this.store = {};
}
```

Remove todos os valores armazenados, substituindo `store` por um novo objeto vazio.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|---|---|
| Chave–valor | Cada informação é armazenada utilizando uma chave |
| Objeto literal | A simulação é implementada diretamente com `{ }` |
| `this` | Permite acessar `store` a partir dos métodos |
| `delete` | Remove uma propriedade do objeto |
| ES Modules | `export const` realiza uma exportação nomeada |
| Volatilidade | Os dados permanecem somente durante a execução |

---

# Padrão DAO — `PJDAO`

Até este momento, a classe `PJ` concentra as regras relacionadas à Pessoa Jurídica.

Entretanto, transformar o objeto para um formato adequado ao armazenamento e controlar sua persistência são responsabilidades diferentes.

Para separar essas responsabilidades, será utilizada uma classe baseada no padrão **DAO (*Data Access Object*)**.

```text
Objeto PJ
   │
   ▼
 PJDAO
   │
   ├── toJSON()
   │
   ├── saveJSON()
   │
   └── recoveryJSON()
   │
   ▼
localStorage
```

A DAO funcionará como uma camada intermediária entre o objeto de domínio e o mecanismo de armazenamento.

---

## 💻 Código Completo

**Arquivo:** `/pessoas/DAOs/PJDAO.mjs`

```javascript
import { localStorage } from './localStorage.mjs';
import PJ from '../PJ.js';

export default class PJDAO {

    #pj;

    constructor(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
        }
    }

    toJSON() {
        let fones = [];

        for (let fone of this.#pj.getTelefones()) {
            fones.push({
                ddd: fone.getDdd(),
                numero: fone.getNumero()
            });
        }

        return {
            nome: this.#pj.getNome(),
            email: this.#pj.getEmail(),
            cnpj: this.#pj.getCNPJ(),
            endereco: {
                logradouro: this.#pj.getEndereco().getLogradouro(),
                cep: this.#pj.getEndereco().getCep()
            },
            telefones: fones,
            ie: {
                numero: this.#pj.getIE().getNumero(),
                estado: this.#pj.getIE().getEstado(),
                dataRegistro: this.#pj.getIE().getDataRegistro()
            }
        };
    }

    saveJSON() {
        localStorage.setItem('pj', JSON.stringify(this.toJSON()));
    }

    recoveryJSON() {
        return JSON.parse(localStorage.getItem('pj'));
    }
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–02 — Importações**

```javascript
import { localStorage } from './localStorage.mjs';
import PJ from '../PJ.js';
```

A primeira instrução importa a simulação de `localStorage`.

A segunda importa a classe `PJ`, utilizada para validar o objeto recebido pela DAO.

Observe que `localStorage` é uma **exportação nomeada**, enquanto `PJ` é importada como exportação padrão na interoperabilidade utilizada pelo ambiente.

---

### **Linhas 04–11 — Classe, atributo e construtor**

```javascript
export default class PJDAO {

    #pj;

    constructor(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
        }
    }
```

Declara a classe `PJDAO` como exportação padrão.

O atributo `#pj` mantém a instância que será manipulada pela DAO.

O construtor utiliza `instanceof` para garantir que somente objetos da classe `PJ` sejam armazenados.

---

### **Linhas 13–23 — Preparação dos telefones**

```javascript
toJSON() {
    let fones = [];

    for (let fone of this.#pj.getTelefones()) {
        fones.push({
            ddd: fone.getDdd(),
            numero: fone.getNumero()
        });
    }
```

O método `toJSON()` inicia criando um array vazio.

Em seguida, utiliza `for...of` para percorrer os objetos `Telefone` associados à Pessoa Jurídica.

Para cada telefone é criado um **objeto literal** contendo apenas os dados que deverão fazer parte da representação serializável.

Essa transformação é necessária porque os objetos da aplicação possuem métodos e atributos privados que não devem ser armazenados diretamente.

---

### **Linhas 25–39 — Construção da representação dos dados**

```javascript
return {
    nome: this.#pj.getNome(),
    email: this.#pj.getEmail(),
    cnpj: this.#pj.getCNPJ(),
    endereco: {
        logradouro: this.#pj.getEndereco().getLogradouro(),
        cep: this.#pj.getEndereco().getCep()
    },
    telefones: fones,
    ie: {
        numero: this.#pj.getIE().getNumero(),
        estado: this.#pj.getIE().getEstado(),
        dataRegistro: this.#pj.getIE().getDataRegistro()
    }
};
```

O método retorna um **objeto literal JavaScript** contendo os dados relevantes da Pessoa Jurídica e de seus objetos relacionados.

A estrutura possui objetos aninhados para representar:

- endereço;
- telefones;
- inscrição estadual.

É importante observar que `toJSON()` **não gera uma string JSON**. Ele prepara uma estrutura JavaScript adequada para ser posteriormente serializada.

---

### **Linhas 42–44 — Método `saveJSON()`**

```javascript
saveJSON() {
    localStorage.setItem('pj', JSON.stringify(this.toJSON()));
}
```

O método realiza duas operações.

Primeiro:

```javascript
this.toJSON()
```

gera o objeto literal contendo os dados.

Depois:

```javascript
JSON.stringify(...)
```

converte essa estrutura para uma **string no formato JSON**.

A string é armazenada utilizando a chave `'pj'`.

---

### **Linhas 46–48 — Método `recoveryJSON()`**

```javascript
recoveryJSON() {
    return JSON.parse(localStorage.getItem('pj'));
}
```

O processo inverso é realizado utilizando `JSON.parse()`.

Primeiro, `getItem('pj')` recupera a string armazenada. Depois, `JSON.parse()` converte a string novamente para uma estrutura JavaScript.

> O resultado de `JSON.parse()` contém os **dados**, mas não recria automaticamente uma instância da classe `PJ`. Métodos, atributos privados e protótipo da classe não são reconstruídos pela desserialização.

---

## Objeto JavaScript × String JSON

Essa distinção é fundamental.

```javascript
const dados = pjdao.toJSON();
```

Nesse caso, `dados` é um **objeto JavaScript**.

Já:

```javascript
const texto = JSON.stringify(dados);
```

produz uma **string JSON**.

O processo pode ser representado assim:

```text
Objeto PJ
   │
   │ toJSON()
   ▼
Objeto Literal JavaScript
   │
   │ JSON.stringify()
   ▼
String JSON
   │
   │ armazenamento
   ▼
localStorage
   │
   │ JSON.parse()
   ▼
Objeto Literal JavaScript
```

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|---|---|
| DAO | Camada responsável pelo acesso e transformação dos dados |
| `toJSON()` | Prepara uma representação serializável do objeto |
| `JSON.stringify()` | Converte objeto/valor JavaScript em string JSON |
| `JSON.parse()` | Converte uma string JSON em valor JavaScript |
| Serialização | Transformação dos dados para um formato adequado ao armazenamento |
| Desserialização | Recuperação dos dados a partir da representação armazenada |
| `instanceof` | Valida a instância recebida pela DAO |
| Objeto aninhado | Permite representar estruturas relacionadas |
| `for...of` | Percorre os objetos `Telefone` |
| Separação de responsabilidades | A DAO trata armazenamento sem transferir essa responsabilidade para `PJ` |

---

## 💡 Dicas do Professor

> **`toJSON()` e `JSON.stringify()` não são a mesma operação.**
>
> Neste exemplo, `toJSON()` constrói um objeto literal. `JSON.stringify()` é que transforma esse objeto em texto JSON.

> **JSON armazena dados, não comportamento.**
>
> Métodos como `setNome()`, `getCNPJ()` e `setIE()` não fazem parte da string JSON.

> **A recuperação não recria automaticamente o objeto original.**
>
> Depois de `JSON.parse()`, temos uma estrutura contendo dados. Para obter novamente uma instância completa de `PJ`, seria necessário reconstruí-la.

---

# Utilizando a DAO — `usaPJDAO.mjs`

O arquivo `usaPJDAO.mjs` integra os objetos estudados e demonstra o fluxo completo:

```text
Criar PJ
   ↓
Criar Endereço
   ↓
Criar Telefones
   ↓
Criar IE
   ↓
Estabelecer Relacionamentos
   ↓
Criar PJDAO
   ↓
Converter para estrutura serializável
   ↓
Salvar
   ↓
Recuperar
```

---

## 💻 Código Completo

**Arquivo:** `usaPJDAO.mjs`

```javascript
import PJ from './pessoas/PJ.js';
import PJDAO from './pessoas/DAOs/PJDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';
import IE from './pessoas/IE/IEclss.js';

const pj = new PJ();

pj.setNome('Pedro');
pj.setEmail('pedro@ifb.edu.br');
pj.setCNPJ('1234567890/0001-99');

const end = new Endereco();

end.setLogradouro('QNM 40');
end.setCep('12345-678');

pj.setEndereco(end);

const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

pj.addTelefone(fone1);

const fone2 = new Telefone();

fone2.setDdd('62');
fone2.setNumero('99999-7777');

pj.addTelefone(fone2);

const ie = new IE();

ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

pj.setIE(ie);

const pjdao = new PJDAO(pj);

const dados = pjdao.toJSON();

pjdao.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(pjdao.recoveryJSON());
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05 — Importações**

```javascript
import PJ from './pessoas/PJ.js';
import PJDAO from './pessoas/DAOs/PJDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';
import IE from './pessoas/IE/IEclss.js';
```

Importam todas as estruturas necessárias para o exemplo.

---

### **Linhas 07–11 — Criação da Pessoa Jurídica**

```javascript
const pj = new PJ();

pj.setNome('Pedro');
pj.setEmail('pedro@ifb.edu.br');
pj.setCNPJ('1234567890/0001-99');
```

Cria a instância de `PJ` e configura seus dados básicos.

Os métodos herdados e sobrescritos continuam sendo utilizados normalmente.

---

### **Linhas 13–19 — Endereço**

```javascript
const end = new Endereco();

end.setLogradouro('QNM 40');
end.setCep('12345-678');

pj.setEndereco(end);
```

Cria um objeto `Endereco`, configura seus dados e o associa à Pessoa Jurídica.

---

### **Linhas 21–27 — Primeiro telefone**

```javascript
const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

pj.addTelefone(fone1);
```

Cria e configura o primeiro telefone e o adiciona à coleção de telefones da Pessoa Jurídica.

---

### **Linhas 29–35 — Segundo telefone**

```javascript
const fone2 = new Telefone();

fone2.setDdd('62');
fone2.setNumero('99999-7777');

pj.addTelefone(fone2);
```

Repete o processo para um segundo telefone, demonstrando que a Pessoa Jurídica pode manter uma coleção de objetos `Telefone`.

---

### **Linhas 37–43 — Inscrição Estadual**

```javascript
const ie = new IE();

ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

pj.setIE(ie);
```

Cria e configura a Inscrição Estadual.

`new Date()` cria um objeto com a data e hora atuais.

Ao executar `pj.setIE(ie)`, é estabelecido o relacionamento entre os dois objetos.

---

### **Linhas 45–51 — DAO, transformação e armazenamento**

```javascript
const pjdao = new PJDAO(pj);

const dados = pjdao.toJSON();

pjdao.saveJSON();
```

Cria a DAO associada à Pessoa Jurídica.

`toJSON()` gera a estrutura serializável e `saveJSON()` transforma essa estrutura em uma string JSON antes de armazená-la.

---

### **Linhas 53–55 — Visualização dos resultados**

```javascript
console.log(dados);
console.log(JSON.stringify(dados));
console.log(pjdao.recoveryJSON());
```

As três instruções permitem comparar:

1. o objeto literal produzido por `toJSON()`;
2. a string JSON produzida por `JSON.stringify()`;
3. os dados recuperados do armazenamento e convertidos novamente por `JSON.parse()`.

---

# Comparando as Estruturas

| Estrutura | Papel |
|---|---|
| `PJ` | Representa a Pessoa Jurídica e suas regras |
| `IE` | Representa a Inscrição Estadual |
| `localStorage` | Simula um mecanismo de armazenamento chave–valor |
| `PJDAO` | Faz a transformação e o acesso aos dados armazenados |
| `usaPJDAO.mjs` | Integra e demonstra o funcionamento das estruturas |

---

# Serialização e Persistência

É importante diferenciar os dois conceitos.

**Serialização** é a transformação dos dados para uma representação que possa ser armazenada ou transmitida.

Neste exemplo:

```javascript
JSON.stringify(this.toJSON())
```

realiza a serialização para JSON.

Já **persistência** refere-se à capacidade de manter dados para utilização posterior.

A simulação de `localStorage` apresentada neste capítulo mantém os dados somente **em memória**. Portanto, ela permite estudar a interface de armazenamento, mas não representa persistência permanente: ao encerrar a execução, os dados são perdidos.

Em um navegador, o `localStorage` real possui comportamento diferente e pode manter os dados entre sessões, conforme as regras do navegador e da origem da aplicação.

---

# 📌 Conceitos-Chave do Capítulo

| Conceito | Aplicação |
|---|---|
| Herança | `PJ` especializa `Pessoa` |
| Encapsulamento | Uso de atributos privados |
| Sobrescrita | `PJ.setEmail()` |
| Polimorfismo | Reutilização de `super.setEmail()` |
| Relacionamento 1:1 | `PJ` ↔ `IE` |
| Referência cruzada | Objetos relacionados mantêm referências entre si |
| `instanceof` | Validação de objetos |
| DAO | Separação da lógica de acesso aos dados |
| Objeto literal | Estrutura criada por `toJSON()` |
| JSON | Formato textual para representação de dados |
| `JSON.stringify()` | Serialização |
| `JSON.parse()` | Desserialização |
| `localStorage` | Armazenamento chave–valor no navegador |
| ES Modules | `import` e `export` |
| CommonJS | `require()` e `module.exports` |
| `for...of` | Percorre a coleção de telefones |

---

# 💡 Resumo Final

Neste capítulo, a classe `PJ` foi ampliada para se relacionar com uma Inscrição Estadual por meio de uma associação **1:1**. O relacionamento utiliza `instanceof` para validar o objeto e uma referência cruzada para permitir a navegação entre os objetos relacionados.

Em seguida, foi apresentada uma simulação de `localStorage`, permitindo compreender operações de armazenamento chave–valor mesmo em um ambiente Node.js.

A classe `PJDAO` introduziu o padrão **Data Access Object**, separando da classe de domínio as responsabilidades relacionadas à preparação, serialização, armazenamento e recuperação dos dados.

O método `toJSON()` foi utilizado para construir uma representação dos dados da Pessoa Jurídica por meio de objetos literais. `JSON.stringify()` transformou essa estrutura em uma string JSON, enquanto `JSON.parse()` realizou o processo inverso.

Por fim, o arquivo `usaPJDAO.mjs` integrou todas as estruturas, demonstrando o fluxo completo entre objetos da aplicação, DAO, serialização e armazenamento.

---

# 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender o relacionamento 1:1 entre objetos;
- implementar referências cruzadas;
- validar associações utilizando `instanceof`;
- compreender o papel de uma classe DAO;
- separar regras de domínio de responsabilidades de armazenamento;
- construir representações serializáveis de objetos;
- diferenciar objeto literal JavaScript de string JSON;
- utilizar `JSON.stringify()` para serialização;
- utilizar `JSON.parse()` para desserialização;
- compreender que JSON representa dados, e não métodos;
- compreender o funcionamento básico de `localStorage`;
- diferenciar armazenamento em memória de persistência;
- utilizar `for...of` para transformar coleções de objetos;
- integrar módulos CommonJS e ES Modules em exemplos de aplicação.

# 📘 Orientação a Objetos – Funções Assíncronas e Tratamento de Exceções

## Introdução

Em aplicações JavaScript, nem todas as operações são concluídas imediatamente. Algumas tarefas dependem de recursos externos e podem levar um determinado tempo para serem finalizadas, como consultas a APIs, leitura de arquivos ou acesso a serviços disponíveis na Internet.

Para lidar com essas situações, JavaScript oferece recursos de **programação assíncrona**, permitindo que determinadas operações sejam aguardadas antes que o fluxo dependente de seus resultados continue.

Neste capítulo, utilizaremos a classe `Endereco` para demonstrar uma consulta à API pública **ViaCEP**. A partir de um CEP informado, a aplicação realizará uma requisição e utilizará os dados retornados para preencher os atributos de um objeto.

Além da programação assíncrona, também será apresentado o **tratamento de exceções**, utilizando `throw`, `try` e `catch`. Esses recursos permitem identificar situações de erro e tratá-las de maneira controlada.

Ao longo do capítulo serão utilizados recursos como:

- `async`;
- `await`;
- `fetch()`;
- `throw`;
- `Error`;
- `try`;
- `catch`;
- consumo de API;
- ES Modules (ESM).

---

## 🎯 Objetivos de Aprendizagem

Ao concluir este capítulo, você deverá ser capaz de:

- compreender o conceito básico de programação assíncrona em JavaScript;
- declarar funções e métodos assíncronos utilizando `async`;
- utilizar `await` para aguardar a conclusão de operações assíncronas;
- realizar requisições utilizando `fetch()`;
- compreender o uso de APIs externas em aplicações JavaScript;
- lançar exceções utilizando `throw`;
- criar erros utilizando `new Error()`;
- tratar exceções utilizando `try` e `catch`;
- compreender como uma exceção lançada em um método pode ser tratada em outro ponto da aplicação;
- integrar programação assíncrona, orientação a objetos e modularização utilizando ES Modules.

---

## Programação Assíncrona

Em uma execução tradicional, as instruções de um programa são processadas seguindo uma sequência.

Entretanto, determinadas operações podem depender de recursos externos e não apresentam um resultado imediatamente. Uma requisição realizada pela Internet, por exemplo, precisa aguardar a resposta do servidor.

JavaScript permite trabalhar com esse tipo de operação utilizando recursos de **programação assíncrona**.

Uma função assíncrona pode ser declarada utilizando a palavra-chave:

```javascript
async
```

Dentro de uma função assíncrona, podemos utilizar:

```javascript
await
```

para aguardar a conclusão de uma operação antes de utilizar seu resultado.

Uma estrutura básica pode ser representada da seguinte forma:

```javascript
async function exemplo() {
    const resultado = await operacaoAssincrona();
}
```

Nesse exemplo:

- `async` indica que `exemplo()` é uma função assíncrona;
- `operacaoAssincrona()` representa uma operação cujo resultado pode não estar disponível imediatamente;
- `await` aguarda a conclusão dessa operação antes de atribuir seu resultado à constante `resultado`.

Também podemos declarar **métodos assíncronos dentro de classes**:

```javascript
async metodo() {
    const resultado = await operacaoAssincrona();
}
```

Essa será a estratégia utilizada neste capítulo.

O método `setCep()` da classe `Endereco` será declarado como assíncrono porque precisará consultar um serviço externo antes de preencher os atributos do objeto.

---

## Requisições com `fetch()`

Para realizar a consulta ao serviço externo, utilizaremos:

```javascript
fetch()
```

A função `fetch()` permite realizar requisições a recursos disponíveis por meio de uma URL.

Uma utilização simplificada pode ser representada por:

```javascript
const resposta = await fetch(url);
```

Nesse caso, a aplicação solicita um recurso identificado por `url` e aguarda a resposta.

Entretanto, receber uma resposta não significa que os dados já estão disponíveis diretamente no formato que desejamos utilizar.

Quando o serviço retorna dados em formato JSON, podemos processar o conteúdo utilizando:

```javascript
const dados = await resposta.json();
```

Observe que também utilizamos `await`, pois o processamento da resposta é uma operação assíncrona.

O fluxo básico pode ser representado da seguinte forma:

```text
Aplicação
    │
    │ fetch()
    ▼
Serviço externo
    │
    │ resposta
    ▼
Aplicação
    │
    │ resposta.json()
    ▼
Objeto JavaScript
```

No exemplo deste capítulo, o serviço externo utilizado será a API **ViaCEP**.

A partir de um CEP informado, a aplicação realizará uma consulta e utilizará informações como:

- CEP;
- logradouro;
- bairro;
- localidade;
- UF.

Essas informações serão utilizadas para preencher os atributos privados de um objeto da classe `Endereco`.

---
## Classe `Endereco` e Consulta à API ViaCEP

A classe `Endereco` representa informações relacionadas a um endereço e utiliza uma consulta externa para preencher seus atributos.

Em vez de receber separadamente o logradouro, bairro, cidade e UF, o método `setCep()` recebe um CEP e realiza uma consulta à API ViaCEP.

O fluxo pode ser representado da seguinte maneira:

```text
CEP informado
     │
     ▼
  setCep()
     │
     ▼
   fetch()
     │
     ▼
 API ViaCEP
     │
     ▼
Resposta HTTP
     │
     ▼
resposta.json()
     │
     ▼
Dados do endereço
     │
     ▼
Atributos do objeto
```

Como a requisição depende de uma resposta externa, `setCep()` é declarado como um método assíncrono.

---

## 💻 Código Completo

**Arquivo:** `/pessoas/ENDERECO/Endereco.mjs`

```javascript
export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–06 — Classe e atributos privados**

```javascript
export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
```

A classe `Endereco` é declarada utilizando:

```javascript
export default class Endereco
```

A expressão `export default` indica que a classe corresponde à **exportação padrão** do módulo.

Os atributos:

- `#cep`;
- `#logradouro`;
- `#bairro`;
- `#cidade`;
- `#uf`;

são declarados como privados por meio do caractere `#`.

Essa estratégia aplica o conceito de **encapsulamento**, impedindo que os valores sejam acessados ou modificados diretamente fora da classe.

---

### **Linhas 08–11 — Método assíncrono e requisição**

```javascript
async setCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
```

O método `setCep()` é declarado utilizando:

```javascript
async
```

Isso indica que o método realizará operações assíncronas e permite a utilização de `await` em seu interior.

A instrução:

```javascript
const url = `https://viacep.com.br/ws/${cep}/json/`;
```

constrói a URL que será utilizada para realizar a consulta.

O valor recebido pelo parâmetro `cep` é inserido diretamente na URL por meio de uma **Template Literal**:

```javascript
${cep}
```

Em seguida:

```javascript
fetch(url)
```

realiza a requisição ao serviço externo.

Como essa operação não apresenta necessariamente um resultado imediato, utilizamos:

```javascript
await
```

para aguardar sua conclusão antes de continuar o fluxo dependente da resposta.

O resultado é armazenado na constante:

```javascript
resposta
```

---

### **Linhas 13–15 — Verificação da resposta**

```javascript
if (!resposta.ok) {
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
}
```

Após receber a resposta, o código verifica a propriedade:

```javascript
resposta.ok
```

Essa propriedade permite identificar se a resposta HTTP foi considerada bem-sucedida.

O operador:

```javascript
!
```

representa uma negação lógica.

Portanto:

```javascript
!resposta.ok
```

verifica se a resposta **não foi bem-sucedida**.

Caso essa condição seja verdadeira, é executada a instrução:

```javascript
throw new Error(...)
```

`new Error()` cria um objeto que representa um erro.

Já `throw` é responsável por **lançar a exceção**, interrompendo o fluxo normal daquela operação.

A propriedade:

```javascript
resposta.status
```

permite incluir o código de status HTTP na mensagem do erro.

---

### **Linha 17 — Processamento da resposta**

```javascript
const dados = await resposta.json();
```

Caso a resposta seja considerada adequada, seu conteúdo será processado.

O método:

```javascript
resposta.json()
```

processa o corpo da resposta considerando o formato JSON.

Como essa operação também é assíncrona, utiliza-se novamente:

```javascript
await
```

Após a conclusão, a constante `dados` passa a referenciar a estrutura JavaScript resultante desse processamento.

Assim, propriedades retornadas pelo serviço poderão ser acessadas utilizando expressões como:

```javascript
dados.cep
dados.logradouro
dados.bairro
dados.localidade
dados.uf
```

---

### **Linhas 19–21 — Verificação do CEP**

```javascript
if (dados.erro) {
    throw new Error("CEP não encontrado na base do ViaCEP.");
}
```

Além de verificar a resposta HTTP, o código também verifica o conteúdo retornado pela API.

A condição:

```javascript
if (dados.erro)
```

verifica o campo `erro` retornado pelo serviço.

Caso esse campo indique que o CEP não foi localizado, uma nova exceção será lançada:

```javascript
throw new Error("CEP não encontrado na base do ViaCEP.");
```

Esse trecho demonstra que existem diferentes situações que podem gerar uma exceção.

A primeira validação verifica a **resposta da requisição**, enquanto esta segunda verifica o **conteúdo retornado pelo serviço**.

---

### **Linhas 23–27 — Preenchimento dos atributos**

```javascript
this.#cep = dados.cep;
this.#logradouro = dados.logradouro;
this.#bairro = dados.bairro;
this.#cidade = dados.localidade;
this.#uf = dados.uf;
```

Se nenhuma das verificações anteriores lançar uma exceção, os dados retornados pela API serão armazenados nos atributos privados do objeto.

Cada propriedade retornada é associada ao respectivo atributo:

```javascript
dados.cep
```

é armazenado em:

```javascript
this.#cep
```

Da mesma forma:

```javascript
dados.logradouro
dados.bairro
dados.localidade
dados.uf
```

são utilizados para preencher os demais atributos.

Observe especificamente:

```javascript
this.#cidade = dados.localidade;
```

A API utiliza o nome `localidade`, enquanto a classe utiliza o atributo `#cidade`.

A classe, portanto, não precisa utilizar exatamente os mesmos nomes adotados pelo serviço externo.

---

### **Linhas 30–48 — Métodos de acesso**

```javascript
getCep() {
    return this.#cep;
}

getLogradouro() {
    return this.#logradouro;
}

getBairro() {
    return this.#bairro;
}

getCidade() {
    return this.#cidade;
}

getUf() {
    return this.#uf;
}
```

Os métodos `get` permitem recuperar os valores armazenados nos atributos privados.

Como os atributos utilizam `#`, instruções externas como:

```javascript
end.#cep
```

não podem ser utilizadas para acessar diretamente os dados.

Por esse motivo, a classe disponibiliza métodos públicos como:

```javascript
getCep()
getLogradouro()
getBairro()
getCidade()
getUf()
```

Essa estratégia mantém o **encapsulamento**, permitindo que a própria classe controle a forma como seus dados são disponibilizados.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Encapsulamento | Os dados do endereço são armazenados em atributos privados, como `#cep`, `#logradouro` e `#cidade`. |
| Programação Assíncrona | Permite trabalhar com operações cujo resultado pode não estar disponível imediatamente. |
| `async` | Declara uma função ou método assíncrono. |
| `await` | Aguarda a conclusão de uma operação assíncrona antes de continuar o fluxo dependente de seu resultado. |
| `fetch()` | Realiza a requisição utilizada para consultar o serviço externo. |
| API externa | Serviço externo utilizado pela aplicação para obter dados. |
| ViaCEP | API utilizada no exemplo para consultar informações de endereço a partir de um CEP. |
| `resposta.ok` | Indica se a resposta HTTP foi considerada bem-sucedida. |
| `resposta.status` | Informa o código de status da resposta HTTP. |
| `resposta.json()` | Processa o conteúdo JSON da resposta, produzindo uma estrutura que poderá ser manipulada pelo JavaScript. |
| `throw` | Lança uma exceção e interrompe o fluxo normal da operação. |
| `new Error()` | Cria um objeto que representa um erro. |
| ES Modules | Permite organizar o código utilizando recursos como `export default` e `import`. |

---

## 💡 Dicas do Professor

> **`async` e `await` trabalham em conjunto.**
>
> O método `setCep()` é declarado com `async`, permitindo que operações assíncronas sejam aguardadas utilizando `await`.

> **Uma requisição pode exigir diferentes verificações.**
>
> No exemplo, `resposta.ok` verifica a situação da resposta HTTP. Depois, `dados.erro` verifica uma informação presente no conteúdo retornado pela API.

> **O resultado de `fetch()` e os dados da resposta são etapas diferentes.**
>
> Primeiro, `await fetch(url)` aguarda a resposta da requisição. Em seguida, `await resposta.json()` processa o conteúdo recebido.

> **Os dados de uma API podem utilizar nomes diferentes dos atributos da classe.**
>
> O ViaCEP utiliza `localidade`, enquanto a classe `Endereco` utiliza `#cidade`. A aplicação pode adaptar os dados externos à sua própria estrutura.

> **O método assíncrono também preserva o encapsulamento.**
>
> Mesmo que os valores sejam obtidos de um serviço externo, eles são armazenados nos atributos privados da classe e disponibilizados pelos métodos públicos.

---

## Tratamento de Exceções

Durante a execução de uma aplicação, podem ocorrer situações que impedem que uma operação seja concluída normalmente.

No exemplo da consulta ao CEP, podemos ter situações como:

- uma resposta da requisição que não seja bem-sucedida;
- um CEP que não seja encontrado na base consultada.

Para representar essas situações, o método `setCep()` utiliza **exceções**.

Uma exceção permite interromper o fluxo normal da operação e informar que ocorreu um problema.

No código estudado anteriormente, isso é realizado utilizando:

```javascript
throw new Error("CEP não encontrado na base do ViaCEP.");
```

Essa instrução envolve dois elementos importantes:

```javascript
new Error(...)
```

cria um objeto que representa o erro.

Já:

```javascript
throw
```

lança esse erro como uma exceção.

---

## Lançando uma Exceção com `throw`

A estrutura básica pode ser representada por:

```javascript
if (condicaoDeErro) {
    throw new Error("Mensagem de erro");
}
```

Quando a condição for verdadeira, a exceção será lançada.

A partir desse momento, o fluxo normal daquele trecho é interrompido.

No método `setCep()`, temos duas situações desse tipo.

A primeira verifica a resposta da requisição:

```javascript
if (!resposta.ok) {
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
}
```

A segunda verifica se o serviço informou que o CEP não foi encontrado:

```javascript
if (dados.erro) {
    throw new Error("CEP não encontrado na base do ViaCEP.");
}
```

Portanto, o próprio método responsável pela consulta também é capaz de **identificar situações que impedem a conclusão adequada da operação**.

---

## Tratando uma Exceção com `try` e `catch`

Lançar uma exceção não significa necessariamente que o método responsável por identificá-la também deverá decidir como apresentá-la ou tratá-la.

Outra parte da aplicação pode assumir essa responsabilidade.

Para isso, JavaScript disponibiliza as estruturas:

```javascript
try
```

e:

```javascript
catch
```

A estrutura básica é:

```javascript
try {
    // operação que pode gerar uma exceção
} catch (erro) {
    // tratamento da exceção
}
```

O bloco `try` contém o código que será executado normalmente.

Se uma exceção ocorrer durante essa execução, o fluxo será direcionado para o bloco `catch`.

O parâmetro:

```javascript
erro
```

recebe o objeto associado à exceção.

Assim, podemos acessar informações como:

```javascript
erro.message
```

para recuperar a mensagem utilizada na criação do erro.

---

## Relação entre `throw`, `try` e `catch`

Os recursos `throw`, `try` e `catch` possuem papéis complementares.

Podemos representar o fluxo da seguinte maneira:

```text
try
 │
 ▼
Operação
 │
 ├── operação concluída
 │        │
 │        ▼
 │   continua o fluxo
 │
 └── problema identificado
          │
          ▼
   throw new Error()
          │
          ▼
       catch
          │
          ▼
  tratamento do erro
```

No exemplo deste capítulo, teremos uma separação importante de responsabilidades:

```text
Endereco.setCep()
       │
       │ identifica o problema
       ▼
throw new Error()
       │
       │ exceção
       ▼
usaEndereco()
       │
       ▼
catch (erro)
       │
       ▼
tratamento do erro
```

Dessa forma, `setCep()` fica responsável por **identificar e sinalizar o problema**, enquanto o código que utiliza esse método poderá decidir **como tratar a exceção**.

---

## Exceções em Operações Assíncronas

Como `setCep()` é um método assíncrono, sua chamada será realizada utilizando:

```javascript
await
```

A operação poderá ser colocada dentro de um bloco `try`:

```javascript
try {
    await end.setCep("72015565");
} catch (erro) {
    console.error(erro.message);
}
```

Se `setCep()` for concluído normalmente, o fluxo continuará dentro do bloco `try`.

Caso uma exceção seja lançada durante a operação, o fluxo será direcionado para:

```javascript
catch (erro)
```

Essa integração entre:

```text
async / await
      +
throw
      +
try / catch
```

permite trabalhar com operações assíncronas e, ao mesmo tempo, controlar situações de erro.

---

## 📌 Conceitos-Chave do Tratamento de Exceções

| Conceito | Explicação |
|----------|------------|
| Exceção | Situação que interrompe o fluxo normal de uma operação. |
| `throw` | Lança uma exceção. |
| `Error` | Objeto utilizado para representar informações relacionadas ao erro. |
| `new Error()` | Cria uma nova instância de `Error`. |
| `try` | Delimita um bloco cuja execução poderá gerar uma exceção. |
| `catch` | Captura uma exceção lançada durante a execução do bloco `try`. |
| `erro` | Referência para o objeto capturado pelo `catch`. |
| `erro.message` | Permite acessar a mensagem associada ao erro. |
| `await` | Permite aguardar a operação assíncrona que poderá resultar em uma exceção. |

---

## 💡 Dicas do Professor

> **`throw` gera a exceção; `catch` trata a exceção.**
>
> Esses recursos não possuem a mesma responsabilidade. Um trecho do programa pode identificar o problema e outro decidir como tratá-lo.

> **Coloque dentro do `try` a operação que poderá gerar a exceção.**
>
> No próximo exemplo, `await end.setCep(...)` ficará dentro do bloco `try` porque o método `setCep()` pode lançar uma exceção.

> **A mensagem criada com `new Error()` poderá ser recuperada posteriormente.**
>
> Se o erro for criado com `new Error("CEP não encontrado")`, o bloco `catch` poderá acessar essa informação utilizando `erro.message`.

---

## Utilizando a Classe `Endereco`

Após implementar a classe `Endereco`, podemos criar um arquivo responsável por utilizar seus recursos.

Como o método `setCep()` realiza uma operação assíncrona, sua execução deverá ser aguardada utilizando `await`.

Além disso, como esse método pode lançar uma exceção, utilizaremos `try` e `catch` para controlar possíveis situações de erro.

O fluxo da aplicação pode ser representado da seguinte maneira:

```text
usaEndereco()
      │
      ▼
new Endereco()
      │
      ▼
    try
      │
      ▼
await end.setCep()
      │
      ├── sucesso
      │      │
      │      ▼
      │  apresenta dados
      │
      └── exceção
             │
             ▼
           catch
             │
             ▼
       apresenta erro
```

---

## 💻 Código Completo

**Arquivo:** `/pessoas/ENDERECO/usaEndereco.mjs`

```javascript
import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();

    try {
        await end.setCep("72015565");

        console.log("✅ Endereço carregado com sucesso:");
        console.log("CEP:", end.getCep());
        console.log("Logradouro:", end.getLogradouro());
        console.log("Bairro:", end.getBairro());
        console.log("Cidade:", end.getCidade());
        console.log("UF:", end.getUf());

    } catch (erro) {
        console.error("❌ Erro ao definir CEP:", erro.message);
    }
}

usaEndereco();
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–04 — Importação, função assíncrona e objeto**

```javascript
import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();
```

A primeira instrução importa a classe `Endereco`:

```javascript
import Endereco from './Endereco.mjs';
```

Como `Endereco` foi disponibilizada utilizando:

```javascript
export default
```

sua importação é realizada sem a utilização de chaves `{ }`.

Em seguida, é declarada a função:

```javascript
async function usaEndereco()
```

A palavra-chave `async` indica que `usaEndereco()` é uma função assíncrona.

Isso será necessário porque, posteriormente, utilizaremos `await` para aguardar a execução do método `setCep()`.

Dentro da função é criado um objeto da classe `Endereco`:

```javascript
const end = new Endereco();
```

A constante `end` passa a referenciar o objeto que receberá os dados obtidos por meio da consulta ao CEP.

---

### **Linhas 06–07 — `try` e chamada assíncrona**

```javascript
try {
    await end.setCep("72015565");
```

O bloco:

```javascript
try
```

delimita o código cuja execução poderá gerar uma exceção.

Dentro dele é realizada a chamada:

```javascript
await end.setCep("72015565");
```

O método `setCep()` foi declarado como assíncrono na classe `Endereco`.

Por esse motivo, utilizamos:

```javascript
await
```

para aguardar sua conclusão antes de continuar a execução das próximas instruções.

O valor:

```text
72015565
```

é enviado como argumento para o método e será utilizado na consulta à API ViaCEP.

Se a operação for concluída normalmente, o objeto `end` terá seus atributos preenchidos.

Entretanto, se `setCep()` executar:

```javascript
throw new Error(...)
```

o fluxo normal será interrompido e a exceção será direcionada para o bloco `catch`.

---

### **Linhas 09–14 — Apresentação dos dados**

```javascript
console.log("✅ Endereço carregado com sucesso:");
console.log("CEP:", end.getCep());
console.log("Logradouro:", end.getLogradouro());
console.log("Bairro:", end.getBairro());
console.log("Cidade:", end.getCidade());
console.log("UF:", end.getUf());
```

Essas instruções somente serão alcançadas se:

```javascript
await end.setCep("72015565");
```

for concluído sem lançar uma exceção.

A primeira instrução apresenta uma mensagem indicando que o endereço foi carregado:

```javascript
console.log("✅ Endereço carregado com sucesso:");
```

Em seguida, os métodos públicos da classe são utilizados para recuperar os dados armazenados:

```javascript
end.getCep()
end.getLogradouro()
end.getBairro()
end.getCidade()
end.getUf()
```

Essa abordagem preserva o **encapsulamento**, pois os atributos privados não são acessados diretamente.

Assim, o fluxo de sucesso pode ser representado por:

```text
setCep()
   │
   ▼
consulta concluída
   │
   ▼
atributos preenchidos
   │
   ▼
métodos get
   │
   ▼
console.log()
```

---

### **Linhas 16–18 — Captura e tratamento da exceção**

```javascript
} catch (erro) {
    console.error("❌ Erro ao definir CEP:", erro.message);
}
```

Caso uma exceção seja lançada durante a execução do bloco `try`, o fluxo será direcionado para:

```javascript
catch (erro)
```

O parâmetro:

```javascript
erro
```

recebe o objeto associado à exceção.

No método `setCep()`, os erros foram criados utilizando:

```javascript
new Error(...)
```

Por exemplo:

```javascript
throw new Error("CEP não encontrado na base do ViaCEP.");
```

A propriedade:

```javascript
erro.message
```

permite recuperar a mensagem associada ao objeto de erro.

Assim:

```javascript
console.error("❌ Erro ao definir CEP:", erro.message);
```

apresenta uma mensagem informando que ocorreu um problema e também mostra a descrição do erro recebido.

Observe a separação de responsabilidades:

```text
Endereco.setCep()
      │
      ▼
identifica o problema
      │
      ▼
throw new Error()
      │
      ▼
usaEndereco()
      │
      ▼
catch (erro)
      │
      ▼
apresenta o problema
```

A classe `Endereco` identifica que a operação não pôde ser concluída adequadamente, enquanto `usaEndereco()` decide como o erro será tratado.

---

### **Linha 21 — Execução da função**

```javascript
usaEndereco();
```

A última instrução executa a função definida anteriormente.

A partir dessa chamada, o fluxo completo será iniciado:

```text
usaEndereco()
      │
      ▼
cria Endereco
      │
      ▼
executa setCep()
      │
      ▼
consulta ViaCEP
      │
      ├── sucesso ──► apresenta endereço
      │
      └── erro ─────► catch
                         │
                         ▼
                   apresenta erro
```

Como `usaEndereco()` é uma função assíncrona, sua execução envolve operações que podem ser concluídas posteriormente.

No exemplo, entretanto, toda a lógica necessária para utilização do endereço e tratamento da exceção permanece organizada dentro da própria função.

---

## Integração entre Programação Assíncrona e Tratamento de Exceções

Os dois arquivos apresentados neste capítulo trabalham de forma integrada.

A classe `Endereco` é responsável por:

- receber o CEP;
- montar a URL da consulta;
- realizar a requisição utilizando `fetch()`;
- aguardar a resposta utilizando `await`;
- processar o conteúdo recebido;
- preencher os atributos do objeto;
- identificar situações de erro;
- lançar exceções utilizando `throw`.

Já o arquivo `usaEndereco.mjs` é responsável por:

- criar o objeto `Endereco`;
- chamar o método assíncrono `setCep()`;
- aguardar a conclusão da operação;
- apresentar os dados quando a consulta for bem-sucedida;
- capturar e tratar uma eventual exceção.

Essa divisão permite observar como diferentes partes da aplicação podem possuir responsabilidades específicas.

---

## Fluxo Completo da Aplicação

O funcionamento pode ser representado da seguinte forma:

```text
usaEndereco()
      │
      ▼
new Endereco()
      │
      ▼
try
      │
      ▼
await end.setCep(cep)
      │
      ▼
fetch(url)
      │
      ▼
API ViaCEP
      │
      ▼
Resposta
      │
      ├── resposta válida
      │        │
      │        ▼
      │   resposta.json()
      │        │
      │        ▼
      │   dados do endereço
      │        │
      │        ▼
      │   atributos preenchidos
      │        │
      │        ▼
      │   console.log()
      │
      └── problema
               │
               ▼
        throw new Error()
               │
               ▼
          catch (erro)
               │
               ▼
         console.error()
```

Esse fluxo demonstra a combinação entre **programação assíncrona** e **tratamento de exceções**.

---

## Identificando uma Situação de Erro

Dentro de `Endereco.setCep()`, o código verifica situações que impedem a conclusão normal da operação.

Uma delas ocorre quando a resposta HTTP não é considerada bem-sucedida:

```javascript
if (!resposta.ok) {
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
}
```

Outra situação ocorre quando o serviço informa que o CEP não foi encontrado:

```javascript
if (dados.erro) {
    throw new Error("CEP não encontrado na base do ViaCEP.");
}
```

Nesses casos, o método não apresenta diretamente a mensagem ao usuário.

Em vez disso, ele **sinaliza o problema** lançando uma exceção.

---

## Tratando a Situação de Erro

No arquivo `usaEndereco.mjs`, a chamada ao método é realizada dentro de um bloco `try`:

```javascript
try {
    await end.setCep("72015565");
}
```

Se `setCep()` for concluído normalmente, a execução continuará dentro do bloco.

Caso uma exceção seja lançada, o fluxo será direcionado para:

```javascript
catch (erro) {
    console.error("❌ Erro ao definir CEP:", erro.message);
}
```

O bloco `catch` recebe o objeto de erro e define como a aplicação deverá reagir.

Nesse exemplo, a ação escolhida é apresentar a mensagem no console.

---

## Identificar o Erro × Tratar o Erro

Essa diferença é importante.

### Identificar e sinalizar

A classe `Endereco` identifica que ocorreu um problema:

```javascript
throw new Error(...)
```

Seu papel é informar que a operação não pôde continuar normalmente.

### Tratar

O arquivo `usaEndereco.mjs` captura essa situação:

```javascript
catch (erro)
```

e decide o que fazer com ela.

Neste exemplo, o tratamento consiste em:

```javascript
console.error(...)
```

Portanto:

```text
Endereco
   │
   │ identifica
   ▼
 throw
   │
   │ sinaliza
   ▼
usaEndereco
   │
   │ captura
   ▼
 catch
   │
   │ trata
   ▼
mensagem ao usuário
```

---

## Relação entre `async`, `await`, `throw`, `try` e `catch`

Os principais elementos utilizados no exemplo possuem funções diferentes:

| Recurso | Papel |
|----------|-------|
| `async` | Declara que a função ou método trabalhará com operações assíncronas. |
| `await` | Aguarda a conclusão de uma operação assíncrona. |
| `fetch()` | Realiza a requisição utilizada para consultar o serviço externo. |
| `throw` | Lança uma exceção quando uma situação de erro é identificada. |
| `new Error()` | Cria o objeto que representa o erro. |
| `try` | Delimita o código cuja execução poderá gerar uma exceção. |
| `catch` | Captura a exceção e permite tratá-la. |
| `erro.message` | Recupera a mensagem associada ao erro capturado. |

Esses recursos podem ser observados em um fluxo único:

```javascript
try {
    await end.setCep("72015565");
} catch (erro) {
    console.error(erro.message);
}
```

O método chamado com `await` poderá internamente executar:

```javascript
throw new Error(...)
```

e a exceção será capturada pelo `catch`.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Programação Assíncrona | Permite trabalhar com operações que podem levar tempo para serem concluídas. |
| Função Assíncrona | Função ou método declarado utilizando `async`. |
| `await` | Aguarda a conclusão de uma operação assíncrona. |
| API externa | Serviço consultado pela aplicação para obtenção de dados. |
| `fetch()` | Realiza a requisição HTTP utilizada no exemplo. |
| ViaCEP | API pública utilizada para buscar informações de endereço. |
| Exceção | Situação que interrompe o fluxo normal de uma operação. |
| `throw` | Gera uma exceção. |
| `Error` | Objeto que representa informações sobre um erro. |
| `try` | Agrupa instruções que podem gerar uma exceção. |
| `catch` | Captura e trata a exceção. |
| `erro.message` | Permite acessar a mensagem do erro capturado. |
| Encapsulamento | Os dados de `Endereco` permanecem armazenados em atributos privados. |
| Modularização | `Endereco` e `usaEndereco` são organizados em arquivos separados utilizando ES Modules. |

---

## 💡 Dicas do Professor

> **Quem detecta o problema não precisa ser quem apresenta a mensagem.**
>
> `setCep()` identifica a situação de erro e lança a exceção. O código que utiliza esse método decide como tratá-la.

> **Use `try/catch` ao redor da operação que poderá lançar uma exceção.**
>
> Neste exemplo, a chamada `await end.setCep(...)` fica dentro do bloco `try`.

> **`await` organiza o fluxo da operação assíncrona.**
>
> Os dados do endereço só devem ser consultados depois que `setCep()` concluir corretamente sua execução.

> **Uma exceção interrompe o fluxo normal.**
>
> Se `throw` for executado dentro de `setCep()`, as instruções posteriores daquele fluxo não continuarão normalmente, e o tratamento será direcionado ao `catch`.

> **As responsabilidades permanecem separadas.**
>
> A classe `Endereco` concentra a lógica da consulta e atualização dos atributos, enquanto `usaEndereco.mjs` controla a interação e o tratamento da exceção.

---

---------------------

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Programação Assíncrona | Permite trabalhar com operações cujo resultado pode não estar disponível imediatamente. |
| `async` | Declara uma função ou método assíncrono. |
| `await` | Aguarda a conclusão de uma operação assíncrona antes de continuar o fluxo dependente de seu resultado. |
| `fetch()` | Realiza a requisição utilizada para consultar um recurso externo. |
| API | Permite a comunicação entre aplicações ou componentes de software. |
| ViaCEP | API utilizada no exemplo para consultar informações de endereço a partir de um CEP. |
| `resposta.ok` | Indica se a resposta HTTP foi considerada bem-sucedida. |
| `resposta.status` | Permite acessar o código de status da resposta HTTP. |
| `resposta.json()` | Processa o conteúdo JSON recebido na resposta. |
| Exceção | Situação que interrompe o fluxo normal de uma operação. |
| `throw` | Lança uma exceção quando uma situação de erro é identificada. |
| `new Error()` | Cria um objeto que representa um erro. |
| `try` | Delimita um bloco de código cuja execução poderá gerar uma exceção. |
| `catch` | Captura uma exceção e permite definir seu tratamento. |
| `erro.message` | Permite acessar a mensagem associada ao erro capturado. |
| Encapsulamento | Mantém os dados de `Endereco` protegidos em atributos privados. |
| ES Modules | Organiza os arquivos utilizando recursos como `import` e `export default`. |

---------------------

## 💡 Dicas do Professor

> **Programação assíncrona é especialmente importante quando a aplicação depende de recursos externos.**
>
> Uma requisição realizada pela Internet pode levar algum tempo para ser concluída. `async` e `await` permitem organizar esse fluxo de maneira mais clara.

> **`async` identifica um contexto assíncrono e `await` aguarda uma operação.**
>
> No exemplo, `setCep()` é declarado com `async`, enquanto `await` é utilizado para aguardar `fetch()` e `resposta.json()`.

> **Uma resposta HTTP e o conteúdo retornado são aspectos diferentes.**
>
> `resposta.ok` permite verificar a situação da resposta HTTP, enquanto `dados.erro` permite verificar uma informação presente nos dados retornados pelo ViaCEP.

> **`throw` e `catch` possuem responsabilidades complementares.**
>
> `throw` sinaliza que ocorreu uma situação excepcional. `catch` permite definir o que a aplicação fará diante dessa situação.

> **Quem identifica o problema não precisa ser quem o trata.**
>
> A classe `Endereco` identifica situações que impedem a conclusão da consulta e lança uma exceção. O arquivo `usaEndereco.mjs` captura essa exceção e define seu tratamento.

> **Mantenha o encapsulamento mesmo quando os dados são obtidos externamente.**
>
> Os valores retornados pelo ViaCEP são armazenados nos atributos privados de `Endereco` e continuam sendo acessados por meio dos métodos públicos da classe.

---------------------

## 💡 Resumo Final

Neste capítulo foi apresentada a utilização de **programação assíncrona** em JavaScript.

A classe `Endereco` foi adaptada para consultar informações de endereço utilizando a API ViaCEP. Para isso, o método `setCep()` foi declarado utilizando `async`.

A requisição ao serviço externo foi realizada com:

```javascript
const resposta = await fetch(url);
```

O uso de `await` permite aguardar a conclusão da requisição antes de utilizar sua resposta.

Em seguida, o conteúdo retornado foi processado utilizando:

```javascript
const dados = await resposta.json();
```

Os dados obtidos foram utilizados para preencher os atributos privados da classe `Endereco`, preservando o encapsulamento.

Também foram apresentadas situações nas quais a operação não pode ser concluída normalmente. Para sinalizar esses problemas, o método `setCep()` utiliza:

```javascript
throw new Error(...)
```

Duas situações foram consideradas no exemplo:

- resposta HTTP não considerada bem-sucedida;
- CEP não encontrado na base consultada.

No arquivo `usaEndereco.mjs`, a chamada ao método assíncrono foi realizada dentro de um bloco `try`:

```javascript
try {
    await end.setCep("72015565");
}
```

Caso uma exceção seja lançada, ela é capturada utilizando:

```javascript
catch (erro)
```

e sua mensagem pode ser recuperada por:

```javascript
erro.message
```

Dessa forma, o exemplo demonstra uma importante separação de responsabilidades: a classe `Endereco` identifica e sinaliza situações de erro, enquanto o código que utiliza essa classe determina como essas situações serão tratadas.

O capítulo integrou, portanto, **programação assíncrona, consumo de APIs, tratamento de exceções, encapsulamento e modularização utilizando ES Modules**.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender por que determinadas operações em JavaScript são assíncronas;
- declarar funções e métodos utilizando `async`;
- utilizar `await` para aguardar operações assíncronas;
- realizar requisições utilizando `fetch()`;
- compreender o fluxo básico de consulta a uma API;
- utilizar dados retornados por um serviço externo para atualizar um objeto;
- verificar o resultado de uma resposta utilizando `resposta.ok`;
- acessar o código de status utilizando `resposta.status`;
- processar respostas utilizando `resposta.json()`;
- compreender o conceito de exceção;
- lançar exceções utilizando `throw`;
- criar objetos de erro utilizando `new Error()`;
- utilizar `try` para delimitar operações que podem gerar exceções;
- utilizar `catch` para capturar e tratar exceções;
- acessar a mensagem de uma exceção utilizando `erro.message`;
- compreender como uma exceção pode ser lançada em um método e tratada em outro ponto da aplicação;
- integrar programação assíncrona com classes e atributos privados;
- organizar a aplicação utilizando ES Modules.

---------------------

## 📚 Exercícios de Fixação

-  https://jsebook.incluc0de.com.br/docs/tutorial-exercicios/Explorando-BackEnd-ViaCep

---------------------

# 📚 Exercício de Fixação 01 — Biblioteca JavaScript de Conversões

## 🎯 Contexto do Problema

Uma empresa deseja criar uma pequena biblioteca JavaScript chamada:

```text
conversores.js
```

Essa biblioteca será responsável por disponibilizar funções utilitárias para realizar conversões comuns do dia a dia.

O objetivo é praticar:

- criação de funções em JavaScript;
- reutilização de código;
- organização modular;
- importação e utilização de bibliotecas;
- execução de testes simples.

---

# ✅ Funções Obrigatórias

## 1. 🌡️ Converter Temperatura

### Função

```javascript
celsiusParaFahrenheit(celsius)
```

### Fórmula

```text
F = (9 / 5) * C + 32
```

Onde:

- F → temperatura em Fahrenheit
- C → temperatura em Celsius

### Exemplo

```javascript
celsiusParaFahrenheit(30)
```

### Resultado Esperado

```javascript
86
```

---

## 2. ⏱️ Converter Horas em Minutos

### Função

```javascript
horasParaMinutos(horas)
```

### Fórmula

```text
Minutos = Horas * 60
```

### Exemplo

```javascript
horasParaMinutos(2)
```

### Resultado Esperado

```javascript
120
```

---

## 3. 📅 Converter Idade em Dias

### Função

```javascript
idadeEmDias(idade)
```

### Consideração

```text
1 ano = 365 dias
```

### Fórmula

```text
Dias = Idade * 365
```

### Exemplo

```javascript
idadeEmDias(20)
```

### Resultado Esperado

```javascript
7300
```

---

## 4. 📏 Converter Quilômetros para Metros

### Função

```javascript
kmParaMetros(km)
```

### Fórmula

```text
Metros = Quilômetros * 1000
```

### Exemplo

```javascript
kmParaMetros(3)
```

### Resultado Esperado

```javascript
3000
```

---

## 5. ⛽ Calcular Consumo Médio de Combustível

### Função

```javascript
consumoMedio(distancia, litros)
```

### Fórmula

```text
Consumo = Distância / Litros
```

Onde:

- Distância → quilômetros percorridos
- Litros → quantidade de combustível utilizada

### Exemplo

```javascript
consumoMedio(500, 40)
```

### Resultado Esperado

```javascript
12.5
```

---

# 📁 Estrutura Esperada do Projeto

```text
projeto/
│
├── conversores.js
└── app.js
```

---

# 📦 Arquivo da Biblioteca

## conversores.js

Este arquivo deverá conter:

- todas as funções de conversão;
- exportação das funções;
- organização modular do código.

---

# 🧪 Arquivo de Testes

## app.js

Este arquivo deverá:

- importar a biblioteca `conversores.js`;
- executar testes das funções;
- exibir os resultados no console.

---

# 💡 Exemplo Esperado de Execução

```javascript
console.log(celsiusParaFahrenheit(30));
console.log(horasParaMinutos(2));
console.log(idadeEmDias(20));
console.log(kmParaMetros(3));
console.log(consumoMedio(500, 40));
```

### Saída Esperada

```javascript
86
120
7300
3000
12.5
```

---

# 🚀 Objetivo Pedagógico

Ao concluir este exercício, o estudante deverá ser capaz de:

- criar funções reutilizáveis;
- organizar código em módulos JavaScript;
- aplicar fórmulas matemáticas em programação;

# 📚 Exercício de Fixação 02 – Orientação a Objetos em JavaScript

## 🎯 Contexto do Problema

Uma empresa deseja evoluir sua biblioteca JavaScript chamada **conversores.js**.

Atualmente a biblioteca possui apenas funções isoladas para realizar conversões comuns do dia a dia. Para melhorar a organização do código, foi decidido utilizar os conceitos de **Orientação a Objetos** e **módulos JavaScript**.

Sua tarefa é desenvolver uma classe chamada `Conversor`, responsável por agrupar todos os métodos de conversão.

---

## Estrutura do Projeto

Organize o projeto utilizando a seguinte estrutura:

```text
projeto/
├── conversor.js
└── main.js
```

---

## Arquivo conversor.js

Crie uma classe chamada:

```javascript
class Conversor {

}
```

## Métodos Obrigatórios

### 1. Conversão de Temperatura

```javascript
celsiusParaFahrenheit(celsius)
```

Fórmula:

```text
F = (9 / 5) * C + 32
```

### 2. Conversão de Distância

```javascript
quilometrosParaMilhas(km)
```

Fórmula:

```text
milhas = km * 0.621371
```

### 3. Conversão de Tempo

```javascript
minutosParaHoras(minutos)
```

Fórmula:

```text
horas = minutos / 60
```

---

## Exportação da Classe

Ao final do arquivo `conversor.js`, exporte a classe:

```javascript
export { Conversor };
```

---

## Arquivo main.js

Importe a classe e utilize-a:

```javascript
import { Conversor } from './conversor.js';

const conversor = new Conversor();
```

---

## Testes

Realize as seguintes conversões:

- 25°C
- 10 km
- 150 minutos

### Saída Esperada

```text
25°C = 77°F

10 km = 6.21371 milhas

150 minutos = 2.5 horas
```

---

## Exemplo de Utilização

```javascript
import { Conversor } from './conversor.js';

const conversor = new Conversor();

console.log(conversor.celsiusParaFahrenheit(25));
console.log(conversor.quilometrosParaMilhas(10));
console.log(conversor.minutosParaHoras(150));
```

---

## Critérios de Avaliação

| Critério | Pontos |
|-----------|---------|
| Classe criada corretamente | 2 |
| Métodos implementados corretamente | 2 |
| Classe exportada corretamente | 2 |
| Classe importada corretamente | 2 |
| Testes realizados em main.js | 2 |

**Total: 10 pontos**

---

## Entrega

Entregue os seguintes arquivos:

```text
conversor.js
main.js
```

Os arquivos devem executar corretamente e produzir as saídas esperadas no console.

# 📚 Exercício de Fixação 03 – Visibilidade e Encapsulamento em JavaScript

## 🎯 Contexto do Problema

Uma empresa está desenvolvendo um sistema de carteira digital para seus clientes.

Por questões de segurança, as informações da carteira não podem ser acessadas ou alteradas diretamente por outros módulos do sistema. Todas as operações devem ocorrer por meio de métodos da classe.

Sua tarefa é desenvolver uma classe chamada `CarteiraDigital`, aplicando os conceitos de **visibilidade** e **encapsulamento** estudados em aula.

---

## Estrutura do Projeto

Organize o projeto utilizando a seguinte estrutura:

```text
projeto/
├── carteiraDigital.js
└── main.js
```

---

## Arquivo carteiraDigital.js

Crie uma classe chamada:

```javascript
class CarteiraDigital {

}
```

---

## Atributos

A classe deve possuir os seguintes atributos privados:

| Atributo | Descrição |
|-----------|-----------|
| #titular | Nome do proprietário da carteira |
| #saldo | Saldo disponível na carteira |

---

## Métodos Obrigatórios

### 1. Definir Titular

```javascript
definirTitular(nome)
```

### 2. Consultar Titular

```javascript
consultarTitular()
```

### 3. Depositar Saldo

```javascript
depositar(valor)
```

### 4. Sacar Saldo

```javascript
sacar(valor)
```

### 5. Consultar Saldo

```javascript
consultarSaldo()
```

### 6. Exibir Informações

```javascript
exibirInformacoes()
```
Exemplo:

```text
Titular: João Silva
Saldo: R$ 150.00
```

---

## Exportação da Classe

```javascript
module.exports = CarteiraDigital;
```

---

## Arquivo main.js

```javascript
const CarteiraDigital = require('./carteiraDigital');
```

---

## Testes

1. Criar uma carteira digital.
2. Definir o titular como "João Silva".
3. Depositar R$ 200,00.
4. Consultar o saldo.
5. Sacar R$ 50,00.
6. Consultar o saldo novamente.
7. Tentar sacar R$ 500,00.
8. Exibir as informações finais da carteira.

---

## Exemplo de Utilização

```javascript
const CarteiraDigital = require('./carteiraDigital');

const carteira = new CarteiraDigital();

carteira.definirTitular('João Silva');
carteira.depositar(200);

console.log(carteira.consultarSaldo());

carteira.sacar(50);

carteira.exibirInformacoes();
```

# 📚 Exercício de Fixação 04 – Encapsulamento, Condicionais e Herança


### Conteúdos Trabalhados

* Classes e Objetos
* Visibilidade de atributos
* Encapsulamento
* Getters e Setters
* Estruturas Condicionais
* Herança
* Reutilização de Código
* Instanciação de Objetos

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade o estudante deverá ser capaz de:

* Criar classes utilizando JavaScript moderno;
* Declarar atributos privados utilizando `#`;
* Implementar métodos Getters e Setters;
* Aplicar validações utilizando estruturas condicionais;
* Utilizar herança através da palavra-chave `extends`;
* Reutilizar métodos herdados;
* Instanciar objetos e testar seus comportamentos;
* Compreender a importância do encapsulamento na proteção dos dados.

---

# 📖 Contextualização

Uma instituição de ensino está desenvolvendo um sistema para cadastro de pessoas.

Na primeira versão do sistema foi criada uma classe chamada `Pessoa`, responsável por armazenar informações básicas como nome e e-mail.

Agora será necessário expandir esse sistema para permitir o cadastro de alunos e professores, aproveitando os conceitos de herança e encapsulamento estudados em sala.

Seu papel será implementar as classes necessárias e realizar os testes para verificar seu funcionamento.

---

# 🧩 Parte 1 – Classe Pessoa

Crie um arquivo chamado:

```javascript
Pessoa.js
```

---

## Requisitos

A classe deve possuir os seguintes atributos privados:

```javascript
#nome
#email
```

---

## Métodos Obrigatórios

```javascript
setNome()
getNome()

setEmail()
getEmail()
```

---

## Regras de Negócio

### Método setNome()

Deve:

* receber um parâmetro chamado `nome`;
* verificar se o valor não está vazio;
* armazenar o valor apenas quando válido;
* retornar `true` quando a operação for realizada;
* retornar `false` quando o valor estiver vazio.

---

### Método setEmail()

Deve:

* receber um parâmetro chamado `email`;
* verificar se o valor não está vazio;
* armazenar o valor apenas quando válido;
* retornar `true` quando a operação for realizada;
* retornar `false` quando o valor estiver vazio.

---

# 🧩 Parte 2 – Classe Aluno

Crie um arquivo chamado:

```javascript
Aluno.js
```

---

## Herança

A classe deverá herdar da classe:

```javascript
Pessoa
```

utilizando:

```javascript
extends
```

---

## Novo Atributo

Adicionar o atributo privado:

```javascript
#matricula
```

---

## Métodos

Implementar:

```javascript
setMatricula()
getMatricula()
```

---

## Regra

A matrícula somente poderá ser cadastrada quando possuir algum valor.

Caso contrário o método deverá retornar:

```javascript
false
```

---

# 🧩 Parte 3 – Classe Professor

Crie um arquivo chamado:

```javascript
Professor.js
```

---

## Herança

A classe deverá herdar da classe:

```javascript
Pessoa
```

---

## Atributo

Adicionar:

```javascript
#disciplina
```

---

## Métodos

Implementar:

```javascript
setDisciplina()
getDisciplina()
```

---

## Regra

A disciplina não poderá ser vazia.

---

# 🧪 Parte 4 – Arquivo de Testes

Criar um arquivo chamado:

```javascript
usaPessoas.js
```

---

# Teste 1 – Pessoa Válida

Criar um objeto:

```javascript
const p = new Pessoa();
```

Cadastrar:

```text
Nome: João Silva
Email: joao@email.com
```

Exibir os dados utilizando os métodos Getters.

---

# Teste 2 – Pessoa Inválida

Criar um objeto:

```javascript
const p2 = new Pessoa();
```

Cadastrar:

```text
Nome: ""
Email: ""
```

Exibir mensagens adequadas quando ocorrer erro.

Exemplo:

```text
Nome inválido
Email inválido
```

---

# Teste 3 – Aluno Válido

Criar um objeto:

```javascript
const a = new Aluno();
```

Cadastrar:

```text
Nome: Maria
Email: maria@email.com
Matrícula: 2025001
```

Exibir:

```text
Nome:
Email:
Matrícula:
```

---

# Teste 4 – Aluno Inválido

Cadastrar:

```text
Nome: Pedro
Email: ""
Matrícula: ""
```

Verificar quais métodos retornam:

```javascript
false
```

e exibir mensagens apropriadas.

---

# Teste 5 – Professor Válido

Criar um objeto:

```javascript
const prof = new Professor();
```

Cadastrar:

```text
Nome: Carlos
Email: carlos@email.com
Disciplina: Programação Web
```

Exibir todos os dados.

---

# Teste 6 – Professor Inválido

Cadastrar:

```text
Nome: Ana
Email: ana@email.com
Disciplina: ""
```

Exibir mensagem informando erro no cadastro da disciplina.

---

# ⭐ Desafio Extra 1 – Validação de E-mail

Modificar o método:

```javascript
setEmail()
```

para aceitar apenas e-mails que possuam o caractere:

```text
@
```

Exemplo:

```javascript
if(email.includes("@"))
```

---

## Casos de Teste

Válidos:

```text
aluno@email.com
professor@escola.com
```

Inválidos:

```text
alunoemail.com
professor.com
```

---

# ⭐ Desafio Extra 2 – Validação de Matrícula

Modificar:

```javascript
setMatricula()
```

para aceitar somente matrículas com pelo menos:

```text
6 caracteres
```

---

# ⭐⭐ Desafio Avançado

Criar uma nova classe:

```javascript
Coordenador
```

que herde de:

```javascript
Professor
```

---

## Novo Atributo

```javascript
#setor
```

---

## Métodos

```javascript
setSetor()
getSetor()
```

---

## Objetivo

Demonstrar herança em múltiplos níveis:

```text
Pessoa
   ↑
Professor
   ↑
Coordenador
```

---

# 📌 Questões Teóricas

Responda em seu caderno:

### 1)

O que é encapsulamento?

---

### 2)

Qual a vantagem de utilizar atributos privados?

---

### 3)

Qual a diferença entre:

```javascript
getNome()
```

e

```javascript
setNome()
```

---

### 4)

O que faz a palavra-chave:

```javascript
extends
```

---

### 5)

Uma classe filha pode utilizar métodos da classe pai?

Explique.

---

### 6)

Por que utilizar validações dentro dos métodos de uma classe?

---

### 7)

Qual a diferença entre herança e reutilização de código por cópia?

---

# 📌 Critérios de Avaliação

| Critério               | Pontos |
| ---------------------- | ------ |
| Classe Pessoa          | 1,5    |
| Encapsulamento correto | 1,5    |
| Uso de condicionais    | 1,5    |
| Classe Aluno           | 1,5    |
| Classe Professor       | 1,5    |
| Arquivo de testes      | 1,5    |
| Questões teóricas      | 1,0    |

**Total: 10,0 pontos**

---

# 💡 Dicas

* Desenvolva uma classe por vez.
* Teste cada método logo após implementá-lo.
* Utilize bastante o comando:

```javascript
console.log()
```

para verificar o comportamento do programa.

* Não avance para herança antes que a classe Pessoa esteja funcionando corretamente.
* Sempre valide os dados antes de armazená-los.

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

que permita:

```text
1 - Cadastrar Pessoa
2 - Cadastrar Aluno
3 - Cadastrar Professor
4 - Listar Dados
5 - Sair
```

Este desafio servirá como preparação para os próximos conteúdos de:

* Composição de Objetos;
* Coleções de Objetos;
* Persistência de Dados.

# 📚 Exercício de Fixação 05 -- Herança, Sobrescrita e Validação de Dados

## 🎯 Contexto do Problema

Uma empresa de tecnologia está desenvolvendo um sistema para cadastro de
clientes.

Todos os clientes possuem informações básicas como nome e e-mail, porém
existem dois tipos distintos de clientes:

-   Pessoa Física (PF);
-   Pessoa Jurídica (PJ).

Enquanto pessoas físicas informam um CPF, pessoas jurídicas informam um
CNPJ.

Além disso, a empresa decidiu criar regras específicas para o cadastro
de e-mails das empresas.

Sua tarefa será implementar essas classes utilizando os conceitos
estudados nesta apostila.

------------------------------------------------------------------------

# Estrutura do Projeto

``` text
projeto/
│
├── pessoas/
│   ├── Pessoa.js
│   ├── PF.js
│   └── PJ.js
│
└── usaClientes.js
```

------------------------------------------------------------------------

# 🧩 Parte 1 -- Classe Pessoa

Crie a classe `Pessoa`.

## Atributos privados

``` javascript
#nome
#email
```

## Métodos

``` javascript
setNome()
getNome()

setEmail()
getEmail()
```

### Regras

-   `setNome()` deve aceitar apenas nomes não vazios e retornar `true`
    ou `false`.
-   `setEmail()` deve aceitar apenas e-mails não vazios.

------------------------------------------------------------------------

# 🧩 Parte 2 -- Classe PF

A classe deverá herdar de `Pessoa` utilizando:

``` javascript
extends Pessoa
```

### Novo atributo

``` javascript
#cpf
```

### Métodos

``` javascript
setCPF()
getCPF()
```

### Regra

Aceitar apenas CPF com exatamente 14 caracteres (formato
`000.000.000-00`).

------------------------------------------------------------------------

# 🧩 Parte 3 -- Classe PJ

A classe deverá herdar de `Pessoa`.

### Novo atributo

``` javascript
#cnpj
```

### Métodos

``` javascript
setCNPJ()
getCNPJ()
```

### Regra

Aceitar apenas CNPJs com pelo menos 18 caracteres utilizando o operador
`<`.

------------------------------------------------------------------------

# 🧩 Parte 4 -- Sobrescrita

Sobrescreva o método:

``` javascript
setEmail()
```

Validações:

-   e-mail não pode ser vazio;
-   deve conter `@`;
-   após validar, chamar:

``` javascript
super.setEmail(email);
```

------------------------------------------------------------------------

# 🧪 Parte 5 -- Arquivo de Testes

Criar o arquivo:

``` javascript
usaClientes.js
```

Realize os seguintes testes:

1.  Pessoa válida.
2.  Pessoa Física válida.
3.  Pessoa Jurídica válida.
4.  CNPJ inválido.
5.  E-mail inválido.

Exiba mensagens apropriadas para sucesso ou erro em cada situação.

------------------------------------------------------------------------

# ⭐ Desafio Extra 1

Modificar `setNome()` para aceitar apenas nomes com 3 ou mais caracteres
utilizando `>=`.

------------------------------------------------------------------------

# ⭐ Desafio Extra 2

Modificar `setEmail()` da classe `PJ` para aceitar apenas e-mails
terminados em:

``` text
.com
```

Utilize:

``` javascript
email.endsWith(".com")
```

------------------------------------------------------------------------

# ⭐⭐ Desafio Avançado

Criar a classe:

``` javascript
MEI
```

herdando de `PJ`.

Adicionar:

``` javascript
#ramoAtividade
```

Implementar:

``` javascript
setRamoAtividade()
getRamoAtividade()
```

Sobrescrever novamente `setEmail()` para aceitar apenas e-mails
terminados em `.com.br`, utilizando `super.setEmail()`.

------------------------------------------------------------------------

# 📌 Questões Teóricas

1.  Qual a diferença entre herança e sobrescrita de métodos?
2.  Para que serve a palavra-chave `super`?
3.  Qual a vantagem de reutilizar métodos da classe pai?
4.  Por que utilizar atributos privados (`#`)?
5.  Qual a diferença entre `!=` e `!==`?
6.  Qual a função do método `includes()`?
7.  Em que situação a sobrescrita é mais indicada do que criar um método
    completamente novo?

------------------------------------------------------------------------

# 📌 Critérios de Avaliação

  Critério                          Pontos
  -------------------------------- --------
  Classe Pessoa                      1,5
  Classe PF                          1,5
  Classe PJ                          2,0
  Sobrescrita utilizando `super`     1,5
  Operadores de comparação           1,0
  Arquivo de testes                  1,5
  Questões teóricas                  1,0

**Total: 10,0 pontos**

------------------------------------------------------------------------

# 💡 Dicas

-   Desenvolva uma classe por vez.
-   Teste cada método imediatamente após implementá-lo.
-   Utilize `console.log()` para acompanhar os retornos.
-   Verifique a herança antes de implementar a sobrescrita.
-   Utilize `super` para reaproveitar o comportamento da classe base.

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

# 📚 Exercício de Fixação 07 – Relacionamentos entre Classes

## 🎯 Contexto

Uma clínica veterinária está desenvolvendo um sistema para informatizar o cadastro de seus clientes, animais de estimação, prontuários e médicos veterinários.

Cada cliente pode possuir vários animais cadastrados. Cada animal possui um prontuário exclusivo contendo seu histórico de atendimento. Durante sua vida, um animal poderá ser atendido por diferentes médicos veterinários, assim como um veterinário poderá atender diversos animais.

Analise a imagem a seguir e observe os relacionamentos existentes entre as entidades do sistema.

![Figura 1 - Clínica Veterinária](./images/clinica_veterinaria.png)

> **Figura 1 – Diagrama UML das classes propostas como exercício.**

A partir desse cenário (Figura 1), implemente as classes e os relacionamentos necessários utilizando os conceitos de Programação Orientada a Objetos estudados neste documento.

---

## 🔎 Análise do Cenário

Antes de iniciar a implementação, observe atentamente a figura e identifique os relacionamentos existentes.

Você deverá perceber que:

- um **Cliente** pode possuir vários **Animais**;
- cada **Animal** pertence a um único **Cliente**;
- cada **Animal** possui exatamente um **Prontuário**;
- cada **Prontuário** pertence a um único **Animal**;
- um **Veterinário** pode atender vários **Animais**;
- um mesmo **Animal** pode ser atendido por diferentes **Veterinários**.

Durante a implementação, todos esses relacionamentos deverão ser representados utilizando objetos, composição e referências cruzadas.

---

## 📖 Conteúdos Trabalhados

Este exercício aborda os seguintes conceitos:

- Classes e Objetos;
- Encapsulamento;
- Modularização;
- Composição;
- Relacionamentos entre Classes;
- Relacionamento **1:1**;
- Relacionamento **1:N**;
- Relacionamento **N:N**;
- Validação utilizando `instanceof`;
- Referências cruzadas entre objetos.

---

## 🎯 Objetivos

Ao concluir este exercício, você deverá ser capaz de:

- modelar classes utilizando Programação Orientada a Objetos;
- implementar relacionamentos entre objetos;
- utilizar composição para representar associações entre classes;
- validar objetos utilizando o operador `instanceof`;
- implementar referências cruzadas entre objetos relacionados;
- organizar aplicações JavaScript utilizando módulos.

---

## 📁 Estrutura do Projeto

Organize sua solução conforme a estrutura abaixo.

```text
objetos/

    Cliente.js
    Animal.js
    Prontuario.js
    Veterinario.js

usaClinica.js
```

---

# Parte 1 – Classe Cliente

Crie uma classe chamada **Cliente**.

Ela deverá possuir os seguintes atributos privados:

- nome
- telefone
- animais

O atributo `animais` deverá ser um vetor de objetos da classe `Animal`.

Implemente:

- métodos getters;
- métodos setters;
- método `addAnimal()`.

O método `addAnimal()` deverá:

- aceitar somente objetos da classe `Animal`;
- validar o objeto utilizando `instanceof`;
- adicionar o animal ao vetor;
- criar automaticamente a referência cruzada entre Cliente e Animal.

---

# Parte 2 – Classe Animal

Crie uma classe chamada **Animal**.

Ela deverá possuir os seguintes atributos privados:

- nome;
- especie;
- cliente;
- prontuario;
- veterinarios.

O atributo `veterinarios` deverá ser um vetor de objetos.

Implemente os métodos necessários para:

- associar um cliente;
- associar um prontuário;
- adicionar veterinários;
- recuperar todas as informações cadastradas.

Todos os relacionamentos deverão validar os objetos utilizando `instanceof`.

---

# Parte 3 – Classe Prontuario

Crie uma classe chamada **Prontuario**.

Ela deverá possuir os atributos privados:

- numero;
- observacoes;
- animal.

Cada prontuário pertence a exatamente um animal.

Implemente:

- getters;
- setters;
- método para associar um Animal;
- método para recuperar o Animal associado.

O relacionamento deverá ser do tipo **1:1**.

---

# Parte 4 – Classe Veterinario

Crie uma classe chamada **Veterinario**.

Ela deverá possuir os atributos privados:

- nome;
- crmv;
- animais.

O atributo `animais` deverá ser um vetor.

Implemente:

- getters;
- setters;
- método `addAnimal()`;
- método `getAnimais()`.

Ao adicionar um animal, a referência cruzada deverá ser criada automaticamente.

---

# Parte 5 – Integração das Classes

Crie um arquivo chamado:

```text
usaClinica.js
```

Nesse arquivo você deverá:

1. criar um cliente;
2. criar dois animais;
3. criar um prontuário para cada animal;
4. criar dois veterinários;
5. estabelecer todos os relacionamentos entre os objetos;
6. imprimir as informações utilizando `console.log()`.

Ao final da execução deverão ser exibidos:

- nome do cliente;
- telefone;
- animais cadastrados;
- prontuário de cada animal;
- veterinários responsáveis por cada animal;
- referências cruzadas.

---

## 🧪 Testes Esperados

Verifique se sua aplicação atende aos seguintes requisitos:

- um cliente pode possuir vários animais;
- cada animal pertence a um único cliente;
- cada animal possui um único prontuário;
- cada prontuário pertence a um único animal;
- um veterinário atende vários animais;
- um animal pode possuir vários veterinários;
- todos os relacionamentos possuem referências cruzadas funcionando corretamente.

---

## ⭐ Desafio

Implemente os seguintes métodos.

Na classe **Cliente**:

```javascript
listarAnimais()
```

Esse método deverá exibir uma saída semelhante a:

```text
Cliente: João Silva

Animais:

• Rex
• Luna
• Mel
```

Na classe **Animal**, implemente:

```javascript
listarVeterinarios()
```

Exibindo todos os veterinários responsáveis pelo atendimento do animal.

---

## 📝 Questões Teóricas

Responda às questões a seguir.

1. Qual a diferença entre um relacionamento **1:1** e um relacionamento **1:N**?

2. Em quais situações utilizamos um relacionamento **N:N**?

3. Qual a finalidade do operador `instanceof` neste exercício?

4. O que são referências cruzadas entre objetos?

5. Qual a vantagem de organizar cada classe em um arquivo separado?

6. Qual a diferença entre herança e composição?

7. Em qual relacionamento do exercício foi utilizada a composição?

8. Explique como os relacionamentos implementados tornam o sistema mais próximo da realidade.

---

## 📌 Critérios de Avaliação

| Critério | Pontuação |
|----------|:---------:|
| Encapsulamento | 1,0 |
| Relacionamento 1:N | 1,5 |
| Relacionamento 1:1 | 1,5 |
| Relacionamento N:N | 1,5 |
| Validação com `instanceof` | 1,0 |
| Referências cruzadas | 1,0 |
| Organização do código | 1,0 |
| Integração da aplicação | 1,5 |

**Total: 10,0 pontos**

---

## 💡 Dicas

- Desenvolva uma classe por vez.
- Teste cada relacionamento antes de implementar o próximo.
- Utilize apenas os métodos públicos para acessar os atributos dos objetos.
- Evite acessar atributos privados diretamente.
- Mantenha uma organização semelhante à utilizada ao longo deste capítulo.
- Sempre valide os objetos recebidos utilizando o operador `instanceof`.
- Teste frequentemente sua aplicação utilizando o arquivo `usaClinica.js`.

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

# 📚 Exercício de Fixação 09 – Explorando a API ViaCEP e Evoluindo a Classe `Endereco`

## 🎯 Contexto do Problema

No capítulo anterior, a classe `Endereco` foi utilizada para consultar a API ViaCEP por meio do método assíncrono `setCep()`.

A implementação atual utiliza apenas alguns dos dados retornados pela API:

- CEP;
- logradouro;
- bairro;
- cidade;
- UF.

Entretanto, a resposta da API ViaCEP disponibiliza outras informações que também podem ser úteis em uma aplicação.

Nesta atividade, você deverá consultar diretamente a API pelo navegador, analisar os dados retornados e evoluir a classe `Endereco.mjs` para armazenar novos atributos.

---

# 📖 Conteúdos Trabalhados

- Programação assíncrona
- `async`
- `await`
- `fetch()`
- APIs externas
- JSON
- Objetos JavaScript
- Encapsulamento
- Atributos privados
- Getters
- Tratamento de exceções
- Evolução de classes

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade, você deverá ser capaz de:

- consultar uma API por meio de uma URL;
- analisar os dados retornados em formato JSON;
- identificar propriedades disponíveis em uma resposta de API;
- relacionar propriedades externas com atributos de uma classe;
- ampliar uma classe sem comprometer o encapsulamento;
- adicionar novos atributos privados;
- implementar novos métodos `get`;
- adaptar um método assíncrono já existente;
- manter o tratamento de exceções durante a evolução do código.

---

# 🧩 Parte 1 – Consultando a API ViaCEP no Navegador

Abra o navegador e acesse diretamente a API ViaCEP utilizando um CEP válido.

Utilize o seguinte padrão de URL:

```text
https://viacep.com.br/ws/CEP/json/
```

Substitua `CEP` por um CEP válido.

Exemplo:

```text
https://viacep.com.br/ws/72015565/json/
```

Observe atentamente o conteúdo retornado pela API.

---

# 🔎 Parte 2 – Identificando os Atributos Disponíveis

Compare a resposta retornada pelo ViaCEP com os atributos já existentes na classe `Endereco`.

Atualmente, a classe utiliza:

```text
cep
logradouro
bairro
localidade
uf
```

Identifique **outros atributos disponíveis na resposta da API** que ainda não estão sendo utilizados pela classe.

Registre pelo menos **três novos atributos** encontrados.

Preencha a tabela:

| Atributo retornado pela API | Será usado na classe? | Nome do atributo na classe |
|-----------------------------|-----------------------|----------------------------|
|                             |                       |                            |
|                             |                       |                            |
|                             |                       |                            |

---

# 🧩 Parte 3 – Evoluindo a Classe `Endereco`

Após identificar os novos dados, altere a classe:

```text
Endereco.mjs
```

Adicione os novos atributos como **atributos privados**.

Exemplo de estrutura:

```javascript
#novoAtributo;
```

Os novos atributos deverão seguir o mesmo padrão de encapsulamento utilizado na classe.

---

# 🧩 Parte 4 – Adaptando o Método `setCep()`

Atualize o método:

```javascript
async setCep(cep)
```

para armazenar também os novos dados encontrados na resposta do ViaCEP.

A atribuição deverá seguir o mesmo padrão já utilizado:

```javascript
this.#cep = dados.cep;
this.#logradouro = dados.logradouro;
```

Acrescente as atribuições relativas aos novos atributos escolhidos.

---

# 🧩 Parte 5 – Criando os Novos Getters

Para cada novo atributo adicionado à classe, crie um método `get`.

Exemplo:

```javascript
getNovoAtributo() {
    return this.#novoAtributo;
}
```

Não permita acesso direto aos atributos privados.

---

# 🧪 Parte 6 – Atualizando `usaEndereco.mjs`

Atualize o arquivo:

```text
usaEndereco.mjs
```

para exibir também os novos dados adicionados à classe.

Utilize:

```javascript
console.log()
```

e os novos métodos `get`.

O resultado deve continuar sendo exibido somente quando a consulta for concluída com sucesso.

---

# 🧪 Parte 7 – Testando o Tratamento de Exceções

Realize pelo menos dois testes:

1. consulte um CEP válido;
2. consulte um CEP inválido ou inexistente.

Verifique se:

- os novos atributos são preenchidos corretamente no caso válido;
- o tratamento de exceções continua funcionando;
- a aplicação não tenta acessar os dados quando ocorrer erro.

---

# ⭐ Desafio Extra 1

Escolha um dos atributos retornados pelo ViaCEP que possa eventualmente vir vazio.

Adapte a apresentação no `console.log()` para exibir uma mensagem alternativa quando esse valor não estiver disponível.

Exemplo:

```text
Complemento: não informado
```

---

# ⭐ Desafio Extra 2

Crie um método chamado:

```javascript
mostrarEnderecoCompleto()
```

na classe `Endereco`.

Esse método deverá retornar uma string contendo os principais dados do endereço já organizados para apresentação.

A montagem da string deverá utilizar os atributos encapsulados da própria classe.

---

# 📌 Questões Teóricas

1. Qual a vantagem de consultar diretamente a API antes de modificar a classe?

2. Por que os novos dados devem ser armazenados em atributos privados?

3. Qual a finalidade dos métodos `get` adicionados à classe?

4. Por que não devemos acessar diretamente os atributos retornados pela API fora de `setCep()`?

5. Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

6. Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

7. O que aconteceria se a API adicionasse novos campos no futuro?

8. Por que o tratamento com `try/catch` deve continuar funcionando mesmo após a inclusão de novos atributos?

---

# 📌 Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Consulta e análise da resposta da API | 1,0 |
| Identificação de novos atributos | 1,5 |
| Inclusão de atributos privados | 1,5 |
| Adaptação correta de `setCep()` | 2,0 |
| Implementação dos novos getters | 1,5 |
| Atualização de `usaEndereco.mjs` | 1,0 |
| Tratamento de exceções preservado | 0,5 |
| Questões teóricas | 1,0 |

**Total: 10,0 pontos**

---

# 💡 Dicas

- Consulte primeiro a API antes de alterar qualquer código.
- Compare cuidadosamente os nomes das propriedades retornadas.
- Não copie todos os campos sem analisar sua utilidade.
- Mantenha os novos atributos privados utilizando `#`.
- Atualize `setCep()` sem remover as validações já existentes.
- Preserve o uso de `async`, `await`, `throw`, `try` e `catch`.
- Teste o código após adicionar cada novo atributo.

# 📚 Exercício Integrador 01 -- Sistema Acadêmico

## 🎯 Contexto do Problema

Uma instituição de ensino está desenvolvendo um sistema acadêmico para
gerenciar o cadastro de pessoas, alunos e professores.

Até este momento foram estudados conceitos de programação estruturada,
modularização e programação orientada a objetos. Nesta atividade, você
deverá integrar todos esses conhecimentos em um único projeto.

O sistema deverá validar as informações antes de armazená-las e
reutilizar funções de uma biblioteca JavaScript sempre que possível.

------------------------------------------------------------------------

# 📖 Conteúdos Trabalhados

-   Variáveis e funções
-   Módulos (`require` / `module.exports`)
-   Classes e objetos
-   Construtores
-   Encapsulamento
-   Getters e Setters
-   Herança
-   Sobrescrita de métodos
-   Operadores de comparação
-   Operadores lógicos
-   Reutilização de código

------------------------------------------------------------------------

# 🎯 Objetivos de Aprendizagem

-   Organizar um projeto em módulos;
-   Reutilizar funções por meio de bibliotecas;
-   Implementar classes e herança;
-   Aplicar encapsulamento corretamente;
-   Utilizar validações em métodos `set`;
-   Empregar operadores lógicos e de comparação.

------------------------------------------------------------------------

# 📁 Estrutura Esperada do Projeto

``` text
projeto/
│
├── biblioteca/
│   └── util.js
├── pessoas/
│   ├── Pessoa.js
│   ├── Aluno.js
│   └── Professor.js
└── main.js
```

------------------------------------------------------------------------

# 🧩 Parte 1 -- Biblioteca de Validação

Crie o arquivo `util.js` contendo as funções:

-   `validarEmail(email)`
-   `validarMatricula(matricula)`
-   `validarCPF(cpf)`

Cada função deverá retornar apenas `true` ou `false`.

------------------------------------------------------------------------

# 🧩 Parte 2 -- Classe Pessoa

Implemente a classe `Pessoa` com os atributos privados `#nome` e
`#email`.

Implemente os métodos:

-   `setNome()`
-   `getNome()`
-   `setEmail()`
-   `getEmail()`

O método `setEmail()` **deverá obrigatoriamente utilizar a função de
validação da biblioteca**.

Exemplo:

``` javascript
const util = require('../biblioteca/util');

setEmail(email){
    if(util.validarEmail(email)){
        this.#email = email;
        return true;
    }
    return false;
}
```

> A biblioteca é responsável apenas pela validação. O método
> `setEmail()` permanece responsável por alterar o atributo `#email`,
> preservando o encapsulamento.

------------------------------------------------------------------------

# 🧩 Parte 3 -- Classe Aluno

Herde de `Pessoa`.

Implemente `#matricula`, `setMatricula()` e `getMatricula()`.

Utilize a biblioteca para validar a matrícula.

------------------------------------------------------------------------

# 🧩 Parte 4 -- Classe Professor

Herde de `Pessoa`.

Implemente `#disciplina`, `setDisciplina()` e `getDisciplina()`.

Sobrescreva `setEmail()` aceitando apenas e-mails terminados em
`.edu.br`, reutilizando `super.setEmail(email)`.

------------------------------------------------------------------------

# 🧪 Parte 5 -- Arquivo de Testes

No arquivo `main.js`:

1.  Cadastre duas pessoas.
2.  Cadastre dois alunos.
3.  Cadastre dois professores.
4.  Utilize dados válidos e inválidos.
5.  Exiba um relatório final.

------------------------------------------------------------------------

# ⭐ Desafio Extra 1

Melhore `validarEmail()` para aceitar apenas e-mails contendo `@` e
terminados em `.com` ou `.edu.br`.

------------------------------------------------------------------------

# ⭐ Desafio Extra 2

Implemente a função `mostrarDados(objeto)` para exibir dados de Pessoa,
Aluno e Professor sem duplicar código.

------------------------------------------------------------------------

# 📌 Questões Teóricas

1.  Qual a diferença entre módulo e classe?
2.  Por que utilizar encapsulamento?
3.  Qual a vantagem de reutilizar funções em uma biblioteca?
4.  Para que serve `super`?
5.  Qual a diferença entre herança e sobrescrita?
6.  Por que a validação do e-mail deve ocorrer dentro de `setEmail()`
    utilizando a biblioteca?
7.  Em quais situações utilizar `&&` e `||`?

------------------------------------------------------------------------

# 📌 Critérios de Avaliação

  Critério                   Pontos
  ------------------------- --------
  - Biblioteca de validação     1,0
  - Classe Pessoa               1,5
  - Encapsulamento correto      1,5
  - Classe Aluno                1,5
  - Classe Professor            1,5
  - Sobrescrita                 1,0
  - Arquivo de testes           1,0
  - Questões teóricas           1,0

**Total: 10,0 pontos**

------------------------------------------------------------------------

# 💡 Dicas

-   Desenvolva uma classe por vez.
-   Teste cada método logo após implementá-lo.
-   Utilize `console.log()` para verificar os resultados.
-   Reutilize a biblioteca sempre que possível.
-   Preserve o encapsulamento: somente os métodos da classe devem
    alterar seus atributos privados.

# 📚 Exercício Integrador 02 – Pessoa Jurídica, Inscrição Estadual e ES Modules

## 🎯 Contexto do Problema

Uma empresa deseja desenvolver um pequeno sistema para organizar os dados de **Pessoas Jurídicas** e suas respectivas **Inscrições Estaduais**.

Nos conteúdos anteriores, foram estudados conceitos como classes, objetos, encapsulamento, herança, relacionamentos entre classes e modularização. Mais recentemente, foram apresentadas diferentes formas de representar objetos em JavaScript utilizando **classes**, **funções fábrica** e **objetos literais**, além do padrão de módulos **ESM (ECMAScript Modules)**.

Nesta atividade, você deverá integrar esses conhecimentos em um único projeto.

A classe `Pessoa` já foi desenvolvida anteriormente e deverá ser **reutilizada**. A partir dela, será criada a classe `PJ`, responsável por representar uma Pessoa Jurídica.

Em seguida, as estruturas responsáveis pela Inscrição Estadual deverão ser evoluídas para aceitar apenas objetos válidos da classe `PJ`.

---

# 📖 Conteúdos Trabalhados

* Classes e objetos
* Encapsulamento
* Getters e Setters
* Herança
* Relacionamentos entre objetos
* Validação utilizando `instanceof`
* Reutilização de código
* ES Modules (ESM)
* `import`
* `export`
* `export default`
* Exportações nomeadas
* Classes
* Funções Fábrica
* Closure
* Objetos Literais
* Classe nativa `Date`

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade, você deverá ser capaz de:

* reutilizar uma classe já existente;
* implementar herança entre classes;
* aplicar encapsulamento utilizando atributos privados;
* estabelecer relacionamentos entre objetos;
* validar objetos utilizando `instanceof`;
* organizar uma aplicação utilizando módulos;
* utilizar exportações padrão e nomeadas;
* importar diferentes recursos de um mesmo módulo;
* comparar classes, funções fábrica e objetos literais;
* integrar diferentes estruturas em uma única aplicação.

---

# 📁 Estrutura Esperada do Projeto

Organize sua solução conforme a estrutura abaixo:

```text
projeto/
│
├── pessoas/
│   ├── Pessoa.js
│   └── PJ.mjs
│
├── objetos/
│   └── IE.mjs
│
└── main.mjs
```

> A classe `Pessoa` já existe e deverá ser reutilizada. Caso seja necessário para compatibilidade com ESM, adapte apenas sua forma de exportação/importação, **sem alterar sua responsabilidade ou os métodos já implementados**.

---

# 🧩 Parte 1 – Classe `PJ`

Crie a classe:

```javascript
PJ
```

A classe deverá **herdar da classe `Pessoa`**.

Implemente os seguintes atributos privados:

```text
#cnpj
#razaoSocial
```

Implemente os métodos:

```javascript
setCNPJ()
getCNPJ()
setRazaoSocial()
getRazaoSocial()
```

Os métodos `set` deverão retornar:

```javascript
true
```

quando o valor for aceito, e:

```javascript
false
```

quando o valor informado for inválido.

A classe deverá ser exportada para utilização em outros módulos.

---

# 🧩 Parte 2 – Reutilizando a Classe `Pessoa`

A classe `PJ` deverá reutilizar os métodos herdados de `Pessoa`.

No arquivo de testes, um objeto `PJ` deverá utilizar, além de seus próprios métodos:

```javascript
setNome()
getNome()
setEmail()
getEmail()
```

Não duplique esses métodos dentro de `PJ`.

> O objetivo desta etapa é reforçar que a herança permite reutilizar comportamentos já implementados na superclasse.

---

# 🧩 Parte 3 – Evoluindo a Classe `IEclss`

No arquivo:

```text
IE.mjs
```

importe a classe `PJ`.

Em seguida, altere o método:

```javascript
setPJ(pj)
```

para aceitar **somente objetos da classe `PJ`**.

A validação deverá utilizar:

```javascript
instanceof
```

A estrutura esperada deverá seguir a seguinte lógica:

```javascript
if (pj instanceof PJ) {
    // realizar associação
}
```

O método deverá retornar `true` quando a associação for válida e `false` caso contrário.

O método:

```javascript
getPJ()
```

deverá continuar permitindo recuperar o objeto associado.

---

# 🧩 Parte 4 – Evoluindo a Função Fábrica `IEfunc()`

A função fábrica `IEfunc()` também possui uma referência:

```javascript
pj
```

Altere o método:

```javascript
setPJ(pj)
```

para validar se o objeto recebido pertence à classe `PJ`.

Utilize novamente:

```javascript
instanceof
```

A função fábrica deverá continuar protegendo seus dados internos por meio do escopo da função.

---

# 🧩 Parte 5 – Evoluindo o Objeto Literal `IEjson`

Realize a mesma alteração no objeto literal:

```javascript
IEjson
```

O método:

```javascript
setPJ(pj)
```

deverá aceitar somente objetos válidos da classe `PJ`.

Apesar do nome `IEjson`, lembre-se de que essa estrutura representa um **objeto literal JavaScript**, e não um documento JSON.

---

# 🧩 Parte 6 – Exportações e Importações

O arquivo `IE.mjs` deverá disponibilizar:

* a classe `IEclss`;
* a função fábrica `IEfunc()`;
* o objeto literal `IEjson`.

Utilize:

* uma **exportação padrão**;
* exportações **nomeadas**.

No arquivo `main.mjs`, importe as três estruturas utilizando uma única instrução.

Exemplo de organização:

```javascript
import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
```

Importe também a classe `PJ`.

---

# 🧪 Parte 7 – Arquivo de Testes

No arquivo:

```text
main.mjs
```

realize os seguintes testes:

1. crie dois objetos da classe `PJ`;
2. atribua nome, e-mail, CNPJ e razão social;
3. crie um objeto `Date`;
4. crie uma Inscrição Estadual utilizando `IEclss`;
5. crie outra Inscrição Estadual utilizando `IEfunc()`;
6. configure o objeto `IEjson`;
7. associe objetos `PJ` às três implementações de IE;
8. recupere os objetos relacionados utilizando `getPJ()`;
9. exiba os dados utilizando `console.log()`.

---

# 🧪 Parte 8 – Testando o `instanceof`

Além dos testes válidos, tente associar um objeto que **não seja uma instância de `PJ`**.

Por exemplo:

```javascript
const objetoInvalido = {
    nome: 'Empresa Inválida'
};
```

Tente utilizar esse objeto nos métodos:

```javascript
setPJ()
```

das três implementações.

O resultado esperado deverá ser:

```text
false
```

Depois associe um objeto verdadeiro da classe `PJ`.

O resultado esperado deverá ser:

```text
true
```

---

# 🧪 Parte 9 – Relatório Final

Utilize `console.log()` para apresentar um relatório contendo, no mínimo:

```text
=== Pessoa Jurídica ===

Nome:
E-mail:
CNPJ:
Razão Social:

=== Inscrição Estadual ===

Número:
Estado:
Data de Registro:
Pessoa Jurídica:
```

Repita a consulta utilizando:

* `IEclss`;
* `IEfunc()`;
* `IEjson`.

Para apresentar a data, utilize:

```javascript
toLocaleString('pt-BR')
```

---

# ⭐ Desafio Extra 1

Implemente uma validação no método:

```javascript
setCNPJ()
```

para aceitar apenas valores com uma quantidade de caracteres previamente definida por você.

O método deverá continuar retornando apenas:

```javascript
true
```

ou:

```javascript
false
```

---

# ⭐ Desafio Extra 2

Crie dois objetos diferentes da classe `PJ` e associe cada um a uma implementação diferente de Inscrição Estadual.

Depois, utilize:

```javascript
getPJ()
```

para recuperar o objeto relacionado e exibir sua razão social.

---

# ⭐⭐ Desafio Avançado

Crie uma função chamada:

```javascript
mostrarIE(ie)
```

Essa função deverá receber uma das estruturas de Inscrição Estadual e apresentar:

```text
Número
Estado
Data de Registro
Pessoa Jurídica relacionada
```

Teste a função utilizando:

```javascript
IEclss
IEfunc()
IEjson
```

Observe se é possível reutilizar a mesma função para as três implementações.

---

# 📌 Questões Teóricas

1. Qual a vantagem de fazer `PJ` herdar da classe `Pessoa`?

2. Por que não devemos copiar para `PJ` os métodos já implementados em `Pessoa`?

3. Qual a finalidade do operador `instanceof` no método `setPJ()`?

4. Qual a diferença entre:

```javascript
if (pj)
```

e:

```javascript
if (pj instanceof PJ)
```

5. Qual a diferença entre a classe `IEclss` e a função fábrica `IEfunc()`?

6. Como a função fábrica protege seus dados internos?

7. Qual a diferença entre o objeto literal `IEjson` e um documento JSON?

8. Qual a diferença entre exportação padrão e exportação nomeada?

9. Por que `IEclss` utiliza `new`, enquanto `IEfunc()` não utiliza?

10. Qual a vantagem de organizar as classes e estruturas em arquivos separados?

11. Como o relacionamento entre `IE` e `PJ` é representado no código?

12. Por que `instanceof Date` pode ser utilizado mesmo sem termos criado a classe `Date`?

---

# 📌 Critérios de Avaliação

| Critério                                | Pontos |
| --------------------------------------- | :----: |
| Classe `PJ` e herança de `Pessoa`       |   1,5  |
| Encapsulamento da classe `PJ`           |   1,0  |
| Reutilização dos métodos de `Pessoa`    |   1,0  |
| Validação com `instanceof PJ`           |   1,5  |
| Implementação das três estruturas de IE |   1,5  |
| Exportações e importações ESM           |   1,0  |
| Arquivo de testes e integração          |   1,5  |
| Questões teóricas                       |   1,0  |

**Total: 10,0 pontos**

---

# 💡 Dicas

* Reutilize a classe `Pessoa` já desenvolvida.
* Não duplique métodos herdados.
* Implemente e teste primeiro a classe `PJ`.
* Somente depois altere os métodos `setPJ()` das estruturas de IE.
* Utilize `instanceof` para impedir associações com objetos incompatíveis.
* Teste separadamente `IEclss`, `IEfunc()` e `IEjson`.
* Utilize `console.log()` para acompanhar cada etapa.
* Observe atentamente a diferença entre exportação padrão e exportação nomeada.
* Preserve o encapsulamento: os métodos devem ser responsáveis pela alteração dos dados internos.
