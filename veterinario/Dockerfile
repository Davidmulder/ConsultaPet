# Usando uma imagem do PHP com suporte para o Apache
FROM php:8.1-apache

# Instala extensões PHP necessárias para o Laravel
RUN docker-php-ext-install pdo pdo_mysql

# Define o diretório de trabalho no contêiner
WORKDIR /var/www/html

# Copia os arquivos do projeto
COPY . .

# Instala o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instala as dependências do Laravel
RUN composer install

# Dá permissão à pasta de cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exponha a porta 80 para acessar o backend
EXPOSE 80

# Comando para iniciar o Apache
CMD ["apache2-foreground"]
