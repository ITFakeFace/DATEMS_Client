import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./Components/Layouts/GeneralLayout/GeneralLayout";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Login from "./Components/Screens/Login/Login";

function App() {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/"} element={<GeneralLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="sites" element={null} />
        <Route path="analytics" element={null} />
        <Route path="devices" element={null} />
        <Route path="reports" element={null} />
        <Route path="maintenance" element={null} />
        <Route path="billing" element={null} />
        <Route path="settings" element={null} />
      </Route>
    </Routes>
  );
}

export default App;
