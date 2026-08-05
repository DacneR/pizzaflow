const Orchestrator = require("/home/dacner/pizzaflow/src/orchestrator/Orchestrator.js");

const orchestrator = new Orchestrator();

module.exports = async (ctx)=>{

    const respuesta = await orchestrator.process(ctx);

    await ctx.reply(respuesta);

}