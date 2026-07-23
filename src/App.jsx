import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Entry from "./pages/Entry";
import Exit from "./pages/Exit";
import History from "./pages/History";

import "./App.css";

function App() {
  const [sessions, setSessions] = useState([]);

  const addSession = () => {
    const newSession = {
      id: Date.now(),
      plate: `GP${Math.floor(Math.random() * 900 + 100)}ABC`,
      status: "ACTIVE",
      fee: 0,
      entryTime: new Date().toLocaleString(),
      exitTime: "",
    };

    setSessions((prev) => [...prev, newSession]);
  };

  const completeSession = () => {
    const activeSession = sessions.find(
      (session) => session.status === "ACTIVE"
    );

    if (!activeSession) {
      alert("No active parking session found");
      return;
    }

    const updatedSessions = sessions.map((session) =>
      session.id === activeSession.id
        ? {
            ...session,
            status: "COMPLETED",
            fee: 20,
            exitTime: new Date().toLocaleString(),
          }
        : session
    );

    setSessions(updatedSessions);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1>🚗 Ticketless Parking System</h1>

        <nav className="navbar">
          <Link to="/">Dashboard</Link>
          <Link to="/entry">Vehicle Entry</Link>
          <Link to="/exit">Vehicle Exit</Link>
          <Link to="/history">History</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Dashboard sessions={sessions} />}
          />

          <Route
            path="/entry"
            element={<Entry addSession={addSession} />}
          />

          <Route
            path="/exit"
            element={
              <Exit completeSession={completeSession} />
            }
          />

          <Route
            path="/history"
            element={<History sessions={sessions} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;