/*let fechaActual = Date.now();
console.log(fechaActual);
let fechaNavidad = new Date("2022,11,25");
console.log(fechaNavidad);
let dias = (fechaActual - fechaNavidad);
console.log(dias/(24*60*60*1000))*/
const today = new Date();
const christmas = new Date ("12/25/2022");
const daysUntilChristmas = Math.floor(((((christmas-today)/1000)/60)/60)/24)+1;
console.log(daysUntilChristmas);
