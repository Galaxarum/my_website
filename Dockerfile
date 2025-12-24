FROM node:20-slim AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run generate

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 8080
