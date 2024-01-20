import React from 'react';
import LandingPage from './Landing';
import CreatePromptPage from './CreatePromptPage';
import RankPromptPage from './RankPromptPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-prompt" element={<CreatePromptPage />} />
        <Route path="/rank-prompt" element={<RankPromptPage />} />
      </Routes>
    </Router>
 );
}

export default App;