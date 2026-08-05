
const responses = {

    hola: "¡Hola! Bienvenido a PizzaFlow 🍕",

    menu:
`🍕 Hawaiana
🍕 Pepperoni
🍕 Ranchera`,

    precio:
"Las pizzas comienzan desde $25.000",

    promociones:
"Hoy tenemos 2x1"

};

class Orchestrator{

    async process(message){

        const key = message.text.toLowerCase();

        return responses[key] ??
               "Todavía no entiendo esa solicitud.";

    }

}


module.exports = Orchestrator;