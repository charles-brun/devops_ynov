FROM node:20-slim
WORKDIR /app
COPY ./package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-slim
RUN useradd -ms /bin/bash bidule
USER bidule
COPY --from=0 /app/build/index.js index.js
CMD node index.js
