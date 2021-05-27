module.exports = function unitToComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/*
 * @example unitToComma(100000000)
 * @output 100,000,000
 */
