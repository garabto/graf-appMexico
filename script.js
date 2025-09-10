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

// Función para calcular color: 0 = base, negativos = hacia blanco, positivos = hacia negro
function calcularColor(base, valor) {
  const factor = valor / 100;
  let r, g, b;

  if (factor === 0) {
    ({ r, g, b } = base);
  } else if (factor < 0) {
    const f = Math.abs(factor);
    r = Math.round(base.r + (255 - base.r) * f);
    g = Math.round(base.g + (255 - base.g) * f);
    b = Math.round(base.b + (255 - base.b) * f);
  } else {
    const f = factor;
    r = Math.round(base.r * (1 - f));
    g = Math.round(base.g * (1 - f));
    b = Math.round(base.b * (1 - f));
  }

  return { r, g, b };
}

// RGB → HEX
function rgbAHex(r, g, b) {
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}

// Actualizar color
function actualizarColor(base, rango, hexInput, franja) {
  const valor = parseInt(rango.value, 10);
  const { r, g, b } = calcularColor(base, valor);
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