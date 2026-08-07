import "./ForgetPasswordComponent.scss"
import { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa11ty";
export default function ForgetPasswordComponent() {
    const [current, setcurrent] = useState(0);
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    function moveUP() {
        setcurrent(current + 1);
    }
    const inputRef = useRef([]);
    function moveDown() {
        setcurrent(current - 1)
    }
    const ForgetPassStep1 = ({ email, setemail }) => {
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
                        <NavLink to="/Login" className="Step1_End_Choice_Nav">Login</NavLink>
                    </div>
                </div>
            </div>
        );
    };
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const InputOTP = (e, index) => {
        const value = e.target.value;

        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        requestAnimationFrame(() => {
            if (value !== "" && index < otp.length - 1) {

                inputRef.current[index + 1]?.focus();
            } else if (value === "") {

                inputRef.current[index]?.focus();
            }
        });
    };
    const BackOTP = (e, index) => {
        if (
            e.key === "Backspace" &&
            otp[index] === "" &&
            index > 0
        ) {
            e.preventDefault();

            inputRef.current[index - 1]?.focus();
        }
    };
    const ForgetPassStep2 = ({ email }) => {
        return (
            <div className="Step2">
                <div className="Step2_Chart">
                    <span id="circle_finish"> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>
                    <span id="rec_finish"></span>
                    <span id="circle_current">2</span>
                    <span id="rec"></span>
                    <span id="circle">3</span>
                </div>
                <div className="Step2_Header">
                    <div className="Step2_Header_Title">
                        GET YOUR CODE
                    </div>
                    <div className="Step2_Header_Suggest">
                        Please enter the 6 digit code that send to your email address
                    </div>
                </div>
                <form>
                    <div className="Step2_Digit">
                        <div className="Step2_Digit_Otp">
                            {otp.map((item, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRef.current[index] = el)}
                                    maxLength={1}
                                    value={item}
                                    onChange={(e) => InputOTP(e, index)}
                                    onKeyDown={(e) => BackOTP(e, index)}
                                />
                            ))}
                        </div>
                    </div>
                </form>
                <div className="Step2_End">
                    <div className="Step2_End_Resend">
                        if you don't receiced!
                        <NavLink>Resend</NavLink>
                    </div>
                    <div className="Step2_End_Button">
                        <button onClick={moveUP}>Recover Password</button>
                    </div>
                    <div className="Step2_End_Another">
                        <span onClick={moveDown}>Try another account!</span>
                    </div>
                </div>
            </div>
        );
    };
    const ForgetPassStep3 = ({ pass, setpass }) => {
        return (
            <div className="Step3">
                <div className="Step3_Chart">
                    <span id="circle_finish"> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>
                    <span id="rec_finished"></span>
                    <span id="circle_finish"> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>
                    <span id="rec_finish"></span>
                    <span id="circle_current">3</span>
                </div>
                <div className="Step3_Header">
                    <div className="Step3_Header_Title">
                        ENTER NEW PASSWORD
                    </div>
                    <div className="Step3_Header_Suggest">
                        Your new password must be different from previously used password
                    </div>
                </div>
                <div className="Step3_Body">
                    <div className="Step3_Body_Password">
                        <span>NEW PASSWORD</span>
                        <div className="Step3_Body_Password_Border">
                            <input type="password" placeholder="Password"></input>
                        </div>

                    </div>
                    <div className="Step3_Body_Confirm">
                        <span>CONFIRM PASSWORD</span>
                        <div className="Step3_Body_Confirm_Border">
                            <input type="password" placeholder="Confirm Password"></input>
                        </div>
                    </div>
                    <div className="Step3_Body_Button">
                        <NavLink to="/login">
                            <button>CONTINUE</button>
                        </NavLink>
                        <span onClick={() => setcurrent(0)}>BACK TO STEP 1</span>
                    </div>
                </div>
            </div >
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
                            <ForgetPassStep1
                            />
                        </div>
                        <div className="DAT_ForgetPasswordComponent_Body_Border_Box_nd2">
                            <ForgetPassStep2 email={email} />
                        </div>
                        <div className="DAT_ForgetPasswordComponent_Body_Border_Box_nd3">
                            <ForgetPassStep3 email={email} />
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}



