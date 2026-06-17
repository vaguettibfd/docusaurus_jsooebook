# 📚 Exercício de Fixação – Visibilidade e Encapsulamento em JavaScript

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
