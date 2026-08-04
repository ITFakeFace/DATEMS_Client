import "./ForgetPasswordComponent.scss"
import { useState } from "react";
export default function ForgetPasswordComponent() {
    const [current, setcurrent] = useState(0);
    const [email, setemail] = useState("");
    function moveUP() {
        setcurrent(current + 1)
    }
    function moveDown() {
        setcurrent(current - 1)
    }
    const ForgetPassStep1 = ({ email }) => {
        return (
            <div className="Step1">
                <div className="Step1_Chart">
                    <span id="circle_current">1</span>
                    <span id="rec"></span>
                    <span id="circle">2</span>
                    <span id="rec"></span>
                    <span id="circle">3</span>
                </div>
                <div className="Step1_Header">
                    <div className="Step1_Header_Title">
                        FIND YOUR ACCOUNT
                    </div>
                    <div className="Step1_Header_Suggest">
                        Enter the email address associated with your account
                    </div>
                </div>
                <form>
                    <div className="Step1_Email">
                        <div className="Step1_Email_Input">
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} ></input>
                        </div>
                    </div>
                </form>
                <div className="Step1_End">
                    <button onClick={moveUP}>RECOVER PASSWORD</button>
                    <div className="Step1_End_Choice">
                        Remember it?
                        <span> Login</span>
                    </div>
                </div>
            </div>
        );
    };
    const ForgetPassStep2 = ({ email }) => {
        return (
            <>
                hello
                <button onClick={moveUP}>Go</button>
                <button onClick={moveDown}>Bakc</button>
            </>
        );
    };
    const ForgetPassStep3 = ({ email }) => {
        return (
            <>
                hello
            </>
        );
    };
    return (
        <div className="DAT_ForgetPasswordComponent">
            <div className="DAT_ForgetPasswordComponent_Title">
                FORGET PASSWORD
            </div>
            <div className="DAT_ForgetPasswordComponent_Body">
                <div className="DAT_ForgetPasswordComponent_Body_Border">
                    <div className="DAT_ForgetPasswordComponent_Body_Border_Box"
                        style={{ '--step': current }}>
                        <div className="DAT_ForgetPasswordComponent_Body_Border_Box_nd1">
                            <ForgetPassStep1 />
                        </div>
                        <div className="DAT_ForgetPasswordComponent_Body_Border_Box_nd2">
                            <ForgetPassStep2 />
                        </div>
                        <div className="DAT_ForgetPasswordComponent_Body_Border_Box_nd3">
                            dit me may
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}