import "./Login2.scss"
import Background from "../../Layouts/background/background"

export default function Login2() {
    return (
        <div className="DAT_Login">
            <div className="DAT_Login_Header">
                <div className="DAT_Login_Header_Greeting">
                    Welcome to
                </div>
                <div className="DAT_Login_Header_Brand">
                    EMS
                </div>
            </div>

            <div className="DAT_Login_Body">
                <div className="DAT_Login_Body_Title">
                    LOGIN
                </div>
                <div className="DAT_Login_Body_Username">
                    <div className="DAT_Login_Body_Username_Input">
                        <input type="text" placeholder="Username"></input>
                    </div>
                </div>
                <div className="DAT_Login_Body_Password">
                    <div className="DAT_Login_Body_Password_Input">
                        <input type="text" placeholder="Password"></input>
                    </div>
                </div>
                <div className="DAT_Login_Body_Foot">
                    <div className="DAT_Login_Body_Foot_Check">
                        <input type="checkbox"></input>
                        <span>Remember me</span>
                    </div>
                    <div className="DAT_Login_Body_Foot_Forget">
                        <a href="">FORGET PASSWORD</a>
                    </div>
                </div>
            </div>
            <div className="DAT_Login_Foot">
                <button>LOGIN</button>
            </div>
        </div>
    );

}