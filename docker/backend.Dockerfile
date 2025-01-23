FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npx nx build backend
WORKDIR /app/dist/apps/backend
EXPOSE 3000
CMD ["node", "main.js"]
