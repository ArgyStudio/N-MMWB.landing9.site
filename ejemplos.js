// ejemplos.js

document.addEventListener('DOMContentLoaded', () => {
const ejemplos = [
  'EJEMPLO: Cargás $10.000, Jugás con $30.000',
  'EJEMPLO: Cargás $11.000, Jugás con $33.000',
  'EJEMPLO: Cargás $12.000, Jugás con $36.000',
  'EJEMPLO: Cargás $13.000, Jugás con $39.000',
  'EJEMPLO: Cargás $14.000, Jugás con $42.000',
  'EJEMPLO: Cargás $15.000, Jugás con $45.000',
  'EJEMPLO: Cargás $16.000, Jugás con $48.000',
  'EJEMPLO: Cargás $17.000, Jugás con $51.000',
  'EJEMPLO: Cargás $18.000, Jugás con $54.000',
  'EJEMPLO: Cargás $19.000, Jugás con $57.000',
  'EJEMPLO: Cargás $20.000, Jugás con $60.000',
  'EJEMPLO: Cargás $21.000, Jugás con $63.000',
  'EJEMPLO: Cargás $22.000, Jugás con $66.000',
  'EJEMPLO: Cargás $23.000, Jugás con $69.000',
  'EJEMPLO: Cargás $24.000, Jugás con $72.000',
  'EJEMPLO: Cargás $25.000, Jugás con $75.000'
];





  const textoEjemplo = document.getElementById('example-text');
  let idx = 0;
  const intervaloMs = 4500; 

  function nextEjemplo() {
    textoEjemplo.textContent = ejemplos[idx];
    idx = (idx + 1) % ejemplos.length;
  }

  nextEjemplo();
  setInterval(nextEjemplo, intervaloMs);
});
