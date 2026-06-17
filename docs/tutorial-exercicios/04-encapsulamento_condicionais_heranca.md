# 📚 Exercício de Fixação – Encapsulamento, Condicionais e Herança

## 🎯 Objetivo

Expandir o sistema desenvolvido na aula anterior aplicando:
- Encapsulamento
- Atributos privados
- Getters e Setters
- Condicionais
- Herança
- Instanciação de objetos

## Parte 1 – Classe Pessoa

Crie uma classe chamada `Pessoa`.

### Atributos

```javascript
#nome
#email
```

### Métodos

```javascript
setNome()
getNome()
setEmail()
getEmail()
```

### Regras

- `setNome()` deve retornar `true` quando o nome for válido.
- Deve retornar `false` quando estiver vazio.
- `setEmail()` deve seguir a mesma lógica.

---

## Parte 2 – Classe Aluno

Crie uma classe chamada `Aluno` que herde de `Pessoa`.

### Atributo

```javascript
#matricula
```

### Métodos

```javascript
setMatricula()
getMatricula()
```

---

## Parte 3 – Testes

Crie um arquivo chamado:

```javascript
usaAluno.js
```

### Teste 1

Criar uma Pessoa válida.

### Teste 2

Criar uma Pessoa inválida.

### Teste 3

Criar um Aluno válido.

### Teste 4

Criar um Aluno com dados inválidos.

---

## Desafio Extra

Modificar `setEmail()` para aceitar apenas emails contendo `@`.

---

## Desafio Avançado

Criar a classe `Professor` herdando de `Pessoa`.

Adicionar:

```javascript
#disciplina
```

Criar:

```javascript
setDisciplina()
getDisciplina()
```

---

## Critérios de Avaliação

| Item | Pontos |
|--------|---------|
| Classe Pessoa correta | 2,0 |
| Encapsulamento correto | 2,0 |
| Uso de condicionais | 2,0 |
| Classe Aluno utilizando herança | 2,0 |
| Arquivo de testes funcionando | 2,0 |

**Total: 10,0 pontos**
