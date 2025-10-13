"use client";

import Image from "next/image";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { NextButton, PrevButton } from "../ui/button";

const plans = [
  {
    name: "Arcade",
    monthly: 9,
    yearly: 90,
    img: "/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    img: "/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    monthly: 15,
    yearly: 150,
    img: "/images/icon-pro.svg",
  },
];

type PlanType = {
  name: string;
  monthly: number;
  yearly: number;
  img: string;
};

type Errors = {
  plan?: string;
};

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Partial<PlanType>;
  handlePlanSelect: (plan: PlanType) => void;
  errors: Errors;
  handleNextStep: () => void;
};

export const Plan = ({
  setActiveStep,
  activeStep,
  isYearly,
  setIsYearly, selectedPlan, handlePlanSelect, errors, handleNextStep
}: Props) => {

  return (
    <div className="w-[70%] pt-7 px-10">
      <h1 className="text-[#02295a] font-bold text-2xl">Select your plan</h1>
      <p className="text-[#9699ab] text-[13px] mt-[0.2rem] mb-[1rem]">
        You have the option of monthly or yearly billing
      </p>
      <div className={`relative ${isYearly ? "pb-23" : "pb-27"}`}>
        <form>
          <div className="flex gap-[3%] w-full">
            {plans.map((plan) => (
              <div key={plan.name}>
                <label
                  htmlFor={plan.name}
                  className="flex flex-col gap-[8px] outline outline-[#d6d9e6] hover:outline-[#473dff] has-[:checked]:bg-[#fafbff] has-[:checked]:outline-[#473dff] w-[122px] pl-[0.5rem] py-[1rem] rounded  cursor-pointer transition"
                >
                  <Image
                    src={plan.img}
                    width={30}
                    height={30}
                    alt="icon-arcade"
                  />
                  <input
                    className="appearance-none"
                    type="radio"
                    name="planType"
                    id={plan.name}
                    checked={selectedPlan.name === plan.name}
                    onChange={() => handlePlanSelect(plan)}
                  />
                  <div>
                    <h5 className="font-bold text-[#02295a]">{plan.name}</h5>
                    <p className="text-[#9699ab] text-[14px]">
                      ${isYearly ? plan.yearly + "/yr" : plan.monthly + "/mo"}
                    </p>
                    {isYearly && (
                      <p className="text-[#02295a] text-xs font-medium mt-1">
                        2 months free
                      </p>
                    )}
                  </div>
                </label>
              </div>
            ))}
          </div>
          <ToggleSwitch isYearly={isYearly} onToggle={setIsYearly} />
          <p className="text-[red] text-[12px]">{errors.plan}</p>
          
        </form>
        <div className="absolute bottom-5 left-0 right-0 flex justify-between">
          <PrevButton setActiveStep={setActiveStep} activeStep={activeStep} />
          <NextButton handleNextStep={handleNextStep}/>
        </div>
      </div>
    </div>
  );
};
