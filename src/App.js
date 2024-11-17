import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import GameRoom from "./components/GameRoom";
import ChessGame from "./components/ChessGame";
import SonicGame from "./components/SonicGame";

const App = () => {
  const [user, setUser] = useState(null); // Initialize user state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/room" element={<GameRoom user={user} />} />
        <Route path="/game1/:roomCode" element={<ChessGame user={user} />} />
        <Route path="/game1" element={<ChessGame user={user} />} />
        <Route path="/game2" element={<SonicGame />} />
      </Routes>
    </Router>
  );
};

export default App;
