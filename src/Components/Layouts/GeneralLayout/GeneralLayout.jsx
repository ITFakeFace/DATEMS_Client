import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./GeneralLayout.scss";

const GeneralLayout = () => {
  return (
    <div className="DAT_GeneralLayout">
      <div className="DAT_GeneralLayout_Card">
        {/* Sidebar */}
        <Sidebar />

        {/* Main dashboard content area */}
        <div className="DAT_GeneralLayout_Main">
          {/* Header */}
          <Header />

          {/* Render child components (e.g. HomeScreen widgets) */}
          <div className="DAT_GeneralLayout_Content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
