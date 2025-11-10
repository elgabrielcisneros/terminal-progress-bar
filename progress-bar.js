// 💬 Tu tarea:
// Usa .repeat() para construir la parte visual:
//
// 1. Calcula cuántos bloques llenos (█) debe tener según el porcentaje.
// 2. Calcula cuántos espacios vacíos (-) quedan.
// 3. Muestra el resultado completo con el porcentaje al final.

// 💡 Pista:
// La barra podría tener una longitud fija, por ejemplo 10 caracteres.

const endBar = 100;
const progressBar = 10;

for (
  let startProgressBar = 1;
  startProgressBar < progressBar;
  startProgressBar++
) {
  console.log(
    "█".repeat(startProgressBar) + "-".repeat(progressBar - startProgressBar)
  );
}
