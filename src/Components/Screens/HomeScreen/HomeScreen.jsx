import { useState } from "react";
import "./HomeScreen.scss";
import CustomSwitchInput from "./CustomSwitchInput";
import CustomGradientBorderButton from "./CustomGradientBorderButton";

const HomeScreen = () => {
  const [value, setValue] = useState(false);

  return (
    <div className={`DAT_HomeScreen`}>
      <div>
        <div>{value ? "ON" : "OFF"}</div>
        <CustomGradientBorderButton
          onClick={() => setValue(!value)}
          background="transparent"
          borderColor="linear-gradient(to right, #ff0000, #00ff00)"
          borderWidth="3px"
          borderRadius="10px"
        >
          Click Me
        </CustomGradientBorderButton>
        <CustomSwitchInput value={value} onChange={() => setValue(!value)} />
      </div>
    </div>
  );
};

export default HomeScreen;
