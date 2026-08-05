require('dotenv').config();

const config = {
    telegramToken: process.env.TELEGRAM_BOT_TOKEN,
    openaiApiKey: process.env.OPENAI_API_KEY,
};

// Validación simple
if (!config.telegramToken) {
    console.error('ERROR: TELEGRAM_BOT_TOKEN no está definido en el archivo .env');
    process.exit(1);
}

if (!config.openaiApiKey) {
    console.warn('ADVERTENCIA: OPENAI_API_KEY no está definido. Las funciones de IA no estarán disponibles.');
}

module.exports = config;
