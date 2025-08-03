const axios = require('axios');

// Filtro de lenguaje inapropiado (lista simplificada)
const palabrasProhibidas = ['malpalabra', 'insulto', 'grosería'];

function contieneLenguajeInapropiado(texto) {
  return palabrasProhibidas.some(palabra => 
    texto.toLowerCase().includes(palabra.toLowerCase())
  );
}   


// Función para consultar la API de pedidos (simulada)
async function consultarEstadoPedido(codigo) {
  try {
    const response = await axios.get(`https://api.restaurante.com/pedidos/${codigo}`);
    return response.data.estado; // Ejemplo: { "codigo": "ABC123", "estado": "en_camino" }
  } catch (error) {
    return null;
  }
}

// Flujo principal
async function manejarMensajeWhatsApp(mensajeCliente) {
  // Paso 1: Filtro de lenguaje
  if (contieneLenguajeInapropiado(mensajeCliente)) {
    return "Lo siento, no podemos atender mensajes inapropiados.";
  }

  // Paso 2: Extraer código de pedido (ej: "Quiero saber de mi pedido ABC123")
  const codigoPedido = mensajeCliente.match(/([A-Z0-9]{6})/i)?.[0];

  if (!codigoPedido) {
    return "Por favor, ingresa tu código de pedido (ejemplo: ABC123).";
  }

  // Paso 3: Consultar API
  const estado = await consultarEstadoPedido(codigoPedido);

  if (!estado) {
    return "❌ No encontré tu pedido. Verifica el código e intenta nuevamente.";
  }

  // Paso 4: Mapear estado a respuesta amigable
  const estadosTraducidos = {
    "en_proceso": "🚀 En preparación",
    "en_camino": "🛵 En camino a tu domicilio",
    "entregado": "✅ Entregado"
  };

  return `📦 Estado de tu pedido *${codigoPedido}*: ${estadosTraducidos[estado] || estado}`;
}

// Ejemplo de uso de WhatsAPPBusiness:
const mensajeEjemplo = "Hola, ¿cómo va mi pedido XYZ789?";
manejarMensajeWhatsApp(mensajeEjemplo).then(console.log);