import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Login from "./Components/Screens/Login/Login";
import Error404Screen from "./Components/Screens/Error404Screen/Error404Screen";
import AuthLayout from "./Components/Layouts/AuthLayout/AuthLayout";
import AdminLayout from "./Components/Layouts/AdminLayout/AdminLayout";
import ExampleScreen from "./Components/Screens/ExampleScreen/ExampleScreen";
import ForgetPassword from "./Components/Screens/ForgetPassword/ForgetPassword";
function App() {
  return (
    <Routes>
      {/* Cụm route dành cho xác thực (Public) */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="example" element={<ExampleScreen />} />
        <Route path="forget" element={<ForgetPassword />} />
      </Route>

      {/* Cụm route dành cho Admin (Cần bảo vệ) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomeScreen />} />
      </Route>

      {/* Bắt mọi URL không tồn tại và trả về trang 404 độc lập */}
      <Route path="*" element={<Error404Screen />} />
    </Routes>
  );
}

export default App;
