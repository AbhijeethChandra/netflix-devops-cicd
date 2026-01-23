import axios from "axios";
import type { Movie } from "./types";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function fetchMovies() {
  const res = await axios.get<Movie[]>(`${API_BASE}/movies`);
  return res.data;
}

export async function fetchMovieById(id: string) {
  const res = await axios.get<Movie>(`${API_BASE}/movies/${id}`);
  return res.data;
}
