/**
 * Esta función nos permitira obtener el valor numerico de cada carta pasada
 * @param {string} carta - String completo de la carta /Ejemplo 'A1'
 * @returns {number} - Valor numerico de la carta
 */
export const valorCarta = ( carta ) => {
    try {
        if ( !carta ) throw new Error('Proporciona la carta');
        
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                    ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    } catch(error) {
        alert(error.message);
    }
}