#  Netflix Clone

A full-stack streaming web application inspired by Netflix, built with modern web technologies.

This project features authentication, profiles, watchlist, movie categories, search functionality, and embedded YouTube trailers.

---
##  Tech Stack

Netflix Clone project using:

- **React (TypeScript) + Vite**
- **Node.js + Express (Node.js v16+)**
- **MongoDB (Local or MongoDB Atlas)**
- **Authentication + Profiles + Search + Trailer Player**
- **Watchlist System**

---

##  Installation & Setup

### 1️ Clone the Repository

cd netflix-clone

---

### 2️ Backend Setup

cd backend
npm install

Create a `.env` file inside `backend`:

MONGO_URI=your_mongodb_url
PORT=5000

Seed the database:

npm run seed

Start the backend:

npm run dev

Backend will run on:

 `http://localhost:5000`

---

### 3️ Frontend Setup
cd ../frontend
npm install

Create a `.env` file inside `frontend`:

VITE_API_URL=http://localhost:5000

Start the frontend:

npm run dev

Frontend will run on:

 `http://localhost:5173`

---

##  Features

| Feature | Status |
|--------|--------|
| Login / Logout System | ✔ |
| Profile Selection (Sam / Berry / Kids) | ✔ |
| Movie Browsing with Categories | ✔ |
| Search Bar | ✔ |
| Watchlist (Add / Remove) | ✔ |
| Full-Screen Trailer Player | ✔ |
| Kids Mode (filtered content) | ✔ |
| Responsive UI Layout | ✔ |

---

##  How to Use

1. Start backend and frontend
2. Open the website in browser
3. Login and choose a profile
4. Browse, search, play trailers, and add movies to watchlist

---

##  Project Purpose

This project is developed for learning and demonstration purposes under:

**Full Stack Web Application Development**

---

##  Future Enhancements (Optional)

- Firestore / JWT authentication
- Continue watching progress
- Recommendation engine
- Multi-language support
- Live streaming support

---

## Author

**Sameeksha C**  
BE Computer Science and Engineering  

---

##  License

This project is for educational and academic use only.

---








