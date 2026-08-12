# 📚 Exercício Integrador 02 – Pessoa Jurídica, Inscrição Estadual e ES Modules

## 🎯 Contexto do Problema

Uma empresa deseja desenvolver um pequeno sistema para organizar os dados de **Pessoas Jurídicas** e suas respectivas **Inscrições Estaduais**.

Nos conteúdos anteriores, foram estudados conceitos como classes, objetos, encapsulamento, herança, relacionamentos entre classes e modularização. Mais recentemente, foram apresentadas diferentes formas de representar objetos em JavaScript utilizando **classes**, **funções fábrica** e **objetos literais**, além do padrão de módulos **ESM (ECMAScript Modules)**.

Nesta atividade, você deverá integrar esses conhecimentos em um único projeto.

A classe `Pessoa` já foi desenvolvida anteriormente e deverá ser **reutilizada**. A partir dela, será criada a classe `PJ`, responsável por representar uma Pessoa Jurídica.

Em seguida, as estruturas responsáveis pela Inscrição Estadual deverão ser evoluídas para aceitar apenas objetos válidos da classe `PJ`.

---

# 📖 Conteúdos Trabalhados

* Classes e objetos
* Encapsulamento
* Getters e Setters
* Herança
* Relacionamentos entre objetos
* Validação utilizando `instanceof`
* Reutilização de código
* ES Modules (ESM)
* `import`
* `export`
* `export default`
* Exportações nomeadas
* Classes
* Funções Fábrica
* Closure
* Objetos Literais
* Classe nativa `Date`

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade, você deverá ser capaz de:

* reutilizar uma classe já existente;
* implementar herança entre classes;
* aplicar encapsulamento utilizando atributos privados;
* estabelecer relacionamentos entre objetos;
* validar objetos utilizando `instanceof`;
* organizar uma aplicação utilizando módulos;
* utilizar exportações padrão e nomeadas;
* importar diferentes recursos de um mesmo módulo;
* comparar classes, funções fábrica e objetos literais;
* integrar diferentes estruturas em uma única aplicação.

---

# 📁 Estrutura Esperada do Projeto

Organize sua solução conforme a estrutura abaixo:

```text
projeto/
│
├── pessoas/
│   ├── Pessoa.js
│   └── PJ.mjs
│
├── objetos/
│   └── IE.mjs
│
└── main.mjs
```

> A classe `Pessoa` já existe e deverá ser reutilizada. Caso seja necessário para compatibilidade com ESM, adapte apenas sua forma de exportação/importação, **sem alterar sua responsabilidade ou os métodos já implementados**.

---

# 🧩 Parte 1 – Classe `PJ`

Crie a classe:

```javascript
PJ
```

A classe deverá **herdar da classe `Pessoa`**.

Implemente os seguintes atributos privados:

```text
#cnpj
#razaoSocial
```

Implemente os métodos:

```javascript
setCNPJ()
getCNPJ()
setRazaoSocial()
getRazaoSocial()
```

Os métodos `set` deverão retornar:

```javascript
true
```

quando o valor for aceito, e:

```javascript
false
```

quando o valor informado for inválido.

A classe deverá ser exportada para utilização em outros módulos.

---

# 🧩 Parte 2 – Reutilizando a Classe `Pessoa`

A classe `PJ` deverá reutilizar os métodos herdados de `Pessoa`.

No arquivo de testes, um objeto `PJ` deverá utilizar, além de seus próprios métodos:

```javascript
setNome()
getNome()
setEmail()
getEmail()
```

Não duplique esses métodos dentro de `PJ`.

> O objetivo desta etapa é reforçar que a herança permite reutilizar comportamentos já implementados na superclasse.

---

# 🧩 Parte 3 – Evoluindo a Classe `IEclss`

No arquivo:

```text
IE.mjs
```

importe a classe `PJ`.

Em seguida, altere o método:

```javascript
setPJ(pj)
```

para aceitar **somente objetos da classe `PJ`**.

A validação deverá utilizar:

```javascript
instanceof
```

A estrutura esperada deverá seguir a seguinte lógica:

```javascript
if (pj instanceof PJ) {
    // realizar associação
}
```

O método deverá retornar `true` quando a associação for válida e `false` caso contrário.

O método:

```javascript
getPJ()
```

deverá continuar permitindo recuperar o objeto associado.

---

# 🧩 Parte 4 – Evoluindo a Função Fábrica `IEfunc()`

A função fábrica `IEfunc()` também possui uma referência:

```javascript
pj
```

Altere o método:

```javascript
setPJ(pj)
```

para validar se o objeto recebido pertence à classe `PJ`.

Utilize novamente:

```javascript
instanceof
```

A função fábrica deverá continuar protegendo seus dados internos por meio do escopo da função.

---

# 🧩 Parte 5 – Evoluindo o Objeto Literal `IEjson`

Realize a mesma alteração no objeto literal:

```javascript
IEjson
```

O método:

```javascript
setPJ(pj)
```

deverá aceitar somente objetos válidos da classe `PJ`.

Apesar do nome `IEjson`, lembre-se de que essa estrutura representa um **objeto literal JavaScript**, e não um documento JSON.

---

# 🧩 Parte 6 – Exportações e Importações

O arquivo `IE.mjs` deverá disponibilizar:

* a classe `IEclss`;
* a função fábrica `IEfunc()`;
* o objeto literal `IEjson`.

Utilize:

* uma **exportação padrão**;
* exportações **nomeadas**.

No arquivo `main.mjs`, importe as três estruturas utilizando uma única instrução.

Exemplo de organização:

```javascript
import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
```

Importe também a classe `PJ`.

---

# 🧪 Parte 7 – Arquivo de Testes

No arquivo:

```text
main.mjs
```

realize os seguintes testes:

1. crie dois objetos da classe `PJ`;
2. atribua nome, e-mail, CNPJ e razão social;
3. crie um objeto `Date`;
4. crie uma Inscrição Estadual utilizando `IEclss`;
5. crie outra Inscrição Estadual utilizando `IEfunc()`;
6. configure o objeto `IEjson`;
7. associe objetos `PJ` às três implementações de IE;
8. recupere os objetos relacionados utilizando `getPJ()`;
9. exiba os dados utilizando `console.log()`.

---

# 🧪 Parte 8 – Testando o `instanceof`

Além dos testes válidos, tente associar um objeto que **não seja uma instância de `PJ`**.

Por exemplo:

```javascript
const objetoInvalido = {
    nome: 'Empresa Inválida'
};
```

Tente utilizar esse objeto nos métodos:

```javascript
setPJ()
```

das três implementações.

O resultado esperado deverá ser:

```text
false
```

Depois associe um objeto verdadeiro da classe `PJ`.

O resultado esperado deverá ser:

```text
true
```

---

# 🧪 Parte 9 – Relatório Final

Utilize `console.log()` para apresentar um relatório contendo, no mínimo:

```text
=== Pessoa Jurídica ===

Nome:
E-mail:
CNPJ:
Razão Social:

=== Inscrição Estadual ===

Número:
Estado:
Data de Registro:
Pessoa Jurídica:
```

Repita a consulta utilizando:

* `IEclss`;
* `IEfunc()`;
* `IEjson`.

Para apresentar a data, utilize:

```javascript
toLocaleString('pt-BR')
```

---

# ⭐ Desafio Extra 1

Implemente uma validação no método:

```javascript
setCNPJ()
```

para aceitar apenas valores com uma quantidade de caracteres previamente definida por você.

O método deverá continuar retornando apenas:

```javascript
true
```

ou:

```javascript
false
```

---

# ⭐ Desafio Extra 2

Crie dois objetos diferentes da classe `PJ` e associe cada um a uma implementação diferente de Inscrição Estadual.

Depois, utilize:

```javascript
getPJ()
```

para recuperar o objeto relacionado e exibir sua razão social.

---

# ⭐⭐ Desafio Avançado

Crie uma função chamada:

```javascript
mostrarIE(ie)
```

Essa função deverá receber uma das estruturas de Inscrição Estadual e apresentar:

```text
Número
Estado
Data de Registro
Pessoa Jurídica relacionada
```

Teste a função utilizando:

```javascript
IEclss
IEfunc()
IEjson
```

Observe se é possível reutilizar a mesma função para as três implementações.

---

# 📌 Questões Teóricas

1. Qual a vantagem de fazer `PJ` herdar da classe `Pessoa`?

2. Por que não devemos copiar para `PJ` os métodos já implementados em `Pessoa`?

3. Qual a finalidade do operador `instanceof` no método `setPJ()`?

4. Qual a diferença entre:

```javascript
if (pj)
```

e:

```javascript
if (pj instanceof PJ)
```

5. Qual a diferença entre a classe `IEclss` e a função fábrica `IEfunc()`?

6. Como a função fábrica protege seus dados internos?

7. Qual a diferença entre o objeto literal `IEjson` e um documento JSON?

8. Qual a diferença entre exportação padrão e exportação nomeada?

9. Por que `IEclss` utiliza `new`, enquanto `IEfunc()` não utiliza?

10. Qual a vantagem de organizar as classes e estruturas em arquivos separados?

11. Como o relacionamento entre `IE` e `PJ` é representado no código?

12. Por que `instanceof Date` pode ser utilizado mesmo sem termos criado a classe `Date`?

---

# 📌 Critérios de Avaliação

| Critério                                | Pontos |
| --------------------------------------- | :----: |
| Classe `PJ` e herança de `Pessoa`       |   1,5  |
| Encapsulamento da classe `PJ`           |   1,0  |
| Reutilização dos métodos de `Pessoa`    |   1,0  |
| Validação com `instanceof PJ`           |   1,5  |
| Implementação das três estruturas de IE |   1,5  |
| Exportações e importações ESM           |   1,0  |
| Arquivo de testes e integração          |   1,5  |
| Questões teóricas                       |   1,0  |

**Total: 10,0 pontos**

---

# 💡 Dicas

* Reutilize a classe `Pessoa` já desenvolvida.
* Não duplique métodos herdados.
* Implemente e teste primeiro a classe `PJ`.
* Somente depois altere os métodos `setPJ()` das estruturas de IE.
* Utilize `instanceof` para impedir associações com objetos incompatíveis.
* Teste separadamente `IEclss`, `IEfunc()` e `IEjson`.
* Utilize `console.log()` para acompanhar cada etapa.
* Observe atentamente a diferença entre exportação padrão e exportação nomeada.
* Preserve o encapsulamento: os métodos devem ser responsáveis pela alteração dos dados internos.
