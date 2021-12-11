import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddScreen from "./Components/AddScreen";
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen";
import Private from "./Components/Private";
import Register from "./Components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <HomeScreen />
            </Private>
          }
        />
        <Route
          path="/add"
          element={
            <Private>
              <AddScreen />
            </Private>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
