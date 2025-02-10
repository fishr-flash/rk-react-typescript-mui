# Базовый образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код в контейнер
COPY . .

# Открываем порт для дев-сервера
EXPOSE 3000

# Команда по умолчанию: запуск Webpack Dev Server
CMD ["npm", "run", "start"]
