// src/components/Onboarding.tsx
import React, { useState } from "react";
import {
  animated,
  useSpring,
} from "react-spring";
import { useSwipeable } from "react-swipeable";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";

interface OnboardingProps {
  finish: () => void;
}

const Onboarding: React.FC<
  OnboardingProps
> = ({ finish }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const finishOnboarding = () => {
    setStep(1); // Reset step if needed
    finish();
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextStep,
    onSwipedRight: prevStep,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const transitions = useSpring({
    transform: `translateX(${
      (step - 1) * -100
    }%)`,
  });

  return (
    <div
      {...handlers}
      className="onboarding-container"
    >
      <animated.div
        style={{
          display: "flex",
          width: "300%",
          transform:
            transitions.transform,
        }}
      >
        <div className="onboarding-step">
          <OnboardingStep1
            nextStep={nextStep}
          />
        </div>
        <div className="onboarding-step">
          <OnboardingStep2
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
        <div className="onboarding-step">
          <OnboardingStep3
            finish={finishOnboarding}
          />
        </div>
      </animated.div>
    </div>
  );
};

export default Onboarding;
