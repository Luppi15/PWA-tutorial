if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('sw.js');
            console.log('Service Worker registrado com sucesso:', registration);
        } catch (error) {
            console.error('Falha ao registrar o Service Worker:', error);
        }
    });
}
