import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import type { Movie } from "../types";
import { Link } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

interface Section {
  title: string;
  key: string;
}

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { profile } = useProfile();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  const normalSections: Section[] = [
    { title: "Trending Now", key: "Trending" },
    { title: "Series", key: "Series" },
    { title: "Movies", key: "Movies" },
    { title: "Love Stories", key: "Love" },
    { title: "Suspense & Thrillers", key: "Suspense" },
  ];

  const kidsSections: Section[] = [
    { title: "Cartoons for Kids", key: "Kids-Cartoon" },
    { title: "Kids Movies", key: "Kids-Movie" },
  ];

  const sections = profile === "Kids" ? kidsSections : normalSections;

  const trimmedSearch = searchTerm.trim().toLowerCase();

  const filteredMovies = trimmedSearch
    ? movies.filter((m) => {
        const text = (m.title + " " + m.genre).toLowerCase();
        return text.includes(trimmedSearch);
      })
    : [];

  const showSearchResults = trimmedSearch.length > 0;

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
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          {profile === "Kids" ? "Kids Home" : "All Movies"}
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "20px" }}>
          {profile === "Kids"
            ? "Fun cartoons and movies safely picked for kids."
            : "Browse by category like Trending, Series, Love, Suspense."}
        </p>

        {/* 🔍 SEARCH BAR */}
        <div style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search for movies or series..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "10px 14px",
              borderRadius: "4px",
              border: "none",
              outline: "none",
              background: "#181818",
              color: "white",
              fontSize: "14px",
            }}
          />
        </div>

        {/* If searching → show search results grid */}
        {showSearchResults ? (
          <>
            <h3 style={{ marginBottom: "12px" }}>
              Search results for "{searchTerm}"
            </h3>
            {filteredMovies.length === 0 ? (
              <p style={{ opacity: 0.7 }}>No matches found.</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "18px",
                  marginTop: "10px",
                }}
              >
                {filteredMovies.map((movie) => (
                  <Link
                    key={movie._id}
                    to={`/movie/${movie._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div
                      style={{
                        background: "#181818",
                        borderRadius: "8px",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
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
                      <div style={{ padding: "8px" }}>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            marginBottom: "4px",
                          }}
                        >
                          {movie.title}
                        </div>
                        <div style={{ fontSize: "11px", opacity: 0.8 }}>
                          {movie.year} • {movie.genre}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          // Otherwise → normal sections (Trending, Series, etc.)
          sections.map((section) => {
            const list = movies.filter((m) => m.category === section.key);
            if (!list.length) return null;

            return (
              <div key={section.key} style={{ marginBottom: "30px" }}>
                <h3 style={{ marginBottom: "12px" }}>{section.title}</h3>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    overflowX: "auto",
                    paddingBottom: "8px",
                  }}
                >
                  {list.map((movie) => (
                    <Link
                      key={movie._id}
                      to={`/movie/${movie._id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div
                        style={{
                          minWidth: "180px",
                          maxWidth: "200px",
                          background: "#181818",
                          borderRadius: "8px",
                          overflow: "hidden",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
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
                        <div style={{ padding: "8px" }}>
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              marginBottom: "4px",
                            }}
                          >
                            {movie.title}
                          </div>
                          <div style={{ fontSize: "11px", opacity: 0.8 }}>
                            {movie.year} • {movie.genre}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
