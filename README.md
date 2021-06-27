## format-sync - A package to facilitate the formatting of numeric values


Como Utilizar? / How to use?

```shell
npm i format-sync
```

```js
const { toFormat, toFormatBr, toFormatString } = require('fomart-sync')
```

- toFormat(): 
     Essa função irá formatar o valor Number/String para en-us / This function will format the Number/String value for en-us
     
- toFormatBr():
     Essa função irá formatar o valor Number/String para pt-br / This function will format the Number/String value for pt-br

- toFormatString():
    Essa função ira transformar valores como "1k" para valores Number como o 1000 / This function will transform values ​​like "1k" to Number values ​​like 1000 

Exemplos / Examples:

Number:
```js
const { toFormat, toFormatBr, toFormatString } = require('fomart-sync')

let valor = 1500

let valor2 = toFormat(valor)
```

String:
```js
const { toFormat, toFormatBr, toFormatString } = require('fomart-sync')

let valor = "9500"

let valor2 = toFormat(valor)
```

Convertendo 1k em 1000 / Converting 1k to 1000:
```js
const { toFormat, toFormatBr, toFormatString } = require('fomart-sync')

let valor = "1k"

let valor2 = toFormatString(valor)

console.log(valor2)
//No console: 1000
//In console: 1000
```

