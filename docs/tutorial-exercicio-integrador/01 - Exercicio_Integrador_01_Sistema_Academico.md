# 📚 Exercício Integrador 01 -- Sistema Acadêmico

## 🎯 Contexto do Problema

Uma instituição de ensino está desenvolvendo um sistema acadêmico para
gerenciar o cadastro de pessoas, alunos e professores.

Até este momento foram estudados conceitos de programação estruturada,
modularização e programação orientada a objetos. Nesta atividade, você
deverá integrar todos esses conhecimentos em um único projeto.

O sistema deverá validar as informações antes de armazená-las e
reutilizar funções de uma biblioteca JavaScript sempre que possível.

------------------------------------------------------------------------

# 📖 Conteúdos Trabalhados

-   Variáveis e funções
-   Módulos (`require` / `module.exports`)
-   Classes e objetos
-   Construtores
-   Encapsulamento
-   Getters e Setters
-   Herança
-   Sobrescrita de métodos
-   Operadores de comparação
-   Operadores lógicos
-   Reutilização de código

------------------------------------------------------------------------

# 🎯 Objetivos de Aprendizagem

-   Organizar um projeto em módulos;
-   Reutilizar funções por meio de bibliotecas;
-   Implementar classes e herança;
-   Aplicar encapsulamento corretamente;
-   Utilizar validações em métodos `set`;
-   Empregar operadores lógicos e de comparação.

------------------------------------------------------------------------

# 📁 Estrutura Esperada do Projeto

``` text
projeto/
│
├── biblioteca/
│   └── util.js
├── pessoas/
│   ├── Pessoa.js
│   ├── Aluno.js
│   └── Professor.js
└── main.js
```

------------------------------------------------------------------------

# 🧩 Parte 1 -- Biblioteca de Validação

Crie o arquivo `util.js` contendo as funções:

-   `validarEmail(email)`
-   `validarMatricula(matricula)`
-   `validarCPF(cpf)`

Cada função deverá retornar apenas `true` ou `false`.

------------------------------------------------------------------------

# 🧩 Parte 2 -- Classe Pessoa

Implemente a classe `Pessoa` com os atributos privados `#nome` e
`#email`.

Implemente os métodos:

-   `setNome()`
-   `getNome()`
-   `setEmail()`
-   `getEmail()`

O método `setEmail()` **deverá obrigatoriamente utilizar a função de
validação da biblioteca**.

Exemplo:

``` javascript
const util = require('../biblioteca/util');

setEmail(email){
    if(util.validarEmail(email)){
        this.#email = email;
        return true;
    }
    return false;
}
```

> A biblioteca é responsável apenas pela validação. O método
> `setEmail()` permanece responsável por alterar o atributo `#email`,
> preservando o encapsulamento.

------------------------------------------------------------------------

# 🧩 Parte 3 -- Classe Aluno

Herde de `Pessoa`.

Implemente `#matricula`, `setMatricula()` e `getMatricula()`.

Utilize a biblioteca para validar a matrícula.

------------------------------------------------------------------------

# 🧩 Parte 4 -- Classe Professor

Herde de `Pessoa`.

Implemente `#disciplina`, `setDisciplina()` e `getDisciplina()`.

Sobrescreva `setEmail()` aceitando apenas e-mails terminados em
`.edu.br`, reutilizando `super.setEmail(email)`.

------------------------------------------------------------------------

# 🧪 Parte 5 -- Arquivo de Testes

No arquivo `main.js`:

1.  Cadastre duas pessoas.
2.  Cadastre dois alunos.
3.  Cadastre dois professores.
4.  Utilize dados válidos e inválidos.
5.  Exiba um relatório final.

------------------------------------------------------------------------

# ⭐ Desafio Extra 1

Melhore `validarEmail()` para aceitar apenas e-mails contendo `@` e
terminados em `.com` ou `.edu.br`.

------------------------------------------------------------------------

# ⭐ Desafio Extra 2

Implemente a função `mostrarDados(objeto)` para exibir dados de Pessoa,
Aluno e Professor sem duplicar código.

------------------------------------------------------------------------

# 📌 Questões Teóricas

1.  Qual a diferença entre módulo e classe?
2.  Por que utilizar encapsulamento?
3.  Qual a vantagem de reutilizar funções em uma biblioteca?
4.  Para que serve `super`?
5.  Qual a diferença entre herança e sobrescrita?
6.  Por que a validação do e-mail deve ocorrer dentro de `setEmail()`
    utilizando a biblioteca?
7.  Em quais situações utilizar `&&` e `||`?

------------------------------------------------------------------------

# 📌 Critérios de Avaliação

  Critério                   Pontos
  ------------------------- --------
  Biblioteca de validação     1,0
  Classe Pessoa               1,5
  Encapsulamento correto      1,5
  Classe Aluno                1,5
  Classe Professor            1,5
  Sobrescrita                 1,0
  Arquivo de testes           1,0
  Questões teóricas           1,0

**Total: 10,0 pontos**

------------------------------------------------------------------------

# 💡 Dicas

-   Desenvolva uma classe por vez.
-   Teste cada método logo após implementá-lo.
-   Utilize `console.log()` para verificar os resultados.
-   Reutilize a biblioteca sempre que possível.
-   Preserve o encapsulamento: somente os métodos da classe devem
    alterar seus atributos privados.
