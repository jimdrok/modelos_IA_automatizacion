# Modelos de IA para Automatización

## 📋 Descripción

Este proyecto contiene una colección de implementaciones de automatización basadas en Inteligencia Artificial para diferentes casos de uso empresariales. Cada módulo está diseñado para ser independiente y facilitar la integración con sistemas existentes.

## 🚀 Casos de Uso Implementados

### 1. Agente Telefónico Automatizado (`AgenteTelefónico.js`)

Sistema de atención telefónica automatizada para restaurantes que gestiona:

- **Flujo conversacional** estructurado para toma de pedidos
- **Validación de menú** y productos disponibles
- **Gestión de tipos de entrega** (domicilio/recogida)
- **Integración con API de pedidos** para procesamiento automático

**Características:**

- Prompt optimizado para mantener conversaciones naturales
- Validación de direcciones para entregas a domicilio
- Sistema de confirmación de pedidos
- Integración con sistemas de pago

### 2. Bot de WhatsApp Business (`WhatsAppBusiness.js`)

Automatización para consulta de pedidos a través de WhatsApp que incluye:

- **Filtro de lenguaje inapropiado** para mantener comunicación profesional
- **Extracción automática de códigos de pedido** mediante expresiones regulares
- **Consulta de estado en tiempo real** a través de APIs externas
- **Respuestas contextualizadas** con emojis y formato amigable

**Estados soportados:**

- 🚀 En preparación
- 🛵 En camino a domicilio
- ✅ Entregado

### 3. Clasificación Automática de Tickets (`ClasificaciónAutomáticaTickets.pseudo`)

Sistema inteligente de triaje de tickets de soporte que proporciona:

- **Clasificación automática** en categorías predefinidas usando IA
- **Detección de urgencia** mediante palabras clave y análisis de contenido
- **Escalado automático** de tickets críticos a agentes humanos
- **Procesamiento por lotes** de archivos CSV

**Categorías disponibles:**

- Logística
- Pagos
- Producto defectuoso
- Consulta general
- Urgente

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Axios** - Cliente HTTP para integraciones con APIs
- **OpenAI API** - Procesamiento de lenguaje natural
- **CSV Processing** - Manejo de datos estructurados
- **WhatsApp Business API** - Integración con mensajería
- **Express.js** - Framework web (planeado para NestJS)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jimdrok/modelos_IA_automatizacion.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus API keys
```

## 🔧 Configuración

### Variables de Entorno Requeridas

```env
OPENAI_API_KEY=tu_clave_de_openai
WHATSAPP_ACCESS_TOKEN=tu_token_de_whatsapp
RESTAURANT_API_KEY=tu_clave_api_restaurante
ZENDESK_API_KEY=tu_clave_zendesk
```

## 📚 Próximas Implementaciones

- **Backend NestJS** - Migración a framework enterprise con endpoints independientes
- **Sistema de autenticación** - JWT y OAuth2
- **Base de datos** - Integración con PostgreSQL/MongoDB
- **Documentación API** - Swagger/OpenAPI
- **Tests automatizados** - Jest y testing end-to-end
- **Monitoreo** - Logs estructurados y métricas

## 🔄 Flujo de Desarrollo

Cada implementación seguirá el patrón:

1. **Endpoint independiente** en NestJS
2. **Validación de entrada** con DTOs
3. **Procesamiento con IA** según el caso de uso
4. **Integración externa** con APIs terceros
5. **Respuesta estructurada** en formato JSON

## 📖 Documentación Adicional

- [Guía de Integración WhatsApp](docs/whatsapp-integration.md)
- [Configuración de OpenAI](docs/openai-setup.md)
- [API de Restaurante](docs/restaurant-api.md)

## 🤝 Contribuciones

Este es un proyecto de estudio y experimentación. Las contribuciones son bienvenidas para:

- Nuevos casos de uso de automatización
- Mejoras en la precisión de los modelos
- Optimizaciones de rendimiento
- Documentación adicional

## 📄 Licencia

MIT License - Ver archivo [LICENSE](LICENSE) para más detalles.

---

**Autor:** Pedro Jiménez  
**Repositorio:** [modelos_IA_automatizacion](https://github.com/jimdrok/modelos_IA_automatizacion)  
**Fecha:** Agosto 2025
