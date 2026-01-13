

# Orientação a Objetos – Visibilidade e Encapsulamento (Declaração e Uso)

Observe o seguinte código de exemplo relativo à declaração da classe **Aluno**, definição da visibilidade de atributos e métodos, bem como os objetivos do encapsulamento.

---

## 💻 Código Completo  
**Arquivo:** `Aluno.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
// Arquivo criado dentro de uma pasta /objetos/escola na raiz do projeto
// Objetivo do exemplo: demonstrar conceitos de visibilidade e encapsulamento

class Aluno {

  #matricula; // atributo privado
  #curso;     // atributo privado
  escola;     // atributo público

  setMatricula(matricula) {
    this.#matricula = matricula;
  }

  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    this.#curso = curso;
  }

  getCurso() {
    return this.#curso;
  }
}

module.exports = Aluno;
```

---

## 📘 Comentários e Explicações

### Classe `Aluno`
Representa um aluno com atributos públicos e privados, demonstrando **encapsulamento**.

### Atributos privados (`#`)
- `#matricula`
- `#curso`

São acessíveis **somente dentro da classe** (ES2022+).

### Atributo público
- `escola`

Pode ser acessado diretamente pelo objeto (`objeto.escola`).

### Getters e Setters
- `setMatricula()` / `getMatricula()`
- `setCurso()` / `getCurso()`

Controlam o acesso aos atributos privados, garantindo segurança e organização.

---

## 💻 Código Completo  
**Arquivo:** `usaAluno.js`

```javascript
// Arquivo criado em projeto no www.stackblitz.com denominado usaAluno.js
// Para executar: node ./objetos/usaAluno.js

const Aluno = require('./escola/Aluno');

const joao = new Aluno();

// joao.#matricula = 1234; // ERRO

joao.escola = "IFB";
joao.setMatricula(12345);
joao.setCurso("Programação de FrontEnd");

console.log(joao.getMatricula());
console.log(joao.getCurso());
console.log(`Escola : ${joao.escola}`);
```

---

## 📘 Comentários e Explicações

### Importação
```javascript
const Aluno = require('./escola/Aluno');
```
Importa a classe exportada no módulo.

### Instanciação
```javascript
const joao = new Aluno();
```

### Uso correto do encapsulamento
- Atributos privados **não podem** ser acessados diretamente
- O acesso ocorre por **métodos públicos**

### Saída esperada
- Matrícula: `12345`
- Curso: `"Programação de FrontEnd"`
- Escola: `"IFB"`

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|--------|-----------|
| class | Estrutura para criação de objetos |
| #atributo | Atributo privado (ES2022+) |
| Encapsulamento | Protege dados e controla acesso |
| Visibilidade | Público x Privado |
| set / get | Métodos de acesso |
| module.exports | Exportação de classe |
| require() | Importação de módulo |
| new | Criação de instância |
| Template string | Interpolação com `${}` |

---

## 💡 Dicas do Professor

- Use atributos privados para proteger dados sensíveis  
- Sempre acesse dados privados via **getters e setters**  
- ES2022+ introduziu `#` para atributos privados  
- Prefira **template strings** para concatenação

---

## 🔗 Links Complementares

- https://youtu.be/Ah4b0Cj1c6E
