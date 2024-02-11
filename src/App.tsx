import React from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import FullPost from "./pages/post/FullPost";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/post/:id" element={<FullPost />}/>
    </Routes>
  );
};

export default App;

