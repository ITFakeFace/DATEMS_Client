import { NavLink, useLocation } from "react-router-dom";
import "./AdminSidebar.scss";

/*
const items = [
  {
    label: "Overview",
    url: "/admin/overview",
    activeCondition: "/admin/overview",
    matchMode: "exact",
  },
  {
    label: "Details",
    url: "/admin/details",
    activeCondition: "/admin/details",
    matchMode: "startsWith",
  },
]
*/
const SidebarItem = ({ icon, label, items }) => {
  const pathname = useLocation().pathname;
  const isActive = items.some((item) => {
    if (item.matchMode == "exact") {
      return item.path === pathname;
    } else if (item.matchMode == "startsWith") {
      return pathname.startsWith(item.path);
    }
  });

  const RegularItem = (item) => {
    return <div></div>;
  };

  const ActiveItem = (item) => {
    return <div></div>;
  };

  return <div></div>;
};

const AdminSidebar = () => {
  return (
    <div className="DAT_AdminSidebar">
      <div className="DAT_AdminSidebar_Header">
        <NavLink to="/" className="DAT_AdminSidebar_Header_Logo">
          EMS
        </NavLink>
      </div>
      <div className="DAT_AdminSidebar_AccountBox">
        <div className="DAT_AdminSidebar_AccountBox_Avatar">
          <div className="DAT_AdminSidebar_AccountBox_Avatar_Cover">
            <img
              className="DAT_AdminSidebar_AccountBox_Avatar_Cover_Image"
              src="/src/assets/Images/Avatars/DefaultAvatar.png"
            />
          </div>
        </div>

        <div className="DAT_AdminSidebar_AccountBox_Info">
          <div className="DAT_AdminSidebar_AccountBox_Info_Hello">Hello,</div>
          <div className="DAT_AdminSidebar_AccountBox_Info_Username">
            john.doe.superlongusername
          </div>
        </div>
      </div>
      <div className="DAT_AdminSidebar_Menu"></div>
      <div className="DAT_AdminSidebar_Footer"></div>
    </div>
  );
};

export default AdminSidebar;
