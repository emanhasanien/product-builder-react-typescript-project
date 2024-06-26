

/**
 * Slices a given text to a maximum length and appends an ellipsis if needed.
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced text (default is 50 characters).
 * @returns {string} - The sliced text with an ellipsis if it was truncated.

 */
export function textSlicer (txt : string, max:number = 50){

    if(txt.length >= max) return `${txt.slice(0, max )} ...`
    return txt
}