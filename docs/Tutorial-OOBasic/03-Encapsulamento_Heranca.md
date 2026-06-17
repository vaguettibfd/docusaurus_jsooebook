
# 📘 Orientação a Objetos – Encapsulamento (+ Condicional) e Herança (Declaração e Uso)

## Introdução

Observe o seguinte código de exemplo relativo à declaração da classe **Pessoa**, definição da visibilidade de atributos e métodos, bem como as condicionais implementadas para prover o devido encapsulamento dos atributos.

---

# 💻 Código Completo (arquivo Pessoa.js)

```javascript
// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais

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

---

# 📘 Comentários e Explicações Linha a Linha

## Linha 01

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais
```

Comentário informativo que descreve o nome, local e propósito do código: demonstrar encapsulamento com validação condicional.

---

## Linha 02

```javascript
class Pessoa {
```

Declara a classe `Pessoa`, estrutura que representa um objeto com dados privados e métodos públicos para manipulá-los.

---

## Linhas 03–04

```javascript
#nome;
#email;
```

Declara dois atributos privados utilizando `#`.

Esses atributos:

* só podem ser acessados internamente à classe;
* implementam o conceito de encapsulamento;
* evitam modificações diretas por código externo.

---

## Linhas 05–09

```javascript
setNome(nome) {
  if (nome) {
    this.#nome = nome;
    return true;
  } else {
    return false;
  }
}
```

Método responsável por atribuir valor ao atributo privado `#nome`.

### Funcionamento

* verifica se o parâmetro possui valor;
* caso positivo, realiza a atribuição;
* retorna `true`;
* caso contrário, retorna `false`.

Este é um exemplo clássico de encapsulamento com validação.

---

## Linhas 10–11

```javascript
getNome() {
  return this.#nome;
}
```

Método responsável por retornar o valor armazenado no atributo privado `#nome`.

---

## Linhas 12–16

```javascript
setEmail(email) {
  if (email) {
    this.#email = email;
    return true;
  } else {
    return false;
  }
}
```

Método setter do atributo `#email`.

A lógica é semelhante ao método `setNome()`:

* valida o valor recebido;
* armazena apenas valores válidos;
* retorna um indicador de sucesso ou falha.

---

## Linhas 17–18

```javascript
getEmail() {
  return this.#email;
}
```

Retorna o conteúdo do atributo privado `#email`.

---

## Linha 19

```javascript
module.exports = Pessoa;
```

Exporta a classe para que ela possa ser reutilizada em outros arquivos JavaScript através do comando `require()`.

---

# 📌 Conceitos-Chave Envolvidos

| Conceito       | Explicação                                             |
| -------------- | ------------------------------------------------------ |
| class          | Define uma estrutura de objeto com atributos e métodos |
| #atributo      | Atributo privado protegido contra acesso externo       |
| set...()       | Método responsável por atribuir valor com validação    |
| get...()       | Método responsável por retornar um valor encapsulado   |
| if/else        | Estrutura condicional utilizada para validação         |
| Encapsulamento | Protege dados internos da classe                       |
| module.exports | Exporta módulos para reutilização                      |

---

# 💡 Dicas do Professor

* Sempre utilize métodos `set` e `get` quando precisar controlar acesso aos dados.
* Evite expor atributos diretamente.
* Validações simples podem impedir muitos erros futuros.

---

# 🔗 Links Complementares

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/Private_class_fields

---

# Herança e Encapsulamento – Classe PF

Observe agora a implementação da classe `PF`, responsável por representar uma Pessoa Física.

Ela herda atributos e comportamentos da classe `Pessoa`.

---

# 💻 Código Completo (arquivo PF.js)

```javascript
// 01: Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais

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

---

# 📘 Comentários e Explicações Linha a Linha

## Linha 02

```javascript
const Pessoa = require('./Pessoa');
```

Importa a classe base `Pessoa`.

Essa importação permite utilizar herança.

---

## Linha 03

```javascript
class PF extends Pessoa {
```

Define a classe `PF`.

A palavra-chave `extends` indica que `PF` herda métodos e comportamentos da classe `Pessoa`.

---

## Linha 04

```javascript
#cpf;
```

Atributo privado exclusivo da classe `PF`.

---

## Linhas 05–09

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

Setter com validação do CPF.

Somente valores válidos são armazenados.

---

## Linhas 10–11

```javascript
getCPF() {
  return this.#cpf;
}
```

Retorna o valor armazenado no atributo privado.

---

## Linha 12

```javascript
module.exports = PF;
```

Exporta a classe para reutilização.

---

# 📌 Conceitos-Chave Envolvidos

| Conceito       | Explicação                                 |
| -------------- | ------------------------------------------ |
| extends        | Permite herança entre classes              |
| Herança        | Reutilização de atributos e comportamentos |
| #atributo      | Campo privado                              |
| Encapsulamento | Proteção dos dados internos                |
| Setter         | Método de atribuição                       |
| Getter         | Método de consulta                         |
| module.exports | Exportação de módulos                      |

---

# 💡 Dicas do Professor

A herança deve ser utilizada quando existe uma relação do tipo:

> PF é uma Pessoa

Ou seja, uma Pessoa Física possui todas as características de uma Pessoa comum, além de características próprias.

---

# Utilização das Classes – Arquivo usaPessoas.js

Após criar as classes, podemos instanciá-las e testar seu comportamento.

Para executar:

```bash
node ./objetos/usaPessoas.js
```

---

# 💻 Código Completo (arquivo usaPessoas.js)

```javascript
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

---

# 📘 Comentários e Explicações

## Instanciação da Classe Pessoa

```javascript
const x = new Pessoa();
```

Cria um objeto baseado na classe `Pessoa`.

---

## Teste do Método setNome()

```javascript
resposta = x.setNome('');
```

O valor vazio faz com que o método retorne:

```javascript
false
```

Demonstrando a validação implementada.

---

## Teste do Método setEmail()

```javascript
resposta = x.setEmail('vaguetti@gmail.com');
```

Neste caso a validação é aprovada e o valor é armazenado.

---

## Instanciação da Classe PF

```javascript
const y = new PF();
```

Cria um objeto da classe filha.

Esse objeto possui:

* métodos próprios (`setCPF`, `getCPF`);
* métodos herdados (`setNome`, `getNome`, `setEmail`, `getEmail`).

---

## Teste de Herança

```javascript
y.setNome('Pedro');
```

Mesmo não existindo na classe `PF`, o método funciona porque foi herdado da classe `Pessoa`.

---

## Teste do Método setCPF()

```javascript
y.setCPF('123456789-10');
```

Armazena corretamente o CPF no atributo privado da classe filha.

---

# 📌 Conceitos-Chave Envolvidos

| Conceito        | Explicação                          |
| --------------- | ----------------------------------- |
| Instanciação    | Criação de objetos com new          |
| Encapsulamento  | Proteção dos atributos internos     |
| Herança         | Reaproveitamento de código          |
| if/else         | Validação de dados                  |
| Getter e Setter | Controle de leitura e escrita       |
| require()       | Importação de módulos               |
| console.log()   | Exibição de informações no terminal |

---

# 💡 Resumo Final

Nesta apostila foram apresentados os conceitos fundamentais da Programação Orientada a Objetos em JavaScript:

* Encapsulamento;
* Atributos privados;
* Métodos Getters e Setters;
* Estruturas condicionais para validação;
* Herança com `extends`;
* Reutilização de código;
* Exportação e importação de módulos;
* Instanciação e utilização de objetos.

Esses conceitos servem como base para a construção de sistemas mais complexos utilizando JavaScript orientado a objetos.


---

## 📚 Exercícios de Fixação

- https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/encapsulamento_condicionais_heranca