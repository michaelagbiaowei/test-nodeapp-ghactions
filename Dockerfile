FROM node:18-alpine

WORKDIR /app

COPY hello-world.js .

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

USER nonroot

EXPOSE 3000

CMD ["node", "hello-world.js"]