import { pedirCarta } from './perdir-carta.js';
import { acumularPuntos } from './acumular-puntos.js';
import { crearCarta } from './crear-carta.js';
import { mostrarPuntos } from './mostrar-puntos.js';
import { determinarGanador } from './determinar-ganador.js';

/**
 * Simula el turno de la computadora y termina cuando supera o iguala la puntuación mínima del jugador.
 * @param {string[]} deck Mazo activo del juego.
 * @param {number[]} puntosJugadores Arreglo de puntajes por jugador.
 * @param {number} turno Índice de la computadora dentro del arreglo de jugadores.
 * @param {NodeListOf<HTMLDivElement>} divCartasJugadores Contenedores de cartas.
 * @param {NodeListOf<HTMLElement>} elementosPuntaje Elementos donde se muestran los puntajes.
 * @param {number} puntosMinimos Puntuación mínima a superar por la computadora.
 * @returns {void}
 */
export const turnoComputadora = (
    deck,
    puntosJugadores,
    turno,
    divCartasJugadores,
    elementosPuntaje,
    puntosMinimos
) => {
    /** @type {number} */
    let puntosComputadora = 0;

    do {
        /** @type {string} */
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores, carta, turno);
        crearCarta(carta, turno, divCartasJugadores);
        mostrarPuntos(puntosJugadores, turno, elementosPuntaje);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}
