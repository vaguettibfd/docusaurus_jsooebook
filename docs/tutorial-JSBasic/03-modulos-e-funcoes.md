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
