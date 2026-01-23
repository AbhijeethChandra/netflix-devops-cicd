// src/server.ts
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// ------------------
// Middleware
// ------------------
app.use(cors());
app.use(express.json());

// ------------------
// Config
// ------------------
const PORT = Number(process.env.PORT) || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://netflix-mongo-prod:27017/netflix";

// ------------------
// Movie model
// ------------------
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  rating: Number,
  description: String,
  posterUrl: String,
  category: String,
  trailerUrl: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// ------------------
// Routes
// ------------------

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "OK" });
});

// Root
app.get("/", (_req, res) => {
  res.send("Netflix clone backend running");
});

// Get all movies
app.get("/api/movies", async (_req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

// Get single movie
app.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch {
    res.status(400).json({ message: "Invalid movie ID" });
  }
});

// ------------------
// Start Server AFTER DB Connect
// ------------------
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
