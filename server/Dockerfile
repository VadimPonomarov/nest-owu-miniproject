FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY src /app/src

COPY prisma /app/prisma

COPY .env /app

COPY . /app

RUN npx prisma generate

CMD ["npm", "run", "start"]





