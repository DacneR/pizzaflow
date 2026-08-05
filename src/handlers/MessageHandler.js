const Orchestrator = require("../orchestrator/Orchestrator");

const orchestrator = new Orchestrator();

module.exports = async(ctx)=>{

    const response = await orchestrator.process({

        userId: ctx.from.id,

        username: ctx.from.username,

        text: ctx.message.text,

        chatId: ctx.chat.id

    });

    await ctx.reply(response);

};