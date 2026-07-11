import { crearDeck } from './crear-deck.js';

/**
 * Reinicia la partida con un mazo nuevo, puntos a cero y los paneles del DOM vacíos.
 * @param {{ deck: string[]; tipos: string[]; especiales: string[]; puntosJugadores: number[]; turnoActual: number; }} estado Estado compartido del juego.
 * @param {{ mostrarPuntos: NodeListOf<HTMLElement>; divCartasJugadores: NodeListOf<HTMLDivElement>; btnPedir: HTMLButtonElement; btnDetener: HTMLButtonElement; }} refs Referencias del DOM para la interfaz del blackjack.
 * @param {number} [numJugadores=2] Cantidad de jugadores que tendrá la partida.
 * @returns {void}
 */
export const inicializarJuego = (estado, refs, numJugadores = 2) => {
    estado.deck = crearDeck(estado.tipos, estado.especiales);
    estado.puntosJugadores = Array.from({ length: numJugadores }, () => 0);

    const elementoResultado = document.querySelector('#resultado');

    if (elementoResultado) {
        elementoResultado.innerText = '';
    }

    refs.mostrarPuntos.forEach((elemento) => {
        elemento.innerText = 0;
    });

    refs.divCartasJugadores.forEach((contenedor) => {
        contenedor.innerHTML = '';
    });

    refs.btnPedir.disabled = false;
    refs.btnDetener.disabled = true;
}