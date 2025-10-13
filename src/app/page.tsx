"use client";

import { useState} from "react";
import type React from "react";

import { Info } from "./components/info";
import { Plan } from "./components/plan";
import { Sidebar } from "./components/sidebar";
import { Addon } from "./components/addon";
import { Summary } from "./components/summary";
import { Confirm } from "./components/confirm";

type FormErrors = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
};

type PlanTypes = {
  name: string;
  monthly: number;
  yearly: number;
  img: string;
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [isYearly, setIsYearly] = useState<boolean>(true);
  type Addon = { name: string; description: string; monthly: number; yearly: number };
  type FormData = { name: string; email: string; phoneNumber: string; plan: any; addOns: Addon[] };

  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    plan: {},
    addOns: [],
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "",
  });
  const handleNextStep = () => {
    const newErrors:FormErrors  = { name: "", email: "", phoneNumber: "", plan: "" };
    let isValid = true;

    if (activeStep === 1) {
      if (!formData.name) {
        newErrors.name = "This field is required";
        isValid = false;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
        isValid = false;
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "This field is required";
        isValid = false;
      }
    }

    if (activeStep === 2) {
      if (Object.keys(formData.plan).length === 0) {
        newErrors.plan = "Please select a plan";
        isValid = false;
      }
    }

    if (isValid) {
      if (activeStep < 4) {
        setActiveStep(activeStep + 1);
      }
    } else {
      setErrors({ ...errors, ...newErrors });
    }
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlanSelect = (planObject: PlanTypes) => {
    setFormData((prevData) => ({
      ...prevData,
      plan: planObject,
    }));
  };

  return (
    <div className="h-[100vh] bg-[#eef5ff] flex items-center justify-center">
      <div className="bg-white w-[55%] flex h-[70%] p-[1rem] rounded-lg">
        <Sidebar
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
        {activeStep === 1 && (
          <Info
            errors={errors}
            handleInfoChange={handleInfoChange}
            handleNextStep={handleNextStep}
          />
        )}
        {activeStep === 2 && (
          <Plan
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            selectedPlan={formData.plan}
            handlePlanSelect={handlePlanSelect}
            errors={errors}
             handleNextStep={handleNextStep}
          />
        )}
        {activeStep === 3 && (
          <Addon
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            isYearly={isYearly}
            setFormData={setFormData}
            formData={formData}
            handleNextStep={handleNextStep}
          />
        )}
        {activeStep === 4 && (
          <Summary
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            isYearly={isYearly}
            selectedPlan={formData.plan}
            selectedAddOn={formData.addOns}
          />
        )}
        {activeStep === 0 && (
          <Confirm setActiveStep={setActiveStep} activeStep={activeStep} />
        )}
      </div>
    </div>
  );
}
