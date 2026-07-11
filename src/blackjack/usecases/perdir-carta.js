
/**
 * Extrae la última carta disponible del mazo activo.
 * @param {string[]} deck Mazo de cartas que se está usando en la partida.
 * @returns {string} Carta tomada del mazo.
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }

    return deck.pop();
}