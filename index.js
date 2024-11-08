let entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("calcular");
let porcentajeSelect = document.getElementById("porcentaje");

function calcularprestamo() {
    // Obtener el monto ingresado
    const monto = parseFloat(entrada.value);

    // Obtener el porcentaje seleccionado
    const porcentaje = parseFloat(porcentajeSelect.value);

    if (isNaN(monto) || monto <= 0) {
        // Si el monto es inválido
        resultado.textContent = "Ingresa un monto válido";
    } else {
        // Realizar el cálculo con el porcentaje seleccionado
        const cantidad = monto * porcentaje;
        resultado.textContent = `El ${porcentaje * 100}% del monto es: ${cantidad.toFixed(2)}`;
    }
}

// Añadir el event listener al botón
boton.addEventListener("click", calcularprestamo);
