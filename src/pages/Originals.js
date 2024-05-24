import React from "react";

import { Outlet } from "react-router-dom";

import ActionBar from "../Layout/ActionBar";

const OriginalsPage = () => {
  const actions = {
    "Timothy James": "timothy_james",
  };
  return (
    <>
      <ActionBar name="Originals" actions={actions} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default OriginalsPage;
