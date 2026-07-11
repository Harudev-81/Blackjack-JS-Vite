
/**
 * Devuelve el valor numérico de una carta para blackjack.
 * @param {string} carta Código de la carta, por ejemplo '10C' o 'AJ'.
 * @returns {number} Valor de la carta según la regla del juego.
 */
export const valorCarta = (carta) => {
    /** @type {string} */
    const valor = carta.substring(0, carta.length - 1);

    return !isNaN(valor) ? valor * 1 : valor === 'A' ? 11 : 10;
}