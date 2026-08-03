import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomCheckbox.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CustomCheckbox = ({
  value,
  onChange,
  className,
  size,
  activeBackground,
  inactiveBackground,
  borderColor,
}) => {
  return (
    <div
      className={`DAT_CustomCheckbox ${value ? "active" : ""} ${className}`}
      style={{
        "--width": size,
        "--active-background": activeBackground,
        "--inactive-background": inactiveBackground,
        "--border-color": borderColor,
      }}
      onClick={onChange}
    >
      {value && (
        <FontAwesomeIcon icon={faCheck} className="DAT_CustomCheckbox_Icon" />
      )}
    </div>
  );
};

export default CustomCheckbox;
