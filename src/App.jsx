import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MissionMap from "./pages/MissionMap";
import MissionDetail from "./pages/MissionDetail";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

// Import the ErrorBoundary component we created
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    /* 1. Wrap the entire app in the generic ErrorBoundary */
    <ErrorBoundary>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<MissionMap />} />
            <Route path="/mission/:missionId" element={<MissionDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
