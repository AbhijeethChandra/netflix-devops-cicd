import React, { createContext, useContext, useEffect, useState } from "react";

type ProfileName = "Sam" | "Berry" | "Kids";

interface ProfileContextType {
  isLoggedIn: boolean;
  profile: ProfileName | null;
  login: () => void;
  logout: () => void;
  selectProfile: (profile: ProfileName) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<ProfileName | null>(null);

  useEffect(() => {
    const storedLogin = localStorage.getItem("nf_logged_in");
    const storedProfile = localStorage.getItem("nf_profile") as ProfileName | null;
    if (storedLogin === "true") setIsLoggedIn(true);
    if (storedProfile) setProfile(storedProfile);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("nf_logged_in", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setProfile(null);
    localStorage.removeItem("nf_logged_in");
    localStorage.removeItem("nf_profile");
  };

  const selectProfile = (p: ProfileName) => {
    setProfile(p);
    localStorage.setItem("nf_profile", p);
  };

  return (
    <ProfileContext.Provider value={{ isLoggedIn, profile, login, logout, selectProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
};
