import { valorCarta } from './valor-carta.js';

/**
 * Acumula el valor de una carta en el puntaje del jugador indicado.
 * @param {number[]} puntosJugadores Arreglo con el puntaje de cada jugador.
 * @param {string} carta Carta tomada del mazo.
 * @param {number} turno Índice del jugador al que corresponde la carta.
 * @returns {number} El puntaje actualizado del jugador.
 */
export const acumularPuntos = (puntosJugadores, carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    return puntosJugadores[turno];
}