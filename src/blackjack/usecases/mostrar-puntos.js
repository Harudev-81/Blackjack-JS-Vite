
/**
 * Actualiza el texto visible del puntaje para el turno indicado.
 * @param {number[]} puntosJugadores Arreglo del puntaje por jugador.
 * @param {number} turno Índice del jugador cuya puntuación se debe renderizar.
 * @param {NodeListOf<HTMLElement>} elementosPuntaje Colección de elementos <small> del DOM.
 * @returns {void}
 */
export const mostrarPuntos = (puntosJugadores, turno, elementosPuntaje) => {
    elementosPuntaje[turno].innerText = puntosJugadores[turno];
}