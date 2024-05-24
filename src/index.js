import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNav from './Layout/GlobalNavBar';
import App from './App';
import PathNotFound from "./Layout/PathNotFound"
import OriginalsRoutes from './pages/OriginalsRoutes';

const HomePage = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h1>Gram's Hall Of Fame</h1>
      </div>
      <div style={{display: "flex", textAlign: "center", flexDirection: "column"}}>
        <p>This website is going to be a tribute to our Grandma and everything that she wrote as well as a place that we can compile all of our favorite songs to have a jam session whereever we are!</p>
        <p>To start this website off, only <a href="/originals/timothy_james">Timothy James</a> will be available, but I will be updating this frequently. So check back often!</p>
        <p>I will also be including a progress roadmap in the <a href="/about">About</a> page soon, so take a look at that too!</p>
      </div>
    </div>
  )
}

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
