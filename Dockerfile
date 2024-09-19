FROM node:18-alpine

WORKDIR /app

COPY hello-world.js .

EXPOSE 3000

CMD ["node", "hello-world.js"]