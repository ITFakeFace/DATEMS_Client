import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import "./AdminLayout.scss";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

const AdminLayout = () => {
  return (
    <div className="DAT_AdminLayout">
      <AdminSidebar />
      <div className="DAT_AdminLayout_Body">
        <AdminHeader />
        <Outlet />
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
