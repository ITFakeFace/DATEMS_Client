import "./CustomGradientBorderButton.scss";

const CustomGradientBorderButton = ({
  onClick,
  children,
  background,
  borderColor,
  borderWidth,
  borderRadius,
}) => {
  return (
    <button
      onClick={onClick}
      className="DAT_CustomGradientBorderButton"
      style={{
        "--background": background,
        "--border-color": borderColor,
        "--border-width": borderWidth,
        "--border-radius": borderRadius,
      }}
    >
      {children}
    </button>
  );
};

export default CustomGradientBorderButton;
