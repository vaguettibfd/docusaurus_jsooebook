# Declaração de Variáveis

```js
var x = 6;
    console.log(x);

    const y = "a";  // definição de variável const
    // y = "b";
    console.log(y);
    // VARIAVEL GLOBAIS E LOCAIS
    {   // bloco de códigos
       let z = 4;
       console.log(x);
       console.log(y);
       console.log(z);  
    }

//console.log(z);  <-- Essa linha, se descomentada, gera erro pois local ao bloco acima 
```

<div style={{ margin: '16px 0' }}>
  <a
    href="https://stackblitz.com/~/github.com/vaguettibfd/BFD_JS_OO?file=declvar.js"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      padding: '10px 16px',
      backgroundColor: '#1269d3',
      color: '#fff',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold'
    }}
  >
    ▶ Executar no StackBlitz
  </a>
</div>
