# 📘 Orientação a Objetos — `toJSON()`, DAO e Armazenamento Local

## Introdução

Neste capítulo será apresentada uma evolução do exemplo de **Pessoa Jurídica (PJ)** desenvolvido anteriormente.

A classe `PJ` passa a possuir uma associação com uma **Inscrição Estadual (IE)**. Em seguida, será criada uma camada específica para transformar os dados do objeto em uma estrutura adequada à serialização em JSON e armazená-los utilizando uma simulação de `localStorage`.

O exemplo permite integrar diferentes conceitos já estudados:

- herança;
- encapsulamento;
- sobrescrita de métodos;
- relacionamentos entre objetos;
- validação com `instanceof`;
- referências cruzadas;
- ES Modules (ESM);
- JSON;
- serialização e desserialização;
- padrão DAO (*Data Access Object*);
- armazenamento chave-valor.

---

# Relacionamento entre `PJ` e `IE`

Uma Pessoa Jurídica pode possuir uma Inscrição Estadual. Para representar essa situação, será estabelecido um relacionamento **1:1** entre as classes `PJ` e `IE`.

```text
Pessoa
   ▲
   │ herança
   │
  PJ ───────── IE
      relação
        1:1
```

A classe `PJ` manterá uma referência para um objeto `IE`. A associação será validada utilizando `instanceof`.

Além disso, será criada uma **referência cruzada**, permitindo que o objeto `IE` também mantenha uma referência para a `PJ` associada.

---

## Classe `PJ`

A classe `PJ` continua sendo uma especialização da classe `Pessoa`.

Além do atributo `#cnpj`, já estudado anteriormente, será acrescentado o atributo privado `#ie`, responsável por armazenar a Inscrição Estadual associada.

### 💻 Código Completo

**Arquivo:** `/pessoas/PJ.js`

```javascript
const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');

class PJ extends Pessoa {

    #cnpj;
    #ie;

    setCNPJ(cnpj) {
        if (cnpj) {
            if (cnpj.length < 18) {
                return false;
            }

            this.#cnpj = cnpj;
            return true;
        } else {
            return false;
        }
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setEmail(email) {
        if (email !== '') {
            if (email.includes('@')) {
                super.setEmail(email);
                return true;
            }
        } else {
            return false;
        }
    }

    setIE(ie) {
        if (ie instanceof IE) {
            this.#ie = ie;
            ie.setPJ(this);
            return true;
        } else {
            return false;
        }
    }

    getIE() {
        return this.#ie;
    }
}

module.exports = PJ;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–02 — Importações**

```javascript
const Pessoa = require('./Pessoa');
const IE = require('./IE/IEclss');
```

Importam as classes necessárias para a implementação de `PJ`.

`Pessoa` será utilizada como **superclasse**, enquanto `IE` será utilizada para estabelecer o relacionamento com a Inscrição Estadual.

---

#### **Linhas 04–07 — Herança e atributos privados**

```javascript
class PJ extends Pessoa {

    #cnpj;
    #ie;
```

Declara a classe `PJ` como uma especialização de `Pessoa`.

Os atributos privados armazenam:

- `#cnpj`: o CNPJ da Pessoa Jurídica;
- `#ie`: a referência para o objeto de Inscrição Estadual.

---

#### **Linhas 09–22 — Método `setCNPJ()`**

```javascript
setCNPJ(cnpj) {
    if (cnpj) {
        if (cnpj.length < 18) {
            return false;
        }

        this.#cnpj = cnpj;
        return true;
    } else {
        return false;
    }
}
```

O método realiza uma validação antes de armazenar o CNPJ.

Primeiro, verifica se algum valor foi informado. Em seguida, utiliza o operador de comparação `<` para rejeitar valores com menos de 18 caracteres.

Caso as validações sejam atendidas, o valor é armazenado em `#cnpj` e o método retorna `true`.

> A verificação de tamanho utilizada neste exemplo é didática e não corresponde a uma validação completa de CNPJ.

---

#### **Linhas 24–26 — Método `getCNPJ()`**

```javascript
getCNPJ() {
    return this.#cnpj;
}
```

Retorna o CNPJ armazenado no atributo privado.

---

#### **Linhas 28–37 — Sobrescrita de `setEmail()`**

```javascript
setEmail(email) {
    if (email !== '') {
        if (email.includes('@')) {
            super.setEmail(email);
            return true;
        }
    } else {
        return false;
    }
}
```

O método `setEmail()` já existe na superclasse `Pessoa`. Ao declará-lo novamente em `PJ`, ocorre uma **sobrescrita de método**.

A implementação acrescenta uma validação específica:

- o valor não pode ser uma string vazia;
- o e-mail deve conter o caractere `@`.

Quando as condições são atendidas, `super.setEmail(email)` reutiliza a implementação existente na superclasse.

---

#### **Linhas 39–48 — Método `setIE()`**

```javascript
setIE(ie) {
    if (ie instanceof IE) {
        this.#ie = ie;
        ie.setPJ(this);
        return true;
    } else {
        return false;
    }
}
```

Estabelece o relacionamento **1:1** entre `PJ` e `IE`.

O operador `instanceof` garante que somente objetos da classe `IE` sejam associados.

Após a validação:

- `this.#ie = ie` armazena a inscrição estadual na Pessoa Jurídica;
- `ie.setPJ(this)` cria a referência cruzada, fazendo com que a inscrição também conheça a Pessoa Jurídica associada.

---

#### **Linhas 50–52 — Método `getIE()`**

```javascript
getIE() {
    return this.#ie;
}
```

Retorna o objeto `IE` associado à Pessoa Jurídica.

---

#### **Linha 55 — Exportação**

```javascript
module.exports = PJ;
```

Exporta a classe utilizando **CommonJS**, permitindo sua utilização em outros módulos.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Aplicação |
|---|---|
| Herança | `class PJ extends Pessoa` |
| Encapsulamento | Uso dos atributos privados `#cnpj` e `#ie` |
| Sobrescrita | Redefinição de `setEmail()` |
| `super` | Reutilização de `Pessoa.setEmail()` |
| `instanceof` | Validação do objeto `IE` |
| Relacionamento 1:1 | Associação entre `PJ` e `IE` |
| Referência cruzada | `ie.setPJ(this)` |
| CommonJS | `require()` e `module.exports` |

---

## 💡 Dicas do Professor

> **`instanceof` valida o tipo do objeto antes da associação.**
>
> Essa estratégia reduz a possibilidade de relacionar objetos incompatíveis.

> **Uma referência cruzada permite navegar nos dois sentidos.**
>
> A partir de `PJ`, podemos recuperar a inscrição estadual; a partir de `IE`, podemos recuperar a Pessoa Jurídica associada.

---

# Classe `IE`

A classe `IE` representa uma Inscrição Estadual e mantém informações como número, estado e data de registro.

Além desses dados, o atributo `#pj` mantém a referência para a Pessoa Jurídica associada.

### 💻 Código Completo

**Arquivo:** `/pessoas/IE/IEclss.js`

```javascript
class IE {

    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }
}

module.exports = IE;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–06 — Classe e atributos privados**

```javascript
class IE {

    #numero;
    #estado;
    #dataRegistro;
    #pj;
```

Declara a classe `IE` e seus quatro atributos privados.

`#pj` é responsável por manter a referência para a Pessoa Jurídica relacionada.

---

#### **Linhas 08–16 — Métodos `setNumero()` e `getNumero()`**

```javascript
setNumero(numero) {
    if (numero) {
        this.#numero = numero;
        return true;
    } else {
        return false;
    }
}

getNumero() {
    return this.#numero;
}
```

Permitem armazenar e recuperar o número da Inscrição Estadual.

---

#### **Linhas 20–31 — Métodos `setEstado()` e `getEstado()`**

```javascript
setEstado(estado) {
    if (estado) {
        this.#estado = estado;
        return true;
    } else {
        return false;
    }
}

getEstado() {
    return this.#estado;
}
```

Permitem armazenar e recuperar o estado associado à inscrição.

---

#### **Linhas 33–44 — Data de registro**

```javascript
setDataRegistro(dataRegistro) {
    if (dataRegistro instanceof Date) {
        this.#dataRegistro = dataRegistro;
        return true;
    } else {
        return false;
    }
}

getDataRegistro() {
    return this.#dataRegistro;
}
```

O método `setDataRegistro()` utiliza `instanceof Date` para aceitar somente objetos da classe nativa `Date`.

---

#### **Linhas 46–57 — Relacionamento com `PJ`**

```javascript
setPJ(pj) {
    if (pj) {
        this.#pj = pj;
        return true;
    } else {
        return false;
    }
}

getPJ() {
    return this.#pj;
}
```

Mantém a referência para a Pessoa Jurídica associada.

No fluxo utilizado neste capítulo, essa referência é preenchida automaticamente por `PJ.setIE()`.

---

#### **Linha 60 — Exportação**

```javascript
module.exports = IE;
```

Exporta a classe `IE` utilizando CommonJS.

---

# Simulando `localStorage` no Node.js

Nos navegadores, `localStorage` é uma API utilizada para armazenar pares **chave–valor** localmente.

Em um ambiente Node.js puro, essa API não está disponível. Para permitir a experimentação dos conceitos de armazenamento, será utilizado um objeto que simula parte de seu comportamento.

> A implementação apresentada é apenas uma **simulação em memória**. Os dados são perdidos quando a execução do programa termina.

---

## 💻 Código Completo

**Arquivo:** `/pessoas/DAOs/localStorage.mjs`

```javascript
export const localStorage = {
    store: {},

    setItem(key, value) {
        this.store[key] = value;
    },

    getItem(key) {
        return this.store[key] || null;
    },

    removeItem(key) {
        delete this.store[key];
    },

    clear() {
        this.store = {};
    }
};
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–02 — Objeto e armazenamento interno**

```javascript
export const localStorage = {
    store: {},
```

Cria e exporta um objeto chamado `localStorage`.

A propriedade `store` funciona como o armazenamento interno da simulação.

---

### **Linhas 04–06 — Método `setItem()`**

```javascript
setItem(key, value) {
    this.store[key] = value;
}
```

Armazena um valor utilizando uma chave.

Por exemplo:

```javascript
localStorage.setItem('nome', 'Pedro');
```

---

### **Linhas 08–10 — Método `getItem()`**

```javascript
getItem(key) {
    return this.store[key] || null;
}
```

Recupera o valor associado à chave informada.

Caso a chave não exista, retorna `null`.

---

### **Linhas 12–14 — Método `removeItem()`**

```javascript
removeItem(key) {
    delete this.store[key];
}
```

Remove uma chave e o valor associado a ela.

---

### **Linhas 16–18 — Método `clear()`**

```javascript
clear() {
    this.store = {};
}
```

Remove todos os valores armazenados, substituindo `store` por um novo objeto vazio.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|---|---|
| Chave–valor | Cada informação é armazenada utilizando uma chave |
| Objeto literal | A simulação é implementada diretamente com `{ }` |
| `this` | Permite acessar `store` a partir dos métodos |
| `delete` | Remove uma propriedade do objeto |
| ES Modules | `export const` realiza uma exportação nomeada |
| Volatilidade | Os dados permanecem somente durante a execução |

---

# Padrão DAO — `PJDAO`

Até este momento, a classe `PJ` concentra as regras relacionadas à Pessoa Jurídica.

Entretanto, transformar o objeto para um formato adequado ao armazenamento e controlar sua persistência são responsabilidades diferentes.

Para separar essas responsabilidades, será utilizada uma classe baseada no padrão **DAO (*Data Access Object*)**.

```text
Objeto PJ
   │
   ▼
 PJDAO
   │
   ├── toJSON()
   │
   ├── saveJSON()
   │
   └── recoveryJSON()
   │
   ▼
localStorage
```

A DAO funcionará como uma camada intermediária entre o objeto de domínio e o mecanismo de armazenamento.

---

## 💻 Código Completo

**Arquivo:** `/pessoas/DAOs/PJDAO.mjs`

```javascript
import { localStorage } from './localStorage.mjs';
import PJ from '../PJ.js';

export default class PJDAO {

    #pj;

    constructor(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
        }
    }

    toJSON() {
        let fones = [];

        for (let fone of this.#pj.getTelefones()) {
            fones.push({
                ddd: fone.getDdd(),
                numero: fone.getNumero()
            });
        }

        return {
            nome: this.#pj.getNome(),
            email: this.#pj.getEmail(),
            cnpj: this.#pj.getCNPJ(),
            endereco: {
                logradouro: this.#pj.getEndereco().getLogradouro(),
                cep: this.#pj.getEndereco().getCep()
            },
            telefones: fones,
            ie: {
                numero: this.#pj.getIE().getNumero(),
                estado: this.#pj.getIE().getEstado(),
                dataRegistro: this.#pj.getIE().getDataRegistro()
            }
        };
    }

    saveJSON() {
        localStorage.setItem('pj', JSON.stringify(this.toJSON()));
    }

    recoveryJSON() {
        return JSON.parse(localStorage.getItem('pj'));
    }
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–02 — Importações**

```javascript
import { localStorage } from './localStorage.mjs';
import PJ from '../PJ.js';
```

A primeira instrução importa a simulação de `localStorage`.

A segunda importa a classe `PJ`, utilizada para validar o objeto recebido pela DAO.

Observe que `localStorage` é uma **exportação nomeada**, enquanto `PJ` é importada como exportação padrão na interoperabilidade utilizada pelo ambiente.

---

### **Linhas 04–11 — Classe, atributo e construtor**

```javascript
export default class PJDAO {

    #pj;

    constructor(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
        }
    }
```

Declara a classe `PJDAO` como exportação padrão.

O atributo `#pj` mantém a instância que será manipulada pela DAO.

O construtor utiliza `instanceof` para garantir que somente objetos da classe `PJ` sejam armazenados.

---

### **Linhas 13–23 — Preparação dos telefones**

```javascript
toJSON() {
    let fones = [];

    for (let fone of this.#pj.getTelefones()) {
        fones.push({
            ddd: fone.getDdd(),
            numero: fone.getNumero()
        });
    }
```

O método `toJSON()` inicia criando um array vazio.

Em seguida, utiliza `for...of` para percorrer os objetos `Telefone` associados à Pessoa Jurídica.

Para cada telefone é criado um **objeto literal** contendo apenas os dados que deverão fazer parte da representação serializável.

Essa transformação é necessária porque os objetos da aplicação possuem métodos e atributos privados que não devem ser armazenados diretamente.

---

### **Linhas 25–39 — Construção da representação dos dados**

```javascript
return {
    nome: this.#pj.getNome(),
    email: this.#pj.getEmail(),
    cnpj: this.#pj.getCNPJ(),
    endereco: {
        logradouro: this.#pj.getEndereco().getLogradouro(),
        cep: this.#pj.getEndereco().getCep()
    },
    telefones: fones,
    ie: {
        numero: this.#pj.getIE().getNumero(),
        estado: this.#pj.getIE().getEstado(),
        dataRegistro: this.#pj.getIE().getDataRegistro()
    }
};
```

O método retorna um **objeto literal JavaScript** contendo os dados relevantes da Pessoa Jurídica e de seus objetos relacionados.

A estrutura possui objetos aninhados para representar:

- endereço;
- telefones;
- inscrição estadual.

É importante observar que `toJSON()` **não gera uma string JSON**. Ele prepara uma estrutura JavaScript adequada para ser posteriormente serializada.

---

### **Linhas 42–44 — Método `saveJSON()`**

```javascript
saveJSON() {
    localStorage.setItem('pj', JSON.stringify(this.toJSON()));
}
```

O método realiza duas operações.

Primeiro:

```javascript
this.toJSON()
```

gera o objeto literal contendo os dados.

Depois:

```javascript
JSON.stringify(...)
```

converte essa estrutura para uma **string no formato JSON**.

A string é armazenada utilizando a chave `'pj'`.

---

### **Linhas 46–48 — Método `recoveryJSON()`**

```javascript
recoveryJSON() {
    return JSON.parse(localStorage.getItem('pj'));
}
```

O processo inverso é realizado utilizando `JSON.parse()`.

Primeiro, `getItem('pj')` recupera a string armazenada. Depois, `JSON.parse()` converte a string novamente para uma estrutura JavaScript.

> O resultado de `JSON.parse()` contém os **dados**, mas não recria automaticamente uma instância da classe `PJ`. Métodos, atributos privados e protótipo da classe não são reconstruídos pela desserialização.

---

## Objeto JavaScript × String JSON

Essa distinção é fundamental.

```javascript
const dados = pjdao.toJSON();
```

Nesse caso, `dados` é um **objeto JavaScript**.

Já:

```javascript
const texto = JSON.stringify(dados);
```

produz uma **string JSON**.

O processo pode ser representado assim:

```text
Objeto PJ
   │
   │ toJSON()
   ▼
Objeto Literal JavaScript
   │
   │ JSON.stringify()
   ▼
String JSON
   │
   │ armazenamento
   ▼
localStorage
   │
   │ JSON.parse()
   ▼
Objeto Literal JavaScript
```

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|---|---|
| DAO | Camada responsável pelo acesso e transformação dos dados |
| `toJSON()` | Prepara uma representação serializável do objeto |
| `JSON.stringify()` | Converte objeto/valor JavaScript em string JSON |
| `JSON.parse()` | Converte uma string JSON em valor JavaScript |
| Serialização | Transformação dos dados para um formato adequado ao armazenamento |
| Desserialização | Recuperação dos dados a partir da representação armazenada |
| `instanceof` | Valida a instância recebida pela DAO |
| Objeto aninhado | Permite representar estruturas relacionadas |
| `for...of` | Percorre os objetos `Telefone` |
| Separação de responsabilidades | A DAO trata armazenamento sem transferir essa responsabilidade para `PJ` |

---

## 💡 Dicas do Professor

> **`toJSON()` e `JSON.stringify()` não são a mesma operação.**
>
> Neste exemplo, `toJSON()` constrói um objeto literal. `JSON.stringify()` é que transforma esse objeto em texto JSON.

> **JSON armazena dados, não comportamento.**
>
> Métodos como `setNome()`, `getCNPJ()` e `setIE()` não fazem parte da string JSON.

> **A recuperação não recria automaticamente o objeto original.**
>
> Depois de `JSON.parse()`, temos uma estrutura contendo dados. Para obter novamente uma instância completa de `PJ`, seria necessário reconstruí-la.

---

# Utilizando a DAO — `usaPJDAO.mjs`

O arquivo `usaPJDAO.mjs` integra os objetos estudados e demonstra o fluxo completo:

```text
Criar PJ
   ↓
Criar Endereço
   ↓
Criar Telefones
   ↓
Criar IE
   ↓
Estabelecer Relacionamentos
   ↓
Criar PJDAO
   ↓
Converter para estrutura serializável
   ↓
Salvar
   ↓
Recuperar
```

---

## 💻 Código Completo

**Arquivo:** `usaPJDAO.mjs`

```javascript
import PJ from './pessoas/PJ.js';
import PJDAO from './pessoas/DAOs/PJDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';
import IE from './pessoas/IE/IEclss.js';

const pj = new PJ();

pj.setNome('Pedro');
pj.setEmail('pedro@ifb.edu.br');
pj.setCNPJ('1234567890/0001-99');

const end = new Endereco();

end.setLogradouro('QNM 40');
end.setCep('12345-678');

pj.setEndereco(end);

const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

pj.addTelefone(fone1);

const fone2 = new Telefone();

fone2.setDdd('62');
fone2.setNumero('99999-7777');

pj.addTelefone(fone2);

const ie = new IE();

ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

pj.setIE(ie);

const pjdao = new PJDAO(pj);

const dados = pjdao.toJSON();

pjdao.saveJSON();

console.log(dados);
console.log(JSON.stringify(dados));
console.log(pjdao.recoveryJSON());
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05 — Importações**

```javascript
import PJ from './pessoas/PJ.js';
import PJDAO from './pessoas/DAOs/PJDAO.mjs';
import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';
import IE from './pessoas/IE/IEclss.js';
```

Importam todas as estruturas necessárias para o exemplo.

---

### **Linhas 07–11 — Criação da Pessoa Jurídica**

```javascript
const pj = new PJ();

pj.setNome('Pedro');
pj.setEmail('pedro@ifb.edu.br');
pj.setCNPJ('1234567890/0001-99');
```

Cria a instância de `PJ` e configura seus dados básicos.

Os métodos herdados e sobrescritos continuam sendo utilizados normalmente.

---

### **Linhas 13–19 — Endereço**

```javascript
const end = new Endereco();

end.setLogradouro('QNM 40');
end.setCep('12345-678');

pj.setEndereco(end);
```

Cria um objeto `Endereco`, configura seus dados e o associa à Pessoa Jurídica.

---

### **Linhas 21–27 — Primeiro telefone**

```javascript
const fone1 = new Telefone();

fone1.setDdd('61');
fone1.setNumero('99999-8888');

pj.addTelefone(fone1);
```

Cria e configura o primeiro telefone e o adiciona à coleção de telefones da Pessoa Jurídica.

---

### **Linhas 29–35 — Segundo telefone**

```javascript
const fone2 = new Telefone();

fone2.setDdd('62');
fone2.setNumero('99999-7777');

pj.addTelefone(fone2);
```

Repete o processo para um segundo telefone, demonstrando que a Pessoa Jurídica pode manter uma coleção de objetos `Telefone`.

---

### **Linhas 37–43 — Inscrição Estadual**

```javascript
const ie = new IE();

ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

pj.setIE(ie);
```

Cria e configura a Inscrição Estadual.

`new Date()` cria um objeto com a data e hora atuais.

Ao executar `pj.setIE(ie)`, é estabelecido o relacionamento entre os dois objetos.

---

### **Linhas 45–51 — DAO, transformação e armazenamento**

```javascript
const pjdao = new PJDAO(pj);

const dados = pjdao.toJSON();

pjdao.saveJSON();
```

Cria a DAO associada à Pessoa Jurídica.

`toJSON()` gera a estrutura serializável e `saveJSON()` transforma essa estrutura em uma string JSON antes de armazená-la.

---

### **Linhas 53–55 — Visualização dos resultados**

```javascript
console.log(dados);
console.log(JSON.stringify(dados));
console.log(pjdao.recoveryJSON());
```

As três instruções permitem comparar:

1. o objeto literal produzido por `toJSON()`;
2. a string JSON produzida por `JSON.stringify()`;
3. os dados recuperados do armazenamento e convertidos novamente por `JSON.parse()`.

---

# Comparando as Estruturas

| Estrutura | Papel |
|---|---|
| `PJ` | Representa a Pessoa Jurídica e suas regras |
| `IE` | Representa a Inscrição Estadual |
| `localStorage` | Simula um mecanismo de armazenamento chave–valor |
| `PJDAO` | Faz a transformação e o acesso aos dados armazenados |
| `usaPJDAO.mjs` | Integra e demonstra o funcionamento das estruturas |

---

# Serialização e Persistência

É importante diferenciar os dois conceitos.

**Serialização** é a transformação dos dados para uma representação que possa ser armazenada ou transmitida.

Neste exemplo:

```javascript
JSON.stringify(this.toJSON())
```

realiza a serialização para JSON.

Já **persistência** refere-se à capacidade de manter dados para utilização posterior.

A simulação de `localStorage` apresentada neste capítulo mantém os dados somente **em memória**. Portanto, ela permite estudar a interface de armazenamento, mas não representa persistência permanente: ao encerrar a execução, os dados são perdidos.

Em um navegador, o `localStorage` real possui comportamento diferente e pode manter os dados entre sessões, conforme as regras do navegador e da origem da aplicação.

---

# 📌 Conceitos-Chave do Capítulo

| Conceito | Aplicação |
|---|---|
| Herança | `PJ` especializa `Pessoa` |
| Encapsulamento | Uso de atributos privados |
| Sobrescrita | `PJ.setEmail()` |
| Polimorfismo | Reutilização de `super.setEmail()` |
| Relacionamento 1:1 | `PJ` ↔ `IE` |
| Referência cruzada | Objetos relacionados mantêm referências entre si |
| `instanceof` | Validação de objetos |
| DAO | Separação da lógica de acesso aos dados |
| Objeto literal | Estrutura criada por `toJSON()` |
| JSON | Formato textual para representação de dados |
| `JSON.stringify()` | Serialização |
| `JSON.parse()` | Desserialização |
| `localStorage` | Armazenamento chave–valor no navegador |
| ES Modules | `import` e `export` |
| CommonJS | `require()` e `module.exports` |
| `for...of` | Percorre a coleção de telefones |

---

# 💡 Resumo Final

Neste capítulo, a classe `PJ` foi ampliada para se relacionar com uma Inscrição Estadual por meio de uma associação **1:1**. O relacionamento utiliza `instanceof` para validar o objeto e uma referência cruzada para permitir a navegação entre os objetos relacionados.

Em seguida, foi apresentada uma simulação de `localStorage`, permitindo compreender operações de armazenamento chave–valor mesmo em um ambiente Node.js.

A classe `PJDAO` introduziu o padrão **Data Access Object**, separando da classe de domínio as responsabilidades relacionadas à preparação, serialização, armazenamento e recuperação dos dados.

O método `toJSON()` foi utilizado para construir uma representação dos dados da Pessoa Jurídica por meio de objetos literais. `JSON.stringify()` transformou essa estrutura em uma string JSON, enquanto `JSON.parse()` realizou o processo inverso.

Por fim, o arquivo `usaPJDAO.mjs` integrou todas as estruturas, demonstrando o fluxo completo entre objetos da aplicação, DAO, serialização e armazenamento.

---

# 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender o relacionamento 1:1 entre objetos;
- implementar referências cruzadas;
- validar associações utilizando `instanceof`;
- compreender o papel de uma classe DAO;
- separar regras de domínio de responsabilidades de armazenamento;
- construir representações serializáveis de objetos;
- diferenciar objeto literal JavaScript de string JSON;
- utilizar `JSON.stringify()` para serialização;
- utilizar `JSON.parse()` para desserialização;
- compreender que JSON representa dados, e não métodos;
- compreender o funcionamento básico de `localStorage`;
- diferenciar armazenamento em memória de persistência;
- utilizar `for...of` para transformar coleções de objetos;
- integrar módulos CommonJS e ES Modules em exemplos de aplicação.
