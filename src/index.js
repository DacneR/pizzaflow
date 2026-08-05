const { Telegraf } = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.telegramToken);

bot.start((ctx) => {
    ctx.reply('¡Bienvenido a PizzaFlow! 🍕\n\nSoy tu orquestador de IA. Estoy listo para ayudarte a gestionar tus pedidos y responder tus dudas.');
});

bot.help((ctx) => ctx.reply('Envía /start para comenzar o simplemente háblame para interactuar con la IA.'));

bot.on('text', (ctx) => {
    ctx.reply('He recibido tu mensaje. Próximamente estaré conectado con OpenAI para responderte de forma inteligente. 🤖');
});

bot.launch()
    .then(() => {
        console.log('🚀 PizzaFlow Bot iniciado correctamente');
    })
    .catch((err) => {
        console.error('❌ Error al iniciar el bot:', err);
    });

// Habilitar parada graciosa
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
