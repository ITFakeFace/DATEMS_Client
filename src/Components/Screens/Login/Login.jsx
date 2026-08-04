import { useState } from "react";
import "./Login.scss";

const emptyLoginUser = {
    username: null,
    password: null,
}

export default function Login() {
    const [loginUser, setLoginUser] = useState(emptyLoginUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(loginUser));
    }

    return (
        <div className="DAT_Login">
            <div className="DAT_Login_Border">
                <div className="DAT_Login_Border_Header">
                    <div className="DAT_Login_Border_Header_Greeting">
                        Welcome to
                    </div>
                    <div className="DAT_Login_Border_Header_Brand">
                        EMS
                    </div>
                </div>
                <form className="DAT_Login_Border_Body" onSubmit={handleSubmit}>
                    <div className="DAT_Login_Border_Body_Title">
                        Login
                    </div>

                    <div className="DAT_Login_Border_Body_Main" >

                        <div className="DAT_Login_Border_Body_Main_Username">

                            <input placeholder="Username" name="username" type="text" value={loginUser.username} onChange={(e) => setLoginUser({ ...loginUser, username: e.target.value })}></input>
                        </div>

                        <div className="DAT_Login_Border_Body_Main_Password">

                            <input placeholder="Password" name="password" type="password" value={loginUser.password} onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}></input>
                        </div>
                    </div>


                </form>
                <div className="DAT_Login_Border_AdditionalFunction">
                    <div>
                        <input type="checkbox" id="remember-me-checkbox" />
                        <label for="remember-me-checkbox">
                            Remember me
                        </label>
                    </div>

                    <a href="" >Forget password</a>
                </div>
                <div className="DAT_Login_Border_ButtonRow">
                    <button>Login</button>
                </div>

            </div>
        </div>
    );
}
