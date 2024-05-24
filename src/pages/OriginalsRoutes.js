import React from "react";

import { Route, Routes } from "react-router-dom";

import OriginalsPage from "./Originals";
import SheetComponent from "../components/SheetMusic";
import { TimothyJames } from "../music/TimothyJames";

const OriginalsHomePage = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h1>Marilyn Connelly Originals</h1>
      </div>
      <div style={{display: "flex", textAlign: "center", flexDirection: "column"}}>
        <p>This page is going to be a tribute to our Grandma and everything that she wrote.</p>
        <p>To start this page off, only <a href="/originals/timothy_james">Timothy James</a> will be available, but I will be updating this frequently. So check back often!</p>
      </div>
    </div>
  )
}

const OriginalsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OriginalsPage />}>
        <Route index element={<OriginalsHomePage />} />
        <Route path="timothy_james" element={<SheetComponent music={TimothyJames}  />} />
      </Route>
    </Routes>
  );
};

export default OriginalsRoutes;
