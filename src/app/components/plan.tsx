"use client";

import Image from "next/image";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { NextButton, PrevButton } from "../ui/button";
import type { PlanTypes } from "../types/form";

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

type Errors = {
  plan?: string;
};

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan?: PlanTypes;
  handlePlanSelect: (plan: PlanTypes) => void;
  errors: Errors;
  handleNextStep: () => void;
};

export const Plan = ({
  setActiveStep,
  activeStep,
  isYearly,
  setIsYearly,
  selectedPlan,
  handlePlanSelect,
  errors,
  handleNextStep,
}: Props) => {
  return (
    <div className="lg:w-[70%] pt-7 px-10 bg-white rounded-lg lg:rounded-none top-[9rem] left-[1rem] right-[1rem] lg:m-[0] absolute lg:static" >
      <h1 className="text-[#02295a] font-bold text-2xl">Select your plan</h1>
      <p className="text-[#9699ab] text-[13px] mt-[0.2rem] mb-[1rem]">
        You have the option of monthly or yearly billing
      </p>
      <div className={`relative ${isYearly ? "pb-23" : "pb-27"}`}>
        <form>
          <div className="flex flex-col lg:flex-row gap-[3%] lg:w-full">
            {plans.map((plan) => (
              <div key={plan.name}>
                <label
                  htmlFor={plan.name}
                  className="flex lg:mb-[0px] mb-[13px]  outline outline-[#d6d9e6] hover:outline-[#473dff] has-[:checked]:bg-[#fafbff] has-[:checked]:outline-[#473dff] lg:w-[122px] pl-[0.5rem] p-[0.5rem] lg:p-[1rem]   rounded  cursor-pointer transition"
                >
                  <div className="flex lg:flex-col justify-start items-center lg:items-start lg:gap-[0] gap-[10px]">
                    <Image
                      src={plan.img}
                      width={30}
                      height={30}
                      alt="icon-arcade"
                      className="lg:mb-[2rem]"
                    />
                    <div>
                      <input
                        className="appearance-none sr-only"
                        type="radio"
                        name="planType"
                        id={plan.name}
                        checked={selectedPlan?.name === plan.name}
                        onChange={() => handlePlanSelect(plan)}
                      />

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
          <NextButton handleNextStep={handleNextStep} />
        </div>
      </div>
    </div>
  );
};
