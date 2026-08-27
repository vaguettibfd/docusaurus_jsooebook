# 📚 Exercício de Fixação 09 – Explorando a API ViaCEP e Evoluindo a Classe `Endereco`

## 🎯 Contexto do Problema

No capítulo anterior, a classe `Endereco` foi utilizada para consultar a API ViaCEP por meio do método assíncrono `setCep()`.

A implementação atual utiliza apenas alguns dos dados retornados pela API:

- CEP;
- logradouro;
- bairro;
- cidade;
- UF.

Entretanto, a resposta da API ViaCEP disponibiliza outras informações que também podem ser úteis em uma aplicação.

Nesta atividade, você deverá consultar diretamente a API pelo navegador, analisar os dados retornados e evoluir a classe `Endereco.mjs` para armazenar novos atributos.

---

# 📖 Conteúdos Trabalhados

- Programação assíncrona
- `async`
- `await`
- `fetch()`
- APIs externas
- JSON
- Objetos JavaScript
- Encapsulamento
- Atributos privados
- Getters
- Tratamento de exceções
- Evolução de classes

---

# 🎯 Objetivos de Aprendizagem

Ao concluir esta atividade, você deverá ser capaz de:

- consultar uma API por meio de uma URL;
- analisar os dados retornados em formato JSON;
- identificar propriedades disponíveis em uma resposta de API;
- relacionar propriedades externas com atributos de uma classe;
- ampliar uma classe sem comprometer o encapsulamento;
- adicionar novos atributos privados;
- implementar novos métodos `get`;
- adaptar um método assíncrono já existente;
- manter o tratamento de exceções durante a evolução do código.

---

# 🧩 Parte 1 – Consultando a API ViaCEP no Navegador

Abra o navegador e acesse diretamente a API ViaCEP utilizando um CEP válido.

Utilize o seguinte padrão de URL:

```text
https://viacep.com.br/ws/CEP/json/
```

Substitua `CEP` por um CEP válido.

Exemplo:

```text
https://viacep.com.br/ws/72015565/json/
```

Observe atentamente o conteúdo retornado pela API.

---

# 🔎 Parte 2 – Identificando os Atributos Disponíveis

Compare a resposta retornada pelo ViaCEP com os atributos já existentes na classe `Endereco`.

Atualmente, a classe utiliza:

```text
cep
logradouro
bairro
localidade
uf
```

Identifique **outros atributos disponíveis na resposta da API** que ainda não estão sendo utilizados pela classe.

Registre pelo menos **três novos atributos** encontrados.

Preencha a tabela:

| Atributo retornado pela API | Será usado na classe? | Nome do atributo na classe |
|-----------------------------|-----------------------|----------------------------|
|                             |                       |                            |
|                             |                       |                            |
|                             |                       |                            |

---

# 🧩 Parte 3 – Evoluindo a Classe `Endereco`

Após identificar os novos dados, altere a classe:

```text
Endereco.mjs
```

Adicione os novos atributos como **atributos privados**.

Exemplo de estrutura:

```javascript
#novoAtributo;
```

Os novos atributos deverão seguir o mesmo padrão de encapsulamento utilizado na classe.

---

# 🧩 Parte 4 – Adaptando o Método `setCep()`

Atualize o método:

```javascript
async setCep(cep)
```

para armazenar também os novos dados encontrados na resposta do ViaCEP.

A atribuição deverá seguir o mesmo padrão já utilizado:

```javascript
this.#cep = dados.cep;
this.#logradouro = dados.logradouro;
```

Acrescente as atribuições relativas aos novos atributos escolhidos.

---

# 🧩 Parte 5 – Criando os Novos Getters

Para cada novo atributo adicionado à classe, crie um método `get`.

Exemplo:

```javascript
getNovoAtributo() {
    return this.#novoAtributo;
}
```

Não permita acesso direto aos atributos privados.

---

# 🧪 Parte 6 – Atualizando `usaEndereco.mjs`

Atualize o arquivo:

```text
usaEndereco.mjs
```

para exibir também os novos dados adicionados à classe.

Utilize:

```javascript
console.log()
```

e os novos métodos `get`.

O resultado deve continuar sendo exibido somente quando a consulta for concluída com sucesso.

---

# 🧪 Parte 7 – Testando o Tratamento de Exceções

Realize pelo menos dois testes:

1. consulte um CEP válido;
2. consulte um CEP inválido ou inexistente.

Verifique se:

- os novos atributos são preenchidos corretamente no caso válido;
- o tratamento de exceções continua funcionando;
- a aplicação não tenta acessar os dados quando ocorrer erro.

---

# ⭐ Desafio Extra 1

Escolha um dos atributos retornados pelo ViaCEP que possa eventualmente vir vazio.

Adapte a apresentação no `console.log()` para exibir uma mensagem alternativa quando esse valor não estiver disponível.

Exemplo:

```text
Complemento: não informado
```

---

# ⭐ Desafio Extra 2

Crie um método chamado:

```javascript
mostrarEnderecoCompleto()
```

na classe `Endereco`.

Esse método deverá retornar uma string contendo os principais dados do endereço já organizados para apresentação.

A montagem da string deverá utilizar os atributos encapsulados da própria classe.

---

# 📌 Questões Teóricas

1. Qual a vantagem de consultar diretamente a API antes de modificar a classe?

2. Por que os novos dados devem ser armazenados em atributos privados?

3. Qual a finalidade dos métodos `get` adicionados à classe?

4. Por que não devemos acessar diretamente os atributos retornados pela API fora de `setCep()`?

5. Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

6. Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

7. O que aconteceria se a API adicionasse novos campos no futuro?

8. Por que o tratamento com `try/catch` deve continuar funcionando mesmo após a inclusão de novos atributos?

---

# 📌 Critérios de Avaliação

| Critério | Pontos |
|----------|:------:|
| Consulta e análise da resposta da API | 1,0 |
| Identificação de novos atributos | 1,5 |
| Inclusão de atributos privados | 1,5 |
| Adaptação correta de `setCep()` | 2,0 |
| Implementação dos novos getters | 1,5 |
| Atualização de `usaEndereco.mjs` | 1,0 |
| Tratamento de exceções preservado | 0,5 |
| Questões teóricas | 1,0 |

**Total: 10,0 pontos**

---

# 💡 Dicas

- Consulte primeiro a API antes de alterar qualquer código.
- Compare cuidadosamente os nomes das propriedades retornadas.
- Não copie todos os campos sem analisar sua utilidade.
- Mantenha os novos atributos privados utilizando `#`.
- Atualize `setCep()` sem remover as validações já existentes.
- Preserve o uso de `async`, `await`, `throw`, `try` e `catch`.
- Teste o código após adicionar cada novo atributo.