<?php

return [
    'paths' => ['api/*', 'login', '*'], // Especifique as rotas que precisam de CORS

    'allowed_methods' => ['*'], // Permite todos os métodos HTTP (GET, POST, etc.)

    'allowed_origins' => ['http://localhost:3000'], // Substitua pelo domínio do frontend (exemplo: 'http://localhost:3000' para React)

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Permite todos os headers

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Necessário se estiver usando autenticação ou cookies
];
