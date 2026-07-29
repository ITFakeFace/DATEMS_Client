import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHand
} from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import Background from "../../Layouts/background/background"
export default function Login() {
    // const [username, setusername] = useState("");
    // const [password, setpassword] = useState("");
    // function get() {
    //     if (username && password) {
    //         console.log({
    //             ten: username,
    //             mk: password
    //         })
    //     }
    //     else {
    //         alert("Hãy nhập mật khẩu và tên đăng nhập")
    //     }
    // }

    return (
        <div className="DAT_Login">
            <div className="DAT_Login_Title">
                <div className="DAT_Login_Title_Greeting">
                    Welcome to
                </div>
                <div className="DAT_Login_Title_EMS">
                    EMS
                </div>

                <div className="DAT_Login_Title_Login">
                    Login
                </div>
            </div>

            <div className="DAT_Login_Main">
                <div className="DAT_Login_Main_Username">
                    <div className="DAT_Login_Main_Username_Input">
                        {/* <input placeholder="Username"></input> */}
                    </div>
                </div>
            </div>
        </div>

    );
}