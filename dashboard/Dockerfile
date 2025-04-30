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

# будуємо проект
RUN npm run build

# Встановлюємо serve
RUN npm install -g serve

# встановлюємо порт 3000
EXPOSE 3000

# запуск
CMD ["serve", "-s", "build", "-l", "3000"]