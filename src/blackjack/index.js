import {
    pedirCarta,
    acumularPuntos,
    crearCarta,
    mostrarPuntos,
    turnoComputadora,
    inicializarJuego,
} from './usecases';

/**
 * Estado compartido de la partida.
 * @type {{
 *   deck: string[];
 *   tipos: string[];
 *   especiales: string[];
 *   puntosJugadores: number[];
 *   turnoActual: number;
 * }}
 */
const estado = {
    deck: [],
    tipos: ['C', 'D', 'H', 'S'],
    especiales: ['A', 'J', 'Q', 'K'],
    puntosJugadores: [],
    turnoActual: 0,
};

/**
 * Referencias principales del DOM que usa la interfaz del blackjack.
 * @type {{
 *   btnNuevo: HTMLButtonElement;
 *   btnPedir: HTMLButtonElement;
 *   btnDetener: HTMLButtonElement;
 *   divCartasJugadores: NodeListOf<HTMLDivElement>;
 *   mostrarPuntos: NodeListOf<HTMLElement>;
 * }}
 */
const refs = {
    btnNuevo: document.querySelector('#btn-nuevo'),
    btnPedir: document.querySelector('#btn-pedir'),
    btnDetener: document.querySelector('#btn-detener'),
    divCartasJugadores: document.querySelectorAll('.divCartas'),
    mostrarPuntos: document.querySelectorAll('small'),
};

/**
 * Reinicia la lógica del juego usando el estado y las referencias del DOM.
 * @returns {void}
 */
const iniciarPartida = () => {
    inicializarJuego(estado, refs);
};

/**
 * Evento que procesa la solicitud de una carta del jugador actual.
 * @returns {void}
 */
refs.btnPedir.addEventListener('click', () => {
    /** @type {number} */
    const turnoJugador = estado.turnoActual;
    /** @type {number} */
    const turnoMaquina = estado.puntosJugadores.length - 1;

    refs.btnDetener.disabled = false;

    /** @type {string} */
    const carta = pedirCarta(estado.deck);
    /** @type {number} */
    const puntosJugador = acumularPuntos(estado.puntosJugadores, carta, turnoJugador);

    crearCarta(carta, turnoJugador, refs.divCartasJugadores);
    mostrarPuntos(estado.puntosJugadores, turnoJugador, refs.mostrarPuntos);

    if (puntosJugador > 21) {
        refs.btnPedir.disabled = true;
        refs.btnDetener.disabled = true;
        turnoComputadora(
            estado.deck,
            estado.puntosJugadores,
            turnoMaquina,
            refs.divCartasJugadores,
            refs.mostrarPuntos,
            puntosJugador
        );

        return;
    }

    if (puntosJugador === 21) {
        refs.btnPedir.disabled = true;
        refs.btnDetener.disabled = true;
        turnoComputadora(
            estado.deck,
            estado.puntosJugadores,
            turnoMaquina,
            refs.divCartasJugadores,
            refs.mostrarPuntos,
            puntosJugador
        );
    }
});

/**
 * Evento que deja que la computadora juegue con la puntuación mínima del jugador.
 * @returns {void}
 */
refs.btnDetener.addEventListener('click', () => {
    /** @type {number} */
    const turnoMaquina = estado.puntosJugadores.length - 1;

    refs.btnDetener.disabled = true;
    refs.btnPedir.disabled = true;
    turnoComputadora(
        estado.deck,
        estado.puntosJugadores,
        turnoMaquina,
        refs.divCartasJugadores,
        refs.mostrarPuntos,
        estado.puntosJugadores[0]
    );
});

/**
 * Reinicia la partida cuando el usuario pulsa el botón de nuevo juego.
 * @returns {void}
 */
refs.btnNuevo.addEventListener('click', iniciarPartida);