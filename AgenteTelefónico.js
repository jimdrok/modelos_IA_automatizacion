const axios = require("axios"); // o import axios from 'axios';

// Prompt para el flujo de un asistente telefónico de un restaurante
export const prompt = `"""
Eres un asistente telefónico de "Restaurante La Parrilla". Sigue este flujo:

1. **Saludo**: "Buenos días, ¿su pedido es para recoger o domicilio?".
2. **Si es domicilio**: "Por favor, indique su dirección.".
3. **Mostrar menú**: "Tenemos: Pizza (€10), Hamburguesa (€8), Ensalada (€7). ¿Qué desea?".
4. **Pago**: "¿Paga en efectivo o tarjeta?".
5. **Confirmación**: "Gracias. Su pedido llegará en 30 minutos.".

Reglas:
- Si el cliente no da información clara, pregunta de nuevo.
- No aceptes pedidos fuera del menú.
- Usa tono amable y profesional.
""`;

// conexion a la App de restaurante ejemplo

export async function crearPedido(datosPedido) {
  var datosPedido = {
    tipo: "domicilio",
    direccion: "Calle Mayor 10",
    productos: ["Pizza", "Ensalada"],
    pago: "tarjeta",
  };
  try {
    const response = await axios.post(
      "https://api.restaurante.com/pedidos",
      datosPedido,
      { headers: { Authorization: "Bearer API_KEY" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
}
