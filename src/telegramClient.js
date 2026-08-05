const EventEmitter = require('events');

/**
 * TelegramClient is a lightweight, dependency-free class to interact with the Telegram Bot API.
 * It supports sending messages, receiving and validating Webhook payloads, and event-driven update handling.
 */
class TelegramClient extends EventEmitter {
    /**
     * @param {string} token - The Telegram Bot Token from BotFather.
     */
    constructor(token) {
        super();
        if (!token) {
            throw new Error('Telegram Bot Token is required');
        }
        this.token = token;
    }

    /**
     * Validates if the incoming payload is a valid Telegram update structure.
     * Checks for standard update fields and the presence of update_id.
     * 
     * @param {any} payload - The body of the request to validate.
     * @returns {boolean} True if payload is a valid update, false otherwise.
     */
    validateWebhookPayload(payload) {
        if (!payload || typeof payload !== 'object') {
            return false;
        }
        if (typeof payload.update_id !== 'number') {
            return false;
        }
        
        const validFields = [
            'message', 'edited_message', 'channel_post', 'edited_channel_post',
            'inline_query', 'chosen_inline_result', 'callback_query',
            'shipping_query', 'pre_checkout_query', 'poll', 'poll_answer',
            'my_chat_member', 'chat_member', 'chat_join_request'
        ];

        return validFields.some(field => field in payload);
    }

    /**
     * Processes a valid Telegram update and emits appropriate events.
     * 
     * @param {object} update - The Telegram update payload.
     */
    handleUpdate(update) {
        if (!this.validateWebhookPayload(update)) {
            const error = new Error('Invalid webhook payload structure');
            this.emit('error', error);
            return;
        }

        this.emit('update', update);

        if (update.message) {
            const message = update.message;
            this.emit('message', {
                chatId: message.chat.id,
                text: message.text,
                from: message.from,
                raw: message
            });
        } else if (update.edited_message) {
            this.emit('edited_message', update.edited_message);
        } else if (update.callback_query) {
            this.emit('callback_query', update.callback_query);
        }
    }

    /**
     * Sends a text message to a specific chat via Telegram Bot API.
     * 
     * @param {number|string} chatId - Target chat ID.
     * @param {string} text - Message text.
     * @returns {Promise<object>} The raw response object from Telegram API.
     */
    async sendMessage(chatId, text) {
        if (!chatId) {
            throw new Error('chatId is required to send a message');
        }
        if (!text) {
            throw new Error('text is required to send a message');
        }

        const url = `https://api.telegram.org/bot${this.token}/sendMessage`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text
                })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.description || `HTTP error! status: ${response.status}`);
            }
            return data;
        } catch (error) {
            const wrappedError = new Error(`Failed to send message: ${error.message}`);
            this.emit('error', wrappedError);
            throw wrappedError;
        }
    }
}

module.exports = TelegramClient;
