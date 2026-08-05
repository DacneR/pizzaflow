# PizzaFlow 🍕 - Orquestador IA para Telegram

PizzaFlow es un proyecto diseñado para actuar como intermediario inteligente entre Telegram y los Agentes de OpenAI. 

## 🚀 Inicio Rápido

### Requisitos
- Node.js (v18 o superior recomendado)
- Bot Token de Telegram (obtenido via @BotFather)
- API Key de OpenAI

### Instalación

1. Clona o descarga este repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env`.
   - Rellena `TELEGRAM_BOT_TOKEN` y `OPENAI_API_KEY`.

### Ejecución

Modo desarrollo (con recarga automática):
```bash
npm run dev
```

Modo producción:
```bash
npm start
```

## 🛠️ Arquitectura
El proyecto sigue una estructura modular para facilitar la escalabilidad:
- `src/index.js`: Punto de entrada y configuración del bot.
- `src/config.js`: Gestión de variables de entorno.
- `src/bot/`: (Próximamente) Lógica extendida del bot.
- `src/agents/`: (Próximamente) Integración con OpenAI Agents SDK.
