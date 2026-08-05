const bot = require("./telegram/bot");

(async () => {

    console.log("Iniciando PizzaFlow...");

    try {

        await bot.launch();

        console.log("✅ Bot conectado correctamente");

    } catch (err) {

        console.error("❌ Error:", err);

    }

})();