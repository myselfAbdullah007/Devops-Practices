# Docker + PostgreSQL + Node.js API

This project demonstrates how to set up a PostgreSQL database using Docker and connect it to a simple Node.js API.

---

## **Prerequisites**
- Docker installed on your machine
- Node.js and npm installed

---

## **1. Run PostgreSQL in Docker**
Pull and run the PostgreSQL container from Docker Hub:

```sh
docker run --name postgres-container -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
```

### **Explanation:**
- `--name postgres-container`: Assigns a name to the container.
- `-e POSTGRES_USER=myuser`: Sets PostgreSQL username.
- `-e POSTGRES_PASSWORD=mypassword`: Sets PostgreSQL password.
- `-e POSTGRES_DB=mydb`: Creates a database named `mydb`.
- `-p 5432:5432`: Maps PostgreSQL’s default port to localhost.
- `-d postgres`: Runs the container in detached mode.

---

## **2. Connect to PostgreSQL**


```sh
docker exec -it postgres-container psql -U myuser -d mydb
```

Once connected, create a table:
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
```

---

## **3. Create a Simple Node.js API**
### **Initialize a Node.js Project**
```sh
mkdir node-postgres-docker
cd node-postgres-docker
npm init -y
```

### **Install Dependencies**
```sh
npm install express pg dotenv
```

### **Create `.env` File**
Inside the project directory, create a `.env` file:
```sh
DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/mydb
```

### **Create `index.js`**
Create a file named `index.js` and add the code,

Take the code from the Repository.

---

## **5. Test the API**
### **Add a user:**
```sh
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "Abdullah", "email": "abdullah@gmail.com"}'
```

### **Get all users:**
```sh
curl http://localhost:3000/users
```

---

## **6. Manage the PostgreSQL Container**
- **Stop the container:**
  ```sh
  docker stop postgres-container
  ```
- **Restart the container:**
  ```sh
  docker start postgres-container
  ```
- **Remove the container:**
  ```sh
  docker rm -f postgres-container
  ```

---

Thats All Folks!
