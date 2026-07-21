import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="DAT_Header">
      {/* Greeting Info */}
      <div className="DAT_Header_Greeting">
        <span className="DAT_Header_Greeting_Subtitle">
          Good morning, Alex 👋
        </span>
        <h1 className="DAT_Header_Greeting_Title">
          Your solar systems<br />
          are performing <span className="DAT_Header_Greeting_Title_Highlight">excellently</span>
        </h1>
      </div>

      {/* Action Buttons & Search */}
      <div className="DAT_Header_Actions">
        {/* Search Bar */}
        <div className="DAT_Header_Search">
          <div className="DAT_Header_Search_Icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type="text"
            className="DAT_Header_Search_Input"
            placeholder="Search Anything..."
          />
        </div>

        {/* Notification Button */}
        <button className="DAT_Header_Btn">
          <FontAwesomeIcon icon={faBell} />
          <span className="DAT_Header_Btn_Badge" />
        </button>

        {/* Calendar Button */}
        <button className="DAT_Header_Btn">
          <FontAwesomeIcon icon={faCalendarDays} />
        </button>
      </div>
    </div>
  );
};

export default Header;
