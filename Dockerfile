FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run generate

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 8080