import { useRef, useState } from "react";
import "./ExampleComponent.scss";

const ExampleContent1 = ({ email }) => {
  return (
    <div className="DAT_ExampleComponent_ContentContainer_Box_Item Item1">
      Content for Step 1
    </div>
  );
};

const ExampleContent2 = ({ email }) => {
  return (
    <div className="DAT_ExampleComponent_ContentContainer_Box_Item Item2">
      Content for Step 2
    </div>
  );
};

const ExampleContent3 = () => {
  return (
    <div className="DAT_ExampleComponent_ContentContainer_Box_Item Item3">
      Content for Step 3
    </div>
  );
};

const ExampleComponent = () => {
  const [step, setStep] = useState(1);
  const contentRef = useRef(null);
  const [email, setEmail] = useState("");

  const handleStepChange = (newStep) => {
    setStep(newStep);
    if (contentRef.current) {
      contentRef.current.style.setProperty("--current-step", newStep);
    }
  };

  return (
    <div className="DAT_ExampleComponent">
      <div>Step {step}</div>
      <button onClick={() => handleStepChange(Math.max(1, step - 1))}>
        Previous Step
      </button>
      <button onClick={() => handleStepChange(Math.min(3, step + 1))}>
        Next Step
      </button>
      <div className="DAT_ExampleComponent_ContentContainer">
        <div
          ref={contentRef}
          className="DAT_ExampleComponent_ContentContainer_Box"
        >
          <ExampleContent1 email={email} />
          <ExampleContent2 email={email} />
          <ExampleContent3 />
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
