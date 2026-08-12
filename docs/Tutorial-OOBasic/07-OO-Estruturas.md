# 📘 Orientação a Objetos – Estruturas de Objetos, Exportações e Desestruturação

## Introdução

Ao desenvolver aplicações em JavaScript, existem diferentes formas de organizar dados e comportamentos relacionados. Dependendo da necessidade da aplicação, podemos utilizar **classes**, **funções que criam objetos** ou **objetos literais**.

Neste capítulo, utilizaremos como exemplo a representação de uma **Inscrição Estadual (IE)**, que pode ser relacinada com a Classe PJ, para estudar diferentes formas de construção e utilização de objetos em JavaScript.

Serão apresentadas três abordagens:

- uma implementação utilizando **classe**, por meio de `IEclss`;
- uma implementação utilizando uma **função fábrica**, por meio de `IEfunc()`;
- uma implementação utilizando um **objeto literal**, denominado `IEjson`.

O objeto `IEjson` também permitirá estabelecer uma relação com o conceito de **JSON (JavaScript Object Notation)**. Apesar da semelhança visual entre essas estruturas, veremos que um objeto literal JavaScript pode possuir propriedades e métodos, enquanto JSON é utilizado para representação e troca de dados.

Além da construção dos objetos, o capítulo apresenta recursos importantes da linguagem JavaScript, como **ES Modules (ESM)**, `export`, `import`, desestruturação e diferentes formas de exportação e importação de módulos.

---

## 🎯 Objetivos de Aprendizagem

Ao concluir este capítulo, você será capaz de:

- compreender diferentes formas de representar objetos em JavaScript;
- criar objetos utilizando classes;
- compreender o funcionamento de uma função fábrica;
- criar e utilizar objetos literais;
- diferenciar um objeto literal JavaScript do formato JSON;
- compreender o funcionamento básico dos ES Modules (ESM);
- utilizar `export` e `import` para compartilhar recursos entre arquivos;
- diferenciar exportação padrão (`default`) de exportação nomeada;
- utilizar desestruturação durante a importação de recursos;
- compreender como diferentes estruturas de objetos podem representar um mesmo domínio de aplicação.

---

## ES Modules (ESM)

O **ESM (ECMAScript Modules)** é o sistema moderno de módulos do JavaScript.

Ele permite organizar uma aplicação em diferentes arquivos, possibilitando que classes, funções, objetos e outros recursos sejam **exportados** de um módulo e posteriormente **importados** por outros módulos.

Para trabalhar com ESM, utilizamos principalmente as palavras-chave:

- `export` — disponibiliza um recurso para utilização em outros módulos;
- `import` — permite utilizar, em um arquivo, recursos exportados por outros módulos.

Ao utilizar ESM em arquivos JavaScript, podemos adotar a extensão:

```text
.mjs
```

Essa extensão identifica explicitamente o arquivo como um módulo ECMAScript.

Neste capítulo, utilizaremos arquivos `.mjs` para demonstrar diferentes formas de criação, exportação e importação de objetos.

---

## Exportação Padrão e Exportação Nomeada

O ESM permite diferentes formas de exportar recursos.

### Exportação Padrão (`default`)

A exportação padrão pode ser realizada utilizando:

```javascript
export default
```

Um módulo pode possuir apenas uma exportação padrão.

Durante a importação, não é necessário utilizar exatamente o mesmo nome utilizado na declaração original.

Exemplo:

```javascript
import IE from "./IE.mjs";
```

---

### Exportação Nomeada

Também podemos exportar recursos utilizando uma **exportação nomeada**.

Exemplo:

```javascript
export { IEfunc, IEjson };
```

Nesse caso, durante a importação, os nomes exportados são informados entre chaves:

```javascript
import { IEfunc, IEjson } from "./IE.mjs";
```

Essa forma permite que um mesmo módulo disponibilize diferentes recursos.

---

## Diferentes Formas de Representar Objetos

Para demonstrar essas possibilidades, utilizaremos como exemplo uma **Inscrição Estadual (IE)**.

A mesma entidade será representada utilizando três abordagens diferentes:

### 1. Classe `IEclss`

A primeira implementação utiliza uma **classe JavaScript**.

```javascript
class IEclss {
    // implementação
}
```

Essa abordagem permite reunir atributos e métodos em uma estrutura que poderá posteriormente ser utilizada para criar objetos por meio do operador `new`.

---

### 2. Função Fábrica `IEfunc()`

A segunda abordagem utiliza uma função responsável por criar e retornar um objeto.

```javascript
function IEfunc() {
    // implementação
}
```

Esse tipo de função é conhecido como **função fábrica (Factory Function)**.

A cada chamada, a função poderá criar e retornar um novo objeto contendo suas próprias propriedades e métodos.

---

### 3. Objeto Literal `IEjson`

A terceira implementação utiliza um **objeto literal JavaScript**.

```javascript
const IEjson = {
    // implementação
};
```

Nesse caso, o objeto é criado diretamente utilizando `{ }`, sem a necessidade de uma classe ou de uma função responsável por sua construção.

O nome `IEjson` utilizado no exemplo permite também estabelecer uma relação com **JSON (JavaScript Object Notation)**.

Entretanto, é importante observar que o objeto apresentado neste capítulo é um **objeto literal JavaScript**, e não um documento JSON propriamente dito.

Um objeto literal pode possuir:

- propriedades;
- métodos;
- funções;
- referências para outros objetos.

Já o JSON é utilizado principalmente como um formato textual para **representação e troca de dados**.

Essa diferença ficará mais evidente quando analisarmos a implementação completa de `IEjson`.

---

## Organização do Exemplo

As três abordagens representarão informações relacionadas a uma Inscrição Estadual.

Ao longo das próximas seções, analisaremos separadamente:

```text
IEclss
   ↓
Classe

IEfunc()
   ↓
Função Fábrica

IEjson
   ↓
Objeto Literal
   ↓
Relação conceitual com JSON
```

Apesar de utilizarem estratégias diferentes, as três implementações permitirão armazenar e manipular informações semelhantes.

Isso possibilitará comparar como **classes, funções fábrica e objetos literais** podem ser utilizados para representar dados e comportamentos em JavaScript.

---

## Classe `IEclss`

A primeira forma de representar uma Inscrição Estadual será por meio de uma **classe JavaScript**.

A classe `IEclss` mantém os dados da inscrição estadual em atributos privados e disponibiliza métodos públicos para realizar o acesso e a alteração desses valores.

Além disso, a classe possui um atributo destinado a armazenar uma referência para uma **Pessoa Jurídica (PJ)**. Neste momento, essa associação será realizada de forma simples. A implementação específica da classe `PJ` e a validação do objeto relacionado serão trabalhadas posteriormente em um exercício integrador.

---

## 💻 Código Completo

**Arquivo:** `IE.mjs`

```javascript
export default class IEclss {
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
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05**

```javascript
export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;
```

A classe `IEclss` é declarada utilizando `export default`, indicando que ela será a **exportação padrão** do módulo.

Os atributos:

- `#numero`;
- `#estado`;
- `#dataRegistro`;
- `#pj`;

são declarados como privados por meio do caractere `#`.

O uso de atributos privados aplica o conceito de **encapsulamento**, impedindo que esses valores sejam acessados ou modificados diretamente fora da classe.

O atributo `#pj` será utilizado para armazenar uma referência para um objeto que represente uma Pessoa Jurídica.

---

### **Linhas 07–19**

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

O método `setNumero()` recebe como parâmetro o número da Inscrição Estadual.

Inicialmente, é realizada uma validação:

```javascript
if (numero)
```

Caso um valor seja informado, ele será armazenado no atributo privado:

```javascript
this.#numero = numero;
```

Após realizar a atribuição, o método retorna:

```javascript
return true;
```

Caso nenhum valor válido seja informado, o método retorna `false`.

O método `getNumero()` permite recuperar o valor armazenado no atributo privado `#numero`.

---

### **Linhas 21–33**

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

Os métodos `setEstado()` e `getEstado()` são responsáveis pelo armazenamento e recuperação do estado relacionado à Inscrição Estadual.

O método `setEstado()` verifica inicialmente se algum valor foi informado.

Caso a condição:

```javascript
if (estado)
```

seja verdadeira, o valor recebido será armazenado no atributo privado `#estado`.

O método retorna `true` quando a atribuição é realizada e `false` quando o valor não é aceito.

O método `getEstado()` permite recuperar posteriormente o estado armazenado.

---

### **Linhas 35–47**

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

O método `setDataRegistro()` apresenta uma validação diferente das anteriores.

Nesse caso, o operador `instanceof` é utilizado para verificar se o valor recebido é realmente um objeto da classe `Date`.

A expressão:

```javascript
dataRegistro instanceof Date
```

retorna `true` quando `dataRegistro` representa uma instância de `Date`.

Somente nesse caso o valor será armazenado no atributo privado:

```javascript
this.#dataRegistro = dataRegistro;
```

Caso outro tipo de valor seja informado, o método retornará `false`.

O método `getDataRegistro()` permite recuperar posteriormente a data armazenada.

---

### **Linhas 49–61**

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

O método `setPJ()` permite associar à Inscrição Estadual um objeto que represente uma **Pessoa Jurídica**.

Neste momento, é realizada apenas a validação da existência do valor recebido:

```javascript
if (pj)
```

Caso um objeto seja informado, sua referência será armazenada no atributo privado:

```javascript
this.#pj = pj;
```

O método retorna `true` quando a associação é realizada e `false` caso nenhum valor seja informado.

O método `getPJ()` permite recuperar posteriormente o objeto associado.

Essa implementação introduz a ideia de que um objeto pode armazenar uma **referência para outro objeto**.

A implementação específica da classe `PJ` será realizada posteriormente em um **Exercício Integrador**. Nesse momento, o relacionamento poderá ser aprimorado por meio da validação do tipo do objeto utilizando `instanceof`.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| `class` | Define uma classe em JavaScript. |
| `export default` | Define um recurso como a exportação padrão de um módulo. |
| `#atributo` | Declara um atributo privado, acessível somente dentro da própria classe. |
| Encapsulamento | Protege os dados internos da classe e controla seu acesso por meio de métodos. |
| Getter / Setter | Métodos utilizados para recuperar e alterar os valores dos atributos privados. |
| `Date` | Classe nativa do JavaScript utilizada para representar e manipular datas. |
| `instanceof` | Operador utilizado para verificar se determinado objeto é uma instância de uma classe. |
| Referência para objeto | Permite armazenar em um atributo a referência para outro objeto. |
| `return true` / `return false` | Permite informar se uma operação realizada por um método foi aceita ou rejeitada. |

---

## 💡 Dicas do Professor

> **Utilize métodos para controlar o acesso aos atributos privados.**
>
> Em vez de alterar diretamente os valores armazenados em uma classe, os métodos `set` permitem realizar validações antes de modificar o estado do objeto.

> **`instanceof` permite validar o tipo de um objeto.**
>
> Neste exemplo, o método `setDataRegistro()` utiliza `instanceof` para garantir que apenas objetos da classe `Date` sejam armazenados. Posteriormente, esse mesmo recurso poderá ser utilizado para validar objetos de classes desenvolvidas pelo próprio programador.

> **Um atributo também pode armazenar uma referência para outro objeto.**
>
> O atributo `#pj` foi preparado para armazenar um objeto que represente uma Pessoa Jurídica. A classe responsável por esse objeto será desenvolvida posteriormente em um Exercício Integrador.

> **Observe a utilização de `export default`.**
>
> A classe `IEclss` é definida como a exportação padrão do módulo. Posteriormente veremos como essa característica influencia a forma utilizada para importar a classe em outro arquivo.

---
## Função Fábrica `IEfunc()`

A segunda forma de representar uma Inscrição Estadual utiliza uma **Função Fábrica (Factory Function)**.

Diferentemente da abordagem baseada em classe, uma função fábrica não utiliza o operador `new`. Em vez disso, a própria função cria os dados internos e retorna um objeto contendo os métodos necessários para manipulá-los.

Essa abordagem permite encapsular informações dentro do escopo da função, disponibilizando externamente apenas os métodos retornados.

---

## 💻 Código Completo

**Arquivo:** `IE.mjs`

```javascript
export function IEfunc() {
    let dados = {
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };

    function setNumero(numero) {
        if (numero) {
            dados.numero = numero;
            return true;
        } else {
            return false;
        }
    }

    function getNumero() {
        return dados.numero;
    }

    function setEstado(estado) {
        if (estado) {
            dados.estado = estado;
            return true;
        } else {
            return false;
        }
    }

    function getEstado() {
        return dados.estado;
    }

    function setDataRegistro(data) {
        if (data instanceof Date) {
            dados.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    }

    function getDataRegistro() {
        return dados.dataRegistro;
    }

    function setPJ(pj) {
        if (pj) {
            dados.pj = pj;
            return true;
        } else {
            return false;
        }
    }

    function getPJ() {
        return dados.pj;
    }

    return {
        setNumero,
        getNumero,
        setEstado,
        getEstado,
        setDataRegistro,
        getDataRegistro,
        setPJ,
        getPJ
    };
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–07**

```javascript
export function IEfunc() {
    let dados = {
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };
```

A função `IEfunc()` é declarada utilizando `export`, indicando que poderá ser importada por outros módulos.

Dentro da função é criado o objeto:

```javascript
dados
```

Esse objeto armazena as informações da Inscrição Estadual:

- `numero`;
- `estado`;
- `dataRegistro`;
- `pj`.

Como o objeto `dados` foi criado dentro da função, ele permanece protegido pelo escopo da própria função.

Essa característica é importante porque impede o acesso direto aos dados fora de `IEfunc()`.

---

### **Linhas 09–21**

```javascript
function setNumero(numero) {
    if (numero) {
        dados.numero = numero;
        return true;
    } else {
        return false;
    }
}

function getNumero() {
    return dados.numero;
}
```

Os métodos `setNumero()` e `getNumero()` controlam o acesso à propriedade `numero`.

O método `setNumero()` verifica se algum valor foi informado.

Quando a condição:

```javascript
if (numero)
```

for verdadeira, o valor será armazenado em:

```javascript
dados.numero
```

O método retorna `true` quando a operação é realizada e `false` caso o valor não seja aceito.

O método `getNumero()` retorna o valor armazenado.

---

### **Linhas 23–35**

```javascript
function setEstado(estado) {
    if (estado) {
        dados.estado = estado;
        return true;
    } else {
        return false;
    }
}

function getEstado() {
    return dados.estado;
}
```

Esse bloco implementa o controle da propriedade `estado`.

O método `setEstado()` verifica se o valor recebido é válido antes de armazená-lo.

O valor aceito será armazenado em:

```javascript
dados.estado
```

O método `getEstado()` permite recuperar posteriormente essa informação.

---

### **Linhas 37–49**

```javascript
function setDataRegistro(data) {
    if (data instanceof Date) {
        dados.dataRegistro = data;
        return true;
    } else {
        return false;
    }
}

function getDataRegistro() {
    return dados.dataRegistro;
}
```

O método `setDataRegistro()` utiliza o operador `instanceof` para verificar se o valor recebido é uma instância da classe nativa `Date`.

A condição:

```javascript
data instanceof Date
```

garante que somente objetos de data sejam armazenados em:

```javascript
dados.dataRegistro
```

O método `getDataRegistro()` retorna posteriormente a data armazenada.

---

### **Linhas 51–63**

```javascript
function setPJ(pj) {
    if (pj) {
        dados.pj = pj;
        return true;
    } else {
        return false;
    }
}

function getPJ() {
    return dados.pj;
}
```

O método `setPJ()` permite associar ao objeto interno `dados` uma referência para uma futura representação de **Pessoa Jurídica**.

Neste momento, é realizada apenas a validação da existência do valor:

```javascript
if (pj)
```

Caso algum objeto seja informado, ele será armazenado em:

```javascript
dados.pj
```

O método `getPJ()` permite recuperar posteriormente essa referência.

Assim como na implementação da classe `IEclss`, a validação específica do tipo de objeto será trabalhada posteriormente em um Exercício Integrador.

---

### **Linhas 65–74**

```javascript
return {
    setNumero,
    getNumero,
    setEstado,
    getEstado,
    setDataRegistro,
    getDataRegistro,
    setPJ,
    getPJ
};
```

Esse trecho é responsável por retornar um **objeto contendo os métodos públicos** da função fábrica.

Observe que o objeto `dados` não é retornado diretamente.

Apenas os métodos necessários para manipular suas informações são disponibilizados:

- `setNumero`;
- `getNumero`;
- `setEstado`;
- `getEstado`;
- `setDataRegistro`;
- `getDataRegistro`;
- `setPJ`;
- `getPJ`.

Essa estratégia cria uma forma de **encapsulamento por escopo**, pois os dados permanecem internos à função e somente podem ser acessados por meio dos métodos retornados.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Função Fábrica | Função responsável por criar e retornar objetos configurados. |
| Factory Function | Nome utilizado para o padrão de criação de objetos por meio de funções. |
| Escopo | Define onde uma variável ou objeto pode ser acessado. |
| Encapsulamento | Os dados internos ficam protegidos dentro da função e são manipulados apenas pelos métodos retornados. |
| Closure | Permite que os métodos retornados continuem acessando o objeto `dados` mesmo após a execução da função. |
| Objeto Literal | Estrutura utilizada para armazenar as propriedades dentro da variável `dados`. |
| `export` | Disponibiliza a função para utilização em outros módulos. |
| `Date` | Classe nativa utilizada para representar datas. |
| `instanceof` | Verifica se determinado objeto pertence a uma classe específica. |
| `return { ... }` | Retorna um objeto contendo os métodos públicos da função fábrica. |

---

## 💡 Dicas do Professor

> **Funções fábrica não precisam do operador `new`.**
>
> Para criar uma nova estrutura a partir de `IEfunc()`, basta executar a função e armazenar o objeto retornado.

> **Os dados permanecem protegidos dentro da função.**
>
> O objeto `dados` não pode ser acessado diretamente fora de `IEfunc()`. O acesso ocorre somente por meio dos métodos retornados.

> **Observe a diferença entre atributos privados e escopo privado.**
>
> Na classe `IEclss`, o encapsulamento foi realizado utilizando atributos privados com `#`. Na função fábrica, o encapsulamento ocorre porque o objeto `dados` existe apenas dentro do escopo da função.

> **Closure é um conceito importante nesta implementação.**
>
> Mesmo depois que `IEfunc()` termina sua execução, os métodos retornados continuam acessando o objeto `dados`, preservando os valores armazenados.

---

## Objeto Literal `IEjson`

A terceira forma de representar uma Inscrição Estadual utiliza um **objeto literal JavaScript**.

Diferentemente das implementações anteriores, não é necessário declarar uma classe nem criar uma função fábrica. O objeto é definido diretamente utilizando `{ }`, reunindo propriedades e métodos em uma única estrutura.

Neste exemplo, o objeto recebe o nome `IEjson`.

Apesar do nome utilizado, é importante compreender que `IEjson` é um **objeto literal JavaScript**, e não um conteúdo JSON propriamente dito.

---

## 💻 Código Completo

**Arquivo:** `IE.mjs`

```javascript
export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (numero) {
            this.numero = numero;
            return true;
        } else {
            return false;
        }
    },

    getNumero() {
        return this.numero;
    },

    setEstado(estado) {
        if (estado) {
            this.estado = estado;
            return true;
        } else {
            return false;
        }
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(data) {
        if (data instanceof Date) {
            this.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj) {
            this.pj = pj;
            return true;
        } else {
            return false;
        }
    },

    getPJ() {
        return this.pj;
    }
};
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–05**

```javascript
export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,
```

O objeto `IEjson` é declarado utilizando:

```javascript
export const IEjson = {
```

A palavra-chave `const` cria uma constante que mantém a referência para o objeto.

A palavra-chave `export` realiza uma **exportação nomeada**, permitindo que `IEjson` seja posteriormente importado por outro módulo.

As propriedades:

- `numero`;
- `estado`;
- `dataRegistro`;
- `pj`;

são inicialmente definidas com o valor `null`.

Diferentemente da classe `IEclss`, essas propriedades não utilizam o caractere `#` e, portanto, não são atributos privados.

---

### **Linhas 07–21**

```javascript
setNumero(numero) {
    if (numero) {
        this.numero = numero;
        return true;
    } else {
        return false;
    }
},

getNumero() {
    return this.numero;
},
```

Os métodos `setNumero()` e `getNumero()` são definidos diretamente dentro do objeto literal.

O método `setNumero()` verifica inicialmente se algum valor foi informado.

Quando a condição:

```javascript
if (numero)
```

for verdadeira, o valor recebido será armazenado na propriedade:

```javascript
this.numero
```

Nesse contexto, `this` representa o próprio objeto `IEjson`.

O método `getNumero()` retorna posteriormente o valor armazenado.

---

### **Linhas 23–37**

```javascript
setEstado(estado) {
    if (estado) {
        this.estado = estado;
        return true;
    } else {
        return false;
    }
},

getEstado() {
    return this.estado;
},
```

Os métodos `setEstado()` e `getEstado()` controlam a alteração e a recuperação da propriedade `estado`.

O método `setEstado()` verifica se algum valor foi informado e, caso a condição seja satisfeita, realiza a atribuição:

```javascript
this.estado = estado;
```

O método `getEstado()` retorna o valor armazenado no próprio objeto.

---

### **Linhas 39–53**

```javascript
setDataRegistro(data) {
    if (data instanceof Date) {
        this.dataRegistro = data;
        return true;
    } else {
        return false;
    }
},

getDataRegistro() {
    return this.dataRegistro;
},
```

O método `setDataRegistro()` utiliza novamente o operador `instanceof`.

A expressão:

```javascript
data instanceof Date
```

verifica se o valor recebido é uma instância da classe nativa `Date`.

Caso a condição seja verdadeira, o objeto será armazenado em:

```javascript
this.dataRegistro
```

O método `getDataRegistro()` permite recuperar posteriormente a data armazenada.

---

### **Linhas 55–69**

```javascript
setPJ(pj) {
    if (pj) {
        this.pj = pj;
        return true;
    } else {
        return false;
    }
},

getPJ() {
    return this.pj;
}
```

O método `setPJ()` permite armazenar uma referência para um objeto que futuramente representará uma **Pessoa Jurídica**.

Neste momento, a validação verifica apenas se algum valor foi informado:

```javascript
if (pj)
```

Caso a condição seja verdadeira, a referência será armazenada em:

```javascript
this.pj
```

O método `getPJ()` permite recuperar posteriormente o objeto associado.

Assim como nas implementações anteriores, a validação específica de um objeto da classe `PJ` será trabalhada posteriormente no Exercício Integrador.

---

## Objeto Literal e JSON

O nome `IEjson` utilizado neste exemplo permite estabelecer uma relação com o conceito de **JSON (JavaScript Object Notation)**.

Um objeto literal JavaScript e um conteúdo JSON podem apresentar uma estrutura visual semelhante. Por exemplo, um conjunto de dados poderia ser representado desta forma:

```javascript
{
    numero: "123456",
    estado: "DF"
}
```

Entretanto, existem diferenças importantes.

O objeto `IEjson` desenvolvido neste capítulo é um **objeto JavaScript** e, por isso, pode possuir propriedades e métodos, como:

```javascript
setNumero(numero) {
    // ...
}

getNumero() {
    // ...
}
```

O formato JSON, por sua vez, é utilizado para representar dados e não possui métodos.

Uma representação JSON dos mesmos dados seria semelhante a:

```json
{
    "numero": "123456",
    "estado": "DF",
    "dataRegistro": null,
    "pj": null
}
```

Observe também que, em JSON, os nomes das propriedades aparecem entre aspas duplas.

Portanto:

| Objeto Literal JavaScript | JSON |
|---------------------------|------|
| É uma estrutura da linguagem JavaScript. | É um formato textual de representação de dados. |
| Pode possuir propriedades e métodos. | Representa dados e não possui métodos. |
| Pode utilizar `this`. | Não utiliza `this`. |
| Pode armazenar funções. | Não representa funções como valores JSON. |
| Pode ser manipulado diretamente pelo código JavaScript. | Normalmente é convertido para um objeto JavaScript antes de ser manipulado pela aplicação. |

Neste capítulo, portanto, `IEjson` deve ser compreendido como um **objeto literal JavaScript cujo nome faz referência ao formato JSON**.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Objeto Literal | Objeto criado diretamente utilizando a sintaxe `{ }`. |
| JSON | Formato textual utilizado para representação e troca de dados. |
| `const` | Declara uma variável cuja referência não poderá ser reatribuída. |
| `export` | Realiza uma exportação nomeada do objeto para outros módulos. |
| Propriedade | Valor armazenado diretamente dentro de um objeto. |
| Método | Função definida como parte de um objeto. |
| `this` | Referência ao objeto utilizado durante a execução do método. |
| `Date` | Classe nativa do JavaScript utilizada para representar datas. |
| `instanceof` | Verifica se determinado objeto é uma instância de uma classe. |
| `null` | Representa intencionalmente a ausência de um valor. |

---

## 💡 Dicas do Professor

> **Objeto literal e JSON não são a mesma coisa.**
>
> Embora apresentem estruturas visualmente semelhantes, um objeto literal faz parte da linguagem JavaScript e pode possuir comportamentos, enquanto JSON é utilizado para representar dados.

> **Observe o papel de `this`.**
>
> Nos métodos de `IEjson`, expressões como `this.numero` e `this.estado` permitem acessar as propriedades do próprio objeto.

> **Compare as três formas de encapsulamento estudadas.**
>
> Na classe `IEclss`, utilizamos atributos privados com `#`. Na função fábrica `IEfunc()`, os dados ficam protegidos pelo escopo da função. No objeto literal `IEjson`, as propriedades permanecem diretamente acessíveis.

> **A classe `PJ` será incorporada posteriormente.**
>
> Por enquanto, `pj` armazena apenas uma referência para um objeto. Em um Exercício Integrador, será possível criar a classe `PJ` e aprimorar essa associação utilizando validação com `instanceof`.

---

## Comparando as Formas de Implementação

Até este momento, a estrutura de uma Inscrição Estadual foi representada utilizando três abordagens diferentes:

- classe `IEclss`;
- função fábrica `IEfunc()`;
- objeto literal `IEjson`.

Embora as três implementações representem informações semelhantes, cada uma utiliza recursos diferentes da linguagem JavaScript para organizar dados e comportamentos.

Observe a comparação:

| Implementação | Estrutura | Característica |
|---------------|-----------|----------------|
| `IEclss` | Classe | Utiliza atributos privados (`#`) e métodos públicos para controlar o acesso aos dados. |
| `IEfunc()` | Função Fábrica | Mantém os dados no escopo da função e retorna um objeto contendo os métodos públicos. |
| `IEjson` | Objeto Literal | Mantém propriedades e métodos diretamente em um objeto JavaScript. |

---

## Classe `IEclss`

Na implementação utilizando classe, os dados são armazenados em atributos privados:

```javascript
#numero;
#estado;
#dataRegistro;
#pj;
```

O acesso ocorre por meio de métodos como:

```javascript
setNumero()
getNumero()
setEstado()
getEstado()
```

Para criar um objeto a partir da classe, utiliza-se o operador `new`:

```javascript
const ieC = new IEclss();
```

Essa abordagem aplica diretamente o conceito de **encapsulamento**, pois os atributos declarados com `#` não podem ser acessados diretamente fora da classe.

---

## Função Fábrica `IEfunc()`

Na função fábrica, os dados são armazenados dentro do escopo da função:

```javascript
let dados = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null
};
```

A função retorna somente os métodos que poderão ser utilizados externamente:

```javascript
return {
    setNumero,
    getNumero,
    setEstado,
    getEstado,
    setDataRegistro,
    getDataRegistro,
    setPJ,
    getPJ
};
```

Para criar uma nova estrutura, basta executar a função:

```javascript
const ieF = IEfunc();
```

Nesse caso, não é necessário utilizar `new`.

Os métodos retornados continuam acessando o objeto `dados`, mesmo após o término da execução da função. Esse comportamento está relacionado ao conceito de **closure**.

---

## Objeto Literal `IEjson`

Na terceira implementação, propriedades e métodos são definidos diretamente dentro de um objeto:

```javascript
const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null
};
```

Não é necessário utilizar `new` nem executar uma função para obter o objeto.

Ele pode ser utilizado diretamente:

```javascript
IEjson.setNumero("333");
IEjson.setEstado("MG");
```

Diferentemente das duas abordagens anteriores, as propriedades do objeto literal permanecem diretamente acessíveis.

Por exemplo:

```javascript
IEjson.numero
```

Por esse motivo, essa implementação não oferece o mesmo nível de encapsulamento proporcionado pelos atributos privados da classe ou pelo escopo interno da função fábrica.

---

## 📊 Comparação das Abordagens

| Característica | `IEclss` | `IEfunc()` | `IEjson` |
|----------------|:---------:|:----------:|:--------:|
| Utiliza classe | Sim | Não | Não |
| Utiliza `new` | Sim | Não | Não |
| Possui métodos | Sim | Sim | Sim |
| Protege os dados internos | Sim | Sim | Não |
| Utiliza atributos privados `#` | Sim | Não | Não |
| Utiliza escopo para proteger dados | Não | Sim | Não |
| Utiliza `this` | Sim | Não | Sim |
| Pode gerar diferentes objetos a partir da estrutura | Sim | Sim | Não diretamente |
| Exportação utilizada no exemplo | Padrão (`default`) | Nomeada | Nomeada |

As três abordagens demonstram que JavaScript oferece diferentes maneiras de organizar dados e comportamentos.

A escolha da estratégia dependerá das características e necessidades da aplicação.

---

## Exportação das Estruturas

Outro aspecto importante deste exemplo é a utilização de diferentes formas de exportação.

A classe `IEclss` foi definida como a exportação padrão:

```javascript
export default class IEclss {
    // ...
}
```

Já `IEfunc()` e `IEjson` utilizam exportações nomeadas:

```javascript
export function IEfunc() {
    // ...
}

export const IEjson = {
    // ...
};
```

Dessa forma, o mesmo módulo `IE.mjs` disponibiliza uma **exportação padrão** e também **exportações nomeadas**.

Posteriormente, essas estruturas poderão ser importadas utilizando uma única instrução:

```javascript
import IEclss, { IEfunc, IEjson } from "./IE.mjs";
```

Nesse comando:

- `IEclss` corresponde à exportação padrão;
- `IEfunc` e `IEjson` correspondem às exportações nomeadas;
- as chaves `{ }` permitem selecionar as exportações nomeadas que serão importadas.

Esse recurso também permite observar o uso da **desestruturação na sintaxe de importação**, selecionando os recursos nomeados disponibilizados pelo módulo.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Classe | Estrutura utilizada para definir atributos e métodos que poderão ser utilizados na criação de objetos. |
| Função Fábrica | Função que cria e retorna objetos sem a necessidade do operador `new`. |
| Objeto Literal | Objeto criado diretamente utilizando a sintaxe `{ }`. |
| Encapsulamento | Controle do acesso aos dados internos de uma estrutura. |
| Closure | Permite que funções mantenham acesso ao escopo em que foram criadas. |
| `new` | Operador utilizado para criar uma instância a partir de uma classe. |
| `this` | Referência ao objeto associado à execução de um método. |
| `export default` | Define a exportação padrão de um módulo. |
| Exportação nomeada | Permite disponibilizar diferentes recursos de um mesmo módulo utilizando seus respectivos nomes. |
| `import` | Importa recursos disponibilizados por outro módulo. |
| `{ IEfunc, IEjson }` | Sintaxe utilizada para selecionar as exportações nomeadas durante a importação. |
| ESM | Sistema de módulos do JavaScript baseado em `import` e `export`. |

---

## 💡 Dicas do Professor

> **Não existe apenas uma forma de criar objetos em JavaScript.**
>
> Classes, funções fábrica e objetos literais permitem organizar dados e comportamentos de maneiras diferentes. Compreender essas abordagens ajuda a escolher a estrutura mais adequada para cada problema.

> **Compare como os dados são protegidos.**
>
> `IEclss` utiliza atributos privados com `#`, enquanto `IEfunc()` utiliza o escopo da função. Em `IEjson`, as propriedades permanecem diretamente acessíveis.

> **Observe a diferença entre exportação padrão e exportação nomeada.**
>
> A exportação padrão é importada sem chaves. As exportações nomeadas são selecionadas utilizando `{ }`.

> **A mesma estrutura pode evoluir ao longo do desenvolvimento.**
>
> O atributo ou propriedade `pj` foi mantido nas três implementações. Posteriormente, em um Exercício Integrador, será possível construir a classe `PJ` e aprimorar essa associação utilizando validação com `instanceof`.

---
## Utilização das Estruturas – Arquivo `usaIE.mjs`

Após implementar as três formas de representação da Inscrição Estadual, podemos utilizá-las em um segundo arquivo.

O exemplo a seguir demonstra como importar e utilizar:

- a classe `IEclss`;
- a função fábrica `IEfunc()`;
- o objeto literal `IEjson`.

Além disso, o exemplo permite comparar as diferentes formas de criação e utilização dessas estruturas.

---

## 💻 Código Completo

**Arquivo:** `usaIE.mjs`

```javascript
import IEclss, { IEfunc, IEjson } from './IE.mjs';

const agora = new Date();

const ieC = new IEclss();

ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(agora);

console.log(`(Classe) Número: ${ieC.getNumero()}`);
console.log(`(Classe) Estado: ${ieC.getEstado()}`);
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

const ieF = IEfunc();

ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(agora);

console.log(`(Factory) Número: ${ieF.getNumero()}`);
console.log(`(Factory) Estado: ${ieF.getEstado()}`);
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(agora);

console.log(`(Objeto Literal) Número: ${IEjson.getNumero()}`);
console.log(`(Objeto Literal) Estado: ${IEjson.getEstado()}`);
console.log(`(Objeto Literal) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');

console.log(
    `Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` +
    `Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` +
    `Objeto Literal: ${IEjson.getNumero()}-${IEjson.getEstado()}`
);
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–03**

```javascript
import IEclss, { IEfunc, IEjson } from './IE.mjs';

const agora = new Date();
```

A primeira linha importa as três estruturas definidas anteriormente no arquivo `IE.mjs`.

Observe que:

```javascript
IEclss
```

é importada fora das chaves porque corresponde à **exportação padrão** do módulo.

Já:

```javascript
{ IEfunc, IEjson }
```

correspondem às **exportações nomeadas**.

Essa instrução demonstra, em uma única linha, a utilização conjunta de uma exportação padrão e de exportações nomeadas.

Em seguida, é criado um objeto da classe nativa `Date`:

```javascript
const agora = new Date();
```

Esse objeto será utilizado como data de registro nas três implementações.

---

### **Linhas 05–09**

```javascript
const ieC = new IEclss();

ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(agora);
```

Nesse bloco é criada uma instância da classe `IEclss`.

Como `IEclss` é uma classe, utiliza-se o operador:

```javascript
new
```

O objeto criado é armazenado na constante `ieC`.

Em seguida, os métodos `setNumero()`, `setEstado()` e `setDataRegistro()` são utilizados para configurar os dados da Inscrição Estadual.

---

### **Linhas 11–14**

```javascript
console.log(`(Classe) Número: ${ieC.getNumero()}`);
console.log(`(Classe) Estado: ${ieC.getEstado()}`);
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');
```

Os métodos `getNumero()`, `getEstado()` e `getDataRegistro()` recuperam os valores armazenados no objeto `ieC`.

Para apresentar a data, é utilizado:

```javascript
toLocaleString('pt-BR')
```

Esse método converte a representação da data e hora para uma forma adequada à configuração regional informada.

Neste exemplo, utiliza-se:

```text
pt-BR
```

correspondente ao português do Brasil.

As informações são inseridas nas strings utilizando **Template Literals** e a sintaxe:

```javascript
${...}
```

---

### **Linhas 16–20**

```javascript
const ieF = IEfunc();

ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(agora);
```

Neste bloco é utilizada a função fábrica `IEfunc()`.

Diferentemente da classe, não utilizamos o operador `new`.

A função é executada diretamente:

```javascript
IEfunc()
```

e o objeto retornado é armazenado em:

```javascript
ieF
```

Em seguida, os métodos disponibilizados pela função fábrica são utilizados para configurar os dados.

---

### **Linhas 22–25**

```javascript
console.log(`(Factory) Número: ${ieF.getNumero()}`);
console.log(`(Factory) Estado: ${ieF.getEstado()}`);
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');
```

Os métodos retornados pela função fábrica permitem recuperar os dados armazenados no escopo interno de `IEfunc()`.

Embora `dados` não possa ser acessado diretamente, os métodos `getNumero()`, `getEstado()` e `getDataRegistro()` continuam tendo acesso às informações armazenadas.

Esse comportamento está relacionado ao conceito de **closure** apresentado anteriormente.

---

### **Linhas 27–29**

```javascript
IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(agora);
```

Nesse trecho é utilizado diretamente o objeto literal `IEjson`.

Não é necessário utilizar:

```javascript
new
```

nem executar uma função para criar o objeto.

Como `IEjson` já foi criado e exportado pelo módulo `IE.mjs`, podemos utilizar diretamente seus métodos.

Os valores definidos nesse exemplo são:

- número `333`;
- estado `MG`;
- a data armazenada em `agora`.

---

### **Linhas 31–34**

```javascript
console.log(`(Objeto Literal) Número: ${IEjson.getNumero()}`);
console.log(`(Objeto Literal) Estado: ${IEjson.getEstado()}`);
console.log(`(Objeto Literal) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`);
console.log('');
```

Os métodos `getNumero()`, `getEstado()` e `getDataRegistro()` recuperam os valores armazenados no objeto literal.

Novamente, `toLocaleString('pt-BR')` é utilizado para apresentar a data considerando a configuração regional brasileira.

Observe que o resultado obtido é semelhante ao das duas implementações anteriores, embora a estrutura utilizada para representar os dados seja diferente.

---

### **Linhas 36–41**

```javascript
console.log(
    `Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` +
    `Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` +
    `Objeto Literal: ${IEjson.getNumero()}-${IEjson.getEstado()}`
);
```

O último bloco apresenta um resumo contendo informações das três implementações.

São utilizadas **Template Literals** para inserir valores diretamente nas strings:

```javascript
${ieC.getNumero()}
```

Além disso, o operador `+` é utilizado para concatenar os diferentes trechos que formam a mensagem final.

A saída seguirá uma estrutura semelhante a:

```text
Resumo → Classe: 111-SP | Factory: 222-RJ | Objeto Literal: 333-MG
```

Esse resultado evidencia que as três abordagens conseguem representar informações semelhantes, embora utilizem estratégias diferentes para organizar os dados e os métodos.

---

## 📌 Conceitos-Chave Aplicados

| Conceito | Explicação |
|----------|------------|
| `import` | Importa recursos disponibilizados por outro módulo. |
| Importação padrão | Permite importar o recurso definido utilizando `export default`. |
| Importação nomeada | Utiliza `{ }` para selecionar recursos exportados pelo módulo. |
| `new` | Cria uma instância a partir de uma classe. |
| Factory Function | Função executada diretamente para criar e retornar um objeto. |
| Objeto Literal | Objeto que pode ser utilizado diretamente após sua criação. |
| `Date` | Classe nativa utilizada para criar objetos que representam datas. |
| `toLocaleString()` | Converte a representação de data e hora considerando uma configuração regional. |
| Template Literal | Permite inserir expressões dentro de strings utilizando `${...}`. |
| Closure | Permite que os métodos da função fábrica continuem acessando seus dados internos. |

---

## 💡 Dicas do Professor

> **Observe as diferentes formas de obtenção dos objetos.**
>
> Para `IEclss`, utilizamos `new IEclss()`. Para a função fábrica, utilizamos `IEfunc()`. Já `IEjson` pode ser utilizado diretamente.

> **Uma única instrução `import` pode combinar diferentes formas de importação.**
>
> Em `import IEclss, { IEfunc, IEjson } from './IE.mjs'`, a classe corresponde à exportação padrão, enquanto os elementos entre `{ }` correspondem às exportações nomeadas.

> **Compare o resultado, mas também observe a implementação.**
>
> As três abordagens produzem resultados semelhantes, porém utilizam estratégias diferentes para organizar e proteger seus dados.

---
---------------------

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| ESM (ECMAScript Modules) | Sistema moderno de módulos do JavaScript baseado no uso de `import` e `export`. |
| `export default` | Define um recurso como a exportação padrão de um módulo. |
| Exportação nomeada | Permite disponibilizar diferentes recursos de um mesmo módulo utilizando seus respectivos nomes. |
| `import` | Permite utilizar em um módulo recursos exportados por outro arquivo. |
| Importação nomeada | Utiliza `{ }` para selecionar recursos exportados pelo módulo. |
| Classe | Estrutura que reúne atributos e métodos e pode ser utilizada para criar objetos com `new`. |
| Função Fábrica | Função que cria e retorna objetos sem utilizar o operador `new`. |
| Objeto Literal | Objeto criado diretamente utilizando a sintaxe `{ }`, podendo conter propriedades e métodos. |
| JSON | Formato textual utilizado para representação e troca de dados. Apesar da semelhança visual, não deve ser confundido com um objeto literal JavaScript. |
| Encapsulamento | Estratégia utilizada para controlar o acesso aos dados de uma estrutura. |
| `#atributo` | Define um atributo privado em uma classe JavaScript. |
| Closure | Permite que funções mantenham acesso ao escopo em que foram criadas. |
| `this` | Referência ao objeto associado à execução de um método. |
| `new` | Operador utilizado para criar uma instância a partir de uma classe. |
| `Date` | Classe nativa do JavaScript utilizada para representar datas. |
| `instanceof` | Verifica se um objeto é uma instância de determinada classe. |
| `toLocaleString()` | Permite apresentar valores, como datas e horas, considerando uma configuração regional. |
| Template Literal | Permite criar strings com expressões incorporadas utilizando a sintaxe `${...}`. |

---------------------

## 💡 Dicas do Professor

> **Compare as diferentes formas de criação dos objetos.**
>
> Uma classe utiliza `new` para criar suas instâncias. Uma função fábrica é executada diretamente e retorna um novo objeto. Um objeto literal, por sua vez, já é criado diretamente por meio da sintaxe `{ }`.

> **Observe como o encapsulamento pode ser implementado de maneiras diferentes.**
>
> Na classe `IEclss`, os atributos são protegidos utilizando `#`. Na função fábrica `IEfunc()`, os dados permanecem protegidos dentro do escopo da função. Já no objeto literal `IEjson`, as propriedades permanecem diretamente acessíveis.

> **Exportação padrão e exportações nomeadas podem coexistir no mesmo módulo.**
>
> A classe `IEclss` é disponibilizada como exportação padrão, enquanto `IEfunc()` e `IEjson` são disponibilizados como exportações nomeadas.

> **Observe a sintaxe utilizada na importação.**
>
> Na instrução:
>
> ```javascript
> import IEclss, { IEfunc, IEjson } from './IE.mjs';
> ```
>
> `IEclss` corresponde à exportação padrão, enquanto `IEfunc` e `IEjson` correspondem às exportações nomeadas.

> **Objeto literal e JSON são conceitos relacionados, mas diferentes.**
>
> Um objeto literal pertence à linguagem JavaScript e pode possuir propriedades e métodos. JSON é utilizado para representação e troca de dados e não possui métodos.

> **Utilize `instanceof` quando precisar verificar o tipo de um objeto.**
>
> Neste capítulo, esse recurso foi utilizado com a classe nativa `Date`. Posteriormente, a mesma estratégia poderá ser aplicada a classes desenvolvidas pelo próprio programador.

---------------------

## 💡 Resumo Final

Neste capítulo foram apresentadas diferentes formas de representar dados e comportamentos em JavaScript.

Inicialmente, a Inscrição Estadual foi implementada por meio da classe `IEclss`, utilizando atributos privados e métodos públicos para aplicar o conceito de encapsulamento.

Em seguida, a mesma estrutura foi representada utilizando a função fábrica `IEfunc()`. Nessa abordagem, os dados permanecem dentro do escopo da função e são acessados pelos métodos retornados, demonstrando a utilização de **closure**.

A terceira implementação utilizou o objeto literal `IEjson`, permitindo reunir propriedades e métodos diretamente em uma estrutura JavaScript. Essa abordagem também possibilitou diferenciar um **objeto literal JavaScript** do formato **JSON**, utilizado para representação e troca de dados.

Também foram estudadas diferentes formas de modularização utilizando **ES Modules (ESM)**. A classe `IEclss` foi disponibilizada como exportação padrão, enquanto `IEfunc()` e `IEjson` utilizaram exportações nomeadas.

No arquivo `usaIE.mjs`, as três implementações foram importadas e utilizadas em conjunto, permitindo comparar suas formas de criação, acesso aos dados e utilização.

Além disso, foram utilizados recursos da linguagem como `Date`, `instanceof`, `toLocaleString()`, Template Literals e diferentes formas de importação e exportação.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender diferentes formas de representar objetos em JavaScript;
- criar objetos utilizando classes;
- utilizar atributos privados para implementar encapsulamento;
- criar objetos utilizando funções fábrica;
- compreender o papel de closures no encapsulamento de dados;
- criar e utilizar objetos literais;
- diferenciar um objeto literal JavaScript de uma representação JSON;
- compreender o funcionamento básico dos ES Modules (ESM);
- utilizar exportação padrão com `export default`;
- utilizar exportações nomeadas;
- importar recursos utilizando `import`;
- reconhecer a diferença entre importação padrão e importação nomeada;
- criar objetos da classe nativa `Date`;
- validar objetos utilizando `instanceof`;
- formatar datas utilizando `toLocaleString()`;
- utilizar Template Literals para construir strings;
- comparar diferentes estratégias para organizar dados e comportamentos em JavaScript.

---------------------

## 📚 Exercícios de Fixação

- 

---------------------