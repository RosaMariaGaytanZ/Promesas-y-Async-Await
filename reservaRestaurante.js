// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const RESTAURANTE = { mesasDisponibles : 5
 
}; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    console.log(`[Procesando] Verificando disponibilidad para ${mesasSolicitadas} mesa(s)...`);
    setTimeout(() => {
        if (mesasSolicitadas <= RESTAURANTE.mesasDisponibles) {
                resolve(`¡Mesas disponibles! Se han apartado ${mesasSolicitadas} mesa(s).`);
            } else {
                reject(new Error(`Lo sentimos, solo nos quedan ${RESTAURANTE.mesasDisponibles} mesas disponibles.`));
            }
    }, 1500);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    console.log(`[Procesando] Enviando correo de confirmación a ${nombreCliente}...`);
    setTimeout(() => {
        const exito = Math.random() > 0.2; // 80% de probabilidad de éxito, 20% de fallo

        if (exito) {
            resolve(`📧 Correo de confirmación enviado con éxito a ${nombreCliente}.`);
        } else {
            reject(new Error("Error de conexión: No se pudo enviar el correo de confirmación."));
        }
    }, 1000);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    console.log(`\n--- INICIANDO RESERVA PARA: ${nombreCliente} (${mesasSolicitadas} mesas) ---`);
  try {
    const resultadoMesas = await verificarDisponibilidad(mesasSolicitadas);
        console.log(`✅ ${resultadoMesas}`);

        // Paso 2: Si hay mesas, proceder a enviar el correo
        const resultadoCorreo = await enviarConfirmacionReserva(nombreCliente);
        console.log(`✅ ${resultadoCorreo}`);
        
        console.log(`🎉 ¡Reserva completada con éxito para ${nombreCliente}!`);
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas