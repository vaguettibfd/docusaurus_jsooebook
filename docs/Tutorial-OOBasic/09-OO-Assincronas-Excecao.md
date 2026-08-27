# 📘 Orientação a Objetos – Funções Assíncronas e Tratamento de Exceções

## Introdução

Em aplicações JavaScript, nem todas as operações são concluídas imediatamente. Algumas tarefas dependem de recursos externos e podem levar um determinado tempo para serem finalizadas, como consultas a APIs, leitura de arquivos ou acesso a serviços disponíveis na Internet.

Para lidar com essas situações, JavaScript oferece recursos de **programação assíncrona**, permitindo que determinadas operações sejam aguardadas antes que o fluxo dependente de seus resultados continue.

Neste capítulo, utilizaremos a classe `Endereco` para demonstrar uma consulta à API pública **ViaCEP**. A partir de um CEP informado, a aplicação realizará uma requisição e utilizará os dados retornados para preencher os atributos de um objeto.

Além da programação assíncrona, também será apresentado o **tratamento de exceções**, utilizando `throw`, `try` e `catch`. Esses recursos permitem identificar situações de erro e tratá-las de maneira controlada.

Ao longo do capítulo serão utilizados recursos como:

- `async`;
- `await`;
- `fetch()`;
- `throw`;
- `Error`;
- `try`;
- `catch`;
- consumo de API;
- ES Modules (ESM).

---

## 🎯 Objetivos de Aprendizagem

Ao concluir este capítulo, você deverá ser capaz de:

- compreender o conceito básico de programação assíncrona em JavaScript;
- declarar funções e métodos assíncronos utilizando `async`;
- utilizar `await` para aguardar a conclusão de operações assíncronas;
- realizar requisições utilizando `fetch()`;
- compreender o uso de APIs externas em aplicações JavaScript;
- lançar exceções utilizando `throw`;
- criar erros utilizando `new Error()`;
- tratar exceções utilizando `try` e `catch`;
- compreender como uma exceção lançada em um método pode ser tratada em outro ponto da aplicação;
- integrar programação assíncrona, orientação a objetos e modularização utilizando ES Modules.

---

## Programação Assíncrona

Em uma execução tradicional, as instruções de um programa são processadas seguindo uma sequência.

Entretanto, determinadas operações podem depender de recursos externos e não apresentam um resultado imediatamente. Uma requisição realizada pela Internet, por exemplo, precisa aguardar a resposta do servidor.

JavaScript permite trabalhar com esse tipo de operação utilizando recursos de **programação assíncrona**.

Uma função assíncrona pode ser declarada utilizando a palavra-chave:

```javascript
async
```

Dentro de uma função assíncrona, podemos utilizar:

```javascript
await
```

para aguardar a conclusão de uma operação antes de utilizar seu resultado.

Uma estrutura básica pode ser representada da seguinte forma:

```javascript
async function exemplo() {
    const resultado = await operacaoAssincrona();
}
```

Nesse exemplo:

- `async` indica que `exemplo()` é uma função assíncrona;
- `operacaoAssincrona()` representa uma operação cujo resultado pode não estar disponível imediatamente;
- `await` aguarda a conclusão dessa operação antes de atribuir seu resultado à constante `resultado`.

Também podemos declarar **métodos assíncronos dentro de classes**:

```javascript
async metodo() {
    const resultado = await operacaoAssincrona();
}
```

Essa será a estratégia utilizada neste capítulo.

O método `setCep()` da classe `Endereco` será declarado como assíncrono porque precisará consultar um serviço externo antes de preencher os atributos do objeto.

---

## Requisições com `fetch()`

Para realizar a consulta ao serviço externo, utilizaremos:

```javascript
fetch()
```

A função `fetch()` permite realizar requisições a recursos disponíveis por meio de uma URL.

Uma utilização simplificada pode ser representada por:

```javascript
const resposta = await fetch(url);
```

Nesse caso, a aplicação solicita um recurso identificado por `url` e aguarda a resposta.

Entretanto, receber uma resposta não significa que os dados já estão disponíveis diretamente no formato que desejamos utilizar.

Quando o serviço retorna dados em formato JSON, podemos processar o conteúdo utilizando:

```javascript
const dados = await resposta.json();
```

Observe que também utilizamos `await`, pois o processamento da resposta é uma operação assíncrona.

O fluxo básico pode ser representado da seguinte forma:

```text
Aplicação
    │
    │ fetch()
    ▼
Serviço externo
    │
    │ resposta
    ▼
Aplicação
    │
    │ resposta.json()
    ▼
Objeto JavaScript
```

No exemplo deste capítulo, o serviço externo utilizado será a API **ViaCEP**.

A partir de um CEP informado, a aplicação realizará uma consulta e utilizará informações como:

- CEP;
- logradouro;
- bairro;
- localidade;
- UF.

Essas informações serão utilizadas para preencher os atributos privados de um objeto da classe `Endereco`.

---
## Classe `Endereco` e Consulta à API ViaCEP

A classe `Endereco` representa informações relacionadas a um endereço e utiliza uma consulta externa para preencher seus atributos.

Em vez de receber separadamente o logradouro, bairro, cidade e UF, o método `setCep()` recebe um CEP e realiza uma consulta à API ViaCEP.

O fluxo pode ser representado da seguinte maneira:

```text
CEP informado
     │
     ▼
  setCep()
     │
     ▼
   fetch()
     │
     ▼
 API ViaCEP
     │
     ▼
Resposta HTTP
     │
     ▼
resposta.json()
     │
     ▼
Dados do endereço
     │
     ▼
Atributos do objeto
```

Como a requisição depende de uma resposta externa, `setCep()` é declarado como um método assíncrono.

---

## 💻 Código Completo

**Arquivo:** `/pessoas/ENDERECO/Endereco.mjs`

```javascript
export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }
}
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–06 — Classe e atributos privados**

```javascript
export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
```

A classe `Endereco` é declarada utilizando:

```javascript
export default class Endereco
```

A expressão `export default` indica que a classe corresponde à **exportação padrão** do módulo.

Os atributos:

- `#cep`;
- `#logradouro`;
- `#bairro`;
- `#cidade`;
- `#uf`;

são declarados como privados por meio do caractere `#`.

Essa estratégia aplica o conceito de **encapsulamento**, impedindo que os valores sejam acessados ou modificados diretamente fora da classe.

---

### **Linhas 08–11 — Método assíncrono e requisição**

```javascript
async setCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
```

O método `setCep()` é declarado utilizando:

```javascript
async
```

Isso indica que o método realizará operações assíncronas e permite a utilização de `await` em seu interior.

A instrução:

```javascript
const url = `https://viacep.com.br/ws/${cep}/json/`;
```

constrói a URL que será utilizada para realizar a consulta.

O valor recebido pelo parâmetro `cep` é inserido diretamente na URL por meio de uma **Template Literal**:

```javascript
${cep}
```

Em seguida:

```javascript
fetch(url)
```

realiza a requisição ao serviço externo.

Como essa operação não apresenta necessariamente um resultado imediato, utilizamos:

```javascript
await
```

para aguardar sua conclusão antes de continuar o fluxo dependente da resposta.

O resultado é armazenado na constante:

```javascript
resposta
```

---

### **Linhas 13–15 — Verificação da resposta**

```javascript
if (!resposta.ok) {
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
}
```

Após receber a resposta, o código verifica a propriedade:

```javascript
resposta.ok
```

Essa propriedade permite identificar se a resposta HTTP foi considerada bem-sucedida.

O operador:

```javascript
!
```

representa uma negação lógica.

Portanto:

```javascript
!resposta.ok
```

verifica se a resposta **não foi bem-sucedida**.

Caso essa condição seja verdadeira, é executada a instrução:

```javascript
throw new Error(...)
```

`new Error()` cria um objeto que representa um erro.

Já `throw` é responsável por **lançar a exceção**, interrompendo o fluxo normal daquela operação.

A propriedade:

```javascript
resposta.status
```

permite incluir o código de status HTTP na mensagem do erro.

---

### **Linha 17 — Processamento da resposta**

```javascript
const dados = await resposta.json();
```

Caso a resposta seja considerada adequada, seu conteúdo será processado.

O método:

```javascript
resposta.json()
```

processa o corpo da resposta considerando o formato JSON.

Como essa operação também é assíncrona, utiliza-se novamente:

```javascript
await
```

Após a conclusão, a constante `dados` passa a referenciar a estrutura JavaScript resultante desse processamento.

Assim, propriedades retornadas pelo serviço poderão ser acessadas utilizando expressões como:

```javascript
dados.cep
dados.logradouro
dados.bairro
dados.localidade
dados.uf
```

---

### **Linhas 19–21 — Verificação do CEP**

```javascript
if (dados.erro) {
    throw new Error("CEP não encontrado na base do ViaCEP.");
}
```

Além de verificar a resposta HTTP, o código também verifica o conteúdo retornado pela API.

A condição:

```javascript
if (dados.erro)
```

verifica o campo `erro` retornado pelo serviço.

Caso esse campo indique que o CEP não foi localizado, uma nova exceção será lançada:

```javascript
throw new Error("CEP não encontrado na base do ViaCEP.");
```

Esse trecho demonstra que existem diferentes situações que podem gerar uma exceção.

A primeira validação verifica a **resposta da requisição**, enquanto esta segunda verifica o **conteúdo retornado pelo serviço**.

---

### **Linhas 23–27 — Preenchimento dos atributos**

```javascript
this.#cep = dados.cep;
this.#logradouro = dados.logradouro;
this.#bairro = dados.bairro;
this.#cidade = dados.localidade;
this.#uf = dados.uf;
```

Se nenhuma das verificações anteriores lançar uma exceção, os dados retornados pela API serão armazenados nos atributos privados do objeto.

Cada propriedade retornada é associada ao respectivo atributo:

```javascript
dados.cep
```

é armazenado em:

```javascript
this.#cep
```

Da mesma forma:

```javascript
dados.logradouro
dados.bairro
dados.localidade
dados.uf
```

são utilizados para preencher os demais atributos.

Observe especificamente:

```javascript
this.#cidade = dados.localidade;
```

A API utiliza o nome `localidade`, enquanto a classe utiliza o atributo `#cidade`.

A classe, portanto, não precisa utilizar exatamente os mesmos nomes adotados pelo serviço externo.

---

### **Linhas 30–48 — Métodos de acesso**

```javascript
getCep() {
    return this.#cep;
}

getLogradouro() {
    return this.#logradouro;
}

getBairro() {
    return this.#bairro;
}

getCidade() {
    return this.#cidade;
}

getUf() {
    return this.#uf;
}
```

Os métodos `get` permitem recuperar os valores armazenados nos atributos privados.

Como os atributos utilizam `#`, instruções externas como:

```javascript
end.#cep
```

não podem ser utilizadas para acessar diretamente os dados.

Por esse motivo, a classe disponibiliza métodos públicos como:

```javascript
getCep()
getLogradouro()
getBairro()
getCidade()
getUf()
```

Essa estratégia mantém o **encapsulamento**, permitindo que a própria classe controle a forma como seus dados são disponibilizados.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Encapsulamento | Os dados do endereço são armazenados em atributos privados, como `#cep`, `#logradouro` e `#cidade`. |
| Programação Assíncrona | Permite trabalhar com operações cujo resultado pode não estar disponível imediatamente. |
| `async` | Declara uma função ou método assíncrono. |
| `await` | Aguarda a conclusão de uma operação assíncrona antes de continuar o fluxo dependente de seu resultado. |
| `fetch()` | Realiza a requisição utilizada para consultar o serviço externo. |
| API externa | Serviço externo utilizado pela aplicação para obter dados. |
| ViaCEP | API utilizada no exemplo para consultar informações de endereço a partir de um CEP. |
| `resposta.ok` | Indica se a resposta HTTP foi considerada bem-sucedida. |
| `resposta.status` | Informa o código de status da resposta HTTP. |
| `resposta.json()` | Processa o conteúdo JSON da resposta, produzindo uma estrutura que poderá ser manipulada pelo JavaScript. |
| `throw` | Lança uma exceção e interrompe o fluxo normal da operação. |
| `new Error()` | Cria um objeto que representa um erro. |
| ES Modules | Permite organizar o código utilizando recursos como `export default` e `import`. |

---

## 💡 Dicas do Professor

> **`async` e `await` trabalham em conjunto.**
>
> O método `setCep()` é declarado com `async`, permitindo que operações assíncronas sejam aguardadas utilizando `await`.

> **Uma requisição pode exigir diferentes verificações.**
>
> No exemplo, `resposta.ok` verifica a situação da resposta HTTP. Depois, `dados.erro` verifica uma informação presente no conteúdo retornado pela API.

> **O resultado de `fetch()` e os dados da resposta são etapas diferentes.**
>
> Primeiro, `await fetch(url)` aguarda a resposta da requisição. Em seguida, `await resposta.json()` processa o conteúdo recebido.

> **Os dados de uma API podem utilizar nomes diferentes dos atributos da classe.**
>
> O ViaCEP utiliza `localidade`, enquanto a classe `Endereco` utiliza `#cidade`. A aplicação pode adaptar os dados externos à sua própria estrutura.

> **O método assíncrono também preserva o encapsulamento.**
>
> Mesmo que os valores sejam obtidos de um serviço externo, eles são armazenados nos atributos privados da classe e disponibilizados pelos métodos públicos.

---

## Tratamento de Exceções

Durante a execução de uma aplicação, podem ocorrer situações que impedem que uma operação seja concluída normalmente.

No exemplo da consulta ao CEP, podemos ter situações como:

- uma resposta da requisição que não seja bem-sucedida;
- um CEP que não seja encontrado na base consultada.

Para representar essas situações, o método `setCep()` utiliza **exceções**.

Uma exceção permite interromper o fluxo normal da operação e informar que ocorreu um problema.

No código estudado anteriormente, isso é realizado utilizando:

```javascript
throw new Error("CEP não encontrado na base do ViaCEP.");
```

Essa instrução envolve dois elementos importantes:

```javascript
new Error(...)
```

cria um objeto que representa o erro.

Já:

```javascript
throw
```

lança esse erro como uma exceção.

---

## Lançando uma Exceção com `throw`

A estrutura básica pode ser representada por:

```javascript
if (condicaoDeErro) {
    throw new Error("Mensagem de erro");
}
```

Quando a condição for verdadeira, a exceção será lançada.

A partir desse momento, o fluxo normal daquele trecho é interrompido.

No método `setCep()`, temos duas situações desse tipo.

A primeira verifica a resposta da requisição:

```javascript
if (!resposta.ok) {
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
}
```

A segunda verifica se o serviço informou que o CEP não foi encontrado:

```javascript
if (dados.erro) {
    throw new Error("CEP não encontrado na base do ViaCEP.");
}
```

Portanto, o próprio método responsável pela consulta também é capaz de **identificar situações que impedem a conclusão adequada da operação**.

---

## Tratando uma Exceção com `try` e `catch`

Lançar uma exceção não significa necessariamente que o método responsável por identificá-la também deverá decidir como apresentá-la ou tratá-la.

Outra parte da aplicação pode assumir essa responsabilidade.

Para isso, JavaScript disponibiliza as estruturas:

```javascript
try
```

e:

```javascript
catch
```

A estrutura básica é:

```javascript
try {
    // operação que pode gerar uma exceção
} catch (erro) {
    // tratamento da exceção
}
```

O bloco `try` contém o código que será executado normalmente.

Se uma exceção ocorrer durante essa execução, o fluxo será direcionado para o bloco `catch`.

O parâmetro:

```javascript
erro
```

recebe o objeto associado à exceção.

Assim, podemos acessar informações como:

```javascript
erro.message
```

para recuperar a mensagem utilizada na criação do erro.

---

## Relação entre `throw`, `try` e `catch`

Os recursos `throw`, `try` e `catch` possuem papéis complementares.

Podemos representar o fluxo da seguinte maneira:

```text
try
 │
 ▼
Operação
 │
 ├── operação concluída
 │        │
 │        ▼
 │   continua o fluxo
 │
 └── problema identificado
          │
          ▼
   throw new Error()
          │
          ▼
       catch
          │
          ▼
  tratamento do erro
```

No exemplo deste capítulo, teremos uma separação importante de responsabilidades:

```text
Endereco.setCep()
       │
       │ identifica o problema
       ▼
throw new Error()
       │
       │ exceção
       ▼
usaEndereco()
       │
       ▼
catch (erro)
       │
       ▼
tratamento do erro
```

Dessa forma, `setCep()` fica responsável por **identificar e sinalizar o problema**, enquanto o código que utiliza esse método poderá decidir **como tratar a exceção**.

---

## Exceções em Operações Assíncronas

Como `setCep()` é um método assíncrono, sua chamada será realizada utilizando:

```javascript
await
```

A operação poderá ser colocada dentro de um bloco `try`:

```javascript
try {
    await end.setCep("72015565");
} catch (erro) {
    console.error(erro.message);
}
```

Se `setCep()` for concluído normalmente, o fluxo continuará dentro do bloco `try`.

Caso uma exceção seja lançada durante a operação, o fluxo será direcionado para:

```javascript
catch (erro)
```

Essa integração entre:

```text
async / await
      +
throw
      +
try / catch
```

permite trabalhar com operações assíncronas e, ao mesmo tempo, controlar situações de erro.

---

## 📌 Conceitos-Chave do Tratamento de Exceções

| Conceito | Explicação |
|----------|------------|
| Exceção | Situação que interrompe o fluxo normal de uma operação. |
| `throw` | Lança uma exceção. |
| `Error` | Objeto utilizado para representar informações relacionadas ao erro. |
| `new Error()` | Cria uma nova instância de `Error`. |
| `try` | Delimita um bloco cuja execução poderá gerar uma exceção. |
| `catch` | Captura uma exceção lançada durante a execução do bloco `try`. |
| `erro` | Referência para o objeto capturado pelo `catch`. |
| `erro.message` | Permite acessar a mensagem associada ao erro. |
| `await` | Permite aguardar a operação assíncrona que poderá resultar em uma exceção. |

---

## 💡 Dicas do Professor

> **`throw` gera a exceção; `catch` trata a exceção.**
>
> Esses recursos não possuem a mesma responsabilidade. Um trecho do programa pode identificar o problema e outro decidir como tratá-lo.

> **Coloque dentro do `try` a operação que poderá gerar a exceção.**
>
> No próximo exemplo, `await end.setCep(...)` ficará dentro do bloco `try` porque o método `setCep()` pode lançar uma exceção.

> **A mensagem criada com `new Error()` poderá ser recuperada posteriormente.**
>
> Se o erro for criado com `new Error("CEP não encontrado")`, o bloco `catch` poderá acessar essa informação utilizando `erro.message`.

---

## Utilizando a Classe `Endereco`

Após implementar a classe `Endereco`, podemos criar um arquivo responsável por utilizar seus recursos.

Como o método `setCep()` realiza uma operação assíncrona, sua execução deverá ser aguardada utilizando `await`.

Além disso, como esse método pode lançar uma exceção, utilizaremos `try` e `catch` para controlar possíveis situações de erro.

O fluxo da aplicação pode ser representado da seguinte maneira:

```text
usaEndereco()
      │
      ▼
new Endereco()
      │
      ▼
    try
      │
      ▼
await end.setCep()
      │
      ├── sucesso
      │      │
      │      ▼
      │  apresenta dados
      │
      └── exceção
             │
             ▼
           catch
             │
             ▼
       apresenta erro
```

---

## 💻 Código Completo

**Arquivo:** `/pessoas/ENDERECO/usaEndereco.mjs`

```javascript
import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();

    try {
        await end.setCep("72015565");

        console.log("✅ Endereço carregado com sucesso:");
        console.log("CEP:", end.getCep());
        console.log("Logradouro:", end.getLogradouro());
        console.log("Bairro:", end.getBairro());
        console.log("Cidade:", end.getCidade());
        console.log("UF:", end.getUf());

    } catch (erro) {
        console.error("❌ Erro ao definir CEP:", erro.message);
    }
}

usaEndereco();
```

---

## 📘 Comentários e Explicações Linha a Linha

### **Linhas 01–04 — Importação, função assíncrona e objeto**

```javascript
import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();
```

A primeira instrução importa a classe `Endereco`:

```javascript
import Endereco from './Endereco.mjs';
```

Como `Endereco` foi disponibilizada utilizando:

```javascript
export default
```

sua importação é realizada sem a utilização de chaves `{ }`.

Em seguida, é declarada a função:

```javascript
async function usaEndereco()
```

A palavra-chave `async` indica que `usaEndereco()` é uma função assíncrona.

Isso será necessário porque, posteriormente, utilizaremos `await` para aguardar a execução do método `setCep()`.

Dentro da função é criado um objeto da classe `Endereco`:

```javascript
const end = new Endereco();
```

A constante `end` passa a referenciar o objeto que receberá os dados obtidos por meio da consulta ao CEP.

---

### **Linhas 06–07 — `try` e chamada assíncrona**

```javascript
try {
    await end.setCep("72015565");
```

O bloco:

```javascript
try
```

delimita o código cuja execução poderá gerar uma exceção.

Dentro dele é realizada a chamada:

```javascript
await end.setCep("72015565");
```

O método `setCep()` foi declarado como assíncrono na classe `Endereco`.

Por esse motivo, utilizamos:

```javascript
await
```

para aguardar sua conclusão antes de continuar a execução das próximas instruções.

O valor:

```text
72015565
```

é enviado como argumento para o método e será utilizado na consulta à API ViaCEP.

Se a operação for concluída normalmente, o objeto `end` terá seus atributos preenchidos.

Entretanto, se `setCep()` executar:

```javascript
throw new Error(...)
```

o fluxo normal será interrompido e a exceção será direcionada para o bloco `catch`.

---

### **Linhas 09–14 — Apresentação dos dados**

```javascript
console.log("✅ Endereço carregado com sucesso:");
console.log("CEP:", end.getCep());
console.log("Logradouro:", end.getLogradouro());
console.log("Bairro:", end.getBairro());
console.log("Cidade:", end.getCidade());
console.log("UF:", end.getUf());
```

Essas instruções somente serão alcançadas se:

```javascript
await end.setCep("72015565");
```

for concluído sem lançar uma exceção.

A primeira instrução apresenta uma mensagem indicando que o endereço foi carregado:

```javascript
console.log("✅ Endereço carregado com sucesso:");
```

Em seguida, os métodos públicos da classe são utilizados para recuperar os dados armazenados:

```javascript
end.getCep()
end.getLogradouro()
end.getBairro()
end.getCidade()
end.getUf()
```

Essa abordagem preserva o **encapsulamento**, pois os atributos privados não são acessados diretamente.

Assim, o fluxo de sucesso pode ser representado por:

```text
setCep()
   │
   ▼
consulta concluída
   │
   ▼
atributos preenchidos
   │
   ▼
métodos get
   │
   ▼
console.log()
```

---

### **Linhas 16–18 — Captura e tratamento da exceção**

```javascript
} catch (erro) {
    console.error("❌ Erro ao definir CEP:", erro.message);
}
```

Caso uma exceção seja lançada durante a execução do bloco `try`, o fluxo será direcionado para:

```javascript
catch (erro)
```

O parâmetro:

```javascript
erro
```

recebe o objeto associado à exceção.

No método `setCep()`, os erros foram criados utilizando:

```javascript
new Error(...)
```

Por exemplo:

```javascript
throw new Error("CEP não encontrado na base do ViaCEP.");
```

A propriedade:

```javascript
erro.message
```

permite recuperar a mensagem associada ao objeto de erro.

Assim:

```javascript
console.error("❌ Erro ao definir CEP:", erro.message);
```

apresenta uma mensagem informando que ocorreu um problema e também mostra a descrição do erro recebido.

Observe a separação de responsabilidades:

```text
Endereco.setCep()
      │
      ▼
identifica o problema
      │
      ▼
throw new Error()
      │
      ▼
usaEndereco()
      │
      ▼
catch (erro)
      │
      ▼
apresenta o problema
```

A classe `Endereco` identifica que a operação não pôde ser concluída adequadamente, enquanto `usaEndereco()` decide como o erro será tratado.

---

### **Linha 21 — Execução da função**

```javascript
usaEndereco();
```

A última instrução executa a função definida anteriormente.

A partir dessa chamada, o fluxo completo será iniciado:

```text
usaEndereco()
      │
      ▼
cria Endereco
      │
      ▼
executa setCep()
      │
      ▼
consulta ViaCEP
      │
      ├── sucesso ──► apresenta endereço
      │
      └── erro ─────► catch
                         │
                         ▼
                   apresenta erro
```

Como `usaEndereco()` é uma função assíncrona, sua execução envolve operações que podem ser concluídas posteriormente.

No exemplo, entretanto, toda a lógica necessária para utilização do endereço e tratamento da exceção permanece organizada dentro da própria função.

---

## Integração entre Programação Assíncrona e Tratamento de Exceções

Os dois arquivos apresentados neste capítulo trabalham de forma integrada.

A classe `Endereco` é responsável por:

- receber o CEP;
- montar a URL da consulta;
- realizar a requisição utilizando `fetch()`;
- aguardar a resposta utilizando `await`;
- processar o conteúdo recebido;
- preencher os atributos do objeto;
- identificar situações de erro;
- lançar exceções utilizando `throw`.

Já o arquivo `usaEndereco.mjs` é responsável por:

- criar o objeto `Endereco`;
- chamar o método assíncrono `setCep()`;
- aguardar a conclusão da operação;
- apresentar os dados quando a consulta for bem-sucedida;
- capturar e tratar uma eventual exceção.

Essa divisão permite observar como diferentes partes da aplicação podem possuir responsabilidades específicas.

---

## Fluxo Completo da Aplicação

O funcionamento pode ser representado da seguinte forma:

```text
usaEndereco()
      │
      ▼
new Endereco()
      │
      ▼
try
      │
      ▼
await end.setCep(cep)
      │
      ▼
fetch(url)
      │
      ▼
API ViaCEP
      │
      ▼
Resposta
      │
      ├── resposta válida
      │        │
      │        ▼
      │   resposta.json()
      │        │
      │        ▼
      │   dados do endereço
      │        │
      │        ▼
      │   atributos preenchidos
      │        │
      │        ▼
      │   console.log()
      │
      └── problema
               │
               ▼
        throw new Error()
               │
               ▼
          catch (erro)
               │
               ▼
         console.error()
```

Esse fluxo demonstra a combinação entre **programação assíncrona** e **tratamento de exceções**.

---

## Identificando uma Situação de Erro

Dentro de `Endereco.setCep()`, o código verifica situações que impedem a conclusão normal da operação.

Uma delas ocorre quando a resposta HTTP não é considerada bem-sucedida:

```javascript
if (!resposta.ok) {
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
}
```

Outra situação ocorre quando o serviço informa que o CEP não foi encontrado:

```javascript
if (dados.erro) {
    throw new Error("CEP não encontrado na base do ViaCEP.");
}
```

Nesses casos, o método não apresenta diretamente a mensagem ao usuário.

Em vez disso, ele **sinaliza o problema** lançando uma exceção.

---

## Tratando a Situação de Erro

No arquivo `usaEndereco.mjs`, a chamada ao método é realizada dentro de um bloco `try`:

```javascript
try {
    await end.setCep("72015565");
}
```

Se `setCep()` for concluído normalmente, a execução continuará dentro do bloco.

Caso uma exceção seja lançada, o fluxo será direcionado para:

```javascript
catch (erro) {
    console.error("❌ Erro ao definir CEP:", erro.message);
}
```

O bloco `catch` recebe o objeto de erro e define como a aplicação deverá reagir.

Nesse exemplo, a ação escolhida é apresentar a mensagem no console.

---

## Identificar o Erro × Tratar o Erro

Essa diferença é importante.

### Identificar e sinalizar

A classe `Endereco` identifica que ocorreu um problema:

```javascript
throw new Error(...)
```

Seu papel é informar que a operação não pôde continuar normalmente.

### Tratar

O arquivo `usaEndereco.mjs` captura essa situação:

```javascript
catch (erro)
```

e decide o que fazer com ela.

Neste exemplo, o tratamento consiste em:

```javascript
console.error(...)
```

Portanto:

```text
Endereco
   │
   │ identifica
   ▼
 throw
   │
   │ sinaliza
   ▼
usaEndereco
   │
   │ captura
   ▼
 catch
   │
   │ trata
   ▼
mensagem ao usuário
```

---

## Relação entre `async`, `await`, `throw`, `try` e `catch`

Os principais elementos utilizados no exemplo possuem funções diferentes:

| Recurso | Papel |
|----------|-------|
| `async` | Declara que a função ou método trabalhará com operações assíncronas. |
| `await` | Aguarda a conclusão de uma operação assíncrona. |
| `fetch()` | Realiza a requisição utilizada para consultar o serviço externo. |
| `throw` | Lança uma exceção quando uma situação de erro é identificada. |
| `new Error()` | Cria o objeto que representa o erro. |
| `try` | Delimita o código cuja execução poderá gerar uma exceção. |
| `catch` | Captura a exceção e permite tratá-la. |
| `erro.message` | Recupera a mensagem associada ao erro capturado. |

Esses recursos podem ser observados em um fluxo único:

```javascript
try {
    await end.setCep("72015565");
} catch (erro) {
    console.error(erro.message);
}
```

O método chamado com `await` poderá internamente executar:

```javascript
throw new Error(...)
```

e a exceção será capturada pelo `catch`.

---

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Programação Assíncrona | Permite trabalhar com operações que podem levar tempo para serem concluídas. |
| Função Assíncrona | Função ou método declarado utilizando `async`. |
| `await` | Aguarda a conclusão de uma operação assíncrona. |
| API externa | Serviço consultado pela aplicação para obtenção de dados. |
| `fetch()` | Realiza a requisição HTTP utilizada no exemplo. |
| ViaCEP | API pública utilizada para buscar informações de endereço. |
| Exceção | Situação que interrompe o fluxo normal de uma operação. |
| `throw` | Gera uma exceção. |
| `Error` | Objeto que representa informações sobre um erro. |
| `try` | Agrupa instruções que podem gerar uma exceção. |
| `catch` | Captura e trata a exceção. |
| `erro.message` | Permite acessar a mensagem do erro capturado. |
| Encapsulamento | Os dados de `Endereco` permanecem armazenados em atributos privados. |
| Modularização | `Endereco` e `usaEndereco` são organizados em arquivos separados utilizando ES Modules. |

---

## 💡 Dicas do Professor

> **Quem detecta o problema não precisa ser quem apresenta a mensagem.**
>
> `setCep()` identifica a situação de erro e lança a exceção. O código que utiliza esse método decide como tratá-la.

> **Use `try/catch` ao redor da operação que poderá lançar uma exceção.**
>
> Neste exemplo, a chamada `await end.setCep(...)` fica dentro do bloco `try`.

> **`await` organiza o fluxo da operação assíncrona.**
>
> Os dados do endereço só devem ser consultados depois que `setCep()` concluir corretamente sua execução.

> **Uma exceção interrompe o fluxo normal.**
>
> Se `throw` for executado dentro de `setCep()`, as instruções posteriores daquele fluxo não continuarão normalmente, e o tratamento será direcionado ao `catch`.

> **As responsabilidades permanecem separadas.**
>
> A classe `Endereco` concentra a lógica da consulta e atualização dos atributos, enquanto `usaEndereco.mjs` controla a interação e o tratamento da exceção.

---

---------------------

## 📌 Conceitos-Chave Envolvidos

| Conceito | Explicação |
|----------|------------|
| Programação Assíncrona | Permite trabalhar com operações cujo resultado pode não estar disponível imediatamente. |
| `async` | Declara uma função ou método assíncrono. |
| `await` | Aguarda a conclusão de uma operação assíncrona antes de continuar o fluxo dependente de seu resultado. |
| `fetch()` | Realiza a requisição utilizada para consultar um recurso externo. |
| API | Permite a comunicação entre aplicações ou componentes de software. |
| ViaCEP | API utilizada no exemplo para consultar informações de endereço a partir de um CEP. |
| `resposta.ok` | Indica se a resposta HTTP foi considerada bem-sucedida. |
| `resposta.status` | Permite acessar o código de status da resposta HTTP. |
| `resposta.json()` | Processa o conteúdo JSON recebido na resposta. |
| Exceção | Situação que interrompe o fluxo normal de uma operação. |
| `throw` | Lança uma exceção quando uma situação de erro é identificada. |
| `new Error()` | Cria um objeto que representa um erro. |
| `try` | Delimita um bloco de código cuja execução poderá gerar uma exceção. |
| `catch` | Captura uma exceção e permite definir seu tratamento. |
| `erro.message` | Permite acessar a mensagem associada ao erro capturado. |
| Encapsulamento | Mantém os dados de `Endereco` protegidos em atributos privados. |
| ES Modules | Organiza os arquivos utilizando recursos como `import` e `export default`. |

---------------------

## 💡 Dicas do Professor

> **Programação assíncrona é especialmente importante quando a aplicação depende de recursos externos.**
>
> Uma requisição realizada pela Internet pode levar algum tempo para ser concluída. `async` e `await` permitem organizar esse fluxo de maneira mais clara.

> **`async` identifica um contexto assíncrono e `await` aguarda uma operação.**
>
> No exemplo, `setCep()` é declarado com `async`, enquanto `await` é utilizado para aguardar `fetch()` e `resposta.json()`.

> **Uma resposta HTTP e o conteúdo retornado são aspectos diferentes.**
>
> `resposta.ok` permite verificar a situação da resposta HTTP, enquanto `dados.erro` permite verificar uma informação presente nos dados retornados pelo ViaCEP.

> **`throw` e `catch` possuem responsabilidades complementares.**
>
> `throw` sinaliza que ocorreu uma situação excepcional. `catch` permite definir o que a aplicação fará diante dessa situação.

> **Quem identifica o problema não precisa ser quem o trata.**
>
> A classe `Endereco` identifica situações que impedem a conclusão da consulta e lança uma exceção. O arquivo `usaEndereco.mjs` captura essa exceção e define seu tratamento.

> **Mantenha o encapsulamento mesmo quando os dados são obtidos externamente.**
>
> Os valores retornados pelo ViaCEP são armazenados nos atributos privados de `Endereco` e continuam sendo acessados por meio dos métodos públicos da classe.

---------------------

## 💡 Resumo Final

Neste capítulo foi apresentada a utilização de **programação assíncrona** em JavaScript.

A classe `Endereco` foi adaptada para consultar informações de endereço utilizando a API ViaCEP. Para isso, o método `setCep()` foi declarado utilizando `async`.

A requisição ao serviço externo foi realizada com:

```javascript
const resposta = await fetch(url);
```

O uso de `await` permite aguardar a conclusão da requisição antes de utilizar sua resposta.

Em seguida, o conteúdo retornado foi processado utilizando:

```javascript
const dados = await resposta.json();
```

Os dados obtidos foram utilizados para preencher os atributos privados da classe `Endereco`, preservando o encapsulamento.

Também foram apresentadas situações nas quais a operação não pode ser concluída normalmente. Para sinalizar esses problemas, o método `setCep()` utiliza:

```javascript
throw new Error(...)
```

Duas situações foram consideradas no exemplo:

- resposta HTTP não considerada bem-sucedida;
- CEP não encontrado na base consultada.

No arquivo `usaEndereco.mjs`, a chamada ao método assíncrono foi realizada dentro de um bloco `try`:

```javascript
try {
    await end.setCep("72015565");
}
```

Caso uma exceção seja lançada, ela é capturada utilizando:

```javascript
catch (erro)
```

e sua mensagem pode ser recuperada por:

```javascript
erro.message
```

Dessa forma, o exemplo demonstra uma importante separação de responsabilidades: a classe `Endereco` identifica e sinaliza situações de erro, enquanto o código que utiliza essa classe determina como essas situações serão tratadas.

O capítulo integrou, portanto, **programação assíncrona, consumo de APIs, tratamento de exceções, encapsulamento e modularização utilizando ES Modules**.

---------------------

## 📌 O que você aprendeu

Ao concluir este capítulo, você deverá ser capaz de:

- compreender por que determinadas operações em JavaScript são assíncronas;
- declarar funções e métodos utilizando `async`;
- utilizar `await` para aguardar operações assíncronas;
- realizar requisições utilizando `fetch()`;
- compreender o fluxo básico de consulta a uma API;
- utilizar dados retornados por um serviço externo para atualizar um objeto;
- verificar o resultado de uma resposta utilizando `resposta.ok`;
- acessar o código de status utilizando `resposta.status`;
- processar respostas utilizando `resposta.json()`;
- compreender o conceito de exceção;
- lançar exceções utilizando `throw`;
- criar objetos de erro utilizando `new Error()`;
- utilizar `try` para delimitar operações que podem gerar exceções;
- utilizar `catch` para capturar e tratar exceções;
- acessar a mensagem de uma exceção utilizando `erro.message`;
- compreender como uma exceção pode ser lançada em um método e tratada em outro ponto da aplicação;
- integrar programação assíncrona com classes e atributos privados;
- organizar a aplicação utilizando ES Modules.

---------------------

## 📚 Exercícios de Fixação

-  https://js-oo-ebook.vercel.app/docs/tutorial-exercicio-integrador/Exercicio_Integrador_02

---------------------