import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./AdminSidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faHome,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faBan,
  faCog,
  faSignOut,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/*
const items = [
  {
    label: "Overview",
    url: "/admin/overview",
    activeConditions: ["/admin/overview", "/admin"],
    matchMode: "exact",
  },
  {
    label: "Details",
    url: "/admin/details",
    activeConditions: ["/admin/details"],
    matchMode: "startsWith",
  },
]
*/
const SidebarCollapsibleItem = ({ icon, label, items }) => {
  const pathname = useLocation().pathname;
  const isActive = items.some((item) => {
    if (item.matchMode == "exact") {
      return item.activeConditions.some(
        (activeCondition) => activeCondition == pathname,
      );
    } else if (item.matchMode == "startsWith") {
      return item.activeConditions.some((activeCondition) =>
        pathname.startsWith(activeCondition),
      );
    }
  });

  const [isCollapsed, setIsCollapsed] = useState(isActive);

  return (
    <div
      className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem ${isActive ? "active" : ""}`}
    >
      <div
        className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem_HeadItem ${isActive ? "active" : ""}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="DAT_AdminSidebar_Menu_SidebarCollapsibleItem_HeadItem_Content">
          <FontAwesomeIcon
            icon={icon}
            className="DAT_AdminSidebar_Menu_SidebarCollapsibleItem_HeadItem_Content_Icon"
          />
          <div className="DAT_AdminSidebar_Menu_SidebarCollapsibleItem_HeadItem_Content_Label">
            {label}
          </div>
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem_HeadItem_Arrow ${isCollapsed ? "collapsed" : ""} `}
        />
      </div>
      <div
        className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem_ItemMenu ${isActive ? "active" : ""} ${isCollapsed ? "collapsed" : ""}`}
      >
        <div
          className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem_ItemMenu_Container  ${isCollapsed ? "collapsed" : ""}`}
        >
          {items.map((item, index) => {
            const isItemActive =
              (item.matchMode == "exact" &&
                item.activeConditions.includes(pathname)) ||
              (item.matchMode == "startsWith" &&
                item.activeConditions.some((activeCondition) =>
                  pathname.startsWith(activeCondition),
                ));
            return (
              <NavLink
                to={item.url}
                end
                reloadDocument={true}
                className="DAT_AdminSidebar_Menu_SidebarCollapsibleItem_ItemMenu_Container_Item"
              >
                <div
                  className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem_ItemMenu_Container_Item_DotBox ${isItemActive ? "active" : ""}`}
                >
                  <div className="DAT_AdminSidebar_Menu_SidebarCollapsibleItem_ItemMenu_Container_Item_DotBox_Dot"></div>
                </div>
                <div
                  to={item.url}
                  className={`DAT_AdminSidebar_Menu_SidebarCollapsibleItem_ItemMenu_Container_Item_Label ${isItemActive ? "active" : ""}`}
                >
                  {item.label}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, url, activeCondition, matchMode }) => {
  const pathname = useLocation().pathname;
  const checkActive = () => {
    switch (matchMode) {
      case "exact":
        return activeCondition === pathname;
      case "startsWith":
        return pathname.startsWith(activeCondition);
      default:
        return false;
    }
  };
  const isActive = checkActive();

  return (
    <NavLink
      to={url}
      end
      reloadDocument={true}
      className={`DAT_AdminSidebar_Menu_SidebarItem ${isActive ? "active" : ""}`}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <div className="DAT_AdminSidebar_Menu_SidebarItem_Content">
        <FontAwesomeIcon
          icon={icon}
          className="DAT_AdminSidebar_Menu_SidebarItem_Content_Icon"
        />
        <div className="DAT_AdminSidebar_Menu_SidebarItem_Content_Label">
          {label}
        </div>
      </div>
    </NavLink>
  );
};

const SidebarFooterItem = ({ icon, label, url, className, onClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`DAT_AdminSidebar_Footer_Item ${className}`}
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (url) {
          navigate(url);
        }
      }}
    >
      <div className="DAT_AdminSidebar_Footer_Item_Content">
        <FontAwesomeIcon
          icon={icon}
          className="DAT_AdminSidebar_Footer_Item_Content_Icon"
        />
        <div className="DAT_AdminSidebar_Footer_Item_Content_Label">
          {label}
        </div>
      </div>
    </div>
  );
};

const AdminSidebar = () => {
  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <div className="DAT_AdminSidebar">
      <div className="DAT_AdminSidebar_Header">
        <NavLink
          to="/admin"
          reloadDocument={true}
          className="DAT_AdminSidebar_Header_Logo"
        >
          EMS
        </NavLink>
      </div>
      <NavLink className="DAT_AdminSidebar_AccountBox">
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
      </NavLink>
      <div className="DAT_AdminSidebar_Menu">
        <SidebarCollapsibleItem
          icon={faHome}
          label="Home"
          items={[
            {
              label: "Overview",
              url: "/admin",
              activeConditions: ["/admin/overview", "/admin"],
              matchMode: "exact",
            },
            {
              label: "Details",
              url: "/admin/details",
              activeConditions: ["/admin/details"],
              matchMode: "startsWith",
            },
          ]}
        />
        <SidebarCollapsibleItem
          icon={faUser}
          label="Users"
          items={[
            {
              label: "Overview",
              url: "/admin/users",
              activeConditions: ["/admin/users"],
              matchMode: "exact",
            },
            {
              label: "Details",
              url: "/admin/users/details",
              activeConditions: ["/admin/users/details"],
              matchMode: "startsWith",
            },
          ]}
        />
        <SidebarItem
          icon={faBan}
          label="Banned Users"
          activeCondition={"/admin/banned"}
          matchMode={"exact"}
          url={"/admin/banned"}
        />
      </div>
      <div className="DAT_AdminSidebar_Footer">
        <SidebarFooterItem
          icon={faCircleQuestion}
          label="Help"
          url={"/admin/help"}
        />
        <SidebarFooterItem
          icon={faSignOut}
          label="Logout"
          onClick={() => handleLogout()}
          className="DAT_AdminSidebar_Footer_Item_Logout"
        />
      </div>
    </div>
  );
};

export default AdminSidebar;
