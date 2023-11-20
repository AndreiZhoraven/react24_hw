import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import CountriesRoute from "./routes/CountriesRoute";
import CountryRoute from "./routes/CountryRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeRoute />}></Route>
          <Route path="countries" element={<CountriesRoute />}></Route>
          <Route path="countries/:id" element={<CountryRoute />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}