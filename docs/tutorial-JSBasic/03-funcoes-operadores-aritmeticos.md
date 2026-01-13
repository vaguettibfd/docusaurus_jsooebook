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
