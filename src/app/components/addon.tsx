import React from "react";
import { NextButton, PrevButton } from "../ui/button";

const addOns = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

type Addon = {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
}

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: any;
  addOns: Addon[];
}

interface Props {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  isYearly: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleNextStep: () => void;
}

export const Addon = ({ setActiveStep, activeStep, isYearly, formData, setFormData, handleNextStep}: Props) => {

  return (
    <div className="lg:w-[70%] pt-7 px-10 bg-white rounded-lg lg:rounded-none top-[9rem] left-[1rem] right-[1rem] lg:m-[0] absolute lg:static">
      <h1 className="text-[#02295a] font-bold text-2xl">Pick add-ons</h1>
      <p className="text-[#9699ab] text-[13px] mt-[0.2rem] mb-[1rem]">
        Add-ons help enhance your gaming experience
      </p>
      <div className="relative pb-19">
        <form>
          <div>
            {addOns.map((addOn) => {
              const isAlreadySelected = !!formData.addOns.find((item) => item.name === addOn.name)
              
              const handleAddOnSelect = () => {
                setFormData(prevData => {
                const isCurrentlySelected = !!prevData.addOns.find((item) => item.name === addOn.name)
                if (isCurrentlySelected) {
                  return {
                    ...prevData,
                    addOns: prevData.addOns.filter((item) => item.name !== addOn.name)
                  }
                } else {
                  return {
                    ...prevData,
                    addOns: [...prevData.addOns, addOn]
                  }
                }
              })
              }

              return (
                <div key={addOn.name} className="mb-[1rem]">
                <label className="flex justify-between items-center outline outline-[#9699ab] hover:outline-[#473dff] has-[:checked]:outline-[#473dff] has-[:checked]:bg-[#fafbff] transition rounded-sm p-[10px] cursor-pointer">
                  <div className="flex gap-[10px] ml-[0.7rem]">
                    <input className="cursor-pointer" type="checkbox" name={addOn.name} id={addOn.name} checked={isAlreadySelected} onChange={handleAddOnSelect} />
                    <div>
                      <h6 className="text-[#02295a] font-bold text-[14px]">
                        {addOn.name}
                      </h6>
                      <p className="text-[#9699ab] text-[13px]">
                        {addOn.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#473dff] text-[13px]">
                    {isYearly ? addOn.yearly + "/yr" : addOn.monthly + "/mo"}
                  </p>
                </label>
              </div>
              )
            } )}
          </div>
        </form>
        <div className="absolute bottom-5 left-0 right-0 flex justify-between">
          <PrevButton setActiveStep={setActiveStep} activeStep={activeStep} />
          <NextButton handleNextStep={handleNextStep} />
        </div>
      </div>
    </div>
  );
};
