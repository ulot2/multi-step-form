import React from "react";
import { ConfirmButton, PrevButton } from "../ui/button";

export const Summary = ({ setActiveStep, activeStep, isYearly, setIsYearly }) => {
  return (
    <div className="w-[70%] pt-7 px-10">
      <h1 className="text-[#02295a] font-bold text-2xl">Finishing up</h1>
      <p className="text-[#9699ab] text-[13px] mt-[0.2rem] mb-[1rem]">
        Double-check everything looks OK before confirming
      </p>
      <div className="relative pb-25">
        <div className="bg-[#f0f5ff] p-5 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#02295a] font-bold text-[14px]">
                Arcade (<span>{isYearly ? "Yearly" : "Monthly"}</span>)
              </h1>
              <button
                type="button"
                className="text-[#9699ab] hover:text-[#473dff] text-[13px] underline cursor-pointer transition"
                onClick={() => setActiveStep(activeStep - 2)}
              >
                Change
              </button>
            </div>
            <span className="text-[#02295a] font-bold text-[14px]">${isYearly ? "90/yr":"9/mo"}</span>
          </div>
          <hr className="mt-[1.1rem] border border-[#d6d9e6]" />
          <div className="flex justify-between mt-[0.8rem]">
            <p className="text-[#9699ab] text-[13px]">Online service</p>
            <span className="text-[#02295a] text-[13px] font-semibold">
              +${isYearly ? "10/yr":"1/mo"}
            </span>
          </div>
          <div className="flex justify-between mt-[0.8rem]">
            <p className="text-[#9699ab] text-[13px]">Larger storage</p>
            <span className="text-[#02295a] text-[13px] font-semibold">
              +${isYearly ? "20/yr":"2/mo"}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-[0.8rem] m-auto w-[90%]">
          <p className="text-[#9699ab] text-[13px]">
            Total (<span>{isYearly ? "per year" : "per month"}</span>)
          </p>
          <span className="text-[#473dff] text-[16px] font-semibold">
            +${isYearly ? "120/yr":"12/mo"}
          </span>
        </div>
        <div className="absolute bottom-5 left-0 right-0 flex justify-between">
          <PrevButton setActiveStep={setActiveStep} activeStep={activeStep} />
          <ConfirmButton />
        </div>
      </div>
    </div>
  );
};
