"use client";

import { useState } from "react";
import { Info } from "./components/info";
import { Plan } from "./components/plan";
import { Sidebar } from "./components/sidebar";
import { Addon } from "./components/addon";

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [isYearly, setIsYearly] = useState<Boolean>(true);

  return (
    <div className="h-[100vh] bg-[#eef5ff] flex items-center justify-center">
      <div className="bg-white w-[55%] flex h-[70%] p-[1rem] rounded-lg">
        <Sidebar setActiveStep={setActiveStep} activeStep={activeStep} />
        {activeStep === 1 && (
          <Info setActiveStep={setActiveStep} activeStep={activeStep} />
        )}
        {activeStep === 2 && (
          <Plan
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
          />
        )}
        {activeStep === 3 && <Addon setActiveStep={setActiveStep}
            activeStep={activeStep} isYearly={isYearly}
            setIsYearly={setIsYearly} />}
      </div>
    </div>
  );
}
