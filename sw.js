const CACHE_NAME = 'cache-v2'; // Atualize o nome do cache para forçar a atualização

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                // Adicione aqui os arquivos que deseja armazenar em cache
                '/',
                '/index.html',
                '/app.js',
                '/manifest.json',
                // Adicione outros arquivos necessários
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName); // Remove caches antigos
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // Retorna a resposta do cache se disponível
            }

            return fetch(event.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, response.clone()); // Armazena a resposta no cache
                    return response;
                });
            });
        })
    );
});