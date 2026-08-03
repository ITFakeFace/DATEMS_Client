import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomSwitchInput.scss";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const CustomSwitchInput = ({
  value,
  onChange,
  className,
  paddingSpace,
  size,
  activeBackground,
  inactiveBackground,
}) => {
  return (
    <div
      className={`DAT_CustomSwitchInput ${value ? "active" : ""} ${className}`}
      style={{
        "--padding-space": paddingSpace,
        "--button-width": size,
        "--active-background": activeBackground,
        "--inactive-background": inactiveBackground,
      }}
      onClick={onChange}
    >
      <div className={`DAT_CustomSwitchInput_Switch ${value ? "active" : ""}`}>
        <FontAwesomeIcon
          icon={value ? faCheck : faX}
          className="DAT_CustomSwitchInput_Switch_Icon"
        />
      </div>
    </div>
  );
};

export default CustomSwitchInput;
