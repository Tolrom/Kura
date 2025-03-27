# Étape 1 : Build de l'application Angular
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npx nx build frontend --prod

# Étape 2 : Serveur nginx
FROM nginx:1.23-alpine
COPY --from=build /app/dist/apps/frontend/browser /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
