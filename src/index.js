import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Only import the page you're testing:
import MusicSchoolPage from './pages/MusicSchoolPage';
// Comment out the others:
// import HomePage from './pages/HomePage';
// import StudioPage from './pages/StudioPage';
// import RetailPage from './pages/RetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MusicSchoolPage />} />
    </Routes>
  </BrowserRouter>
);
