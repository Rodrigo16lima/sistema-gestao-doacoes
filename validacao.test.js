const validarDoacao = require('./validacao');

test('aceita uma doacao com dados validos', () => {
    expect(validarDoacao('Joao', 'Arroz', 2, 'Maria')).toBe(true);
});

test('rejeita doador vazio', () => {
    expect(validarDoacao('', 'Arroz', 2, 'Maria')).toBe(false);
});

test('rejeita quantidade menor que 1', () => {
    expect(validarDoacao('Joao', 'Arroz', 0, 'Maria')).toBe(false);
});

test('rejeita beneficiario com menos de 3 caracteres', () => {
    expect(validarDoacao('Joao', 'Arroz', 2, 'AB')).toBe(false);
});