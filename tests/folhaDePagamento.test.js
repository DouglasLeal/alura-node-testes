import { somaHorasExtras, calculaDescontos } from "../index.js";

test('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
});

test('Deve descontar o valor do salário', () => {
    const esperado = 1500;
    const retornado = calculaDescontos(2000, 500);

    expect(retornado).toBe(esperado);
});