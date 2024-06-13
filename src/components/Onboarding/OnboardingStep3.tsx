// src/components/OnboardingStep3.tsx
import React from "react";

interface OnboardingStepProps {
  finish: () => void;
}

const OnboardingStep3: React.FC<
  OnboardingStepProps
> = ({ finish }) => {
  return (
    <div className="onboarding-step-content">
      <h2>You're All Set!</h2>
      <p>
        You're ready to start using
        MyApp.
      </p>
      <button onClick={finish}>
        Finish
      </button>
    </div>
  );
};

export default OnboardingStep3;
