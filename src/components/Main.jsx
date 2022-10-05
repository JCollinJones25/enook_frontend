import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import Show from "../pages/Show";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/library/:id" render={(rp) => <Show {...rp} />} />
      </Routes>
    </main>
  );
};

export default Main;
