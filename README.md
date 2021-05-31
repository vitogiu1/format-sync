## format-sync - Uma package para facilitar a formatação de valores number

Como Utilizar? / How to use?

```shell
npm i format-sync
```

```js
const { formatEn, formatBr } = require('fomart-sync')
```

- formatEn(): 
     Essa função irá formatar o valor number para en-us / This function will format the number value for en-us
     
- formatBr():
     Essa função irá formatar o valor number para pt-br / This function will format the number value for pt-br

Exemplos / Examples:

```js
const { formatEn, formatBr } = require('fomart-sync')

let valor = 1500

let valor2 = formatEn(valor)
```
