import { useState } from "react";
import NotFound from "../NotFound/NotFound";
import Onboarding from "../Onboarding/Onboarding";

const HomeScreen = () => {
  const [
    isOnboardingComplete,
    setIsOnboardingComplete,
  ] = useState(false);

  const finishOnboarding = () =>
    setIsOnboardingComplete(true);
  return (
    <div className="App">
      {!isOnboardingComplete ? (
        <Onboarding
          finish={finishOnboarding}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default HomeScreen;
