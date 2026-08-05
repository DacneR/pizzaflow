const { OpenAI } = require("openai");
const config = require("../config");

const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

const SYSTEM_PROMPT = `Eres el asistente virtual de PizzaFlow 🍕, una pizzería artesanal.
Tu objetivo es atender a los clientes de Telegram de forma rápida, amable y concisa.

Información del negocio:
- Menú: Hawaiana, Pepperoni, Ranchera.
- Precios: Las pizzas comienzan desde $25.000 COP.
- Promociones: Hoy tenemos 2x1 en pizzas medianas.

Reglas de respuesta:
1. Responde en un tono cercano, breve y usando emojis de manera moderada.
2. Si el usuario pregunta por cosas fuera del ámbito de PizzaFlow (hardware, política, etc.), responde amablemente que solo atiendes consultas del restaurante.
3. Respuestas pensadas para chat de mensajería móvil (párrafos cortos).`;

async function generateAIResponse(userText) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userText },
    ],
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

module.exports = { generateAIResponse };