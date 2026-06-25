# 📚 Exercício de Fixação 05 -- Herança, Sobrescrita e Validação de Dados

## 🎯 Contexto do Problema

Uma empresa de tecnologia está desenvolvendo um sistema para cadastro de
clientes.

Todos os clientes possuem informações básicas como nome e e-mail, porém
existem dois tipos distintos de clientes:

-   Pessoa Física (PF);
-   Pessoa Jurídica (PJ).

Enquanto pessoas físicas informam um CPF, pessoas jurídicas informam um
CNPJ.

Além disso, a empresa decidiu criar regras específicas para o cadastro
de e-mails das empresas.

Sua tarefa será implementar essas classes utilizando os conceitos
estudados nesta apostila.

------------------------------------------------------------------------

# Estrutura do Projeto

``` text
projeto/
│
├── pessoas/
│   ├── Pessoa.js
│   ├── PF.js
│   └── PJ.js
│
└── usaClientes.js
```

------------------------------------------------------------------------

# 🧩 Parte 1 -- Classe Pessoa

Crie a classe `Pessoa`.

## Atributos privados

``` javascript
#nome
#email
```

## Métodos

``` javascript
setNome()
getNome()

setEmail()
getEmail()
```

### Regras

-   `setNome()` deve aceitar apenas nomes não vazios e retornar `true`
    ou `false`.
-   `setEmail()` deve aceitar apenas e-mails não vazios.

------------------------------------------------------------------------

# 🧩 Parte 2 -- Classe PF

A classe deverá herdar de `Pessoa` utilizando:

``` javascript
extends Pessoa
```

### Novo atributo

``` javascript
#cpf
```

### Métodos

``` javascript
setCPF()
getCPF()
```

### Regra

Aceitar apenas CPF com exatamente 14 caracteres (formato
`000.000.000-00`).

------------------------------------------------------------------------

# 🧩 Parte 3 -- Classe PJ

A classe deverá herdar de `Pessoa`.

### Novo atributo

``` javascript
#cnpj
```

### Métodos

``` javascript
setCNPJ()
getCNPJ()
```

### Regra

Aceitar apenas CNPJs com pelo menos 18 caracteres utilizando o operador
`<`.

------------------------------------------------------------------------

# 🧩 Parte 4 -- Sobrescrita

Sobrescreva o método:

``` javascript
setEmail()
```

Validações:

-   e-mail não pode ser vazio;
-   deve conter `@`;
-   após validar, chamar:

``` javascript
super.setEmail(email);
```

------------------------------------------------------------------------

# 🧪 Parte 5 -- Arquivo de Testes

Criar o arquivo:

``` javascript
usaClientes.js
```

Realize os seguintes testes:

1.  Pessoa válida.
2.  Pessoa Física válida.
3.  Pessoa Jurídica válida.
4.  CNPJ inválido.
5.  E-mail inválido.

Exiba mensagens apropriadas para sucesso ou erro em cada situação.

------------------------------------------------------------------------

# ⭐ Desafio Extra 1

Modificar `setNome()` para aceitar apenas nomes com 3 ou mais caracteres
utilizando `>=`.

------------------------------------------------------------------------

# ⭐ Desafio Extra 2

Modificar `setEmail()` da classe `PJ` para aceitar apenas e-mails
terminados em:

``` text
.com
```

Utilize:

``` javascript
email.endsWith(".com")
```

------------------------------------------------------------------------

# ⭐⭐ Desafio Avançado

Criar a classe:

``` javascript
MEI
```

herdando de `PJ`.

Adicionar:

``` javascript
#ramoAtividade
```

Implementar:

``` javascript
setRamoAtividade()
getRamoAtividade()
```

Sobrescrever novamente `setEmail()` para aceitar apenas e-mails
terminados em `.com.br`, utilizando `super.setEmail()`.

------------------------------------------------------------------------

# 📌 Questões Teóricas

1.  Qual a diferença entre herança e sobrescrita de métodos?
2.  Para que serve a palavra-chave `super`?
3.  Qual a vantagem de reutilizar métodos da classe pai?
4.  Por que utilizar atributos privados (`#`)?
5.  Qual a diferença entre `!=` e `!==`?
6.  Qual a função do método `includes()`?
7.  Em que situação a sobrescrita é mais indicada do que criar um método
    completamente novo?

------------------------------------------------------------------------

# 📌 Critérios de Avaliação

  Critério                          Pontos
  -------------------------------- --------
  Classe Pessoa                      1,5
  Classe PF                          1,5
  Classe PJ                          2,0
  Sobrescrita utilizando `super`     1,5
  Operadores de comparação           1,0
  Arquivo de testes                  1,5
  Questões teóricas                  1,0

**Total: 10,0 pontos**

------------------------------------------------------------------------

# 💡 Dicas

-   Desenvolva uma classe por vez.
-   Teste cada método imediatamente após implementá-lo.
-   Utilize `console.log()` para acompanhar os retornos.
-   Verifique a herança antes de implementar a sobrescrita.
-   Utilize `super` para reaproveitar o comportamento da classe base.
