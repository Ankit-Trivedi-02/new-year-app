# 🎉 New Year App

![React](https://img.shields.io/badge/React-v18-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-v5-brightgreen?logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-enabled-blue?logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-v20-brightgreen?logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-latest-blue?logo=npm&logoColor=white)


A modern React app (Vite + React) for celebrating the New Year!  
This project can be run **locally** or inside a **Docker container** for a consistent environment.

---

## ⚡ Features

- Built with **React** and **Vite**
- Fully hot-reload compatible
- Can run in a **Docker container** for easy deployment
- Lightweight Node.js Alpine image for production-ready containers

---

## 🛠️ Prerequisites

- **Node.js** v20 or higher (for local development)
- **npm** (comes with Node.js)
- **Docker** & **Docker Desktop** (optional, for Docker mode)

---

## 🚀 Local Development Setup (Normal Mode)

1. **Clone the repository**

```bash
git clone https://github.com/Ankit-Trivedi-02/new-year-app
cd new-year-app
cd client
npm install
npm run dev
```

Go to http://localhost:5173 to see the app running.



🐳 Docker Setup
This project comes with a Dockerfile so you can run it in a container.

1️⃣ Build the Docker image
From the project root (where Dockerfile is located):

bash
```bash
docker build -t new-year-app .
```

2️⃣ Run the container via docker desktop

or

bash
```bash
docker run -it -p 5173:5173 --name new-year-container new-year-app
```

The app will be available at http://localhost:5173

Use ```bash CTRL+C ``` to stop the container if running interactively


📁 Project Structure

```bash

new-year-app/
│
├─ client/
│
├─ public/
│
├─ src/
│  ├─ components/
│  │  ├─ Footer.jsx
│  │  ├─ MorphingText.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Snowfall.jsx
│  │  ├─ preview.jsx
│  │  └─ selection.jsx
│  ├─ context/
│  │  └─ DataContext.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
│
├─ .dockerignore
├─ .gitignore
├─ Dockerfile
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```


📦 License
Ankit License © 2025

IDK how to write license when i will learn i will use that way

