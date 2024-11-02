# Usando uma imagem do Node.js
FROM node:16-alpine

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e instala as dependências
COPY package.json yarn.lock ./
RUN yarn install

# Copia todos os arquivos para o contêiner
COPY . .

# Compila a aplicação para produção
RUN yarn build

# Usa uma imagem de servidor web leve para servir o app
FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expõe a porta para o frontend
EXPOSE 80

# Inicializa o Nginx
CMD ["nginx", "-g", "daemon off;"]
