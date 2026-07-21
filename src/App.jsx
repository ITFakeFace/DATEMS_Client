import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./Components/Layouts/GeneralLayout/GeneralLayout";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Login from "./Components/Screens/Login/Login";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<GeneralLayout />}>
        <Route index element={<HomeScreen />} />
        {/* <Route path={"/login"} element={<Login />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
