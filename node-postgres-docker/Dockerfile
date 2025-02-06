FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

ENV DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/mydb

# Start the application
CMD ["npm", "start"]
