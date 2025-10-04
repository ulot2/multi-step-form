import React from 'react'
import { NextButton } from '../ui/button'

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const Info = ({setActiveStep, activeStep}:Props) => {
  return (
    <div className='pt-7 px-12' id='info'>
        <h1 className='text-[#02295a] font-bold text-2xl'>Personal info</h1>
        <p className='text-[#9699ab] text-[13px] mt-[0.2rem] mb-[1rem]'>Please provide your name, email address, and phone number</p>
        <div>
            <form>
                <div className='mb-[1rem]'>
                    <label className='block mb-[0.3rem] text-[#02295a]' htmlFor="name">Name</label>
                    <input className='outline-[1px] outline-[#d6d9e6] focus-within:outline focus-within:outline-[#473dff] hover:outline-[#473dff] text-[#02295a] font-bold transition cursor-pointer rounded w-full pl-[0.7rem] py-[0.2rem] placeholder:text-[13px]' type="text" placeholder='e.g. Stephen King' />
                </div>
                <div className='mb-[1rem]'>
                    <label className='block mb-[0.3rem] text-[#02295a]' htmlFor="email">Email Address</label>
                    <input className='outline-[1px] outline-[#d6d9e6] focus-within:outline focus-within:outline-[#473dff] hover:outline-[#473dff] text-[#02295a] font-bold transition cursor-pointer rounded w-full pl-[0.7rem] py-[0.2rem] placeholder:text-[13px]' type="email" placeholder='e.g. loremipsum@lorem.com' />
                </div>
                <div className='mb-[1rem]'>
                    <label className='block mb-[0.3rem] text-[#02295a]' htmlFor="phone-number">Phone number</label>
                    <input className='outline-[1px] outline-[#d6d9e6] focus-within:outline focus-within:outline-[#473dff] hover:outline-[#473dff] text-[#02295a] font-bold transition cursor-pointer rounded w-full pl-[0.7rem] py-[0.2rem] placeholder:text-[13px]' type="number" placeholder='e.g. +234 567 876 890' />
                </div>
            </form>
            <div className='flex justify-end mt-[4rem]'>
                <NextButton setActiveStep = {setActiveStep} activeStep={activeStep} />
            </div>
        </div>
    </div>
  )
}
