import React from 'react'

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

type NextButton = {
   handleNextStep: () => void;
}

type ConfirmButtonProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const NextButton = ({handleNextStep}:NextButton) => {

  return (
    <button onClick={handleNextStep} className='bg-[#02295a] hover:bg-[#174a8b] text-[#fff] p-[0.4rem] text-[13px] w-[100px] rounded cursor-pointer transition' type='button'>Next Step</button>
  )
}

export const PrevButton = ({setActiveStep, activeStep}:Props) => {
  return (
    <button onClick={() => setActiveStep(activeStep - 1)} className='text-[#9699ab] hover:text-[#02295a] p-[0.4rem] text-[13px] font-bold w-[100px] rounded cursor-pointer transition' type='button'>Go back</button>
  )
}

export const ConfirmButton = ({setActiveStep}:ConfirmButtonProps) => {
  return (
    <button onClick={() => setActiveStep(0)} className='bg-[#473dff] hover:bg-[#174a8b] text-[#fff] p-[0.4rem] text-[13px] w-[100px] rounded cursor-pointer transition' type='button'>Confirm</button>
  )
}