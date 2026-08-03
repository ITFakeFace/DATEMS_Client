import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import GeneralLayout from "./Components/Layouts/GeneralLayout/GeneralLayout";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Login from "./Components/Screens/Login/Login";
import Background from "./Components/Layouts/background/background";
import Error404Screen from "./Components/Screens/Error404Screen/Error404Screen";

function App() {
  return (
    <Routes>
      <Route path={""} element={<Background />} >

        <Route path={"/login"} element={<Login />} />
      </Route>
      <Route path={"/"} element={<GeneralLayout />}>
        <Route index element={<HomeScreen />} />
      </Route>
      <Route path="*" element={<Error404Screen />} />
    </Routes>
  );
}

export default App;
