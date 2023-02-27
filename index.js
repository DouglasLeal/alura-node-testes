const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras;
}

const calculaDescontos = (salario, descontos) => {
    return salario - descontos;
}

export {
    somaHorasExtras,
    calculaDescontos
}