import { Outlet } from "react-router-dom";
import "./AuthLayout.scss";

export default function AuthLayout() {
  return (
    <div className="DAT_AuthLayout">
      <Outlet></Outlet>
    </div>
  );
}
