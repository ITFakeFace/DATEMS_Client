import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHand
} from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
export default function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    function get() {
        if (username && password) {
            console.log({
                ten: username,
                mk: password
            })
        }
        else {
            alert("Hãy nhập mật khẩu và tên đăng nhập")
        }
    }

    return (
        <div className="DAT_Login">
            <div className="DAT_Login_Outside">
                <div className="DAT_Login_Outside_Border">
                    <div className="DAT_Login_Outside_Border_Title">
                        <div className="DAT_Login_Outside_Border_Title_Greeting">
                            Welcome to
                        </div>
                        <div className="DAT_Login_Outside_Border_Title_Logo">
                            Sollery
                        </div>
                    </div>
                    <div className="DAT_Login_Outside_Border_Main">
                        <div className="DAT_Login_Outside_Border_Main_Title">
                            LOGIN
                        </div>
                        <div className="DAT_Login_Outside_Border_Main_UsernamePassword">
                            <div className="DAT_Login_Outside_Border_Main_UsernamePassword_Username">
                                <input id="user" type="text" onChange={(e) => setusername(e.target.value)}  ></input>
                                <label for="user" className={username ? "active" : ""}>Username</label>
                            </div>
                            <div className="DAT_Login_Outside_Border_Main_UsernamePassword_Password">
                                <input type="text" id="pass" onChange={(e) => setpassword(e.target.value)} ></input>
                                <label for="pass" className={password ? "active" : ""}>Password</label>
                            </div>
                            <div className="DAT_Login_Outside_Border_Main_UsernamePassword_Btn">
                                <div className="DAT_Login_Outside_Border_Main_UsernamePassword_Btn_Remember">
                                    <input type="checkbox" id="checkbox"></input>
                                    <label for="checkbox" >Remember Me</label>
                                </div>
                                <div className="DAT_Login_Outside_Border_Main_UsernamePassword_Btn_Forget">
                                    <a href="" >Forget Password</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DAT_Login_Outside_Border_BtnLogin">
                        <button onClick={get}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}