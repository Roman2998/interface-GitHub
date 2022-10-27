import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectCommitsPage from "./pages/ProjectCommitsPage";

function App() {
  return (
      <Routes>
        <Route path="*" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/commits" element={<ProjectCommitsPage/>} />
      </Routes>
  );
}

export default App;
