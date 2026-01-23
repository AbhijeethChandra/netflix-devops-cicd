import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import { useProfile } from "./context/ProfileContext";

function App() {
  const { isLoggedIn, profile, logout } = useProfile();
  const location = useLocation();

  const onAuthScreen =
    location.pathname === "/login" || location.pathname === "/profiles";

  // Show navbar only when user is logged in, profile selected, and NOT on auth screens
  const showNavbar = isLoggedIn && !!profile && !onAuthScreen;

  return (
    <div className="app">
      {showNavbar && (
        <header
          style={{
            background: "#141414",
            color: "white",
            padding: "10px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div style={{ fontWeight: "bold", fontSize: "24px", color: "red" }}>
              NETFLIX
            </div>
            <nav style={{ display: "flex", gap: "16px" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
              <Link
                to="/watchlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                Watchlist
              </Link>
            </nav>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {profile && (
              <span style={{ fontSize: "14px", opacity: 0.8 }}>
                Profile: {profile}
              </span>
            )}
            <button
              onClick={logout}
              style={{
                background: "transparent",
                border: "1px solid #666",
                color: "white",
                padding: "4px 10px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              Logout
            </button>
          </div>
        </header>
      )}

      <main
        style={{
          background: "#000",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />

          <Route
            path="/"
            element={isLoggedIn && profile ? <Home /> : <Login />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
