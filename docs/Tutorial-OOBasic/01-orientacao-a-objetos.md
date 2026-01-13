# Orientação a Objetos (Declaração e Uso)

Observe o seguinte código de exemplo relativo à declaração de classes e sua utilização em JavaScript.

---

## 💻 Código Completo  
**Arquivo:** `Pessoa.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// Arquivo criado dentro da pasta "objetos" do projeto
// não deve executar o arquivo diretamente com node

class Pessoa {

  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }

  imc() { // índice de massa corpórea
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }

}

module.exports = Pessoa;
```

---

## 📘 Comentários e Explicações

### Classe `Pessoa`
Declara uma classe responsável por representar uma pessoa com peso e altura.

### `constructor(peso, altura)`
Método especial executado automaticamente quando a classe é instanciada.

- Inicializa os atributos `peso` e `altura`
- Utiliza `this` para referenciar o objeto atual

### Método `imc()`
Calcula o Índice de Massa Corporal (IMC):

**Fórmula:**  
`peso ÷ (altura × altura)`

Retorna o valor calculado.

### `module.exports`
```javascript
module.exports = Pessoa;
```
Disponibiliza a classe para reutilização em outros arquivos.

---

## 💻 Código Completo  
**Arquivo:** `usaPessoa.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado usaPessoa.js
// Para executar utilize: node ./objetos/usaPessoa.js

const Pessoa = require('./Pessoa.js');

const joao = new Pessoa(80, 1.75);
console.log(joao.imc());

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;

console.log(pedro.imc());
```

---

## 📘 Comentários e Explicações

### Importação da classe
```javascript
const Pessoa = require('./Pessoa.js');
```
Importa a classe exportada anteriormente.

### Instanciação de objetos
- `new Pessoa(80, 1.75)` → cria o objeto `joao`
- `new Pessoa()` → cria o objeto `pedro`

### Uso de métodos
- `joao.imc()` → ≈ **26.12**
- `pedro.imc()` → **39.06**

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|--------|-----------|
| class | Estrutura para criação de objetos |
| constructor | Inicializa atributos da classe |
| this | Referência ao objeto atual |
| Método | Função associada a uma classe |
| module.exports | Exportação de classe |
| require() | Importação de módulo |
| new | Criação de instância (objeto) |
| Propriedades | Atributos do objeto |

---

## 💡 Dicas do Professor

- Classes iniciam com letra maiúscula (`Pessoa`)
- Objetos iniciam com letra minúscula (`joao`, `pedro`)
- Prefira encapsular comportamentos em métodos
- Evite acessar atributos diretamente sem validação em projetos maiores

---

## 🔗 Links Complementares

- https://youtu.be/Ah4b0Cj1c6E
