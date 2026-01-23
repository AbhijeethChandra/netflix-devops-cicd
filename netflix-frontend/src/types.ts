export interface Movie {
  _id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  description: string;
  posterUrl: string;
  category: string;
  trailerUrl?: string;
}
