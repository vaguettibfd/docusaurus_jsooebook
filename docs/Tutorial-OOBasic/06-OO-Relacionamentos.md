# 📘 Orientação a Objetos – Relacionamentos entre Classes (1:1, 1:N e N:N)

## Introdução

Nos capítulos anteriores foram apresentados os principais conceitos da Programação Orientada a Objetos utilizando JavaScript, como a criação de classes, encapsulamento, herança e sobrescrita de métodos. Esses conceitos permitiram modelar objetos capazes de representar entidades do mundo real e proteger seus dados por meio de atributos privados e métodos públicos.

Entretanto, aplicações reais são compostas por diversas classes que precisam interagir entre si. Um sistema de cadastro, por exemplo, normalmente relaciona pessoas, endereços, telefones, documentos e diversos outros objetos que colaboram para representar uma mesma informação.

Nesta apostila serão estudados os principais tipos de relacionamentos entre classes utilizando JavaScript. Serão apresentados exemplos de relacionamentos **1:1 (um para um)**, **1:N (um para muitos)** e **N:N (muitos para muitos)**, demonstrando como estabelecer associações entre objetos, manter referências cruzadas e organizar aplicações orientadas a objetos de forma modular.

Ao longo da apostila serão utilizadas as classes `Pessoa`, `Endereco`, `Telefone`, `PF` e `Titulo`, permitindo observar como esses relacionamentos são implementados na prática e como diferentes objetos podem compartilhar informações de forma consistente.

---

![Figura 1 – Diagrama UML dos relacionamentos entre as classes utilizadas nesta apostila.](./images/relacionamentos.png)


> **Figura 1 – Diagrama UML das classes utilizadas nesta apostila.**
>
> Antes de iniciar a implementação, observe como as classes se relacionam entre si ns Figura 1. Ao longo da leitura, cada um desses relacionamentos será implementado e explicado detalhadamente.

## 🎯 Objetivos de Aprendizagem

Ao concluir esta apostila, você deverá ser capaz de:

- compreender a finalidade dos relacionamentos entre classes em aplicações orientadas a objetos;
- identificar os relacionamentos **1:1**, **1:N** e **N:N**;
- implementar relacionamentos entre objetos utilizando atributos de referência;
- utilizar a composição para representar associações entre classes;
- criar referências cruzadas entre objetos relacionados;
- validar objetos utilizando o operador `instanceof`;
- compreender a importância da modularização na organização de projetos JavaScript.

---

## Relacionamentos entre Classes

Em sistemas orientados a objetos, uma classe raramente funciona de maneira isolada. Normalmente, diferentes objetos precisam colaborar entre si para representar situações do mundo real.

Considere, por exemplo, um sistema de cadastro de pessoas. Além das informações básicas, como nome e e-mail, uma pessoa pode possuir um endereço, um ou mais telefones e outros documentos associados. Em vez de armazenar todas essas informações em uma única classe, a Programação Orientada a Objetos recomenda que cada conjunto de informações seja representado por uma classe específica, estabelecendo relacionamentos entre elas.

Nesta apostila serão apresentados três tipos de relacionamentos:

- **Relacionamento 1:1 (um para um):** um objeto está associado a exatamente um objeto de outra classe.
- **Relacionamento 1:N (um para muitos):** um objeto pode estar associado a vários objetos de outra classe.
- **Relacionamento N:N (muitos para muitos):** vários objetos de uma classe podem se relacionar com vários objetos de outra classe.

Os exemplos apresentados foram construídos de forma incremental. Inicialmente será apresentada a classe `Pessoa`, que estabelece relacionamentos com as classes `Endereco` e `Telefone`. Em seguida, será introduzido um relacionamento **1:1** entre as classes `PF` e `Titulo`. Ao final da apostila, todas as classes serão integradas em um único exemplo, demonstrando o funcionamento conjunto dos relacionamentos estudados.

---

## Relacionamento entre as Classes `Pessoa`, `Endereco` e `Telefone`

A primeira etapa consiste em ampliar a classe `Pessoa`, apresentada nos capítulos anteriores, adicionando relacionamentos com as classes `Endereco` e `Telefone`.

Nesse modelo:

- uma **Pessoa** pode possuir um **Endereço** associado;
- uma **Pessoa** pode possuir vários **Telefones**;
- os objetos relacionados mantêm referências entre si, permitindo navegar pelos relacionamentos em ambos os sentidos.

A implementação também utiliza validação com o operador `instanceof`, garantindo que apenas objetos das classes esperadas possam ser associados.

A seguir é apresentada a implementação completa da classe `Pessoa`, responsável por estabelecer esses relacionamentos.

## Relacionamento 1:N e N:N – Classe `Pessoa`

A classe `Pessoa`, apresentada nos capítulos anteriores, será ampliada para permitir o relacionamento com objetos das classes `Endereco` e `Telefone`.

Nesse exemplo são implementados dois tipos de relacionamentos:

- **1:N (um para muitos):** uma pessoa pode estar associada a um endereço, enquanto um mesmo endereço pode estar relacionado a várias pessoas.
- **N:N (muitos para muitos):** uma pessoa pode possuir vários telefones e um mesmo telefone pode estar associado a diferentes pessoas.

Para garantir a consistência das associações, os métodos responsáveis pelos relacionamentos utilizam o operador `instanceof`, verificando se o objeto recebido pertence à classe esperada antes de estabelecer o vínculo.

### 💻 Código Completo

**Arquivo:** `Pessoa.js`

```javascript
// Arquivo Pessoa.js

const Telefone = require('./Telefone');
const Endereco = require('./Endereco');

class Pessoa {

    #nome;
    #email;

    // Classes relacionadas com Pessoa
    #endereco;
    #telefones = [];

    setEndereco(endereco) {
        if (endereco instanceof Endereco) {
            this.#endereco = endereco;
            endereco.addPessoa(this); // referência cruzada
            return true;
        } else {
            return false;
        }
    }

    getEndereco() {
        return this.#endereco;
    }

    addTelefone(telefone) {
        if (telefone instanceof Telefone) {
            this.#telefones.push(telefone);
            telefone.addPessoa(this); // referência cruzada
            return true;
        } else {
            return false;
        }
    }

    getTelefones() {
        return this.#telefones;
    }

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

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–03**

```javascript
const Telefone = require('./Telefone');
const Endereco = require('./Endereco');
```

Importa as classes `Telefone` e `Endereco`, que serão utilizadas para estabelecer os relacionamentos da classe `Pessoa`.

Essas importações permitem que objetos dessas classes sejam utilizados durante a execução do programa.

---

#### **Linhas 05–11**

```javascript
class Pessoa {

    #nome;
    #email;

    #endereco;
    #telefones = [];
```

Declara a classe `Pessoa` e seus atributos privados.

Os atributos `#nome` e `#email` armazenam os dados básicos da pessoa.

Os atributos `#endereco` e `#telefones` representam os relacionamentos com outras classes:

- `#endereco` armazena um objeto da classe `Endereco`;
- `#telefones` armazena um conjunto de objetos da classe `Telefone`.

---

#### **Linhas 13–21 — Método `setEndereco()`**

```javascript
setEndereco(endereco) {
    if (endereco instanceof Endereco) {
        this.#endereco = endereco;
        endereco.addPessoa(this);
        return true;
    } else {
        return false;
    }
}
```

Esse método estabelece o relacionamento entre uma pessoa e um endereço.

Antes de realizar a associação, o operador `instanceof` verifica se o objeto recebido pertence à classe `Endereco`.

Quando a validação é bem-sucedida:

- o endereço é armazenado em `#endereco`;
- é criada uma referência cruzada utilizando `endereco.addPessoa(this)`, permitindo que o objeto `Endereco` também conheça a pessoa associada.

Caso o objeto informado não seja válido, o método retorna `false`.

---

#### **Linhas 23–25 — Método `getEndereco()`**

```javascript
getEndereco() {
    return this.#endereco;
}
```

Retorna o objeto `Endereco` atualmente associado à pessoa.

---

#### **Linhas 27–35 — Método `addTelefone()`**

```javascript
addTelefone(telefone) {
    if (telefone instanceof Telefone) {
        this.#telefones.push(telefone);
        telefone.addPessoa(this);
        return true;
    } else {
        return false;
    }
}
```

Adiciona um objeto da classe `Telefone` ao array `#telefones`.

Assim como no método anterior, a associação somente é realizada quando o objeto informado pertence à classe esperada.

Além de armazenar o telefone, também é criada uma referência cruzada por meio de `telefone.addPessoa(this)`.

---

#### **Linhas 37–39 — Método `getTelefones()`**

```javascript
getTelefones() {
    return this.#telefones;
}
```

Retorna o array contendo todos os telefones associados à pessoa.

---

#### **Linhas 41–59 — Getters e Setters**

Os métodos:

- `setNome()`
- `getNome()`
- `setEmail()`
- `getEmail()`

seguem o mesmo padrão apresentado nas apostilas anteriores.

Os métodos `set` verificam se o valor recebido é válido antes de armazená-lo. Quando a validação é bem-sucedida retornam `true`; caso contrário retornam `false`.

Os métodos `get` retornam os valores armazenados nos respectivos atributos privados.

---

#### **Linha 61**

```javascript
module.exports = Pessoa;
```

Exporta a classe `Pessoa`, permitindo sua reutilização em outros arquivos do projeto.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Composição | A classe `Pessoa` possui objetos das classes `Endereco` e `Telefone`. |
| Relacionamento 1:N | Um objeto `Endereco` pode estar relacionado a várias pessoas. |
| Relacionamento N:N | Uma pessoa pode possuir vários telefones e um telefone pode estar associado a várias pessoas. |
| Referência cruzada | Objetos relacionados armazenam referências entre si para permitir navegação em ambos os sentidos. |
| `instanceof` | Verifica se um objeto pertence à classe esperada antes de estabelecer um relacionamento. |
| Encapsulamento | Os atributos permanecem privados e são acessados apenas por métodos públicos. |
| Modularização | A classe é exportada para reutilização em outros módulos do sistema. |

---

### 💡 Dicas do Professor

> **Relacione objetos, não dados.**
>
> Em aplicações orientadas a objetos, normalmente uma classe não armazena apenas valores primitivos. É comum que ela mantenha referências para outros objetos, representando os relacionamentos existentes no domínio do problema.

> **Sempre valide os objetos antes de criar um relacionamento.**
>
> O uso do operador `instanceof` evita que objetos incompatíveis sejam associados à classe, aumentando a segurança da aplicação.

> **Utilize referências cruzadas quando necessário.**
>
> Em alguns cenários, permitir que dois objetos conheçam um ao outro facilita a navegação pelos relacionamentos e torna a implementação mais próxima da modelagem representada em diagramas UML.

## Relacionamento 1:N – Classe `Endereco`

A classe `Endereco` representa as informações de localização associadas a uma ou mais pessoas.

Embora uma pessoa possua apenas um endereço em nosso exemplo, um mesmo endereço pode estar associado a diversas pessoas, caracterizando um relacionamento **1:N (um para muitos)**. Para representar essa associação, a classe mantém um array contendo todas as pessoas vinculadas a esse endereço.

### 💻 Código Completo

**Arquivo:** `Endereco.js`

```javascript
// Arquivo Endereco.js

class Endereco {

    #logradouro;
    #cep;
    #pessoas = [];

    addPessoa(pessoa) {
        if (pessoa) {
            this.#pessoas.push(pessoa);
            return true;
        } else {
            return false;
        }
    }

    getPessoas() {
        return this.#pessoas;
    }

    setLogradouro(logradouro) {
        if (logradouro) {
            this.#logradouro = logradouro;
            return true;
        } else {
            return false;
        }
    }

    getLogradouro() {
        return this.#logradouro;
    }

    setCep(cep) {
        if (cep) {
            this.#cep = cep;
            return true;
        } else {
            return false;
        }
    }

    getCep() {
        return this.#cep;
    }

}

module.exports = Endereco;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–06**

```javascript
class Endereco {

    #logradouro;
    #cep;
    #pessoas = [];
```

Declara a classe `Endereco` e seus atributos privados.

Os atributos `#logradouro` e `#cep` armazenam as informações do endereço.

O atributo `#pessoas` é um array responsável por armazenar todas as pessoas associadas a esse endereço.

---

#### **Linhas 08–16 — Método `addPessoa()`**

```javascript
addPessoa(pessoa) {
    if (pessoa) {
        this.#pessoas.push(pessoa);
        return true;
    } else {
        return false;
    }
}
```

Adiciona um objeto da classe `Pessoa` ao array `#pessoas`.

Sempre que uma pessoa é associada a esse endereço, o objeto é armazenado nesse array, permitindo que o relacionamento seja percorrido no sentido inverso.

O método retorna:

- `true`, quando a associação é realizada;
- `false`, caso o objeto informado seja inválido.

---

#### **Linhas 18–20 — Método `getPessoas()`**

```javascript
getPessoas() {
    return this.#pessoas;
}
```

Retorna o array contendo todas as pessoas associadas ao endereço.

Esse método permite recuperar todos os objetos `Pessoa` vinculados a esse endereço.

---

#### **Linhas 22–30 — Métodos `setLogradouro()` e `getLogradouro()`**

```javascript
setLogradouro(logradouro) {
    if (logradouro) {
        this.#logradouro = logradouro;
        return true;
    } else {
        return false;
    }
}

getLogradouro() {
    return this.#logradouro;
}
```

Esses métodos são responsáveis pelo armazenamento e recuperação do logradouro.

O método `setLogradouro()` realiza uma validação simples, verificando se o valor informado não está vazio antes de armazená-lo.

---

#### **Linhas 32–40 — Métodos `setCep()` e `getCep()`**

```javascript
setCep(cep) {
    if (cep) {
        this.#cep = cep;
        return true;
    } else {
        return false;
    }
}

getCep() {
    return this.#cep;
}
```

Permitem armazenar e recuperar o CEP associado ao endereço.

Assim como os demais métodos `set`, a atribuição somente é realizada quando o valor informado é considerado válido.

---

#### **Linha 42**

```javascript
module.exports = Endereco;
```

Exporta a classe `Endereco`, permitindo sua reutilização em outros módulos do projeto.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Encapsulamento | Os atributos da classe são privados e acessados apenas por métodos públicos. |
| Relacionamento 1:N | Um endereço pode estar associado a várias pessoas. |
| Relacionamento Reverso | O endereço mantém uma lista das pessoas que utilizam esse endereço. |
| Arrays de Objetos | O atributo `#pessoas` armazena referências para objetos da classe `Pessoa`. |
| Validação de Dados | Os métodos `set` verificam se os valores informados são válidos antes de armazená-los. |
| Modularização | A classe é exportada para reutilização em outros arquivos do projeto. |

---

### 💡 Dicas do Professor

> **Relacionamentos são implementados por meio de referências entre objetos.**
>
> Observe que a classe `Endereco` não armazena apenas informações textuais, mas também referências para objetos da classe `Pessoa`.

> **Utilize arrays quando um relacionamento puder envolver vários objetos.**
>
> Como um mesmo endereço pode estar relacionado a diversas pessoas, foi utilizado um array para armazenar essas referências.

> **Mantenha a responsabilidade de cada classe bem definida.**
>
> A classe `Endereco` é responsável apenas pelos dados relacionados ao endereço e pelas pessoas associadas a ele, sem conhecer detalhes internos da classe `Pessoa`.

## Relacionamento N:N – Classe `Telefone`

A classe `Telefone` representa os números de telefone associados às pessoas cadastradas no sistema.

Neste exemplo, foi implementado um relacionamento **N:N (muitos para muitos)**. Isso significa que:

- uma **Pessoa** pode possuir vários telefones;
- um **Telefone** pode estar associado a várias pessoas.

Para representar essa associação, a classe mantém um array contendo todas as pessoas vinculadas ao telefone.

### 💻 Código Completo

**Arquivo:** `Telefone.js`

```javascript
// Arquivo Telefone.js

class Telefone {

    #numero;
    #pessoas = [];

    addPessoa(pessoa) {
        if (pessoa) {
            this.#pessoas.push(pessoa);
            return true;
        } else {
            return false;
        }
    }

    getPessoas() {
        return this.#pessoas;
    }

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

}

module.exports = Telefone;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–05**

```javascript
class Telefone {

    #numero;
    #pessoas = [];
```

Declara a classe `Telefone` e seus atributos privados.

O atributo `#numero` armazena o número telefônico, enquanto `#pessoas` mantém uma lista com todas as pessoas associadas a esse telefone.

---

#### **Linhas 07–15 — Método `addPessoa()`**

```javascript
addPessoa(pessoa) {
    if (pessoa) {
        this.#pessoas.push(pessoa);
        return true;
    } else {
        return false;
    }
}
```

Adiciona uma pessoa ao conjunto de objetos associados ao telefone.

Sempre que o método `addTelefone()` da classe `Pessoa` estabelece um relacionamento, este método é chamado para criar a referência no sentido inverso, garantindo que ambas as classes conheçam a associação.

O método retorna:

- `true`, quando a associação é realizada com sucesso;
- `false`, caso o objeto informado seja inválido.

---

#### **Linhas 17–19 — Método `getPessoas()`**

```javascript
getPessoas() {
    return this.#pessoas;
}
```

Retorna o array contendo todas as pessoas associadas ao telefone.

Esse método permite percorrer o relacionamento no sentido inverso, identificando todos os objetos `Pessoa` que utilizam esse telefone.

---

#### **Linhas 21–29 — Métodos `setNumero()` e `getNumero()`**

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

Esses métodos são responsáveis pelo armazenamento e recuperação do número telefônico.

O método `setNumero()` realiza uma validação simples antes de armazenar o valor informado, retornando `true` quando a operação é concluída com sucesso e `false` caso contrário.

---

#### **Linha 31**

```javascript
module.exports = Telefone;
```

Exporta a classe `Telefone`, permitindo sua utilização em outros módulos do projeto.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Relacionamento N:N | Um telefone pode estar associado a várias pessoas, e uma pessoa pode possuir vários telefones. |
| Referência Cruzada | A associação é mantida tanto na classe `Pessoa` quanto na classe `Telefone`. |
| Arrays de Objetos | O atributo `#pessoas` armazena referências para objetos da classe `Pessoa`. |
| Encapsulamento | Os atributos permanecem privados e são acessados apenas por métodos públicos. |
| Validação | Os métodos verificam se os dados recebidos são válidos antes de armazená-los. |
| Modularização | A classe é exportada para reutilização em outros arquivos do projeto. |

---

### 💡 Dicas do Professor

> **Relacionamentos muitos para muitos são comuns em sistemas reais.**
>
> Em aplicações corporativas, é frequente encontrar situações em que um objeto pode estar relacionado a vários outros objetos, como alunos e disciplinas, autores e livros ou usuários e perfis de acesso.

> **As referências cruzadas facilitam a navegação entre os objetos.**
>
> Ao manter a associação em ambos os sentidos, torna-se possível recuperar todas as pessoas de um telefone ou todos os telefones de uma pessoa sem realizar novas buscas.

> **Evite duplicar responsabilidades.**
>
> A classe `Telefone` é responsável apenas pelas informações do telefone e pelas pessoas associadas a ele. Regras de negócio mais complexas devem ser implementadas em classes responsáveis pela coordenação dessas entidades.

## Relacionamento 1:1 – Classes `PF` e `Titulo`

Até este momento foram apresentados exemplos de relacionamentos **1:N** e **N:N**. Nesta seção será estudado o relacionamento **1:1 (um para um)**.

Nesse tipo de associação, cada objeto de uma classe está relacionado a exatamente um objeto da outra classe.

Como exemplo, será utilizado o cadastro de uma **Pessoa Física (PF)** e seu **Título de Eleitor**.

Nesse modelo:

- uma pessoa física possui um único título de eleitor;
- um título de eleitor pertence a apenas uma pessoa física.

Essa situação caracteriza um relacionamento **1:1**, bastante comum em sistemas que representam documentos pessoais, carteiras de habilitação, passaportes e outros registros exclusivos.

```text
Pessoa
   ▲
   │ (herança)
   │
  PF
   │
   │ 1:1
   ▼
Titulo
```

A implementação utiliza herança para especializar a classe `Pessoa` e composição para estabelecer o relacionamento com a classe `Titulo`.

---

## Classe `PF`

A classe `PF` representa uma especialização da classe `Pessoa`, acrescentando informações específicas de uma pessoa física.

Além do atributo `cpf`, essa classe mantém uma referência para um objeto da classe `Titulo`, implementando o relacionamento **1:1**.

### 💻 Código Completo

**Arquivo:** `PF.js`

```javascript
const Pessoa = require('./Pessoa');
//const Titulo = require('./Titulo');

class PF extends Pessoa {

    #cpf;
 //   #titulo;

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

 /*   setTitulo(titulo) {
        if (titulo instanceof Titulo) {
            this.#titulo = titulo;
            titulo.setPF(this);
            return true;
        } else {
            return false;
        }
    }

    getTitulo() {
        return this.#titulo;
    } */

}

module.exports = PF;
```

---

### 📘 Comentários e Explicações Linha a Linha

#### **Linhas 01–02**

```javascript
const Pessoa = require('./Pessoa');
const Titulo = require('./Titulo');
```

Importam as classes utilizadas por `PF`.

A classe `Pessoa` será utilizada como superclasse, enquanto `Titulo` será utilizada para estabelecer o relacionamento **1:1**.

---

#### **Linhas 04–08**

```javascript
class PF extends Pessoa {

    #cpf;
    #titulo;
```

Declara a classe `PF`, especializada da classe `Pessoa`.

Por utilizar `extends`, todos os métodos públicos da classe `Pessoa` permanecem disponíveis em `PF`.

São adicionados dois novos atributos privados:

- `#cpf`, que armazena o CPF;
- `#titulo`, que mantém a referência para o objeto `Titulo`.

---

#### **Linhas 10–18 — Método `setCPF()`**

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

Armazena o CPF após uma validação simples.

Caso o valor informado seja válido, o método retorna `true`; caso contrário, retorna `false`.

---

#### **Linhas 20–22 — Método `getCPF()`**

```javascript
getCPF() {
    return this.#cpf;
}
```

Retorna o CPF armazenado no objeto.

---

#### **Linhas 24–33 — Método `setTitulo()`**

```javascript
setTitulo(titulo) {
    if (titulo instanceof Titulo) {
        this.#titulo = titulo;
        titulo.setPF(this);
        return true;
    } else {
        return false;
    }
}
```

Estabelece o relacionamento entre um objeto `PF` e um objeto `Titulo`.

Antes da associação, o método verifica se o objeto recebido pertence à classe `Titulo` utilizando o operador `instanceof`.

Após a validação:

- o objeto é armazenado em `#titulo`;
- é criada uma referência cruzada por meio de `titulo.setPF(this)`.

Essa implementação garante que ambos os objetos conheçam a associação existente entre eles.

---

#### **Linhas 35–37 — Método `getTitulo()`**

```javascript
getTitulo() {
    return this.#titulo;
}
```

Retorna o objeto `Titulo` associado à pessoa física.

---

#### **Linha 39**

```javascript
module.exports = PF;
```

Exporta a classe `PF`, permitindo sua reutilização em outros módulos do sistema.

---

### 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|----------|-----------|
| Herança | A classe `PF` herda atributos e métodos públicos da classe `Pessoa`. |
| Especialização | `PF` adiciona comportamentos específicos de uma pessoa física. |
| Relacionamento 1:1 | Cada objeto `PF` está associado a um único objeto `Titulo`. |
| Referência Cruzada | A associação é mantida nas duas classes (`PF` e `Titulo`). |
| `instanceof` | Garante que apenas objetos da classe `Titulo` sejam associados. |
| Encapsulamento | Os atributos permanecem privados e acessíveis apenas por métodos públicos. |

---

### 💡 Dicas do Professor

> **Herança e composição podem ser utilizadas simultaneamente.**
>
> Neste exemplo, a classe `PF` herda características da classe `Pessoa` e, ao mesmo tempo, mantém um relacionamento com a classe `Titulo`.

> **Relacionamentos 1:1 representam informações exclusivas.**
>
> Sempre que um objeto possuir exatamente um objeto correspondente, esse tipo de modelagem costuma ser uma boa escolha.

> **A referência cruzada mantém os objetos sincronizados.**
>
> Ao chamar `titulo.setPF(this)`, a associação passa a existir nos dois sentidos, facilitando a navegação entre os objetos.

# Integração das Classes – Arquivo `usaPF.js`

Até este momento foram implementadas todas as classes que compõem o exemplo deste capítulo:

- `Pessoa`
- `Endereco`
- `Telefone`
- `PF`
- `Titulo`

Nesta seção será apresentado o arquivo **`usaPF.js`**, responsável por integrar todas essas classes em uma única aplicação.

Seu objetivo é demonstrar como criar objetos, preencher seus atributos, estabelecer os relacionamentos entre eles e consultar as informações armazenadas.

O exemplo também permite verificar o funcionamento das **referências cruzadas**, mostrando que os objetos relacionados conseguem acessar uns aos outros de maneira consistente.

---

### Fluxo de execução

```text
Importar Classes
        │
        ▼
Criar Objetos
        │
        ▼
Configurar os Objetos
        │
        ▼
Criar os Relacionamentos
        │
        ▼
Consultar os Dados
        │
        ▼
Verificar as Referências Cruzadas
```

---

## 💻 Código Completo

**Arquivo:** `usaPF.js`

```javascript
const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
//const Titulo = require('./pessoas/Titulo');

const PF = require('./pessoas/PF');

const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

end.setLogradouro('QNM 40');

fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

//const titulo = new Titulo();
//titulo.setNumero('1234156');
//titulo.setSecao('DF');

const obj = new PF();

obj.setNome('José');

obj.setEndereco(end);       // vincula Endereco à PF

obj.addTelefone(fone1);     // vincula Telefone à PF
obj.addTelefone(fone2);     // vincula outro Telefone à PF

//obj.setTitulo(titulo);      // vincula Título à PF

console.log(obj.getNome());

console.log(obj.getEndereco().getLogradouro());

console.log(obj.getTelefones());

//console.log(obj.getTitulo().getNumero());

// Verificando as referências cruzadas

console.log(end.getPessoas());

console.log(fone1.getPessoas());

//console.log(titulo.getPF().getNome());
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–04 — Importação das Classes**

```javascript
const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
const Titulo = require('./pessoas/Titulo');

const PF = require('./pessoas/PF');
```

Importa todas as classes necessárias para a execução do exemplo.

Cada classe foi implementada em um módulo independente e exportada utilizando `module.exports`, permitindo sua reutilização em diferentes partes da aplicação.

---

### **Linhas 06–08 — Criação dos Objetos**

```javascript
const end = new Endereco();

const fone1 = new Telefone();
const fone2 = new Telefone();
```

Cria as instâncias que serão utilizadas durante a execução.

Neste exemplo são criados:

- um endereço;
- dois telefones.

Esses objetos serão posteriormente associados à pessoa física.

---

### **Linhas 10–13 — Configuração dos Objetos**

```javascript
end.setLogradouro('QNM 40');

fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');
```

Define os dados do endereço e dos telefones.

Os valores são atribuídos por meio dos métodos `set`, preservando o encapsulamento das classes.

---

### **Linhas 15–17 — Criação do Título**

```javascript
const titulo = new Titulo();

titulo.setNumero('1234156');
titulo.setSecao('DF');
```

Cria um objeto da classe `Titulo` e define seus principais atributos.

Esse objeto será associado posteriormente à pessoa física.

---

### **Linhas 19–29 — Criação da Pessoa Física e dos Relacionamentos**

```javascript
const obj = new PF();

obj.setNome('José');

obj.setEndereco(end);

obj.addTelefone(fone1);
obj.addTelefone(fone2);

obj.setTitulo(titulo);
```

Cria uma instância da classe `PF` e estabelece todos os relacionamentos apresentados ao longo da apostila.

Ao final dessas instruções, o objeto `obj` possui:

- um endereço;
- dois telefones;
- um título de eleitor.

Durante essas associações, as referências cruzadas também são criadas automaticamente pelas classes.

---

### **Linhas 31–37 — Consulta das Informações**

```javascript
console.log(obj.getNome());

console.log(obj.getEndereco().getLogradouro());

console.log(obj.getTelefones());

console.log(obj.getTitulo().getNumero());
```

Exibe informações armazenadas no objeto `PF`.

São recuperados:

- nome;
- logradouro do endereço;
- lista de telefones;
- número do título de eleitor.

Esses dados demonstram que os relacionamentos foram criados corretamente.

---

### **Linhas 39–45 — Verificação das Referências Cruzadas**

```javascript
console.log(end.getPessoas());

console.log(fone1.getPessoas());

console.log(titulo.getPF().getNome());
```

Essa é a parte mais importante do exemplo.

Ela demonstra que os relacionamentos foram estabelecidos em ambos os sentidos.

É possível:

- consultar todas as pessoas associadas a um endereço;
- consultar todas as pessoas associadas a um telefone;
- recuperar a pessoa associada ao título de eleitor.

Esse comportamento caracteriza o uso de **referências cruzadas**, permitindo navegar pelos objetos da aplicação independentemente do ponto de partida.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Descrição |
|-----------|-----------|
| Instanciação de Objetos | Objetos são criados utilizando o operador `new`. |
| Modularização | As classes são importadas utilizando `require()` e reutilizadas na aplicação. |
| Encapsulamento | Os atributos privados são manipulados apenas por métodos públicos. |
| Composição | O objeto `PF` mantém referências para objetos `Endereco`, `Telefone` e `Titulo`. |
| Herança | A classe `PF` herda atributos e métodos da classe `Pessoa`. |
| Relacionamento 1:1 | Implementado entre `PF` e `Titulo`. |
| Relacionamento 1:N | Implementado entre `Pessoa` e `Endereco`. |
| Relacionamento N:N | Implementado entre `Pessoa` e `Telefone`. |
| Referência Cruzada | Os objetos relacionados armazenam referências uns aos outros, permitindo navegação bidirecional. |

---

## 💡 Dicas do Professor

> **O arquivo `usaPF.js` funciona como um teste de integração.**
>
> Seu objetivo não é criar novas classes, mas verificar se todas as classes desenvolvidas anteriormente trabalham corretamente em conjunto.

> **Observe a sequência de execução.**
>
> Primeiro os objetos são criados, depois seus atributos são preenchidos e, somente então, os relacionamentos são estabelecidos.

> **As referências cruzadas simplificam a navegação entre os objetos.**
>
> Após associar um endereço ou um telefone à pessoa, também é possível recuperar a pessoa a partir desses objetos, sem necessidade de buscas adicionais.

> **Este exemplo reúne todos os conceitos estudados nesta apostila.**
>
> Durante sua execução são utilizados encapsulamento, herança, composição, modularização e os relacionamentos 1:1, 1:N e N:N, demonstrando como esses conceitos atuam de forma integrada em uma aplicação orientada a objetos.

---------------------

## 💡 Resumo Final

Neste capítulo foram apresentados os principais tipos de relacionamentos entre classes na Programação Orientada a Objetos utilizando JavaScript.

Inicialmente, a classe `Pessoa` foi expandida para estabelecer relacionamentos com as classes `Endereco` e `Telefone`, demonstrando como diferentes objetos podem colaborar para representar uma mesma entidade do mundo real.

Na sequência, foi implementado o relacionamento **1:1** entre as classes `PF` e `Titulo`, utilizando herança para especializar a classe `Pessoa` e composição para estabelecer a associação entre os objetos.

Ao longo do capítulo também foram aplicados conceitos fundamentais da Programação Orientada a Objetos, como:

- encapsulamento utilizando atributos privados;
- herança por meio da palavra-chave `extends`;
- composição entre objetos;
- modularização com `require()` e `module.exports`;
- validação de objetos utilizando o operador `instanceof`;
- referências cruzadas entre objetos relacionados.

Por fim, o arquivo `usaPF.js` integrou todas as classes desenvolvidas, demonstrando, na prática, como criar objetos, estabelecer relacionamentos e navegar entre eles por meio de seus métodos públicos.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- identificar e implementar relacionamentos **1:1**, **1:N** e **N:N** entre classes;
- utilizar composição para criar associações entre objetos;
- aplicar herança para especializar classes;
- utilizar o operador `instanceof` para validar objetos antes de estabelecer relacionamentos;
- implementar referências cruzadas para permitir a navegação entre objetos relacionados;
- organizar aplicações JavaScript utilizando módulos (`require()` e `module.exports`);
- integrar diferentes classes em uma aplicação orientada a objetos.

---------------------

## 📚 Exercícios de Fixação

- https://js-oo-ebook.vercel.app/docs/tutorial-exercicios/relacionamentos-classes-exercicio
