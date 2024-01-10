FROM node:current-alpine3.18

WORKDIR /app/nail-website
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]