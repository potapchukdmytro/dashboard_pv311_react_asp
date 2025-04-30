# Використовує базовий образ Node.js
FROM node:18-alpine

# Створюємо робочу директорію
WORKDIR /app

# Копіюємо package.json
COPY package*.json ./

# Встановлюємо модулі
RUN npm install --force

# копіюємо весь вміст в контейнер
COPY . .

# додаємо змінні
ARG REACT_APP_API_URL
ARG REACT_APP_API_IMAGES_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_API_IMAGES_URL=$REACT_APP_API_IMAGES_URL

# будуємо проект
RUN npm run build

# Встановлюємо serve
RUN npm install -g serve

# встановлюємо порт 3000
EXPOSE 3000

# запуск
CMD ["serve", "-s", "build", "-l", "3000"]