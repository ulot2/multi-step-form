import React from "react";

type Boolean = {
    isYearly: Boolean,
    onToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToggleSwitch = ({ isYearly, onToggle }: Boolean) => {
  return (
    <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-center space-x-4 w-[100%] mt-[2rem]">
      <span
        onClick={() => onToggle(false)}
        className={`font-medium cursor-pointer transition-colors duration-300 ${
          isYearly ? "text-gray-500" : "text-blue-900"
        }`}
      >
        Monthly
      </span>
      <button
        type="button"
        onClick={() => onToggle(!isYearly)}
        className="relative w-12 h-5 flex items-center bg-blue-900 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
        aria-pressed={isYearly}
      >
        {/* <span className="sr-only">Toggle Pricing Plan</span> */}
        <span
          className={`absolute left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
            isYearly ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </button>
      <span onClick={() => onToggle(true)}
        className={`font-medium cursor-pointer transition-colors duration-300 ${
          isYearly ? "text-blue-900" : "text-gray-500"
        }`}>
        Yearly
      </span>
    </div>
  );
};
