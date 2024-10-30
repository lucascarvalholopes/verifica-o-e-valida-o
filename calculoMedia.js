/**
 * Calcula a média de três notas.
 * 
 * @param {number} nota1 - Primeira nota.
 * @param {number} nota2 - Segunda nota.
 * @param {number} nota3 - Terceira nota.
 * @return {number|string} - Média das três notas ou mensagem de erro.
 */
function calcularMedia(nota1, nota2, nota3) {
    const notas = [nota1, nota2, nota3];

    for (let nota of notas) {
        if (typeof nota !== 'number' || nota < 0 || nota > 10) {
            return 'Todas as notas devem ser números entre 0 e 10.';
        }
    }

    return (nota1 + nota2 + nota3) / 3;
}

module.exports = calcularMedia;
