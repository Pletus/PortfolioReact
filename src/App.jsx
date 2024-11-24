import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
