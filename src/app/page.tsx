"use client";

import { useState } from "react";
import { Info } from "./components/info";
import { Plan } from "./components/plan";
import { Sidebar } from "./components/sidebar";
import { Addon } from "./components/addon";
import { Summary } from "./components/summary";

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [isYearly, setIsYearly] = useState<Boolean>(true);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [selectedAddOn, setSelectedAddOn] = useState([]);

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
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        )}
        {activeStep === 3 && (
          <Addon
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            isYearly={isYearly}
            selectedAddOn={selectedAddOn}
            setSelectedAddOn={setSelectedAddOn}
          />
        )}
        {activeStep === 4 && (
          <Summary
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            isYearly={isYearly}
            selectedPlan={selectedPlan}
            selectedAddOn={selectedAddOn}
            setSelectedAddOn={setSelectedAddOn}
          />
        )}
      </div>
    </div>
  );
}
