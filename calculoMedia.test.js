const calcularMedia = require('./calculoMedia');

test('calcula a média básica', () => {
    expect(calcularMedia(7, 8, 9)).toBeCloseTo(8.0);
});

test('todas as notas são iguais', () => {
    expect(calcularMedia(5, 5, 5)).toBeCloseTo(5.0); // Alterado para notas iguais a 5
});

test('notas máximas', () => {
    expect(calcularMedia(10, 10, 10)).toBeCloseTo(10.0);
});

test('notas decimais', () => {
    expect(calcularMedia(7.5, 8.5, 9.0)).toBeCloseTo(8.333333333333334);
});
