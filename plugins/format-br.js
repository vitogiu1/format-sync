module.exports = (number) => {
    if (typeof number === "string") number = parseInt(number);
    number = number.toLocaleString('pt-br')
    number = number.split('')

    if (!number.includes(',')) return number.join('')

       let finalStr = '',
        sepCount = number.filter(item => item === ',').length

    let index = number.indexOf(',')
    for (let i = 0; i < (index + 2); i++) finalStr += number[i]

    return (finalStr + [sepCount])
  };