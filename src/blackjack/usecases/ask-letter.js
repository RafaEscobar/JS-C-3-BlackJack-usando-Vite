/**
 * 
 * @param {array<string>} deck - El array del deck
 * @returns {string} - La carta /Ejemplo 'A1'
 */
export const pedirCarta = (deck) => {
    try {
        if ( deck.length === 0 || !deck ) throw new Error('No hay cartas en el deck o no se proporciono el deck');
        const carta = deck.pop();
        return carta;
    } catch(error) {
        alert(error.message);
    }
}