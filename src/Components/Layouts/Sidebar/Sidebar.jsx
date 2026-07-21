import React from "react";
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
  faChevronDown,
  faArrowRight,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

const Sidebar = () => {
  const menuItems = [
    { id: "overview", name: "Overview", icon: faTableCellsLarge, active: true },
    { id: "sites", name: "Sites", icon: faLocationDot, active: false },
    { id: "analytics", name: "Analytics", icon: faChartSimple, active: false },
    { id: "devices", name: "Devices", icon: faSolarPanel, active: false },
    { id: "reports", name: "Reports", icon: faFileLines, active: false },
    { id: "maintenance", name: "Maintenance", icon: faScrewdriverWrench, active: false },
    { id: "billing", name: "Billing", icon: faWallet, active: false },
    { id: "settings", name: "Settings", icon: faGear, active: false },
    { id: "Play", name: "Play", icon: faBolt, active: false },
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
          <div
            key={item.id}
            className={`DAT_Sidebar_Menu_Item ${item.active ? "DAT_Sidebar_Menu_Item_Active" : ""
              }`}
          >
            <div className="DAT_Sidebar_Menu_Item_Icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <span className="DAT_Sidebar_Menu_Item_Text">{item.name}</span>
          </div>
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

      {/* Profile Section */}
      <div className="DAT_Sidebar_Profile">
        <img
          className="DAT_Sidebar_Profile_Avatar"
          src="/user_avatar.png"
          alt="Alex Carter Avatar"
        />
        <div className="DAT_Sidebar_Profile_Info">
          <span className="DAT_Sidebar_Profile_Info_Name">Alex Carter</span>
          <span className="DAT_Sidebar_Profile_Info_Role">Admin</span>
        </div>
        <div className="DAT_Sidebar_Profile_Arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
