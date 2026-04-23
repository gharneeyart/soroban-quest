import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MissionMap from "./pages/MissionMap";
import MissionDetail from "./pages/MissionDetail";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

/**
 * PageTransition
 * Wraps any page content and plays a fade-in + subtle slide-up animation
 */
function PageTransition({ children }) {
  return <div className="page-transition">{children}</div>;
}

export default function App() {
  // useLocation gives us a stable key that changes on every navigation.
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/*
          The `key` on <Routes> is intentionally set to location.key.
          When the key changes React tears down the old Routes tree and
          mounts a fresh one, which remounts PageTransition and replays
          the CSS animation cleanly on every route change.
        */}
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/missions"
            element={
              <PageTransition>
                <MissionMap />
              </PageTransition>
            }
          />
          <Route
            path="/mission/:missionId"
            element={
              <PageTransition>
                <MissionDetail />
              </PageTransition>
            }
          />
          <Route
            path="/profile"
            element={
              <PageTransition>
                <Profile />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}