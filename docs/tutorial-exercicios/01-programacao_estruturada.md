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

