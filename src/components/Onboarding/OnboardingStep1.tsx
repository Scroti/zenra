// src/components/OnboardingStep1.tsx
import React from "react";

interface OnboardingStepProps {
  nextStep: () => void;
}

const OnboardingStep1: React.FC<
  OnboardingStepProps
> = ({ nextStep }) => {
  return (
    <div className="onboarding-step-content">
      <h2>Welcome to MyApp</h2>
      <p>
        Let's get you started with a
        quick tour.
      </p>
      <button onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default OnboardingStep1;
