# 📘 Orientação a Objetos -- Herança, Encapsulamento e Operadores Lógicos

## Introdução

Observe o seguinte código de exemplo relativo à declaração da classe
**Aluno**, que é uma subclasse da classe **PF**. Este exemplo aprofunda
os conceitos de herança, encapsulamento com validação e o uso de
operadores lógicos em JavaScript.

------------------------------------------------------------------------

## 💻 Código Completo

**Arquivo:** `Aluno.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
// Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de Herança, bem como
// encapsulamento adicionados de condicionais utilizando operadores lógicos

const PF = require('./PF');

class Aluno extends PF {

  #matricula;
  #curso;

  setMatricula(matricula) {
    if (matricula) {
      if ((matricula.length === 8) &&
          (matricula.startsWith("20"))) {
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    if (curso) {
      if ((curso === 'ADS') || (curso === 'SI')) {
        this.#curso = curso;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getCurso() {
    return this.#curso;
  }

}

module.exports = Aluno;
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações Linha a Linha

### Linhas 01--04

Apresentam informações gerais sobre o arquivo, seu objetivo e
localização.

### Linha 05

Importa a classe `PF`, permitindo que `Aluno` herde todos os métodos
públicos já implementados.

### Linhas 06--08

Declaram a classe `Aluno`, especializada da classe `PF`, além dos
atributos privados `#matricula` e `#curso`.

### Linhas 09--21

Implementam o método `setMatricula()`, que utiliza o operador lógico
`&&` para validar simultaneamente:

- matrícula com exatamente oito caracteres;
- matrícula iniciando com `"20"`.

### Linhas 22--24

Método `getMatricula()`, responsável por retornar a matrícula
armazenada.

### Linhas 25--37

Implementam o método `setCurso()`, utilizando o operador lógico `||`
para aceitar apenas os cursos `ADS` ou `SI`.

### Linhas 38--40

Método `getCurso()`, responsável por retornar o curso armazenado.

### Linhas 41--42

Encerram a classe e exportam o módulo utilizando `module.exports`.

------------------------------------------------------------------------

## 📌 Conceitos-Chave Envolvidos

  Conceito           Explicação

  ------------------ ----------------------------------------------

  `extends`          Herança entre classes.
  Encapsulamento     Proteção de atributos privados.
  `#atributo`        Campo privado da classe.
  `&&`               Todas as condições devem ser verdadeiras.
  `\|\|`             Pelo menos uma condição deve ser verdadeira.
  `startsWith()`     Verifica o início de uma string.
  `length`           Quantidade de caracteres da string.
  Getter / Setter    Métodos de acesso aos atributos privados.
  `module.exports`   Exporta a classe.
  `require()`        Importa módulos JavaScript.

------------------------------------------------------------------------

## 💡 Dicas do Professor

- Utilize `&&` quando todas as condições forem obrigatórias.
- Utilize `||` quando qualquer condição puder ser aceita.
- Valide sempre os dados antes de armazená-los.
- Aproveite a herança para evitar duplicação de código.

------------------------------------------------------------------------

## Utilização das Classes -- Arquivo `usaPessoas.js`

Adicione o trecho abaixo ao final do arquivo para testar a classe
`Aluno`.

```javascript
 console.log("==== Objeto Aluno =====");
 const Aluno = require('./pessoas/Aluno');
 const w = new Aluno();

 resposta = w.setNome('Pedro');
 console.log(resposta);

 if (resposta) {
   console.log(w.getNome());
 } else {
   console.log("Nome vazio");
 }

 resposta = w.setMatricula('20123456');
 console.log(resposta);

 if (resposta) {
   console.log(w.getMatricula());
 } else {
   console.log("Matrícula inválida");
 }

 resposta = w.setCurso('SIS');
 console.log(resposta);

 if (resposta) {
   console.log(w.getCurso());
 } else {
   console.log("Curso inválido");
 }
```

------------------------------------------------------------------------

## 📘 Comentários e Explicações

- O objeto `Aluno` herda todos os métodos públicos das classes `PF` e
  `Pessoa`.
- `setNome()` utiliza o método herdado da classe `Pessoa`.
- `setMatricula()` valida a matrícula utilizando o operador `&&`.
- `setCurso()` aceita apenas `ADS` ou `SI` utilizando o operador `||`.
- Os retornos `true` e `false` controlam a execução das mensagens
  apresentadas ao usuário.

------------------------------------------------------------------------

## 💡 Resumo Final

Nesta apostila foram estudados:

- herança em múltiplos níveis (`Pessoa → PF → Aluno`);
- encapsulamento com atributos privados;
- operadores lógicos `&&` e `||`;
- validação de dados;
- reutilização de código por herança;
- testes utilizando objetos e estruturas condicionais.

------------------------------------------------------------------------
<!--
## 📚 Exercícios de Fixação

Resolva o exercício prático **Herança, Sobrescrita e Validação de
Dados**, aplicando os conceitos estudados nesta apostila.
-->