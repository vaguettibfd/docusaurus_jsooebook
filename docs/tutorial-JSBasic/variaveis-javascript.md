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
