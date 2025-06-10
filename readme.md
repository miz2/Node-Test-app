Clean Up Using

docker rm -f my-node-app-container

Absolutely! Here's a professional-grade `README.md` file you can drop directly into your project directory:

---

```markdown
# 🧮 Node.js Add API - Dockerized with CI/CD

A minimal Express.js REST API that adds two numbers, with full testing, Docker containerization, and a Jenkins CI/CD pipeline.

---

## 🚀 Features

- 🧾 **RESTful API** with input validation
- 🧪 **Unit & Integration tests** using Jest + Supertest
- 🐳 **Dockerized** for consistent environment
- 🔁 **CI/CD Pipeline** with Jenkins
- 🧼 **Automated Docker Cleanup** after builds

---

## 📦 Project Structure

```

.
├── index.js               # Main Express app
├── package.json
├── Dockerfile             # Docker config
├── Jenkinsfile            # CI/CD pipeline
├── **tests**/add.test.js  # Test suite
└── README.md

````

---

## ⚙️ API Endpoints

### `GET /`
Health check endpoint.

**Response:**
```json
"Hello from Node.js app running in Docker!"
````

---

### `POST /add`

Adds two numbers.

**Request Body:**

```json
{
  "a": 5,
  "b": 7
}
```

**Response:**

```json
{
  "result": 12
}
```

**Error Example:**

```json
{
  "error": "Inputs must be numbers"
}
```

---

## 🧪 Running Tests

```bash
npm install
npm test
```

> Tests are located in `__tests__/add.test.js`.

---

## 🐳 Docker Instructions

### 🔨 Build Docker Image

```bash
docker build -t my-node-app .
```

### 🚀 Run the Container

```bash
docker run -d -p 3000:3000 --name my-node-app-container my-node-app
```

### 🧼 Cleanup

```bash
docker rm -f my-node-app-container
docker rmi -f my-node-app
docker system prune -f --volumes
```

---

## 🔁 Jenkins CI/CD Pipeline

### Pipeline Stages:

1. **Checkout Code**
2. **Install Dependencies**
3. **Run Tests**
4. **Build Docker Image**
5. **Deploy Locally**
6. **Post-Build Cleanup**

#### 💡 To Run Locally on Jenkins:

Make sure Jenkins agent has:

* Docker CLI access
* Node.js installed
* Git credentials configured (or public repo)

