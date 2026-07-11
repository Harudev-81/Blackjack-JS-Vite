

/**
 * Compara las puntuaciones finales y muestra el resultado del juego en el DOM.
 * @param {number[]} puntosJugadores Arreglo con la puntuación del jugador y la computadora.
 * @returns {void}
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    const elementoResultado = document.querySelector('#resultado');

    let mensaje = '';

    if (puntosMinimos === puntosComputadora) {
        mensaje = 'Nadie gana!';
    } else if (puntosMinimos > 21) {
        mensaje = 'Ganó Computadora';
    } else if (puntosComputadora > 21) {
        mensaje = 'Ganaste!';
    } else if (puntosMinimos > puntosComputadora) {
        mensaje = 'Ganaste!';
    } else {
        mensaje = 'Ganó Computadora!';
    }

    if (elementoResultado) {
        elementoResultado.innerText = mensaje;
    }
}