/**
 * Esta funcion se encarga de generar el elmento HtmlImage de la carta correspondiente
 * @param {string} carta - El string de la carta /Eje 'A1
 * @returns {HTMLImageElement} - El elemento HtmlImg de la carta
 */
export const imgLetter = ( carta ) => {
    try {
        if ( !carta ) throw new Error("La carta debe ser proporcionada");
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
    } catch (error) {
        alert(error.message);
    }
}