import React from 'react'

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const NextButton = ({setActiveStep, activeStep}:Props) => {
  return (
    <button onClick={() => setActiveStep(activeStep + 1)} className='bg-[#02295a] hover:bg-[#174a8b] text-[#fff] p-[0.4rem] text-[13px] w-[100px] rounded cursor-pointer transition' type='button'>Next Step</button>
  )
}

export const PrevButton = ({setActiveStep, activeStep}:Props) => {
  return (
    <button onClick={() => setActiveStep(activeStep - 1)} className='text-[#9699ab] hover:text-[#02295a] p-[0.4rem] text-[13px] font-bold w-[100px] rounded cursor-pointer transition' type='button'>Go back</button>
  )
}

export const ConfirmButton = () => {
  return (
    <button className='bg-[#473dff] hover:bg-[#174a8b] text-[#fff] p-[0.4rem] text-[13px] w-[100px] rounded cursor-pointer transition' type='button'>Confirm</button>
  )
}