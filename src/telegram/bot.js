const { Telegraf } = require("telegraf");
const config = require("/home/dacner/pizzaflow/src/config.js");
const messageHandler = require("/home/dacner/pizzaflow/src/handlers/MessageHandler.js");

const bot = new Telegraf(config.telegramToken);

//bot.on("text", messageHandler);

/*bot.on("text", async (ctx) => {

    console.log(ctx.message.text);

    await ctx.reply("Recibido");

});*/

bot.on("text", async (ctx) => {

    console.log("📩 Mensaje recibido");
    console.log("========== NUEVO MENSAJE ==========");
    console.log("Usuario :", ctx.from.first_name);
    console.log("Username:", ctx.from.username);
    console.log("Chat ID :", ctx.chat.id);
    console.log("Texto   :", ctx.message.text);
    console.log("==================================");

    await ctx.reply("Recibido");

});

module.exports = bot;