// src/components/OnboardingStep2.tsx
import React from "react";

interface OnboardingStepProps {
  nextStep: () => void;
  prevStep: () => void;
}

const OnboardingStep2: React.FC<
  OnboardingStepProps
> = ({ nextStep, prevStep }) => {
  return (
    <div className="onboarding-step-content">
      <h2>Feature Highlight</h2>
      <p>
        Here you can learn about feature
        X.
      </p>
      <button onClick={prevStep}>
        Back
      </button>
      <button onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default OnboardingStep2;
