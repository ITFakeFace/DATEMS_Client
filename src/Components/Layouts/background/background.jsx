import { Outlet } from "react-router-dom";
import "./background.scss";
export default function background() {
    return (
        <div className="DAT_Background">
            <div className="DAT_Background_Outside">
                <div className="DAT_Background_Outside_Content">
                    <Outlet>

                    </Outlet>
                </div>

            </div>
        </div>
    );
}