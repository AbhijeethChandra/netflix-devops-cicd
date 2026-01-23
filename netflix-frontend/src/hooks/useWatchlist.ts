import { useEffect, useState } from "react";
import type { Movie } from "../types";


const STORAGE_KEY = "watchlist";

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  function save(list: Movie[]) {
    setWatchlist(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function add(movie: Movie) {
    if (watchlist.find((m) => m._id === movie._id)) return;
    save([...watchlist, movie]);
  }

  function remove(id: string) {
    save(watchlist.filter((m) => m._id !== id));
  }

  return { watchlist, add, remove };
}
