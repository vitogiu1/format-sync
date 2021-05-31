function formatNumberEn(number) {
    if (typeof number === 'String') number = Number(number);
    number = number.toLocaleString('en-US')
    number = number.split('')

    if (!number.includes(',')) return number.join('')

    let matches = ["???", "K", "M", "B", "T", "Q"],
        finalStr = '',
        sepCount = number.filter(item => item === ',').length

    if (sepCount > matches.length) sepCount = 0

    let index = number.indexOf(',')
    for (let i = 0; i < (index + 2); i++) finalStr += number[i]

    return (finalStr + matches[sepCount])
}

function formatNumberBr(number) {
    if (typeof number === 'String') number = Number(number);
    number = number.toLocaleString('pt-br')
    number = number.split('')

    if (!number.includes(',')) return number.join('')

       let finalStr = '',
        sepCount = number.filter(item => item === ',').length

    let index = number.indexOf(',')
    for (let i = 0; i < (index + 2); i++) finalStr += number[i]

    return (finalStr + [sepCount])
}

module.exports = { formatNumberEn, formatNumberBr }