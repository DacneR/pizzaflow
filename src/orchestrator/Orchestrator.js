const { generateAIResponse } = require("/home/dacner/pizzaflow/src/service/aiService.js");

class Orchestrator {
  async process(message) {
    try {
      const response = await generateAIResponse(message.text);
      return response;
    } catch (error) {
      console.error("Error al procesar en Orchestrator:", error);
      return "Lo siento, tuve un problema interno al procesar tu mensaje. Intenta de nuevo en un momento.";
    }
  }
}

module.exports = Orchestrator;