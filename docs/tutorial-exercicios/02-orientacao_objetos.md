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
