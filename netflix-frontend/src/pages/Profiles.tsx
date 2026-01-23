import { useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

const profiles = [
  { name: "Sam", color: "#2e8fff" },
  { name: "Berry", color: "#ff4b8b" },
  { name: "Kids", color: "#35c759" },
] as const;

function Profiles() {
  const { selectProfile } = useProfile();
  const navigate = useNavigate();

  const handleSelect = (name: (typeof profiles)[number]["name"]) => {
    selectProfile(name);
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <h1>Who's watching?</h1>
        <div style={{ display: "flex", gap: "30px" }}>
          {profiles.map((p) => (
            <div
              key={p.name}
              onClick={() => handleSelect(p.name)}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "6px",
                background: p.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
