// Colores base
const verdeBase = { r: 0x00, g: 0x99, b: 0x00 };
const rojoBase  = { r: 0x9D, g: 0x00, b: 0x00 };

// Referencias
const rangoVerde = document.getElementById("rangoVerde");
const rangoRojo = document.getElementById("rangoRojo");
const hexVerde = document.getElementById("hexVerde");
const hexRojo = document.getElementById("hexRojo");
const franjaVerde = document.querySelector(".verde");
const franjaRojo = document.querySelector(".roja");

// Función para interpolar colores entre blanco (#FFFFFF) y un color base
function calcularColor(base, porcentaje) {
  const factor = porcentaje / 100;
  const r = Math.round(255 - (255 - base.r) * factor);
  const g = Math.round(255 - (255 - base.g) * factor);
  const b = Math.round(255 - (255 - base.b) * factor);
  return { r, g, b };
}

// Función para convertir RGB a HEX
function rgbAHex(r, g, b) {
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}

// Actualizar color
function actualizarColor(base, rango, hexInput, franja) {
  const porcentaje = parseInt(rango.value, 10);
  const { r, g, b } = calcularColor(base, porcentaje);
  const hex = rgbAHex(r, g, b);
  hexInput.value = hex;
  franja.style.backgroundColor = hex;
}

// Listeners
rangoVerde.addEventListener("input", () => actualizarColor(verdeBase, rangoVerde, hexVerde, franjaVerde));
rangoRojo.addEventListener("input", () => actualizarColor(rojoBase, rangoRojo, hexRojo, franjaRojo));

// Inicialización
window.addEventListener("DOMContentLoaded", () => {
  actualizarColor(verdeBase, rangoVerde, hexVerde, franjaVerde);
  actualizarColor(rojoBase, rangoRojo, hexRojo, franjaRojo);
});
