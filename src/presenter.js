import {Gastos, validarCampos} from "./JS/RegistroGasto.js"; 

// Lógica para registrar y mostrar gastos
const formulario = document.getElementById('gastos-form');
const gastosDiv = document.getElementById('gastos-div');
const gastos = new Gastos();

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener valores del formulario
  const fecha = document.getElementById('fecha').value;
  const monto = document.getElementById('monto').value;
  const descripcion = document.getElementById('descripcion').value || ""; 
  const errores = validarCampos(fecha);
  const errorFechaDiv = document.getElementById('error-fecha');

  errorFechaDiv.textContent = "";

  if (errores.length > 0) {
    errorFechaDiv.textContent = errores[0]; 
     return;
   }
  // Registrar gasto
  const nuevoGasto = { fecha, monto, descripcion };
  gastos.registrarGasto(nuevoGasto);

  // Mostrar el gasto en la página
  gastosDiv.innerHTML += `<p>Fecha: ${fecha} - Monto: ${monto} - Descripción: ${descripcion || 'Sin descripción'}</p>`;
});
