import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import PathNotFound from "./Layout/PathNotFound"
import GlobalNav from './Layout/GlobalNavBar';
import OriginalsRoutes from './pages/OriginalsRoutes';
import HomePage from './pages/Home';
import './index.scss';
import AboutPage from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <GlobalNav />
      </header>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="originals/*" element={<OriginalsRoutes/>} />
          <Route path="*" element={<PathNotFound />} />
          <Route path="about" element={<AboutPage />} />
          {/* ... etc. */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
