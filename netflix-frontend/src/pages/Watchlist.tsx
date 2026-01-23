import { Link } from "react-router-dom";
import { useWatchlist } from "../hooks/useWatchlist";

function Watchlist() {
  const { watchlist, remove } = useWatchlist();

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <h2>My Watchlist</h2>

      {!watchlist.length ? (
        <p style={{ marginTop: "10px" }}>Your watchlist is empty.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {watchlist.map((movie) => (
            <div
              key={movie._id}
              style={{
                background: "#181818",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Link
                to={`/movie/${movie._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Link>
              <div style={{ padding: "10px" }}>
                <div style={{ fontWeight: "bold" }}>{movie.title}</div>
                <button
                  onClick={() => remove(movie._id)}
                  style={{
                    marginTop: "8px",
                    padding: "4px 8px",
                    fontSize: "12px",
                    background: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
