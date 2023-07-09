import { shuffle } from "underscore";

/**
 * Esta función se encarga de generar el deck de cartas
 * @param {array<string>} tiposCartas - Ejemplo ['C','D','H','S']
 * @param {array<string>} tiposCartasEspeciales - Ejemplo ['A','J','Q','K']
 * @returns {array<string>} Retorna el deck en forma de array
 */

export const crearDeck = (tiposCartas, tiposCartasEspeciales) => { 
    try {
        if (!tiposCartas) throw new Error('Faltan parametros');
        
        let deck = [];
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tiposCartas ) {
                deck.push( i + tipo);
            }
        }
        for( let tipo of tiposCartas ) {
            for( let esp of tiposCartasEspeciales ) {
                deck.push( esp + tipo);
            }
        }
        deck = shuffle( deck );
        return deck;
    } catch (error) {
        alert(error.message);
    }
}