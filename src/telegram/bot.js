const { Telegraf } = require("telegraf");
const config = require("../config");
const messageHandler = require("../handlers/MessageHandler");

const bot = new Telegraf(config.telegramToken);

bot.on("text", messageHandler);

module.exports = bot;