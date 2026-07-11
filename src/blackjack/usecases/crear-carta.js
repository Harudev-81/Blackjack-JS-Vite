
/**
 * Crea una imagen de carta y la añade al contenedor del turno indicado.
 * @param {string} carta Código de la carta a renderizar.
 * @param {number} turno Índice del jugador o computadora.
 * @param {NodeListOf<HTMLDivElement>} divCartasJugadores Contenedores donde se renderizan las cartas.
 * @returns {void}
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    /** @type {HTMLImageElement} */
    const imgCartaNueva = document.createElement('img');
    imgCartaNueva.src = `assets/cartas/${carta}.png`;
    imgCartaNueva.classList.add('carta');
    divCartasJugadores[turno].append(imgCartaNueva);
}