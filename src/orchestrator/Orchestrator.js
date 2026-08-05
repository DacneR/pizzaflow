class Orchestrator {

    async process(ctx){

        console.log("Usuario:");
        console.log(ctx.message.text);

        return "Mensaje recibido.";

    }

}

module.exports = Orchestrator;