import { pedirCarta, valorCarta, imgLetter } from "./";

/**
 * Gestiona todo lo relevante al turno de la computadora
 * @param {number} puntosMinimos - Los puntos minimos de la computadora 
 * @param {HTMLElement} puntosHTML - El elemento HTML para mostrar los puntos
 * @param {Array<string>} deck - El array<string> de cartas
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosHtml, divCartasComputadora ) => {

    try {
        if ( !puntosMinimos || !deck || !puntosHtml || !divCartasComputadora ) throw new Error('Los puntos minimos, los puntos HTML, el div de computadora y el deck son requeridos');
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta(deck);
    
            puntosComputadora = puntosComputadora + valorCarta( carta );
            puntosHtml.innerText = puntosComputadora;
            
            let imgCarta = imgLetter( carta );
            divCartasComputadora.append( imgCarta );
    
            if( puntosMinimos > 21 ) {
                break;
            }
    
        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );
    } catch (error) {
        alert(error.message);
    }

}