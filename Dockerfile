FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./ ./
RUN yarn react-scripts --openssl-legacy-provider build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
