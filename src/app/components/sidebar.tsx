import React from "react";

const stepsArray = [
  {
    number: 1,
    description: "your info",
  },
  {
    number: 2,
    description: "select plan",
  },
  {
    number: 3,
    description: "add-ons",
  },
  {
    number: 4,
    description: "summary",
  },
];

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Sidebar = ({ setActiveStep, activeStep}: Props) => {
  return (
    <div className='bg-[url("/images/bg-sidebar-desktop.svg")] bg-contain bg-cover h-[100%] w-[27%] rounded-lg p-[1.5rem]'>
      {stepsArray.map((step) => (
        <div
          key={step.number}
          
          className="flex justify-start items-center gap-[10px] mb-[1rem] cursor-pointer"
        >
          <div
            className={`border border-[1px] border-[#bfe2fd] h-[35px] w-[35px] flex justify-center items-center rounded-[50%] text-[13px] ${
              activeStep === step.number
                ? "bg-[#bfe2fd] text-[#02295a]"
                : "text-[#bfe2fd]"
            } `}
          >
            {step.number}
          </div>
          <div>
            <p className="uppercase text-[13px] text-[#adbeff] font-thin">
              step {step.number}
            </p>
            <h1 className="uppercase font-bold text-white text-[14px]">
              {step.description}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
