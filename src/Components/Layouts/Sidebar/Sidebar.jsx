import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faLocationDot,
  faChartSimple,
  faSolarPanel,
  faFileLines,
  faScrewdriverWrench,
  faWallet,
  faGear,
  faArrowRight,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

const Sidebar = () => {
  const menuItems = [
    { id: "overview", name: "Overview", icon: faTableCellsLarge, path: "/" },
    { id: "sites", name: "Sites", icon: faLocationDot, path: "/sites" },
    { id: "analytics", name: "Analytics", icon: faChartSimple, path: "/analytics" },
    { id: "devices", name: "Devices", icon: faSolarPanel, path: "/devices" },
    { id: "reports", name: "Reports", icon: faFileLines, path: "/reports" },
    { id: "maintenance", name: "Maintenance", icon: faScrewdriverWrench, path: "/maintenance" },
    { id: "billing", name: "Billing", icon: faWallet, path: "/billing" },
    { id: "settings", name: "Settings", icon: faGear, path: "/settings" },
  ];

  return (
    <div className="DAT_Sidebar">
      {/* Logo Section */}
      <div className="DAT_Sidebar_Logo">
        <div className="DAT_Sidebar_Logo_Icon">
          <img src="../../../../src/assets/DAT_Logo.png" ></img>
        </div>
        <span className="DAT_Sidebar_Logo_Text">DAT_EMS</span>
      </div>

      {/* Navigation Menu */}
      <div className="DAT_Sidebar_Menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            className={`DAT_Sidebar_Menu_Item ${item.active ? "DAT_Sidebar_Menu_Item_Active" : ""
              }`}
          >
            <div className="DAT_Sidebar_Menu_Item_Icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <span className="DAT_Sidebar_Menu_Item_Text">{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Promo Card */}
      <div className="DAT_Sidebar_PromoCard">
        <div className="DAT_Sidebar_PromoCard_Image">
          <img src="/sidebar_promo.png" alt="Promo background" />
        </div>
        <div className="DAT_Sidebar_PromoCard_Content">
          <h4 className="DAT_Sidebar_PromoCard_Title">
            Clean Energy,<br />Brighter Tomorrow
          </h4>
          <p className="DAT_Sidebar_PromoCard_Desc">
            You've reduced 158 tons of CO2 emissions this year.
          </p>
          <button className="DAT_Sidebar_PromoCard_Btn">
            <span>View Impact</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
