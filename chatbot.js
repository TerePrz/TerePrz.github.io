import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

document.addEventListener('DOMContentLoaded', () => {
    createChat({
        webhookUrl: 'https://rainbowprz.app.n8n.cloud/webhook/d473d3e3-f74b-47f1-8a72-b724ef1f3b92',
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'es',
        initialMessages: [
            'Hola! 👋',
            'Mi nombre es Asistente Contable AR, en que puedo ayudarte hoy?'
        ],
        i18n: {
            es: {
                title: 'Hola! 👋',
                subtitle: "Inicia un chat. Estamos disponibles 24/7 ",
                footer: '',
                getStarted: 'Nueva Conversación',
                inputPlaceholder: 'Escribe tu pregunta..',
            },
        },
        webhookConfig: {
            method: 'POST',
            headers: {}
        },
    });
});
