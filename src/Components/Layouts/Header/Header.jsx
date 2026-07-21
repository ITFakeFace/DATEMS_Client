import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import userAvatar from "../../../assets/user.jpg";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      {/* Action Buttons */}
      <div className="DAT_Header_Actions">
        {/* Notification */}
        <button className="DAT_Header_Btn">
          <FontAwesomeIcon icon={faBell} />
          <span className="DAT_Header_Btn_Badge" />
        </button>

        <div className="DAT_Header_Profile_Wrapper" ref={profileRef}>
          {/* Dropdown — bung xuống dưới */}
          {profileOpen && (
            <div className="DAT_Header_Profile_Dropdown">
              <div className="DAT_Header_Profile_Dropdown_Header">
                <img
                  className="DAT_Header_Profile_Dropdown_Avatar"
                  src={userAvatar}
                  alt="User picture"
                />
                <div className="DAT_Header_Profile_Dropdown_Info">
                  <span className="DAT_Header_Profile_Dropdown_Name">Alex Carter</span>
                  <span className="DAT_Header_Profile_Dropdown_Email">alex@solarpulse.io</span>
                </div>
              </div>
              <div className="DAT_Header_Profile_Dropdown_Divider" />
              <button className="DAT_Header_Profile_Dropdown_Item">
                <FontAwesomeIcon icon={faUser} />
                <span>Hồ sơ</span>
              </button>
              <div className="DAT_Header_Profile_Dropdown_Divider" />
              <button className="DAT_Header_Profile_Dropdown_Item DAT_Header_Profile_Dropdown_Item_Danger">
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Đăng xuất</span>
              </button>
            </div>
          )}

          {/* Profile Bar */}
          <div
            className={`DAT_Header_Profile${profileOpen ? " DAT_Header_Profile_Open" : ""}`}
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              className="DAT_Header_Profile_Avatar"
              src={userAvatar}
              alt="Alex Carter Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
