import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faWind,
    faBolt,
    faCloud,
    faDollarSign,
    faLeaf,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import logo from "../../../assets/DAT_Logo.png";
export default function Login() {
    return (
        <div className="DAT_Login">
            <div className="DAT_Login_Table">
                <div className="DAT_Login_Table_Title">
                    <img src={logo}></img>
                    <p>DAT</p>
                </div>
            </div>
        </div>
    );
}