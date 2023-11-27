FROM node:20-slim
RUN useradd -ms /bin/bash bidule
USER bidule
WORKDIR /app
COPY ./package*.json .
RUN npm ci
COPY . .
RUN npm run build
CMD npm start
