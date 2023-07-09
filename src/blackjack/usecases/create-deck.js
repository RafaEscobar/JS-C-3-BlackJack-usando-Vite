import { shuffle } from "underscore";

// Esta función crea un nuevo deck
export const crearDeck = (tiposCartas, tiposCartasEspeciales) => {

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
    // console.log( deck );
    deck = shuffle( deck );
    return deck;
}