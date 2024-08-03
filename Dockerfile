FROM node:lts

WORKDIR /usr/app/

COPY . .
RUN npm i
RUN npm run build

# EXPOSE [The same value as PORT in .env.production]

CMD [ "npm", "run", "start" ] 