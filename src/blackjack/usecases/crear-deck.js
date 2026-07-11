import _ from 'underscore';

/**
 * Crea un mazo nuevo con los tipos y especiales recibidos.
 * @param {string[]} tiposDeCarta Arreglo con los palos del mazo, por ejemplo ['C', 'D', 'H', 'S'].
 * @param {string[]} tiposEspeciales Arreglo con las cartas especiales, por ejemplo ['A', 'J', 'Q', 'K'].
 * @returns {string[]} Mazo mezclado listo para jugar.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) {
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    }

    if (!tiposEspeciales || tiposEspeciales.length === 0) {
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    }

    /** @type {string[]} */
    const deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (const especial of tiposEspeciales) {
        for (const tipo of tiposDeCarta) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}
