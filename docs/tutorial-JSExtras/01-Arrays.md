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
