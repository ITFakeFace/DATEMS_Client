import { Outlet } from "react-router-dom";
import "./GeneralLayout.scss";

const GeneralLayout = () => {
  return (
    <div className={`DAT_GeneralLayout`}>
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
