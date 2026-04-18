# Full-Stack MERN + Redis Example

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-7.x-green?logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Express-5.x-lightgrey?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/React-18+-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Node.js-20+-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Redis-7.x-red?logo=redis" alt="Redis">
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

A production-ready **MERN stack boilerplate enhanced with Redis caching**. Demonstrates caching strategies (cache-aside, write-through), session storage, and rate-limiting with Redis — all wired with Docker Compose.

---

## 🏗️ Architecture

```mermaid
flowchart TD
    Client["⚛️ React\n:3000"] -->|REST / Axios| API["🚀 Express API\n:5000"]
    API -->|Cache Hit| Redis["🔴 Redis\n(cache + sessions)"]
    API -->|Cache Miss| MongoDB["🍃 MongoDB\n(persistent store)"]
    MongoDB -->|populate cache| Redis
    Redis -->|cached response| API
    API --> Client
```

---

## 🚀 Quick Start

```bash
docker-compose up
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Redis Commander: http://localhost:8081

---

## ⚡ Caching Strategies

### Cache-Aside (Read)
```js
const cached = await redis.get(`user:${id}`);
if (cached) return JSON.parse(cached);

const user = await User.findById(id);
await redis.set(`user:${id}`, JSON.stringify(user), 'EX', 3600);
return user;
```

### Session Storage
```js
app.use(session({
  store: new RedisStore({ client: redis }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, maxAge: 86400000 }
}));
```

---

## 📁 Structure

```
client/          # React + Vite frontend
server/
├── controllers/
├── models/      # Mongoose schemas
├── middleware/
│   └── cache.js # Redis cache middleware
├── routes/
└── app.js
docker-compose.yml
```

---

## 📄 License

MIT
