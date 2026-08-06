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