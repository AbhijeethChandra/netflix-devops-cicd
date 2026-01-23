import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../api";
import type { Movie } from "../types";
import { useWatchlist } from "../hooks/useWatchlist";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const { add, watchlist } = useWatchlist();
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchMovieById(id)
      .then(setMovie)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;
  if (!movie) return <div style={{ padding: 20 }}>Movie not found</div>;

  const inWatchlist = watchlist.some((m) => m._id === movie._id);
  const canPlayTrailer = !!movie.trailerUrl; // we expect full embed URL here

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <img
          src={movie.posterUrl}
          alt={movie.title}
          style={{
            width: "300px",
            height: "440px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          {movie.title}
        </h1>
        <p style={{ opacity: 0.8, marginBottom: "10px" }}>
          {movie.year} • {movie.genre} • ⭐ {movie.rating}
        </p>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px auto" }}>
          {movie.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <button
            disabled={!canPlayTrailer}
            onClick={() => {
              if (canPlayTrailer) setShowTrailer(true);
            }}
            style={{
              padding: "10px 20px",
              background: canPlayTrailer ? "white" : "#555",
              color: canPlayTrailer ? "black" : "#999",
              border: "none",
              borderRadius: "4px",
              cursor: canPlayTrailer ? "pointer" : "not-allowed",
              fontWeight: "bold",
            }}
          >
            {canPlayTrailer ? "Play Trailer" : "Trailer Not Available"}
          </button>
          <button
            disabled={inWatchlist}
            onClick={() => add(movie)}
            style={{
              padding: "10px 20px",
              background: inWatchlist ? "#555" : "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: inWatchlist ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}
          >
            {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
          </button>
        </div>

        {showTrailer && movie.trailerUrl && (
          <div
            style={{
              marginTop: "20px",
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)", // stretch to full screen
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                aspectRatio: "16 / 9",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #333",
              }}
            >
              <iframe
                src={`${movie.trailerUrl}?autoplay=1`}
                title={`${movie.title} trailer`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
