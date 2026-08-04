import { useState } from "react";
import "./HomeScreen.scss";
import CustomSwitchInput from "./CustomSwitchInput";
import CustomGradientBorderButton from "./CustomGradientBorderButton";
import CustomCheckbox from "./CustomCheckbox";
import ExampleComponent from "../ExampleScreen/ExampleComponent";

const HomeScreen = () => {
  const [value, setValue] = useState(false);

  return (
    <div className={`DAT_HomeScreen`}>
      {/* <div>
        <div>{value ? "ON" : "OFF"}</div>
        <br />
        <br />
        <br />
        <CustomGradientBorderButton
          onClick={() => setValue(!value)}
          background="transparent"
          borderColor="linear-gradient(to right, #ff0000, #00ff00)"
          borderWidth="3px"
          borderRadius="10px"
        >
          Click Me
        </CustomGradientBorderButton>
        <br />
        <br />
        <br />
        <CustomSwitchInput value={value} onChange={() => setValue(!value)} />
        <br />
        <br />
        <br />
        <CustomCheckbox value={value} onChange={() => setValue(!value)} />
      </div> */}
      <ExampleComponent />
    </div>
  );
};

export default HomeScreen;
